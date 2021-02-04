import React, { Component } from 'react';
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Profile.css';

export class Profile extends Component {
  
  render() {

    return (
      <div classname='profile'>
         <Typography variant="h2" >Профиль</Typography>
        <Typography variant="subtitle2" >
          Способ оплаты:
        </Typography>
        <Typography variant="subtitle3" >
        <ul>
        <li>Тип карты: Visa / Mastercard</li>
           
        <li>Номер карты: 1111122223333</li>
        <li>Имя: Vladimir</li>
        <li>Дата истечения: 13/24</li>
        <li>Код карты: 123</li>
        </ul>
        </Typography>
            <Button to="map" component={Link} variant="contained" color="primary">
              Перейти на карту
            </Button>
          </div>
    );
  }
}

export default Profile;
  