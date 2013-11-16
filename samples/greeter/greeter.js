/**
* Greets you with a warm welcome.
*/
var Greeter = (function () {
    /**
    * Create a new Greeter
    */
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello " + this.greeting;
    };
    return Greeter;
})();

var greeter = new Greeter("world!");

var button = document.createElement('button');
button.innerText = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
};

document.body.appendChild(button);
