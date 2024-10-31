// import React from 'react';
import 'boxicons/css/boxicons.min.css';
import confettiBall from './images/noto_confetti-ball.png';

function App() {
  return (
    <div className="flex flex-col items-center p-6 Helvetica Now Display border border-#FFFFFF w-[502px] h-[405px] mx-auto rounded-[16px] box-border">
      <div className="w-[120px] h-[120px]">
        <img src={confettiBall} alt="Confetti Ball" />
      </div>
      <div className="text-center my-5">
        <h1 className="text-3xl font-bold">Welcome to Moniewise!</h1>
        <p className="mt-3 text-gray-700, text-xs">
          We are thrilled to have you onboard <span className="text-[#33658A]">Goodness</span>. Let's quickly help you set up and personalize your account.
        </p>
      </div>
      <div className="w-full flex justify-center mt-4">
        <button className="flex items-center justify-center w-[454px] h-[56px] bg-[#33658A] text-white rounded-[16px] py-6 px-4 gap-2 hover:bg-[#0056b3] transition">
          Set Up Account 
          <i className="bx bx-right-arrow-alt text-lg"></i>
        </button>
      </div>
      <div className="mt-5 cursor-pointer hover:underline flex items-center">
        Continue to Dashboard <i className="bx bx-right-arrow-alt ml-1 text-lg"></i>
      </div>
    </div>
  );
}

export default App;
