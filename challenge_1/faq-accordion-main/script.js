const Pregunta1 = document.getElementById("Pregunta_1")
const Pregunta2 = document.getElementById("Pregunta_2")
const Pregunta3 = document.getElementById("Pregunta_3")
const Pregunta4 = document.getElementById("Pregunta_4")

const Respuesta1 = document.getElementById("Respuesta_1")
const Respuesta2 = document.getElementById("Respuesta_2")
const Respuesta3 = document.getElementById("Respuesta_3")
const Respuesta4 = document.getElementById("Respuesta_4")

const Boton1 = document.getElementById('Buton1')
const Boton2 = document.getElementById('Buton2')
const Boton3 = document.getElementById('Buton3')
const Boton4 = document.getElementById('Buton4')

Pregunta1.addEventListener('click',()=>{
    if(Respuesta1.style.display==='none')
    {
        Respuesta1.style.display ='block'
        Respuesta2.style.display ='none'
        Respuesta3.style.display ='none'
        Respuesta4.style.display ='none'
         Boton1.src ="./assets/images/icon-minus.svg"
         Boton2.src ="./assets/images/icon-plus.svg"
         Boton3.src ="./assets/images/icon-plus.svg"
         Boton4.src ="./assets/images/icon-plus.svg"
    }
    else{
        Respuesta1.style.display ='none'
        Boton1.src ="./assets/images/icon-plus.svg"
    }
})
Boton1.addEventListener('click',()=>{
    if(Respuesta1.style.display==='none')
        {
            Respuesta1.style.display ='block'
            Respuesta2.style.display ='none'
            Respuesta3.style.display ='none'
            Respuesta4.style.display ='none'
            Boton1.src ="./assets/images/icon-minus.svg"
            Boton2.src ="./assets/images/icon-plus.svg"
            Boton3.src ="./assets/images/icon-plus.svg"
            Boton4.src ="./assets/images/icon-plus.svg"
        }
        else{
            Respuesta1.style.display ='none'
            Boton1.src ="./assets/images/icon-plus.svg"
        }
})

Pregunta2.addEventListener('click',()=>{
    if(Respuesta2.style.display==='none')
    {
        Respuesta1.style.display ='none'
        Respuesta2.style.display ='block'
        Respuesta3.style.display ='none'
        Respuesta4.style.display ='none'
        Boton1.src ="./assets/images/icon-plus.svg"
            Boton2.src ="./assets/images/icon-minus.svg"
            Boton3.src ="./assets/images/icon-plus.svg"
            Boton4.src ="./assets/images/icon-plus.svg"
    }
    else{
        Respuesta2.style.display ='none'
        Boton2.src ="./assets/images/icon-plus.svg"
    }
})
Boton2.addEventListener('click',()=>{
    if(Respuesta2.style.display==='none')
        {
            Respuesta1.style.display ='none'
            Respuesta2.style.display ='block'
            Respuesta3.style.display ='none'
            Respuesta4.style.display ='none'
            Boton1.src ="./assets/images/icon-plus.svg"
            Boton2.src ="./assets/images/icon-minus.svg"
            Boton3.src ="./assets/images/icon-plus.svg"
            Boton4.src ="./assets/images/icon-plus.svg"
        }
        else{
            Respuesta2.style.display ='none'
            Boton2.src ="./assets/images/icon-plus.svg"
        }
})
Pregunta3.addEventListener('click',()=>{
    if(Respuesta3.style.display==='none')
    {
        Respuesta1.style.display ='none'
        Respuesta2.style.display ='none'
        Respuesta3.style.display ='block'
        Respuesta4.style.display ='none'
        Boton1.src ="./assets/images/icon-plus.svg"
        Boton2.src ="./assets/images/icon-plus.svg"
        Boton3.src ="./assets/images/icon-minus.svg"
        Boton4.src ="./assets/images/icon-plus.svg"
    }
    else{
        Respuesta3.style.display ='none'
        Boton3.src ="./assets/images/icon-plus.svg"
    }
})
Boton3.addEventListener('click',()=>{
    if(Respuesta3.style.display==='none')
        {
            Respuesta1.style.display ='none'
            Respuesta2.style.display ='none'
            Respuesta3.style.display ='block'
            Respuesta4.style.display ='none'
            Boton1.src ="./assets/images/icon-plus.svg"
            Boton2.src ="./assets/images/icon-plus.svg"
            Boton3.src ="./assets/images/icon-minus.svg"
            Boton4.src ="./assets/images/icon-plus.svg"
        }
        else{
            Respuesta3.style.display ='none'
            Boton3.src ="./assets/images/icon-plus.svg"
        }
})
Pregunta4.addEventListener('click',()=>{
    if(Respuesta4.style.display==='none')
    {
        Respuesta1.style.display ='none'
        Respuesta2.style.display ='none'
        Respuesta3.style.display ='none'
        Respuesta4.style.display ='block'
        Boton1.src ="./assets/images/icon-plus.svg"
        Boton2.src ="./assets/images/icon-plus.svg"
        Boton3.src ="./assets/images/icon-plus.svg"
        Boton4.src ="./assets/images/icon-minus.svg"
    }
    else{
        Respuesta4.style.display ='none'
          Boton4.src ="./assets/images/icon-plus.svg"
    }
})
Boton4.addEventListener('click',()=>{
    if(Respuesta4.style.display==='none')
        {
            Respuesta1.style.display ='none'
            Respuesta2.style.display ='none'
            Respuesta3.style.display ='none'
            Respuesta4.style.display ='block'
            Boton1.src ="./assets/images/icon-plus.svg"
            Boton2.src ="./assets/images/icon-plus.svg"
            Boton3.src ="./assets/images/icon-plus.svg"
            Boton4.src ="./assets/images/icon-minus.svg"
        }
        else{
            Respuesta4.style.display ='none'
            Boton4.src ="./assets/images/icon-plus.svg"
        }
})