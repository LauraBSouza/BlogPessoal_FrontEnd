import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Postagem from '../../../models/Postagem';
import './ListaPostagem.css';
import {useHistory} from 'react-router-dom';
import { busca } from '../../../services/Service';

import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/tokensReducer';

function ListaPostagem() {
  const [postagens, setPostagens] = useState<Postagem[]>([])
  let history = useHistory();
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(()=>{
    if(token == ''){
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    })
      history.push("/login")
    }
  }, [token])


  async function getPostagem(){
    await busca("/postagens", setPostagens, {
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
             {postagem.tema?.descricao}
            </Typography>
            <Typography variant="h5" component="h2">
             {postagem.titulo}
            </Typography>
            <Typography variant="h5" component="h2">
             {postagem.texto}
            </Typography>
            <Typography variant="h5" component="h2">
             <img src={postagem.imagem} alt="" />
            </Typography>
            <a target="_blank" href={postagem.anexo}>
            <Typography variant="h5" component="h2">
             {postagem.anexo}
            </Typography>
            </a>
            <Typography variant="h5" component="h2">
             {postagem.data}
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