const modalOverlay = document.querySelector('.modal_overlay')
const cards = document.querySelectorAll('.card')



for (let card of cards){
    card.addEventListener('click', () =>{
       const videoId = card.getAttribute("id")
       modalOverlay.classList.add('active')
       window.location.href = `/video?id=${videoId}`
    })
}


document.querySelector('.close_modal').addEventListener('click', ()=>{
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
})






