//evento que al dar click en las tres lineas mostrara y ocultara el side-menu

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});

// eventos que ocurren para mostrar los formularios del CRUD del inventario

const registrarProducto = document.querySelector('#registrarProducto');
const consultarProducto = document.querySelector('#consultarProducto');
const modificarProducto = document.querySelector('#modificarProducto');
const eliminarProducto = document.querySelector('#eliminarProducto');


//seleccionamos el div a mostrar.
const main_contentRV = document.querySelector('#main_contentRV');
const contentCV = document.querySelector('#contentCV');
const contentMV = document.querySelector('#contentMV');
const contentEV = document.querySelector('#contentEV');
const contentLE = document.querySelector('#contentLE');



//eventos al hacer click
registrarProducto.addEventListener('click', () => {
    //mostramos el div que seleccionamos
    main_contentRV.style.display ='block';
    contentCV.style.display ='none';
    contentMV.style.display ='none';
    contentEV.style.display ='none';
    contentLE.style.display ='none';
})

consultarProducto.addEventListener('click', () => {
    //mostramos el div que seleccionamos
    main_contentRV.style.display ='none';
    contentCV.style.display ='block';
    contentMV.style.display ='none';
    contentEV.style.display ='none';
    contentLE.style.display ='none';
})
modificarProducto.addEventListener('click', () => {
    //mostramos el div que seleccionamos
    main_contentRV.style.display ='none';
    contentCV.style.display ='none';
    contentMV.style.display ='block';
    contentEV.style.display ='none';
    contentLE.style.display ='none';
})
eliminarProducto.addEventListener('click', () => {
    //mostramos el div que seleccionamos
    main_contentRV.style.display ='none';
    contentCV.style.display ='none';
    contentMV.style.display ='none';
    contentEV.style.display ='block';
    contentLE.style.display ='none';
})
listaProducto.addEventListener('click', () => {
    //mostramos el div que seleccionamos
    main_contentRV.style.display ='none';
    contentCV.style.display ='none';
    contentMV.style.display ='none';
    contentEV.style.display ='none';
    contentLE.style.display ='block';
})