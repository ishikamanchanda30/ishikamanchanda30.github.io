import React, { useState } from 'react';
import RotatingCircle from './Circle';
import emailjs from "emailjs-com"
const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      event.target as HTMLFormElement,
      import.meta.env.VITE_EMAIL_USER_ID
    )
      .then(() => {
        alert("Email Sent Successfully");
      })
      .catch(() => {
        alert("Error in sending Mail");
      });
  };


  return (

    <div className=" w-[100%]  flex flex-col mb-10" id='contact'>
      <div className='text-4xl md:text-6xl mb-4'> CONTACT</div>
      <div className='border-1 border-[#686868] opacity-20 mb-10'></div>
      <div className="w-full flex flex-row md:justify-between">
        <div className="w-1/2 flex flex-col md:flex-row gap-4 md:gap-40">
          <div>
            <h2 className="text-sm md:text-2xl font-[300] ">CONTACT</h2>
            <p className="text-sm md:text-lg text-[#686868] hover:text-gray-300 transition-colors">ishikamanchanda0130@gmail.com</p>
           
          </div>
          <div>
            <h2 className="text-2xl font-[300] ">SOCIALS</h2>
            <a target='_blank' href="https://www.linkedin.com/in/ishikamanchanda0130/" className="text-[#686868] block hover:text-gray-300 transition-colors">linkedin</a>
            <a target='_blank' href="https://x.com/ishi_manchanda" className="text-[#686868] block hover:text-gray-300 transition-colors">X {`(formerly twitter)`}</a>
            <a target='_blank' href="https://github.com/ishikamanchanda30" className="text-[#686868] block hover:text-gray-300 transition-colors">github</a>
          </div>
        </div>
        <div className='w-1/2'>
          <RotatingCircle />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between mt-10">
        <div className="w-full md:w-2/3 mt-4 mr-10">
          <div className="text-7xl md:text-9xl  font-[600] leading-none">
            LET'S
          </div>
          <div className="text-7xl md:text-9xl  font-[600] leading-none text-right">
            CONNECT
          </div>
        </div>
        <div className="w-full md:w-1/2 m-0 mt-2 md:m-10">
          <div className='w-full'>
            <form onSubmit={submitForm}>
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b  border-white/20 py-2 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div className="mb-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div className="mb-6">
                <input
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-neutral-600 text-white px-8 py-2 rounded-full hover:bg-neutral-700 transition-colors">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >

  );
};

export default Contacts; 