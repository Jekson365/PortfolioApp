var navLinks = document.querySelectorAll(".nav-link")
var sections = document.querySelectorAll(".sec-title")


navLinks.forEach((item) => {
    item.addEventListener("click", (e) => {
        var currentTarget = e.currentTarget.textContent.toLowerCase()
        sections.forEach((secs) => {
            if (currentTarget == secs.id.toLowerCase()) {
                window.scrollTo(0, secs.getBoundingClientRect().y)
            }
        })

    })
})


// display projects 

const projects = [
    {
        name: "Observer",
        description: "Simulation which is created with Javascript canvas",
        img: "./assets/observer.PNG",
        demo: "https://jekson365.github.io/PortfolioApp/observer/home.html",
        source: "https://github.com/Jekson365/PortfolioApp/tree/main/observer"
    },
    {
        name: "Tic Tac Toe",
        description: "most famous game propably. with this project I wanted to develope my skills in Javascript. I built it using HTML / CSS and JS",
        img: "./assets/tictactoe.PNG",
        demo: "https://jekson365.github.io/PortfolioApp/TicTacToe/index.html",
        source: "https://github.com/Jekson365/PortfolioApp/tree/master/TicTacToe"
    },
    {
        name:"Landing Page",
        description:"design from Nicepage.com",
        img:"./assets/g.PNG",
        demo:"https://jekson365.github.io/p1/g/",
        source:"https://github.com/Jekson365/p1"
    },
    {
        name:"Birthday Part Website",
        description:"Creating with HTML / CSS / Bootstrap and React JS. Design is takan from Nicepage.com",
        img:"./assets/birthday.PNG",
        demo:"https://jekson365.github.io/Birthday-party/",
        source:"https://github.com/Jekson365/Birthday-party"
    },
    {
        name:"Recipies App",
        description:"Application is built in React. I am using https://spoonacular.com/ API for it. Application has 2 pages. Discover and home.",
        img:"./assets/cuisine.PNG",
        demo:"https://jekson365.github.io/Recipies-App/",
        source:"https://github.com/Jekson365/Recipies-App"
        
    },
    {
        name:"Cinema App",
        description:"Application is built in React. Using themoviedb API. it contains 4 pages: Discover,Home,Registration and Login.Libraries I used: styled components,React router,bootstrap,react-icons",
        img:"./assets/movies.PNG",
        demo:"",
        source:"https://github.com/Jekson365/MoviePage"
    }
]
window.addEventListener("load", () => {
    var container = document.querySelector(".projects-container")


    container.innerHTML += `<h1 class="h1 text-center title m-5">Projects</h1>`

    projects.forEach((item) => {
        const { name, description, img,demo,source } = item
        container.innerHTML +=
            `<div class="row align-items-center justify-content-center pr-item" style='height:100vh;'>
            <div class="col-md-6 d-flex-col justify-content-between align-items-center">
                <h3 class="h3 title">${name}</h3>
                <p class="para-title fs-5 mt-5 mb-5">
                ${description}
                </p>
                <a class="custom-btn ol" href="${demo}">Demo</a>
                <a class="custom-btn" href="${source}">Source Code</a>
            </div>
            <div class="col-md-6 h-50">
                    <img src="${img}"
                    class="pro-image img-fluid w-100 h-100" />
            </div>
            </div>`
    })
})