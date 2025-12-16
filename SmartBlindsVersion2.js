let mode = 0  // 0 = OUT, 1 = IN
let autoMode = false

input.onButtonPressed(Button.A, function () {
    mode = 0
    autoMode = true
    basic.showString("OUT")
})

input.onButtonPressed(Button.B, function () {
    mode = 1
    autoMode = true
    basic.showString("IN")
})

function openBlinds() {
    pins.servoWritePin(AnalogPin.P0, 0)
}

function closeBlinds() {
    pins.servoWritePin(AnalogPin.P0, 80)
}

basic.forever(function () {
    if (!autoMode) return

    let light = input.lightLevel()  

    
    let openThreshold = 5
    let closeThreshold = 15

    if (mode == 0) {
        // OUT → light = closes, dark = opens
        if (light > closeThreshold) closeBlinds()
        else if (light < openThreshold) openBlinds()
    } else {
        // IN → bright = opens, dark = closes
        if (light > closeThreshold) openBlinds()
        else if (light < openThreshold) closeBlinds()
    }


    basic.pause(300)
})
