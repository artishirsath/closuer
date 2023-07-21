//problem-1//

function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

//problem-2//

let count = 0;
        (function () {
        if (count === 0) {
        let count = 1;
        console.log(count); 
        }
         console.log(count); 
        })();


//Problem-3//

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); 
    }, 1000);
}

//problem-4//

function OuterFunction() {
    let length = 20;
    function InnerFunction() {
        let breadth=50;
        console,console.log(`The area of the rectangle is:->`,length*breadth);
    }
    return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();

//Problem-5//

function counter(){
    var counter = 0;
    function IncreaseCounter() {
        return counter += 1;
    };
    return IncreaseCounter;
}
var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());
alert(counter());
alert(counter());


//Problem-6//

var a = 12;
(function () {
alert(a);
})();

//Problem-7//

var a = 10;
var x = (function () {
var a = 12;
return function () {
    alert(a);
};
})();
x();

//Problem-8//

var globalVar = "xyz";

        (function outerFunc(outerArg) {
        var outerVar = 'a';
    
        (function innerFunc(innerArg) {
        var innerVar = 'b';
    
        console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
        })(456);
        })(123);





















