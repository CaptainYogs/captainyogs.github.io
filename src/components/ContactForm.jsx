import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Input from "../components/Input.jsx";

export default function contactFrom() {
    const form = useRef();
    const [status, setStatus] = useState('');
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, {
                publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
            })
            .then(
                () => {
                    form.current.reset();
                    setStatus('SUCCESS');
                    setTimeout(() => {
                        setStatus('');
                    }, 6000);
                },
                (error) => {
                    setStatus('FAILED');
                    setTimeout(() => {
                        setStatus('');
                    }, 6000);
                },
            );
    };

    return (
        <div className='w-full justify-self-center'>
            {status === 'FAILED' && <div className='bg-red-400 p-2 w-fit rounded-xl flex flex-row items-center'>
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className='text-stone-50'>Something Went Wrong! Please Try Some Other Time.</span>
            </div>}
            {status === 'SUCCESS' && <div className='bg-green-400 p-2 w-fit rounded-xl flex flex-row items-center'>
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className='text-stone-50'>Message Successfully Sent! Thanks for Contacting Me!</span>
            </div>}
            <form ref={form} onSubmit={sendEmail}>
                <Input label='Name' id='name' type='text' name='name' />
                <Input label='Email' id='email' type='email' name='Email' />
                <Input label='Phone' id='phone' type='tel' maxLength='10' name='Phone' />
                <Input label='Message' id='message' type='text' rows='2' inputType='textarea' name='message' />
                <button className='bg-blue-600 text-stone-50 p-2 px-4 hover:bg-cyan-600 rounded-lg w-full' type='submit'>
                    Submit
                </button>
            </form>
        </div >
    );
};