import React, { useEffect, useState } from 'react'

import '../../App.css'
import { Badge, Drawer,  List, Space, Typography } from 'antd'
import{MailOutlined , BellFilled} from '@ant-design/icons'
import { getComments, getOrders } from '../../API'
import { auth } from '../../Authentication/Auth'
function AppHeader() {
  const [comments , setComments] = useState([])
  const [orders , setOrders] = useState([])
  const [commentsOpend , setcommentsOpend] = useState(false)
  const [notificationsOpend , setnotificationsOpend] = useState(false)
  useEffect(()=>{
    getComments().then(res=>{
      setComments(res.comments)
    });
    getOrders().then(res=>{
      setOrders(res.products)
    })
  },[])
  return (
    <div className='AppHeader '>
       
       <Typography.Title level={3} style={{color:' white'}}>React Js Project</Typography.Title>
       <Space>
        <Badge count = {comments.length} >
            <MailOutlined style={{fontSize:24}} onClick={()=>{
              setcommentsOpend(true);
            }}/>
        </Badge>
        <Badge count = {orders.length}>
            <BellFilled style={{fontSize:24}}  onClick={()=>{
              setnotificationsOpend(true);
            }}/>
        </Badge>
        <button onClick={()=>{auth.signOut()}}>SignOut</button>
       </Space>
       
       <Drawer title ="comments" open={commentsOpend} onClose={()=>{setcommentsOpend(false)}} maskClosable>
        <List dataSource={comments} renderItem={(items)=>{
          return <List.Item>{items.body}</List.Item>
        }}></List>
       </Drawer>
       <Drawer title ="Notifications" open={notificationsOpend} onClose={()=>{setnotificationsOpend(false)}} maskClosable>
       <List dataSource={orders} renderItem={(items)=>{
          return <List.Item><Typography.Text strong>{items.title}</Typography.Text>has been orderd!</List.Item>
        }}></List>
       </Drawer>
    </div>
  )
}

export default AppHeader
