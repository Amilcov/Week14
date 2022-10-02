
import { useState } from 'react';
import './RegistrationForm.css';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [stuff, setStuff] = useState('');
  const [bio, setBio] = useState('');
  const [notification, setNotification] = useState('')
  const [validateErrors, setValidateErrors] = useState([]);


  function validate() {
     const err = [];
     if (!name || name.length === 0) err.push('Please provide a name');
     if (!email || email.length === 0) err.push('Please provide an email');
     if (!(/\S+@\S+\.\S+/.test(email))) err.push('Please provide a valid email');
     if (!phone || phone.length === 0) err.push('Please provide a phone number');
     if ( (!/[0-9]{4}-([0-9]{3}-){2}[0-9]{3}/.test(phone)) && (!/[0-9]{10}/.test(phone))) err.push('Please provide a valid phone number');
     if (!phoneType ) err.push('Please select a phoneType');
     if (!stuff) err.push('Please select a stuff');
     if (bio.length > 280 ) err.push('Please provide a bio of maximum 280 chars');
     return err;
  };
 
  function onSubmit(e) {
    e.preventDefault();
    const errors = validate();
    if (errors.length > 0) return setValidateErrors(errors);

    let data = {name, email, phone, phoneType, stuff, bio, notification, submitedDate: new Date()};
    console.log(data);

  };

  return (
    <div>
     <h2> Registration Form </h2>
      <div>
        { 
           validateErrors.length > 0 && (
           <ul>
             {validateErrors.map( (err, idx)=> <li key = {idx}> {err} </li>)}
           </ul>
           )
         }
      
      </div>
      <form onSubmit={onSubmit}>
        <div> 
          <label htmlFor="name"> Name: </label>
          <input type="text" id="name" onChange={(e) => setName(e.target.value)} value={name}/>
        </div>
        <div>
          <label> Email: </label>
          <input type="text" id="email" onChange={(e)=> setEmail(e.target.value)} value={email} />
        </div>
        <div>
          <label htmlFor="phone"> Phone: </label>
          <input type="text" id="phone" onChange={(e) => setPhone(e.target.value)} value={phone} placeholder="xxx-yyy-zzz-ttt or 1234567890"/>

          <label htmlFor="phoneType"> Phone Type: </label>
          <select id="phoneType" onChange={(e) => setPhoneType(e.target.value)} value={phoneType} >
              <option value="" disabled> -- Select a phone type -- </option>
            <option value="home"> Home </option>
            <option value="office"> Ofice </option>
            <option value="mobile"> Mobile </option>
          </select>
        </div>
        <div>
          <legend> Stuff </legend>
            <fieldset>
              <div>
                <input type="radio" name="stuff" id="instructor" onChange={(e) => setStuff('instructor')} value={stuff} />
                <label htmlFor="stuff"> Instructor </label>
              </div>
              <div>
                <input type="radio" name="stuff" id="student" onChange={(e) => setStuff('student')} value={stuff}/>
                <label htmlFor="stuff"> Student </label>
              </div>
            </fieldset>
        </div>
        <div>
          <label htmlFor="bio"> Bio: </label>
          <textarea name="bio" rows="4" cols="50" onChange={(e) => setBio(e.target.value)} value={bio}> </textarea>
        </div>
        <div>
          <label> Signup for email notification: </label>
          <input type="checkbox" name="notification" onChange={(e) => setNotification( e.target.checked ? 'Yes' : 'No')} value={notification} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
