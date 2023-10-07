/* eslint-disable no-useless-escape */
import React, { useState } from 'react';

function PersonalInfo({ userData, setUserData, nextPage, activePage}) {
    const { name, email, phone } = userData;
    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [phoneError, setPhoneError] = useState(null);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        
    
        if (name === 'name'){
            setNameError(null);
        }
        else if (name === 'email'){
            setEmailError(null);
        }
        else if (name === 'phone'){
            setPhoneError(null);
        }
        setUserData({ ...userData, [name]: value });
    };


    const areFieldsFilled = () => {
        const regexPattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return name.trim() !== '' && email.trim() !== '' && phone.trim() !== '' && regexPattern.test(email);
    };


    



    const handleNextClick = () => {
        const regexPattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (name.trim() === '')
        {
            setNameError('Name is required!');
        }
        if (!regexPattern.test(email)){
            setEmailError('Email is invalid!')
        }
        if (email.trim() === '')
        {
            setEmailError('Email is required!');    
        }
        if (phone.trim() === '')
        {
            setPhoneError('Phone is required!');
        }
      
        if (areFieldsFilled()){
            setUserData({ name, email, phone });
            nextPage();
        }
    };

    return (
        <div className="container">
        <div className="sidebar">
            <div className="step1">
                <div className={`circle ${activePage === 1 ? 'active' : ''}`}>
                    1
                </div>
                <div className="step1Info">
                    <p>STEP 1</p>
                    <h1>YOUR INFO</h1>
                </div>
            </div>
            <div className="step2">
                <div className={`circle ${activePage === 2 ? 'active' : ''}`}> 
                    2
                </div>
                <div className="step2Info">
                    <p>STEP 2</p>
                    <h1>SELECT PLAN</h1>
                </div>
            </div>
            <div className="step3">
                <div className={`circle ${activePage === 3 ? 'active' : ''}`}>     
                    3
                </div>
                <div className="step3Info">
                    <p>STEP 3</p>
                    <h1>ADD-ONS</h1>
                </div>
            </div>
            <div className="step4">
                <div className={`circle ${activePage === 4 ? 'active' : ''}`}>
                    4
                </div>
                <div className="step4Info">
                    <p>STEP 4</p>
                    <h1>SUMMARY</h1>
                </div>
            </div>
        </div>
        <div className="personalInfoContainer">
            <div className="personalInfo">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>
            </div>
            <div className="nameEmailPhoneNumber">
                <div className="name infoContainer">
                    <div className={`inputContainer ${nameError ? 'error' : ''}`}>
                        <label htmlFor="name" className="nameText personalInfoText">Name</label>
                        {nameError && <span className="errorMessage">{nameError}</span>}
                    </div>
                    <form action="" className="nameInputForm personalInfoForm">
                        <input  className={`nameInput ${nameError ? 'error' : ''}`} id="personalInfoInput" type="text" name="name" value={name} onChange={handleInputChange} placeholder="e.g. Stephen King" required />
                    </form>
    
                
                </div>  
                <div className="email infoContainer">
                    <div className={`inputContainer ${emailError ? 'error' : ''}`}>
                        <label htmlFor="email" className="emailText personalInfoText">Email Address</label>
                        {emailError && <span className="errorMessage">{emailError}</span>}
                    </div>            
                    <form action="" className="emailInputForm personalInfoForm">
                        <input id="personalInfoInput" type="email" className={`emailInput ${emailError ? 'error' : ''}`} name="email" value={email} onChange={handleInputChange} placeholder="e.g. stephenking@lorem.com" required />
                    </form>
                    
            
                </div>
                <div className="phoneNumber infoContainer">
                    <div  className={`inputContainer ${phoneError ? 'error' : ''}`}>
                        <label htmlFor="phone" className="phoneNumberText personalInfoText">Phone Number</label>
                        {phoneError && <span className="errorMessage">{phoneError}</span>}
                    </div>
                    <form action="" className="phoneNumberInputForm personalInfoForm">
                        <input id="personalInfoInput" type="tel" className={`phoneInput ${phoneError ? 'error' : ''}`} name="phone" value={phone} onChange={handleInputChange} placeholder="e.g. +1 234 567 890" required />
                    </form> 
                </div>
            </div>
            <div id="buttonAnimation">
                <div className="button" onClick={handleNextClick}>
                    <p className="btnText">READY?</p>
                    <div className="btnTwo" onClick={handleNextClick}>
                      <p className="btnText2">GO!</p>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    );
}

export default PersonalInfo;