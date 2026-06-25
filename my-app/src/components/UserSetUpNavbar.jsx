const UserSetUpNavbar = ({ pgNum = 1 }) => {
  const currentPercent = (pgNum / 3) * 100;
 
  return (
    <div>
      <div className="text-center w-full pt-4 ">
        <h1 className="text-sm font-geist tracking-wide font-semibold text-gray-400">Hulion</h1>
        <div className="mt-2 flex flex-col items-center">
          <span className="font-medium text-[10px] text-gray-400">
            {pgNum} of 3
          </span>
          <div className=" w-25 h-1 mt-2 relative overflow-hidden rounded-full bg-gray-100">
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
