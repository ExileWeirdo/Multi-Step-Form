import React, {useState} from 'react';

function AddOns({ activePage, nextPage, prevPage, addonsData, setAddonsData, subscriptionData}){

    const [selectedAddons, setSelectedAddons] = useState([]);
    const { paymentFrequency } = subscriptionData;


    const handleNextClick = () => {
        nextPage();
    };

    const handleBackClick = () => {
        prevPage();
    };

    // function to toggle selected add-ons
    const toggleAddon = (addon) => {
        // creating a copy of addonsdata to modify
        const updatedAddonsData = { ...addonsData };

        // toggle the selected state of the addon
        updatedAddonsData[addon] = !updatedAddonsData[addon];
       
        // update the state with the modified addonsData
        setAddonsData(updatedAddonsData);
    };

    
    return(
        <div className="containerAddons">
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
            <div className='addOnsContainer'>
                <div className='text'>
                    <h1>Pick add-ons</h1>
                    <p>Add-ons help enhance your gaming experience.</p>
                </div>
                <div className='addOns'>
                    <div className={`addon ${addonsData.onlineServices ? 'selected' : ''}`}>
                        <div className='addonInfo'>
                            <input className='blueInput' type='checkbox' name='onlineServices' checked={addonsData.onlineServices} onChange={() => toggleAddon('onlineServices')} />
                            <div className='onlineServiceText'>
                                <h3>Online Service</h3>
                                <p>Access to multiplayer games</p>
                            </div>
                        </div>
                        <div className='price'>
                            {paymentFrequency === 'monthly' ? '+$1/mo' : '+$10/yr'}
                        </div>  
                    </div>
                    <div className={`addon ${addonsData.largerStorage ? 'selected' : ''}`}>
                        <div className='addonInfo'>
                            <input className='blueInput' type='checkbox' name='largerStorage' checked={addonsData.largerStorage} onChange={() => toggleAddon('largerStorage')}/>
                            <div className='largerStorageText'>
                                <h3>Larger storage</h3>
                                <p>Extra 1TB of cloud save</p>
                            </div>
                        </div>
                        <div className='price'>
                            {paymentFrequency === 'monthly' ? '+$2/mo' : '+$20/yr'}
                        </div>  
                    </div>
                    <div className={`addon ${addonsData.customizableProfile ? 'selected' : ''}`}>
                        <div className='addonInfo'>
                            <input className='blueInput' type='checkbox' name='customizableProfile' checked={addonsData.customizableProfile} onChange={() => toggleAddon('customizableProfile')}/>
                            <div className='customizableProfileText'>
                                <h3>Customizale profile</h3>
                                <p>Custom theme on your profile</p>
                            </div>
                        </div>
                        <div className='price'>
                            {paymentFrequency === 'monthly' ? '+$2/mo' : '+$20/yr'}
                        </div>
                    </div>
                </div>











                <div className="buttonContainer">
                    <button className="backButton" onClick={handleBackClick}>Go Back</button>
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
        </div>
    );
}

export default AddOns;