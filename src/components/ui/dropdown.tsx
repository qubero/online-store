import React from 'react';

type DropdownProps = { options: string[] } & React.HTMLProps<HTMLSelectElement>;

const Dropdown = ({ options, ...props }: DropdownProps) => {
  return (
    <select {...props}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
