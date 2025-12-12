let mode = 0  // 0 = OUT, 1 = IN
let autoMode = false

// Button A → OUT mode (реакция по външна светлина)
input.onButtonPressed(Button.A, function () {
    mode = 0
    autoMode = true
    basic.showString("OUT")
})

// Button B → IN mode + автоматично затваряне
input.onButtonPressed(Button.B, function () {
    mode = 1
    autoMode = true
    basic.showString("IN")
    closeBlinds()   // Затваря веднага
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
    if (!autoMode) return   // ако не е включен автоматичен режим → нищо не прави

    let light = input.lightLevel()  // 0–255, но реално 0–80

    // Нови, по-чувствителни прагове
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
