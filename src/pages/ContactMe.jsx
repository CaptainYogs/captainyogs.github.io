import Input from "../components/Input.jsx";

export default function ContactMe() {
    return (
        <div className='h-screen p-8'>
            <h1 className='pb-8 text-5xl font-semibold text-stone-50'>Contact Me</h1>
            <hr></hr>
            <div className='md:w-[35rem]'>
                <Input label='Name' id='name' type='text' />
                <Input label='Email' id='email' type='email' />
                <Input label='Phone' id='phone' type='tel' maxLength='10' />
                <Input label='Message' id='message' type='text' rows='2' inputType='textarea' />
                <button className='bg-cyan-500 text-stone-50 p-2 hover:bg-cyan-600 rounded-lg'>Submit</button>
            </div>
        </div>
    )
}