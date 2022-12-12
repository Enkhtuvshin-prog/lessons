    let color = ['Red', 'Green', 'Blue'];
    let colorIndex =0;
    const body =document.getElementsByTagName("body")[0];
    const myBtn =document.getElementById("myBtn");
    const divs = document.getElementsByTagName("box")
    // console.log(myBtn)
    const changeBox = () =>{
        for(i=0; i<divs.length; i++){
            let color = changeColor();
            divs[i].style.backgroundColor = color;
        }
    }
    const changeColor = () =>{
        let red =Math.floor(Math.random() * 256);
        let green =Math.floor(Math.random() * 256);
        let blue =Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue} )` }
        // if(colorIndex<=3){
        //     colorIndex = 0;
        // }
      divs.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
        // body.style = `background-color: ${color[colorIndex]}`;
        // myBtn.style.
        // colorIndex++;
    // }

myBtn.addEventListener('click', change)
