import React,{useState} from "react";
import { useLocation } from "react-router-dom";
const Project = () => {
  const location = useLocation();

  const [isSidePanelOpen , setIsSidePanelOpen ] = useState(false)
  console.log(location.state);

  return (
    <main className="h-screen w-screen flex">
      <section className="left relative  flex flex-col h-full min-w-72 bg-slate-300">

        <header className="flex justify-end p-2 px-4 w-full bg-slate-200">
          <button className="p-2" 
          onClick={()=>setIsSidePanelOpen(!isSidePanelOpen)}>
            <i className="ri-group-fill"></i>
          </button>
        </header>

        <div className="conversation-area flex-grow flex flex-col gap-1">

          <div className="message-box p-1 flex-grow flex flex-col gap-1 ">
            <div className="max-w-56 message flex flex-col p-2 bg-slate-50 w-fit rounded-md">

                <small className="opacity-65 text-xs">example@gmail.com</small>
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>

            </div>
              <div className="ml-auto max-w-56  message flex flex-col p-2 bg-slate-50 w-fit rounded-md">

                <small className="opacity-65 text-xs">example@gmail.com</small>
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>

            </div>
          </div>

          <div className="inputField w-full flex ">
             <input
                 className="p-2 px-4 border-none outline-none bg-white flex-grow"
                 type="text"
                 placeholder="Enter message"
             />
             <button className=" px-5 bg-slate-950 text-white">
                <i className="ri-send-plane-fill"></i>
             </button>
          </div>
        </div>

        <div className={`sidePanel w-full h-full flex flex-col gap-2 bg-slate-50 absolute transition-all ${isSidePanelOpen ? 'translate-x-0' : '-translate-x-full'} top-0`}>
          <header className="flex justify-end bg-slate-200 px-4 p-2">
            <button onClick={()=>setIsSidePanelOpen(!isSidePanelOpen)} className="p-2">
              <i className="ri-close-fill"></i>
            </button>
          </header>

          <div className="user flex gap-2 items-center ">
          <div className="aspect-square rounded-full w-fit h-fit flex items-center justify-center p-4 bg-slate-800">
            <i className="ri-user-fill absolute w text-blue-100"></i>
           
          </div>
           <h1 className="font-semibold text-lg">username</h1>
          </div>
        </div>


      </section>
    </main>
  );
};

export default Project;
