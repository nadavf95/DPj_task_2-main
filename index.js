//data info
const API_BASE = 'https://www.balldontlie.io/api/v1/games/?dates[]=';

let games_flag = false;
let players_flag = false;

let curr_game_info = null;

// notice in our html we have a node with ID "app"
// hint: use this reference later to inject data into your page
const app = document.getElementById('app');



// this function geting date parmeter adn feching data of 
// all games at this date
async function queryEndpoint(date){
  let data = null;
  try{
    const response = await fetch(API_BASE.concat(date))
    console.log(response)
    if (response.status === 200) {
      data = await response.json();
    }
   } catch (error) {
      console.log('api error');
      console.error(error);
   }
  return data;
}
const submit =document.getElementById("submit-button");

submit.onclick = async function on_submit_click(){
  // TO DO 
  // get date from input box
  let date = document.getElementById("date-input").value;
  // fetch dada
  const gamesData = await queryEndpoint(date);
  console.log(gamesData);
  // crate templates
  await renderGamesUI(gamesData);

  //show game section
}

function on_game_click(){
  // get game info
  // get players game info
  // sort and filter
  // show players section
}

function clearUI() {
  while (app.firstChild) {
    app.removeChild(app.firstChild);
  }
}




async function renderGamesUI(games_data) {
  let games = Object.values(games_data.data);
  let sort_val = document.getElementById("data-sort").value;
  console.log(sort_val)
  let filter = document.getElementById("data-filter").value;
  console.log(filter)
  console.log(games);
  games = games.sort((a,b) => {
    if (sort_val == "a-z"){
      return a.home_team.name.localeCompare(b.home_team.name);
    }
    else{
      return b.visitor_team_score + b.home_team_score - a.visitor_team_score - a.home_team_score;
    }  
  });
  
  clearUI();
  for (const game of games) {
    if ((game.home_team.conference == filter)||(filter == "none")){
      app.innerHTML += `
      <button class="game-button" type="button" onclick="gamefunc()">
        <div class="content">
          <h2>${game.home_team.name} VS ${game.visitor_team.name}</h2>
          <h3>${game.home_team_score} : ${game.visitor_team_score}</h3>
          <p>${game.status}</p>
        </div>
      </button>`
    }
  }
}

