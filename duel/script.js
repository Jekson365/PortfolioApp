var canvas = document.getElementById("canvas")
var WIDTH = 500
var HEIGHT = 500

canvas.height = HEIGHT
canvas.width = WIDTH


var c = canvas.getContext('2d');
var box = document.querySelectorAll(".box")





var cors = []

box.forEach((item) => {
    item.addEventListener("click", (e) => {
        var rect = e.currentTarget.getBoundingClientRect()
        var coordinates = { x: rect.x + 10, y: rect.y + 10 }

        cors.push(coordinates)

        console.log(cors)




    })
})


function anim() {
    requestAnimationFrame(anim)
    c.clearRect(0, 0, WIDTH, HEIGHT);



    if (cors.length > 1) {
        c.moveTo(cors[0].x, cors[0].y)
        cors.forEach((item) => {
            c.lineTo(item.x, item.y)
        })
        c.stroke()
    }




}


anim()