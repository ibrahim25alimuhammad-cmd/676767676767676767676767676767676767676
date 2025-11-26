input.onGesture(Gesture.Shake, function () {
    images.createBigImage(`
        . . . # . # # # # #
        . . # . . . . # # .
        . # . # . . # # . .
        # . . # # # # . . .
        . # # . # # . . . .
        `).scrollImage(1, 200)
    music.play(music.stringPlayable("G F G A B F C B ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
