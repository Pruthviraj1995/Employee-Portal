import produce from 'immer';
import { UPDATE_EMPLOYEE_LIST } from './constants';

const mockEList = [
  {
    id: 1,
    fname: 'John',
    lname: 'Wick',
    email: 'john@gmail.com',
    role: 'Software Developer',
  },
  {
    id: 2,
    fname: 'Dan',
    lname: 'Abramov',
    email: 'dan@gmail.com',
    role: 'Software Tester',
  },
  {
    id: 3,
    fname: 'Chan',
    lname: 'Jang',
    email: 'chan@gmail.com',
    role: 'Software Engineer',
  },
  {
    id: 4,
    fname: 'Annie',
    lname: 'John',
    email: 'john@gmail.com',
    role: 'UI Designer',
  },
];

export const initialState = {
  employeeList: mockEList,
};

/* eslint-disable default-case, no-param-reassign */
const employeeDashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_EMPLOYEE_LIST:
        draft.employeeList = action.employeeList;
        break;
    }
  });

export default employeeDashboardReducer;
