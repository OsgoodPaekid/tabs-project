const texts = {
    "past": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, doloremque?",
    "aim": "Lorem ipsum dolor sit amet.",
    "score": "Lorem ipsum dolor sit amet. hol off danis"
}

// click on the the various headers to reveal its content
let textSection = document.getElementById("text-section")
const vision = document.getElementById("vis")
const goals = document.getElementById("goals")
const history = document.getElementById("his")

// vision.addEventListener("click", function(){    
//     textSection.innerHTML = texts.past
//     console.log(textSection.innerHTML)
// })

// goals.addEventListener("click", function(){    
//     textSection.innerHTML = texts.score
//     console.log(textSection.innerHTML)
// })

// history.addEventListener("click", function(){    
//     textSection.innerHTML = texts.aim
//     console.log(textSection.innerHTML)
// })

function toggleThis(a, b){
    a.addEventListener("click", function(){    
        textSection.innerHTML = b
        console.log(textSection.innerHTML)
    })
     
}
toggleThis(vision, texts.past)
toggleThis(goals, texts.score)
toggleThis(histoy, texts.aim)
