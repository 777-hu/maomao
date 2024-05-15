// import { Component } from 'react'
// import { connect } from 'react-redux'



import './index.scss'


// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add () {
//     dispatch(add())
//   },
//   dec () {
//     dispatch(minus())
//   },
//   asyncAdd () {
//     dispatch(asyncAdd())
//   }
// }))
// class Index extends Component {
//   componentWillReceiveProps (nextProps) {
//     console.log(this.props, nextProps)
//   }

//   componentWillUnmount () { }

//   componentDidShow () { }

//   componentDidHide () { }

//   render () {
//     return (

//     )
//   }
// }

// export default Index

import React, { useEffect } from 'react'
import { View, Button, Text } from '@tarojs/components'
import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh
} from '@tarojs/taro'
import { add, minus, asyncAdd } from '../../actions/counter'
import { useDispatch, useSelector } from 'react-redux'

function Index () {
  const dispatch = useDispatch()
  const { counter } = useSelector(state => state)
  // 可以使用所有的 React Hooks
  console.log('counter', counter)
  useEffect(() => {})

  // 对应 onReady
  useReady(() => {})

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})

  // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
  // 详情可查阅：【Hooks】
  usePullDownRefresh(() => {})

  return (
      <View className='index'>
        <Button className='add_btn' onClick={() => dispatch(add())}>+</Button>
        <Button className='dec_btn' onClick={() => dispatch(minus())}>-</Button>
        <Button className='dec_btn' onClick={() => dispatch(asyncAdd())}>async</Button>
        <View><Text>{counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
  )
}

export default Index
