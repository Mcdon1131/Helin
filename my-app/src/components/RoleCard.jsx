import { Check } from "lucide-react";

const RoleCard = ({ title, description, image, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        p-4 pb-8
        border
        rounded-xl
        shadow-md
        text-left
        w-full
        transition-all

        ${selected ? "border-[#25D366]" : "border-gray-300"}
      `}
    >
      {/* Check circle */}
      <div className="flex justify-end w-full">
        <span
          className={`
            inline-flex
            items-center
            justify-center
            w-5
            aspect-square
            rounded-full
            border-2
            border-[#25D366]

            ${selected ? "bg-[#25D366]" : "bg-white"}
          `}
        >
          <Check
            className={`
              h-full
              ${selected ? "stroke-white" : "hidden"}
            `}
          />
        </span>
      </div>

      {/* Content */}
      <div className="flex justify-between gap-5">
        <div className="relative h-20 aspect-square rounded-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col gap-1">
          <h2 className="text-2xl font-semibold">{title}</h2>

          <p className="text-sm font-medium">{description}</p>
        </div>
      </div>
    </button>
  );
};

export default RoleCard;
