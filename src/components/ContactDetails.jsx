import { useState } from "react";
export default function ContactDetails() {
    const [isCopied, setIsCopied] = useState(false);
    function clickHandler() {
        navigator.clipboard.writeText('yrlimbani03@gmail.com');
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    }
    return (
        <div className='flex justify-center align-center flex-col my-8'>
            <button onClick={clickHandler} className="text-xl font-semibold transition-all duration-300 hover:scale-110">Contact me: yrlimbani03@gmail.com <span className="relative inline-block">
                <span className={`transition-opacity duration-500 ${isCopied ? 'opacity-0' : 'opacity-100'}`}
                >
                    <i className="fa-solid fa-copy"></i>
                </span>
                <span className={`absolute left-0 transition-opacity duration-500 ${isCopied ? 'opacity-100' : 'opacity-0'}`}
                >
                    <i className="fa-solid fa-check"></i>
                </span>
            </span></button>
        </div>
    )
}