import React from "react";
import { Typography, Box, Grid, Button } from "@material-ui/core";
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "black" }} >
                <Grid alignItems="center" item xs={6}>
                    <Box padding={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Em que você está pensando?</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box margin={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "#8b0000", backgroundColor: "#8b0000", color: "white" }}>Ver postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src="https://imgur.com/yLYuiMR.png" alt="" width="550px" height="550px"  />
                </Grid>

                <Grid item xs={12} style={{ backgroundColor: "white"}}>
                </Grid>

            </Grid>

        </>
    );
}

export default Home;