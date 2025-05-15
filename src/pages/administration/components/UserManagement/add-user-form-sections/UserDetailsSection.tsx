import React from "react";
import { Control } from "react-hook-form";
import FormInput from "../../../../../components/form-components/FormInput";

interface UserDetailsSectionProps {
  // TODO: Type this properly with your form type
  control: Control<any>;
}

const UserDetailsSection: React.FC<UserDetailsSectionProps> = ({ control }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
    <FormInput name="firstname" label="First Name" placeholder="Enter first name" className="flex-1" required control={control} />
    <FormInput name="lastname" label="Last Name" placeholder="Enter last name" className="flex-1" required control={control} />
    <FormInput name="email" label="Email" placeholder="Enter email" className="flex-1" required control={control} />
    <FormInput name="password" label="Password" placeholder="Enter password" className="flex-1" control={control} />
    <FormInput name="phone" label="Phone" placeholder="Enter phone" className="flex-1" control={control} />
    <FormInput name="title" label="Title" placeholder="Enter title" className="flex-1" control={control} />
  </div>
);

export default UserDetailsSection; 