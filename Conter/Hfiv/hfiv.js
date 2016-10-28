import React from 'react'
import {Link} from 'react-router'
import '../../res/styles/yangshi.styl'
import './five.styl'

module.exports = React.createClass({
	getInitialState() {
		return {
			casesList: []
		}
	},
	componentDidMount(){
    	this.fetchcasesList()
	},
	fetchcasesList() {
		fetch('http://localhost:2000/api/cases', { method: 'GET'})
		.then((response) => {return response.json()})
		.then((responseJSON) => {
			this.setState({casesList: this.state.casesList.concat(responseJSON)})
		})
		.catch((err) => {
			console.log(err)
		})
	},
	render() {
		return(
			<div className= "hfiv">
				<div className= "fiv1">
					<h2>这些项目被newTeo实现</h2>
				</div>

				<div className= "fiv2">
					<div className= "fiv3">
					{	
						this.state.casesList.map((item, index) => {
							return(
								
								<div key={index} className= "fiv4">
									<Link to= {`/cases/${item._id}`}>
										<div className= "hid_ftxt">	
											<p>项目名称:{item.title}</p>
											<p>价格:{item.quota}</p>
										</div>
									</Link>
									<Link to= {`/cases/${item._id}`}>
										<img src= {item.photoUrl} className= "pt10"/>
									</Link>
								</div>
							)
						})
					}
					</div>
				</div>
			</div>
		)
	}
})