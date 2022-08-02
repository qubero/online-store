import React from 'react';

type CheckboxProps = { label: string } & React.HTMLProps<HTMLInputElement>;

const Checkbox = ({ label, ...props }: CheckboxProps) => {
  return (
    <div>
      <input type="checkbox" id={label} {...props} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Checkbox;
