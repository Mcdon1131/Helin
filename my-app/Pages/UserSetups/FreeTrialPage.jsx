import { useNavigate } from "react-router-dom";

import { Check } from "lucide-react";

const FreeTrialPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 flex flex-col justify-between gap-5 mt-6 ">
      <div className="flex flex-col justify-center text-black">
        <h1 className="text-center text-3xl font-semibold">
          Start your 30 day free trial
        </h1>
        <h3 className="text-center mt-5 w-full">
          Access all Hulion features risk-free. Cancel anytime during your
          trial.{" "}
        </h3>
        <div className="grid grid-cols-2 mt-3 gap-5">
          <button className="p-4 text-left flex flex-col border border-gray-300 rounded-[20px] shadow-md">
            <div className=" w-full flex justify-between">
              <span className="text-sm font-medium">Monthly</span>
              <span className="inline-block h-5 aspect-square rounded-full border-2 overflow-hidden border-[#25D366]"></span>
            </div>{" "}
            <h2 className="text-xl font-bold mt-2">
              $39<span className="text-xs font-medium text-black/50">/mo</span>
            </h2>
            <div className="mt-2 text-xs">
              <div className="flex items-center gap-1">
                <Check className="w-3.5 stroke-1 text-black/60" />
                <p>Full feature access</p>
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-3.5 stroke-1 text-black/60" />
                <p>10GB Storage</p>
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-3.5 stroke-1 text-black/60" />
                <p>Email support</p>
              </div>
            </div>
          </button>
          <button className="p-4 relative text-left flex flex-col border border-gray-300 rounded-[20px] shadow-md">
            <span className="absolute top-0 right-0 -translate-y-1/2 -translate-x-2/3 rounded-md p-1 px-2 text-[8px] text-white bg-[#25D366]">
              Save 20%
            </span>
            <div className=" w-full flex justify-between">
              <span className="text-sm font-medium">Annually</span>
              <span className="inline-block h-5 aspect-square rounded-full border-2 overflow-hidden border-[#25D366]"></span>
            </div>{" "}
            <div className="flex gap-2 items-end">
              <h2 className="text-xl mt-2 font-bold">
                $374
                <span className="text-xs font-medium text-black/50">/yr</span>
              </h2>
              <h2 className="text-sm mt-2 font-bold line-through text-black/50">
                $468
                <span
                  style={{ textDecoration: "none" }}
                  className="text-[10px] font-medium text-black/50"
                >
                  /yr
                </span>
              </h2>
            </div>
            <div className="mt-2 text-xs">
              <div className="flex items-center gap-1">
                <Check className="w-3.5 stroke-1 text-black/60" />
                <p>Full standard package</p>
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-3.5 stroke-1 text-black/60" />
                <p>Unlimited Storage</p>
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-3.5 stroke-1 text-black/60" />
                <p>Priority Support</p>
              </div>{" "}
              <div className="flex items-center gap-1">
                <Check className="w-3.5 stroke-1 text-black/60" />
                <p>Advanced Analytics</p>
              </div>
            </div>
          </button>
        </div>
        <div className="p-4 pb-5 mt-5 border border-gray-300 rounded-xl shadow-md ">
          <h3 className="font-bold ">Payment Details</h3>
          <p className="mt-5 mb-1 text-xs uppercase">card NUMBER</p>
          <div className="relative h-8">
            <label className="absolute h-full pl-5 flex items-center text-black/60 text-sm pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-credit-card w-4 aspect-square stroke-current"
                aria-hidden="true"
              >
                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                <line x1="2" x2="22" y1="10" y2="10"></line>
              </svg>
              <span class="ml-5">0000 0000 0000 0000</span>
            </label>
            <input
              class="w-full h-full pl-13 border shadow-md border-gray-300 rounded transition-colors focus:outline-none focus:border-[#25D366]"
              id="creator"
              type="text"
              name="role"
            />
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="">
              <p className="mt-3 mb-1 text-xs uppercase" htmlFor="expry">Expiry</p>
              <input
                type="text"
                placeholder="MM/YY"
                className="border w-full shadow-md h-8 pl-5 border-gray-300 placeholder:text-xs focus:outline-none focus:border-[#25D366]"
                id="expry"
              />
            </div>
            <div className="px-2 pb-2">
              <p className="mt-3 mb-1 text-xs uppercase" htmlFor="cvc">CVC</p>
              <input
                type="text"
                placeholder="123"
                className="border w-full shadow-md h-8 pl-5 border-gray-300 placeholder:text-xs focus:outline-none focus:border-[#25D366]"
                id="cvc"
              />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="w-full pb-15 text-white font-semibold">
         <button
          onClick={() => navigate("/setup/role")}
          class="w-full py-4 mt-5 bg-[#25D366] shadow-lg rounded-full hover:bg-emerald-600 transition-colors"
        >
          Start free trial
        </button>
        <p className="text-black/50 text-center m-0 p-0 text-xs mt-1">No charge today. Cancel anytime</p>
        <button
          onClick={() => navigate("/setup/role")}
          class="w-full py-4 mt-2 bg-[#000000] shadow-lg rounded-full hover:bg-emerald-600 transition-colors"
        >
          Skip for now
        </button>
      </div>
    </div>
  );
};

export default FreeTrialPage;
