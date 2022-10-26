import {IModule} from "./IModule.model";

export interface ICourse
{
  courseId: string;
  courseName: string;
  courseDescription: string;
  modules: IModule [];

};
