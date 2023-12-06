function changeName() {
  let person = prompt("Please enter your name");
  let age = prompt("How old are you?");
  document.getElementById('inputName').innerHTML = `Hello ${person}. You are ${age}`;
  }

