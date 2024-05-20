import axios from 'axios';
import Input from "@/components/Input";
import { useCallback, useState } from "react";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

import Link from 'next/link';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');

    const router = useRouter();

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);

    const login = useCallback(async () => {
        try {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false, 
            });
            if (result.ok) {
                router.push('/ai/aiExtra'); 
            }
        } catch (error) {
            console.log(error);
        }
    }, [email, password, router]);

    const register = useCallback(async () => {
        try {
            const response = await axios.post('/api/register', {
                email,
                name, 
                password,
                subscriptionPlan: 'Extra Plan' 
            });
            if (response.status === 200) {
                router.push('/course'); 
            }
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password, login, router]);

    return (
        <div className="relative h-full w-full bg-[url('/images/hero3.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                <Link href="/home">
                    <img src="/4.png" alt="Logo" className="h-12 cursor-pointer" />
                </Link>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-14 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign in' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                            <Input 
                                label="Username"
                                onChange={(ev: any) => setName(ev.target.value)}
                                id="name"
                                value={name}
                            />
                            )}
                            <Input 
                                label="Email"
                                onChange={(ev: any) => setEmail(ev.target.value)}
                                id="email"
                                type="email"
                                value={email}
                            />
                            <Input 
                                label="Password"
                                onChange={(ev: any) => setPassword(ev.target.value)}
                                id="password"
                                type="password"
                                value={password}
                            />
                        </div>
                        <button onClick={variant === 'login' ? login : register} className="bg-[#FF287C] py-3 text-white rounded-md w-full mt-10 hover:bg-[#ff5395] transition">
                            {variant === 'login' ? 'Login' : 'Sign up'}
                        </button>
                        <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                            <div
                                onClick={() => signIn('google', { callbackUrl: '/ai/aiExtra'})}
                                className="
                                    w-10
                                    h-10
                                    bg-white
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    cursor-pointer
                                    hover:opacity-80
                                    transition
                                "
                            >
                                <FcGoogle size={30}/>
                            </div>
                            <div
                                onClick={() => signIn('github', { callbackUrl: '/ai/aiExtra'})}
                                className="
                                    w-10
                                    h-10
                                    bg-white
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    cursor-pointer
                                    hover:opacity-80
                                    transition
                                "
                            >
                                <FaGithub size={30}/>
                            </div>
                        </div>
                        <p className="text-neutral-500 mt-12">
                            {variant === 'login' ? 'First time using Learning+? ' : 'Already have an account?'}
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                {variant === 'login' ? 'Create an account!' : 'Login!'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
