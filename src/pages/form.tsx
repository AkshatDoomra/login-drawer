import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './form.css'
//import { error } from 'console';


export default function FormPropsTextFields() {
    const [nam,setnam]= useState("");
    const [ema,setema]= useState("");
    const [pass,setpass]= useState("");
    const [skill,setskill]= useState("");
    const [oth,setoth]= useState("");
    const [submitted,setsubmitted]=useState(false);
    function handles(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        setsubmitted(true);
        type form={
            name:String,
            email:String,
            password:String,
            skill:String,
            other:String

        }
        let c={
            name:nam,
            email:ema,
            password:pass,
            skill:skill,
            other:oth
            
        }
        let varr;
        
        for (varr in c){
            if(c[varr as keyof form] == ''){
                return ;
            }
        //console.log(varr);
            

        }
            
        console.log(c);
        
    }
   
    return (
        
        <>
            <Box
                component="form"
                display='flex'
                flexDirection='column'
                alignItems='center'
                onSubmit={handles}

                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },



                }}
                noValidate
                autoComplete="off"



            >
                <div className='textdiv'>
                    <Stack direction="column">
                        <TextField
                            required
                            name="name"
                            id="outlined-required"
                            label="name"
                            onChange={(e)=>setnam(e.target.value)}
                            error={submitted&&nam===''}
                            helperText={submitted&&nam===''&&"write name"}
                           
                           
                        //defaultValue="Name"
                        //placeholder='Enter Name'
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="email"
                            onChange={(e)=>setema(e.target.value)}
                            value={ema}
                            error={submitted&&ema==''}
                            helperText={submitted&&ema==''&&"write email"}
                            
                        //defaultValue="Hello World"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Password"
                            type='password'
                            onChange={(e)=>setpass(e.target.value)}
                            value={pass}
                            error={submitted&&pass==''}
                            helperText={submitted&&pass==''&&"write password"}
                        //defaultValue="Hello World"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Skills"
                            onChange={(e)=>setskill(e.target.value)}
                            value={skill}
                            error={submitted&&skill==''}
                            helperText={submitted&&skill==''&&"write skills"}
                        //defaultValue="Hello World"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Others"
                            onChange={(e)=>setoth(e.target.value)}
                            value={oth}
                            error={submitted&&oth==''}
                            helperText={submitted&&oth==''&&"write other info"}
                        //defaultValue="Hello World"
                        />



                    </Stack>

                </div>
                <Button variant="contained" type='submit'>Submit</Button>


            </Box>
            
        </>
    );
}
