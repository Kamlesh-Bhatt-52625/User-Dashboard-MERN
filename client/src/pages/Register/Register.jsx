import React, { useEffect, useState } from "react";
import "./register.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [inputData, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: "",
  });

  // console.log(inputData);

  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  // status options
  const options = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];

  // setInput Value
  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  // Status set
  const setStatusValue = (e) => {
    setStatus(e.value);
  };

  // console.log(status, "hi I am status");

  // Profile set
  const setProfile = (e) => {
    setImage(e.target.files[0]);
  };

  // submit user Data
  const submitUserData = (e) => {
    e.preventDefault();

    const { fname, lname, email, mobile, gender, location } = inputData;
    if (fname === "") {
      toast.error("First name is required!");
    } else if (lname === "") toast.error("Last name is required!");
    else if (email === "") toast.error("Email is required!");
    else if (!email.includes("@")) toast.error("Enter a valid email address.");
    else if (!mobile) toast.error("Mobile is required");
    else if (mobile.length !== 10)
      toast.error("Enter a 10 digit Mobile number!");
    else if (gender === "") toast.error("Please select your gender.");
    else if (status === "") toast.error("Status is Required!");
    else if (image === "") toast.error("Profile Picture is Required!");
    else if (location === "") toast.error("Please enter your location.");
    else {
      toast.success("Registration Successfull!");
    }
  };

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    }
  }, [image]);

  return (
    <>
      <div className='container'>
        <h2 className='text-center mt-1'>Register your details</h2>
        <Card className='shadow mt-3 p-3'>
          <div className='profile_div text-center'>
            <img src={preview ? preview : "./man.png"} alt='img' />
          </div>

          <Form>
            <Row>
              <Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type='text'
                  name='fname'
                  placeholder='Enter First Name'
                  value={inputData.fname}
                  onChange={setInputValue}
                />
              </Form.Group>

              <Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type='text'
                  name='lname'
                  placeholder='Enter Last Name'
                  value={inputData.lname}
                  onChange={setInputValue}
                />
              </Form.Group>

              <Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  name='email'
                  placeholder='Enter Email'
                  value={inputData.email}
                  onChange={setInputValue}
                />
              </Form.Group>

              <Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
                <Form.Label>Enter Mobile</Form.Label>
                <Form.Control
                  type='number'
                  name='mobile'
                  placeholder='Enter Mobile'
                  value={inputData.mobile}
                  onChange={setInputValue}
                />
              </Form.Group>

              <Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
                <Form.Label>Select Your Gender</Form.Label>
                <Form.Check
                  type={"radio"}
                  label={"Male"}
                  name='gender'
                  value={"Male"}
                  onChange={setInputValue}
                />
                <Form.Check
                  type={"radio"}
                  label={"Female"}
                  name='gender'
                  value={"Female"}
                  onChange={setInputValue}
                />
                <Form.Check
                  type={"radio"}
                  label={"Others"}
                  name='gender'
                  value={"Others"}
                  onChange={setInputValue}
                />
              </Form.Group>

              <Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
                <Form.Label>Select Your Status</Form.Label>
                <Select
                  options={options}
                  value={status}
                  onChange={setStatusValue}
                />
              </Form.Group>

              <Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
                <Form.Label>Select Your Profile</Form.Label>
                <Form.Control
                  type='file'
                  name='user_profile'
                  placeholder='Set Profile Picture'
                  onChange={setProfile}
                />
              </Form.Group>

              <Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
                <Form.Label>Enter Your Location</Form.Label>
                <Form.Control
                  type='text'
                  name='location'
                  placeholder='Enter Your Location'
                  value={inputData.location}
                  onChange={setInputValue}
                />
              </Form.Group>
              <Button variant='primary' type='submit' onClick={submitUserData}>
                Submit
              </Button>
            </Row>
          </Form>
        </Card>
        <ToastContainer position='top-center' />
      </div>
    </>
  );
};

export default Register;
