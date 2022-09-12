//import _ from "../node_modules/lodash";
import "./style.css";
  import Logo from './test.jpg';
import printMe from "./print";
import {cube} from "./math";
function component()
{
    const element=document.createElement(`div`);
    // element.innerHTML=_.join([`Hello`,`webPack`]);
    element.innerHTML = [
             'Hello webpack!',
             '5 cubed is equal to ' + cube(5)
           ].join('\n\n');
    element.classList.add(`Hello`);

    const myLogo=new Image();
     myLogo.src=Logo;
    element.appendChild(myLogo);

    const btn=document.createElement(`button`);
    btn.innerHTML='Click me and check the console!';
    let count=0;
    btn.onclick=()=>{
        count++;
        printMe(count);
        
    };
    element.appendChild(btn);
    return element;
}
document.body.appendChild(component());
if(module.hot)
{
    module.hot.accept('./print.js',function(){
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}