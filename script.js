function showAlert() {
    let person = prompt("Si pripravenny hrat ? (ano/nie)");
    if (person == null || person == "") {
        alert("Nic ste nenapisali.")
      } else if (person == "ano" || person == "ano ") {
        alert("Hra zacne po stlaceni tlacitka START. Vela stastia!")
      } else {
        alert("Tak si este precitajte navod na hranie.")
      }
}

function generateLetter() {
  const alphabet = 'KPN';

  return alphabet[Math.floor(Math.random() * alphabet.length)]
}



function playGame() {
    let person = prompt("Zadaj K,P alebo N");
    if(person == null || person == "") {
        alert("Musis nieco napisat!")
    } 
    const pcChoice = generateLetter();
    console.log(pcChoice)
    console.log(person)
    showResult(person, pcChoice);
}
