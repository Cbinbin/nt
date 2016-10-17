import React from 'react'
import {
  Route,
  Router,
  IndexRoute,
  browserHistory
} from 'react-router'
import All from '../views/All'
import Conter from '../Conter'
import Evaluation from '../Evaluation'
import Web from '../Evaluation/Web'
import Ios from '../Evaluation/Ios'
import Android from '../Evaluation/Android'
import Wechat from '../Evaluation/Wechat'
import Result from '../Evaluation/Result'
import Requirement from '../Requirement'
import Cases from '../Cases'
import Product from '../Product'
import Contact from '../Contact'

module.exports = ()=>{
	return <Router history={browserHistory}>
		
			
			<Route path='/' component={All}>
				<IndexRoute component={Conter} />
				<Route path='/evaluation' component={Evaluation} />
				<Route path='/evaluation/web' component={Web} />
				<Route path='/evaluation/web/result' component={Result}/>
				<Route path='/evaluation/ios' component={Ios}/>
				<Route path='/evaluation/ios/result' component={Result}/>
				<Route path='/evaluation/android' component={Android}/>
				<Route path='/evaluation/android/result' component={Result}/>
				<Route path='/evaluation/wechat' component={Wechat}/>
				<Route path='/evaluation/wechat/result' component={Result}/>
				<Route path='/requirement' component={Requirement} />
				<Route path='/cases' component={Cases} />
				<Route path='/product' component={Product} />
				<Route path='/contact' component={Contact} />
			</Route>

			
	</Router>
}