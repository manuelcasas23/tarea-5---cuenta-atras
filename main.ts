input.onButtonPressed(Button.A, function () {
    CUENTA_ATRÁS = 9
    led.enable(true)
})
let CUENTA_ATRÁS = 0
led.enable(false)
basic.forever(function () {
    if (CUENTA_ATRÁS >= 0) {
        basic.showNumber(CUENTA_ATRÁS)
        basic.pause(400)
        CUENTA_ATRÁS += -1
    } else {
        led.enable(false)
    }
})
basic.forever(function () {
    if (CUENTA_ATRÁS == 0) {
        music.playMelody("C5 B C5 B C5 B C5 B ", 500)
    }
})
