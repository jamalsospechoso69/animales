let Número_aleatorio = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Giraffe)
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.showIcon(IconNames.Snake)
        basic.pause(1000)
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showString("PONME UN 10")
})
input.onButtonPressed(Button.B, function () {
    Número_aleatorio = randint(1, 3)
    if (Número_aleatorio == 1) {
        basic.showIcon(IconNames.EigthNote)
        music.playMelody("C D E F G A B C5 ", 96)
    }
    if (Número_aleatorio == 2) {
        basic.showIcon(IconNames.QuarterNote)
        music.playMelody("C5 B A G F E D C ", 96)
    }
    if (Número_aleatorio == 3) {
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showString("ANGEL ROBLES")
    }
})
