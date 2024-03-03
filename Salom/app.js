const bmw = {
    name: "BMW",
    price: "$90000",
    image: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-145180,resizemode-75,msid-104403750/industry/auto/auto-news/bmw-posts-record-car-sales-at-9580-units-in-india-in-jan-sep-period.jpg"
}

const mercedez = {
  name: "Bugatti",
  price: "$9999999",
  image: "https://s3-prod-europe.autonews.com/s3fs-public/Bugatti%20Bolide%20front_0.jpg"
}

const body = document.querySelector("body")
const container = document.createElement("div")
container.classList.add("container")

for(let i = 0; i < 3; i++){
  const contain = document.createElement("div")
  const cardimage = document.createElement("img")
  const cardtext = document.createElement("h2")
  const cardpricer = document.createElement("p")
  cardimage.src = mercedez.image
  cardimage.classList.add("cardimage")
  cardtext.innerText = mercedez.name
  cardpricer.innerText = mercedez.price
  contain.classList.add("contain")
  contain.appendChild(cardimage)
  contain.appendChild(cardtext)
  contain.appendChild(cardpricer)
  container.appendChild(contain)
}

for (let i = 0; i < 3; i++) {
  const div1= document.createElement("div")
    const image = document.createElement("img")
    const text = document.createElement("h2")
    const pricer = document.createElement("p")
    pricer.innerText = bmw.price
    image.classList.add("image1")
    image.src = bmw.image
    text.innerText = bmw.name
    div1.classList.add("cards")
    div1.appendChild(image)
    div1.appendChild(text)
    div1.appendChild(pricer)
    container.appendChild(div1)
}

body.appendChild(container)

