import React from 'react'
import '../../res/styles/yangshi.styl'
import './three.styl'

export default class Hthr extends React.Component {
	render() {
		return(
			<div className= "hthr">
				<div className= "ttop">
					<h2>实现一套完整的开发流程</h2>
				</div>
				<div className= "tall">
					<div className= "thr1">
						<div>
							<img className= "hre-img" src= "./res/pic/pm.png"/>
						</div>
						<div>
							<h4 className= "text-4">需求整理 & 原型</h4>
							<p className= "text-5">newTeo 整理项目需求，编写需求文档并制作原型。</p>
						</div>
					</div>
						
					<div className= "thr1">
						<div>
							<img className= "hre-img" src= "./res/pic/UI.png"/>
						</div>
						<div>
							<h4 className= "text-4">UI 设计</h4>
							<p className= "text-5">newTeo 设计产品交互界面，提供多种精美风格。</p>
						</div>
					</div>

					<div  className= "thr1">
						<div>
							<img className= "hre-img" src= "./res/pic/coding.png"/>
						</div>
						<div>
							<h4 className= "text-4">程序开发</h4>
							<p className= "text-5">newTeo 开发各种平台实现，严格项目监理管控开发流程。</p>
						</div>
					</div>

					<div  className= "thr1">
						<div>
							<img className= "hre-img" src= "./res/pic/server.png"/>
						</div>
						<div>
							<h4 className= "text-4">部署 & 上线</h4>
							<p className= "text-5">newTeo 部署项目、测评、快速上线，保障交付。</p>
						</div>
					</div>

				</div>
			</div>
		)
	}
}