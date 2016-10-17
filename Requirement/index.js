import React from 'react'
import {locales} from '../settings'
import '../res/styles/yangshi.styl'
import './requir.styl'
module.exports = React.createClass({
	componentDidMount(){
    document.title = locales.zh_CN.requirement
  },
	render() {
		return(
			<div>
				<div className= "emty"></div>
				<form className= "requir">
					<div className= "req-1">
						<div className= "req-2">
							<div className= "field1">
								<fieldset className= "field2">
									<lebal className= "field3">项目类型</lebal>
									<select className= "field4">
										<option>请选择</option>
										<option>Web网站</option>
										<option>移动应用APP</option>
										<option>微信开发</option>
									</select>
								</fieldset>
							</div>
							<div className= "field1">
								<fieldset className= "field2">
									<lebal className= "field3">项目预算</lebal>
									<select className= "field4">
										<option>请选择</option>
										<option>20K以下</option>
										<option>20~50K</option>
										<option>50K以上</option>
									</select>
								</fieldset>
							</div>
							<div className= "field1">
								<fieldset className= "field2">
									<lebal className= "field3">项目周期</lebal>
									<select className= "field4">
										<option>请选择</option>
										<option>1周</option>
										<option>2周</option>
										<option>3周</option>
										<option>4周</option>
										<option>5周</option>
										<option>6周</option>
										<option>7周</option>
										<option>8周</option>
									</select>
								</fieldset>
							</div>
						</div>
						<div className= "req-3">
							<fieldset className= "field2">
								<lebal className= "field3">项目名</lebal>
								<input type= "text" className= "text-req" placeholder="2-10字符" />
							</fieldset>
						</div>
						<div className= "req-3">
							<fieldset className= "field2">
								<lebal className= "field3">你的大名</lebal>
								<input type= "text" className= "text-req" placeholder="2-10字符"/>
							</fieldset>
						</div>
						<div className= "req-3">
							<fieldset className= "field2">
								<lebal className= "field3">手机号码</lebal>
								<input type= "text" className= "text-req"/>
							</fieldset>
						</div>
						<div className= "req-4">
							<fieldset className= "field2">
								<lebal className= "field3">项目描述</lebal>
								<textarea className= "text-reqb" placeholder="大于10 小于5000个字符"></textarea>
							</fieldset>
						</div>
						<button type= "button" className= "butn butn-t req-5">提交需求</button>
					</div>
				</form>
			</div>
		)
	}
})