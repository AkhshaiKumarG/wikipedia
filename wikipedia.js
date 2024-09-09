let searchInput = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");



function createAppendResult(result) {
    let {
        link,
        title,
        description
    } = result;
    let resultContainer = document.createElement("div");
    resultContainer.classList.add("result-item");

    let resultTitle = document.createElement("a");
    resultTitle.href = link;
    resultTitle.target = "_blank";
    resultTitle.textContent = title;
    resultTitle.classList.add("result-title");
    resultContainer.appendChild(resultTitle);

    let titleBreakLine = document.createElement("br");
    resultContainer.appendChild(titleBreakLine);


    let resultLink = document.createElement("a");
    resultLink.href = link;
    resultLink.target = "_blank";
    resultLink.textContent = link;
    resultLink.classList.add("result-url");
    resultContainer.appendChild(resultLink);

    let linkBreakLine = document.createElement("br");
    resultContainer.appendChild(linkBreakLine);


    let resultDescription = document.createElement("p");
    resultDescription.textContent = description;
    resultDescription.classList.add("link-description");
    resultContainer.appendChild(resultDescription);

    let descriptionBreakLine = document.createElement("br");
    resultContainer.appendChild(descriptionBreakLine);


    searchResults.appendChild(resultContainer);
}

function displayResults(searchResults) {
    spinner.classList.add("d-none");
    for (let result of searchResults) {
        createAppendResult(result);
    }
}



function searching(event) {


    if (event.key === "Enter") {

        spinner.classList.remove("d-none");
        let input = searchInput.value;

        searchResults.textContent = "";
        let url = "https://apis.ccbp.in/wiki-search?search=" + input;
        let options = {
            "method": "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsondata) {
                let {
                    search_results
                } = jsondata;
                displayResults(search_results);
            })
    }




}







searchInput.addEventListener("keydown", searching);
