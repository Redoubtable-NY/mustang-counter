// document.getElementById("count-el").innerText = 5

// comment it out cmd + k + c

// let firstBatch = 5

// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count)

// let count = 5

// console.log(count)

// function increment() {
//     console.log("The button was clicked")
// }

// You stopped on lesson using functions to write less code within scrimba...

//camelCase for javascript 

let countEl = document.getElementById("count-el") // passed in arguments

// console.log(countEl) // passed in arguments

let count = 0 

let saveEl = document.getElementById("save-el")

function increment() {
    count += + 1
    // += adds on to the current value of what's to the left of it
    countEl.textContent = count
}

function save() {
    let ongoingCount = count + " - "
    saveEl.textContent += " " + ongoingCount
    console.log(count)
    count = 0
    countEl.innerText = count
}

// console.log(4 + 5) 9
// console.log("2" + "4") 24
// console.log("5" + 1) 51
// console.log(100 + "100") 100100

// let wish = "I'd love to see the show \"The Lion King\"." use the escape character "\" to tell javascript that the character that comes next should not be viewed as a string delimetter.