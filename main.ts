controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(img`
        . . . b 5 b . . . . . . . . . . 
        . . . . b 5 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 5 5 5 5 5 b b . . . . . 
        . . c 4 d 5 f 1 d 5 b b . . . . 
        b 4 4 4 d d f f 1 5 5 b . . . . 
        . b 4 4 4 4 b f d 5 5 b . . . . 
        . . b 4 4 4 4 5 5 5 5 d b . . . 
        . . b 5 5 5 5 5 5 5 5 d d b . . 
        . b 5 5 5 5 5 5 5 5 d d d d b . 
        . b 5 5 5 5 5 5 5 b b b d d d b 
        . b 5 5 5 5 5 5 c d 5 5 b d d c 
        . b 5 5 5 5 5 5 d c d 5 d b b c 
        . b d 5 5 5 5 5 d d c b 5 5 b . 
        . . b b 5 5 5 d d d d c c c b b 
        . . . b b c c c c c c c c . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . . b d d 5 5 5 5 5 5 5 5 b . . 
        . b d d d d 5 5 5 5 5 5 5 5 b . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        . b 5 5 b c d d 5 5 5 5 5 d b . 
        b b c c c d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
})
let mySprite: Sprite = null
game.splash("Press A to start")
scene.setBackgroundColor(6)
mySprite = sprites.create(img`
    . . . b 5 b . . . . . . . . . . 
    . . . . b 5 b . . . . . . . . . 
    . . . . b b b b b b . . . . . . 
    . . . b 5 5 5 5 5 b b . . . . . 
    . . c 4 d 5 f 1 d 5 b b . . . . 
    b 4 4 4 d d f f 1 5 5 b . . . . 
    . b 4 4 4 4 b f d 5 5 b . . . . 
    . . b 4 4 4 4 5 5 5 5 d b . . . 
    . . b 5 5 5 5 5 5 5 5 d d b . . 
    . b 5 5 5 5 5 5 5 5 d d d d b . 
    . b 5 5 5 5 5 5 5 b b b d d d b 
    . b 5 5 5 5 5 5 c d 5 5 b d d c 
    . b 5 5 5 5 5 5 d c d 5 d b b c 
    . b d 5 5 5 5 5 d d c b 5 5 b . 
    . . b b 5 5 5 d d d d c c c b b 
    . . . b b c c c c c c c c . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
