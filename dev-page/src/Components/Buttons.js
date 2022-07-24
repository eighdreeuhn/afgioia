const Buttons = (props) => {
    return (
        <div className="buttons">
            <button className="button" onClick={props.onClick}><h2>About</h2></button>
            <button className="button" onClick={props.onClick}><h2>Projects</h2></button>
            <button className="button" onClick={props.onClick}><h2>Skills</h2></button>
            <button className="button" onClick={props.onClick}><h2>Ipsus</h2></button>
            <button className="button" onClick={props.onClick}><h2>Contact</h2></button>
        </div>
    )
}

export default Buttons