import React, { useEffect } from "react";
import { Typography, Box, Grid, Button } from "@material-ui/core";
import './Home.css';
import TabPostagem from "../../components/postagens/tabPostagem/TabPostagem";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserState } from "../../store/tokens/tokensReducer";
import { toast } from 'react-toastify';

function Home() {

    let history = useHistory();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
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

    return (
        <>

            <Grid container direction="row" justifyContent="flex-start" alignItems="center" className="caixa" >

                <Grid alignItems="center" item xs={6}>
                    <div className="efeito-vidro">
                        <Box padding={20}>
                            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Seja bem vindo(a)!!</Typography>
                            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Em que você está pensando?</Typography>
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