const menu = document.getElementById("menu")

window.onscroll = function(){
    if(window.pageYOffset>10){
        menu.style.background="#fff";
    }
    else{
        menu.style.background="initial";
    }
}