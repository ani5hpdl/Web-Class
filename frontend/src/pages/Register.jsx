import { useState } from 'react'
import { toast } from "react-hot-toast";
import Input from '../components/Input';
import { createUserApi } from '../services/api';

const Register = () => {
    const [formData,setFormData] = useState({
        username : '',
        email : '',
        password : '',
        confirmPassword : ''
    });
    const handleChange = (e) =>{

        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        });
    }


    const validate = () =>{
        if(!formData.username){
            toast.error('Name is Required');
            return false;
        }

        if(!formData.email){
            toast.error('Email is Required');
            return false;
        }

        if(!formData.password){
            toast.error('Password is Required');
            return false;
        }

        if(!formData.confirmPassword){
            toast.error('Confirm Password is Required');
            return false;
        }

        if(formData.password<6){
            toast.error('Password Must be 6 Letters');
            return false;
        }
        return true;

        // if(formData.password !== formData.confirmPassword){
        //     console.log(formData.password);
        //     console.log(formData.confirmPassword);
        //     toast.error('Password and Confirm Password Doesnot Match!');
        //     return false;
        // }
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!validate()) return;

        try{

            const response = await createUserApi(formData );
            if(response.status === 201){
                toast.success(response?.data?.message);
                setFormData({
                    username : '',
                    email : '',
                    password : '',
                    confirmPassword : ''
                });
            }else{
                toast.error(response?.data?.message)
            }
        }catch(error){ 
            toast.error('Something went Wrong');
        }
    }

    return ( 
        < >

            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                Username:
                </label>
                <input 
                type="text" 
                id="username" 
                placeholder="Enter your Username Here.." 
                name="username" 
                value={formData.username} 
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                />
            </div>

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

            <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                Confirm Password:
                </label>
                <input 
                type="password" 
                id="confirmPassword" 
                placeholder="Confirm your Password Here.." 
                name="confirmPassword" 
                value={formData.confirmPassword} 
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

export default Register
