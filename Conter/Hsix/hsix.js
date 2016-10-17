import React from 'react'
import '../../res/styles/yangshi.styl'
import './six.styl'

export default class Hsix extends React.Component {

	render() {
		return(
			<div className= "hsix">
				<h2 className= "six1">我们的产品</h2>
				<div className= "six2">
					<div className= "six3">
						<img className= "pd" src= "./res/pic/product_1.jpg" />
					</div>

					<div className= "six3">
					<img className= "pd" src= "./res/pic/product_1.jpg" />
					</div>
				</div>
			</div>
		)
	}
}