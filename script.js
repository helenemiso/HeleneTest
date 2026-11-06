const text = "Der Strang, die Strange, die Strähne oder der Schneller besteht aus einer begrenzten Länge von Garn, das spiralförmig in Form einer mehrlagigen Schleife übereinander gewickelt wird."

const container = document.getElementById("container")

const listOfWords = text.split(" ")

const anticipatedWortWidth = 200

console.log(listOfWords)

// Loop Through all the words in our list
listOfWords.forEach(word => {

    
    console.log(word)

    const wordElement = document.createElement("span")

    
 //   const scaleValueX = Math.random()
  //  const scaleValueY = Math.random()

 //  wordElement.style.transform = `scale(${scaleValueX}, ${scaleValueY})`


 //   const wghtRange = 800 - 100 
 //   const wghtValue = Math.random() * wghtRange + 100

  //  const wdthRange = 200 - 1 
 //   const wdthValue = Math.random() * wdthRange + 1

 //   const fontVariationSettings = `"wght" ${wghtValue}, "wdth" ${wdthValue}`
 //   wordElement.style.fontVariationSettings = fontVariationSettings

 //   const degree = Math.random() * 80
//    wordElement.style.transform = `scale(0.8) skew(${degree}deg)`


/*
    const r = 255 
    const g = Math.random() * 255 
    const b = Math.random() * 255 

    const color = `rgb(${r}, ${g}, ${b})`

    wordElement.style.color = color
    
*/
 //   console.log(wordElement)
    wordElement.innerHTML = word 

    container.appendChild(wordElement)



})

document.addEventListener("mousemove", e => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    const x = mouseX / window.innerWidth
    const y = mouseY / window.innerHeight

    const wghtRange = 800 - 100
    const wght = x * wdthRange + 100

    const wdthRange = 200 - 1
    const wdth = y * wdthRange + 1

    container.style.fontVariationSettings = `"wght" ${wght}, "wdth" ${wdth}`

    console.log(x,y)
})