import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import sendRequest from '../../utilities/send-request'
import { useNavigate } from 'react-router-dom'

export default class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 9000,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  async handleScan(data){
        // await sendRequest(`${data.text}`, 'GET') 
        if(data){
            this.props.test(data.text)
        }
        
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }
    return(
        <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <p>{this.state.result}</p>
        </div>
    )
  }
}