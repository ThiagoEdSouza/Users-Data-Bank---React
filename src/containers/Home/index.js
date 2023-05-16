import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import People from '../../assets/people.png'
import Arrow from '../../assets/arrow.png'
import { H1 } from '../../components/Title/styles'
import { BoxItens } from '../../components/BoxItens/styles'
import { Button } from '../../components/Button/styles'

import {
  Container,
  Image,
  InputLabel,
  Input,
} from './styles'

const App = () => {

  const [users, setUsers] = useState([])
  const history = useHistory()

  const inputName = useRef()
  const inputAge = useRef()

    async function addNewUser() {
     const { data: newUser } = await axios.post("http://localhost:3001/users" , {
       name: inputName.current.value, 
       age: inputAge.current.value,

     });

    
 setUsers([ ...users, newUser])

     history.push('/usuarios')
  }

  return (
    <Container>

      <Image
        alt='pessoas_interagindo-logo_principal'
        src={People}
      />

      <BoxItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome'></Input>
        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade'></Input>
        <Button onClick={addNewUser}>Cadastrar
          <img
            alt='seta'
            src={Arrow}
          />
        </Button>

        
      </BoxItens>
    </Container>
  )
}

export default App