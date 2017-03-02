document.getElementById("orb").addEventListener("click", function(){ changeToNight()
     changeToNight()
});
function changeToNight(){
    document.getElementById("sky").className = "night";
document.getElementById("orb").className = "moon";
document.getElementById("moonspot1").className = "visible";
document.getElementById("moonspot2").className = "visible";
document.getElementById("moonspot3").className = "visible";

    
}