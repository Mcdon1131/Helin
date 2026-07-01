import { useState } from "react";
import creator from "../../src/assets/creator.webp";
import merchant from "../../src/assets/merchant.webp";
import RoleCard from "../../src/components/RoleCard";
import { useNavigate } from "react-router-dom";
function RolePage() {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
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
        <div className="w-full pb-12.5 text-white font-semibold">
          <button
            onClick={() => navigate("/setup/storefront")}
            class="w-full py-4 mt-5 bg-[#25D366] shadow-lg rounded-full hover:bg-emerald-600 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default RolePage;
