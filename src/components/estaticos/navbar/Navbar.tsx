import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';

import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static" className='back'>
                <Toolbar variant="dense" className='bar'>
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit" className='title'>
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                      <Box mx={1} style={{ cursor: "pointer" }} >
                          <Typography variant="h6" color="inherit" className='text'>
                            home
                          </Typography>
                        </Box>
                    </Box>
                    
                      <Box mx={1} style={{ cursor: "pointer" }} >
                          <Typography variant="h6" color="inherit" className='text'>
                            postagens
                          </Typography>
                        </Box>

                      <Box mx={1} style={{ cursor: "pointer" }} >
                          <Typography variant="h6" color="inherit" className='text'>
                            temas
                          </Typography>
                        </Box>

                      <Box mx={1} style={{ cursor: "pointer" }} >
                          <Typography variant="h6" color="inherit" className='text'>
                            cadastrar tema
                          </Typography>
                        </Box>
                
                      <Box mx={1} style={{ cursor: "pointer" }} >
                          <Typography variant="h6" color="inherit" className='text'>
                            logout
                          </Typography>
                        </Box>
                    

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
