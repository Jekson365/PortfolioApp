var canvas = document.querySelector("canvas")

var WIDTH = window.innerWidth
var HEIGHT = window.innerHeight

canvas.height = HEIGHT
canvas.width = WIDTH

var c = canvas.getContext("2d")

var mouse = {
    mousex: undefined,
    mousey: undefined
}
window.addEventListener("mousemove", (event) => {
    mouse.mousex = event.clientX
    mouse.mousey = event.clientY
})


class Ball {
    constructor(posx, posy, velx, vely, radius, interval, color) {
        this.posx = posx
        this.posy = posy
        this.velx = velx
        this.vely = vely
        this.radius = radius
        this.color = color
        this.interval = interval
    }

    draw() {
        c.beginPath()
        c.arc(this.posx, this.posy, this.radius, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()

        this.animate()
        // this.drawLine()
    }

    animate() {
        if (this.posx > WIDTH || this.posx < 0) {
            this.velx = -this.velx
        }
        if (this.posy > HEIGHT || this.posy < 0) {
            this.vely = -this.vely
        }
        this.posx += this.velx
        this.posy += this.vely
    }
    drawLine() {

        c.beginPath()
        c.moveTo(mouse.mousex, mouse.mousey)
        c.lineTo(this.posx, this.posy)
        c.lineTo(this.posx, mouse.mousey)
        c.lineTo(mouse.mousex, mouse.mousey)
        c.stroke()

    }
}

var balls = []

for (var i = 0; i < 2; i++) {
    balls.push(new Ball(
        Math.random() * 300,
        Math.random() * 400,
        Math.random() * 4,
        Math.random() * 4,
        5
    ))
}
var rad = 10
var foodrad = 5
window.addEventListener("click", () => {
    if (balls.length >= 0) {
        balls.push(new Ball(mouse.mousex, mouse.mousey, Math.random() * 3, Math.random() * -3, foodrad, 1, "#D6E4E5"))
    }
})


function animation() {
    requestAnimationFrame(animation)
    c.clearRect(0, 0, WIDTH, HEIGHT)
    var observer = new Ball(mouse.mousex, mouse.mousey, 0, 0, rad, 1, '#EB6440')
    observer.draw()


    balls.forEach((item) => {
        var distance = Math.floor(Math.sqrt((mouse.mousex - item.posx) ** 2 + (mouse.mousey - item.posy) ** 2))
        if (distance < observer.radius) {
            item.color = '#EB6440'
            if (item != balls[balls.length - 1]) {
                balls = balls.filter((item) => item.color != '#EB6440')
                rad += 1
            }
        }
        else {
            item.color = '#D6E4E5'
        }

        item.draw()
    })


}
animation()