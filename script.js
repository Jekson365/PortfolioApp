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
        source: "https://github.com/Jekson365/PortfolioApp/tree/main/observer",
        tools: [
            './assets/js.png',
            './assets/html.png'
        ]

    },
    {
        name: "Tic Tac Toe",
        description: "most famous game propably. with this project I wanted to develope my skills in Javascript. I built it using HTML / CSS and JS",
        img: "./assets/tictactoe.PNG",
        demo: "https://jekson365.github.io/PortfolioApp/TicTacToe/index.html",
        source: "https://github.com/Jekson365/PortfolioApp/tree/master/TicTacToe",
        tools: [
            './assets/js.png',
            './assets/html.png'
        ]
    },
    {
        name: "Landing Page",
        description: "design from Nicepage.com",
        img: "./assets/g.PNG",
        demo: "https://jekson365.github.io/p1/g/",
        source: "https://github.com/Jekson365/p1",
        tools: [
            './assets/js.png',
            './assets/html.png',
            './assets/bootstrap.png'
        ]
    },
    {
        name: "Birthday Part Website",
        description: "Creating with HTML / CSS / Bootstrap and React JS. Design is takan from Nicepage.com",
        img: "./assets/birthday.PNG",
        demo: "https://jekson365.github.io/Birthday-party/",
        source: "https://github.com/Jekson365/Birthday-party",
        tools: [
            './assets/js.png',
            './assets/html.png',
            './assets/atom.png',
            './assets/bootstrap.png'
        ]
    },
    {
        name: "Recipies App",
        description: "Application is built in React. I am using https://spoonacular.com/ API for it. Application has 2 pages. Discover and home.",
        img: "./assets/cuisine.PNG",
        demo: "https://jekson365.github.io/Recipies-App/",
        source: "https://github.com/Jekson365/Recipies-App",
        tools: [
            './assets/js.png',
            './assets/html.png',
            './assets/atom.png',
            './assets/bootstrap.png'
        ]

    },
    {
        name: "Cinema App",
        description: "Application is built in React. Using themoviedb API. it contains 4 pages: Discover,Home,Registration and Login.Libraries I used: styled components,React router,bootstrap,react-icons",
        img: "./assets/movies.PNG",
        demo: "https://jekson365.github.io/MoviePage/#/",
        source: "https://github.com/Jekson365/MoviePage",
        tools: [
            './assets/js.png',
            './assets/html.png',
            './assets/atom.png',
            './assets/bootstrap.png'
        ]
    },
    {
        name: "Shopify template",
        description: "website template is picked from shopify.built in react. (not completed yet)",
        img: "./assets/cover-7.PNG",
        demo: "https://jekson365.github.io/ShopifyTemplates/",
        source: "https://github.com/Jekson365/mupando",
        tools: [
            './assets/js.png',
            './assets/html.png',
            './assets/atom.png',
            './assets/bootstrap.png'
        ]
    },
    {
        name: "Mupando Clone",
        description: "Coded with ReactJS. I used libraries such as: React router dom,react-icons,framer-motion,aos",
        img: "./assets/mupando.PNG",
        demo: "https://jekson365.github.io/mupando/",
        source: "https://github.com/Jekson365/Birthday-party",
        tools: [
            './assets/js.png',
            './assets/html.png',
            './assets/atom.png',
            './assets/bootstrap.png'
        ]
    },
    {
        name: "Dozai Clone",
        description: "Coded with ReactJS. I used libraries such as: React router dom,react-icons,framer-motion,aos. for styling SASS",
        img: "./assets/dozai.PNG",
        demo: "https://jekson365.github.io/Dozai/",
        source: "https://github.com/Jekson365/Dozai ",
        tools: [
            './assets/js.png',
            './assets/html.png',
            './assets/atom.png',
            './assets/bootstrap.png'
        ]
    },
    {
        name: "Nyumba Clone",
        description: "webflow.io website template clone.coded in React-JS using libraries such as Bootstrap,SASS,AOS,framer-motion",
        img: "./assets/nyumba.PNG",
        demo: "https://jekson365.github.io/nyumba",
        source: "https://github.com/Jekson365/nyumba",
        tools: [
            './assets/js.png',
            './assets/html.png',
            './assets/atom.png',
            './assets/bootstrap.png'
        ]
    },
]

// const getTools = () => {
//     projects.reverse().forEach((proj)=> {
//         proj.tools.forEach((item)=> {
//             return `<h3 class='h3'>${item}</h3>`
//         })
//     })
// }



window.addEventListener("load", () => {
    var container = document.querySelector(".projects-container")
    container.innerHTML += `<h1 class="h1 text-center title m-5">Projects</h1>`

    projects.reverse().forEach((item) => {
        const { name, description, img, demo, source, tools } = item
        container.innerHTML +=
            `<div class="row align-items-center w-100 justify-content-center pr-item" style='height:100vh;'>
            <div class="col-md-6 d-flex-col justify-content-between align-items-center">
                <h3 class="h3 title">${name}</h3>
                <p class="para-title fs-5 mt-5 mb-5">
                ${description}
                </p>
                <a class="custom-btn ol" href="${demo}">Demo</a>
                <a class="custom-btn" href="${source}">Source Code</a>
            </div>
            <div class="col-md-6 tls d-flex align-items-center h-50 position-relative">
                <div class='position-relative'>
                    <div class='tools'>
                    
                        </div>
                        <img src="${img}"
                            class="img-fluid pr-im" />
                    </div>
            </div>
            </div>`
    })
})