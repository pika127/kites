import { Component } from "react";
import "./Destination.css";
import DesImage from '../assets/des.jpg';
import DesImage2 from '../assets/des2.jpg';

class DestinaionData extends Component{
  render(){
    return(
      <div className='{this.props.className}'>
      <div className='des-text'>
        <h2>{this.props.heading}</h2>
        <p>{this.props.text}</p>
      </div>
      <div className='des-image'>
        <img src={this.props.img1} alt="img" />
        <img src={this.props.img2} alt="img" />
      </div>
    </div>
    )
  }
}
export default DestinaionData;