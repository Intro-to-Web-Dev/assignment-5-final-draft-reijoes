/*This JavaScript interacts with the document object model (DOM), by changing the source of an image. More specifically,
it changes the image with the id "butn" from a sun picture to a moon picture and vice versa every time it is clicked on.
 */


//assign btn variable to the "butn" html element
var btn = document.getElementById("butn");
//listen for button click
btn.addEventListener("click", modeswitch);

//set to light mode when first entering site
var mode = "light";

//when button is clicked, switch from light to dark or vice versa
function modeswitch () {
    if (mode == "light") {
        dark();
    }   
        else{ 
            light();
    }
}

//when changing to dark, function runs to change all colors
function dark (){
    mode = "dark";
    btn.src='./img/sun.png';
    document.getElementById("searchbox").style.backgroundColor = "#efecec";
    document.getElementById("headerbg").style.background = "#363434";
    document.getElementById("gridbox").style.backgroundColor = "#5c5757";
    document.getElementsByTagName("footer")[0].style.backgroundColor = "#363434";
    document.getElementsByTagName("nav")[0].style.backgroundColor = "#393b44";
    document.getElementsByTagName("h1")[0].style.color = "#efecec";
    document.getElementById("shoppingbutton").style.backgroundColor = "#393b44";
    document.getElementById("paymentbutton").style.backgroundColor = "#393b44";
    document.getElementById("label").style.color = "black";
}
//when changing to light, function runs to change all colors
function light (){
    mode = "light";
    btn.src='./img/moon.png';
    document.getElementById("searchbox").style.backgroundColor = "#d6e0f0";
    document.getElementById("headerbg").style.background = "#8d93ab";
    document.getElementById("gridbox").style.backgroundColor = "#f1f3f8";
    document.getElementsByTagName("footer")[0].style.backgroundColor = "#393b44";
    document.getElementsByTagName("nav")[0].style.backgroundColor = "#6f747c";
    document.getElementsByTagName("h1")[0].style.color = "gray";
    document.getElementById("shoppingbutton").style.backgroundColor = "#6f747c";
    document.getElementById("paymentbutton").style.backgroundColor = "#6f747c";

}