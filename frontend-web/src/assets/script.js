function changeClass(){
    const sidebar = document.getElementById('sidebar')
    const titulo = document.getElementById('titulo-sidebar')
    const lista = document.getElementById('lista-botones')
    const header = document.getElementById('contenedor-header')
    const welcome = document.getElementById('contenedor-welcome')
    const lending = document.getElementById('contenedor-lendings')
    
    sidebar.classList.toggle('sidebar-check')
    titulo?.classList.toggle('titulo-check')
    lista?.classList.toggle('lista-botones-check')
    header?.classList.toggle('contenedor-header')
    header?.classList.toggle('contenedor-header-check')
    welcome?.classList.toggle('contenedor-welcome')
    welcome?.classList.toggle('contenedor-welcome-check')
    lending?.classList.toggle('contenedor-lendings')
    lending?.classList.toggle('contenedor-lendings-check')
  } 