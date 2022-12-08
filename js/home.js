let songs = [
    { songName: "Apna Bana Le  Bhediya  Varun Dhawan Kriti Sanon SachinJigar Arijit Singh Amitabh Bhattacharya", filePath: "aud/apnabanale.mp3", coverPath: "img/trendingnow/apnabanale.jpg" },
    { songName: "Champagne Talk _ Official Visualiser_ King", filePath: "aud/champ.mp3", coverPath: "img/trendingnow/ct.jpg" },
    { songName: " Her (Official Audio) - Shubh", filePath: "aud/her.mp3", coverPath: "img/trendingnow/her.jpg" },
    { songName: "On Top (Full Video) Karan Aujla  Yeah Proof  New Punjabi Songs", filePath: "aud/ontop.mp3", coverPath: "img/trendingnow/ontop.jpg" },
    { songName: "Paris Ka Trip (Video)  @Millind Gaba  X  @Yo Yo Honey Singh  Asli Gold, Mihir G  Bhushan Kumar", filePath: "aud/paris.mp3", coverPath: "img/trendingnow/paris.jpg" },
    { songName: "Ram Setu", filePath: "aud/ramsetu.mp3", coverPath: "img/trendingnow/rf.jpg" },
    { songName: "Ranjithame", filePath: "aud/ranjithame.mp3", coverPath: "img/trendingnow/rf.jpg" },
    { songName: "Todh  Prince Narula & Munawar (Official Video)  Jaymeet  Rony Ajnali & Gill Machhrai", filePath: "aud/todh.mp3", coverPath: "img/trendingnow/todh.jpg" },
    { songName: "Tum Kyu Chale Aate Ho  Kya Mujhe Pyaar Hai  Aditya Rawat  Woh Lamhe", filePath: "aud/tum.mp3", coverPath: "img/trendingnow/tum.jpg" },
    { songName: "WOH – Ikka x Dino James x Badshah (Official Lyric Video)  Def Jam India", filePath: "aud/woh.mp3", coverPath: "img/trendingnow/woh.jpg" },
    { songName: "Ram Setu", filePath: "aud/drop.mp3", coverPath: "img/trendingnow/rf.jpg" },
    { songName: "Ranjithame", filePath: "aud/leonell.mp3", coverPath: "img/trendingnow/rf.jpg" },
    { songName: "Todh  Prince Narula & Munawar (Official Video)  Jaymeet  Rony Ajnali & Gill Machhrai", filePath: "aud/password.mp3", coverPath: "img/trendingnow/ramsetu.jpg" },
    { songName: "Tum Kyu Chale Aate Ho  Kya Mujhe Pyaar Hai  Aditya Rawat  Woh Lamhe", filePath: "aud/please.mp3", coverPath: "img/trendingnow/ramsetu.jpg" },
    { songName: "WOH – Ikka x Dino James x Badshah (Official Lyric Video)  Def Jam India", filePath: "aud/lifelike.mp3", coverPath: "img/trendingnow/ramsetu.jpg" },
]
let pbtn = Array.from(document.getElementsByClassName("pbtn"));
let type_card = Array.from(document.getElementsByClassName("type_card"));
let sections = document.getElementsByClassName("sections")
let shaw_all = document.getElementsByTagName('h6')
let audioElement = new Audio();
let songIndex;
let masterPlay = document.getElementById('masterPlay');
let range = document.getElementById('range');
let gif = document.getElementById('gif');
let new_event;
let length_played = document.getElementById('length_played')
let length_total = document.getElementById('length_total')
let coverimg = document.getElementById('coverimg')
let covername = document.getElementById('covername')
let eyeOntime;


//-------SHOWING/HIDING BUTTONS ON MOUSE HOVER_____________________
function showbtn(event) {
    event.path[0].children[3].classList.add('hide_btn')
}
function hidebtn(event) {
    event.path[0].children[3].classList.remove('hide_btn')
}
type_card.forEach((element) => {
    element.addEventListener('mouseenter', showbtn)
})
type_card.forEach((element) => {
    element.addEventListener('mouseleave', hidebtn)
})

//________________Functions for changing play/pause buttons___________________________
function changeBtnToPlay(event) {
    event.target.classList.add('fa-play')
    event.target.classList.remove('fa-pause')
    masterPlay.classList.add('fa-play')
    masterPlay.classList.remove('fa-pause')
}

