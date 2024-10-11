burger.onclick = function (e) { 
  e.preventDefault()
  document.getElementById('navmenu').classList.remove('header__navmenu')
  document.getElementById('navmenu').classList.add('header__navmenu_mobile')
    
  document.getElementById('burger').style.display='none'
  document.getElementById('close').style.display='block'
  console.log(screenWidth) 
}
  window.addEventListener('resize', () => {if(window.screen.width > '878') {
  document.getElementById('navmenu').classList.remove('header__navmenu_mobile')
  document.getElementById('navmenu').classList.add('header__navmenu') 
  document.getElementById('close').style.display='none'
}
})
