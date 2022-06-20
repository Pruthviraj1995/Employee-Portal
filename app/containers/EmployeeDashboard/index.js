import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from 'components/Button';
import { useInjectReducer } from 'utils/injectReducer';
import { EmployeeList, EmployeeModal, EmployeeSearch } from './components';
import reducer from './redux/reducer';
import './styles.css';

export const EmployeeDashboard = () => {
  useInjectReducer({ key: 'mediaRecorderPage', reducer });
  const { employeeList } = useSelector(state => state.employeeDashboard);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(prev => !prev);

  return (
    <div>
      <EmployeeSearch {...{ employeeList }} />
      <Button {...{ onClick: handleToggle }}>+ Create Employee</Button>
      <EmployeeList {...{ employeeList }} />
      <EmployeeModal {...{ isOpen, employeeList, handleToggle }} />
    </div>
  );
};

export default EmployeeDashboard;
