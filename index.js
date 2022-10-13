const texts = {
    "past": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, doloremque?",
    "aim": "Lorem ipsum dolor sit amet.",
    "score": "Lorem ipsum dolor sit amet. hol off danis"
}




// click on the the various headers to reveal its content
let textSection = document.getElementById("text-section").innerHTML
const vision = document.getElementById("vis")
const goals = document.getElementById("goals")
const history = document.getElementById("his")

vision.addEventListener("click", function(){    
    textSection = texts.past
    console.log(textSection)
})
