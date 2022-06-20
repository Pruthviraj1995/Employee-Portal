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
  });
  const [isError, setIsError] = useState(false);

  const handleOnChange = event => {
    const { value, name } = event.target;
    setEData({ ...eData, [name]: value });
    setIsError(false);
  };

  const handleCreate = () => {
    const { fname, lname, email, role } = eData;
    if (fname && lname && email && role) {
      const newEmployeeList = [
        ...employeeList,
        { id: `${eData.fname}01`, ...eData },
      ];
      setEData({
        fname: '',
        lname: '',
        email: '',
        role: '',
      });
      handleToggle();
      dispatch(
        updateEmployeeList({
          employeeList: newEmployeeList,
        }),
      );
    } else {
      setIsError(true);
    }
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
              required
            />
            <br />
          </div>
        ))}
        {isError && (
          <span className="text-danger p-1">Please Fill all the Fields</span>
        )}
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
