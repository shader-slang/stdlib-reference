// Fix for IE. Make sure String has `startsWith` method.
if (!String.prototype.startsWith)
{
    String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
    };
}

var tocColumn = document.getElementById("tocColumn");
var rightColumn = document.getElementById("rightColumn");
function updateScroll()
{
    if (window.innerWidth < 700)
    {
    tocColumn.style.height = "";
    return;
    }
    var top = Math.max(0, rightColumn.getBoundingClientRect().top);
    tocColumn.style.top = top + "px";
    tocColumn.style.height = (window.innerHeight-top) + "px";
}
function updatePosition()
{
    if (window.innerWidth > 700)
    tocColumn.style.display = "";
    tocColumn.style.left = rightColumn.getBoundingClientRect().left + "px";
    updateScroll();
}
window.addEventListener("resize", updatePosition);
updatePosition();

var tocScrollContainer = document.getElementById("tocScrollContainer");

var tocItemsArray = [];
var subSectionItems = [];
var selectedItem = null;
function toggleTOC(event) {
    if (tocColumn.style.display == "block")
        tocColumn.style.display = "none";
    else
    tocColumn.style.display = "block";
}
function expandItem(e) {
    if (e == selectedItem)
    e.style["font-weight"] = "bold";
    var childList = e.getElementsByClassName("toc_list");
    if (childList.length == 0)
    return;
    childList[0].style.display = "block";
    childList[0].style["font-weight"] = "normal";
    e.setAttribute("class", "toc_item toc_item_expanded");
}
function collapseItem(e) {
    var childList = e.getElementsByClassName("toc_list");
    if (childList.length == 0)
    return;
    childList[0].style.display = "none";
    e.setAttribute("class", "toc_item toc_item_collapsed");
}
function tocSpanOnClick(event)
{
    if (event.srcElement != null && event.srcElement.parentElement != null)
    {
    var link = event.srcElement.parentElement.getAttribute("data-link");
    if (link != null)
    {
        var poundIndex = link.indexOf("#");
        if (poundIndex == -1)
        window.location.href = link + ".html";
        else
        window.location.href = link.substr(0, poundIndex) + ".html#" + link.substr(poundIndex+1, link.length - poundIndex - 1);
    }
    }
    event.stopPropagation();
}
function tocItemOnClick(event)
{
    if (event.srcElement == null) return;
    // Toggle expanded/collapsed state.
    if (event.srcElement.getAttribute("class").endsWith("toc_item_collapsed"))
    expandItem(event.srcElement);
    else if (event.srcElement.getAttribute("class").endsWith("toc_item_expanded"))
    collapseItem(event.srcElement);
    event.stopPropagation();
}
var path = window.location.pathname;
if (!path.endsWith(".html"))
{
    if (!path.endsWith("/"))
    path += "/";
    path += "index.html";
}
var firstSlash = path.indexOf("/");
if (firstSlash == -1)
    firstSlash = path.length();
var pageName = path.substring(firstSlash);
var dotLoc = pageName.lastIndexOf(".");
var currentPageID = pageName.substring(0, dotLoc);

var tocLists = document.getElementsByClassName("toc_root_list");
for (var i = 0; i < tocLists.length; i++) {
    var tocList = tocLists[i];
    var items = tocList.getElementsByTagName("li")
    for (var j = 0; j < items.length; j++)
    tocItemsArray.push(items[j]);
}

var findItem = function(pageID) {
    for (var i = 0; i < tocItemsArray.length; i++) {
    var item = tocItemsArray[i];
    if (item.getAttribute("data-link") == pageID)
        return item;
    }
    return null;
};

for (var i = 0; i < tocItemsArray.length; i++) {
    var item = tocItemsArray[i];
    if (item.getElementsByTagName("li").length != 0) {
    collapseItem(item);
    }
    else {
    item.setAttribute("class", "toc_item toc_item_leaf");
    }
    item.addEventListener("click", tocItemOnClick);
    var innerSpan = item.getElementsByTagName("span");
    if (innerSpan.length != 0)
    {
    innerSpan[0].addEventListener("click", tocSpanOnClick);
    innerSpan[0].setAttribute("class", "toc_span");
    }
}

