
const msc_play = document.getElementById("msc_play");
const msc_pause = document.getElementById("msc_pause");

msc_play.onclick = function(){
    pageBGM.play();
}

msc_pause.onclick = function(){
    pageBGM.pause();
}