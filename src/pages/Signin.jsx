import { Link } from 'react-router-dom'
import logo from '../assets/diologo.png'
import Button from '../components/Button'
import Input from '../components/Input'
import { useForm } from 'react-hook-form'

export default function Signin() {

    const {register, handleSubmit} = useForm();

    function handleSubmitForm(data){
        console.log(data)
    }
    
    return(
        <div className="flex flex-col items-center justify-around bg-[#2E2E2E] shadow-sm  rounded p-8 w-[35rem] h-[35rem]">
            <img src={logo} className="w-44" alt='diowallet logo'/>
            <form onSubmit={handleSubmit(handleSubmitForm)} action="" className="flex flex-col justify-center gap-4 w-full text-2xl">
                <Input type="email" placeholder="Email" register={register} name="email"/>
                <Input type="password" placeholder="Password" register={register} name="password"/>
                <Button type="submit" text="SIGNIN"/>
            </form>
            <p className="text-white text-1xl">Dont have an account? <Link to="/signup" className="text-sky-400 hover:text-sky-600">Register</Link></p>
        </div>
    );
}