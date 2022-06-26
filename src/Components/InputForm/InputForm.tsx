import React from "react";
import { TextField } from "@mui/material";

interface myProps{
    setIsSelected: any;
    setId: any;
}

const InputForm: React.FC<myProps>=({setIsSelected, setId}:myProps)=>{

    const changeHandler = (e:any) =>{
        setId(e.target.value)
        setIsSelected(true)
        if(e.target.value==""){
            setIsSelected(false)
            setId(0)
        }
    }
 
    return(
        <TextField
            sx={{marginTop:6}}
            type="number"
            label="Id"
            InputProps={{
                inputProps: { 
                    max: 12, min: 1
                }
            }}
            onChange={changeHandler}
        />
    )
}

export default InputForm;