const eventsContainer = document.querySelector('.events-container')
// const nav = document.querySelector('nav') <-- hapus kalo mau pake bigmac.js, bentrok cuy
const welcomeEvent = document.querySelector('.welcome-event')
const form = document.querySelector('.form')

const showEvents = (event) => {
  const { name, phone, email, description } = event

  const output = `
        <div class="card">
          <div class="card--details">
              <h1>${name}</h1>
              <p>phone: ${phone}</p>
              <p>email: ${email}</p>
             <p>${description}</p>
          </div>
        </div>
        `
  eventsContainer.innerHTML += output;
}

const showLatestEvent = (latestEvent) => {

  const { name, phone, email, description } = latestEvent
  // Get the first event
  welcomeEvent.innerHTML = `
    <h1>${name}</h1>
      <p>phone: ${phone}</p>
      <p>email: ${email}</p>    
    <p>${description.length >= 100 ? `${description.substring(0, 100)}...` : description}</p>`
}

form.addEventListener('submit', e => {
  e.preventDefault()
  addNewEvent()
})