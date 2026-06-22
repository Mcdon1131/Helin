import { useState } from "react";
import PhoneInput from "react-phone-number-input/input";
import { getCountries, getCountryCallingCode } from "react-phone-number-input";
import en from "react-phone-number-input/locale/en";

import * as Flags from "country-flag-icons/react/3x2";

export default function PhoneInputField() {
  const [value, setValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("NG");

  const countries = getCountries();

  const handleCountryChange = (e) => {
    const country = e.target.value;

    setSelectedCountry(country);

    const callingCode = getCountryCallingCode(country);

    setValue(`+${callingCode}`);
  };

  const FlagComponent = ({ country }) => {
    const Flag = Flags[country];

    if (!Flag) {
      return (
        <span className="w-6 h-6 bg-gray-200 rounded animate-pulse" />
      );
    }

    return (
      <div className="w-4 h-4 rounded-full overflow-hidden flex items-center justify-center shadow-sm">
        <Flag className="w-full h-full object-cover scale-135" />
      </div>
    );
  };

  return (
    <div className="flex items-center gap-3 w-full max-w-md font-sans">

      <div className="relative flex items-center shadow-md border border-gray-200 rounded-[12px_0_0_12px] px-3 py-4 bg-white transition focus-within:ring-2 focus-within:ring-black/5 ">

        <div className="flex items-center gap-2 pointer-events-none text-base font-medium text-gray-800">
          <FlagComponent country={selectedCountry} />

          <span className="text-gray-400">
            +{getCountryCallingCode(selectedCountry)}
          </span>
        </div>

        <select
          value={selectedCountry}
          onChange={handleCountryChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        >
          {countries.map((country) => (
            <option key={country} value={country}>
              {en[country]} (+{getCountryCallingCode(country)})
            </option>
          ))}
        </select>

      </div>

      <div className="flex-1 text-gray-400">
        <PhoneInput
          country={selectedCountry}
          value={value}
          onChange={setValue}
          placeholder="Phone Number"
          className="w-full border shadow-[0_4px_6px_rgba(0,0,0,0.1)] border-gray-200 rounded-[0_12px_12px_0] px-4 py-4 bg-white text-base text-gray-800 placeholder:text-gray-490 outline-none focus:border-gray-400 focus:ring-0 transition"
        />
      </div>

    </div>
  );
}