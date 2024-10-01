const keys = document.querySelectorAll('.key')

keys.forEach(key => {
key.addEventListener('click', () => playNote(key))
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => 
    key.classList.remove('active')
    )}

    /*
    const hideKeyboard = document.querySelector('.hide');
    const showKeyboard = document.querySelector('.show');
    
window.addEventListener("resize", function() {
    if (window.matchMedia("(max-width: 600px)").matches) {
    console.log("Rotate Device to View App")
    hideKeyboard.classList.add('hide')
    hideKeyboard.classList.remove('show')
    } else {
    console.log("Screen fits with app")
    showKeyboard.classList.add('show')
    showKeyboard.classList.remove('hide')
    }
    })


    const para = document.createElement("p");
    para.classList.add('message');
    para.innerText = "Rotate device (or maximise window) to view app.";
    document.body.appendChild(para);
    */