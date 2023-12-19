import './Card.css'
import './CardResponsive.css'

function Card() {
    return(
        <div className='nftCard'>
            <aside className="top">
                <img className='nftImage' src="./images/image-equilibrium.jpg" alt="nftImage" />
            </aside>
            <aside className="bottom">
                <h1>Equilibrium #3429</h1>
                <p>Our Equilibrium collection promotes balance and calm.</p>
                <div className='priseAndDate'>
                    <div className="prise">
                        <img src="./images/icon-ethereum.svg" alt="etheremIcon" />
                        <h6>0.041 ETH</h6>
                    </div>
                    <div className='date'>
                        <img src="./images/icon-clock.svg" alt="clockIcon" />
                        <h6>3 days left</h6>
                    </div>
                </div>
                
            <div>
                <div className="line"></div>
                <div className='creator'>
                    <img src="./images/image-avatar.png" alt="creatorImage" />
                    <h5>Creation of <span>Jules Wyvern</span></h5>
                </div>
            </div>
            </aside>
        </div>
    )
}

export default Card