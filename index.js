function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function blink() {
  document.getElementById("milkPour").style.visibility = "visible";
  document.getElementById("cerealPour").style.visibility = "hidden";
  document.getElementById("finishedCereal").style.visibility = "hidden";
  document.getElementById("checkmark").style.visibility = "hidden";
  document.getElementById("confetti").style.visibility = "hidden";
  
  sleep(2000).then(() => { 
    document.getElementById("cerealPour").style.visibility = "visible";
    document.getElementById("finishedCereal").style.visibility = "hidden";
    document.getElementById("checkmark").style.visibility = "hidden";
    document.getElementById("confetti").style.visibility = "hidden";
  });
  
  sleep(4000).then(() => { 
    document.getElementById("milkPour").style.visibility = "hidden";
    document.getElementById("cerealPour").style.visibility = "hidden";
    document.getElementById("finishedCereal").style.visibility = "visible";
    document.getElementById("checkmark").style.visibility = "visible";
    document.getElementById("confetti").style.visibility = "visible";
  });
}

setInterval(blink, 10000);
