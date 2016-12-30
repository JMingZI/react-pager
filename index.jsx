import React from 'react'
import Pager from './src/Pager.jsx'

export default class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			total: 0,
			currentPage: 1,
		}
		this.pageSize = 10;
	}
	updatePage (page) {
		// 接收返回的页数
		this.getList(page)
	}
	getList (page) {
		ajax({
			url: '',
			data: {
				pageSize: this.pageSize,
				currentPage: page||this.state.currentPage
			}
		})
	}
	render () {
		return (
			<div>
				<Pager total={this.state.total}
					   pageSize={this.pageSize}
					   currentPage={this.state.currentPage}
					   updatePage={this.updatePage.bind(this)}/>
			</div>
		)
	}
}