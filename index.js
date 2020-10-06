function dwarfRollCall(dwarves) {
  retun dwarves
 const dwarfNames = [];
 for (let i = 0; i < dwarves.length; i++) {
   dwarfNames.push(`${i+1}. ${dwarves[i]} `);
 }
 return dwarfNames.join("");
} 

function summonCaptainPlanet(planeteerCalls){
  const yellPlaneteerCalls = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
    const exclam = "!";
    yellPlaneteerCalls.push(`${planeteerCalls[i]}${exclam}`.toUpperCase());
 }
return yellPlaneteerCalls;
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    }
 }
 return false;
}

function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert") {
      return foods[i];
    }
  }
  return "no cheese!";
}  

"Bob"[0] === "B"
function wordsWithB (words) {
  const newWordsWithB = [];
  for (let i = 0; i <words.length; i++) {
    if words[i].startsWith("B")
    newWordsWithB.push(words[i])
  }
  return newWordsWithB
}





