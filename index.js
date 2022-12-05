const work = document.querySelector(".workHour")
const lastWork = document.querySelector(".workBefore")
const play = document.querySelector(".playHour")
const lastPlay = document.querySelector(".playBefore")
const study = document.querySelector(".studyHour")
const lastStudy = document.querySelector(".studyBefore")
const exercise = document.querySelector(".exerciseHour")
const lastExercise = document.querySelector(".exerciseBefore")
const social = document.querySelector(".socialHour")
const lastSocial = document.querySelector(".socialBefore")
const selfCare = document.querySelector(".self-careHour")
const lastSelfCare = document.querySelector(".self-careBefore")
const Day = document.querySelector(".day")
const Week = document.querySelector(".week")
const Month = document.querySelector(".Month")



fetch("data.json")
  .then(res => res.json())
  .then(data => {


    Day.addEventListener("click", DayData)

    function DayData () {

      work.textContent = `${data[0].timeframes.daily.current}hrs`
      lastWork.innerHTML = " &nbsp" +  ` ${data[0].timeframes.daily.previous}hrs`
      play.textContent = `${data[1].timeframes.daily.current}hrs`
      lastPlay.innerHTML = " &nbsp" +  ` ${data[1].timeframes.daily.previous}hrs`
      study.textContent = `${data[2].timeframes.daily.current}hrs`
      lastStudy.innerHTML = " &nbsp" +  ` ${data[2].timeframes.daily.previous}hrs`
      exercise.textContent = `${data[3].timeframes.daily.current}hrs`
      lastExercise.innerHTML = " &nbsp" +  ` ${data[3].timeframes.daily.previous}hrs`
      social.textContent = `${data[4].timeframes.daily.current}hrs`
      lastSocial.innerHTML = " &nbsp" +  ` ${data[4].timeframes.daily.previous}hrs`
      selfCare.textContent = `${data[5].timeframes.daily.current}hrs`
      lastSelfCare.innerHTML = " &nbsp" +  ` ${data[5].timeframes.daily.previous}hrs`
      
    }

    Week.addEventListener("click", WeekData)

    function WeekData() {

        work.textContent = `${data[0].timeframes.weekly.current}hrs`
      lastWork.innerHTML = " &nbsp" +  ` ${data[0].timeframes.weekly.previous}hrs`
      play.textContent = `${data[1].timeframes.weekly.current}hrs`
      lastPlay.innerHTML = " &nbsp" +  ` ${data[1].timeframes.weekly.previous}hrs`
      study.textContent = `${data[2].timeframes.weekly.current}hrs`
      lastStudy.innerHTML = " &nbsp" +  ` ${data[2].timeframes.weekly.previous}hrs`
      exercise.textContent = `${data[3].timeframes.weekly.current}hrs`
      lastExercise.innerHTML = " &nbsp" +  ` ${data[3].timeframes.weekly.previous}hrs`
      social.textContent = `${data[4].timeframes.weekly.current}hrs`
      lastSocial.innerHTML = " &nbsp" +  ` ${data[4].timeframes.weekly.previous}hrs`
      selfCare.textContent = `${data[5].timeframes.weekly.current}hrs`
      lastSelfCare.innerHTML = " &nbsp" +  ` ${data[5].timeframes.weekly.previous}hrs`
      
    }

    Month.addEventListener("click", MonthData)
    
    function MonthData() {

       work.textContent = `${data[0].timeframes.monthly.current}hrs`
      lastWork.innerHTML = " &nbsp" +  ` ${data[0].timeframes.monthly.previous}hrs`
      play.textContent = `${data[1].timeframes.monthly.current}hrs`
      lastPlay.innerHTML = " &nbsp" +  ` ${data[1].timeframes.monthly.previous}hrs`
      study.textContent = `${data[2].timeframes.monthly.current}hrs`
      lastStudy.innerHTML = " &nbsp" +  ` ${data[2].timeframes.monthly.previous}hrs`
      exercise.textContent = `${data[3].timeframes.monthly.current}hrs`
      lastExercise.innerHTML = " &nbsp" +  ` ${data[3].timeframes.monthly.previous}hrs`
      social.textContent = `${data[4].timeframes.monthly.current}hrs`
      lastSocial.innerHTML = " &nbsp" +  ` ${data[4].timeframes.monthly.previous}hrs`
      selfCare.textContent = `${data[5].timeframes.monthly.current}hrs`
      lastSelfCare.innerHTML = " &nbsp" +  ` ${data[5].timeframes.monthly.previous}hrs`
      
    }
  })
