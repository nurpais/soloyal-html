if (document.querySelector('.search-bar')) {
  const searchBar = document.querySelector('.search-bar')

  window.addEventListener('scroll', function (e) {
    if (window.scrollY >= 350) {
      searchBar.classList.add('search-bar--active')
    } else {
      searchBar.classList.remove('search-bar--active')
    }
  })
}
