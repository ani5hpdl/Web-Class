import { useState } from 'react'
import { toast } from "react-hot-toast";
import Input from '../components/Input';
import { login } from '../services/api';

const Login = () => {
    const [formData,setFormData] = useState({
        email : '',
        password : '',
    });
    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name] : [e.target.value]
        });
    }


    const validate = () =>{
        if(!formData.email){
            toast.error('Email is Required');
            return false;
        }

        if(!formData.password){
            toast.error('Password is Required');
            return false;
        }
        return true;
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log("Button CLicked")
        if(validate()){
            
            console.log("Button CLicked3456T7Y89OP0S")
            try{
                const response = await login(formData);
                if(response.data.success){
                    toast.success('Registration Sucessful');
                    setFormData({
                        email : '',
                        password : '',
                    });
                }else{
                    toast.error('Registration Failed!!')
                }
            }catch(error){ 
                toast.error('Something went Wrong');
            }
        }else{
            toast.error('Error in Validation')
        }
    }

    return ( 
        < >
            <form action="">
                <label htmlFor="email" className='w-30'>Email:</label>
                <input 
                    type="email" 
                    id='email' 
                    placeholder='Enter your Email Here..' 
                    name='email' 
                    value={formData.email} 
                    onChange={handleChange}
                    className='border m-2 w-50' 
                /> <br />

                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id='password' 
                    placeholder='Enter your Password Here..' 
                    name='password' 
                    value={formData.password} 
                    onChange={handleChange}
                    className='border m-2 w-50' 
                /> <br />

                <button onClick={handleSubmit}>Submit</button>
            </form>

        </>
    )
}

export default Login
