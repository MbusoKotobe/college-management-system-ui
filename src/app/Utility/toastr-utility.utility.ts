import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({ providedIn: 'root' })
export class ToastrUtility{
    
    public constructor(private toastr: ToastrService)
    {}

    public showtoastrError(message: string, title: string)
    {
        this.toastr.error(message, title);
    }

    public showtoastrSuccess(message: string, title: string)
    {
        this.toastr.success(message, title);
    }
}