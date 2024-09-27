const Form = document.getElementById('Form')
const Body_1= document.getElementById('Body_1')
const Body_2=document.getElementById('Body_2')
const Error_msg=document.getElementById('Error_email')
const Message = document.getElementById('user-email')
const Dissmiss_Buton = Body_2.querySelector('button')


const Input_Email =document.getElementById('input_email')
let Valor_Input ='';

function validarEmail(email) {
    // Expresión regular para validar correos electrónicos
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

Input_Email.addEventListener('input',()=>{
    Valor_Input = Input_Email.value;
})


Form.addEventListener('submit',(event)=>{
    if(validarEmail(Valor_Input))
    {
        event.preventDefault()
        Body_1.style.display='none'
        Body_2.style.display='block'
        Message.textContent =Valor_Input+'.'
    }
    else{
        event.preventDefault()
        Error_msg.style.display='block'
        Input_Email.style.backgroundColor = '#FFE8E6'
        Input_Email.style.opacity = '100%'
        Input_Email.style.borderColor = 'hsl(4, 100%, 67%)'
        
    }
    
   
})

Dissmiss_Buton.addEventListener('click',()=>{
    Body_1.style.display='block'
    Body_2.style.display='none'
    Input_Email.value =''
    Valor_Input=''
    Input_Email.style.backgroundColor = 'hsl(0, 0%, 100%)'
    Input_Email.style.opacity = '100%'
    Input_Email.style.borderColor = 'black'
      Error_msg.style.display='none'
})