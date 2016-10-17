import React from 'react'
import {locales} from '../settings'
import '../res/styles/yangshi.styl'
import './produ.styl'
module.exports = React.createClass({
	componentDidMount(){
    document.title = locales.zh_CN.product
  },
	render() {
		return(
			<div>
				<div className= "emty"></div>
				<div className= "prod">
					<div className= "prod1">
						<img className= "prod-photo" src= "../res/pic/product_1.jpg" />
						<div className= "prod-text">
							<div className= "prod2">JSX-China：</div>
							<p className= "prod3">提倡React ＋ REST API 的Web开发模式，社区将逐渐
							形成一套关于React开发的知识库，将覆盖快速入门、实战模式、实战进阶、延伸
							探讨和同学们在开发过程中所遭遇的形形色色疑难杂症的汇总及解决方案。 如果
							你是一枚新手，社区的知识库将助你一路乘风破浪。 如果你是一枚老鸟，快些儿
							加入到社区共建中来，大声说～你是怎么玩的。</p>
							<div className= "prod2">敬请期待：</div>
							<p className= "prod3">这将是一款别开生面的产品～简约，不简单；专注，不浮
							夸；随性，却用心；不俗，很好用！ Beta版内测中。。。。。。</p>
						</div>
					</div>
					<div className= "prod1">
						<img className= "prod-photo" src= "../res/pic/product_1.jpg" />
						<div className= "prod-text">
							<div className= "prod2">JSX-China：</div>
							<p className= "prod3">提倡React ＋ REST API 的Web开发模式，社区将逐渐
							形成一套关于React开发的知识库，将覆盖快速入门、实战模式、实战进阶、延伸
							探讨和同学们在开发过程中所遭遇的形形色色疑难杂症的汇总及解决方案。 如果
							你是一枚新手，社区的知识库将助你一路乘风破浪。 如果你是一枚老鸟，快些儿
							加入到社区共建中来，大声说～你是怎么玩的。</p>
							<div className= "prod2">敬请期待：</div>
							<p className= "prod3">这将是一款别开生面的产品～简约，不简单；专注，不浮
							夸；随性，却用心；不俗，很好用！ Beta版内测中。。。。。。</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
})