import React from 'react'
import Sleepy from './images/Sleepy.png'
import tg from './images/tg.png'
import ds from './images/ds.png'
import mag from './images/mag.png'

const Comp = () => {
  return (
    <div id='glav_comp'>
      <div id='inf'>
        <div id='all_sph'>    
        <div><form action="https://discord.gg/5X85sVWrWh" target="_blank"><button id='sph1'><img id='ds' src={ds} /></button></form></div>
         <div><form action="https://t.me/SleepyLandik" target="_blank"><button id='sph2'><img id='tg' src={tg} /></button></form></div>
         <div><form action="https://shop.sleepyland.fun/#shop" target="_blank"><button id='sph3'><img id='mag' src={mag} /></button></form></div>
        </div>
        <img id='sleep' src={Sleepy} />
        <div id='elips_div'>
          <button id='elips'>sleepyland.fun</button> 
        </div>
      </div>
    </div>
  )
  
}

export default Comp