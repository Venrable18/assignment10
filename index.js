let clicks = 0

let countEl = document.getElementById("count-El")

let saveBtn = document.getElementById("report")

function onClick() {

  clicks += 1;

  countEl.innerHTML = clicks;
}


function save() {

  clickStr = clicks + "-";

  saveBtn.innerHTML += clickStr

  countEl.innerHTML = 0

clicks = 0
}