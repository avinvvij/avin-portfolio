import React , {Component} from 'react';
import {Row , Col} from 'react-bootstrap'

class DetailsItem extends Component{
	constructor(props){
		super(props)
	}

	renderTitleDetails = ()=>{
		if(this.props.data.objects){
			return (
				this.props.data.objects.map((object , index)=>{
					if(!object.icon){
					return(
						<Col xs = {12} lg={(12/this.props.data.objects.length)}>
							{object.subTitle && <label className = "details-duration">{object.subTitle}</label>}
							{object.duration && <label className = "details-duration">{object.duration}</label>}
							<label className = {"details-item-description"}>{object.text}</label>
						</Col>
					)
				}else{
					return (
						<Col style={{textAlign:'center'}} xs = {12} lg={(12/this.props.data.objects.length)}>
							<div style={{width:'100px',marginLeft:'auto' , marginRight:'auto',marginTop:'20px' , height:'100px', backgroundColor: 'grey', border: '1px solid white' ,display:'block' , borderRadius : '150px'}}>
								<img height={50} width={50} style={{marginTop:'20px'}} src = {"/assets/"+object.icon} />
							</div>
							<label className = {"details-item-description"}>{object.text}</label>
						</Col>
					)
				}
				})
			)
		}
	}

	render(){
		return(
			<div className = "details-item-holder">
				<label className="details-item-title-text">{this.props.data.title}</label>
				<Row>
					{this.renderTitleDetails()}
				</Row>
			</div>
		)
	}
}

export default DetailsItem
