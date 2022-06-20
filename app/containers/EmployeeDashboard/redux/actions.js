import { UPDATE_EMPLOYEE_LIST } from './constants';

export const updateEmployeeList = ({ employeeList }) => ({
  type: UPDATE_EMPLOYEE_LIST,
  employeeList,
});
