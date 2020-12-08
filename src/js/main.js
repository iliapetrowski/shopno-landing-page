

const images = document.querySelectorAll('.works__img-item')
images.forEach(item => item.addEventListener('click', openModalWindow))


function openModalWindow(){
    console.log(this)
    const image = this.src
    const modalImg = document.querySelector('.modal__img')
    const closeIcon = document.querySelector('.modal__icon-close')
    const wrapper = document.querySelector('.wrapper')
    modalImg.src = image
    wrapper.classList.remove('hidden')
    document.body.style.overflow = 'hidden'
    closeIcon.addEventListener('click', ()=>{wrapper.classList.add('hidden'); document.body.style.overflow = 'auto'})
    wrapper.addEventListener('click', ()=>{wrapper.classList.add('hidden');  document.body.style.overflow = 'auto'})



}


