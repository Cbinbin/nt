import React from 'react'
import {locales} from '../settings'
import '../res/styles/yangshi.styl'
import './conta.styl'
module.exports = React.createClass({
	componentDidMount(){
    document.title = locales.zh_CN.contact
  },
	render() {
		return(
			<div>
				<div className= "emty"></div>
				<div className= "cont-end">
					<div className= "contat">
						<img className= "con-P" src= "../res/pic/contact.png" />
						<div className= "con-T">
							newTeo乃潮州市潮安区新潮网络科技有限公司（新潮科技）麾下核心技术
							&设计团队。 主要提供现代互联网应用的需求梳理、UI设计、程序开发和
							维护等服务。 扁平化管理，开放式思维是团队理念， 敢于运用前沿技术、
							新颖模式为团队风格， 自我革新，精益求精乃团队品质。 一群年轻人因
							为类似的想法而聚集到一起，为实现共同的愿景而不懈努力。 这便是
							newTeo，这正是新潮科技！	
						</div>

						<div>
							<img className= "people" src= "../res/pic/ren.png" />
						</div>
					</div>
				</div>
			</div>
		)
	}
})