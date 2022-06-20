import React from 'react';
import { array } from 'prop-types';

import { EmployeeSubList } from './EmployeeSublist';

export const EmployeeList = ({ employeeList }) => (
  <div>
    <h4 className="text-success">Employee List</h4>
    <EmployeeSubList {...{ employeeList }} />
  </div>
);

EmployeeList.propTypes = {
  employeeList: array,
};
