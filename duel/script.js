var canvas = document.getElementById("canvas")
var WIDTH = 500
var HEIGHT = 500

canvas.height = HEIGHT
canvas.width = WIDTH


var c = canvas.getContext('2d');
var box = document.querySelectorAll(".box")





var cors = []
var minCors = []
box.forEach((item) => {
    item.addEventListener("click", (e) => {
        var rect = e.currentTarget.getBoundingClientRect()
        var coordinates = { x: rect.x + 10, y: rect.y + 10 }

        if (minCors.length <= 2) {
            minCors.push(coordinates)

            if (minCors.length == 2) {
                cors.push(minCors)
                minCors = []
            }
        }
        
    })
})

setInterval(() => {
    console.log(cors)
    console.log(minCors)
}, 1000)

function anim() {
    requestAnimationFrame(anim)
    c.clearRect(0, 0, WIDTH, HEIGHT);


    if (cors.length) {
        cors.forEach((item) => {
            c.moveTo(item[0].x, item[0].y)
            c.lineTo(item[1].x, item[1].y)
        })
        c.stroke()
    }

    // if (cors.length > 1) {
    //     cors.forEach((item) => {
    //         c.moveTo(cors.x, cors.y)
    //         c.lineTo(item.x, item.y)
    //     })
    //     c.stroke()
    // }




}


anim()