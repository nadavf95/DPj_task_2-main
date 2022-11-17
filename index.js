//data info
const API_BASE = 'https://www.balldontlie.io/api/v1/stats/?dates[]=';


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


async function getGamesData(date){
  // write you logic for getting the data from the API here
  // return your data from this function
  const gamesData = await queryEndpoint(date);

  
  return data;
}

function clearUI() {
  clearPlayerUI()
  // TO DO: clear games and than hide games sectom 
}

function clearPlayerUI(){
  // TO DO: clear players and than hide player section
}






async function renderUI(data) {

  clearUI();

  // you have your data! add logic here to render it to the UI
  // notice in the HTML file we call render();
  const dummyItemElement = Object.assign(document.createElement("div"), { className: "player" })
  const dummyContentElement = Object.assign(document.createElement("div"), { className: "content" })
  dummyContentElement.innerHTML = "player";
  dummyItemElement.appendChild(dummyContentElement);
  app.appendChild(dummyItemElement);
}

// maybe to this:

//const data = await getData();
//await renderUI(data);
