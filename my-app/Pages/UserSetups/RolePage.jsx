import { useState } from "react";
import creator from "../../src/assets/creator.webp";
import merchant from "../../src/assets/merchant.webp";
import RoleCard from "../../src/components/RoleCard";
import { Link } from "react-router-dom";
function RolePage() {
  const [selected, setSelected] = useState("");

  const roles = [
    {
      title: "Creator",

      image: creator,

      description:
        "Earn up to 20% commission by recommending products to your audience.",
    },

    {
      title: "Merchant",

      image: merchant,

      description:
        "Get your products in front of the right audience through creators.",
    },
  ];

  return (
    <div className=" h-[83vh] max-w-130 mx-auto flex flex-cols justify-between mt-6 bg-white ">
      <div className="flex-1 flex flex-col justify-between gap-5 ">
        <div className="w-full max-w-sm">
          <h2 className="text-center text-3xl font-semibold">
            Select your role
          </h2>
          <div className="flex flex-col justify-between space-y-5 mt-15">
            {roles.map((role) => (
              <RoleCard
                key={role.title}
                {...role}
                selected={selected === role.title}
                onClick={() => setSelected(role.title)}
              />
            ))}
          </div>
        </div>
        <div className=" w-full pb-13 ">
          <Link
            className={`flex bg-[#25D366] mt-5 font-bold items-center justify-center w-full px-10 py-4 rounded-4xl shadow-[0_4px_4px_rgba(0,0,0,0.2)] text-white`}
            to="/setup/storefront"
          >
            {" "}
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RolePage;
