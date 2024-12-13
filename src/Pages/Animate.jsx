import { useGSAP } from '@gsap/react';
import  './animate.css';
import gsap from 'gsap';
import { useState } from 'react';


export default function Animate(){


    useGSAP(()=>{
        gsap.from('.panel .part',{
            opacity:0,
            x:900,
            duration:2,
            delay:1,
            repeat:-1,
            stagger:1,
        })
    })

    useGSAP(()=>{
        gsap.to('.panel2 .box',{
            opacity:1,
            x:700,
            duration:2,
            delay:2,
        })
    },{scope:'.box1'})
    useGSAP(()=>{
        gsap.from('.panel2 .box',{
            opacity:1,
            x:700,
            duration:3,
            delay:2,
        })
    },{scope:'.box2'})

const [xAxis,setAxis]=useState(0)

const randomX=gsap.utils.random(-500,500,15)
console.log(randomX)
useGSAP(()=>{
    gsap.from('.panel3 .boxes',{
        opacity:0.3,
        x:xAxis,
        delay:2,
        rotate:360,
        duration:1
    })
},[xAxis])

   const onBClick=()=>{
    setAxis(randomX)
   }
    return(

        <>
        <div className="panel">
                <div className="part"></div>
                <div className="part"></div>
                <div className="part"></div>
                <div className="part"></div>
                <div className="part"></div>
                <div className="part"></div>
        </div>
       <div className="panel2">
            <div className="box1">
                <div className="box"></div> 
                <div className="box"></div>
            </div>
            <div className="box2">
                <div className="box"></div>
                <div className="box"></div>
            </div>  
        </div>
        <div className="panel3">
                <div className="boxes"></div> 
                <button onClick={onBClick}>Click Me</button>
        </div>
        </>
    )
}