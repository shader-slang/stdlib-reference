var txtSearch = document.getElementById("txtSearch");
var resultPanel = document.getElementById("tocSearchResult");
var searchPanelOutline = document.getElementById("tocSearchPanelInner");
var searchPanel = document.getElementById("tocSearchPanel");


let highlightedIndex = -1;

function escapeHTML(str) {
    return str.replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#039;');
}

function getFullText(element)
{
    var sb = [];
    var currentElement = element;
    while (currentElement != null)
    {
        if (currentElement.classList.contains("toc_root_list"))
            break;
        if (currentElement.classList.contains("toc_item"))
        {
            var token = currentElement.firstChild.textContent;
            // Ignore categories if they are not the first token.
            if (sb.length > 0) {
                if (token.indexOf(" ") != -1)
                    break;
                if (token == "Interfaces")
                    break;
                if (token == "Types")
                    break;
            }
            sb.push(token);
        }
            
        currentElement = currentElement.parentNode;
    }
    if (sb.length > 2)
    {
        sb.pop();
        sb.pop();
    }
    sb.reverse();
    return sb.join(".");
}

function txtSearchFocus(event)
{
    var searchText = txtSearch.value;
    if (searchText.length > 0)
    {
        resultPanel.style.display = "block";
    }
    searchPanelOutline.classList.add("search_panel_focused");
    searchPanelOutline.classList.remove("search_panel_unfocused");
}

function isChildOf(child, parent)
{
    while (child != null)
    {
        if (child == parent)
            return true;
        child = child.parentNode;
    }
    return false;
}

function closePanel()
{ 
    resultPanel.style.display = "none";
}

function openPanel()
{
    resultPanel.style.display = "block";
    positDropdown();
}

function txtSearchLostFocus(event)
{
    searchPanelOutline.classList.add("search_panel_unfocused");
    searchPanelOutline.classList.remove("search_panel_focused");
}

function updateItemHighlight()
{
    let items = resultPanel.children;
    
    // Highlight the new item
    Array.from(items).forEach((item, index) => {
        item.classList.toggle('highlighted_search_selection', index === highlightedIndex);
    });

    // Scroll the highlighted item into view
    if (highlightedIndex >= 0 && highlightedIndex < items.length) {
        items[highlightedIndex].scrollIntoView({ block: 'nearest' });
    }
}
function searchResultItemOnClick(event)
{
    const link = event.target.firstChild.getAttribute('href');
    if (link) {
        window.location.href = link;
    }
}
function txtSearchChange(event)
{
    var searchText = txtSearch.value;
    resultPanel.innerHTML = "";
    const elements = document.querySelectorAll('.toc_item');
    var tokens = searchText.split(/[\.:,]+/);
    if (tokens.length == 0)
    {
        resultPanel.style.display = "none";
        return;
    }
    resultPanel.style.display = "block";
    var count = 0;
    var sb = [];
    for (var e = 0; e < elements.length; e++)
    {
        let element = elements[e];
        var currentElement = element;
        var match = false;
        var score = 0.0;
        for (var i = tokens.length - 1; i >= 0; i--)
        {
            var token = tokens[i].toLowerCase();
            var currentElementText = currentElement.firstChild.textContent;
            var currentTextLower = currentElementText.toLowerCase();
            if (currentTextLower.indexOf(token.toLowerCase()) == -1)
                break;
            var pos = currentTextLower.indexOf(token);
            if (pos == -1)
                break;

            // Score is based on the length of the matched token and the position of the token in the text.
            // We prefer results where the searched text is at the beginning of the token, and results
            // where a larger portion of the token is matched by the search text.
            tokenScore = token.length / currentTextLower.length + 3 * ((currentTextLower.length - pos) / currentTextLower.length);
            // Landing page of categories are not as important as the leaf pages.
            if (currentTextLower.indexOf(" ") != -1)
                tokenScore *= 0.2;
            score += tokenScore;
            if (i == 0)
            {
                match = true;
                break;
            }
            while (currentElement)
            {
                if (currentElement.classList.contains("toc_root_list")) 
                {
                    currentElement = null;
                    break;
                }
                currentElement = currentElement.parentNode;
                if (currentElement == null)
                    break;
                if (currentElement.classList.contains("toc_item"))
                    break;
                
            }
            if (currentElement == null)
                break;
            
        }
        if (match)
        {
            fullText = getFullText(element);
            sb.push([
                "<div class='search_result_item'><a href='"
                   + element.getAttribute("data-link") + "'><span>" + escapeHTML(fullText) + "</span></a></div>",
                 score]);
            count++;
        }
    }
    sb = sb.sort((a, b)=>b[1]-a[1]);
    let finalHTML = sb.map(x=>x[0]).join("");
    resultPanel.innerHTML = finalHTML;
    for (var child of resultPanel.children)
    {
        child.addEventListener("click", searchResultItemOnClick);
    }
    if (sb.length > 0)
        highlightedIndex = 0;
    else
        highlightedIndex = -1;
    if (sb.length == 0)
        resultPanel.innerHTML = "<div class='search_result_item'><span>No results found</span></div>";
    openPanel();
    updateItemHighlight();
}

const input = txtSearch;
const dropdown = resultPanel;

// Function to handle the selection of an option
function selectOption(option) {
    window.location.href = option.firstChild.href;
}

// Event listener for input keydown to handle keyboard controls
input.addEventListener('keydown', (e) => {
    const items = dropdown.children
    
    // Arrow down
    if (e.key === 'ArrowDown') {
        if (highlightedIndex < items.length - 1) {
            highlightedIndex++;
            e.preventDefault();
        }
    }

    // Arrow up
    if (e.key === 'ArrowUp') {
        if (highlightedIndex > 0) {
            highlightedIndex--;
            e.preventDefault();
        }
    }

    // Enter key
    if (e.key === 'Enter') {
        if (highlightedIndex > -1 && items[highlightedIndex]) {
            selectOption(items[highlightedIndex]);
        }
    }

    if (e.key === 'Escape') {
        closePanel();
    }
    updateItemHighlight();
});

txtSearch.addEventListener("blur", txtSearchLostFocus);
txtSearch.addEventListener("focus", txtSearchFocus);
txtSearch.addEventListener("input", txtSearchChange);

// Set the dropdown width to match the input initially
function positDropdown() {
    dropdown.style.top = `${searchPanel.offsetHeight + 2}px`;
    dropdown.style.width = `${searchPanelOutline.offsetWidth}px`;
}
window.addEventListener('load', () => {
    positDropdown();
});
txtSearch.addEventListener('resize', () => {
    positDropdown();
});

// Close dropdown when clicking outside of it
document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target) && !searchPanel.contains(event.target)) {
        closePanel();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.code === 'Backquote') { // Check if the '``' key is pressed
        event.preventDefault();
        txtSearch.focus(); // Set focus to the second input box
    }
});