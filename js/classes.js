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


//Heart creation : properties
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

// class Layer {
//     constructor(img, chgmtvitesse){
//         this.x = 0
//         this.y = 0
        
//         this.width = 923
//         this.height = 590

//         this.x2 = this.width

//         this.img = img

//         this.chgmtvitesse = chgmtvitesse
//         this.vitesse = playerVitesse * this.chgmtvitesse
//     }
//     update(){
//         this.speed = playerVitesse * this.chgmtvitesse
//         if(this.x <= this.width){
//             this.x = this.width + this.x - this.vitesse //pour pas de trou entre les images
//         }
//         if(this.x2 <= this.width){
//             this.x2 = this.width + this.x - this.vitesse //pour pas de trou entre les images
//         }
//         this.x = Math.floor(this.x - this.vitesse)
//         this.x2 = Math.floor(this.x2 - this.vitesse)
//     }

//     draw(){
//         ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
//         ctx.drawImage(this.img, this.x2, this.y, this.width, this.height)


//     }

// }