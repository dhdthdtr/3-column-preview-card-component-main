import React from "react";
import "./App.css"
import sedanSVG from "./images/icon-sedans.svg"
import suvsSVG from "./images/icon-suvs.svg"
import luxurySVG from "./images/icon-luxury.svg"

function App() {
    let datas = [
        {
            textcolor: 'text-bright-orange',
            bgcolor: 'bg-bright-orange',
            btncolor: 'bg-bright-orange',
            img: sedanSVG,
            name: 'Sedans',
            description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
        },
        {
            textcolor: 'text-dark-cyan',
            bgcolor: 'bg-dark-cyan',
            btncolor: 'bg-bright-orange',
            img: suvsSVG,
            name: 'SUVs',
            description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
        },
        {
            textcolor: 'text-very-dark-cyan',
            bgcolor: 'bg-very-dark-cyan',
            btncolor: 'bg-bright-orange',
            img: luxurySVG,
            name: 'Luxury',
            description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
        }
    ]

    let items = datas.map((data, index) => (
        <div key={index} id={"card-" + index} className={data.bgcolor + (index === 0 ? ' rounded-tl-m10 rounded-bl-m10 mobile:rounded-bl-none mobile:rounded-tr-m10' : (index === 2 ? " rounded-tr-m10 rounded-br-m10 mobile:rounded-tr-none mobile:rounded-bl-m10" : "")) + " w-4/12 mobile:w-full p-40px"}>
            <div className="w-full h-auto mb-30px">
                <img src={data.img} alt="" />
            </div>
            <h1 className="
                font-shoulders 
                uppercase 
                text-5xl 
                text-white 
                mb-30px
            ">{data.name}</h1>
            <p className="
                font-deca 
                text-white-a 
                text-base 
                mobile:text-sm 
                mb-60px 
                mobile:mb-30px 
                leading-6
            ">{data.description}</p>
            <button className={`hover:${data.btncolor} hover:border-white ${data.textcolor} font-deca bg-white border-none text-black text-center w-70pc py-2.5 px-4 rounded-full duration-300 ease-linear delay-0 mobile:font-bold`}>Learn more</button>
        </div>
    ))

    return (
        <main className="w-full h-screen mobile:h-max bg-light-gray flex mobile:block justify-center items-center">
            <div id="card-box" className="w-3/5 mobile:w-10/12 mobile:my-8 mobile:mx-auto flex mobile:block rounded-m10">
                {items}
            </div>
        </main>
    )
}

export default App;