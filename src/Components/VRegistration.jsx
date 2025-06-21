'use client';

import { useState,useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";


const VRegistration = () => {
    const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
  const [message, setMessage] = useState('');
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
   
    useEffect(() => {
      const name = localStorage.getItem("VName");
      console.log(name+"hi")
      if (name) {
        router.push("/vregister"); // Redirect to the registration page
      }
    }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.email.trim()) {
      setMessage('Email is required.');
      return;
    }
    
    try {
      const response = await axios.post('https://healthcaremangementplatformbackend.onrender.com/Visitor/Register', form, {
        withCredentials: true,
      });
      if (response.data.alreadyRegistered) {
        setMessage('Already registered! Please log in.');
        setAlreadyRegistered(true);
      } else {
        setMessage('Registration successful!');
        setAlreadyRegistered(false);
      }
      if (response.data?.Userr) {
        const { name, _id, contactNumber } = response.data.Userr;
        if (typeof window !== "undefined") {
          localStorage.setItem("VName", name);
          localStorage.setItem("id", _id);
          localStorage.setItem("contact", contactNumber);
        }
      }
    
      alert("Registration successful!");
      router.push("/visitorhome");
    } catch (error) {
      setMessage('Error registering. Please try again.');
      console.error('Error registering:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Visitor Registration</h2>
        
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required />
        <input type="password" name="password" placeholder="Create Password" onChange={handleChange} className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required />
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300">Register</button>
        <p className="text-center text-blue-600 mb-4">Already registered? <a href="/vlogin" className="underline">Login here</a></p>
        {message && <p className="text-center text-red-600 mt-2">{message}</p>}
      </form>
    </div>
  );
};

export default VRegistration;
