import './navbar.scss'

export default function Navbar(){
    return(
        <div className="Navbar">
            <div className="nav-container">
                <div className="links">
                    <img className='logo' src='./assets/logo.png' alt=""/>
                    <ul>
                    <li onClick={()=>{document.getElementById("hero").scrollIntoView()}}>Home</li>
                    <li onClick={()=>{document.getElementById("who").scrollIntoView()}}>Who</li>
                    <li onClick={()=>{document.getElementById("works").scrollIntoView()}}>Works</li>
                    <li onClick={()=>{document.getElementById("contact").scrollIntoView()}}>Contact</li>
                    <li id='sp'><a href='https://s43khu.github.io/shekhu'>Resume</a></li>
                    <li id='sp'><a href='https://instagram.com/itz_shekhu'>Instagram</a></li>
                    </ul>
                </div>
                <div className="icons">
                    <img className='icon' src='https://cdn-icons-png.flaticon.com/512/876/876054.png' alt=""/>
                    <button href="https://github.com/s43khu">GITHUB</button>
                </div>
            </div>
        </div>
    )
}