import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'


import './Perfil.css'
import { UserState } from '../../store/tokens/tokensReducer'
import User from '../../models/User'
import { busca, buscaId } from '../../services/Service'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem'
import ModalTema from '../../components/temas/modalTema/ModalTema'


function Perfil() {

    let history = useHistory()

    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<User>({
        id: +id,
        usuario: "",
        nome: "",
        senha: "",
        foto: ""

    })

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history.push("/login")
        }
    }, [token])

    async function findById(id: string) {
        buscaId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function getUser(){
        await busca("/perfil", setUser, {
          headers: {
            'Authorization': token
          }
        })
      }
    
    
      useEffect(()=>{
        getUser()
      }, [user])

    return (

        <Box className='card-principal'>
            <Box>
                <Box className='card-container-imagem'>
                    <img className='card-imagem'
                        src={user.foto}
                        alt={user.nome} />
                </Box>

                <Box className='card-container-info'>
                    <Box>
                        <h1>{user.nome}</h1>
                        <hr />
                        <h1>{user.usuario}</h1>
                    </Box>
                </Box>
            </Box>

            <Box>
                <Box display="flex" justifyContent="center" className='cadastro2'>
                    <Box display="flex" justifyContent="center" className='cadastro'>

                        <Box>
                            <ModalPostagem />
                        </Box>

                        <Box marginLeft={2}>
                            <ModalTema />
                        </Box>
                    </Box>

                </Box>
                <Box className='cadastro'>
                    <Link to="/formularioPerfil" className='novotema'>
                        <Button variant="outlined" className='botao3'> Editar Perfil</Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Perfil