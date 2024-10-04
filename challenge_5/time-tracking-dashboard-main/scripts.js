const Botones =document.querySelectorAll('.button_container h3')
const work= document.getElementById('work_info')
const work_p=document.getElementById('work_info_last')
const play =document.getElementById('play_info')
const play_p=document.getElementById('play_info_last')
const study =document.getElementById('study_info')
const study_p =document.getElementById('study_info_last')
const excercise=document.getElementById('excercise_info')
const excercise_p=document.getElementById('excercise_info_last')
const social =document.getElementById('social_info')
const social_p =document.getElementById('social_info_last')
const self_care =document.getElementById('selfcare_info')
const self_care_p =document.getElementById('selfcare_info_last')

Botones.forEach(boton => {
    boton.addEventListener('click', () => {
       
        fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Ahora puedes utilizar los datos en la variable data
     if(boton.textContent === "Daily")
        {
            work.textContent = `${data[0].timeframes.daily.current}hrs`;
            work_p.textContent=`Last Day - ${data[0].timeframes.daily.previous}hrs`

            play.textContent = `${data[1].timeframes.daily.current}hrs`;
            play_p.textContent=`Last Day - ${data[1].timeframes.daily.previous}hrs`

             study.textContent = `${data[2].timeframes.daily.current}hrs`;
            study_p.textContent=`Last Day - ${data[2].timeframes.daily.previous}hrs`
              
            excercise.textContent = `${data[3].timeframes.daily.current}hrs`;
            excercise_p.textContent=`Last Day - ${data[3].timeframes.daily.previous}hrs`

             social.textContent = `${data[4].timeframes.daily.current}hrs`;
            social_p.textContent=`Last Day - ${data[4].timeframes.daily.previous}hrs`

            self_care.textContent = `${data[5].timeframes.daily.current}hrs`;
            self_care_p.textContent=`Last Day - ${data[5].timeframes.daily.previous}hrs`

        }
        if(boton.textContent === "Weekly")
        {
            work.textContent = `${data[0].timeframes.weekly.current}hrs`;
            work_p.textContent=`Last Week - ${data[0].timeframes.weekly.previous}hrs`

            play.textContent = `${data[1].timeframes.weekly.current}hrs`;
            play_p.textContent=`Last Week - ${data[1].timeframes.weekly.previous}hrs`

             study.textContent = `${data[2].timeframes.weekly.current}hrs`;
            study_p.textContent=`Last Week - ${data[2].timeframes.weekly.previous}hrs`
              
            excercise.textContent = `${data[3].timeframes.weekly.current}hrs`;
            excercise_p.textContent=`Last Week - ${data[3].timeframes.weekly.previous}hrs`

             social.textContent = `${data[4].timeframes.weekly.current}hrs`;
            social_p.textContent=`Last Week - ${data[4].timeframes.weekly.previous}hrs`

            self_care.textContent = `${data[5].timeframes.weekly.current}hrs`;
            self_care_p.textContent=`Last Week - ${data[5].timeframes.weekly.previous}hrs`

        }  
        if (boton.textContent === "Monthly")
        {
            work.textContent = `${data[0].timeframes.monthly.current}hrs`;
            work_p.textContent=`Last Month - ${data[0].timeframes.monthly.previous}hrs`

            play.textContent = `${data[1].timeframes.monthly.current}hrs`;
            play_p.textContent=`Last Month - ${data[1].timeframes.monthly.previous}hrs`

             study.textContent = `${data[2].timeframes.monthly.current}hrs`;
            study_p.textContent=`Last Month - ${data[2].timeframes.monthly.previous}hrs`
              
            excercise.textContent = `${data[3].timeframes.monthly.current}hrs`;
            excercise_p.textContent=`Last Month - ${data[3].timeframes.monthly.previous}hrs`

             social.textContent = `${data[4].timeframes.monthly.current}hrs`;
            social_p.textContent=`Last Month - ${data[4].timeframes.monthly.previous}hrs`

            self_care.textContent = `${data[5].timeframes.monthly.current}hrs`;
            self_care_p.textContent=`Last Month - ${data[5].timeframes.monthly.previous}hrs`
        }
  })
  .catch(error => console.error('Error:', error));
  })
    
});

