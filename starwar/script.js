
var canvas = document.querySelector("canvas")
var WIDTH = 500
var HEIGHT = 500

canvas.height = HEIGHT
canvas.width = WIDTH

var image = document.getElementById("react")

var c = canvas.getContext("2d")

var bullets = []

class Bullet {
    constructor(bulletX, bulletY, bulletWidth, bulletHeight, velocity) {
        this.bulletX = bulletX
        this.bulletY = bulletY
        this.bulletWidth = bulletWidth
        this.bulletHeight = bulletHeight
        this.velocity = velocity
    }

    draw() {
        c.beginPath()
        c.arc(this.bulletX, this.bulletY + 10, 5,Math.PI * 2,false)
        c.fillStyle = 'red'
        c.fill()


        this.shoot()

    }

    shoot() {
        this.bulletY += this.velocity
    }
}
class Player {
    constructor(x,y,w,h,v) {
        this.x = x 
        this.y = y 
        this.w = w 
        this.h = h 
        this.v = v 
    }
    draw() {
        c.beginPath()
        c.fillRect(this.x,this.y,this.w,this.h)
        c.fill()

    }
}
var player = new Player(100,100,40,40,3)
var bullets = []




window.addEventListener("keydown",(e)=> {
    if (e.key == "p" && bullets.length < 10) {
        bullets.push(new Bullet(player.x + 15, player.y, 10, 10, 8))
    }
    if (e.key == 'r' && bullets.length == 10) {
        setTimeout(()=> {

            bullets = []
        },1000)
    }
    if (e.key == 'ArrowLeft') {
        player.v = -player.v
    }
    if (e.key == 'ArrowRight') {
        player.v = -player.v
    }
})



function animation() {

    requestAnimationFrame(animation)
    c.clearRect(0, 0, WIDTH, HEIGHT)

    player.draw()
    bullets.forEach((item) => {
        item.draw()
    })

    
    player.x += player.v
    

}

animation()