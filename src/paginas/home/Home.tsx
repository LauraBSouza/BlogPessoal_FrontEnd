import React, { useEffect } from "react";
import { Typography, Box, Grid, Button } from "@material-ui/core";
import './Home.css';
import TabPostagem from "../../components/postagens/tabPostagem/TabPostagem";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { useHistory } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

function Home() {

    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token])

    return (
        <>

            <Grid container direction="row" justifyContent="flex-start" alignItems="center" className="caixa" >

                <Grid alignItems="center" item xs={6}>
                    <div className="efeito-vidro">
                    <Box padding={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Seja bem vindo(a)!!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Em que você está pensando?</Typography>
                    </Box>
                   

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button variant="outlined" className="botao">Ver postagens</Button>
                    </Box>
                    </div>

                   
                </Grid>


                <Grid item xs={12} className="postagens">
                    <TabPostagem />
                </Grid>

            </Grid>

        </>
    );
}

export default Home;