import logo from '../assets/diologo.png'
import Button from '../components/Button'
import Input from '../components/Input'
import { BiArrowBack } from "react-icons/bi";

export default function Signup(){
    return(
        <div className="flex flex-col items-center justify-around bg-[#2E2E2E] shadow-sm rounded p-8 w-[35rem] h-[35rem] relative">
            <BiArrowBack className="text-white absolute top-3 left-3 text-2xl"/>
            <img src={logo} className="w-44" alt='diowallet logo'/>
            <form className="flex flex-col justify-center gap-4 w-full text-2xl">
                <Input type="text" placeholder="Full name"/>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
                <Input type="password" placeholder="Confirm Password"/>
                <Button type="submit" text="Signup"/>
            </form>
        </div>
    )
}