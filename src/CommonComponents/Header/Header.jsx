import React , {Component} from 'react';
import {Navbar , Nav} from 'react-bootstrap'

class Header extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Navbar fixed = {"top"} style={{background: '#00000077'}} expand="loght">
			  <Navbar.Brand style={{color: 'white'}} onClick={()=>{
						this.props.scrollTo('nameholder')
					}}>Avin Vij</Navbar.Brand>

				<Nav style={{float: 'left' , position: 'relative'}}>
					<div>
	      	<Nav.Link onClick = {()=>{
							this.props.scrollTo('detailscarousel')
						}} style={{float: 'left' , color:'white'}} >About Me</Nav.Link>
	      	<Nav.Link onClick = {()=>{
							this.props.scrollTo('skillchart')
						}} eventKey={2} style={{float: 'left',color:'white' , marginLeft: '20px'}} >
	        	Skills
	      	</Nav.Link>
					<Nav.Link onClick = {()=>{
							this.props.scrollTo('skillchart')
						}} eventKey={2} style={{float: 'left',color:'white' , marginLeft: '20px'}} >
	        	Portfolio
	      	</Nav.Link>
					<Nav.Link onClick = {()=>{
							this.props.scrollTo('contact')
						}} eventKey={2} style={{float: 'left',color:'white' , marginLeft: '20px'}} >
	        	Contact
	      	</Nav.Link>
					</div>
					</Nav>
					<Nav>
					</Nav>
					<Nav>
					</Nav>
					<Nav>
					</Nav>
			</Navbar>

		)
	}
}

export default Header;
