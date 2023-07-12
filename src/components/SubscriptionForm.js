import React, { useState } from 'react';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [subscribers, setSubscribers] = useState([]);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubscribers([...subscribers, email]);
      setEmail('');
    }
  };

  return (
    <div className="subscription-form-container"> 
      <form onSubmit={handleSubmit}>
      <h1>Suscribete</h1>
        <input
          type="email"
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onChange={handleInputChange}
        />
        <button type="submit">Suscribirse</button>
      </form>
      <ul>
        {subscribers.map((subscriber, index) => (
          <li key={index}>{subscriber}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionForm;