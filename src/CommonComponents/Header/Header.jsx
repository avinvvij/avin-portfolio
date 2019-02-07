import React , {Component} from 'react';
import {Navbar , Nav} from 'react-bootstrap'

class Header extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Navbar fixed = {"top"} style={{background: '#00000077'}} expand="loght">
			  <Navbar.Brand href="#home" style={{color: 'white'}}>Avin Vij</Navbar.Brand>

				<Nav style={{float: 'left' , position: 'relative'}}>
					<div>
	      	<Nav.Link style={{float: 'left' , color:'white'}} >About Me</Nav.Link>
	      	<Nav.Link eventKey={2} style={{float: 'left',color:'white' , marginLeft: '20px'}} >
	        	Skills
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
