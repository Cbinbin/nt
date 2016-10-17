import React from 'react'
import ReactDOM from 'react-dom'
import {locales} from '../settings'

import Htwo from './Htwo/htwo.js'
import Hthr from './Hthr/hthr.js'
import Hfou from './Hfou/hfou.js'
import Hfiv from './Hfiv/hfiv.js'
import Hsix from './Hsix/hsix.js'
import '../res/styles/yangshi.styl'

module.exports = React.createClass ({
	componentDidMount() {
		document.title = locales.zh_CN.home
	},
	render() {
		return(
		<div>				
			<Htwo />
				
			<Hthr />
			
			<Hfou />
			
			<Hfiv />
			
			<Hsix />
			

		</div> 
		)
	}
})
