//import Button from "../../src/components/Button";
import {
  Dumbbell,
  Shirt,
  Sparkles,
  Scissors,
  Heart,
  Leaf,
  ScanFace,
  Utensils,
} from "lucide-react";
const StoreFrontPage = () => {
  let Niches = [
    {
      id: 1,
      name: "Fitness",
      icon: Dumbbell,
    },
    { id: 2, name: "Fashion", icon: Shirt },
    { id: 3, name: "Beauty", icon: Sparkles },
    { id: 4, name: "Grooming", icon: Scissors },
    { id: 5, name: "Lifestyle", icon: Heart },
    { id: 6, name: "Wellness", icon: Leaf },
    { id: 7, name: "Skincare", icon: ScanFace },
    { id: 8, name: "Food", icon: Utensils },
  ];
  return (
    <div className="flex-1 flex flex-col justify-between gap-5 mt-6 ">
      <div className="flex flex-col justify-center text-black">
        <h1 className="text-center font-semibold text-3xl">
          Setup your Storefront
        </h1>
        <label className="mt-10" htmlFor="username">
          Choose your username
        </label>
        <div className="mt-3">
          <div className="relative w-full h-13 transition-colors">
            <input
              type="text"
              id="username"
              className="w-full outline-none"
              placeholder="CSF/Username"
              className="peer w-full h-full placeholder:text-black px-12 border border-gray-300 rounded-xl card-shadow focus:outline-none focus:border-green-500"
            />
            <span className="absolute inset-0 flex items-center text-black px-5 pointer-events-none">
              @
            </span>
          </div>
        </div>
        <p className="mt-1 ml-1 font-medium text-[9px]">
          This becomes your public store link
        </p>
        <h3 className="mt-5">Choose your niche</h3>
        <div className="flex flex-wrap gap-3 mt-2">
          {Niches.map((niche) => {
            const Icon = niche.icon;
            return (
              <button className="flex  items-center border border-gray-300 bg-white rounded-full text-xs py-2 px-1.5 shadow-sm ">
                <Icon className="h-3 aspect-square" />
                <span>{niche.name}</span>
              </button>
            );
          })}
        </div>
        <p className="mt-2 ml-1 font-medium text-[9px]">
          Select up to three niches to find the right product
        </p>
        <h3 className="mt-5">Short Bio</h3>
        <div className="mt-3 relative h-24">
          <label
            htmlFor=""
            className="absolute h-full w-full flex items-center pointer-events-none"
          >
            <span className="absolute bottom-2 right-3 text-xs text-black/70">
              150 characters
            </span>
          </label>
          <textarea
            className="rounded-xl resize-none h-full w-full p-2 border border-gray-300 focus:outline-none focus:border-[#25D366]"
            name=""
            id=""
          ></textarea>
        </div>
      </div>{" "}
      <div className="w-full pb-15 text-white font-semibold">
        <button class="w-full py-4 mt-5 bg-[#25D366] shadow-lg rounded-full hover:bg-emerald-600 transition-colors">
          Continue
        </button>
      </div>
    </div>
  );
};

export default StoreFrontPage;
/**/
