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
					text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
				}
			]
		},
		{
			title: "Expirience",
			objects: [
				{
					subTitle: 'Xoriant Solutions',
					duration: '2016-2018',
					text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
				},
				{
					subTitle: 'epiKAT Studios',
					duration: '2016-2018',
					text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
