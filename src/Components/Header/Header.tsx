import { AppBar, Typography } from "@mui/material";
import React from "react";


const Header: React.FC=()=>{
    return(
       <AppBar>
        <Typography variant="h1" sx={{fontSize: 40}}>Simple pagination app</Typography>
       </AppBar>
    )
}

export default Header;