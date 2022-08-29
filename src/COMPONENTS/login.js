import React from "react";
import { Row, Col } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import './login.css';
import { BsFillTelephoneFill} from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";


function Login() {

  const {register, handleSubmit, formState:{errors}, reset, trigger} = useForm();
  const onSubmit = (data) => {
        console.log(data);
        reset()}


  return(

    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row className="log-upper">
          <Col md="6"><h1 className="log-head">REGISTERED STUDENTS</h1></Col>
          <Col md="3">
          <img className='witi-logo w-150' src={require('../COMPONENTS/images/img-6.png')} 
          alt='witi logo'/>
          </Col>
        </Row>


        <Row className="p-3">
          <Col>
          <div>
            <label className="janet"><strong>Email</strong></label>
            <input type="email" className="form-input" placeholder='@Email'
            {...register("email", {required: 'email is required' })}
            onKeyUp={() => {trigger('email')}}/>
            {errors.email && (<small className="text-danger">{errors.email.message}</small>)}
          </div>
          </Col>
        </Row>


        <Row className="p-3">
          <Col>
          <div>
            <label className="janet"><strong>Password</strong></label>
            <input type="password" className="form-input" placeholder='Password'
            {...register("password", {required: 'password is required' })}
            onKeyUp={() => {trigger('password')}}/>
            {errors.password && (<small className="text-danger">{errors.password.message}</small>)}
            <p className="p-f">Forgot Password?</p>
          </div>
          </Col>
        </Row>


        <Row className="p-2">
          <Col>
          <div className="sub_btn">
            <button type="submit" className="btn">LOGIN</button>
          </div>
          </Col>
        </Row>


        <Row className="p-2">
          <div>
            <p className='acc-log'>Don't have an Account?<strong className="contct">CONTACT US<details><p style={{fontSize:23}}><FaEnvelope style={{width:25}}/> admin@witi.ac.ug</p><p style={{fontSize:23}}><BsFillTelephoneFill style={{width:25}}/>+ (256) 392177980</p></details></strong></p>
          </div>
        </Row>
      </form>
    </div>

  )
}

export default Login;
 