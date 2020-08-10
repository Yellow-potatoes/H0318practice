import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from '../Detail'
// import Deatil from '../Detail'

export default class Message extends Component {

  state = {
    messageArr: [
      { id: '001', title: '消息1' },
      { id: '002', title: '消息2' },
      { id: '003', title: '消息3' },
    ]
  }

  // push查看消息
  pushShow = (id,title) => {
    return ()=> {
      // 编程式push导航+传递params参数
      this.props.history.push(`/home/message/detail/${id}/${title}`)

      // 编程式push导航+search参数
      // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

      // 编程式puh导航+传递location.state参数
      // this.props.history.push(`/home/message/detail`,{id,title})
    }
  }

  // replace查看消息
  replaceShow = (id,title) => {
    return ()=>{
      // 编程式replace导航+传递params参数
      this.props.history.replace(`/home/message/detail/${id}/${title}`)

      // 编程式replace导航+传递search参数
      // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

      // 编程式replace导航+传递location.state参数
      // this.props.history.replace(`/home/message/detail`,{id,title})
    }
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.messageArr.map(msg => {
              return (
                <li key={msg.id}>
                  {/* 用Link标签传params参数 */}
        
                  <Link to={`/home/message/detail/${msg.id}/${msg.title}`} >{msg.title}</Link>

                  {/* 用Link标签传search参数 */}
                  {/* <Link to={`/home/message/detail?id=${msg.id}&title=${msg.title}`} >{msg.title}</Link> */}

                  {/* 编程式路由跳转 */}
                  &nbsp;&nbsp;
                  <button onClick={this.pushShow(msg.id,msg.title)} >push查看</button>&nbsp;
                  <button onClick={this.replaceShow(msg.id,msg.title)} >replace查看</button>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 若传的是params参数，路由要这样注册 */}
        <Route path="/home/message/detail/:id/:title" component={Detail} />

        {/* 若传的是search参数、参数   &&  location参数 */}
        {/* <Route path="/home/message/detail" component={Detail}/>  */}
      </div>
    )
  }
}
