import ContactForm from '../components/ContactForm.jsx';
import ContactDetails from '../components/ContactDetails.jsx';

export default function ContactMe() {
    return (
        <div className='px-4 md:px-12 text-stone-50'>
            <h1 className='py-8 text-4xl md:text-5xl font-semibold font-[Montserrat]'>Contact Me</h1>
            <hr />
            <div className='grid grid-cols-1 xl:grid-cols-2 px-4 md:px-16 pt-4 sm:pt-16'>
                <ContactForm />
                <div className='pt-8 md:py-4 justify-self-center self-center'>
                    <ContactDetails />
                    <a href='https://github.com/YogeshR6' target='_blank'><i className='fa-brands fa-github fa-5x px-8 transition-all duration-300 hover:scale-110'></i></a>
                    <a href='https://www.linkedin.com/in/yogeshr6/' target='_blank'><i className='fa-brands fa-linkedin fa-5x px-8 transition-all duration-300 hover:text-[#0077B5] hover:scale-110'></i></a>
                    <a href='https://www.instagram.com/captainyogs/' target='_blank'><i className='fa-brands fa-instagram fa-5x px-8 transition-all duration-300 hover:scale-110'></i></a>
                </div>
            </div>
        </div>
    )
}