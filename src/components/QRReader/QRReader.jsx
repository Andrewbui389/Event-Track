import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
export default class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 10000,
    }

    this.handleScan = this.handleScan.bind(this)
  }
  async handleScan(data){
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
        <button onClick={() => this.props.handleqr(false)}>Cancel</button>
        </div>
    )
  }
}