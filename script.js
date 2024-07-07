const hourEle = document.querySelector(".hr")
const minuteEle = document.querySelector(".min")
const secondEle = document.querySelector(".sec")

setInterval(()=>{
    let date = new Date()

    hr = date.getHours()*30
    min = date.getMinutes()*6
    sec = date.getSeconds()*6

    hourEle.style.transform = `rotateZ(${(hr) + min/12}deg)`
    minuteEle.style.transform = `rotateZ(${min}deg)`
    secondEle.style.transform = `rotateZ(${sec}deg)`

})