import 'boxicons/css/boxicons.min.css';
import confettiBall from './images/noto_confetti-ball.png';

function App() {
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 font-sans border border-[#FFFFFF] w-full sm:w-[502px] h-auto sm:h-[405px] mx-auto rounded-[16px] box-border mt-8 sm:mt-12">
      <div className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]">
        <img src={confettiBall} alt="Confetti Ball" className="w-full h-full" />
      </div>
      <div className="text-center my-3 sm:my-5">
        <h1 className="text-xl sm:text-3xl font-bold">Welcome to Moniewise!</h1>
        <p className="mt-2 sm:mt-3 text-gray-700 text-sm sm:text-base">
          We are thrilled to have you onboard <span className="text-[#33658A]">Goodness</span>. Let's quickly help you set up and personalize your account.
        </p>
      </div>
      <div className="w-full flex justify-center mt-4">
        <button className="flex items-center justify-center w-full sm:w-[454px] h-[50px] sm:h-[56px] bg-[#33658A] text-white rounded-[16px] py-4 sm:py-6 px-4 gap-2 hover:bg-[#0056b3] transition">
          Set Up Account 
          <i className="bx bx-right-arrow-alt text-lg"></i>
        </button>
      </div>
      <div className="mt-5 cursor-pointer hover:underline flex items-center text-sm sm:text-base">
        Continue to Dashboard <i className="bx bx-right-arrow-alt ml-1 text-lg"></i>
      </div>
    </div>
  );
}

export default App;
