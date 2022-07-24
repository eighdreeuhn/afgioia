import * as  Tone from 'tone'

const Pixel = (props) => {
   
    return (
        <div className="pixel" onMouseOver={props.hover} style={{backgroundColor: `${props.color}`}}>
        </div>
    )
}

export default Pixel