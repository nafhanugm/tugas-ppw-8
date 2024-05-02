var home = document.getElementById('nav-home')
var service = document.getElementById('nav-service')
var products = document.getElementById('nav-products')
var header = document.getElementById('header')
window.onscroll = () => {
  if (window.scrollY > 500) {
    if (window.scrollY > 861) {
      home.classList.remove('navbar-item-active')
      home.classList.add('navbar-item')
      service.classList.add('navbar-item')
      service.classList.remove('navbar-item-active')
      products.classList.add('navbar-item-active')
      products.classList.remove('navbar-item')
    } else {
      home.classList.remove('navbar-item-active')
      home.classList.add('navbar-item')
      service.classList.remove('navbar-item')
      service.classList.add('navbar-item-active')
      products.classList.remove('navbar-item-active')
      products.classList.add('navbar-item')
    }
  } else {
    home.classList.remove('navbar-item')
    home.classList.add('navbar-item-active')
    service.classList.remove('navbar-item-active')
    service.classList.add('navbar-item')
    products.classList.remove('navbar-item-active')
    products.classList.add('navbar-item')
  }
}
