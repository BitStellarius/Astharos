let preloader = document.getElementById("preloader");

document.getElementById("preloaderButton").addEventListener("click", function(){
    preloader.classList.add("disappear");
    document.getElementsByTagName("body")[0].style.visibility = "visible";
    playBackgroundMusic();
});

window.addEventListener("load", function(){
    document.getElementById("preloaderGif").classList.add("disappear");
    document.getElementById("preloaderButton").classList.add("appear"); 
    this.setTimeout(function(){
        document.getElementById("preloaderButton").classList.remove("appear");
        document.getElementById("preloaderButton").classList.add("cicle");
    },1750);    
});