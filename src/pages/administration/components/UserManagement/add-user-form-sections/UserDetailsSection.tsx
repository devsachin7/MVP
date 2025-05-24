import React from "react";
import FormInput from "../../../../../components/form-components/FormInput";

const UserDetailsSection: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
    <FormInput name="firstName" label="First Name" placeholder="Enter first name" className="flex-1" required />
    <FormInput name="lastName" label="Last Name" placeholder="Enter last name" className="flex-1" required />
    <FormInput name="email" label="Email" placeholder="Enter email" className="flex-1" required />
    <FormInput name="password" label="Password" placeholder="Enter password" className="flex-1" />
    <FormInput name="mobileNumber" label="Phone" placeholder="Enter mobileNumber" className="flex-1" />
    <FormInput name="title" label="Title" placeholder="Enter title" className="flex-1" />
  </div>
);

export default UserDetailsSection; 