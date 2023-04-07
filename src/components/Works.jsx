import './works.scss'
export default function Works(){
    return(
        <section className="Works" id='works'>
            <div className="container">
                <div className="left">
                    <ul>
                        <li>Media</li>
                        <li>Designs</li>
                        <li>Projects</li>
                        <li>Achievements</li>
                    </ul>
                </div>
                <div className="right">
                    <img src="./assets/desg.png"></img>
                </div>
            </div>
        </section>
    )
}