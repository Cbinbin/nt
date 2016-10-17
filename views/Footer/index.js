import React from 'react'
import {locales} from '../../settings'
import '../../res/styles/yangshi.styl'
import './seven.styl'

module.exports = React.createClass ({

	render() {
		return(
			<div className= "footer">
				<div className= "sev1">
					<div className= "contact-box">
						<icon />
						<div>
							<p className= "con-text">{locales.zh_CN.address}</p>
						</div>
					</div>
					
					<div className= "contact-box">
						<icon />
						<div>
							<p className= "con-text">{locales.zh_CN.email}</p>
						</div>
					</div>
						
					<div className= "contact-box">
						<icon />
						<div>						
							<p className= "con-text">{locales.zh_CN.phone_number}</p>
						</div>
					</div>

				</div>
				<div className= "sev3">
					<img className= "sev4" src= "../../res/pic/wechat-code.jpg" />
					<p className= "sev5">公众号</p>
				</div>
			</div>
		)
	}
})