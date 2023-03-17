input.onButtonPressed(Button.A, function () {
    voeden += 5
})
input.onButtonPressed(Button.B, function () {
    knuffelen += 5
})
let knuffelen = 20
let voeden = 20
let dood = 0
loops.everyInterval(1000, function () {
    knuffelen += -1
    voeden += -1
})
basic.forever(function () {
    if (dood == 0 && (knuffelen > 10 && voeden > 10)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (dood == 1) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (knuffelen < 0 && voeden < 0) {
        dood += 1
    }
})
basic.forever(function () {
    if (dood == 0 && (voeden < 10 && knuffelen < 10 && (voeden > 0 && knuffelen > 0))) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else if (1 == dood) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (dood == 1) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
