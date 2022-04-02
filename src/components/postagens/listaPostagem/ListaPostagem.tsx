import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Postagem from '../../../models/Postagem';
import './ListaPostagem.css';
import useLocalStorage from 'react-use-localstorage';
import {useHistory} from 'react-router-dom';
import { busca } from '../../../services/Service';

function ListaPostagem() {
  const [postagens, setPostagens] = useState<Postagem[]>([])
  const [token, setToken] = useLocalStorage('token');
  let history = useHistory();

  useEffect(()=>{
    if(token == ''){
      alert("Você precisa estar logado")
      history.push("/login")
    }
  }, [token])


  async function getPostagem(){
    await busca("/postagens/all", setPostagens, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(()=>{
    getPostagem()
  }, [postagens.length])

  return (
    <>
    {
      postagens.map(postagem =>(
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Postagem
            </Typography>
            <Typography variant="h5" component="h2">
             {postagem.titulo}
            </Typography>
            <Typography variant="h5" component="h2">
             {postagem.texto}
            </Typography>
            <Typography variant="h5" component="h2">
             {postagem.data}
            </Typography>
            <Typography variant="h5" component="h2">
             {postagem.tema?.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={3.5} >

              <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft, button1" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary" className="button2">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </>
  )
}


export default ListaPostagem;