import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Avatar from '../../assets/avatar.png'
import Arrow from '../../assets/arrow.png'
import Trash from '../../assets/trash.png'
import { H1 } from '../../components/Title/styles'
import { BoxItens } from '../../components/BoxItens/styles'
import { Button } from '../../components/Button/styles'

import {
  Container,
  Image,
  User
} from './styles'

const Users = () => {

  const [users, setUsers] = useState([])

  const history = useHistory()

  useEffect(() =>{

    async function fetchUsers(){
      const {data: newUsers} = await axios.get("http://localhost:3001/users") // Criamos a variável e indicamos o endereço do nosso back-end
	
    setUsers(newUsers); // Chamamos a variável criada para aparecer na tela da aplicação
    }
    fetchUsers()

  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers);
  }

  function pushPage(){
    history.push("/")
  }

  return (
    <Container>

      <Image
        alt='usuários'
        src={Avatar}
      />

      <BoxItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt='lixeira' /></button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={pushPage}>
          <img
            alt='retornar'
            src={Arrow}
            
          />Voltar
        </Button>

      </BoxItens>
    </Container>
  )
}

export default Users;