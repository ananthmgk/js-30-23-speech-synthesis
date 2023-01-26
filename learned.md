The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
```
function Car() {}
const car1 = new Car();
const car2 = new Car();

console.log(car1.color);    // undefined

Car.prototype.color = 'original color';
console.log(car1.color);    // 'original color'

car1.color = 'black';
console.log(car1.color);    // 'black'

console.log(Object.getPrototypeOf(car1).color); // 'original color'
console.log(Object.getPrototypeOf(car2).color); // 'original color'
console.log(car1.color);   // 'black'
console.log(car2.color);   // 'original color'

```

- here => `speechSynthesis` is a **Global varible**.


`SpeechSynthesisUtterance.lang`
    Gets and sets the language of the utterance.

`SpeechSynthesisUtterance.pitch`
    Gets and sets the pitch at which the utterance will be spoken at.

`SpeechSynthesisUtterance.rate`
    Gets and sets the speed at which the utterance will be spoken at.

`SpeechSynthesisUtterance.text`
    Gets and sets the text that will be synthesized when the utterance is spoken.

`SpeechSynthesisUtterance.voice`
    Gets and sets the voice that will be used to speak the utterance.

`SpeechSynthesisUtterance.volume`
    Gets and sets the volume that the utterance will be spoken at.
