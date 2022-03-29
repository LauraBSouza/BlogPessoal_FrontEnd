import React from "react";
import { Typography, Box, Grid, Button } from "@material-ui/core";
import './Home.css';
import TabPostagem from "../../components/postagens/tabPostagem/TabPostagem";

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa" >
                <Grid alignItems="center" item xs={6}>
                    <Box padding={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Seja bem vindo(a)!!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Em que você está pensando?</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box margin={1}>
                        </Box>
                        <Button variant="outlined" className="botao">Ver postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src="https://imgur.com/yLYuiMR.png" alt="" width="550px" height="550px"  />
                </Grid>

                <Grid item xs={12} className="postagens">
                    <TabPostagem />
                </Grid>

            </Grid>

        </>
    );
}

export default Home;