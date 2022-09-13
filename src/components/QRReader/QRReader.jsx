import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
export default class QRReader extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 10000,
      run: true
    }

    this.handleScan = this.handleScan.bind(this)
  }
  async handleScan(data){
        if(data && this.state.run){
            this.state = {run:false}
            await this.props.checkIn(data.text)
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
      <>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <h2> Ready For Scan </h2>
        <button onClick={() => this.props.setCurrentPage(1)}>Cancel</button>
      </>
    )
  }
}