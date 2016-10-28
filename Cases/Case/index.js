import React from 'react'
import './case.styl'

module.exports = React.createClass({

	getInitialState() {
		return {
			caseContent: { pics:[] }//?
		}
	},
	componentDidMount() {
		this.fetchcaseContent()
	},
	fetchcaseContent() {
		fetch(`http://localhost:2000/api/cases/${this.props.params.id}`, { method: 'GET'})
		.then((response) => {return response.json()})
		.then((responseJSON) => {
			this.setState({caseContent: responseJSON})
		})
		.catch((err) => {
			console.log(err)
		})
	},
	render () {
		return (
			<div>
				<div className= "emty"></div>
				<div className= "picpart">
					<div className= "casepics">
					{
						this.state.caseContent.pics.map((item,index)=>{
						return <img src= {item} key= {index} className= "case_pic"/>
						})//?
					}
					</div>
				</div>
				<div className= "txtpart">
					<p className= "casetxt">项目名称：{this.state.caseContent.title}</p>
					<p className= "casetxt">项目费用：{this.state.caseContent.quota}</p>
					<p className= "casetxt">项目周期：{this.state.caseContent.days}工作日</p>
					<p className= "casetxt">项目类型：{this.state.caseContent.differences}</p>
					<p className= "casetxt">{this.state.caseContent.description}</p>
				</div>
			</div>
		)
	}
})
