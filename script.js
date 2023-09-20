const makebubble = () => {
    let clutter = "";
    for (let i = 1; i <= 66
        ; i++) { 
        let v = Math.floor(Math.random() * 10);
        clutter += `<div class="ball" onclick="socr(this)">${v}</div>`;
    }
    document.querySelector("#bbottom").innerHTML = clutter;
}
let t = 31;
let k=0;
let a=0;
let name_1=document.getElementById("nm");
let pp=document.getElementById("pause");
let end_pressed=0;

const timer = () => {
    if (t > 0) {
        t -= 1;
        document.querySelector("#time_b").innerText = t;
        setTimeout(timer, 1000);
    }
    else if(t=='p'){
        k=parseInt(document.querySelector("#time_b").innerText);
    }
    else if(t=='r'){
        t=k;
        timer();
    }
     else {
       
        document.querySelector("#bbottom").innerHTML=`<div class="fin">Game over! ${name_1.value} score is: ${a}</div>`;

        

    }
}
const hitter = () => {
    let vr = Math.floor(Math.random() * 10);
    document.querySelector("#hit").innerText = vr;
}
const socr = (clickedElement) => {
    let ele = clickedElement.innerText;
    let hitele = document.querySelector("#hit").innerText;
    if (ele == hitele) {
        a = parseInt(document.querySelector("#scr").innerText);
        a += 10;
        document.querySelector("#scr").innerText = a;
        clickedElement.style.backgroundColor = "green"; 
    }
    else{
        clickedElement.style.backgroundColor = "red"; 
    }
        setTimeout(()=>{
        makebubble();
        hitter();
        },800);
}


const stt=()=>{
    t=31;
    end_pressed=0
hitter();
timer();
makebubble();
}
const ed = () => {
    document.querySelector("#bbottom").innerHTML = `<div class="fin">Game over! ${name_1.value} score is: ${document.querySelector("#scr").innerText}</div>`;
    document.querySelector("#scr").innerText = 0;
    document.querySelector("#time_b").innerText = 0;
    document.querySelector("#hit").innerText = 0;
    t=0;
    end_pressed=1;
    timer();
    
}
const pa=()=>{
    if ( document.querySelector("#pause").innerText=="PAUSE"){
        if(end_pressed==0){
    t='p';
    document.querySelector("#pause").innerText="RESUME";
    timer();
                        };
}

else{
    if(end_pressed==0){
    t='r';
    document.querySelector("#pause").innerText="PAUSE";
    timer();
    };


}


}

document.querySelector("#end").addEventListener("click", ed);
document.querySelector("#start").addEventListener("click", stt);
document.querySelector("#pause").addEventListener("click", pa);


