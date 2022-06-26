import { AppBar, Typography } from "@mui/material";
import React from "react";


const Header: React.FC=()=>{
    return(
       <AppBar sx={{marginBottom:2}}>
        <Typography variant="h1" sx={{fontSize: 40, padding:1}}>Simple pagination app</Typography>
       </AppBar>
    )
}

export default Header;