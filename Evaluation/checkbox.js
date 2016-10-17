import React from 'react'
module.exports = React.createClass({
	getInitialState() {
		return {
			checked: false
		}
	},
	handleChange() {
		if(this.state.checked){
			this.props.updateCount(-1)
			this.props.removeEvaluation(this.props.item)
		} else {
			this.props.updateCount(1)
			this.props.addEvaluation(this.props.item)
		}
		this.setState ({
			checked: !this.state.checked
		})
	},
	render() {
		return <lebal className= "checkbox-checked">
			<input type= "checkbox" onChange={this.handleChange} checked={this.state.checked}  />
			{this.props.lebal}
			<div className='description'>{this.props.description}</div>
		</lebal>
	}
	
})