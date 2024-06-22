export default function Input({ label, id, inputType, ...props }) {
    const inputClass = "border-1 peer block w-full bg-transparent appearance-none rounded-lg border border-gray-300 px-2.5 pb-2.5 pt-4 text-sm text-stone-50 focus:border-blue-600 focus:outline-none focus:ring-0";
    return (
        <div className="relative my-4 w-full">
            {inputType === 'textarea' ? <textarea id={id} {...props} className={inputClass} placeholder=" " /> : <input id={id} {...props} className={inputClass} placeholder=" " required />}
            <label htmlFor={id} className="absolute top-2 bg-[#001219] left-1 z-10 origin-[0] -translate-y-5 scale-80 transform cursor-text select-none px-3 text-sm text-stone-50 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-5 peer-focus:scale-100 peer-focus:px-2 peer-focus:ml-1 peer-focus:text-blue-600">{label}</label>
        </div>
    )
}