import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'

function Navbar() {

  const [token, setToken] = useLocalStorage('token');
  let history = useHistory();

  function goLogout() {
    setToken('')
    alert("Usuário deslogado")
    history.push('/login')
  }

  return (
    <>
      <AppBar position="static" className='back'>
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

            <Link to="/postagens/all" className="text-decorator-none">
            <Box mx={1} className='cursor' >
              <Typography variant="h6" color="inherit" className='text'>
                postagens
              </Typography>
            </Box>
            </Link>

            <Link to="/temas/all" className="text-decorator-none">
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
    </>
  )
}

export default Navbar;
