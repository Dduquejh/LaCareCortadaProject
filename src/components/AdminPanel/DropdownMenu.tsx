import { useState } from "react";
import { FormActions } from "./FormActions";

interface DropdownMenuProps {
  name: string;
  type: "model" | "product" | "event" | "membership";
}

const DropdownMenu = ({ name, type }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    `Add ${name}`,
    `Modify ${name}`,
    `Delete ${name}`,
    `Add media ${name}`,
    `Delete media ${name}`,
  ];

  if (type === "model") {
    options.push(`Add achievements ${name}`);
    options.push(`Delete achievements ${name}`);
  }

  if (type === "membership") {
    options.pop();
    options.pop();
  }

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full sm:w-64 md:w-80 lg:w-80">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-full p-2 font-semibold text-white bg-sky-950 rounded-lg"
      >
        <span>{name}</span>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-slate-600 rounded-lg shadow-lg text-white font-semibold">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              className="w-full p-2 text-center hover:bg-slate-400  border-b-[1px] border-slate-400 rounder-lg hover:rounded-lg"
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {selectedOption && (
        <FormActions name={name} type={type} selectedOption={selectedOption} />
      )}
    </div>
  );
};

export default DropdownMenu;