function changeBtnToPaus(event) {
    event.target.classList.remove('fa-play')
    event.target.classList.add('fa-pause')
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
}

function changeAllBtnToPlay() {
    pbtn.forEach((element) => {
        element.classList.add('fa-play')
        element.classList.remove('fa-pause')
        masterPlay.classList.add('fa-play')
        masterPlay.classList.remove('fa-pause')
        audioElement.currentTime = 0
    })
}
//______________________#### listening events and playing perticular song ###_______________

function play(event) {
    songIndex = event.target.id
    audioElement.src = songs[songIndex - 1].filePath
    coverimg.src = songs[songIndex - 1].coverPath
    covername.innerHTML = songs[songIndex - 1].songName
}

function plyaSong(event) {
    new_event = event

    if (event.target.id == songIndex) {
        //This will activated when you click on same song which is being playing
        if (audioElement.paused != true) {
            audioElement.pause()
            gif.style.opacity = 0;
            changeBtnToPlay(event)
        } else {
            play(event)
            gif.style.opacity = 0.35;
            audioElement.play()
            changeAllBtnToPlay()
            changeBtnToPaus(event)
            audioElement.currentTime = eyeOntime
        }
    }
    else if (songIndex == undefined || audioElement.played.length == 0 || audioElement.paused) {
        play(event)
        gif.style.opacity = 0.35;
        audioElement.play()
        changeBtnToPaus(event)
    } else {
        play(event)
        gif.style.opacity = 0.35;
        audioElement.play()
        changeAllBtnToPlay()
        changeBtnToPaus(event)
    }
}

pbtn.forEach((element) => {
    element.addEventListener('click', plyaSong)
})

//______#### listening events of Master Play button and playing perticular song ###_______________
function plyaSongByMasterPlay(event) {
    event = new_event;
    plyaSong(event)

}
masterPlay.addEventListener('click', plyaSongByMasterPlay)

//-----------------Forward Backward_______________________

// document.getElementsByClassName('fa-forward-step')[0].addEventListener('click', (event) => {
//     songIndex = parseInt(new_event.target.id) + 1
//     console.log(songIndex);
// })



//-----------------------------------Progress BAR------------------------
function smartTime(time) {
    return time < 10 ? "0" + time.toString().trim() : time;
}

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    range.value = progress;
    let currentmin, currentsec, totalmin, totalsec;
    currentmin = smartTime(Math.floor(audioElement.currentTime / 60));
    currentsec = smartTime(Math.floor(audioElement.currentTime % 60));
    totalmin = smartTime(Math.floor(audioElement.duration / 60));
    totalsec = smartTime(Math.floor(audioElement.duration % 60));
    length_played.innerHTML = `${currentmin} : ${currentsec}`
    length_total.innerHTML = `${totalmin} : ${totalsec}`
    eyeOntime = audioElement.currentTime
})


audioElement.addEventListener('ended', changeAllBtnToPlay)

range.addEventListener('change', () => {
    audioElement.currentTime = range.value * audioElement.duration / 100
})

//-------------SECTION HIDING______________________

function shaw_section0() {
    sections[0].classList.toggle("section_height")
    sections[1].classList.toggle("hide_section")
    sections[2].classList.toggle("hide_section")
    sections[3].classList.toggle("hide_section")
}
shaw_all[0].addEventListener('click', shaw_section0)

function shaw_section1() {
    sections[1].classList.toggle("section_height")
    sections[0].classList.toggle("hide_section")
    sections[2].classList.toggle("hide_section")
    sections[3].classList.toggle("hide_section")
}
shaw_all[1].addEventListener('click', shaw_section1)

function shaw_section2() {
    sections[2].classList.toggle("section_height")
    sections[1].classList.toggle("hide_section")
    sections[0].classList.toggle("hide_section")
    sections[3].classList.toggle("hide_section")
}
shaw_all[2].addEventListener('click', shaw_section2)

function shaw_section3() {
    sections[3].classList.toggle("section_height")
    sections[1].classList.toggle("hide_section")
    sections[2].classList.toggle("hide_section")
    sections[0].classList.toggle("hide_section")
}
shaw_all[3].addEventListener('click', shaw_section3)

