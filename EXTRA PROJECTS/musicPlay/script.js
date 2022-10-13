// Variables
let audio = "paused"
let songIndex = 0
let shuffling = true
let sChanged = false
let audioElement = new Audio("songs/0.mp3")
let masterPlay = document.getElementById('masterPlay')
let b_SongName = document.querySelector(".b_songName")
let currentT = document.getElementById("current")
let dura = document.getElementById("duration")
let progressBar = document.getElementById("progress")
let smProgress = document.getElementById("sm-progress")
let progressCon = document.getElementById("progressCon")
let smProgressCon = document.getElementById("smProgressCon")
let songCard = document.querySelectorAll(".songNu")
let cover = document.getElementById("bCover")
let shuffle = document.getElementById("shuffle")
let darkImg = document.getElementById("darkImg")
let lightImg = document.getElementById("lightImg")

let songs = [
   { song: "One Kiss", songPath: "songs/0.mp3", coverPath: "covers/one_kiss.jpeg",},
   { song: "Levitating", songPath: "songs/1.mp3", coverPath: "covers/levitating.jpeg",},
   { song: "Pink Venom", songPath: "songs/2.mp3", coverPath: "covers/pv2.jpeg" },
   { song: "DDU-DU-DDU-DU", songPath: "songs/3.mp3", coverPath: "covers/dudu.png" },
   { song: "Unstoppable", songPath: "songs/4.mp3", coverPath: "covers/unstop.jpeg" },
   { song: "BTS Butter", songPath: "songs/5.mp3", coverPath: "covers/butter.png" },
   { song: "Kill This Love", songPath: "songs/6.mp3", coverPath: "covers/kill.jpeg",},
   { song: "New Rules", songPath: "songs/7.mp3", coverPath: "covers/new.jpeg" },
   { song: "How You Like That", songPath: "songs/8.mp3", coverPath: "covers/how.jpeg",},
   { song: "Infinity", songPath: "songs/9.mp3", coverPath: "covers/infinity.jpeg" },
   { song: "BTS Dynamite", songPath: "songs/10.mp3", coverPath: "covers/dynamite.jpeg",},
   { song: "Taki Taki", songPath: "songs/11.mp3", coverPath: "covers/taki.jpeg" }
 ];


// Dark mode code
let darkBTN = document.getElementById("darkbtn")
let darkIcon = document.getElementById("theme-toggle-dark-icon")
let lightIcon = document.getElementById("theme-toggle-light-icon")

if ( localStorage.getItem("color-theme") === "dark" || (!("color-theme " in localStorage) && window.matchMedia("(prefer-color-scheme: dark").matches)){
   // Show Light icon
   lightIcon.classList.remove("hidden")
} 
else{
   darkIcon.classList.remove("hidden")

}
// Listen for btn click
darkBTN.addEventListener("click", toggleMode)

function toggleMode(){
   darkIcon.classList.toggle("hidden")
   lightIcon.classList.toggle("hidden")

   if(localStorage.getItem("color-theme")){
      // If light make it dark and save it to local storage
      if (localStorage.getItem('color-theme') === 'light') {
         document.documentElement.classList.add('dark')
         localStorage.setItem('color-theme', 'dark')
       } else {
         document.documentElement.classList.remove('dark')
         localStorage.setItem('color-theme', 'light')
       }
     } 
     else {
       // If not in localstorage
       if (document.documentElement.classList.contains('dark')) {
         document.documentElement.classList.remove('dark')
         localStorage.setItem('color-theme', 'light')
       } else {
         document.documentElement.classList.add('dark')
         localStorage.setItem('color-theme', 'dark')
       }
     }
   }



// FUNCTIONS
// Play function
function play(){
   masterPlay.classList.add("fa-pause")
   masterPlay.classList.remove("fa-play")
   audioElement.play()
   audio = "play"
   gifPlay()
}

// Gif Image
function gifPlay(){
      darkImg.src = "Untitled design (2).gif"
      lightImg.src = "Untitled design (1).gif"
}

function gifPause(){
   darkImg.src = "Untitled_design-removebg-preview.png"
   lightImg.src = "Untitled_design-removebg-preview.png"
}


// Pause function
function pause(){
   masterPlay.classList.add("fa-play")
   masterPlay.classList.remove("fa-pause")
   audioElement.pause()
   audio = "paused"
   gifPause()
}


// UpdateTime function
function updateTime(e){
   const {duration, currentTime} = e.srcElement
   const progressPercent = (currentTime/ duration) * 100
   smProgress.style.width = `${progressPercent}%`
   progressBar.style.width = `${progressPercent}%`

   // Update time duration
   let min = Math.floor(duration / 60)
   let sec = Math.floor(duration % 60)
   if(duration){
      if (sec<=9){
         sec = "0"+sec
         dura.innerHTML = `0${min}:${sec}`
      }
      else{
         dura.innerHTML = `0${min}:${sec}`
      }
   }

   // Update current time 
   let min_current = Math.floor(currentTime / 60)
   let sec_current = Math.floor(currentTime % 60)
   if(currentTime){
      if (sec_current<=9){
         
         currentT.innerHTML = `0${min_current}:0${sec_current}`
      }
      else{
         currentT.innerHTML = `0${min_current}:${sec_current}`
      }
   }

}


// Make a particular card pause
function cardPause(){
   const cardPlay =  document.getElementById(songIndex).nextElementSibling.firstElementChild
   cardPlay.classList.add("fa-pause")
   cardPlay.classList.remove("fa-play")
}


// Update progress on clicking
function updateProgress(e){
   const width = this.clientWidth
   const clickX = e.offsetX
   const duration = audioElement.duration
   audioElement.currentTime = (clickX / width) * duration
}


