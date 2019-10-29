// VARIABLES
// MAIN
const main = document.querySelector('.main')

// BUTTON
// BUTTON > DISK
const playButton = document.querySelector('.js-play-button')
const pauseButton = document.querySelector('.js-pause-button')
const prevButton = document.querySelector('.js-prev-button')
const nextButton = document.querySelector('.js-next-button')
// BUTTON > BOARD
const sizeButton = document.querySelectorAll('.board__size__button')
const flavorButton = document.querySelectorAll('.board__flavor__button')
const toppingButton = document.querySelectorAll('.board__topping__button')
const strawButton = document.querySelectorAll('.board__straw__button')
const labelButton = document.querySelectorAll('.board__label__button')
// let activeButton = 0

// CUP SIZE
const cup = document.querySelector('.main__cup')
const largeSize = document.querySelector('.largeSize')
const mediumSize = document.querySelector('.mediumSize')
const smallSize = document.querySelector('.smallSize')

//DISK
const disk = document.querySelector('.main__right__bot__player__box__disk')

// CUP CONTAIN
const flavorLiquid = document.querySelector('.main__cup__body__liquid__flavor')
const label = document.querySelector('.main__cup__body__label')

// CIRCLE TOP COLOR
const circleLiquid = document.querySelector('.main__machine__top__circle__liquid')
const straw = document.querySelector('.main__cup__straw')

// BOARD
const boardTitle = document.querySelector('.board__title')
const boardSize = document.querySelector('.board__size')
const boardFlavor = document.querySelector('.board__flavor')
const boardTopping = document.querySelector('.board__topping')
const boardStraw = document.querySelector('.board__straw')
const boardLabel = document.querySelector('.board__label')
const boardDone = document.querySelector('.board__done')

// DISTRIB
const distrib = document.querySelector('.main__machine__middle__distrib')
const bubble = document.querySelectorAll('.main__machine__middle__distrib__topping__bubble')
const distribBot = document.querySelector('.main__machine__middle__distrib__bot')
const distribLiquid = document.querySelector('.main__machine__middle__liquid')
const distribTopping = document.querySelector('.main__machine__middle__distrib__topping')

// DISTRIB BUBBLES 
const tapioca = document.querySelector('.topping__tapioca')
const tapiocaButton = document.querySelector('.tapioca')
const jelly = document.querySelector('.topping__jelly')
const jellyButton = document.querySelector('.jelly')
const multi = document.querySelector('.topping__multi')
const multiButton = document.querySelector('.multi')

// SOUND 
//effect
const servSound = new Audio('audio/serv2.mp3');
const toppingSound = new Audio('audio/topping.wav');
const bubbleSound = new Audio('audio/bubble.mp3');
const stickSound = new Audio('audio/stick.mp3');
const trashSound = new Audio('audio/trash.wav');
// let open = new Audio ('../audio/open.wav');
//disk music
// const earfQuakeSound = new Audio('audio/earfquake.mp3');
const playlist = [
    new Audio("audio/softly.mp3"),
    new Audio("audio/earfquake.mp3"),
    new Audio("audio/bossa.mp3"),
    new Audio("audio/technicolor.mp3")
]
let playlistStateIndex = 0


// var song = new Audio()
// var currentSong = 0;

// TRASH
const trash = document.querySelector('.board__footer__trash')

// EVENT LISTENER CLICK
// BOARD 
// BOARD > CUP SIZE
// BOARD > CUP SIZE > Button
sizeButton.forEach(sizeButton => {
    sizeButton.addEventListener('click', () => {
        stickSound.play()
        // setTimeout(() => {
        //     boardSize.classList.add('next-board')
        // }, 100);
        boardTitle.querySelector('.size').classList.add('hidden')
        boardTitle.querySelector('.label').classList.remove('hidden')
        boardLabel.classList.remove('hidden')
        boardSize.classList.add('hidden')
    })
})
// BOARD > CUP SIZE > large
largeSize.addEventListener('click', () => {
    cup.classList.remove('hidden')
    main.style.setProperty('--height_cup', '220px')
    if (window.innerWidth < 812) {
        main.style.setProperty('--height_cup', '170px')
    }
})
// BOARD > CUP SIZE > medium
mediumSize.addEventListener('click', () => {
    cup.classList.remove('hidden')
    main.style.setProperty('--height_cup', '200px')
    if (window.innerWidth < 812) {
        main.style.setProperty('--height_cup', '150px')
    }
})
// BOARD > CUP SIZE > small
smallSize.addEventListener('click', () => {
    cup.classList.remove('hidden')
    main.style.setProperty('--height_cup', '180px')
    if (window.innerWidth < 812) {
        main.style.setProperty('--height_cup', '130px')
    }
})

