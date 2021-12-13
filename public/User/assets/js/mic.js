const searchInput = document.querySelector('#searchProduct');

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const synth = window.speechSynthesis;
recognition.lang = 'en-US';
recognition.continuous = false;

const microphone = document.querySelector('.microphone');

const speak = (text) => {
    if (synth.speaking) {
        console.error('Busy. Speaking...');
        return;
    }

    const utter = new SpeechSynthesisUtterance(text);
    // utter.lang = 'vi-VI';
    // utter.lang = 'ja-JP';
    utter.text = text;
    synth.speak(utter);
};

const handleVoice = (text) => {
    console.log('text : ', text);

    const handledText = text.toLowerCase();
    if (handledText.includes('buy')) {
        const timk = handledText.split('buy')[1].trim();

        console.log(timk);
        searchInput.value = timk;
        var lik = 'http://localhost:8000/shop/' + timk;
        //console.log(lik);
        location.replace("http://localhost:8000/shop/" + timk);
        speak("OK");
    }

    if (handledText.includes('on')) {
        document.getElementById('phong').src = "http://localhost:8000/User/assets/images/product/phong_bat_den.jpg";
        speak('Ok');
    }
    if (handledText.includes('off')) {
        document.getElementById('phong').src = "http://localhost:8000/User/assets/images/product/phong_tat_den.jpg";
        speak('Ok');
    }

    // if (handledText.includes('mấy giờ')) {
    //     var today = new Date();
    //     speak(today.getHours() + " hours " + today.getMinutes() + " minute ");
    //     return;
    // }

    speak('sorry I do not understand');
}

microphone.addEventListener('click', (e) => {
    e.preventDefault();

    recognition.start();
    microphone.classList.add('recording');
});

recognition.onspeechend = () => {
    recognition.stop();
    microphone.classList.remove('recording');
}

recognition.onerror = (err) => {
    console.error(err);
    microphone.classList.remove('recording');
}

recognition.onresult = (e) => {
    console.log('onresult', e);
    const text = e.results[0][0].transcript;
    handleVoice(text);
}