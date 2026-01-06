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

            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">

            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email:
                </label>
                <input 
                type="email" 
                id="email" 
                placeholder="Enter your Email Here.." 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                autoComplete="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                />
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password:
                </label>
                <input 
                type="password" 
                id="password" 
                placeholder="Enter your Password Here.." 
                name="password" 
                value={formData.password} 
                onChange={handleChange}
                autoComplete="new-password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                />
            </div>

            <button 
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Submit
            </button>
            </div>

        </>
    )
}

export default Login
