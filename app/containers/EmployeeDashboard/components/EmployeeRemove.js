/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { useDispatch } from 'react-redux';
import { array, string } from 'prop-types';

import { updateEmployeeList } from '../redux/actions';

export const EmployeeRemove = ({ employeeList, employeeId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    const updatedList = employeeList.filter(data => data.id !== employeeId);
    dispatch(
      updateEmployeeList({
        employeeList: updatedList,
      }),
    );
  };

  return (
    <div className="p-1 pr-3 width-200">
      <button
        type="button"
        onClick={() => handleRemove(employeeId)}
        className="border-0"
      >
        <span>&#10060;</span>
      </button>
    </div>
  );
};

EmployeeRemove.propTypes = {
  employeeList: array,
  employeeId: string,
};
