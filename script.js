// let userDetail = {
//     name : "tonystark",
//     age : 30,
//     designation : "engineer",
// }

// let PrintDetails = function (state, country){
//     console.log(this.designation+ "  " + state, country);
// }

//  PrintDetails.call(userDetail, "uttar pradesh", "delhi")
// function User (name, age) {
//     this.name = name;
//     this.age = age;
// }
// var user1 = new User('yash', 21);
// console.log(user1)//user1{name:yash,age=21}
// var user2 = new User('bharat', 22);
// console.log(user2)//user1{name:bharat,age=22}


// function myPromise(alpha,time){
//    return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log(alpha);
//         res("promise resolved");
//     },time)
//   }) 

// }
// async function consume(){
//      await myPromise(1,1000);
//      await myPromise(2,2000);
//      await myPromise(3,3000);
//      await myPromise(4,4000);
    
// }
// consume();

// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }

// const Bharat= Object.create(Person);
// // Object.setPrototypeOf(Bharat,about);
// Bharat.__proto__.about= function (){
//     console.log(`${this.name} is ${this.age}years old `)
//    }

   

// console.log(Bharat);
// console.log(Bharat.name);
// console.log(Bharat.age);

const obj1={
    name:'bharat',
    age:23,
    about: function (hobies, skills){
       return(`${this.name} is ${this.age} years old ${hobies} is the hobies and ${skills} is skill`)
       }
}
const obj2={
    name:'yash',
    age:21,
}
const obj3={
    name:'prince',
    age:22,
}
const obj4={
    name:'shubham',
    age:22,
}

console.log(obj1.about.call(obj2,'BGMI',"frontEnd dev"));//call
console.log(obj1.about.apply(obj3,['cricket',"web dev"]));//apply
let shub=obj1.about.bind(obj4,'chess',"AI and ML"); //bind
console.log(shub())
