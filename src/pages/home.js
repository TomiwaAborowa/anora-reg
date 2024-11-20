import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    // <div className="bg-[url('brown.jpg')] bg-contain">
    //   <></>
    //   <div className="bg-contain bg-right mix-blend bg-no-repeat h-screen w-screen bg-[url('bgimagess.png')]">
    //     <nav>
    //       <div>
    //         <img src="actions.png" alt="logo" className="p-5" />
    //       </div>
    //     </nav>
    //     <div className="text-center">
    //       <div className="p-4">
    //         <p className="text-white font-medium tracking-wider text-2xl ml-2">
    //           Welcome to
    //         </p>
    //         <h2 className="text-3xl font-bold tracking-wide text-white  sm:text-3xl">
    //           ACTION MASTERCLASS
    //           <br />
    //           ACADEMY
    //         </h2>
    //       </div>
    //       <div className="ml-32 -mt-8">
    //         <p className=" text-lg font-bold mt-2  leading-8 text-white p-4 ">
    //           Want to get the best and master techniques to shoot your very own
    //           movie?
    //         </p>
    //       </div>
    //       <div className="mt-10 p-2 flex items-center max-w-md mx-auto justify-center gap-x-6 lg:justify-start">
    //         <button
    //           type="button"
    //           className="inline-flex items-center rounded-md ml-32 hover:bg-amber-400 bg-white px-3 py-2  font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
    //         >
    //           <Link to="/registration">Register Now</Link>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
      <div className="bg-[url('brown.jpg')] bg-contain">
    <div className="bg-contain bg-right mix-blend bg-no-repeat h-screen w-screen bg-[url('bgimagess.png')]">
      <nav className="flex justify-center items-center">
        <img src="actions.png" alt="logo" className="p-5 h-24 w-32" />
      </nav>
      <div className="text-center p-20">
        <p className="text-white font-medium tracking-wider text-2xl ml-2 sm:text-xl">
          Welcome to
        </p>
        <h2 className="text-3xl font-bold mt-5
        
        tracking-wide text-white sm:text-6xl">
          ACTION MASTERCLASS
          <br />
          ACADEMY
        </h2>
      </div>
      <div className="-mt-8 text-center">
        <p className="text-lg font-bold mt-2 leading-8 text-white p-4 sm:text-md">
          Want to get the best and master techniques to shoot your very own movie?
        </p>
      </div>
      <div className="mt-8  flex items-center justify-center gap-x-6 lg:justify-start">
        <button
          type="button"
          className="inline-flex items-center rounded-md sm:mx-auto hover:bg-amber-400 bg-white px-3 py-2 font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
        >
          {/* <a href="https://paystack.com/pay/zeyhc54q2m">Register Now</a> */}
          <Link to="/registration">Register Now</Link>
        </button>
        
      </div>
    </div>
  </div>
  );
}

export default Home;
