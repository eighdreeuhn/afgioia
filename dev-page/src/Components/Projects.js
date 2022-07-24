
const Projects = (props) => {

    return (
        <div className="projects">
            <a href="https://eighdreeuhn.github.io/Kanji-Death-Match/" target='blank'><div className='kanji'>
                <div className="kanji-pic"></div>
                <h4>A learning app and a silly fighting game rolled into one! <br/> Uses the Kanji Alive! API to get kanji details and allows the user to pit their favorite symbols against one another in a fight to the death!</h4>
            </div></a>
            <a href='https://icbinp.github.io/ICBINP-Client/' target='blank'><div className='pineapple'>
                <div className="pineapple-pic"></div>
                <h4>A choose-your-own-adventure style fantasy game I developed with a team of 4</h4>
            </div></a>
            <a href='https://eighdreeuhn.github.io/Aleph/' target='blank'><div className='windchime'>
                <div className="windchime-pic"></div>
                <h4>A windchime simulation made wirh React and the Tone.js library</h4>
            </div></a>
            <a href='https://eighdreeuhn.github.io/Grid-game/' target='blank'><div className='grid-game'>
                <div className="grid-pic"></div>
                <h4>A recreation of the classic sliding number tiles game</h4>
            </div></a>
        </div>
    )
}

export default Projects