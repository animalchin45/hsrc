// Image Alt Text
const heroImg = document.getElementById('heroImg')

// Modal
const modal = document.getElementById('actionModal')

// Open Button
const btn = document.getElementById('btn')

// Close Button
const closeBtn = document.getElementById('closeBtn')

// User clicks open button
btn.onclick = () => {
  modal.style.display = 'flex'
  document.getElementById('alt').innerHTML = heroImg.alt
}

// User clicks close button
closeBtn.onclick = () => (modal.style.display = 'none')

// User clicks outside of modal
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}
