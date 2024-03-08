const li        = document.querySelectorAll('.li')
const bloque    = document.querySelectorAll('.bloque')

// CLICK en li
    // TODOS .li quitar la clase activo
    // TODOS .bloque quitar la clase activo
    // .li con la posicion se añadimos la clase activo
    // .bloque con la posicion se añadimos la clase activo

// Recorriendo todos los LI
li.forEach( ( cadaLi , i )=>{
    // Asignando un CLICK a CADALI
    li[i].addEventListener('click',()=>{

        // Recorrer TODOS los .li
        li.forEach( ( cadaLi , i )=>{
            // Quitando la clase activo de cada li
            li[i].classList.remove('activo')
            // Quitando la clase activo de cada bloque
            bloque[i].classList.remove('activo')
        })

        // En el li que hemos click le añadimos la clase activo
        li[i].classList.add('activo')
        // En el bloque con la misma posición le añadimos la clase activo
        bloque[i].classList.add('activo')

    })
})


const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')
// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto

punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto

    punto[i].addEventListener('click',()=>{
        console.log("3")
        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -33.33;

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})


'use strict'

/* 
    // Cuando hacemos CLICK en .a
        // .lightbox ADD CLASS 'activo'
        // .img ATTR "SRC"
        // .grande COLOCAR el SRC de .img

    // Cuando hacemos CLICK en .cerrar
        // .lightbox REMOVE CLASS 'activo'
*/

const enlaces  = document.querySelectorAll('.ul2 .a')
const lightbox = document.querySelector('.lightbox')
const enorme   = document.querySelector('.grande2')
const cerrar   = document.querySelector('.cerrar')

enlaces.forEach(( cadaEnlace , i )=>{
    enlaces[i].addEventListener('click', ( e )=>{
        e.preventDefault()
        let ruta = cadaEnlace.querySelector('.img2').src
        console.log( ruta ) 

        lightbox.classList.add('activo')
        enorme.setAttribute('src', ruta)

    })
})

cerrar.addEventListener('click', ()=>{
    lightbox.classList.remove('activo')
})