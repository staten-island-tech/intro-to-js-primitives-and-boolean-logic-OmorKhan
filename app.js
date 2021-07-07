console.log("connected");



// let string = "i am a string";
// let sentence = "Hello Angle " + "And Vicky";
// let combine = string + sentence

// let student = "Sandra";
// let student2 = "Gia";
// let courseName = "Ap CSP";
// let teacherName = "Whalen";
//      student +
//      " and " +
//      student2 +
//      " are taking " +
//      courseName +
//      " with " +
//      teacherName;

//////////number

// let year = 2020;
// let nextyear = year + 1;
// let past = 2020 / 2;
// let future = year * 2;

// ////booleans
// let trueStatement = false;


// ///// Null and undefined
// let richard;
// console.log(richard)
// console.log(jaiyu)



//// boolean logic
// let age = 17
// let boaSquared = 'Bao  Bao'
// console.log(boaSquared === "Bao Bao")
// console.log(age == "17")

// let age = 17;
// if(age < 18) {
//     console.log("you re a child");
// } else if (age == 18) {
//     console.log(happy birthday);
// } else {
//     console.log("you are over 18")
// }
// //red,green, yellow
// let light = "green";
// if(light === "green"){
//     console.log("go")
// } else if (light "yellow") {
//     console.log(caition);
// } else {
//   console.log("stop")
// }

// let kristyIntolerant = true;
// let boaBaoIntolerant = false;

// if (kristyIntolerant ===true && boaBaoIntolerant === true) {
//         console.log("get almond milk");
//     } else if ( kristyIntolerant === true || boaBaoIntolerant === true){
//         console.log("get both milk");
//     } else{
//         console.log("just regular milk");
//     }


/* function test() {
    console.log("im a function");
}
/* test(); */

// const add = function(x,y){
//   return x + y; //return ends function
// };

// console.log(add(100,20));
// let name = 'richard'; // cant redefine const
// name = "alan" */

/* const hello = function() {
    console.log("hello");
};
const bye = function() {
    console.log("bye");
};
const hiBye = function () {
    hello();
    bye ();
    hello();
    bye();
};
hiBye;  */

/* const name = "Thurushi"; //global variable or global

function displayName() {
    const name = "Kelly"; // local or function scope
    
    function sun() {
        console.log(name); // inner function has accass to outer function
    }
    return sun;
}
const myFunc = displayName();
myFunc();
// closure */

////Array

 /* const name = ["Aarthi", "Vicky", "vincent", "Doyle", "Kelly"];
// names.push("Karen"); 
names.forEach(name => console.log(name)); */

////// spread operator
/* const number = [1, 2, 3, 4, 5, 6];
const add = function(x, y, z, a, b, c) {
    return x + y + z + a + b + c;
};
console.log(add(...numbers)); */

let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa",
"Richard"];
//Using the above array filter out all students whose names contain
//less than 5 characters
const filtered = students.filter(students => students.length < 5);
console.log(filtered);

//"include" junshen
// Alan or Savva include 'some'
console.log(students.includes("junshen"));
console.log(students.some(student => student === "Alan" || student === "Savva"));




////object
/* const Riya = {
    name: "Riya",
    dob: 2003,
    graduted: false,
    age:function(){
        console.log(this);
        return 2020- this.dob;
    }
};

let age = function(){
    console.log(this);
    return 2020- this.dob;
} */

/* const Homer = {
    name: "Homer",
    age: 32,
    Family: {
        wife: {
            name:"Marge",
            age: 32,
        },
        son: {
            name: "Bart",
            age: 8,
        }
    },
    pets: ["cat", "dog"]
};

Homer.family.daughter = {
    name: "Lisa",
    age: 8
}; */

////destructuring
const Riya = {
    name: "Riya",
    dob: 2003,
    graduted: false,
    age:function(){
        console.log(this);
        return 2020- this.dob;
    }
};

/* const { name, age } = Riya;

const calc = {
    add: function() {
        return x + y;
    }
};
const { add, divided, cosine } = calc;

const { name, poster } = movie; */

/* const Angle = Riya; ///this snt a copy its a reference to
Angle.name = "Angel"; */

const Angel = {};
Angel.dob = Riya.dob