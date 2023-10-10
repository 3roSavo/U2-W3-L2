const inputReference = document.getElementById("name")
const saveButtonReference = document.getElementById("save-btn")
const removeButtonReference = document.getElementById("remove-btn")
const list = document.getElementById("list")

const namesArray = "names-array-memory"


class Names {
    constructor(_name) {
        this.name = _name
    }
}


const saveName = () => {
    const inputValue = inputReference.value
    const newName = new Names(inputValue)


    const getMemory = localStorage.getItem(namesArray)

    if (inputValue) {

        if (getMemory) {

            const arrayFromStringhyMemory = JSON.parse(getMemory)

            list.innerText = ""

            // for (let i = 0; i < arrayFromStringhyMemory.length; i++) {
            //     let newLi = document.createElement("li")
            //     newLi.innerText = arrayFromStringhyMemory[i]
            //     list.appendChild(newLi)
            // }

            arrayFromStringhyMemory.push(inputValue)

            
            arrayFromStringhyMemory.forEach((name) => {
                let newLi = document.createElement("li")
                newLi.innerText = name
                list.appendChild(newLi)
            })
            
            

            localStorage.setItem(namesArray, JSON.stringify(arrayFromStringhyMemory))



        } else {
            const array = []
            
            array.push(inputValue)
            
            let newLi = document.createElement("li")
            newLi.innerText = array[0]
            list.appendChild(newLi)

            localStorage.setItem(namesArray, JSON.stringify(array))


        }

    } else {
        alert("inserisci un nome prima!")
    }

    inputReference.value = ""

}


const removeName = () => {
    const getMemory = localStorage.getItem(namesArray)
    const arrayFromStringhyMemory = JSON.parse(getMemory)
    arrayFromStringhyMemory.pop()
    localStorage.setItem(namesArray, JSON.stringify(arrayFromStringhyMemory))
const lastLi = document.querySelector("li:last-child")
lastLi.remove()
}


let n = 0
const timeBox = document.createElement("span")
timeBox.style.fontWeight = "bold"
list.appendChild(timeBox)


const booh = () => {
    n += 1
    timeBox.innerText = `Sono passati ${n} secondi`
}


setInterval(booh,1000)

saveButtonReference.addEventListener("click", saveName)
removeButtonReference.addEventListener("click", removeName)