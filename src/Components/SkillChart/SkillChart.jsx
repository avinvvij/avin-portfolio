import React , {Component} from 'react';
import './SkillChart.css';

class SkillChart extends Component{

   skills = [
    {
      title: 'Unity 3D',
      weightage: '30'
    },
    {
      title: 'Blender',
      weightage: '30'
    }
  ]

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className = "skills-holder">
        <div style={{position:'absolute' , background: '#000000aa' , height:'100%', width:'100%'}}>
          <div style={{marginLeft: '90px'}}>
            <label  style={{color:'white' , marginTop:'20px'}}className = "details-item-title-text">Skills</label>
            <div style={{width: '100%' , height:'500px'}} >

            </div>
        </div>
        </div>
      </div>
    )
  }

}

export default SkillChart
