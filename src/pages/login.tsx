import { useState } from "react"
import './login.css'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import {login} from '../slice/slice'
import { useNavigate } from "react-router-dom";


function Login(){
    const [em,setem]= useState<String>("");
    const [pa,setpa]= useState<String>("");
    const count = useAppSelector(state => state.log)
   const dispatch = useAppDispatch()

   const navigate = useNavigate();
   
   function handlelog(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    
    let c = { 
        email:em,
        password:pa
    }
    
    dispatch(login(c));
    navigate('/newpage');
    



   }
    return (
        
        <div className="formdiv">
            
            <form className="form" onSubmit={handlelog}>
                <h1>Login</h1>
                <label>Email</label>
                <input placeholder="Enter the Email" type="email" className="emi" onChange={(e)=>{setem(e.target.value)}}/>
                <label>Password</label>
                <input placeholder="Enter the Password" type="password" className="pas" onChange={(e)=>{setpa(e.target.value)}}/>
                <button type="submit" >Submit</button>
            </form>

        </div>

    );

}
export default Login;