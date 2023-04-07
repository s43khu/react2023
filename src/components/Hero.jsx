import './hero.scss'

export default function Hero(){
    return(
        <section className="Hero" id="hero">
         <div className="Container">
            <div className="left">
                <p className='title'>Think. Develope. Surpass.</p>
                <div className="extra">
                    <img src='./assets/text.png' className='line'/>
                    <p className='extra-word'>what i do ?</p>
                </div>
                <p className='about-this'>Want to message me scroll to last page and fill the form or...</p>
                <button onClick={()=>{document.getElementById("contact").scrollIntoView()}}> Click here</button>
            </div>
            <div className="right">
                <img src='./assets/heroimg.png' className='image'alt=""/>
            </div>
         </div>
        </section>
    )
}