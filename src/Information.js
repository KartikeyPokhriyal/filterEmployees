

import React, {Component} from 'react';
import './Information.css';

class Information extends Component {
constructor(props) {
  super(props);
  this.state = {
      location: <section>
          Address Line 1<input className="line1"/>
          <br/>
          Address Line 2<input className="line2"/>
      </section>, color: "red", name: null,error:null
  };
  this.contactChange = this.contactChange.bind(this);
  this.setColor = this.setColor.bind(this);
  this.validate = this.validate.bind(this)
}

render() {
  return (
      <section id="userInput">
          <input id="name" onChange={this.validate} />
          <label className="error">{this.state.error}</label>
          <section className="colorButton">
              <button value="red" onClick={this.setColor} className="redButton"><span
                  className="hoverText">Red</span></button>
              <button value="blue" onClick={this.setColor} className="blueButton"><span
                  className="hoverText">Blue</span></button>
              <button value="green" onClick={this.setColor} className="greenButton"><span
                  className="hoverText">Green</span></button>
              <button value="black" onClick={this.setColor} className="blackButton"><span
                  className="hoverText">Black</span></button>
          </section>
          <section className="contactDetail">
              <input type="radio" name="contact" value="Physical" defaultChecked={<section>
                  Address Line 1<input className="line1"/>
                  <br/>
                  Address Line 1<input className="line2"/>
              </section>} onChange={this.contactChange}/> Physical
              <input type="radio" name="contact" value="Digital" onChange={this.contactChange}/> Digital

              <br/>
              <section className="userInfo">
              <label className={this.state.color}>{this.state.name}</label>
              {this.state.location}
              </section>
          </section>
      </section>

  )
}

setColor(button) {
  this.setState(
      {
          color: button.currentTarget.value
      }
  )

}

contactChange(radio) {
  this.setState({
          location: <AddressSelector value={radio.currentTarget.value}/>
      }
  )
}

validate() {
  const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  if (!format.test(document.getElementById("name").value)) {
      this.setName();
      this.setState(
          {
              error:null
          }
      )
  }
  else {
      this.setState(
          {
              name: null,
              error:"Please enter a valid name"
          }
      )
  }

}

setName(){
  this.setState(
      {
          name: document.getElementById("name").value,
      })
}

}

function AddressSelector(props) {
if (props.value === "Physical") {
  return (
      <section id="physical">
          Address Line 1<input id="address1" className="line1"/>
          <br/>
          Address Line 2<input id="address2" className="line2"/>
      </section>

  )
}
else {
  return (
      <section id="digital">
          E-mail<input id="email" className="email" />
          <br/>
          Phone Number<input id="phone" className="phone"/>
      </section>

  )
}
}

export default Information
