import React,{ Component} from 'react';
import './../../index.css'



class Contact extends Component {

    render()
    {

        return(

            <div>
                <div className="contactUs bgColor1" >
                    <div className="container">
                        <div className="contactDesc" >
                            <h1>Contact Us</h1>
                            
                            <div className="myLine" >

                            </div>
                        </div>
                        <div className="contactInputs" >
                            <input className="contactInput"  type="text"  name="nameFamily" placeholder="Name And Family"/>
                            <input className="contactInput"  type="text" name="number" placeholder="Tell Number"/>
                            <input className="contactInput"  type="email" name="email" placeholder="E-mail"/>

                            <textarea className="textArea" placeholder="Message" ></textarea>
                            <div className="checkBoxSend" >


                                    <label className="myCheck" >Please Allow this item for send message.
                                        <input type="checkbox"  />
                                        <span className="checkmark"></span>
                                    </label>

                                <button type="submit" className="sendMessage" >Send Message </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Contact;