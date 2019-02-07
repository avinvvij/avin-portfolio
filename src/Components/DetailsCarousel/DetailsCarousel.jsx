import React , {Component} from 'react';
import {Carousel} from 'react-bootstrap'
import "./DetailsCarousel.css"
import DetailsItem from './DetailsItem.jsx'

class DetailsCarousel extends Component{

	my_details = [
		{
			title: "About Me",
			objects: [
				{
					text: "Hi , I'm Avin vij, softawre developer from India, I like to solve the real world problems using the technology. I have made many mobile games using Unity 3D , blender and adobe illustrator. Also proficient in writing mobile applications using native techonology Android Studios or using the hybrid technology i.e. React Native. Last but not the least , I also love to design websites and webapps using ReactJS ,HTML & CSS."+
					" Apart from technology I like to play cricket or do gymming or even listen to music in my free time."
				}
			]
		},
		{
			title: "Expirience",
			objects: [
				{
					subTitle: 'Xoriant Solutions',
					duration: '2016-2019',
					text: "I worked as a softawre developer where I worked on many vivid technologies like COCOS2D , Unity3D , React Native , ReactJS , NodeJS and many more. I handled projects of Disney , ACCLOUD , DYNOSENSE , BLUEHEXAGON and NICKELODEON."
				},
				{
					subTitle: 'epiKAT Studios',
					duration: '2014-Current',
					text: "epiKAT studios is a small company I started with my friends. epiKAT studios makes mobile games specially for android platform. Rolling Planets , Flakky Run , Shape Patcher , Flying Puffy and The Indian Bingo are the games launched under epiKAT studios. Apart from that we have worked on many other games using the recent idealogies of AR and VR."
				}
			]
		},
		{
			title: "Hobbies & Intrests",
			objects: [
				{
					icon: 'hand.png',
					text: 'Coin Collection',
				},
				{
					icon: 'cricket.png',
					text: 'Cricket'
				},
				{
					icon: 'music.png',
					text: 'Music',

				},
				{
					icon: 'gadget.png',
					text: 'Exploring Gadgets'
				}
			]
		}
	]

	constructor(props){
		super(props);
	}

	generateDetails = ()=>{
		return this.my_details.map((item , index)=>{
			return(
				<Carousel.Item>
			      <DetailsItem data = {item} />
				</Carousel.Item>
			)
		})
	}

	render(){
		return(
			<div style={{ position: 'relative'}}>
				<Carousel slide={true} controls = {false}>
					  {this.generateDetails()}
				</Carousel>
			</div>
		)
	}
}

export default DetailsCarousel
