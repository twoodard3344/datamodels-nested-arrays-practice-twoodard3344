const map = [
  "WWWWWWWWWWWWWWWWWWWWW",
  "W   W     W     W   W",
  "W W W WWW WWWWW W WWW",
  "W W W  W      W W   W",
  "W WWWWWWW W WWW W W W",
  "W         W     W W W",
  "W WWW WWWWW WWWWW W W",
  "W W   W   W W     W W",
  "W WWWWW W W W WWW W F",
  "S     W W W W W W WWW",
  "WWWWW W W W W W W W W",
  "W     W W W   W W W W",
  "W WWWWWWW WWWWW W W W",
  "W       W       W   W",
  "WWWWWWWWWWWWWWWWWWWWW"
];

// Your Code Here.

let appElement = document.querySelector("#app");

for (let outerIndex = 0; outerIndex < map.length; outerIndex += 1) {
  const currentRow = map[outerIndex];
  let newROw = document.createElement("div");
  newROw.classList.add("row");
  appElement.append(newROw);
  for (let innerIndex = 0; innerIndex < currentRow.length; innerIndex += 1) {
    const currentCell = currentRow[innerIndex];
  let newCell = document.createElement("div");
  newROw.append(newCell);
    newCell.classList.add("cell");
    if(currentCell === "W"){
      newCell.classList.add("wall");
    }
    if (currentCell === "S")
    {
      newCell.classList.add("start");
    }
    if (currentCell === "F")
    {
      newCell.classList.add("finish");
    }
  }
  
}

document.addEventListener("keypress",onKeyPress()
{

}) 
