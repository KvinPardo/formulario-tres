import React from "react";
import Login from "../assets/login.jpg";
import {FcGoogle} from 'react-icons/fc';
import {AiFillFacebook} from 'react-icons/ai';
 
const Form = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        src={Login}
        alt=""
        className="absolute w-full h-full object-cover mix-blend-overlay"
      />

      <div className="flex justify-center items-center h-full">
        <form className="max-w-[400px] w-full mx-auto bg-white p-8 rounded-xl">
          <h2 className="text-4xl font-bold text-center py-4">Bienvenido</h2>
          <div className="flex justify-between py-8">
            <p className="borders shadow-lg hover:shadow-2xl px-6 py-2 relative flex items-center"><FcGoogle size={30} className="mr-2"/>Google</p>
            <p className="borders shadow-lg hover:shadow-2xl px-6 py-2 relative flex items-center"><AiFillFacebook size={30} className="mr-2"/>Facebook</p>
          </div>
          <div className="flex flex-col mb-4 relative">
            <label htmlFor="">Usuario</label>
            <input type="text" className="border relative rounded-md bg-gray-100 p-2"/>
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="">Contraseña</label>
            <input type="password" className="border relative rounded-md bg-gray-100 p-2"/>
          </div>
          <button className="w-full py-4 mt-8 bg-indigo-600 hover:bg-indigo-500 relative rounded-md text-white ">Iniciar Sesión</button>
          <p className="flex items-center mt-2 relative"><input type="checkbox" className="mr-2" />Recordarme</p>
          <p className="text-center mt-8 relative">Crear Cuenta</p>

        </form>
      </div>
    </div>
  );
};

export default Form;
