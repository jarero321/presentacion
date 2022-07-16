import Loader from "./loader";
import logo from "./logo.png";
function App() {
  return (
    <>
      <div className="w-screen bg-[#262626]">
        <div className="px-4 py-4">
          <p
            className="text-white text-xl "
            style={{ fontFamily: "Edu VIC WA NT Beginner, cursive" }}
          >
            Bienvenido
          </p>
          <div className="w-full px-4 py-4  h-[70px] flex items-center justify-center mt-10 ">
            <img src={logo} width={"150px"} />
          </div>
          <div className="w-full px-10 py-4 mt-10 h-[400px] bg-[#BF3604] rounded-2xl flex  flex-col items-center">
            <div className=" w-full justify-center flex items-center  gap-4 mt-6">
              <p className="text-[#ccccccf4] font-bold text-[40px] ">Vision</p>
              <div className="w-4 h-4 bg-[#ccccccf4] rounded-full flex items-center justify-center ">
                <div className="w-1 h-1 bg-black"></div>
              </div>
            </div>
            <p className="text-[#ccccccf4] mt-3 text-center text-[20px] ">
              Ser una empresa innovadora y vanguardista siendo lider en
              tendencias inclusivas en regiones con ideas conservadoras
            </p>
            <div className="flex w-full  items-center justify-center px-10 py-2 mt-10 bg-white rounded-full">
              Ir al Sitio
            </div>
          </div>
          <div className="w-full px-10 py-4 mt-10 h-[400px] bg-[#1A90D9] rounded-2xl flex  flex-col items-center">
            <div className=" w-full justify-center flex items-center  gap-4 mt-6">
              <p className="text-[#ccccccf4] font-bold text-[40px] ">Vision</p>
              <div className="w-4 h-4 bg-[#ccccccf4] rounded-full flex items-center justify-center ">
                <div className="w-1 h-1 bg-black"></div>
              </div>
            </div>
            <p className="text-[#ccccccf4] mt-3 text-center text-[20px] ">
              Ser una empresa innovadora y vanguardista siendo lider en
              tendencias inclusivas en regiones con ideas conservadoras
            </p>
            <div className="flex w-full  items-center justify-center px-10 py-2 mt-10 bg-white rounded-full">
              Ir al Sitio
            </div>
          </div>
          <div>
            <div className=" w-full justify-center flex items-center  gap-4 mt-6">
              <p className="text-[#ccccccf4] font-bold text-[40px] ">Valores</p>
              <div className="w-4 h-4 bg-[#ccccccf4] rounded-full flex items-center justify-center ">
                <div className="w-1 h-1 bg-black"></div>
              </div>
            </div>
            <div className="w-full h-[60px] bg-[rgba(255,255,255,.2)] mt-5 rounded-lg flex items-center px-5 ">
              <div className="w-10 h-10 bg-[rgba(255,255,255,.3)] rounded-lg flex items-center justify-center text-[#ccccccf4] font-bold " >
                Ca
              </div>
              <div className="ml-5 text-[#ccccccf4] text-2xl font-bold " >Calidad</div>
            </div>
            <div className="w-full h-[60px] bg-[rgba(255,255,255,.2)] mt-5 rounded-lg flex items-center px-5 ">
              <div className="w-10 h-10 bg-[rgba(255,255,255,.3)] rounded-lg flex items-center justify-center text-[#ccccccf4] font-bold " >
                Co
              </div>
              <div className="ml-5 text-[#ccccccf4] text-2xl font-bold " >Confianza</div>
            </div>
            <div className="w-full h-[60px] bg-[rgba(255,255,255,.2)] mt-5 rounded-lg flex items-center px-5 ">
              <div className="w-10 h-10 bg-[rgba(255,255,255,.3)] rounded-lg flex items-center justify-center text-[#ccccccf4] font-bold " >
                Em
              </div>
              <div className="ml-5 text-[#ccccccf4] text-2xl font-bold " >Empatia</div>
            </div>
            <div className="w-full h-[60px] bg-[rgba(255,255,255,.2)] mt-5 rounded-lg flex items-center px-5 ">
              <div className="w-10 h-10 bg-[rgba(255,255,255,.3)] rounded-lg flex items-center justify-center text-[#ccccccf4] font-bold " >
                Ho
              </div>
              <div className="ml-5 text-[#ccccccf4] text-2xl font-bold " >Honestidad</div>
            </div>
            <div className="w-full h-[60px] bg-[rgba(255,255,255,.2)] mt-5 mb-10 rounded-lg flex items-center px-5 ">
              <div className="w-10 h-10 bg-[rgba(255,255,255,.3)] rounded-lg flex items-center justify-center text-[#ccccccf4] font-bold " >
                Re
              </div>
              <div className="ml-5 text-[#ccccccf4] text-2xl font-bold " >Respeto</div>
            </div>
          </div> 
        </div>
      </div>
      {<Loader />}
    </>
  );
}

export default App;
