import React from "react";
import { Tilt } from "react-tilt";
import data from '../assets/data.json'
import GODCanvas from "../cnvas/Aloy";
const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
function Games() {
  return (
    <div className="bg-games object-cover bg-cover mini:h-fit mini:p-8  w-full h-[900px] text-white font-sans p-2">
      <h1 className="text-3xl text-gray-300 mx-4 font-sans p-3">Games</h1>
      <div className="md:grid-cols-3 grid gap-4 sm:grid-cols-2 ">
        {data.data.map((game,key)=>(
                <Tilt key={key} options={defaultOptions} style={{ height: 250, width: 250 }} className='bg-primary flex flex-row justify-center items-center rounded-md '>
      <div className="relative">
          <img src={game.imgURL} alt="game" className="relative w-full h-full rounded-sm inset-0     object-contain"/>
          <div className="flex flex-col font-sans absolute opacity-0 hover:opacity-100 hover:bg-[#000000a7]  inset-0 text-center justify-center items-center">
            <h3>name: {game.name}</h3>
            <h3>released: {game.released}</h3>
            <h3>Note: {game.note}</h3>
          </div>
      </div>
    </Tilt>
        ))}
      </div>
<div className="flex flex-col justify-center items-center h-[700px] ">
  <GODCanvas/>
</div>
    </div>
  );
}

export default Games; 
