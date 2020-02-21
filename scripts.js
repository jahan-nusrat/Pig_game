/********************************************
*Hoisting
***************/
/*
// variable Hoisting
var i='Hello';
console.log(i);
function show(){
    console.log(i);
    var i="Fariya"
    console.log(i);
}
show()
//function Hoisting
calculateAge(1996)
function calculateAge(year){
    console.log(2020-year)
}
*/

/***************************************
*Scoping
**************/
/*
var a='Hello';
first()

function first(){
    var b= 'Hi';
    second();
    function second(){
        var c='Hey';
        third()
    }
}

function third(){
    var d='John';
    console.log(c)
}
*/

/**************************************
*The This keyword
************/

//console.log(this)
/*
function calculateAge(year){
    console.log(2020-year)
    console.log(this)
}
calculateAge(1996)
*/
/*var john={
    name: 'John Smith',
    birthYear: 1996,
    calculateAge: function(){
        console.log(this);
        console.log(2020-this.birthYear)
    }
}
john.calculateAge();

var mike={
    name:'Mike',
    birthYear: 1998
};

mike.calculateAge=john.calculateAge;
mike.calculateAge()*/
/*
const video={
    title: 'a',
    calage:function play(){
        console.log(this)
    },
    notCalc: function notPlay(){
        console.log(this)
    }
    
}
video.stop= function(){
    console.log(this)
}
video.calage()
video.notCalc()
video.stop()
*/



































































