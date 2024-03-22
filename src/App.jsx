import './App.css'
import TextSlider from './TextSlider';
import logo from './assets/logo.png'
import video from './assets/video.mp4'
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import Navbar from './Navbar'
import imageOne from './assets/main.jpeg'
import imageTwo from './assets/new.jpg'
import teamOne from './assets/team-1.png'
import teamTwo from './assets/team-2.png'
import teamThree from './assets/team-3.png'
import teamFour from './assets/team-4.png'
import teamFive from './assets/team-5.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  const slides = ["PHASE ONE<br>Launch Website <br>Social Media", "PHASE TWO<br>Launch Website <br>Social Media", "PHASE THREE<br>Launch Website <br>Social Media"]; // Add your slides here
    
  return (
    
   <div>
            
      <section className="bg-[url('./assets/bg.png')] text-white w-screen h-screen bg-center bg-cover">
      <Navbar/>
        {/* <div className="overlay"></div> */}
      {/* <video src={video} controls={true} playsInline loop={true} muted={true} autoPlay={true} className='h-screen w-screen object-cover'></video>
         */}
               <div dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${video}"
          class="h-screen w-screen object-cover"
          
        />,
      ` }}></div>

            {/* <nav className="absolute top-0 right-0 left-0 flex justify-between items-center p-6 md:p-12 md:mx-8">
              <div className="">
                <img src={logo} className='w-16' alt="" />
              </div>
                  <div className="hidden md:flex">
                    <ul className='flex space-x-12 font-head'>
                      <li>Home</li>
                      <li>About</li>
                      <li>Tokenomics</li>
                      <li>Roadmap</li>
                    </ul>
                  </div>
            </nav> */}
          
              
            <div 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            
            className="absolute left-0 bottom-0 right-0 flex justify-center py-60 text-center items-center md:p-24 md:mx-24"
            >
              <div className=''>
                <h1 className='font-hero text-shadow-one md:text-[60px] text-green-200 text-shadow drop-shadow-3xl text-[30px]'>I STAND WITH PARKISTAN</h1>
                <p className='text-white font-texts md:text-[25px]'>
                Be Part of the Movement. Join (ISWP)!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci obcaecati aspernatur.
                </p>
                 <div className='my-4'>
                 <a href="" className='bg-transparent border
                  hover:bg-green-950 transition duration-150 ease-in-out
                 border-white px-8 py-2 rounded-lg text-2xl whitespace-nowrap font-head text-white shadow-blue-50 shadow-sm'>Join Community</a>
                 </div>
              </div>
            
            </div>
      </section>

      <section className="strips">
            <div className="strip-1"></div>
            <div className="strip-2">
                <marquee behavior="scroll" direction="right" scrollamount="15">
                    <div className="sub-strip2 text-white font-head">
                        I STAND WITH Pakistan, 
                        I STAND WITH Pakistan, 
                        I STAND WITH Pakistan
                    </div>
                </marquee>
            </div>
        </section>
      <section className='h-fit bg-black text-white p-6 ' id='about'>
            <div className='p-6 mx-2'   data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            >
            <div className="flex font-head justify-center text-[30px] items-center">
            About
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 place-items-center">
              <div className="shadow-gray-800 shadow-lg p-4 rounded-lg w-80 md:w-fit">
                <p className='text-center font-texts'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci pariatur natus
                   fuga minima enim ullam consectetur, deleniti soluta nostrum voluptate a voluptatem quo.</p>
              </div>
              <div className="shadow-gray-800 shadow-lg w-80 md:w-fit">
                <img className='rounded-2xl object-contain' src={imageOne} alt="" />
              </div>
            </div>
            </div>
      </section>

      <section className="w-screen bg-contain bg-no-repeat  bg-black/95 text-white p-6" id='goal'>
             <div className='p-6 mx-2' data-aos="fade-up"
            data-aos-easing="linear">
            <div className="flex flex-col text-center justify-center items-center">
           <h1 className='text-[30px] font-head'> Our Goal</h1>
           <p className='font-texts'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis dolore ullam.</p>
            </div>
            <div className='justify-center flex items-center'>
              <img src={imageTwo} className=' rounded-[80px] w-80 my-3' alt="" />
            </div>
     

            <div className="grid grid-cols-3 md:grid-cols-3 p-4 gap-12 place-items-center">
              <div className="shadow-gray-800 shadow-lg p-4 rounded-lg">
                <p className='text-center font-texts'>Support</p>
              </div>
              <div className="shadow-gray-800 shadow-lg p-4 rounded-lg">
                <p className='text-center font-texts'>Support</p>
              </div>
              <div className="shadow-gray-800 shadow-lg p-4 rounded-lg">
                <p className='text-center font-texts'>Support</p>
              </div>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-3 p-4 gap-10 place-items-center">
              <div className="shadow-gray-800 shadow-lg p-4 rounded-lg">
                <p className='text-center font-texts'>Support</p>
              </div>
              <div className="shadow-gray-800 shadow-lg p-4 rounded-lg">
                <p className='text-center font-texts'>Support</p>
              </div>
              <div className="shadow-gray-800 shadow-lg p-4 rounded-lg">
                <p className='text-center font-texts'>Support</p>
              </div>
              </div>

              <div className='my-4 flex justify-center items-center'>
                 <a href="" className='
                  bg-green-950 transition duration-150 ease-in-out
                 border-white border-2 px-8 py-2 rounded-lg text-lg md:text-2xl 
                 font-head text-white shadow-blue-50 shadow-sm'>Whitepaper</a>
                 </div>

     </div>
         
      </section>

      <section className="w-screen bg-contain bg-no-repeat  bg-black text-white p-6" id='road'>
             <div className='p-6 mx-2 '  data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className="flex flex-col text-center justify-center items-center">
           <h2 className='text-[30px] font-head'>Roadmap</h2>
           <p className='font-texts'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis dolore ullam.</p>
            </div>

            <div className='my-8'>
            {/* <TextSlider slides={slides} /> */}
            <div className="flex flex-col text-center justify-center items-center">
        
          

                  <img src={logo} data-aos="fade-up"
            data-aos-easing="linear" className='w-32 floating' alt="" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 place-items-center">
            <div className="shadow-gray-800 bg-green-900 shadow-sm hover:bg-black w-80 md:fit p-4 rounded-lg " data-aos="fade-left"
            data-aos-easing="linear" data-aos-duration="1500" >
              <h3 className='font-head text-[20px]'>Phase 1</h3>
                <p className='text-center font-texts'>lorem</p>
                <p className='text-center font-texts'>lorem</p>
                <p className='text-center font-texts'>lorem</p>
              </div>
              <div className="shadow-gray-800 shadow-sm bg-green-900 hover:bg-black w-80 md:fit p-4 rounded-lg" data-aos="fade-right"
            data-aos-easing="linear"  data-aos-duration="1500">
              <h3 className='font-head text-[20px]'>Phase 2</h3>
                <p className='text-center font-texts'>lorem</p>
                <p className='text-center font-texts'>lorem</p>
                <p className='text-center font-texts'>lorem</p>
              </div>
              <div className="shadow-gray-800 shadow-sm bg-green-900 hover:bg-black w-80 md:fit p-4 rounded-lg" data-aos="fade-left"
            data-aos-easing="linear"  data-aos-duration="1500">
              <h3 className='font-head text-[20px]'>Phase 3</h3>
                <p className='text-center font-texts'>lorem</p>
                <p className='text-center font-texts'>lorem</p>
                <p className='text-center font-texts'>lorem</p>
              </div>
              <div className="shadow-gray-800 shadow-sm bg-green-900 hover:bg-black w-80 md:fit p-4 rounded-lg" data-aos="fade-right"
            data-aos-easing="linear"  data-aos-duration="1500">
              <h3 className='font-head text-[20px]'>Phasse 4</h3>
                <p className='text-center font-texts'>lorem</p>
                <p className='text-center font-texts'>lorem</p>
                <p className='text-center font-texts'>lorem</p>
              </div>
            </div>
            </div>
            </div>

              <div className='my-4 flex justify-center items-center'>
                 <a href="" className='
                  bg-green-950 transition duration-150 ease-in-out
                 border-white border-2 px-8 py-2 rounded-lg text-lg md:text-2xl 
                 font-head text-white shadow-blue-50 shadow-sm'>Whitepaper</a>
                 </div>

     </div>
         
      </section>



      <section className="w-screen bg-contain bg-no-repeat  bg-black/95 text-white p-6" id='token'>
             <div className='p-6 mx-2 h'>
              <div className="flex flex-col text-center justify-center items-center">
            <h2 className='text-[30px] font-head' data-aos="fade-up"
              data-aos-easing="linear">Tokenomics</h2>
            

                    <img src={logo} data-aos="fade-up"
              data-aos-easing="linear" className='w-32 floating' alt="" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 place-items-center">
              <div className="shadow-gray-800 shadow-sm w-80 md:fit p-4 rounded-lg " data-aos="fade-left"
              data-aos-easing="linear" data-aos-duration="1500" >
                <h3 className='font-head text-[20px]'>10,000,000</h3>
                  <p className='text-center font-texts'>lorem</p>
                </div>
                <div className="shadow-gray-800 shadow-sm w-80 md:fit p-4 rounded-lg" data-aos="fade-right"
              data-aos-easing="linear"  data-aos-duration="1500">
                <h3 className='font-head text-[20px]'>10,000,000</h3>
                  <p className='text-center font-texts'>lorem</p>
                </div>
                <div className="shadow-gray-800 shadow-sm w-80 md:fit p-4 rounded-lg" data-aos="fade-left"
              data-aos-easing="linear"  data-aos-duration="1500">
                <h3 className='font-head text-[20px]'>10,000,000</h3>
                  <p className='text-center font-texts'>lorem</p>
                </div>
                <div className="shadow-gray-800 shadow-sm w-80 md:fit p-4 rounded-lg" data-aos="fade-right"
              data-aos-easing="linear"  data-aos-duration="1500">
                <h3 className='font-head text-[20px]'>10,000,000</h3>
                  <p className='text-center font-texts'>lorem</p>
                </div>
              </div>
              </div>
     

           


     </div>
         
      </section>


      {/* <section className="w-screen bg-contain bg-no-repeat  bg-black text-white p-6" id='team'>
             <div className='p-6 mx-2 ' data-aos="fade-up"
            data-aos-easing="linear"  data-aos-duration="1500">
            <div className="flex flex-col text-center justify-center items-center">
           <h2 className='text-[30px] font-head'>Team</h2>
           <p className='font-texts'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis dolore ullam.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8  p-8 place-items-center">
              <div className="shadow-gray-800 shadow-lg space-y-3 w-64 flex justify-center items-center flex-col p-4 rounded-lg">
          
                  <img src={teamOne} className='w-24 rounded-xl' alt="" />
                    <div className="text-center">
                      <h2 className='font-head'>David C.</h2>
                      <p className='font-texts'>Team Lead</p>
                      <a href="" className='flex justify-center my-1'
                  ><FaTelegram size={25}/></a>
                    </div>

              </div>
              <div className="shadow-gray-800 shadow-lg space-y-3 w-64 flex justify-center items-center flex-col p-4 rounded-lg">
          
          <img src={teamTwo} className='w-24 rounded-xl' alt="" />
            <div className="text-center">
              <h2 className='font-head'>Alex L.</h2>
              <p className='font-texts'>Telegrm and Support</p>
              <a href="" className='flex justify-center my-1'
          ><FaTelegram size={25}/></a>
            </div>

      </div>
      <div className="shadow-gray-800 shadow-lg space-y-3 w-64 flex justify-center items-center flex-col p-4 rounded-lg">
          
          <img src={teamThree} className='w-24 rounded-xl' alt="" />
            <div className="text-center">
              <h2 className='font-head'>Sarah S.</h2>
              <p className='font-texts'>Twitter Unity Leader</p>
              <a href="" className='flex justify-center my-1'
          ><FaTelegram size={25}/></a>
            </div>

      </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8  p-8 place-items-center">
              <div className="shadow-gray-800 shadow-lg space-y-3 w-64 flex justify-center items-center flex-col p-4 rounded-lg">
          
                  <img src={teamFour} className='w-24 rounded-xl' alt="" />
                    <div className="text-center">
                      <h2 className='font-head'>Max S.</h2>
                      <p className='font-texts'>Back-end designer</p>
                      <a href="" className='flex justify-center my-1'
                  ><FaTelegram size={25}/></a>
                    </div>

              </div>
              <div className="shadow-gray-800 shadow-lg space-y-3 w-64 flex justify-center items-center flex-col p-4 rounded-lg">
          
          <img src={teamFive} className='w-24 rounded-xl' alt="" />
            <div className="text-center">
              <h2 className='font-head'>Eliana A.</h2>
              <p className='font-texts'>Front-end designer</p>
              <a href="" className='flex justify-center my-1'
          ><FaTelegram size={25}/></a>
            </div>

      </div>
      
            </div>

              <div className='my-4 flex justify-center items-center'>
                 <a href="" className='
                  bg-green-950 transition duration-150 ease-in-out
                 border-white border-2 px-8 py-2 rounded-lg text-lg md:text-2xl 
                 font-head text-white shadow-blue-50 shadow-sm'><FaTelegram/></a>
                 </div>

     </div>
         
      </section> */}

      <section className="w-screen bg-[url('./assets/new2.png')] bg-contain bg-repeat p-6">
      
             <div className='p-6 mx-2' data-aos="zoom-in"  data-aos-easing="linear"  data-aos-duration="1500">
        
            <div className="flex flex-col text-center text-white justify-center items-center">
           <h2 className='text-[30px] font-head'>JOIN  ISWP COMMUNITY</h2>
           <p className='font-texts'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis dolore ullam.</p>
            </div>


              <div className='my-4 flex justify-center items-center'>
                 <a href="" className='
                  bg-green-950 transition duration-150 ease-in-out
                 border-white border-2 px-8 py-2 rounded-lg text-lg md:text-2xl 
                 font-head text-white shadow-blue-50 shadow-sm'>Join</a>
                 </div>

     </div>
         
      </section>

      <footer className="w-screen bg-contain bg-no-repeat  bg-black text-white p-6">
              <div className="flex flex-col text-center md:text-start md:flex-row gap-2 justify-between items-center">
                <div className='flex flex-row items-center justify-center'>
                  <img src={logo} className='w-16 spin mr-3' alt="" />   <span className='font-head'> ISWP</span>  
                
                </div>
                <div>
                  <h2 className='font-head'>Quick Links</h2>
                  <ul className='font-texts  w-screen md:w-fit  border-b-gray-300'>
                    <li>HOME</li>
                    <li>About</li>
                    <li>Tokenomics</li>
                    <li>Whitepaper</li>
                  </ul>
                </div>
                <div>
                  <h2 className='font-head'>BUY/SWAP</h2>
                  <ul className='font-texts w-screen md:w-fit  border-b-gray-300'>
                    <li>Dextools</li>
                    <li>Pancakeswap</li>
                    <li>Poocoin</li>
                    
                  </ul>
                </div>

                <div className='justify-center flex flex-col items-center md:items-start'>
                  <h2 className='font-head'>SOCIALS</h2>
                  <ul className='font-texts text-center flex space-x-4'>
                  <FaXTwitter/>
                  <FaTelegram/>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center mt-4">
                <p className='font-texts'>All Rights Reserved 2024</p>
              </div>
      </footer>

   </div>
  )
}

export default App
