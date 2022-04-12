import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';

function Navbar() {

  let history = useHistory();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const dispatch = useDispatch()

  function goLogout() {
    dispatch(addToken(""))
    toast.info('Usuário deslogado', {
      position: "top-right",
      autoClose: 2000,   // 2 seg
      hideProgressBar: false, 
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
  })
    history.push('/login')
  }

  var navbarComponent;

  if (token !== "") {

    navbarComponent = <AppBar position="static" className='back'>
      <Toolbar variant="dense" className='bar'>
        <Box className='cursor' >
          <Typography variant="h5" color="inherit" className='title'>
            BlogPessoal
          </Typography>
        </Box>

        <Box display="flex" justifyContent="start">
          <Link to="/home" className="text-decorator-none">
            <Box mx={1} className='cursor' >
              <Typography variant="h6" color="inherit" className='text'>
                home
              </Typography>
            </Box>
          </Link>

          <Link to="/postagens" className="text-decorator-none">
            <Box mx={1} className='cursor' >
              <Typography variant="h6" color="inherit" className='text'>
                postagens
              </Typography>
            </Box>
          </Link>

          <Link to="/temas" className="text-decorator-none">
            <Box mx={1} className='cursor' >
              <Typography variant="h6" color="inherit" className='text'>
                temas
              </Typography>
            </Box>
          </Link>

          <Link to="/formularioTema" className="text-decorator-none">
            <Box mx={1} className='cursor' >
              <Typography variant="h6" color="inherit" className='text'>
                cadastrar tema
              </Typography>
            </Box>
          </Link>

          <Link to='/login' className='text-decorator-none'>
            <Box mx={1} className='cursor' onClick={goLogout} >
              <Typography variant="h6" color="inherit" className='text'>
                logout
              </Typography>
            </Box>
          </Link>

        </Box>



      </Toolbar>
    </AppBar>

  }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar;
