import React from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const About = () => {
  return (
    <div  className="flex flex-col items-center justify-center text-center bg-[#1e293b] p-4 ml-[200px]">
      <div className="pb-2 text-center font-inter">
        <h2 className="text-4xl font-bold">Acerca de mi</h2>
      </div>
      <p className="pl-10 text-xl tracking-wider font-inter">
      Soy una persona dedicada y ordenada en todo lo
      que hago, con la necesidad de siempre aprender
      algo nuevo y curiosidad por todo.
      <br/>
      Me gusta trabajar en equipo y aportar en todo lo
      necesario.
      <br/>
      Estudiante de ingenieria informatica en la universidad de guadalajara.
      <br/>
      Con experiencia en el area de ka atencion al cliente.
      

      </p>
      <div className="pt-20">
      </div>
    </div>
  );
};

export default About;
