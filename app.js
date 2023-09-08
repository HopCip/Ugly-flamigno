import myData from './data.js'

// NAVBAR <a></a> elements

const aListokEl = document.getElementById('a-listok')
const aDomovEl = document.getElementById('a-domov')
const aAkciekEl = document.getElementById('a-akcie')
const aFotkykEl = document.getElementById('a-fotky')

// MAIN BUTTONS

const btnOne = document.getElementById('btn-one')
const btnTwo = document.getElementById('btn-two')

// NAVIGATION TO DIVS

const eventsDiv = document.getElementById('events-div')
const listok = document.getElementById('listok')
const home = document.getElementById('description')
const gallery = document.getElementById('fotoalbum')

const modalImg = document.getElementById('modalImage')
const galleryImages = document.querySelectorAll('.photo img[data-image]')
const closeBtn = document.getElementById('close')
const modal = document.getElementById('myModal')

//BUTTONS IN MODALS

const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

//ZOBRAZOVANIE OBRÁZKOV

galleryImages.forEach((img) => {
  img.addEventListener('click', showImage)
})

function showImage(event) {
  const modal = document.getElementById('myModal')
  const modalImg = document.getElementById('modalImage')
  const clickedImg = event.target
  const imgSrc = clickedImg.getAttribute('data-image')

  modal.style.display = 'block'
  modalImg.src = imgSrc
}

function closeModal() {
  modal.style.display = 'none'
}

closeBtn.addEventListener('click', closeModal)

// PHOTOS SWITCHER FUNCTIONS

let currentImageIndex = 0

// NEXT PHOTO
function showNextImage() {
  currentImageIndex++
  if (currentImageIndex >= galleryImages.length) {
    currentImageIndex = 0
  }
  const imgSrc = galleryImages[currentImageIndex].getAttribute('data-image')
  modalImg.src = imgSrc
}

// PREVIOUS PHOTO
function showPreviousImage() {
  currentImageIndex--
  if (currentImageIndex < 0) {
    currentImageIndex = galleryImages.length - 1
  }
  const imgSrc = galleryImages[currentImageIndex].getAttribute('data-image')
  modalImg.src = imgSrc
}

nextBtn.addEventListener('click', showNextImage)
prevBtn.addEventListener('click', showPreviousImage)

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft') {
    showPreviousImage()
  } else if (event.key === 'ArrowRight') {
    showNextImage()
  }
})

// SCROLING FUNCTIONS

btnOne.addEventListener('click', () => {
  const divTopPosition = eventsDiv.getBoundingClientRect().top
  const newPosition = window.scrollY + divTopPosition - 30
  window.scrollTo({ top: newPosition, behavior: 'smooth' })
})

btnTwo.addEventListener('click', () => {
  const divTopPosition = listok.getBoundingClientRect().top
  const newPosition = window.scrollY + divTopPosition - 30
  window.scrollTo({ top: newPosition, behavior: 'smooth' })
})

aDomovEl.addEventListener('click', () => {
  const divTopPosition = home.getBoundingClientRect().top
  const newPosition = window.scrollY + divTopPosition - 30
  window.scrollTo({ top: newPosition, behavior: 'smooth' })
})

aAkciekEl.addEventListener('click', () => {
  const divTopPosition = eventsDiv.getBoundingClientRect().top
  const newPosition = window.scrollY + divTopPosition - 30
  window.scrollTo({ top: newPosition, behavior: 'smooth' })
})

aListokEl.addEventListener('click', () => {
  const divTopPosition = listok.getBoundingClientRect().top
  const newPosition = window.scrollY + divTopPosition - 30
  window.scrollTo({ top: newPosition, behavior: 'smooth' })
})

aFotkykEl.addEventListener('click', () => {
  const divTopPosition = gallery.getBoundingClientRect().top
  const newPosition = window.scrollY + divTopPosition - 30
  window.scrollTo({ top: newPosition, behavior: 'smooth' })
})

// RENDERING

const render = (data) => {
  const events = document.querySelector('.events')

  events.innerHTML = ''

  data.map(({ image, datum, meno, popis }) => {
    const eventHTML = `
      <div class="event">
        <div
          class="event-image"
          style="background-image: url('${image}')"
        ></div>
        <div class="event-text">
          <p class="event-date">${datum}</p>
          <p class="event-dj colored-span">${meno}</p>
          <p class="event-description">${popis}</p>
        </div>
      </div>
    `

    events.innerHTML += eventHTML
  })
}

render(myData)
