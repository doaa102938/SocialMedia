import './OverView.css'
function Overview(props) {
    return (
        <div id='OverViewCard' className={props.class}>
            <div className="divtop">
                <label className='smalltitle' >{props.metric}</label>
                <img src={props.platform}></img>
            </div>
            <div className="divdown">
                <label className='value'>{props.value}</label>
                <div className="Thirddiv">
                    {props.updown == "src/assets/images/icon-up.svg" ?
                        (<> <img src={props.updown}></img>
                            <label >{props.change}</label></>) :
                        (<><img src={props.updown}></img><label id='textred'>{props.change}</label></>)}
                </div>
            </div>
        </div>
    )
}
export default Overview