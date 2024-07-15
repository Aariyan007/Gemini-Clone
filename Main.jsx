import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

const Main = () => {
  const { onSent, recentprompt, showresult, loading, resultdata, setinput, input } = useContext(Context)
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.myicon} alt="" />
      </div>
      <div className="maincontainer">
        {!showresult ? 
          <>
            <div className="greet">
              <p><span>Hello, Dev.</span></p>
              <p>How can I assist you?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest some beautiful places</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Can we talk casually</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest some good ai developers</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>What can you do</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
            </div>
          </>
         : <div className='result'>
            <div className="result-title">
              <img src={assets.myicon} alt="" />
              <p>{recentprompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading?
              <div className='loader'>
                <hr />
                <hr />
                <hr />
              </div>
                :<p dangerouslySetInnerHTML={{__html:resultdata}}></p>
              }
              </div>
            </div>
          }
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setinput(e.target.value)} value={input} type="text" placeholder='Enter the prompt' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className='bottom-info'>
            Gemini might show wrong info.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
