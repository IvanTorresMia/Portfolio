import React from "react";
import emailjs from "emailjs-com";
import EmailPng from '../../Contact-Folder/email.png';
import PhonePng from '../../Contact-Folder/phone.png';
import InstaPng from '../../Contact-Folder/instagram.jpg';
import FacebookPng from '../../Contact-Folder/facebook.jpg';
import LinkedinPng from '../../Contact-Folder/linkedIn.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1t3x7ee",
        "template_7jwfor6",
        e.target,
        "user_VfoIvnHsugNcuGtAOmHON"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
      <div className=" contact-wraper"> 
    <form className="container" onSubmit={sendEmail} data-aos="fade-up">
      <input type="hidden" name="contact_number" />
      <div>
        <h1 className="display-4 contact-title">Lets Connect!</h1>
        <div className="row">
          <div className="col">
            <img
              class="img-thumbnail m-2"
              src={EmailPng}
              alt="CV Icon"
            />
            <p className="lead">ivantorresmia27@gmail.com</p>
          </div>
          <div className="col">
            <img
              class="img-thumbnail m-2"
              src={PhonePng}
              alt="CV Icon"
            />
            <p className="lead">815-603-3297</p>
          </div>
        </div>
      </div>
      <div className="row form-group">
        <label for="exampleInputEmail1">Name</label>
        <input
          name="name"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="row form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          name="email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="row form-group">
        <label for="exampleFormControlTextarea1">Message</label>
        <textarea
          name="message"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" value="send" className="btn bg-light">
        Submit
      </button>
    </form>
    </div>
  );
}

export default ContactForm;