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
      <div className = "details-item-holder">
        <label className = "details-item-title-text">Skills</label>
        <div style={{width: '100%' , height:'500px'}}>

        </div>
      </div>
    )
  }

}

export default SkillChart
