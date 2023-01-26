window.addEventListener('load', () => {
  const msg = new SpeechSynthesisUtterance();
  let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const option = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');
  msg.text = document.querySelector('[name="text"]').value;

  function populateVoices() {
    voices = this.getVoices();
    console.log(voices);
    voicesDropdown.innerHTML = voices
      // .filter((voice) => voice.lang.includes('en'))
      .map(
        (voice) =>
          `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
      )
      .join('');
  }

  function setVoice() {
    msg.voice = voices.find((voice) => voice.name === this.value);
    toggle();
  }

  function toggle(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
      speechSynthesis.speak(msg);
    }
  }

  function stepOption() {
    console.log(this.name);
    msg[this.name] = this.value;
    toggle();
  }

  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  voicesDropdown.addEventListener('change', setVoice);
  option.forEach((option) => option.addEventListener('change', stepOption));
  speakButton.addEventListener('click', toggle);
  stopButton.addEventListener('click', () => {
    toggle(false);
  });
});
