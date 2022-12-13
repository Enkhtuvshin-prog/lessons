// stopTime
const h1 = document.getElementsByTagName('h1')[0];
const startBtn = document.getElementsByTagName('button')[0];
const stoptBtn = document.getElementsByTagName('button')[1];
let millsecond =0;
let second = 0;
let minute = 0;
let hours = 0;
let timer = null;
const digitalClock = () =>{
    millsecond = new Date(). getMilliseconds();
    second = new Date().getSeconds();
    minute = new Date().getMinutes();
    // hours = new Date().getHours();

    h1.textContent = ` ${minute}:${second}:${millsecond}`;
    };
const clear = () =>{
    clearInterval(timer);
};
const start = () =>{
   timer = setInterval(digitalClock, 1000)
}
 timer = setInterval(digitalClock, 1000);
startBtn.addEventListener('click', start);
stoptBtn.addEventListener('click', clear);

