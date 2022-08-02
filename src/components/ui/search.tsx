import React from 'react';

type SearchProps = { label: string } & React.HTMLProps<HTMLInputElement>;

const Search = ({ label, ...props }: SearchProps) => {
  return (
    <div>
      <label htmlFor={label}>
        <b>{label}</b>{' '}
      </label>
      <input type="search" id={label} {...props} />
    </div>
  );
};

export default Search;
