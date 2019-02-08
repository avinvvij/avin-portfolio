import React , {Component} from 'react';
import './Contact.css';
import {Row , Col} from 'react-bootstrap';

class Contact extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className = "contact-container">
        <Row style={{margin:'0px' , minHeight:'400px'}}>
          <Col style={{backgroundColor : '#2e4975'}} lg={6} xs={12} md={6} sm={12}>
            <div className = "quick-id-container">
              <label style={{color:'white' , marginTop:'20px'}} className = "details-item-title-text">Quick ID</label>
              <table className = "quick-id-table">
                <tr>
                  <td>
                    <label style={{color:'white',fontSize: '35px'}}>Phone : </label>
                  </td>
                  <td>
                    <label style={{marginLeft: '10px' , color:'white' , fontSize:'35px'}}>9420650091</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label style={{color:'white',fontSize: '35px'}}>Email : </label>
                  </td>
                  <td>
                    <label style={{marginLeft: '10px' , color:'white' , fontSize:'35px'}}>avinvij26@gmail.com</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label style={{color:'white',fontSize: '35px'}}>Skype : </label>
                  </td>
                  <td>
                    <label style={{marginLeft: '10px' , color:'white' , fontSize:'35px'}}>avinvij26</label>
                  </td>
                </tr>
              </table>
            </div>
          </Col>
          <Col style={{backgroundColor : '#bbc8dd'}} lg={6} xs={12} md={6} sm={12}>
            <label style={{marginTop:'20px'}} className = "details-item-title-text">Get In Touch</label>
            <div style={{marginTop:'20px'}}>
              <form>
                <Row>
                  <Col lg={6} sm = {12} xs={12}>
                    <input type = "text" placeholder = "Name" className = "contact-field"></input>
                  </Col>
                  <Col lg={6} sm = {12} xs={12}>
                    <input type = "text" placeholder = "Email" className = "contact-field"></input>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} sm = {12} xs={12}>
                    <input type = "text" placeholder = "Subject" className = "contact-field"></input>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} sm = {12} xs={12}>
                    <textarea type = "text" placeholder = "Message" className = "contact-field"></textarea>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} sm = {12} xs={12}>
                    <label className = "submit-button">Submit</label>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Contact
