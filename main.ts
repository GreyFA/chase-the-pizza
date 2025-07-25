controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let Boost = 0
    if (Boost == 0) {
        game.showLongText(game.ask("Are you shor you want to bost? This will take 5 sec away. press A to get the bost. press anewaer to cansl."), DialogLayout.Center)
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    time += -5
    info.changeScoreBy(1)
    info.startCountdown(time)
})
let pizza: Sprite = null
let time = 0
time = 60
info.startCountdown(time)
scene.setBackgroundColor(8)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . c c c c c c c c c c c c . . . 
    c 1 1 1 1 1 1 1 1 1 1 1 1 c . . 
    c d d d d d d d d d d d d c . . 
    c d c c c c c c c c c c d c . . 
    c d b d b b b b b b b b d c . . 
    c d b b b b 7 7 b b b b d c . . 
    c d b b b b 7 7 b b b b d c . . 
    c d b b b b b b b b b b d c . . 
    c 1 b b b b b b b b b b 1 c . . 
    c 1 1 d 1 1 d 1 1 d 1 1 1 c . . 
    c 1 d d d d d d d d d d 1 c . . 
    c 1 d 1 1 d 1 1 d 1 1 d 1 c . . 
    c b b b b b b b b b b b b c . . 
    c c c c c c c c c c c c c c . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 5 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 5 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 5 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `, SpriteKind.Food)
null.setPosition(68, 24)
