import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Button,
} from 'reactstrap';
import { bool, array, func } from 'prop-types';

import { updateEmployeeList } from '../redux/actions';
import { InputFields } from '../constants';

export const EmployeeModal = ({ isOpen, employeeList, handleToggle }) => {
  const dispatch = useDispatch();

  const [eData, setEData] = useState({
    fname: '',
    lname: '',
    email: '',
    role: '',
    dob: '',
  });

  const handleOnChange = event => {
    const { value, name } = event.target;
    setEData({ ...eData, [name]: value });
  };

  const handleCreate = () => {
    const newEmployeeList = [
      ...employeeList,
      { id: `${eData.fname}01`, ...eData },
    ];
    dispatch(
      updateEmployeeList({
        employeeList: newEmployeeList,
      }),
    );
    handleToggle();
  };

  return (
    <Modal {...{ isOpen, backdrop: true, toggle: handleToggle }}>
      <ModalHeader toggle={handleToggle}>
        <h4>Create Employee</h4>
      </ModalHeader>
      <ModalBody>
        {InputFields.map(({ id, label, name, type, placeHolder }) => (
          <div key={id}>
            <Label>{label}</Label>
            <Input
              type={type || 'text'}
              name={name}
              value={eData[name]}
              onChange={handleOnChange}
              placeholder={placeHolder}
            />
            <br />
          </div>
        ))}
      </ModalBody>
      <ModalFooter>
        <Button type="button" onClick={handleCreate} className="secondary">
          Create
        </Button>
      </ModalFooter>
    </Modal>
  );
};

EmployeeModal.propTypes = {
  isOpen: bool,
  employeeList: array,
  handleToggle: func,
};
