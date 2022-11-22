import React, { useEffect, useState } from 'react';
import { useCookies } from "react-cookie";

import axios from 'axios';
import { apiAdress } from '../../../services/api';

import { Container } from './styles';
import Transaction from './transaction';

const Transferences: React.FC = () => {
  const [cookies, setCooke] = useCookies()


  return (
    <Container>
      <h3> Transferencias: </h3>
      <div className="contentBox">
      </div>
    </Container>
  );
}

export default Transferences;