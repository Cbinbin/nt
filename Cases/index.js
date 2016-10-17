import React from 'react'
import {locales} from '../settings'
import '../res/styles/yangshi.styl'
import './cases.styl'
module.exports = React.createClass({
	componentDidMount(){
    document.title = locales.zh_CN.cases
  },
	render() {
		return(
			<div>
				<div className= "emty"></div>
				<div className= "case">
					<div className= "cas1">
						<ul className= "cas-ul">
							<li className= "nav-cas"><a href= "" className= "cas-a">icon</a></li>
							<li className= "nav-cas"><a href= "" className= "cas-a">网页</a></li>
							<li className= "nav-cas"><a href= "" className= "cas-a">软件</a></li>
							<li className= "nav-cas"><a href= "" className= "cas-a">微信</a></li>
						</ul>
					</div>
					<div className= "cas2">
						<img className= "cas-photo" src= "../res/pic/syjs3.jpg" />
						<div className= "cas-ptext">石油技术平台第三期</div>
						<img className= "finish" src= "../res/pic/accomplish.png" />
						<div className= "t-cas1">
							<p className= "cas-text1">金额</p>
							<p className= "cas-text2">￥8000</p>
						</div>
						<div className= "t-cas1">
							<p className= "cas-text1">周期</p>
							<p className= "cas-text2">10天</p>
						</div>
						<div className= "t-cas1">
							<p className= "cas-text1">类型</p>
							<p className= "cas-text2">网站</p>
						</div>
					</div>
					<div className= "cas2">
						<img className= "cas-photo" src= "../res/pic/syjs3.jpg" />
						<div className= "cas-ptext">石油技术平台第二期</div>
						<img className= "finish" src= "../res/pic/accomplish.png" />
						<div className= "t-cas1">
							<p className= "cas-text1">金额</p>
							<p className= "cas-text2">￥5000</p>
						</div>
						<div className= "t-cas1">
							<p className= "cas-text1">周期</p>
							<p className= "cas-text2">7天</p>
						</div>
						<div className= "t-cas1">
							<p className= "cas-text1">类型</p>
							<p className= "cas-text2">网站</p>
						</div>
					</div>
					<div className= "cas2">
						<img className= "cas-photo" src= "../res/pic/syjs3.jpg" />
						<div className= "cas-ptext">石油技术平台第一期</div>
						<img className= "finish" src= "../res/pic/accomplish.png" />
						<div className= "t-cas1">
							<p className= "cas-text1">金额</p>
							<p className= "cas-text2">￥24500</p>
						</div>
						<div className= "t-cas1">
							<p className= "cas-text1">周期</p>
							<p className= "cas-text2">21天</p>
						</div>
						<div className= "t-cas1">
							<p className= "cas-text1">类型</p>
							<p className= "cas-text2">网站</p>
						</div>
					</div>
					<div className= "cas2">
						<img className= "cas-photo" src= "../res/pic/whdn.png" />
						<div className= "cas-ptext">文华包装-电脑版</div>
						<img className= "finish" src= "../res/pic/accomplish.png" />
						<div className= "t-cas1">
							<p className= "cas-text1">金额</p>
							<p className= "cas-text2">￥7500</p>
						</div>
						<div className= "t-cas1">
							<p className= "cas-text1">周期</p>
							<p className= "cas-text2">15天</p>
						</div>
						<div className= "t-cas1">
							<p className= "cas-text1">类型</p>
							<p className= "cas-text2">网站</p>
						</div>
					</div>
					<div className= "cas2">
						<img className= "cas-photo" src= "../res/pic/yjjc.png" />
						<div className= "cas-ptext">硬件检测一期</div>
						<img className= "finish" src= "../res/pic/accomplish.png" />
						<div className= "t-cas1">
							<p className= "cas-text1">金额</p>
							<p className= "cas-text2">￥5000</p>
						</div>
						<div className= "t-cas1">
							<p className= "cas-text1">周期</p>
							<p className= "cas-text2">7天</p>
						</div>
						<div className= "t-cas1">
							<p className= "cas-text1">类型</p>
							<p className= "cas-text2">网站</p>
						</div>
					</div>
					<div className= "cas2">
						<img className= "cas-photo" src= "../res/pic/jspx.jpg" />
						<div className= "cas-ptext">技术培训分享平台</div>
						<img className= "finish" src= "../res/pic/accomplish.png" />
						<div className= "t-cas1">
							<p className= "cas-text1">金额</p>
							<p className= "cas-text2">￥25500</p>
						</div>
						<div className= "t-cas1">
							<p className= "cas-text1">周期</p>
							<p className= "cas-text2">21天</p>
						</div>
						<div className= "t-cas1">
							<p className= "cas-text1">类型</p>
							<p className= "cas-text2">网站</p>
						</div>
					</div>
					<div className= "cas2">
						<img className= "cas-photo" src= "../res/pic/wlsj.jpg" />
						<div className= "cas-ptext">网络交友社交平台</div>
						<img className= "finish" src= "../res/pic/accomplish.png" />
						<div className= "t-cas1">
							<p className= "cas-text1">金额</p>
							<p className= "cas-text2">￥43000</p>
						</div>
						<div className= "t-cas1">
							<p className= "cas-text1">周期</p>
							<p className= "cas-text2">35天</p>
						</div>
						<div className= "t-cas1">
							<p className= "cas-text1">类型</p>
							<p className= "cas-text2">网站</p>
						</div>
					</div>
					<div className= "cas2">
						<img className= "cas-photo" src= "../res/pic/cgxc.jpg" />
						<div className= "cas-ptext">差旅行程管理app</div>
						<img className= "finish" src= "../res/pic/accomplish.png" />
						<div className= "t-cas1">
							<p className= "cas-text1">金额</p>
							<p className= "cas-text2">￥55000</p>
						</div>
						<div className= "t-cas1">
							<p className= "cas-text1">周期</p>
							<p className= "cas-text2">40天</p>
						</div>
						<div className= "t-cas1">
							<p className= "cas-text1">类型</p>
							<p className= "cas-text2">网站</p>
						</div>
					</div>
					<div className= "cas2">
						<img className= "cas-photo" src= "../res/pic/yj.jpg" />
						<div className= "cas-ptext">印记-旅行购</div>
						<img className= "finish" src= "../res/pic/accomplish.png" />
						<div className= "t-cas1">
							<p className= "cas-text1">金额</p>
							<p className= "cas-text2">￥25000</p>
						</div>
						<div className= "t-cas1">
							<p className= "cas-text1">周期</p>
							<p className= "cas-text2">42天</p>
						</div>
						<div className= "t-cas1">
							<p className= "cas-text1">类型</p>
							<p className= "cas-text2">网站</p>
						</div>
					</div>
					<div className= "cas2">
						<img className= "cas-photo" src= "../res/pic/whsj.png" />
						<div className= "cas-ptext">文华包装-手机版</div>
						<img className= "finish" src= "../res/pic/accomplish.png" />
						<div className= "t-cas1">
							<p className= "cas-text1">金额</p>
							<p className= "cas-text2">￥75000</p>
						</div>
						<div className= "t-cas1">
							<p className= "cas-text1">周期</p>
							<p className= "cas-text2">15天</p>
						</div>
						<div className= "t-cas1">
							<p className= "cas-text1">类型</p>
							<p className= "cas-text2">网站</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
})