
function addTeamToMenu(){
   
var teamBox = document.getElementById("container_teams");
var teamName = document.getElementById("inp1");
var teamLogo = document.getElementById("inp3");
var teamWon = document.getElementById("inp4");
teamBox.innerHTML += `
<img src="${teamLogo.value}" class="mainimage" alt=""/> 
<div class="dataodcard">
  <p class="text1"> ${teamName.value}   </p>
  <p class="text2"> Won Count : ${teamWon.value} </p>
</div>
</div>
`;
}
