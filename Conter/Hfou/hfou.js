import React from 'react'
import {Link} from 'react-router'
import '../../res/styles/yangshi.styl'
import './four.styl'

export default class Hfou extends React.Component {
	render() {
		return(
			<div className= "hfou">
				<div className= "four1">
					<h1>提交需求</h1>
				</div>
				<div className= "four-add">
					<div className= "four2">
						<div className= "text-6">
							<img className= "fou-img" src= "../../res/pic/web.png"/>
							<Link to= "/">
								<img className= "fou-img1" src= "../../res/pic/web2.png"/>
							</Link>
							<Link to= "/">
								<button type= "button" className= "butn butn-t bt-g">
									网页
								</button>
							</Link>
							<div className= "ftext-add">网页</div>
						</div>

						<div className= "text-6">
							<img className= "fou-img" src= "../../res/pic/APP.png"/>
							<Link to= "/">
								<img className= "fou-img1" src= "../../res/pic/app2.png"/>
							</Link>
							<Link to= "/">
								<button type= "button" className= "butn butn-t bt-g">
									软件
								</button>
							</Link>
							<div className= "ftext-add">软件</div>
						</div>

						<div className= "text-6">
							<img className= "fou-img" src= "../../res/pic/wechat.png"/>
							<Link to= "/">
								<img className= "fou-img1" src= "../../res/pic/wechat2.png"/>
							</Link>
							<Link to= "/">
								<button type= "button" className= "butn butn-t bt-g">
									微信
								</button>
							</Link>
							<div className= "ftext-add">微信</div>						
						</div>
					</div>
				</div>

			</div>
		)
	}
}