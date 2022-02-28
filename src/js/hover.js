document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('mouseenter', function (e) {
    document.documentElement.classList.add('overlay-active')
    this.classList.add('active-card')
  })

  card.addEventListener('mouseleave', function (e) {
    document.documentElement.classList.remove('overlay-active')
    this.classList.remove('active-card')
  })
})
