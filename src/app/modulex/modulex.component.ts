import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { IModule } from '../models/IModule.model';
import {ToastrUtility} from "../Utility/toastr-utility.utility";
import {ModuleService} from "../services/module.service";


@Component({
  selector: 'app-modulex',
  templateUrl: './modulex.component.html',
  styleUrls: ['./modulex.component.css']
})
export class ModulexComponent implements OnInit {

  modules: Array<IModule> = new Array<IModule>();

  moduleForm = new FormGroup(
    {
      moduleId: new FormControl(""),
      moduleName: new FormControl(""),
      moduleDescription: new FormControl("")
    });

  editModuleForm = new FormGroup(
    {
      moduleId: new FormControl(""),
      moduleName: new FormControl(""),
      moduleDescription: new FormControl("")
    }
  );

  modulex: IModule =
    {
      moduleId: "",
      moduleName: "",
      moduleDescription: ""
    }

  moduleToUpdate: IModule = {
    moduleId: "",
    moduleName: "",
    moduleDescription: ""
  }

  constructor(private moduleService: ModuleService, private toastr: ToastrUtility) {
  }

  ngOnInit(): void {
    this.getModules();
  }


  saveModulex(modulex: IModule): void {
    this.moduleService.addModulex(modulex).subscribe(
      {
        error: (error) => {
          this.toastr.showtoastrError(error, "Request Status");
          console.log(error);
        },
        complete: () => this.toastr.showtoastrSuccess("Save Request Successful.", "Request Status")
      });

    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }

  getModulex(moduleId: string): void {
    this.moduleService.getModulex(moduleId).subscribe(
      {
        next: (respoonse: IModule) => this.modulex = respoonse,
        error: (error: any) => console.error(error),
        complete: () => console.info("Fetch Request Successful.")
      });

    setTimeout(() => {

    }, 1500);
  }
  getModules(): void
  {
    this.moduleService.getModules().subscribe(
      {
        next: (response: IModule[]) => this.modules = response,
        error: (error: any) => console.error(error),
        complete: () => console.info("Fetch modules Request Successful.")
      });

    setTimeout(() => {

    }, 1500);
  }

  removeModulex(modulex: IModule): void
  {
    this.moduleService.removeModulex(modulex.moduleId).subscribe(
      {
        error: (error: any) => this.toastr.showtoastrError(error, "Request Status"),
      });

    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }

  showCreateModuleModal(): void {
    document.getElementById("createModuleModal")!.style.display = "block";
  }

  closeCreateModuleModal(): void {
    document.getElementById("createModuleModal")!.style.display = "none";
  }

  showEditModuleModal(modulex: IModule): void {
    this.moduleToUpdate = modulex;
    document.getElementById("editModuleModal")!.style.display = "block";
    this.setModulex(modulex);
    this.setUpModuleModal(modulex);
  }

  closeEditModuleModal(): void {
    document.getElementById("editModuleModal")!.style.display = "none";
  }

  submitModulex(): void {
    this.modulex.moduleId = this.moduleForm.value.moduleId!;
    this.modulex.moduleName = this.moduleForm.value.moduleName!;
    this.modulex.moduleDescription = this.moduleForm.value.moduleDescription!;
    this.saveModulex(this.modulex);
  }
  
  submitEditModuleForm(): void
  {
    this.moduleToUpdate.moduleName = this.editModuleForm.value.moduleName!;
    this.moduleToUpdate.moduleDescription = this.editModuleForm.value.moduleDescription!;
    this.saveModulex(this.moduleToUpdate);
  }
  
  deleteModulex($event: any, modulex: IModule): void {
    event?.stopPropagation();
    this.removeModulex(modulex);
  }

  private setUpModuleModal (modulex: IModule): void {
    console.log(modulex);
    this.editModuleForm.patchValue({
      moduleId: modulex.moduleId,
      moduleName: modulex.moduleName,
      moduleDescription: modulex.moduleDescription,
    });
  }

  private setModulex (modulex: IModule): void {
    this.modulex.moduleId = modulex.moduleId;
    this.modulex.moduleName = modulex.moduleName;
    this.modulex.moduleDescription = modulex.moduleDescription;
  }
}



