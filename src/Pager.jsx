import React from 'react'
import './_Pager.scss'

export default class Pager extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			skipValue: ''
		}
		this.options = {
			'first': '首页',
			'prev': '上一页',
			'next': '下一页',
			'last': '尾页',
			'skip': '跳转'
		}
	}
	skip (page, totalPage) {
		if (typeof totalPage == 'number' && page >=1 && page <= totalPage) {
			this.props.updatePage(page)
		}
		if (typeof totalPage == 'object') this.props.updatePage(page)
	}
	change (pages, e) {
		let v = e.target.value
		// if (v >=1 && v <= pages) {
			this.setState({ skipValue: v })
		// }
	}
	renderBtn () {
		const { currentPage, total, pageSize } = this.props
		let pages = Math.ceil(total/pageSize)
		let numArr = this.computedArr(currentPage, pages)
		
		let prev = numArr[0]-1, next = numArr[numArr.length-1]+1
		
		return (
			<div className="con" style={{display: total == 0 ? 'none' : ''}}>
				{currentPage == 1 ? <span>{this.options.first}</span> : <a href="javascript:;" onClick={this.skip.bind(this, 1)}>{this.options.first}</a>}
				{currentPage-1 <= 0 ?
					<span>{this.options.prev}</span> :
					<a href="javascript:;" onClick={this.skip.bind(this, currentPage-1)}>{this.options.prev}</a>}
				
				{prev > 0 ? <span>...</span> : undefined}
				{
					numArr.map((item) => {
						return currentPage == item ?
							<span className="currPage" key={item}>{item}</span> :
							<a href="javascript:;" onClick={this.skip.bind(this, item)} key={item}>{item}</a>
					})
				}
				{next <= pages ? <span>...</span> : undefined}
				
				{currentPage+1 > pages ?
					<span>{this.options.next}</span> :
					<a href="javascript:;" onClick={this.skip.bind(this, currentPage+1)}>{this.options.next}</a>}
				{currentPage == pages ? <span>{this.options.last}</span> : <a href="javascript:;" onClick={this.skip.bind(this, pages)}>{this.options.last}</a>}
				<input type="number" value={this.state.skipValue} onChange={this.change.bind(this, pages)}/>
				<a href="javascript:;" onClick={this.skip.bind(this, this.state.skipValue, pages)}>{this.options.skip}</a>
			</div>
		)
	}
	// 根据 给定的值 计算前后 的2个值 返回数组
	computedArr (num, max) {
		var arr = [num-2, num-1, num, num+1, num+2]
		
		if (num-1 <= 0) {
			arr.splice(0, 2);
			if (num+3 <= max) arr = arr.concat([num+3])
			if (num+4 <= max) arr = arr.concat([num+4])
		} else if (num-2 <= 0) {
			arr.splice(0, 1);
			if (num+3 <= max) arr = arr.concat([num+3])
		}
		
		if (num+1 > max) {
			arr.pop()
			arr.pop()
		} else if (num + 2 > max) {
			arr.pop()
		}
		
		return arr;
	}
	render () {
		return (
			<div className="pager">
				{this.props.currentPage ? this.renderBtn() : '加载中'}
			</div>
		)
	}
}