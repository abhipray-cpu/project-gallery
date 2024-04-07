import { Player } from "@lottiefiles/react-lottie-player";
import WeatherJSON from './assets/weather.json';
import NASAJSON from './assets/space.json'
import PokemonJSON from './assets/pokemon.json'
import BeerJSOn from './assets/beer.json'
import CoinJSon from './assets/crypto.json'
import BhagwadJSON from './assets/bhagwad.json'
export default function App() {
   const redirect = (url)=>{
      window.location.href = url;
   }
   return(
    <section className="container w-screen min-h-screen mx-auto flex flex-col items-center bg-gradient-to-r from-teal-900 to-black pt-5">
            <h1 className="text-2xl text-white font-serif font-medium md:text-2xl lg:text-3xl tracking-widest">Project Gallery</h1>

            <div className="flex pb-8 flex-col gap-4  lg:flex-row lg:mt-20 lg:w-[80vw] lg:gap-20 lg:flex-wrap lg:justify-center ">
               <div className="flex flex-col items-center justify-center cursor-pointer" onClick={()=>{redirect('')}}>
               <Player
            src={WeatherJSON}
            loop
            autoplay
            speed={3}
            style={{ height: "200px", width: "200px" }}
          />
          <h2 className="text-white font-mono tracking-wide -mt-4 text-xl">So how is the weather?</h2>
               </div>
               <div className="flex flex-col items-center justify-center cursor-pointer" onClick={()=>{redirect('')}}>
               <Player
            src={NASAJSON}
            loop
            autoplay
            speed={1}
            style={{ height: "200px", width: "200px" }}
          />
          <h2 className="text-white font-mono tracking-wide -mt-4 text-xl">Whats going on in space?</h2>
               </div>
               <div className="flex flex-col items-center justify-center cursor-pointer" onClick={()=>{redirect('')}}>
               <Player
            src={PokemonJSON}
            loop
            autoplay
            speed={1}
            style={{ height: "170px", width: "170px" }}
          />
          <h2 className="text-white font-mono tracking-wide mt-4 text-xl">Catch them all!</h2>
               </div>
               <div className="flex flex-col items-center justify-center cursor-pointer" onClick={()=>{redirect('')}}>
               <Player
            src={BeerJSOn}
            loop
            autoplay
            speed={1}
            style={{ height: "170px", width: "170px" }}
          />
          <h2 className="text-white font-mono tracking-wide mt-4 text-xl">Cheers Bhaisahab!</h2>
               </div>
               <div className="flex flex-col items-center justify-center cursor-pointer" onClick={()=>{redirect('')}}>
               <Player
            src={CoinJSon}
            loop
            autoplay
            speed={1}
            style={{ height: "170px", width: "170px" }}
          />
          <h2 className="text-white font-mono tracking-wide mt-4 text-xl">Unlocking Digital Prosperity</h2>
               </div>
               <div className="flex flex-col items-center justify-center cursor-pointer" onClick={()=>{redirect('')}}>
               <Player
            src={BhagwadJSON}
            loop
            autoplay
            speed={1}
            style={{ height: "170px", width: "170px" }}
          />
          <h2 className="text-white font-mono tracking-wide mt-4 text-xl">Soulful Wisdom Unveiled</h2>
               </div>
            </div>
    </section>
   )
}
