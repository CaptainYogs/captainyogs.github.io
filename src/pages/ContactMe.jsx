import Input from "../components/Input.jsx";

export default function ContactMe() {
    return (
        <div className='px-4 md:px-12 text-stone-50'>
            <h1 className='py-8 text-4xl md:text-5xl font-semibold font-[Montserrat]'>Contact Me</h1>
            <hr />
            <div className='grid grid-cols-1 xl:grid-cols-2 px-4 md:px-16 pt-4 sm:pt-16'>
                <div className='w-full justify-self-center'>
                    <Input label='Name' id='name' type='text' />
                    <Input label='Email' id='email' type='email' />
                    <Input label='Phone' id='phone' type='tel' maxLength='10' />
                    <Input label='Message' id='message' type='text' rows='2' inputType='textarea' />
                    <button className='bg-blue-600 text-stone-50 p-2 px-4 hover:bg-cyan-600 rounded-lg w-full'>
                        Submit
                    </button>
                </div>
                <div className='pt-8 md:py-4 justify-self-center self-center'>
                    <a href='https://github.com/YogeshR6' target='_blank'><i className='fa-brands fa-github fa-5x px-8 transition-all duration-300 hover:scale-110'></i></a>
                    <a href='https://www.linkedin.com/in/yogeshr6/' target='_blank'><i className='fa-brands fa-linkedin fa-5x px-8 transition-all duration-300 hover:text-[#0077B5] hover:scale-110'></i></a>
                    <a href='https://www.instagram.com/captainyogs/' target='_blank'><i className='fa-brands fa-instagram fa-5x px-8 transition-all duration-300 hover:scale-110'></i></a>
                </div>
            </div>
        </div>
    )
}