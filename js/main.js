// burger=>mobile-menu

burger.onclick = function (e) { 
  e.preventDefault()
  document.getElementById('navmenu').classList.remove('header__navmenu')
  document.getElementById('navmenu').classList.add('header__navmenu_mobile')
    
  document.getElementById('burger').style.display='none'
  document.getElementById('close').style.display='block'
}
  window.addEventListener('resize', () => {
    if(window.screen.width > '878') {
  document.getElementById('navmenu').classList.remove('header__navmenu_mobile')
  document.getElementById('navmenu').classList.add('header__navmenu') 
  document.getElementById('close').style.display='none'
}
})


// btn=>form
document.getElementById('btnNavmenu').addEventListener('click', function(e) { 
  e.preventDefault()
  document.getElementById('form').classList.remove('form')
  document.getElementById('form').classList.add('form__open')
})
document.getElementById('btnSubtitle').addEventListener('click', function(e) { 
  e.preventDefault()
  document.getElementById('form').classList.remove('form')
  document.getElementById('form').classList.add('form__open')
})

//btn-form=>popup
document.getElementById('btnForm').addEventListener('click', function(e) { 
  e.preventDefault()
  document.getElementById('popup').classList.remove('popup')
  document.getElementById('popup').classList.add('popup__open')
  document.querySelector('.form__window').style.display='none'
})
