import { useEffect, useState } from 'react';

function Message({ size, featherCount}) {
    const [message, setMessage] = useState('');

    useEffect( () => {
       let messageT = '';
        if (featherCount <= 0) {
           messageT = '   (Oh my! Your bird is naked!)';
        } else if (featherCount < 10) {
           messageT = '   (Comming along!)';
        } else {
           messageT ='    (Full turcky!)';
        }
       setMessage(messageT);
    }, [featherCount]);

    return (
        <div className={`message ${size}`}>
            {message}
        </div>
    );
};

export default Message;