
const Projects = (props) => {

    return (
        <div className="projects">
            <div className='kanji'>
                <div className="kanji-pic"></div>
                <h4>A learning app and a silly fighting game rolled into one! <br/> Uses the Kanji Alive! API to get kanji details and allows the user to pit their favorite symbols against one another in a fight to the death!</h4>
            </div>
            <div className='pineapple'>
                <div className="pineapple-pic"></div>
                <h4>A choose-your-own-adventure style fantasy game I developed with a team of 4</h4>
            </div>
            <div className='windchime'>
                <div className="windchime-pic"></div>
                <h4>A windchime simulation made wirh React and the Tone.js library</h4>
            </div>
            <div className='grid-game'>
                <div className="grid-pic"></div>
                <h4>A recreation of the classic sliding number tiles game</h4>
            </div>
        </div>
    )
}

export default Projects