const inputReference = document.getElementById("name")
const saveButtonReference = document.getElementById("save-btn")
const removeButtonReference = document.getElementById("remove-btn")
const list = document.getElementById("list")


const namesArray = "names-array-memory"

const saveName = () => {
    const inputValue = inputReference.value


    const getMemory = localStorage.getItem(namesArray)

    if (inputValue) {

        if (getMemory) {

            const arrayFromStringhyMemory = JSON.parse(getMemory)

            arrayFromStringhyMemory.push(inputValue)

            localStorage.setItem(namesArray, JSON.stringify(arrayFromStringhyMemory))




        } else {
            const array = []

            array.push(inputValue)


            localStorage.setItem(namesArray, JSON.stringify(array))


        }

    } else {
        alert("inserisci un nome prima!")
    }

    inputReference.value = ""

}


// let newLi = document.createElement("li")
// newLi.innerText = `${inputValue}`
// list.appendChild(newLi)




const removeName = () => {
    const getMemory = localStorage.getItem(namesArray)
    const arrayFromStringhyMemory = JSON.parse(getMemory)
    arrayFromStringhyMemory.pop()
    localStorage.setItem(namesArray, JSON.stringify(arrayFromStringhyMemory))




    console.log(getMemory)
}




saveButtonReference.addEventListener("click", saveName)
removeButtonReference.addEventListener("click", removeName)