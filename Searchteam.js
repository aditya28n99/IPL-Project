

// Search team functanilites 
var suggestArray = [];
for (var i = 0; i < detailofTeam.length; i++) {
  suggestArray.push(detailofTeam[i].sName);
}
let searchBar = document.querySelector(".search-input");
let inputBox = searchBar.querySelector("input");
let suggBox = searchBar.querySelector(".Suggestion-box");
let icon = searchBar.querySelector(".icon");

inputBox.onkeyup = e => {
  // here when user give some input we have to suggest our team name
  if (e.keyCode == 13) {
    icon.click();
  }
  let userData = e.target.value;
  let emptyArray = [];
  if (userData) {
    emptyArray = suggestArray.filter(data => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map(data => {
      return (data = `<li>${data}</li>`);
    });
    searchBar.classList.add("active");
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute("onclick", "currentLi(this)");
    }
  } else {
    searchBar.classList.remove("active");
  }
};
function currentLi(element) {
  let selectData = element.textContent;
  inputBox.value = selectData;
  icon.onclick = () => {
    window.open(`./teams_details.html?name=${element.textContent}`, "_self");
  };
  searchBar.classList.remove("active");
}
function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}
