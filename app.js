const imgFront = document.getElementById("imgFront")
const dataStatus = document.getElementById("textData")
const imgChange = document.getElementById("imgChange");

const randomImageChange = () => {
    const imgContainer = [
        {name: "chilli chicken", image: "./assets/2.jpg"},
        {name: "beef noodles", image: "./assets/3.jpg"},
        {name: "pad thai veg", image: "./assets/4.jpg"},
        {name: "rice and onion", image: "./assets/5.jpg"}
    ]
    let randomImageIndex = imgContainer[Math.floor(Math.random() * imgContainer.length)]
    imgChange.src = randomImageIndex.image
    dataStatus.innerText = randomImageIndex.name
}

imgFront.addEventListener("mouseover", e => {
    e.preventDefault()
    randomImageChange()
})

imgChange.addEventListener("mouseleave", e => {
    e.preventDefault()
    dataStatus.innerText = "spaghetti";
})