import React from 'react'
import {Link} from 'react-router'
import {locales} from '../settings'
import '../res/styles/yangshi.styl'
import './cases.styl'
module.exports = React.createClass({
	getInitialState() {
		return {
			casesList: []
		}
	},
	componentWillMount(){
	    document.title = locales.zh_CN.cases
	    this.fetchcasesList()
	},
	fetchcasesList() {
		const query = this.props.location.search
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
		const activeStyle = {color: '#CA8100'}
		return(
			<div>
				<div className= "emty"></div>
				<div className= "case">
					<div className= "cas1">
						<ul className= "cas-ul">
							<li className= "nav-cas">
								<Link to= "/cases?all" className= "cas-a" activeStyle={activeStyle}>全部</Link>
							</li>
							<li className= "nav-cas">
								<Link to= "/cases/?differences=网站" className= "cas-a" activeStyle={activeStyle}>网页</Link>
							</li>
							<li className= "nav-cas">
								<Link to= "/cases/?differences=移动应用" className= "cas-a" activeStyle={activeStyle}>软件</Link>
							</li>
							<li className= "nav-cas">
								<Link to= "/cases/?differences=微信公众号" className= "cas-a" activeStyle={activeStyle}>微信</Link>
							</li>
						</ul>
					</div>
					{	
						this.state.casesList.map((item, index) => {
							return(

								<div key={index} className= "cas2">
									<Link to= {`/cases/${item._id}`}>
										<img className= "cas-photo" src= {item.photoUrl} />
										<div className= "cas-ptext">{item.title}</div>
									</Link>
									<img className= "finish" 
									src= {item.accomplish ? "../res/pic/accomplish.png" : "../res/pic/going.png"} />
									<div className= "t-cas1">
										<p className= "cas-text1">{item.money}</p>
										<p className= "cas-text2">{item.quota}</p>
									</div>
									<div className= "t-cas1">
										<p className= "cas-text1">{item.cycle}</p>
										<p className= "cas-text2">{item.days}</p>
									</div>
									<div className= "t-cas1">
										<p className= "cas-text1">{item.types}</p>
										<p className= "cas-text2">{item.differences}</p>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
})