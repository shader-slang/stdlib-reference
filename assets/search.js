var txtSearch = document.getElementById("txtSearch");
var resultPanel = document.getElementById("tocSearchResult");

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
            if (token.indexOf(" ") != -1)
                break;
            if (token == "Interfaces")
                break;
            if (token == "Types")
                break;
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

function txtSearchLostFocus(event)
{
    if (!event.relatedTarget || !isChildOf(event.relatedTarget, resultPanel))
    {
        resultPanel.style.display = "none";
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
    var lastToken = tokens[tokens.length - 1];
    var count = 0;
    var sb = [];
    for (var e = 0; e < elements.length; e++)
    {
        let element = elements[e];
        if (count > 12)
        {
            sb.push("<div class='toc_item'>...</div>");
            break;
        }
        var currentElement = element;
        var match = false;
        var score = 0;
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
            score += token.length - pos;
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
                "<div class='toc_item'><a href='"
                   + element.getAttribute("data-link") + "'><span>" + escapeHTML(fullText) + "</span></a></div>",
                 score]);
            count++;
        }
    }
    sb = sb.sort((a, b)=>b[1]-a[1]);
    let finalHTML = sb.map(x=>x[0]).join("");
    resultPanel.innerHTML = finalHTML;
}

txtSearch.addEventListener("blur", txtSearchLostFocus);
txtSearch.addEventListener("focus", txtSearchFocus);
txtSearch.addEventListener("input", txtSearchChange);
