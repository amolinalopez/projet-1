// test to see if it's linked ✅
console.log("Cats are lovely 🐱") 
 
//Player creation : properties
class Player {
    constructor() {
        this.pos = {
            x: 10,
            y: 500
        }
        //pour le deplacement 
        this.velocity = {
            x: 0,
            y: 0
        }

        this.width = 45
        this.height = 45
    }

    // draw the player
    draw() {
        const playerImage = new Image();
        playerImage.src = './img/greyCat.png';
        ctx.drawImage(playerImage, this.pos.x, this.pos.y, this.width, this.height)

        // ctx.fillStyle = 'purple' 
        // ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
    }

    //update les properties du player - ne pas oublier de la call pour work
    update() {
        this.draw()
        this.pos.x += this.velocity.x
        this.pos.y += this.velocity.y
        
        //le player ne doit pas tomber hors du canvas (-60 a height si background haut)
        if (this.pos.y + this.height + this.velocity.y <= canvas.height-45) {
        this.velocity.y += gravity //gonna accelerate over time
        } else {
            this.velocity.y = 0
        }
    }
}


//Platerform creation : properties
class Platform {
    constructor({x, y}){
        this.pos = {
            x: x, // or just x
            y: y // or just y
        }
        this.width = 150
        this.height = 10
     }

     draw() {
        ctx.fillStyle = '#1C1D2A'
        // '#1C1D2A'
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)

        // const plateformImage = new Image();
        // plateformImage.src = './img/wood.jpeg';
        // ctx.drawImage(plateformImage, this.pos.x, this.pos.y, this.width, this.height)
     }
}


//Collect items : Heart creation : properties
class Heart {
    constructor({x, y}){
        this.pos = {
            x: x, // or just x
            y: y

        }
        this.width = 35
        this.height = 32
     }

     draw() {
       
        const heartImage = new Image();
        heartImage.src = './img/heart.png';
        ctx.drawImage(heartImage, this.pos.x, this.pos.y, this.width, this.height)
     }

}

//Enemy Ghost creation : properties
class Ghost {
    constructor({x, y}) {
        this.pos = {
            x: x,
            y: y
        }
        //pour le deplacement 
        this.velocity = {
            x: -0.5,
            y: 0
        }

        this.width = 50
        this.height = 50
    }

    // draw the player
    draw() {
        const playerImage = new Image();
        playerImage.src = './img/sopGhost.png';
        ctx.drawImage(playerImage, this.pos.x, this.pos.y, this.width, this.height)
    }

    update() {
        this.draw()
        this.pos.x += this.velocity.x
        this.pos.y += this.velocity.y
        

    }
}


