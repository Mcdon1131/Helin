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
    <div className="min-h-screen flex justify-center mt-[24px] bg-white">
      <div className="w-full max-w-sm">
        <h2 className="text-center text-3xl font-semibold">Select your role</h2>
        <div className="flex flex-col space-y-5 mt-15">
          {roles.map((role) => (
            <RoleCard
              key={role.title}
              {...role}
              selected={selected === role.title}
              onClick={() => setSelected(role.title)}
            />
          ))}
        </div>
        <Link
          className={`flex items-center justify-center w-full px-10 py-3 rounded-4xl shadow-[0_4px_4px_rgba(0,0,0,0.3)] bg-[#00ce1b] mt-19 text-white`}
          to="/setup/storefront"
        >
          {" "}
          Continue
        </Link>
      </div>
    </div>
  );
}

export default RolePage;
