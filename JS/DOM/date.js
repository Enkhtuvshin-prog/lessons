const myBtn = document.getElementById('myBtn');
const timeMin = document.querySelector('#timeMin');
 

const  digitalClock = () =>{
    const date = new Date();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let milliseconds = date.getMilliseconds();

    minute = minute<10 ? `0${minute}`: minute; 
    second = second<10 ? `0${second}`: second; 
    milliseconds = milliseconds<10 ? `0${milliseconds}`: milliseconds;
    
    // return `${minute}:${second}:${milliseconds}`;
    let fullTime = `${minute}:${second}:${milliseconds}`;
    timeMin.innerHTML = fullTime;
 }
//  const digitalTime = () =>{
//     let clock = digitalClock()
//     timeMin.innerHTML = clock;
// }

//  myBtn.addEventListener('click', digitalClock());
//   setInterval(digitalClock)