// let mytime = new Date()
// console.log( `Date: ${mytime.getDate()}` );
// console.log( `Day: ${mytime.getDay()}` );
// console.log( `FullYear: ${mytime.getFullYear()}` );
// console.log( `ours: ${mytime.getHours()}` );
// console.log( `Milliseconds: ${mytime.getMilliseconds()}` );
// console.log( `Minutes: ${mytime.getMinutes()}` );
// console.log( `Month: ${mytime.getMonth()}` );
// console.log( `Seconds: ${mytime.getSeconds()}` );
// console.log( `Time: ${mytime.getTime()}` );

// let myClock = () =>{
//     let clock = document.querySelector("#clock")
//     let myDate = new Date()
//     clock.textContent = `${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`
// }
// myClock()

// setInterval(myClock , 1000)

let clock = document.querySelector("#clock");
let myDate = new Date();
let myClock = gregorian_to_jalali(
    myDate.getFullYear(),
    myDate.getMonth() + 1,
    myDate.getDate()
)
clock.textContent = `امسال سال ${myClock[0]} برج ${myClock[1]} و روز ${myClock[2]}`