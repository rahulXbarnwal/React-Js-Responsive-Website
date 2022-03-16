import React, { useState } from "react";

const Contact = () => {
  
  const [data, setData] = useState({
    fullName : "",
    phone : "",
    email : "",
    msg : "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setData((oldVal)=>{
      return {
        ...oldVal,
        [name] : value,
      }
    });
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullName}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say : ${data.msg}`
    )
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="form-group mb-4">
                <label htmlFor="exampleFormControlInput1">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name = "fullName"
                  value = {data.fullName}
                  onChange={inputEvent}
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="exampleFormControlInput1">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  name = "phone"
                  value = {data.phone}
                  onChange={inputEvent}
                  id="exampleFormControlInput1"
                  placeholder="Mobile number"
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name = "email"
                  value = {data.email}
                  onChange={inputEvent}
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="exampleFormControlTextarea1">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name = "msg"
                  value = {data.msg}
                  onChange={inputEvent}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type = 'submit'>
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
