const pokemoncard = [
{image: "./Images/004 1.png", name: "Pokemon", feature: "Grass, Poison", weight: "6.9kg", age: "99 age"},
{image: "./Images/Pikachu.png", name: "Pikachu", feature: "Thunder", weight: "5.9kg", age: "27 age"}
]

const pokemonfirst = pokemoncard[0]
const pokemonsecond = pokemoncard[1]

const container = document.querySelector(".container")
const div = document.createElement("div")
div.classList.add("Cards")
container.appendChild(div)
for (let i = 0; i < 4; i++){
    const containcard = document.createElement("div")
    const pokemonimage = document.createElement("img")
    const horizon = document.createElement("hr")
    const pokemontext = document.createElement("div")
    const poison = document.createElement("h3")
    const feature = document.createElement("p")
    const about = document.createElement("div")
    const pokemonweight = document.createElement("p")
    const pokemonage = document.createElement("p")
    const favourite = document.createElement("i")
    poison.classList.add("poison")
    pokemonimage.classList.add("pokemonimage")
    containcard.classList.add("containcard")
    about.classList.add("about")
    feature.classList.add("feature")
    pokemontext.classList.add("pokemontext")
    favourite.setAttribute("class", "fa-regular fa-heart")
    favourite.setAttribute("id", "hello")
    containcard.appendChild(pokemonimage)    
    pokemonimage.src = pokemonfirst.image
    poison.innerText = pokemonfirst.name
    feature.innerText = pokemonfirst.feature
    pokemonweight.innerText = pokemonfirst.weight
    pokemonage.innerText = pokemonfirst.age
    poison.appendChild(favourite)
    div.appendChild(containcard)
    containcard.appendChild(pokemonimage)
    containcard.appendChild(horizon)
    containcard.appendChild(pokemontext)
    pokemontext.appendChild(poison)
    pokemontext.appendChild(feature)
    pokemontext.appendChild(about)
    about.appendChild(pokemonweight)
    about.appendChild(pokemonage)
    favourite.addEventListener("click", ()=>{
        const liked = document.createElement("i")
        liked.setAttribute("class", "fa-solid fa-heart")
        poison.appendChild(liked)
        favourite.style.display = "none"
        liked.addEventListener("click", ()=>{
            liked.style.display = "none"
            favourite.style.display = "block"
        })
    })
}

for (let i = 0; i < 4; i++){
    const containcard = document.createElement("div")
    const pokemonimage = document.createElement("img")
    const horizon = document.createElement("hr")
    const pokemontext = document.createElement("div")
    const poison = document.createElement("h3")
    const about = document.createElement("div")
    const feature = document.createElement("p")
    const pokemonweight = document.createElement("p")
    const pokemonage = document.createElement("p")
    const favourite = document.createElement("i")              
    poison.classList.add("poison")
    pokemonimage.classList.add("pokemonimage")
    containcard.classList.add("containcard")
    about.classList.add("about")
    feature.classList.add("feature")
    pokemontext.classList.add("pokemontext")
    favourite.setAttribute("class", "fa-regular fa-heart")
    favourite.setAttribute("id", "hello")
    pokemonimage.src = pokemonsecond.image
    poison.innerText = pokemonsecond.name
    feature.innerText = pokemonsecond.feature
    pokemonweight.innerText = pokemonsecond.weight
    pokemonage.innerText = pokemonsecond.age
    poison.appendChild(favourite)
    div.appendChild(containcard)
    containcard.appendChild(pokemonimage)
    containcard.appendChild(horizon)
    containcard.appendChild(pokemontext)
    pokemontext.appendChild(poison)
    pokemontext.appendChild(feature)
    pokemontext.appendChild(about)
    about.appendChild(pokemonweight)
    about.appendChild(pokemonage)
    favourite.addEventListener("click", ()=>{
        const liked = document.createElement("i")
        liked.setAttribute("class", "fa-solid fa-heart")
        poison.appendChild(liked)
        favourite.style.display = "none"
        liked.addEventListener("click", ()=>{
            liked.style.display = "none"
            favourite.style.display = "block"
        })
    })
}