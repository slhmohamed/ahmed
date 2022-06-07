import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActionService } from './../../../services/action.service';
import * as fs from 'file-saver';

@Component({
  selector: 'app-list-action',
  templateUrl: './list-action.component.html',
  styleUrls: ['./list-action.component.scss']
})
export class ListActionComponent implements OnInit {
  actions:any=[]
  role: string | null;
  constructor(private toast:ToastrService,private actionService:ActionService) { }

  ngOnInit(): void {
    
    this.getAllAction()
  }
  getAllAction(){
    this.actionService.getAllAction().subscribe(res=>{
      this.actions=res
       
      
    })
  }
  delete(id:any){
    this.actionService.deleteAction(id).subscribe(res=>{
      this.getAllAction()
        this.toast.success('Action a été ajouté avec succès', 'Notification');

    })
  }


//excel button click functionality
exportExcel() {
  import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.actions); // Sale Data
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "actions");
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