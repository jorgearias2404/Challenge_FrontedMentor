const Botones = document.querySelectorAll(".Button")
const Form = document.getElementById("Form")
const Body_1 = document.getElementById("Body_1")
const Body_2 = document.getElementById("Body_2")
// AME APRENDER A HACER ESTO
let activeButon = null;
let BotonValue =null;
Botones.forEach(Boton =>{
    Boton.addEventListener("click", () => {
        if(Boton===activeButon)
        {   BotonValue=null;
            activeButon.classList.remove("active");
        }
        else{
            if(activeButon)
                {
                    BotonValue=null;
                    activeButon.classList.remove("active");
                }
            Boton.classList.toggle("active");
            activeButon = Boton;
            BotonValue = Boton.value;
        }
        
    })
})

Form.addEventListener('submit',(event)=>{
    if(BotonValue===null)
    {
        event.preventDefault();
      alert("Debe seleccionar algun valor")
    }else{
        event.preventDefault();
        Body_1.style.display='none'
        Body_2.style.display='block'
        
    }
   
})