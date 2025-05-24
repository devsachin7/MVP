import { IUser } from "../api/user.api";

export interface IParsedUser {
  name: string;
  email: string;
  permissions: string;
  zone: string;
}

export interface IAddUserFormFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobileNumber: string;
  title: string;
  isActive: boolean;
  zoneRoles: {
    "1": string;
    "2": string;
    "3": string;
    "4": string;
    "5": string;
    "6": string;
  };
  isProjectRole: boolean;
  projectRoleId: string;
  systemRole: string;
  profilePhotoUrl?: string;
}

export const parseUserFields = (users: IUser[]): IParsedUser[] => {
  return users.map((user: IUser) => ({
    name: user.fullName,
    email: user.email,
    permissions: user?.projectRoleName ?? '',
    zone: user.zoneRoles.map(({ zoneName }) => zoneName).join(", "),
  }));
};

export const parseUserPayloadFields = (user: IAddUserFormFields, projectId: number): IUser => {
  const { zoneRoles,projectRoleId, ...rest } = user;
  const parsedZoneRoles = Object.entries(zoneRoles)
  .filter(([_, value]) => value)
  .map(([key, value]) => ({
    zoneId: Number(key),
    projectRoleId: Number(value),
  }));

return {
  ...rest,
  zoneRoles: parsedZoneRoles,
  fullName: `${rest.firstName} ${rest.lastName}`,
  projectId: projectId,
  projectRoleId: Number(projectRoleId),
};
};
