var audio=document.getElementById("audio");
audio.play();
audio.addEventListener("ended", function(){
  audio.currentTime=12.6;
  audio.play();
});