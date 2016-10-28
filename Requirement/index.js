import React from 'react'
import {locales} from '../settings'
import {browserHistory} from 'react-router'
import '../res/styles/yangshi.styl'
import './requir.styl'
module.exports = React.createClass({

	getInitialState() {
		return{
			order:{
				"projectTypes": "",
				"projectBudget": "",
				"projectCycles": "",
				"project": "",
				"names": "",
				"cellphoneNumber": "",
				"describe": ""				
			}
		}
	},
	componentDidMount() {
    	document.title = locales.zh_CN.requirement
	},
	handleChange(event) {
		event.preventDefault()
		var ordertype = this.state.order 
		ordertype[event.target.name] = event.target.value

		this.setState({order: ordertype})
		console.log(JSON.stringify(this.state.order))
	},
	// handleBlurT(event) {
	// 	var re = /[^\w\u4e00-\u9fa5]/g
	// 	var value_length = 0
	// 	function getLength(str) {
	// 		return str.replace(/[^\x00-xff]/g, "x").length
	// 	}
	// 	value_length = getLength(event.target.value)
	// 	if(event.target.value == "") {
	// 		alert('不能为空')
	// 		return
	// 	}
	// 	else if(re.test(event.target.value)) {
	// 		alert('含有非法字符')
	// 	}
	// 	else if(value_length<2) {
	// 		alert('字符个数过少')
	// 	}
	// 	else if(value_length>10) {
	// 		alert('字符个数过多')
	// 	}
	// },
	// handleBlurN(event) {
	// 	event.preventDefault()
	// 	if(event.target.value == "") {
	// 		alert('不能为空')
	// 	}
	// },
	submitHandle(event) {
		event.preventDefault()
		var re = /[^\w\u4e00-\u9fa5]/g
		var num = /[^0-9]/g
		var proj_length = 0
		var name_length = 0
		var descr_length = 0
		function getLength(str) {
			return str.replace(/[^\x00-xff]/g, "x").length
		}
		proj_length = getLength(this.state.order.project)
		name_length = getLength(this.state.order.names)
		descr_length = getLength(this.state.order.describe)
		//
		if(this.state.order.projectTypes == "请选择") {alert('请选择项目类型')
			return false}
		else if(this.state.order.projectTypes == "") {alert('请选择项目类型')
			return false}
		//
		if(this.state.order.projectBudget == "请选择") {alert('请选择项目预算')
			return false}
		else if(this.state.order.projectBudget == "") {alert('请选择项目预算')
			return false}
		//
		if(this.state.order.projectCycles == "请选择") {alert('请选择项目周期')
			return false}
		else if(this.state.order.projectCycles == "") {alert('请选择项目周期')
			return false}
		//
		if(this.state.order.project == "") {alert('项目名不能为空')
			return false}
		else if(re.test(this.state.order.project)) {alert('项目名含非法字符')
			return false}
		else if(proj_length<2) {alert('项目名个数不足')
			return false}
		else if(proj_length>10) {alert('项目名个数过多')
			return false}
		//
		if(this.state.order.names == "") {alert('你的大名不能为空')
			return false}
		else if(re.test(this.state.order.names)) {alert('你的大名含非法字符')
			return false}
		else if(name_length<2) {alert('大名个数不足')
			return false}
		else if(name_length>10) {alert('大名个数过多')
			return false}
		//
		if(this.state.order.cellphoneNumber == "") {alert('手机号码不能为空')
			return false}
		else if(num.test(this.state.order.cellphoneNumber)) {alert('手机号码只能为数字')
			return false}
		//
		if(this.state.order.describe == "") {alert('项目描述不能为空')
			return false}
		else if(descr_length<10) {alert('项目描述字数不足')
			return false}
		else if(descr_length>5000) {alert('项目描述字数过多')
			return false}

		else fetch("http://localhost:2000/api/requirements",
			{method: 'POST', 
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.state.order)})
		.then((response) => response.json())
		.then((responseJSON) => {
			console.log(responseJSON)
			alert('已提交')
			this.props.router.replace('/')
		})
		.catch((err) => {
			console.log(err)
		})
	},
	render() {
		return(
			<div>
				<div className= "emty"></div>
				<form className= "requir"  onSubmit= {this.submitHandle}>
					<div className= "req-1">
						<div className= "req-2">
							<div className= "field1">
								<fieldset className= "field2">
									<lebal className= "field3">项目类型</lebal>
									<select name= "projectTypes" className= "field4" 
									onChange= {this.handleChange} 
									value= {this.state.order.projectTypes} >
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
									<select name= "projectBudget" className= "field4" 
									onChange= {this.handleChange} 
									value= {this.state.order.projectBudget} >
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
									<select name= "projectCycles" className= "field4" 
									onChange= {this.handleChange} 
									value= {this.state.order.projectCycles} >
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
								<input type= "text" name= "project" className= "text-req" 
								onChange= {this.handleChange} /*onBlur= {this.handleBlurT}*/ value= {this.state.order.project} 
								placeholder="2-10字符(包含中文、字母、数字和下划线)" />
							</fieldset>
						</div>
						<div className= "req-3">
							<fieldset className= "field2">
								<lebal className= "field3">你的大名</lebal>
								<input type= "text" name= "names" className= "text-req" 
								onChange= {this.handleChange} /*onBlur= {this.handleBlurT}*/ value= {this.state.order.names} 
								placeholder="2-10字符(包含中文、字母、数字和下划线)"/>
							</fieldset>
						</div>
						<div className= "req-3">
							<fieldset className= "field2">
								<lebal className= "field3">手机号码</lebal>
								<input type= "text" name= "cellphoneNumber" className= "text-req" 
								onChange= {this.handleChange} value= {this.state.order.cellphoneNumber} />
							</fieldset>
						</div>
						<div className= "req-4">
							<fieldset className= "field2">
								<lebal className= "field3">项目描述</lebal>
								<textarea name= "describe" className= "text-reqb" 
								onChange= {this.handleChange} value= {this.state.order.describe}  
								placeholder="大于10 小于5000个字符"></textarea>
							</fieldset>
						</div>
						<button type= "submit" className= "butn butn-t req-5">提交需求</button>
					</div>
				</form>
			</div>
		)
	}
})