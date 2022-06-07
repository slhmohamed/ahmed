import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StatusService } from 'src/app/services/status.service';
import * as fs from 'file-saver';

@Component({
  selector: 'app-list-status',
  templateUrl: './list-status.component.html',
  styleUrls: ['./list-status.component.scss']
})
export class ListStatusComponent implements OnInit {
  p: any = 1;
  status:any=[]
   constructor(private toast:ToastrService,private statusService:StatusService) { }

  ngOnInit(): void {
    
    this.getAllStatus()
  }
  getAllStatus(){
    this.statusService.getAllStatus().subscribe(res=>{
      this.status=res
       
      
    })
  }
  
  delete(id:any){
    this.statusService.deleteStatus(id).subscribe(res=>{
      this.getAllStatus()
        this.toast.success('Status a été ajouté avec succès', 'Notification');

    })
  }
 

 //excel button click functionality
 exportExcel() {
  import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.status); // Sale Data
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "status");
  });
}
saveAsExcelFile(buffer: any, fileName: string): void {
  import("file-saver").then(FileSaver => {
    let EXCEL_TYPE =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    let EXCEL_EXTENSION = ".xlsx";
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    fs.saveAs.saveAs(
      data,
      fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
    );
  });
}
 
}