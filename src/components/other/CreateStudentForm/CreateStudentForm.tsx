import React, { useState } from 'react';
import "./CreateStudentForm.css"
import { CreateAction } from '../../../actions';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { useLocation, useNavigate } from "react-router-dom";
import { StudentResponse } from '../../../types';

export interface CreateStudentFormProps {
}

export const CreateStudentForm: React.FC<CreateStudentFormProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const navigate = useNavigate();
  const studentData = location.state as StudentResponse
  const [formData, setFormData] = useState({
    name: studentData?.name ?? "",
    age: studentData?.age ?? "",
    studentClass: studentData?.studentClass?? "",
    phoneNumber: studentData?.phoneNumber?? "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (studentData?.id) {
      await dispatch(CreateAction.updateStudentAction(formData, studentData.id));
      navigate(`/search`);
    } else {
      await dispatch(CreateAction.createStudentAction(formData));
    }
  };
  

  return (
    <div className="container mt-5">
      <span className="font-size-20">Fill this Student Form</span>
      <form onSubmit={handleSubmit}>
        <div className='w-100 d-flex gap-20 mt-5'>
          <div className="w-50 d-flex align-items-start flex-column">
            <label htmlFor="name" className="form-label margin-left-4px">
              Enter your name
              <span className="good-red"> *</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              autoComplete="off"
              required
            />
          </div>

          <div className="w-50 d-flex align-items-start flex-column">
            <label htmlFor="age" className="form-label margin-left-4px">
              Enter your age
              <span className="good-red"> *</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className='w-100 d-flex gap-20 mt-5'>
          <div className="w-50 d-flex align-items-start flex-column">
            <label htmlFor="age" className="form-label margin-left-4px">
              Enter your class
              <span className="good-red"> *</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="studentClass"
              name="studentClass"
              value={formData.studentClass}
              onChange={handleChange}
              placeholder="Enter your class"
              autoComplete="off"
              required
            />
          </div>

          <div className="w-50 d-flex align-items-start flex-column">
            <label htmlFor="age" className="form-label margin-left-4px">
              Enter your phone number
              <span className="good-red"> *</span>
            </label>
            <input
              type="number"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              autoComplete="off"
              min="1000000000"
              max="9999999999"
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary submit-button-wrapper mt-5">
         {studentData?.id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};
