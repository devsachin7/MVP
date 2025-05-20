import { apiService } from "../services/api";
import { ApiResponse } from "../types/api";
import { PATHS } from "./paths";

export interface IRole {
    id:             number;
    name:           string;
    isZoneSpecific: boolean;
    source:         string;
}

export interface IProjectWithZones {
    projectId:   number;
    projectName: string;
    zones:       IZone[];
}

export interface IZone {
    id:       number;
    zoneName: string;
}

export interface IUser {
  id?: string;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  title: string;
  mobileNumber?: string;
  systemRole: string;
  isActive: boolean;
  profilePhotoUrl?: string;
  projectId: number;
  projectName?: string;
  projectRoleId: number;
  projectRoleName?: string;
  zoneRoles: IZoneRole[];
}

export interface IZoneRole {
  zoneId: number;
  zoneName?: string;
  projectRoleId: number;
  projectRoleName?: string;
}

export const masterData = {
  getProjectWithZones: (): Promise<ApiResponse<IProjectWithZones[]>> => {
    return apiService.get<IProjectWithZones[]>(PATHS.getProjectWithZones);
  },
  getRoles: (): Promise<ApiResponse<IRole[]>> => {
    return apiService.get<IRole[]>(PATHS.getRoles);
  },
};

export const userManagementApi = {
  getUsers: (): Promise<ApiResponse<IUser[]>> => {
    return apiService.get<IUser[]>(PATHS.getUsers);
  },
  addUsers: (payload: IUser): Promise<ApiResponse<any>> => {
    return apiService.post<IUser>(PATHS.getUsers, payload);
  }
};
