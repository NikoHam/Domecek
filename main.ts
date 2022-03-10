input.onButtonPressed(Button.A, function () {
    if (alarm == 0) {
        alarm += 1
    } else if (alarm == 2) {
        alarm += 1
    } else {
        alarm = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (alarm == 1) {
        alarm += 1
    } else if (alarm == 3) {
        alarm += 1
    } else {
        alarm = 0
    }
})
let alarm = 0
alarm = 0
let skříň = 0
// ALARMY
// 
basic.forever(function () {
    if (smarthome.crashSensor()) {
        while (alarm != 4) {
            music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
        }
    }
    if (smarthome.ReadTemperature(TMP36Type.TMP36_temperature_C, AnalogPin.P1) > 35) {
    	
    }
    if (input.isGesture(Gesture.Shake)) {
    	
    }
})
