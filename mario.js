function myFunction() {
 var x = document.getElementById("myText").value;
 
 let string = "";
 for (let i = 1; i <= x; i++) {
  // printing spaces
  for (let j = 0; j < x - i; j++) {
    string +="";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "**";
  }
  string += "<br>";
}
 document.getElementById("pyramid").innerHTML = string;
};