// Removes pause logo and add plays logo
function makeAllPlay() {
   Array.from(document.getElementsByClassName("songplay")).forEach((element) => {
     element.classList.remove("fa-pause");
     element.classList.add("fa-play");
   });
}


// Previous Function
function prevSong(){
   if(songIndex <= 0){
      songIndex = songs.length - 1
   }
   else{
      songIndex--
   }
}



// Next Function
function nextSong(){
   if(songIndex >= 11){
      songIndex = 0
   }
   else {
      songIndex++
   }
}



// EVENTS AND ARRAY LOOPS
// Bottom bar play and pause
masterPlay.addEventListener("click", () => {
   if(audio == "paused" || audioElement.currentTime <= 0){
      play()
      let playCard = document.getElementsByClassName("songplay")
      Array.from(playCard).forEach(() =>{
         cardPause()
      })
   }
   else if(audio == "play"){
      pause()
      let playCard = document.getElementsByClassName("songplay")
      Array.from(playCard).forEach(() =>{
         makeAllPlay()
      })
   }
})


// Changes play/pause logo in card
Array.from(document.getElementsByClassName("songplay")).forEach((element) => {
   element.addEventListener("click", (e) =>{
      console.log(e.target.classList)
      if(audio == "paused" || e.target.classList[2] == "fa-play"){
         makeAllPlay()
         e.target.classList.remove("fa-play")
         e.target.classList.add("fa-pause")
         songIndex = e.target.id
         audioElement.src = `songs/${songIndex}.mp3`
         play()
      }
      else if (audio == "play" && e.target.classList[2] == "fa-pause"){
         e.target.classList.add("fa-play");
         e.target.classList.remove("fa-pause");
         pause()
      }
   }) 
})


// Previous Event
document.getElementById("previous").addEventListener("click",()=>{
   prevSong()
   audioElement.src = `songs/${songIndex}.mp3`
   makeAllPlay()
   cardPause()
   // Bottom image change
   cover.src = songs[songIndex].coverPath
   // Bottom Song Name change
   b_SongName.innerHTML = songs[songIndex].song
   play()
})


// Next Event
document.getElementById("next").addEventListener("click",()=>{
   nextSong()
   audioElement.src = `songs/${songIndex}.mp3`
   makeAllPlay()
   cardPause()
   // Bottom image change
   cover.src = songs[songIndex].coverPath
   // Bottom Song Name change
   b_SongName.innerHTML = songs[songIndex].song
   play()
})


// Space bar play and pause
window.addEventListener("keydown", (e) => {
   if(e.keyCode == 32){
      if(audio == "paused" || audioElement.currentTime <= 0){
         play()
         cardPause()
         
      }
      else if(audio == "play"){
         pause()
         makeAllPlay()
      }
   }   
})


// Update current time
audioElement.addEventListener("timeupdate", updateTime)


// Click on progress bar to update
progressCon.addEventListener("click", updateProgress)
smProgressCon.addEventListener("click", updateProgress)


// Allows to change bottom bar cover and song Name  (Why songNu is used?  Because it covers the whole card for event listening)
Array.from(document.getElementsByClassName("songNu")).forEach((element) => {
   element.addEventListener("click", (e) =>{
      // Bottom image change
      songIndex = e.target.id
      cover.src = songs[songIndex].coverPath
      // Bottom Song Name change
      b_SongName.innerHTML = songs[songIndex].song
   }) 
})


// Auto Play next without btn
if(sChanged == false){
   audioElement.addEventListener("ended",()=>{
      nextSong()
      makeAllPlay()
      audioElement.src = `songs/${songIndex}.mp3`
      // Bottom image change
      cover.src = songs[songIndex].coverPath
      // Bottom Song Name change
      b_SongName.innerHTML = songs[songIndex].song
      cardPause()
      play()
   })
}
window.addEventListener("click", ()=>{
   let randomN = Math.random(0, 1) *12
})


// Play next btn
shuffle.addEventListener("click", ()=>{
   if(shuffling==true){
      audioElement.addEventListener("ended",()=>{
         // Creates random function for songIndex
         let randomN = Math.random(0, 1) *12
         songIndexR = Math.floor(randomN)
         makeAllPlay()
         audioElement.src = `songs/${songIndexR}.mp3`
         // Bottom image change
         cover.src = songs[songIndexR].coverPath
         // Bottom Song Name change
         b_SongName.innerHTML = songs[songIndexR].song
         cardPause()
         play()
      })
      shuffle.style.color = "#4CBB17"
      shuffling=false 
      sChanged = true
   }
   else{
      shuffling = true
      audioElement.addEventListener("ended", ()=>{
         songIndexR++
         cardPause()
         makeAllPlay()
         audioElement.src = `songs/${songIndexR}.mp3`
         // Bottom image change
         cover.src = songs[songIndexR].coverPath
         // Bottom Song Name change
         b_SongName.innerHTML = songs[songIndexR].song
         pause()
      })
      shuffle.style.color = "rgb(107 114 128)"
      sChanged = true
   }
})


// Allows image to click and play only
Array.from(document.getElementsByClassName("imagePlay")).forEach((element) => {
   element.addEventListener("click", (e)=> {
      const playBtn = e.target.nextElementSibling.firstElementChild
      makeAllPlay()
      playBtn.classList.remove("fa-play")
      playBtn.classList.add("fa-pause")
      songIndex = e.target.id
      audioElement.src = `songs/${songIndex}.mp3`
      play()
   })
})


// Allows spotify logo to reload the page
let reload = document.getElementById("reload")
reload.addEventListener("click",() =>{
   location.reload()
})
