import {IModule} from "./IModule.model";

export interface Course
{
  courseId: string;
  courseName: string;
  courseDescription: string;
  modules: IModule [];

};
