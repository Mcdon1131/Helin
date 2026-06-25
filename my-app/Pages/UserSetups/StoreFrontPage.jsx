import Button from "../../src/components/Button";

const StoreFrontPage = () => {

  let Niches = [
    { id: 1, name: "Fitness" },
    { id: 2, name: "Fashion" },
    { id: 3, name: "Beauty" },
    { id: 4, name: "Grooming" },
    { id: 5, name: "Lifestyle" },
    { id: 6, name: "Wellness" },
    { id: 7, name: "Skincare" },
    { id: 8, name: "Food" },
  ];
  return (
    <div className="flex justify-center items-center bg-white mt-10">
      <div className="w-full max-w-sm px-6 pt-5 ">
        <h1 className="text-center font-semibold text-3xl mb-7">
          Setup your StoreFront
        </h1>
        <label htmlFor="username">Choose your username</label>
        <div className="mt-3">
          <div className="relative w-full h-14 transition-colors">
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
          <div className="mt-1">
            <small>This becomes your public store link</small>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="mb-2">Choose your Niche</h2>
          <div className="flex flex-wrap gap-4 br px-px pt-2 pb-1">
            {Niches.map((niche) => (
              <div key={niche.id} className="border flex items-center justify-center px-2 py-px border-gray-300 rounded-xl">
                <p>{niche.name}</p>
              </div>
            ))}
          </div>
          <small className="px-px ">
            Select up to three niches to find the right product
          </small>
        </div>

        <div className="mt-3 h-34">
          <label htmlFor="bio">Short Bio</label>
          <div className="relative w-full h-14 transition-colors mt-2">
            <input
              type="text"
              id="bio"
              className="outline-none"
              className="peer w-full h-25 placeholder:text-black px-12 border border-gray-300 rounded-xl card-shadow focus:outline-none focus:border-green-500"
            />
            <span className="absolute right-2 top-19 flex items-center text-black pointer-events-none">
              <small> 120 - 150 characters</small>
            </span>
          </div>
        </div>
        <div className="mt-10">
          <Button bgColor="#00ce1b" to="/setup/freetrial" name="Continue" />
        </div>
      </div>
    </div>
  );
};

export default StoreFrontPage;
