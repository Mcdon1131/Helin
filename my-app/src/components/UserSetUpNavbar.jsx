const UserSetUpNavbar = ({ pgNum = 1 }) => {
  const currentPercent = (pgNum / 3) * 100;
 
  return (
    <div>
      <div className="w-full py-3 z-100 flex flex-col items-center ">
        <h1 className="text-xl mt-5 font-semibold text-gray-600">Hulion</h1>
        <div className="mt-2">
          <p className="w-full text-sm text-center mb-3 text-gray-400">
            {pgNum} of 3
          </p>
          <div className=" w-40 h-1.5 relative overflow-hidden rounded-xl bg-gray-100">
            <span
              style={{
                width: `${currentPercent}%`,
                animationDirection: "forwards",
              }}
              className="absolute rounded-[6px_0_0_6px]  transition-all ease-in-out duration-200 inset-0 bg-[#25D366]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSetUpNavbar;
