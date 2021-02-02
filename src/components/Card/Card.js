import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';


const Card = (props) => {
 
  const { handleSubmit, mode } = props;

  const handleSubmitCard = (e) => {
    e.preventDefault();
    if (mode === 'signup') {
      props.handleSubmit(
        e.target.email.value,
        e.target.password.value,
        e.target.name.value,
        e.target.surname.value,
      );
    } else {
      handleSubmit(e.target.email.value, e.target.password.value);
    }
  };

  return (
    <form  onSubmit={handleSubmitCard}>
      <TextField
       
        type="email"
        name="email"
        required
        label={<span>Email</span>}
      />
      {mode === 'signup' && (
        <div >
          <TextField
           
            type="text"
            name="name"
            required
            label={<span>Имя</span>}
          />
      <br/>
          <TextField
          
            type="text"
            name="surname"
            required
            label={<span>Фамилия</span>}
          />
        </div>
      )}
      <br />
      <br/>
      <TextField
  
        type="password"
        name="password"
        required
        label={<span>Пароль</span>}
      />
      <br />
      <br/>
      <Button variant="contained" color="primary" type="submit">
        Войти
      </Button>
    </form>
  );
};

Card.propTypes = {
  handleSubmit: PropTypes.func,
  mode: PropTypes.string,
};

Card.defaultProps = {
  handleSubmit: () => {},
  mode: 'default',
};

export default Card;