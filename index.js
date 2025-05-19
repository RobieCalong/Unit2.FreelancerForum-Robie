let avgPrice = 0;                         //declare Global variable to update 'starting average price'
let sumPrice = 0;

const initialFreelancers = [
   { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
  { name: "Carol", price: 70, occupation: "programmer" },
]

const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

function init() {
  /**
   * 👉 STEP 1: Grab the div with the id of "root"
   */
  const titleDiv = document.querySelector("#titleAverage")
  const freelancerDiv = document.querySelector("#freelancerTable")

  /**
   * 👉 STEP 2:
   *    Create a new h1 element that says "Freelancer Forum"
   *    Add the new h1 to the div
   */
  const h1Title = document.createElement("h1")
  h1Title.innerHTML = "Freelancer Forum"
  titleDiv.append(h1Title)

  const pMessage = document.createElement("p")
  pMessage.innerHTML = `The average starting price is $ ${avgPrice}.`
  pMessage.id = 'avg-price'                        //give <p> an id="avg-price"
  titleDiv.append(pMessage)

  /************/

  const availableFreelancers = document.createElement("h2")
  availableFreelancers.innerHTML = "Available Freelancers"
  freelancerDiv.append(availableFreelancers)

  /**
   * 👉 STEP 3:
   *    Create a table to list freelancer
   */
  const fTable = document.createElement("table")
  const fTableH = document.createElement("thead")
  const fTableB = document.createElement("tbody")

  for (let key of Object.keys(initialFreelancers[0])) {
   /* TESTING purposes */ console.log(`what you need to see: ${key}`)
   const th = document.createElement("th")
   th.innerText = key

   fTableH.appendChild(th)
  }

  fTable.appendChild(fTableH)
  fTable.appendChild(fTableB)

  freelancerDiv.appendChild(fTable)

  /**
   * 👉 STEP 5:
   *    Call the function you created in step 4
   */
  listFreelancer()
}

/**
 * 👉 STEP 4:
 *    Create a function to render freelancer in the array
 */
function listFreelancer() {
   const fTableB = document.querySelector("tbody")

   const freelancerElements = initialFreelancers.map((freelancer) => {
      const row = document.createElement("tr")

      const f_name = document.createElement("td")
      f_name.innerHTML = freelancer.name

      const f_occupation = document.createElement("td")
      f_occupation.innerHTML = freelancer.occupation

      const f_price = document.createElement("td")
      f_price.innerHTML = `$ ${freelancer.price}`

      row.appendChild(f_name)
      row.appendChild(f_occupation)
      row.appendChild(f_price)

      return row
   })

   fTableB.replaceChildren(...freelancerElements)

   updateAvgPrice()
}

function updateAvgPrice() {
   sumPrice = 0                      //need to reset sumPrice before calculating avgPrice

   initialFreelancers.forEach((freelancer) => {
      sumPrice = sumPrice + freelancer.price
   })

   avgPrice = Number(sumPrice / initialFreelancers.length).toFixed(2)

  const elementWithId = document.querySelector('#avg-price')
  elementWithId.innerHTML = `The average starting price is $ ${avgPrice}.`
}

/**
 * 👉 STEP 6:
 *    Create a function to add a freelancer to the array
 */
const addRandomFreelancer = () => {
   const randomFreelancer = freelancers[Math.floor(Math.random() * freelancers.length)]

   initialFreelancers.push(randomFreelancer)

   // updateAvgPrice()
   listFreelancer()
}

setInterval(addRandomFreelancer, 2000)

init();