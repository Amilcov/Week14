import { useState } from 'react';
//import isEmail from 'validator/es/lib/isEmail';
import { isEmail } from 'validator';

function ContactUs(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [comments, setComments] = useState('');
    const [validateErrors, setValidateErrors] = useState('');

    function validate() {
      const err = [];
      if (!name) err.push('Please provide a name');

      
    //   if (!email) {
    //     err.push('Please provide an email');
    //   } else {
    //     if (!isEmail(email)) {
    //     err.push('Please provide a valid email');
    //     }
    //   };

   
      if (!isEmail(email)) {err.push('email wrong')}
      return err;
    }

    function onSubmit (e) {
      e.preventDefault();
      const errors = validate();
      if (errors.length > 0) return setValidateErrors(errors);

      const contatUsInformation = {
          name,
          phone,
          email,
          phoneType,
          comments,
          subbmittedOn: new Date()
      };

      console.log(contatUsInformation);

      setName('');
      setEmail('');
      setPhone('');
      setPhoneType('');
      setComments('');
      setValidateErrors([]);
    };



  return(
    <div>
        <h2>Contact Us</h2>
        {
            validateErrors.length > 0 && (
                <div>
                  <ul>
                    {validateErrors.map( error => <li key={error}> {error} </li> )}
                  </ul>
            </div>
            )
        }
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor='name'> Name: </label>
                <input id='name' type='text' onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            <div>
                <label htmlFor='email'> Email: </label>
                <input id='email' type='text' onChange={(e) => setEmail(e.target.value)} value={email}/>
            </div>
            <div>
                <label htmlFor='phone'> Phone: </label>
                <input id='phone' type='text'onChange={(e) => setPhone(e.target.value)} value={phone}/>
                <select id='phoneType' onChange={(e) => setPhoneType(e.target.value)} value={phoneType}>
                    <option default='' disabled> Select a phone type...</option>
                    {props.phoneTypes.map(phoneType => <option key={phoneType}> {phoneType} </option>)}
                </select>
            </div>

            <div>
                <label htmlFor='id'> Comments: </label>
                <input type='text' id='text' name='comments' onChange={(e) => setComments(e.target.value)} value={comments}/>
            </div>
           <button>Submit</button>
        </form>
    </div>
  )
};

ContactUs.defaultProps = {
   phoneTypes: ['Home', 'Work', 'Mobile']
};

export default ContactUs;

