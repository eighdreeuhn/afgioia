import * as  Tone from 'tone'

const Pixel = (props) => {
   
    return (
        <div className="pixel" onMouseOver={() => props.hover(props.note)} style={{backgroundColor: `${props.color}`}}>
        </div>
    )
}

export default Pixel