import React from 'react'
import '../evalua.styl'
import './web.styl'
import {Link} from 'react-router'
import Checkbox from '../checkbox'
const webOptions = require('json!../data').webOptions
module.exports = React.createClass({
	getInitialState(){
		return{
			checkboxCount: 0,
			evaluationArray: []
		}
	},
	componentDidMount(){
    window.scroll(null,0)
	},
	addEvaluation(result) {
		this.setState({
			evaluationArray: this.state.evaluationArray.concat([result])
		})
	},
	removeEvaluation(result) {
		const evaluationArray = this.state.evaluationArray.filter((item) =>{return item.id != result.id})
		this.setState({
			evaluationArray: evaluationArray
		})
	},
	updateCount(num=0) {
		this.setState({
			checkboxCount: this.state.checkboxCount + num
		})
	},
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
							<img className= "step-eval" src= "../../res/pic/second-step.png" />
						</div>
						<div className="eval-icon">
							<img className= "step-eval third-step" src= "../../res/pic/third-step.png" />
						</div>
					</div>
				</div>
				<div className= "forms">
					<div className= "table-borders">
						<table>
							<thead>
								<tr className= "head-tab">
									<th className= "head-title">分类</th>
									<th className= "head-title">模块</th>
									<th className= "head-title">功能点</th>
								</tr>
							</thead>
							<tbody>
							{	webOptions.children.map((item,index) => {
								return  <tr key={index} className={item.children.length==0? 'hidden-xl-down':'ha'}>
										{item.name ? <th scope= "row" rowSpan={item.count}>{item.name}</th> : null}
										<td className= "module-text">{item.title}</td>
										<td className= "funtion-text">
										{
											item.children.map((item2,index2) => {
												return (
													<Checkbox key={index2} lebal={item2.title} updateCount= {this.updateCount} 
													description= {item2.description} addEvaluation={this.addEvaluation} item={item2} 
													removeEvaluation= {this.removeEvaluation} />
												)
											})
										}
										</td>
										</tr>
							})
						}
							<tr>
				            <td colSpan='3' scope="row" className='check-result'>已选<span className='check-count'> {this.state.checkboxCount} </span>项网页评估
				            </td>
				        	</tr>
							</tbody>
						</table>
					</div>
				
					<div className= "web-b">
						<button type= "button" className= "web-butn1"
						 onClick= {()=>{window.location.reload()}}>清除选项</button>
					</div>
					<div className= "web-b">
						<Link to= "/evaluation/web/result">
						<button type= "button" className= "web-butn2">计算结果</button>
						</Link>
					</div>
				</div>
			</div>
		)
	}
})