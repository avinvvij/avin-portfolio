import React , {Component} from 'react';
import './NameHolder.css'

class NameHolder extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div style={{height:'98%'}}>
			<div className = "banner-holder">
				<div className = "banner-tint">
					<label className = "banner-name">Avin Vij</label><br/>
					<label className = "banner-designation">Your Friendly Neighbourhood Software Developer</label>
				</div>
				<div className = "banner-dp-holder">
					<div className = "banner-dp"></div>
				</div>
			</div>
			</div>
		)
	}
}

export default NameHolder