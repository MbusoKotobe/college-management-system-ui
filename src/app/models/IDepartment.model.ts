import { IFaculty } from '../models/IFaculty.model';
export interface IDepartment
{
    departmentId?: number;
    departmentName?: string;
    departmentDescription?: string;
    faculty?: IFaculty;
};
