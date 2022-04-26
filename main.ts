pins.setPull(DigitalPin.P8, PinPullMode.PullNone)
pins.setPull(DigitalPin.P12, PinPullMode.PullNone)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        music.ringTone(262)
        basic.showString("c")
    } else if (input.pinIsPressed(TouchPin.P2)) {
        music.ringTone(294)
        basic.showString("d")
    } else if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        music.ringTone(330)
        basic.showString("e")
    } else if (pins.digitalReadPin(DigitalPin.P12) == 0) {
        music.ringTone(349)
        basic.showString("f")
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        music.ringTone(392)
        basic.showString("g")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        music.ringTone(440)
        basic.showString("a")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        music.ringTone(494)
        basic.showString("h")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        music.ringTone(523)
        basic.showString("c")
    } else {
        music.ringTone(0)
    }
    basic.clearScreen()
})
