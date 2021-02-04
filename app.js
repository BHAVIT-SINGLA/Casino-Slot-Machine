let values =['😁','😌','😉','😇','🥳','🤩','🤬','😍'];

let value1 =document.getElementById('slot1');
let value2 =document.getElementById('slot2');
let value3 =document.getElementById('slot3');
let speed= document.getElementById('speed');
let same=document.getElementsByClassName('same');
let newspeed=2/speed.value;
console.log(newspeed);
value1.style.animationDuration=`${newspeed}`+'s';
value2.style.animationDuration=`${newspeed}`+'s';
value3.style.animationDuration=`${newspeed}`+'s';
let stopb=document.getElementById('stop');
let message=document.getElementById('message');
console.log(stopb);

var animationId;
function getValues()   
{
  
    animationId=setInterval(() => {
        let req=[];
        for(let i=0;i<3;i++)
        {
        let val1= values[Math.floor(Math.random()*8)];
        req.push(val1);
        
        }
        value1.innerText=req[0];
        value2.innerText=req[1];
        value3.innerText=req[2];
        
    }, 900);
   
};
getValues();


function updateSpeed (newspeed,tostop)
{
    if(tostop)
    {
        clearInterval
    }
    if(animationId)
    {
        clearInterval(animationId);
    }
    animationId=   setInterval(() => {
        let req=[];
        for(let i=0;i<3;i++)
        {
        let val1= values[Math.floor(Math.random()*8)];
        req.push(val1);
        
        }
        value1.innerText=req[0];
        value2.innerText=req[1];
        value3.innerText=req[2];
        
    }, 1000/`${newspeed}`);

}

speed.onchange =(ev) =>
{
  
   
    var u=ev.target.value;
     newspeed=3/u;
    value1.style.animationDuration=`${newspeed}`+'s';
    value2.style.animationDuration=`${newspeed}`+'s';
    value3.style.animationDuration=`${newspeed}`+'s';
    updateSpeed(newspeed);
}
stopb.onclick =() =>
{
    console.log(stopb);
    value1.style.animationDuration="";
    value2.style.animationDuration="";
    value3.style.animationDuration="";
    clearInterval(animationId);
    let v1=value1.innerText;
    let v2=value2.innerText;
    let v3=value3.innerText;
    if(v1===v2 && v1===v3)
    {
        message.innerText="YOU WON THE GAME";
    }
    else
    {
        message.innerText="TRY AGAIN";
    }
    

}






