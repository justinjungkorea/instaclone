var weaponsList = ["AK-47", "Gun", "Machete", "Knife"];
var countries = ["Korea", "Japan", "Greece", "Colombia"];

var soldier = {
  name: "Nicolas",
  weapon: weaponsList[2],
  country: countries[3],
  isDead: false,
  shoot: function() {
    console.log("Pew Pew");
  },

  Hello: function(person) {
    console.log("Hello" + person + " My name is " + this.name);
  }
};


function multiply(one, two) {
  return one * two;
}

function sum(one, two) {
  return one + two;
}
