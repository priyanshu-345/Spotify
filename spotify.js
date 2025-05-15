console.log("welcome to spotify");
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "siddhu 295",filePath:"1.mp3",coverPath:"1.jpg"},
    {songName: "Aroma",filePath:"2.mp3",coverPath:"2.jpg"},
    {songName: "Dil Nu",filePath:"3.mp3",coverPath:"3.jpg"},
    {songName: "Calaboose",filePath:"4.mp3",coverPath:"4.jpg"},
    {songName: "Jhol",filePath:"5.mp3",coverPath:"5.jpg"},
    {songName: "Bekhayali",filePath:"6.mp3",coverPath:"6.jpg"},
    {songName: "Mere Sohneya",filePath:"7.mp3",coverPath:"7.jpg"},
    {songName: "0 to 100",filePath:"8.mp3",coverPath:"8.jpg"},
    {songName: "Pal Pal",filePath:"9.mp3",coverPath:"9.jpg"},
    {songName: "Panjab",filePath:"10.mp3",coverPath:"10.jpg"},
    {songName: "Jailaan",filePath:"11.mp3",coverPath:"11.jpg"},
    {songName: "Aaj Bhi 2",filePath:"12.mp3",coverPath:"12.jpg"},
]
// songItems.forEach((element)=>{
//     console.log(element, i);
//     element.getElementByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

// })
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
})
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})