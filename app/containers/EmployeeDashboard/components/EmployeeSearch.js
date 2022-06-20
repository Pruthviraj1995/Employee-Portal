import React, { useState, useEffect } from 'react';
import { Input } from 'reactstrap';
import { array } from 'prop-types';

export const EmployeeSearch = ({ employeeList }) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchList, setSearchList] = useState([]);

  const handleSearch = event => {
    const { value } = event.target;
    setSearchValue(value);
  };

  useEffect(() => {
    if (searchValue) {
      const filterList = employeeList.filter(
        ({ fname, lname }) =>
          (fname && fname.toLowerCase().includes(searchValue.toLowerCase())) ||
          (lname && lname.toLowerCase().includes(searchValue.toLowerCase())),
      );
      setSearchList(filterList);
    } else {
      setSearchList([]);
    }
  }, [searchValue]);

  return (
    <div>
      <Input
        type="text"
        placeholder="Enter Employee Name"
        onChange={handleSearch}
        value={searchValue}
      />
      {searchList.length > 0 &&
        searchList.map(({ id, fname, lname }) => (
          <div key={id} className="p-1 w-50">
            {fname} {lname}
          </div>
        ))}
    </div>
  );
};

EmployeeSearch.propTypes = {
  employeeList: array,
};
