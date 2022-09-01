// Change main image
const mainImage = document.querySelector('.main-container');
const nightingaleButton = document.querySelector('.nightingale');

nightingaleButton.addEventListener('click', () => {
    mainImage.style.backgroundImage = "url('assets/img/nightingale.jpg')"
});

const thrushButton = document.querySelector('.thrush');

thrushButton.addEventListener('click', () => {
    mainImage.style.backgroundImage = "url('assets/img/thrush.jpg')"
});

const robinButton = document.querySelector('.robin');

robinButton.addEventListener('click', () => {
    mainImage.style.backgroundImage = "url('assets/img/robin.jpg')"
});

const larkButton = document.querySelector('.lark');

larkButton.addEventListener('click', () => {
    mainImage.style.backgroundImage = "url('assets/img/lark.jpg')"
});

const warblerButton = document.querySelector('.warbler');

warblerButton.addEventListener('click', () => {
    mainImage.style.backgroundImage = "url('assets/img/warbler.jpg')"
});

const birdButton = document.querySelector('.logo');

birdButton.addEventListener('click', () => {
    mainImage.style.backgroundImage = "url('assets/img/forest.jpg')"
});

// Add sounds
const button = document.querySelector('.audio-player-button');
const Birds = document.querySelector('.nav-list').querySelectorAll('li');
const audio = new Audio()

button.addEventListener('click', () => {
    button.classList.toggle('pause-button')
    if(button.classList.contains('pause-button')) {
        let isPlay = false
        Birds.forEach((bird) => {
            if(bird.classList.contains('active')) {
                audio.play()
                isPlay = true
            }
        })
        if(!isPlay) {
		    audio.src = 'assets/audio/forest.mp3'
            audio.play()
		}
    } else {
        audio.pause()
    }
})

Birds.forEach((bird) => {
    bird.addEventListener('click', () => {
    if(!bird.classList.contains('active')) {
        Birds.forEach((b1) => {
            b1.classList.remove('active')
        })
        birdButton.classList.remove('active')
    }
    })
})

birdButton.addEventListener('click', () => {
	birdButton.classList.add('active')
	audio.src = 'assets/audio/forest.mp3'
	audio.currentTime = 0
	audio.play()
	button.classList.add('pause-button')
});

nightingaleButton.addEventListener('click', () => {
    nightingaleButton.classList.add('active')
    audio.src = 'assets/audio/nightingale.mp3'
    audio.currentTime = 0
    audio.play()
    button.classList.add('pause-button')
});

thrushButton.addEventListener('click', () => {
    thrushButton.classList.add('active')
    audio.src = 'assets/audio/thrush.mp3'
    audio.currentTime = 0
    audio.play()
    button.classList.add('pause-button')
});

robinButton.addEventListener('click', () => {
    robinButton.classList.add('active')
    audio.src = 'assets/audio/robin.mp3'
    audio.currentTime = 0
    audio.play()
    button.classList.add('pause-button')
});

larkButton.addEventListener('click', () => {
    larkButton.classList.add('active')
    audio.src = 'assets/audio/lark.mp3'
    audio.currentTime = 0
    audio.play()
    button.classList.add('pause-button')
});

warblerButton.addEventListener('click', () => {
    warblerButton.classList.add('active')
    audio.src = 'assets/audio/warbler.mp3'
    audio.currentTime = 0
    audio.play()
    button.classList.add('pause-button')
}); 
