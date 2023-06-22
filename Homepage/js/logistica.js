//seleccionamos enlaces de la lista
const registrarEvento = document.querySelector('#registrarEvento');
const consultarEvento = document.querySelector('#consultarEvento');
const modificarEvento = document.querySelector('#modificarEvento');
const eliminarEvento = document.querySelector('#eliminarEvento');
const listaEvento = document.querySelector('#listaEvento');


//seleccionamos el div a mostrar.
const main_contentRV = document.querySelector('#main_contentRV');
const contentCV = document.querySelector('#contentCV');
const contentMV = document.querySelector('#contentMV');
const contentEV = document.querySelector('#contentEV');
const contentLE = document.querySelector('#contentLE');



//eventos al hacer click
registrarEvento.addEventListener('click', () => {
    //mostramos el div que seleccionamos
    main_contentRV.style.display ='block';
    contentCV.style.display ='none';
    contentMV.style.display ='none';
    contentEV.style.display ='none';
    contentLE.style.display ='none';
})

consultarEvento.addEventListener('click', () => {
    //mostramos el div que seleccionamos
    main_contentRV.style.display ='none';
    contentCV.style.display ='block';
    contentMV.style.display ='none';
    contentEV.style.display ='none';
    contentLE.style.display ='none';
})
modificarEvento.addEventListener('click', () => {
    //mostramos el div que seleccionamos
    main_contentRV.style.display ='none';
    contentCV.style.display ='none';
    contentMV.style.display ='block';
    contentEV.style.display ='none';
    contentLE.style.display ='none';
})
eliminarEvento.addEventListener('click', () => {
    //mostramos el div que seleccionamos
    main_contentRV.style.display ='none';
    contentCV.style.display ='none';
    contentMV.style.display ='none';
    contentEV.style.display ='block';
    contentLE.style.display ='none';
})
listaEvento.addEventListener('click', () => {
    //mostramos el div que seleccionamos
    main_contentRV.style.display ='none';
    contentCV.style.display ='none';
    contentMV.style.display ='none';
    contentEV.style.display ='none';
    contentLE.style.display ='block';
})