// BOARD > LABEL > BUTTON
labelButton.forEach(labelButton => {
    labelButton.addEventListener('click', () => {
        stickSound.play()
        label.style.background = labelButton.getAttribute('data')
        // activeButton = strawButton
        // boardStraw.classList.remove('hidden')
        setTimeout(() => {
            boardLabel.classList.add('next-board')
        }, 100);
        boardTitle.querySelector('.label').classList.add('hidden')
        boardTitle.querySelector('.straw').classList.add('hidden')
        boardTitle.querySelector('.flavor').classList.remove('hidden')
        boardFlavor.classList.remove('hidden')
        boardLabel.classList.add('hidden')
        boardSize.classList.add('hidden')
    })
    labelButton.addEventListener('mouseover', () => {
        label.style.background = labelButton.getAttribute('data')
    })
})

// BOARD > FLAVOR > BUTTON
flavorButton.forEach(flavorButton => {
    flavorButton.addEventListener('click', () => {
        servSound.play()
        flavorLiquid.classList.remove('flavor-animation')
        distribLiquid.classList.remove('distrib-animation')
        // flavorButton.style.background = flavorButton.getAttribute('data')
        circleLiquid.style.background = flavorButton.getAttribute('data')
        flavorLiquid.style.background = flavorButton.getAttribute('data')
        distribLiquid.style.background = flavorButton.getAttribute('data')
        setTimeout(() => {
            flavorLiquid.classList.add('flavor-animation')
            distribLiquid.classList.add('distrib-animation')
            boardFlavor.classList.add('next-board')
            // distrib.Child(distrib.children).style.background = 'pink'
        }, 100);
        // next 
        // if (activeButton != 0) {
        //     activeButton.style.background = "#4e4444"
        // }
        // activeButton = flavorButton
        boardTitle.querySelector('.topping').classList.remove('hidden')
        boardTitle.querySelector('.flavor').classList.add('hidden')
        boardTitle.querySelector('.straw').classList.add('hidden')
        boardTitle.querySelector('.label').classList.add('hidden')
        boardFlavor.classList.add('hidden')
        boardTopping.classList.remove('hidden')
        boardStraw.classList.add('hidden')
        boardLabel.classList.add('hidden')
        boardSize.classList.add('hidden')
    })
})

// BOARD > TOPPING
// BOARD > TOPPING > BUTTON
toppingButton.forEach(toppingButton => {
    toppingButton.addEventListener('click', () => {
        setTimeout(() => {
            toppingSound.play()
        }, 200)
        distribTopping.classList.remove('distrib-topping')
        circleLiquid.style.background = toppingButton.getAttribute('data')
        // toppingButton.style.background = toppingButton.getAttribute('data')
        setTimeout(() => {
            distrib.classList.add('change-distrib')
            // distrib.style.width = '230px'
            distribBot.style.width = '0px'
            distribTopping.classList.add('distrib-topping')
            boardTopping.classList.add('next-board')
        }, 100);
        // next
        boardTitle.querySelector('.straw').classList.remove('hidden')
        boardTitle.querySelector('.flavor').classList.add('hidden')
        boardTitle.querySelector('.topping').classList.add('hidden')
        boardStraw.classList.remove('hidden')
        boardFlavor.classList.add('hidden')
        boardTopping.classList.add('hidden')
        boardSize.classList.add('hidden')
    })
})

// BOARD > TOPPING > DISTRIB BUBBLE
// BOARD > TOPPING > DISTRIB BUBBLE > tapioca
tapiocaButton.addEventListener('click', function () {
    tapioca.classList.remove('hidden')
    jelly.classList.add('hidden')
    multi.classList.add('hidden')
})
// BOARD > TOPPING > DISTRIB BUBBLE > jelly
jellyButton.addEventListener('click', function () {
    jelly.classList.remove('hidden')
    tapioca.classList.add('hidden')
    multi.classList.add('hidden')
})
// BOARD > TOPPING > DISTRIB BUBBLE > both
multiButton.addEventListener('click', function () {
    multi.classList.remove('hidden')
    tapioca.classList.add('hidden')
    jelly.classList.add('hidden')
})

