input.onButtonPressed(Button.A, function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("G B A G C5 B A B ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("G F G A - F E D ", 120)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("C5 G B A F A C5 B ", 120)
    basic.showIcon(IconNames.Heart)
})
