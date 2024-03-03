const pokemoncard = {
asd:{image: "./Images/004 1.png", name: "Pokemon", feature: "Grass, Poison", weight: "6.9kg", age: "99 age"}
}

const container = document.querySelector(".container")
const div = document.createElement("div")
div.classList.add("Cards")
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
    pokemonimage.classList.add("pokemonimage")
    containcard.classList.add("containcard")
    about.classList.add("about")
    feature.classList.add("feature")
    pokemontext.classList.add("pokemontext")
    pokemonimage.src = pokemoncard.asd.image
    poison.innerText = pokemoncard.asd.name
    feature.innerText = pokemoncard.asd.feature
    pokemonweight.innerText = pokemoncard.asd.weight
    pokemonage.innerText = pokemoncard.asd.age
    div.appendChild(containcard)
    containcard.appendChild(pokemonimage)
    containcard.appendChild(horizon)
    containcard.appendChild(pokemontext)
    pokemontext.appendChild(poison)
    pokemontext.appendChild(feature)
    pokemontext.appendChild(about)
    about.appendChild(pokemonweight)
    about.appendChild(pokemonage)
}
container.appendChild(div)

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
    pokemonimage.src = pokemoncard.image
    pokemonimage.classList.add("pokemonimage")
    containcard.classList.add("containcard")
    poison.innerText = pokemoncard.name
    feature.innerText = pokemoncard.feature
    pokemonweight.innerText = pokemoncard.weight
    pokemonage.innerText = pokemoncard.age
    about.classList.add("about")
    feature.classList.add("feature")
    pokemontext.classList.add("pokemontext")
    div.appendChild(containcard)
    containcard.appendChild(pokemonimage)
    containcard.appendChild(horizon)
    containcard.appendChild(pokemontext)
    pokemontext.appendChild(poison)
    pokemontext.appendChild(feature)
    pokemontext.appendChild(about)
    about.appendChild(pokemonweight)
    about.appendChild(pokemonage)
}