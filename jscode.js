/*Bildspel */
var i = 0; //Start
var images = []; //Tom array
var time = 1500; //1,5 sekunder mellan bilderna

//Bildlista
images[0] = 'AftonbladetDD.jpg';
images[1] = 'Climatepersona.png';
images[2] = 'brainstorming.jpg';

//Byta bild-funktion
function changeImg(){
    document.slide.src = images [i]; //sätter detta som första bild

    if (i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time); //vill köra funktionen var 1,5 sekund
}

window.onload = changeImg; //vill att changeImg ska köras när sidan laddas


/*Ändra färg på headern*/

function changeHeaderColor(color){
    document.body.style.backgroundColor = color
}


/* Ändra färg på texten*/
function changeTextColor(textcolor){
    document.body.style.color=textcolor
}


/*Ändra loggan på headern */
function changeLogo() {
    var image = document.getElementById("headerlogo");
    var imageSrc = image.getAttribute("src");

    if (imageSrc == "girllogo.png") {
        image.setAttribute("src", "selfportrait.png")
    }
    else
    {
        image.setAttribute("src", "girllogo.png")
    }
}
