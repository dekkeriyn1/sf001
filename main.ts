let read = 0
basic.forever(function () {
    read = pins.analogReadPin(AnalogPin.P0)
    if (read < 300) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        music.play(music.stringPlayable("C5 G C5 G C5 G C5 G ", 120), music.PlaybackMode.UntilDone)
    } else if (read > 250) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
    	
    }
})
