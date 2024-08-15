import './Followers.css'


function Followers(props) {
    return (
        <div id="Card" className={props.class}>
            <div className="Firstdiv">
                <img src={props.platform}></img>
                <label > {props.username}</label>
            </div>
            <div className="Seconddiv">
                <label className='value'>{props.value}</label>
                <label className='metric'>{props.metric}</label>
            </div>
            <div className="Thirddiv">

                {props.updown == "src/assets/images/icon-up.svg" ?
                    (<> <img src={props.updown}></img>
                        <label >{props.change}</label></>) :
                    (<><img src={props.updown}></img><label id='textred'>{props.change}</label></>)}

            </div>

        </div>
    )
}
export default Followers