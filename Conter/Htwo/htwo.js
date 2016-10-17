import React from 'react'
import '../../res/styles/yangshi.styl'
import './two.styl'

export default class Htwo extends React.Component {
	render() {
		return(
			<div className= "htwo">
				<div className="two-l">
					<img className= "bala-img" src= "./res/pic/balance.png"/>
				</div>
				<div className="two-r">
					<h1 className= "text-1">这里有一套开发方案</h1>
					<h1 className= "text-1">帮你快速估价</h1>
					<div className= "text-2">
						<h4>2分钟,了解你的项目费用和周期</h4>
					</div>
					<div className= "text-3">
						<a href= "">
							<botton type= "botton" className= "butn butn-t"> 马上了解 </botton>
						</a>
					</div>
				</div>
			</div>
		)
	}
}