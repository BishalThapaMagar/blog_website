var div_id = document.getElementsById('div1');
var div_class = div_id.getElementsByClassName('div2');
var div_tag = document.getElementsByTagName('p');
var queryone = document.querySelector('.div2'); // finds the first class with the same id or class name and selects it
var queryall = document.querySelectorAll('.div2','#div1'); // finds all the element with the same name/s and stores all. Use loop to use

var text = "Hello World";
div_id.innerHTML = text;
div_id.textcontent = text; // Displays exactly the element i.e. <p>Hello World</p>

for(i=0;i<queryall.length;++i){
    // Methods don't use () at last
    queryall[i].innerHTML = text;
}

for(i=0, j=queryone.length = 0, k = 1;i<10;i++){ // initialized 3 variables
    document.write(text) 
}

// BASICS
var x = "Bishal"
document.write(x)
document.write("My name is "+x+".<br> I am student.")

// Array
let arr = ["car","bus","cycle"]
console.log(arr)

// Function using Function constructor --> Function() and new
var My_func = new Function("a","b","return a+b")
var op = My_func(5,4)
document.write(op)

// Function using Function --> function()
var My_func2 = function(a,b){
    return a+b;
}

var op2 = My_func2(5,4);
document.write(op2)

// Class
class car{
    //Properties 
        // contstructer() --> Special function/method(nope) that is used to assign properties.
        // Called automatically when object is created hence values should be sent while creating obj.
    constructor(name,model,year){
        this.name = name;
        this.model = model;
        this.year = year;
    }
    //Methods
    drive(){
        document.write("driving")
    }
    brakes(){
        document.write("Stopping")
    }
}

// Object

let newcar = new car("Ford","Mustang",2022);
newcar.drive()
newcar.brakes()

// Event Listener method
    //.addEventListener("event",listener/function,option)
    //.removeEventListener("event",listener/function,option)
document.getElementById('div1').addEventListener("click", () => {
    div1.classList.toggle("active") 
    // classList property returns all the css classes of the element.
    // .toggle() is method of classList to alter css. Other are .add(), .remove(), .replace(), .values(), .value
})

// To iterate over all elements in array/class_of_css of js

document.querySelector(".css_class").forEach(element => { //here document.querySelector(".css_class") will return array
    // element is an looping variable for array. Use like this
    element.addEventListener("click",() => {
        //Add event handler
    })
});

// TOGGLE CLASS
$('.showhide').click(function() {
    $(this).toggleClass('myclass');
    $(this).toggleClass('showhidenew');
});

// Toggle css
function changeBackgroundIMG() {
    var bg = document.getElementById(bgIMG);
    bg.style.background = url(newimage.jpg);
    }
    document.getElementById(btn).onclick = changeBackgroundIMG;