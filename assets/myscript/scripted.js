window.onload = init;

    function init(){
        var cap = new CircleAudioPlayer({
            audio: '/assets/audio/finesse.mp3',
        size: 120,
        borderWidth: 8
        });
        cap.appendTo(audiocontainer);
    }
