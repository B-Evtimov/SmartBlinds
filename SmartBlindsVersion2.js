let mode = 0  // 0 = OUT, 1 = IN
let autoMode = false

// Button A → OUT mode 
input.onButtonPressed(Button.A, function () {
    mode = 0
    autoMode = true
    basic.showString("OUT")
})

// Button B → IN mode + automatic closing
input.onButtonPressed(Button.B, function () {
    mode = 1
    autoMode = true
    basic.showString("IN")
    closeBlinds()   // closes immediately
})

// Open blinds (servo at 0°)
function openBlinds() {
    pins.servoWritePin(AnalogPin.P0, 0)
}

// Close blinds (servo at 80°)
function closeBlinds() {
    pins.servoWritePin(AnalogPin.P0, 80)
}

basic.forever(function () {
    if (!autoMode) return   // if the automatic mode is not enabled → does nothing

    let light = input.lightLevel()  // 0–255, but for real 0–80

    
    let openThreshold = 20
    let closeThreshold = 35

    if (mode == 0) {
        // OUT mode
        if (light > closeThreshold) {
            closeBlinds()
        } else if (light < openThreshold) {
            openBlinds()
        }
    } else {
        // IN mode
        if (light < openThreshold) {
            openBlinds()
        } else if (light > closeThreshold) {
            closeBlinds()
        }
    }

    basic.pause(500)
})
