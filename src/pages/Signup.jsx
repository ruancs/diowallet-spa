import { Link } from 'react-router-dom';
import logo from '../assets/diologo.png'
import Button from '../components/Button'
import Input from '../components/Input'
import { BiArrowBack } from "react-icons/bi";
import { useForm } from 'react-hook-form';

export default function Signup(){
    const {register, handleSubmit} = useForm();

    function handleSubmitForm(data){
        console.log(data)
    }

    return(
        <div className="flex flex-col items-center justify-around bg-[#2E2E2E] shadow-sm rounded p-8 w-[35rem] h-[35rem] relative">
            <Link to="/signin">
                <BiArrowBack className="text-white absolute top-3 left-3 text-2xl hover:text-sky-600"/>
            </Link>
            
            <img src={logo} className="w-44" alt='diowallet logo'/>
            <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col justify-center gap-4 w-full text-2xl">
                <Input type="text" placeholder="Full name" register={register} name="nome"/>
                <Input type="email" placeholder="Email" register={register} name="email" />
                <Input type="password" placeholder="Password" register={register} name="password"/>
                <Input type="password" placeholder="Confirm Password" register={register} name="confirmPassword"/>
                <Button type="submit" text="Signup"/>
            </form>
        </div>
    )
}