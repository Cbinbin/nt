import React from 'react'
import {Link} from 'react-router'
import {locales} from '../settings'
import '../res/styles/yangshi.styl'
import './evalua.styl'
module.exports = React.createClass({
	componentDidMount(){
    document.title = locales.zh_CN.evaluation
  },
	render() {
		return(
			<div>
				<div className= "emty"></div>
				<div className= "evalua">
					<div className="pro-eval1">
						<div className="eval-icon">
							<img className= "step-eval" src= "../res/pic/first-step.png" />
						</div>
						<div className="eval-icon">
							<img className= "step-eval second-step" src= "../res/pic/second-step.png" />
						</div>
						<div className="eval-icon">
							<img className= "step-eval third-step" src= "../res/pic/third-step.png" />
						</div>
					</div>
					<div className="pro-eval2">
						<div className="eval-text">
							<h2>自助评估您的项目价格和周期</h2>
							<h4 className= "eval-txth">轻松完成您的项目评估，获得newTeo承诺报价</h4>
						</div>
					</div>
					<div className="pro-eval3">
						<div className="eval-photo">
							<img className= "pt2" src= "../res/pic/web-2.png"/>
							<Link to= "/evaluation/web">
								<button type= "button" className= "eval-butn">网站</button>
							</Link>
						</div>
						<div className="eval-photo">
							<img className= "pt2" src= "../res/pic/ios.png"/>
							<Link to= "/evaluation/ios">
								<button type= "button" className= "eval-butn">ios应用</button>
							</Link>
						</div>
						<div className="eval-photo">
							<img className= "pt2" src= "../res/pic/android.png"/>
							<Link to= "/evaluation/android">
								<button type= "button" className= "eval-butn">安卓应用</button>
							</Link>
						</div>
						<div className="eval-photo">
							<img className= "pt2" src= "../res/pic/wechat-2.png"/>
							<Link to= "/evaluation/wechat">
								<button type= "button" className= "eval-butn">微信</button>
							</Link>
						</div>
					</div>
					
				</div>
			</div>
		)
	}
})