import React from 'react'
import '../evalua.styl'
import './resu.styl'
module.exports = React.createClass({
	render(){
		return(
			<div>
				<div className= "emty"></div>
				<div className= "evalua">
					<div className="pro-eval1">
						<div className="eval-icon">
							<img className= "step-eval first-step" src= "../../res/pic/first-step.png" />
						</div>
						<div className="eval-icon">
							<img className= "step-eval second-step" src= "../../res/pic/second-step.png" />
						</div>
						<div className="eval-icon">
							<img className= "step-eval" src= "../../res/pic/third-step.png" />
						</div>
					</div>
				</div>
				<div className= "resul">
					<h3 className= "resul-title">newTeo预估报价</h3>
					<div className= "resul-text">
						<div className= "baojia"></div>
						<div className= "resul-butn1">重新整理需求</div>
						<div className= "resul-butn2">生成报价</div>
					</div>
				</div>
			</div>
		)
	}
})