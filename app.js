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


function getValues()   
{
    setInterval(() => {
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

speed.onchange =(ev) =>
{
  
   
    var u=ev.target.value;
     newspeed=1/u;
    value1.style.animationDuration=`${newspeed}`+'s';
    value2.style.animationDuration=`${newspeed}`+'s';
    value3.style.animationDuration=`${newspeed}`+'s';
    
}


getValues();

