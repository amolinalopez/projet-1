// test to see if it's linked ✅
console.log("What's your favourite scary movie ? 🔪")

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//to change the canvas size pour no deformation
canvas.width = 900
canvas.height = 590


//Parallax Background
const background0 = new Image();
background0.src = './img/back2/Layer_0.png'
const background1 = new Image();
background1.src = './img/back2/Layer_1.png'
const background2 = new Image();
background2.src = './img/back2/Layer_2.png'
const background3 = new Image();
background3.src = './img/back2/Layer_3.png'
const background4 = new Image();
background4.src = './img/back2/Layer_4.png'
const background5 = new Image();
background5.src = './img/back2/Layer_5.png'
const background6 = new Image();
background6.src = './img/back2/Layer_6.png'
const background7 = new Image();
background7.src = './img/back2/Layer_7.png'
const background8 = new Image();
background8.src = './img/back2/Layer_8.png'
const background9 = new Image();
background9.src = './img/back2/Layer_9.png'

//gravity
const gravity = 1.5;

//adds the player
const player = new Player()
player.update()

//adds hearts - 3 win items
const hearts = [
    new Heart({x: 430, y: 417})
]

const ghosts = [
    new Ghost({x:1000, y:350}),
    new Ghost({x:850, y:500})
]

//adds platforms
const platforms = [
    new Platform({x: 400, y: 450}), 
    new Platform({x: 800, y: 400}), 
    new Platform({x: 1500, y: 300}), 
]


//pour les touches si elles sont pressed or not
const keys = {
    left : {
        pressed: false
    },  
    right : {
        pressed: false
    } 
}

let x = 0;

//MAIN
function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height) // 🧽
    requestAnimationFrame(animate) //to loop so it change the properties

    ctx.drawImage(background0, 0 , 0);
    ctx.drawImage(background1, 0 , 0);
    ctx.drawImage(background2, 0 , 0);
    ctx.drawImage(background3, 0 , 0);
    ctx.drawImage(background4, 0 , 0);
    ctx.drawImage(background5, 0 , 0);
    ctx.drawImage(background6, 0 , 0);
    ctx.drawImage(background7, 0 , 0);
    ctx.drawImage(background8, 0 , 0);
    ctx.drawImage(background9, 0 , 0);
    
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }

   if (platforms.at(-1).pos.x < 450) {
       console.log('new plateform')
       platforms.push(new Platform({x: 900, y: getRandom(250, 500)}))
   }

   if (ghosts.at(-1).pos.x < 300) {
    console.log('new ghost')
    ghosts.push(new Ghost({x: 900, y: getRandom(250, 500)}))
}
  
   
    hearts.forEach(heart => {
    heart.draw()
    })

    platforms.forEach(platform => {
        platform.draw()
    })

    ghosts.forEach(ghost => {
        ghost.update()
        //take the cat width to track when the ghost touches his x
        if(player.pos.x + player.width >= ghost.pos.x){
            console.log('LOSER')

        }

        // as soon as the first x of 1rst ghost : loser 
        // start back HERE ------------------------------------

        })

    player.update()
    //player update after everything (player devant plartform + background)

    //to go left or right not indefiniment + ne pas sortir du canvas posX
    if(keys.right.pressed && player.pos.x < canvas.width*0.5){
        player.velocity.x = 5
    } else if (keys.left.pressed && player.pos.x < 50) {
        player.velocity.x = -5
    } else {
        player.velocity.x = 0
    }
    //pour que plateformes bougent en meme temps
    if (keys.right.pressed && player.pos.x > canvas.width*0.4) {
        platforms.forEach((platform) => {
            platform.pos.x -= 5
        })
        
        //retour en arriere
    } else if (keys.left.pressed && player.pos.x > 100) {
        player.velocity.x = -5
    }

    //if the bottom of the player is less than the top of the platform
    // detection collision ac plateforme - x left and right sinon le player ne retombe pas !
    platforms.forEach((platform) => {
        if (player.pos.y + player.height <= platform.pos.y && player.pos.y + player.height + player.velocity.y >= platform.pos.y && player.pos.x + player.width >= platform.pos.x && player.pos.x <= platform.pos.x +platform.width ) {
            player.velocity.y = 0
        }
    })

}
animate()




// add event to interact and use keyboard 
window.addEventListener('keydown', (e) => {
    console.log(e) //pour trouver leur KeyCode dans KeyboardEvent
    switch (e.keyCode){
        
        case 65: 
        console.log('gauche')
        keys.left.pressed = true // selects the object and changes property
        break

        case 68: 
        console.log('droite')
        keys.right.pressed = true
        break

        case 87: 
        console.log('haut')
        player.velocity.y -= 13 // - car sur y il faut aller en bas
        break

        case 83: 
        console.log('bas')
        break
    }
})


window.addEventListener('keyup', (e) => {
    switch (e.keyCode){
        
        case 65: 
       // console.log('gauche')
        keys.left.pressed = false
        break

        case 68: 
        //console.log('droite')
        keys.right.pressed = false
        break

        case 87: 
        //console.log('haut')
        player.velocity.y -= 13

        break

        case 83: 
        //console.log('bas')
        break

    }

})














