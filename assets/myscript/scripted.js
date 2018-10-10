window.onload = init;

    function init(){

        const baseHref = (document.getElementsByTagName('base')[0] || {}).href;

        var cap = new CircleAudioPlayer({
        audio: baseHref + 'assets/audio/finesse.mp3',
        size: 120,
        borderWidth: 8
        });
        cap.appendTo(audiocontainer);
    }
