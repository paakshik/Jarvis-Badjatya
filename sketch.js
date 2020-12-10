const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const speechRecognition = window.webkitSpeechRecognition /*Chrome*/ || window.speechRecognition;/*Firefox..*/
speechRecognition.interimResults = false;
const recog = new  speechRecognition();
const greets = [
'I am good , Hope that youare also good',
'I am excellent, please teach me'

]
recog.onstart = function(){
console.log("Start Speaking Sir");

}
recog.onresult =  function(event){
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  console.log(transcript);
  editor(transcript);
}
btn.addEventListener('click',() =>{
recog.start();

})
function editor(message){
  const voice = new SpeechSynthesisUtterance();
  

if (message.includes('name')){
  voice.text = 'My name is Jarvis'

}
if (message.includes('how')){
  voice.text = 'It is '+ new Date()

}
if (message.includes('time')){
  voice.text = 'It is '+ new Date()
}

if (message.includes('hi')){
  voice.text = "Hi , I am fine , hope that you are too!!"
}

else{
  voice.text = message;
}


  voice.volume = 1;
  voice.rate = 1;
  voice.pitch = 1;
 
window.speechSynthesis.speak(voice); 
}
