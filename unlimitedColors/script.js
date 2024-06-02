startButton = document.getElementById("start")
stopButton = document.getElementById("stop")



function changeColor(){
    const hex = "0123456789ABCDEF"
    let color = '#'

    for (let i = 0; i < 6; i++) {
        randomValue = (Math.random()*15).toFixed()
        color = color + hex[randomValue]
    }
    
    document.body.style.backgroundColor = color
}

const colorInterval = ()=>{
    intervalId = setInterval(changeColor, 500)
    
}

const stopColorInterval = ()=>{
    clearInterval(intervalId)
}


startButton.addEventListener("click", colorInterval)
stopButton.addEventListener("click", stopColorInterval)

