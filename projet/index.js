
var i = 0;
var txt = "Bien manger signifie consommer une variété d'aliments des quatre groupes alimentaires \n  pour se sentir bien et rester en bonne santé. Une alimentation saine, accompagnée d'une vie active.";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("texteto").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
