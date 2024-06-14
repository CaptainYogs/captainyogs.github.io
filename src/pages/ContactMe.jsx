import Input from "../components/Input.jsx";

export default function ContactMe() {
    return (
        <div className='h-screen px-8 pt-8 text-stone-50'>
            <h1 className='pb-8 text-5xl font-semibold'>Contact Me</h1>
            <hr></hr>
            <div className='grid grid-cols-2'>
                <div className='md:w-[35rem] justify-self-center'>
                    <Input label='Name' id='name' type='text' />
                    <Input label='Email' id='email' type='email' />
                    <Input label='Phone' id='phone' type='tel' maxLength='10' />
                    <Input label='Message' id='message' type='text' rows='2' inputType='textarea' />
                    <button className='bg-cyan-500 text-stone-50 p-2 px-4 hover:bg-cyan-600 rounded-lg'>Submit</button>
                </div>
                <div className='my-4 justify-self-center self-center'>
                    <a href='https://github.com/YogeshR6' target='_blank'><i className='fa-brands fa-github fa-5x px-8 hover:scale-110'></i></a>
                    <a href='https://www.linkedin.com/in/yogeshr6/' target='_blank'><i class='fa-brands fa-linkedin fa-5x px-8 hover:text-[#0077B5]'></i></a>
                    <a href='https://www.instagram.com/captainyogs/' target='_blank'><i class='fa-brands fa-instagram fa-5x px-8 hover:scale-110'></i></a>
                </div>
            </div>
        </div>
    )
}