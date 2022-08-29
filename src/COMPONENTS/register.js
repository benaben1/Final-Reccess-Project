import { useForm } from 'react-hook-form';
import React from 'react';
import './register.css';
import Fileuploader from './fileuploader';

function Registration(){

    const {register, handleSubmit, formState:{errors}, reset, trigger} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset()
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <h1 className='head-reg'>
                    REGISTRATION
                </h1>

                <div className='input-fields'>
                    <div className='form-group'>
                        <legend><strong>Full Name</strong></legend>
                        <div className="form-name">
                            <label className="name-tag">First Name</label>
                            <input type="text" className="input-n" placeholder='Enter First Name' 
                            {...register("fname", {required: 'first name is required' })}
                            onKeyUp={() => {trigger('fname')}}/>
                            {errors.fname && (<small className="text-danger">{errors.fname.message}</small>)}
                        </div>

                        <div className="form-name">
                            <label className="name-tag">Second Name</label>
                            <input type="text" className="input-n" placeholder='Enter Second Name' 
                            {...register("sname", {required: 'second name is required' })}
                            onKeyUp={() => {trigger('sname')}}/>
                            {errors.sname && (<small className="text-danger">{errors.sname.message}</small>)}
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="janet"><strong>Email</strong></label>
                        <input type="email" className="form-input" placeholder='@Email'
                        {...register("email", {required: 'email is required' })}
                        onKeyUp={() => {trigger('email')}}/>
                        {errors.email && (<small className="text-danger">{errors.email.message}</small>)}
                    </div>

                    <div className='form-group'>
                        <label className="janet"><strong>Birth Date</strong></label>
                        <input id="date" type="date" className="form-input"
                        {...register("date", {required: 'date is required' })}
                        onKeyUp={() => {trigger('date')}}/>
                        {errors.date && (<small className="text-danger">{errors.date.message}</small>)}
                    </div>

                    <div className='gender'>
                        <legend><strong>Gender</strong></legend>
                        <div className='gender-type'>
                            <input type="radio" value="MALE" name="gender" className='male' style={{width:10}}/> Male
                        </div>
                        <div className='gender-type'>
                            <input type="radio" value="FEMALE" name="gender" className='female' style={{width:10}}/> Female
                        </div>
                    </div>

                    <div className='form-group'>
                        <label className="janet"><strong>Address</strong></label>
                        <input type="text" className="form-input" placeholder='Home Address'
                        {...register("address", {required: 'Address is required'})}
                        onKeyUp={() => {trigger('address')}}/>
                        {errors.address && (<small className="text-danger">{errors.address.message}</small>)}
                    </div>

                
                    <div className="form-group">
                        <label className="janet"><strong>Contact No.</strong></label>
                        <input type="number" className="form-input" placeholder='add country code eg. 256'
                        {...register("contact", {required: 'contact is required', minLength:{value:12,
                        message:"minmum length is 12 digits"}})}
                        onKeyUp={() => {trigger('contact')}}/>
                        {errors.contact && (<small className="text-danger">{errors.contact.message}</small>)}
                    </div>

                    <div className="form-group">
                        <label className="janet"><strong>Parents/Gudian Full Name</strong></label>
                        <input type="text" className="form-input" placeholder='Parents/Gudian Full Name' 
                        {...register("pname", {required: 'Parents/Gudian Full Name is required' })}
                        onKeyUp={() => {trigger('pname')}}/>
                        {errors.pname && (<small className="text-danger">{errors.pname.message}</small>)}
                    </div>

                    <div className="form-group">
                        <label className="janet"><strong>Parents/Gudian Contact</strong></label>
                        <input type="number" className="form-input" placeholder='add country code eg. 256'
                        {...register("contact", {required: 'Parents/Gudian Contact is required', minLength:{value:12,
                        message:"minmum length is 12 digits"}})}
                        onKeyUp={() => {trigger('contact')}}/>
                        {errors.contact && (<small className="text-danger">{errors.contact.message}</small>)}
                    </div>

                    <div className="form-group">
                        <label className="janet"><strong>National ID NIN</strong></label>
                        <input type="number" className="form-input" placeholder='ID number'
                        {...register("number", {required: 'National ID NIN is required', minLength:{value:12,
                            message:"minmum length is 12 digits"}})}
                            onKeyUp={() => {trigger('number')}}/>
                        {errors.number && (<small className="text-danger">{errors.number.message}</small>)}
                    </div>

                    <div className='form-group'>
                        <label><strong>select a program</strong></label>
                        <select>
                            <option value="BBA">AAB</option>
                            <option value="BBA">BAA</option>
                            <option value="BBA">BBA</option>
                            <option value="BBA">BBB</option>
                            <option value="BBA">AAA</option>
                        </select>
                    </div>

                </div>

                <div className='upload'>
                    <div className='text-upload'>
                        <h3>Upload The Following Documents</h3>
                    </div>
                    <div className='uploadedfiles'>
                        <div className='file-upload'>
                            <Fileuploader handleFile="Current Photo"/>
                        </div>
                        <div  className='file-upload'>
                            <Fileuploader handleFile="UCE"/>
                        </div>
                        <div className='file-upload'>
                            <Fileuploader handleFile="UACE"/>
                        </div>
                    </div>
                </div>
                


                <div className="sub_btn">
                    <button type="submit" className="btn">SUBMIT</button>
                </div>
                <div>
                    <p className='acc-log'>Already have an Account?<strong>LOGIN</strong></p>
                </div>
            </form>
        </div>
    );
    
}

export default Registration;