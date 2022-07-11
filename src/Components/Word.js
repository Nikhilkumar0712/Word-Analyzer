import React, { useState } from 'react'
import './Style.css'
const Word = (props) => {
    const [text, settext] = useState('')
    const uppercase = () => {
        let newtext = text.toUpperCase()
        settext(newtext)
    }
    const lowercase = () => {
        let newtext = text.toLowerCase()
        settext(newtext)
    }
    const clear = () => {
        let newtext = ""
        settext(newtext)
    }
    const del = () => {
        let newtext = text.slice(0, -1)
        settext(newtext)
    }
    const copy = () => {
        document.getSelection().removeAllRanges()
        navigator.clipboard.writeText(text)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    };
    const pause = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.pause(msg);
    };
    const resume = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.resume(msg);
    };
    const change = (e) => {
        settext(e.target.value)
    }
    return (
        <>      
            <div className='textarea'>
                <textarea onChange={change} style={{backgroundColor:props.mode==="light"?"dark":"light"}} value={text} cols="70" rows="10" placeholder='Review your text here'></textarea>
            </div>
            <div className='buttons'>
                <button onClick={uppercase} className='btn'>UpperCase</button>
                <button onClick={lowercase} className='btn'>LowerCase</button>
                <button onClick={clear} className='btn'>Clear</button>
                <button onClick={del} className='btn'>Delete</button>
                <button onClick={copy} className='btn'>Copy</button>
                <button onClick={speak} className='btn'>Speak</button>
                <button onClick={pause} className='btn'>Pause</button>
                <button onClick={resume} className='btn'>Resume</button>
            </div>
            <div className='preview'>
                <h5 className='htag'>Letter Count</h5>
                <div className="div">

                {text.trim().length}
                </div>
                <h5 className='htag'>Word Count</h5>
                <div className="div">

                {text.split(/\s+/).length - 1}
                </div>
                <h5 className='htag'>Preview</h5>
                <div className="div">                  
                {text}
                </div>
            </div>
        </>
    )
}

export default Word
