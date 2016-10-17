import React from 'react'
import { withRouter } from 'react-router'
import Header from './Header'
import Footer from './Footer'
module.exports = withRouter(React.createClass({
  render(){
  	return <div className= "app">
  		
  		{this.props.children && React.cloneElement(this.props.children, {router: this.props.router})}
  		<Header />
  		<Footer />
  	</div>
  	}
}))