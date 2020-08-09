import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

  state = {
    keyWord:'' // 输入的关键字
  }

  // 向state中保存用户输入的关键字
  saveKeyWord = (event) => {
    // 获取用户的输入
    const {target:{value:keyWord}} = event
    // 把输入的数据放到状态对象中
    this.setState({keyWord})
  }

  // 点击搜索的界面
  handleSearch = ()=>{
		//1.获取用户输入
		const {keyWord} = this.state
		const {updateAppState} = this.props
		//2.请求之前展示loading界面
		updateAppState({isLoading:true,isFirst:false})
		//3.发起请求
		axios.get(`/api/search/users?q=${keyWord}`).then(
			response => {
				//请求成功后，存储用户列表，不展示loading
				updateAppState({users:response.data.items,isLoading:false})
			},
			err => {
				//请求失败后，存储用错误信息，不展示loading
				updateAppState({error:err.message,isLoading:false})
			}
		)
	}
  
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input onChange={this.saveKeyWord}  type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.handleSearch} >Search</button>
        </div>
      </section>
    )
  }
}
