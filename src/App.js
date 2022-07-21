import './App.css';

let homeCount = 0;
let guestCount = 0;
let leadingTeam = '';

function add1() {
  let update = document.getElementById('home-score')
  homeCount+= 1;
  update.textContent = homeCount
  if(homeCount>guestCount){
    leadingTeam = "Leader Board: HOME"
    document.getElementById('leadingTeam').textContent = leadingTeam;
  }
  else{
    leadingTeam = "Leader Board: GUEST"
    document.getElementById('leadingTeam').textContent = leadingTeam;
  }
}

function add2() {
  let update = document.getElementById('home-score')
  homeCount+= 2;
  update.textContent = homeCount
  if(homeCount>guestCount){
    leadingTeam = "Leader Board: HOME"
    document.getElementById('leadingTeam').textContent = leadingTeam;
  }
  else{
    leadingTeam = "Leader Board: GUEST"
    document.getElementById('leadingTeam').textContent = leadingTeam;
  }
}

function add3() {
  let update = document.getElementById('home-score')
  homeCount+= 3;
  update.textContent = homeCount
  if(homeCount>guestCount){
    leadingTeam = "Leader Board: HOME"
    document.getElementById('leadingTeam').textContent = leadingTeam;
  }
  else{
    leadingTeam = "Leader Board: GUEST"
    document.getElementById('leadingTeam').textContent = leadingTeam;
  }
}

function guestAdd1() {
  let update = document.getElementById('guest-score')
  guestCount+= 1;
  update.textContent = guestCount
  if(homeCount>guestCount){
    leadingTeam = "Leader Board: HOME"
    document.getElementById('leadingTeam').textContent = leadingTeam;
  }
  else{
    leadingTeam = "Leader Board: GUEST"
    document.getElementById('leadingTeam').textContent = leadingTeam;
  }
}

function guestAdd2() {
  let update = document.getElementById('guest-score')
  guestCount+= 2;
  update.textContent = guestCount
  if(homeCount>guestCount){
    leadingTeam = "Leader Board: HOME"
    document.getElementById('leadingTeam').textContent = leadingTeam;
  }
  else{
    leadingTeam = "Leader Board: GUEST"
    document.getElementById('leadingTeam').textContent = leadingTeam;
  }
}

function guestAdd3() {
  let update = document.getElementById('guest-score')
  guestCount+= 3;
  update.textContent = guestCount
  if(homeCount>guestCount){
    leadingTeam = "Leader Board: HOME"
    document.getElementById('leadingTeam').textContent = leadingTeam;
  }
  else{
    leadingTeam = "Leader Board: GUEST"
    document.getElementById('leadingTeam').textContent = leadingTeam;
  }
}

function newGame(){
  homeCount = 0;
  guestCount = 0;
  let updateGuest = document.getElementById('guest-score')
  updateGuest.textContent = guestCount;
  let updateHome = document.getElementById('home-score')
  updateHome.textContent = homeCount;
}

function App() {
  return (
    <div className="App">
      <div class="container">
            <div class="column">
                <h3>HOME</h3>
                <h2 class="home-score" id="home-score">{homeCount}</h2>
                <div>
                    <button onClick={add1}>+1</button>
                    <button onClick={add2}>+2</button>
                    <button onClick={add3}>+3</button>
                </div>
            </div>
            <div class="column">
                <h3>GUEST</h3>
                <h2 class="guest-score" id="guest-score">{guestCount}</h2>
                <div>
                    <button onClick={guestAdd1}>+1</button>
                    <button onClick={guestAdd2}>+2</button>
                    <button onClick={guestAdd3}>+3</button>
                </div>
            </div>         
        </div>
        <h1 id="leadingTeam">Leader Board: {leadingTeam}</h1>
        <button className='new-game' onClick={newGame}>New Game</button>
    </div>
  );
}

export default App;