selectedItem = findItem(currentPageID);
if (selectedItem == null)
{
    selectedItem = findItem(currentPageID.substring(0, currentPageID.lastIndexOf("/index")));
}
if (selectedItem == null)
    selectedItem = tocItemsArray[0];
var curItem = selectedItem;
while (curItem != null) {
    expandItem(curItem);
    curItem = curItem.parentElement;
    if (curItem != null && curItem.getAttribute("class") != null &&
    curItem.getAttribute("class").startsWith("toc_list"))
    curItem = curItem.parentElement;
    if (curItem != null && curItem.getAttribute("class") != null &&
    curItem.getAttribute("class").startsWith("toc_root_list"))
    break;
}
// Restore scrollbar position.
window.onbeforeunload = function() {
    window.name = tocScrollContainer.scrollTop.toString();
};
if (window.name != null)
{
    var lastScrollPosition = parseInt(window.name);
    tocScrollContainer.scroll(0, lastScrollPosition);
}
// Ensure the selected item is visible.
if (selectedItem != null)
{
    // is selectedItem visible?
    var visible = selectedItem.getBoundingClientRect().y >= 0 && 
    selectedItem.getBoundingClientRect().bottom <= tocScrollContainer.getBoundingClientRect().height;
    if (!visible)
    selectedItem.scrollIntoView(true);
}
var subItems = selectedItem.getElementsByTagName("li");
var subSectionTitles = [];
var subSectionTitleStrs = [];
for (var i = 0; i < subItems.length; i++)
{
    subSectionItems.push(subItems[i]);
    var title = subItems[i].getAttribute("data-link");
    var pos = title.lastIndexOf("#");
    title = title.substr(pos + 1);
    var element = document.getElementById(title);
    subSectionTitles.push(element);
    subSectionTitleStrs.push(title);
}
subSectionTitles.push(document.getElementById("_content_end_"));
function isSectionFullyVisible(id)
{
    var titleElement = subSectionTitles[id];
    if (titleElement == null)
    return false;
    var nextTitleElement = subSectionTitles[id+1];
    return (titleElement.getBoundingClientRect().top >= 0 && nextTitleElement.getBoundingClientRect().top <= window.innerHeight);
}
function findCurrentSubsection()
{
    var currentSubsectionID = -1;
    for (var i = 0; i < subSectionItems.length; i++) {
    var titleElement = subSectionTitles[i];
    if (titleElement == null)
        continue;
    if (titleElement.getBoundingClientRect().top < window.innerHeight * 0.12)
        currentSubsectionID = i;
    }
    return currentSubsectionID;
}
function updateCurrentSubsection(currentSubsectionID)
{
    for (var i = 0; i < subSectionItems.length; i++)
    {
    if (i == currentSubsectionID || isSectionFullyVisible(i))
        subSectionItems[i].getElementsByTagName("span")[0].style["font-weight"] = 600;
    else
        subSectionItems[i].getElementsByTagName("span")[0].style["font-weight"] = 400;
    }
}
function windowScroll(e)
{
    updateCurrentSubsection(findCurrentSubsection());
    updateScroll();
}
window.addEventListener("scroll", windowScroll);
updateCurrentSubsection(findCurrentSubsection());

// Add highlight to the target section
const hash = window.location.hash.substring(1);

// Highlight the currently visiting section.
function highlightHashSection(hashName)
{
    const elements = document.querySelectorAll('[id="' + hashName + '"]');
    elements.forEach(anchor => {
        anchor.classList.add('goto_highlight');
        setTimeout(() => {
            anchor.classList.add('goto_highlight_fade_out');
            setTimeout(() => {
                anchor.classList.remove('goto_highlight');
                anchor.classList.remove('goto_highlight_fade_out');
            }, 2000);
        }, 5000);
    });
}

highlightHashSection(hash);
window.onhashchange = function()
{
    const newHash = window.location.hash.substring(1);
    highlightHashSection(newHash);
};