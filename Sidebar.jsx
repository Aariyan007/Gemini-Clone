import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'
const sidebar = () => {
  const [extended, setExtended] = useState(false)
  const{onSent,prevprompt,setrecentprompt} = useContext(Context)
  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick = {()=>setExtended(prev=>!prev)}className='menu' src={assets.menu_icon} alt='' />
        <div className="newchat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New chat</p> : null}
        </div>
        {extended
          ? <div className="recent">
            <p className="recent-title">Recent</p>
            {prevprompt.map((item,index)=>{
                return(
                  <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>{item}...</p>
                  </div>
                )
            })}
            
          </div>
          : null
        }
      </div>
      <div className="bottom">
        <div className="bottomitem recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended?<p>Help</p>:null}
        </div>
        <div className="bottomitem recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended?<p>Activity</p>:null}
        </div>
        <div className="bottomitem recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended?<p>Setting</p>:null}
        </div>
      </div>
    </div>
  )
}

export default sidebar