function changeClass(){
    const sidebar = document.getElementById('sidebar')
    const titulo = document.getElementById('titulo-sidebar')
    const lista = document.getElementById('lista-botones')
    
    sidebar.classList.toggle('sidebar-check')
    titulo?.classList.toggle('titulo-check')
    lista?.classList.toggle('lista-botones-check')
  } 