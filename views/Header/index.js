import React from 'react'
import {Link,IndexLink} from 'react-router'
import '../../res/styles/yangshi.styl'
import './one.styl'

module.exports = React.createClass ({

	render() {
		const activeStyle = {borderBottom: '3px solid white',transition: 'all 0.2s ease-in'}
		return( 
			<div className= "header">
				<div className= "logo">
					<IndexLink to= "/">
						<img src="../../res/pic/logo.png" className= "navbar-img"/>
					</IndexLink>
				</div>
				<div className= "col">
					<ul className= "nav-inlink">
						<li className= "nav-item">
							<Link to="/evaluation" className= "nav-link  nav-text" activeStyle={activeStyle} >估价</Link>
						</li>
						<li className= "nav-item">
							<Link to= "/requirement" className= "nav-link  nav-text" activeStyle={activeStyle} >需求</Link>
						</li>
						<li className= "nav-item">
							<Link to= "/cases" className= "nav-link  nav-text" activeStyle={activeStyle} >案例</Link>
						</li>
						<li className= "nav-item">
							<Link to= "/product" className= "nav-link  nav-text" activeStyle={activeStyle} >产品</Link>
						</li>
						<li className= "nav-item">
							<Link to= "/contact" className= "nav-link  nav-text" activeStyle={activeStyle} >联系</Link>
						</li>
					</ul>
				</div>
			</div>
		)
	}
})