// BOARD > STRAW 
strawButton.forEach(strawButton => {
    strawButton.addEventListener('click', () => {
        stickSound.play()
        // strawSound.play()
        straw.classList.add('straw-animation')
        straw.style.background = strawButton.getAttribute('data')
        circleLiquid.style.background = 'white'
        setTimeout(() => {
            // distrib.style.width = '0px'
            // distribBot.style.width = '0px'
            boardStraw.classList.add('next-board')
        }, 100);
        activeButton = strawButton
        // boardStraw.classList.remove('hidden')
        boardTitle.querySelector('.done').classList.remove('hidden')
        boardTitle.querySelector('.label').classList.add('hidden')
        boardTitle.querySelector('.straw').classList.add('hidden')
        boardFlavor.classList.add('hidden')
        boardLabel.classList.add('hidden')
        boardTopping.classList.add('hidden')
        boardSize.classList.add('hidden')
        boardStraw.classList.add('hidden')
        boardDone.classList.remove('hidden')
    })
})

//DISK MUSIC PLAY
//play

playButton.addEventListener('click', () => {
    disk.classList.add('disk-animation')
    playlist[playlistStateIndex].play()
    pauseButton.classList.remove('hidden')
    playButton.classList.add('hidden')
})
//pause
pauseButton.addEventListener('click', () => {
    disk.classList.remove('disk-animation')
    playlist[playlistStateIndex].pause()
    pauseButton.classList.add('hidden')
    playButton.classList.remove('hidden')
})
//next
nextButton.addEventListener("click", () => {
    disk.classList.add('disk-animation')
    pauseButton.classList.remove('hidden')
    playButton.classList.add('hidden')
    playlist[playlistStateIndex].currentTime = 0
    playlist[playlistStateIndex].pause()
    playlistStateIndex = (playlistStateIndex + 1) % playlist.length
    playlist[playlistStateIndex].play()
})
//prev
prevButton.addEventListener("click", () => {
    disk.classList.add("disk-animation")
    pauseButton.classList.remove("hidden")
    playButton.classList.add("hidden")
    playlist[playlistStateIndex].currentTime = 0
    playlist[playlistStateIndex].pause()
    if(playlistStateIndex === 0){
        playlistStateIndex = playlist.length - 1
    }else{
        playlistStateIndex--
    }
    playlist[playlistStateIndex].play()
})
// prevButton.addEventListener("click", () => {
//     disk.classList.add('disk-animation')
//     pauseButton.classList.remove('hidden')
//     playButton.classList.add('hidden')
//     playlist[playlistStateIndex].currentTime = 0
//     playlist[playlistStateIndex].pause()
//     playlistStateIndex = (playlistStateIndex - 1) % playlist.length
//     playlist[playlistStateIndex].play()
//     if (playStateIndex === 0) {
//         playStateIndex = 3
//     }
// })
//autoplay
playlist.forEach((sound) => {
    sound.addEventListener("ended", () => {
        (playlistStateIndex + 1) % playlist.length
        playlist[playlistStateIndex].play()
    })
})

//FOTTER
//FOOTER > TRASH
trash.addEventListener('click', () => {
    trashSound.play()
    // window.location.reload();
    tapioca.classList.add('hidden')
    jelly.classList.add('hidden')
    multi.classList.add('hidden')
    setTimeout(() => {
        boardSize.classList.remove('next-board')
        boardLabel.classList.remove('next-board')
        boardFlavor.classList.remove('next-board')
        boardTopping.classList.remove('next-board')
        boardDone.classList.remove('next-board')
        boardStraw.classList.remove('next-board')
        distrib.classList.remove('change-distrib')
        // boardSize.classList.add('next-board')
        flavorLiquid.classList.remove('flavor-animation')
        straw.style.background = ('transparent')
        label.style.background = ('transparent')
        boardFlavor.classList.add('hidden')
        boardLabel.classList.add('hidden')
        boardTopping.classList.add('hidden')
        boardStraw.classList.add('hidden')
        boardDone.classList.add('hidden')
    }, 100);
    cup.classList.add('hidden')
    distrib.classList.remove('change-distrib')
    // distrib.classList.remove('hidden')
    distribBot.style.width = '20%'
    // flavorButton.style.background = "#4e4444"
    boardTitle.querySelector('.size').classList.remove('hidden')
    boardTitle.querySelector('.topping').classList.add('hidden')
    boardTitle.querySelector('.flavor').classList.add('hidden')
    boardTitle.querySelector('.done').classList.add('hidden')
    boardTitle.querySelector('.label').classList.add('hidden')
    boardTitle.querySelector('.straw').classList.add('hidden')
    boardSize.classList.remove('hidden')
})