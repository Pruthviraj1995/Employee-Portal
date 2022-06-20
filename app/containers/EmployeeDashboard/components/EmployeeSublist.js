import React from 'react';
import { array } from 'prop-types';

import { EmployeeRemove } from './EmployeeRemove';

export const EmployeeSubList = ({ employeeList }) => (
  <div className="pt-1">
    {employeeList.map(({ id, fname, lname, email, role }) => (
      <div className="d-flex">
        <div className="pt-1">&#8226;</div>
        <div key={id} className="d-flex flex-column">
          <b className="p-1">
            {fname} {lname}
          </b>
          <div className="d-flex">
            <div className="p-1 pr-3 width-200">{email}</div>
            <div className="p-1 pr-3 width-200">{role}</div>
            <EmployeeRemove {...{ employeeList, employeeId: id }} />
          </div>
          <br />
        </div>
      </div>
    ))}
  </div>
);

EmployeeSubList.propTypes = {
  employeeList: array,
};
