import React from "react";
import Image from "next/image";


const Projects = () => {
  return (
    <div className="flex flex-col ml-[120px]">
      <div className="pb-2 text-center font-inter">
        <h2 className="text-4xl font-bold">PROYECTOS</h2>
      </div>
      <div className="grid items-center grid-cols-3 gap-4 font-inter">
        
        <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
            <img
              src= "/IMAGES/Captura1.PNG"
              alt="To-Do En Svelte"
              width={480}
              height={200}
            />
            <div className="px-6 py-2">
              <div className="mb-2 text-xl font-bold">
              To-Do list En Svelte
              </div>
              <p className="text-base text-gray-700">
                To-Do List creada con el framework de svelte como tarea de clases
              </p>
            </div>
            <div   className="px-6 pt-2 pb-2 text-sm">
             <a href="https://to-do-svelte-roan.vercel.app"><button className="p-2">Ver la pagina</button></a>
              
            </div>
          </div>
        </div>


        <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
            <img
              src= "/IMAGES/Captura2.PNG"
              alt="GATO"
              width={480}
              height={200}
            />
            <div className="px-6 py-2">
              <div className="mb-2 text-xl font-bold">
              GATO
              </div>
              <p className="text-base text-gray-700">
                Pagina interactiva para jugar al "GATO" realizada con react
              </p>
            </div>
            <div   className="px-6 pt-2 pb-2 text-sm">
             <a href="https://gato-kappa.vercel.app"><button className="p-2">Ver la pagina</button></a>
              
            </div>
          </div>
        </div>



        <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
            <img
              src= "/IMAGES/Captura3.PNG"
              alt="Tiempo"
              width={480}
              height={200}
            />
            <div className="px-6 py-2">
              <div className="mb-2 text-xl font-bold">
              Tiempo
              </div>
              <p className="text-base text-gray-700">
                Pagina interactiva en la cual se pueden hacer busquedas de lugares para saber el clima en ese momento, pagina creada con vue
              </p>
            </div>
            <div   className="px-6 pt-2 pb-2 text-sm">
             <a href="https://vue-page-omega.vercel.app"><button className="p-2">Ver la pagina</button></a>
              
            </div>
          </div>
        </div>



        <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
            <img
              src= "/IMAGES/Captura4.PNG"
              alt="Tareas"
              width={480}
              height={200}
            />
            <div className="px-6 py-2">
              <div className="mb-2 text-xl font-bold">
              Lista de Tareas
              </div>
              <p className="text-base text-gray-700">
                Lista de tareas realizada con vue que te permite ingresar tareas, editar y eliminar estas mismas.
              </p>
            </div>
            <div   className="px-6 pt-2 pb-2 text-sm">
             <a href="https://todo-list-peach-six.vercel.app"><button className="p-2">Ver la pagina</button></a>
              
            </div>
          </div>
        </div>




        <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
            <img
              src= "/IMAGES/Captura5.PNG"
              alt="CUCEI"
              width={480}
              height={200}
            />
            <div className="px-6 py-2">
              <div className="mb-2 text-xl font-bold">
              Pagina CUCEI
              </div>
              <p className="text-base text-gray-700">
                Pagina con tematica del CENTRO UNIVERSITARIO DE CIENCIAS EXACTAS E INGENIERIAS con sus respectivas redes sociales y temas de interes. 
              </p>
            </div>
            <div   className="px-6 pt-2 pb-2 text-sm">
             <a href="https://bootstrap-mocha.vercel.app"><button className="p-2">Ver la pagina</button></a>
              
            </div>
          </div>
        </div>

        <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
            <img
              src= "/IMAGES/Captura.PNG"
              alt="Firebase"
              width={480}
              height={200}
            />
            <div className="px-6 py-2">
              <div className="mb-2 text-xl font-bold">
              Practica de Autenticacion
              </div>
              <p className="text-base text-gray-700">
                Pagina de practica para la autenticacion con firebase y con un formualrio para nombres y correos en vue.
              </p>
            </div>
            <div   className="px-6 pt-2 pb-2 text-sm">
             <a href="https://poetic-klepon-8629f3.netlify.app/#/"><button className="p-2">Ver la pagina</button></a>
              
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Projects;
