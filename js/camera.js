const botaoInciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");

botaoInciarCamera.addEventListener("click", async function (){
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video:true, audio:false})

    botaoInciarCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;

    
})