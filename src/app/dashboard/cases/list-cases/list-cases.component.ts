import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CasesService } from './../../../services/cases.service';
import * as fs from 'file-saver';

@Component({
  selector: 'app-list-cases',
  templateUrl: './list-cases.component.html',
  styleUrls: ['./list-cases.component.scss']
})
export class ListCasesComponent implements OnInit {
  cases:any=[]
  p: number = 1;
  constructor(private toast:ToastrService,private casesService:CasesService) { }

  ngOnInit(): void {
    this.getAllCases()
  }
getAllCases(){
  this.casesService.getAllCases().subscribe(res=>{
    this.cases=res
  })
}
delete(id:any){
  this.casesService.deleteCases(id).subscribe(res=>{
    this.getAllCases()
      this.toast.success('Best practice a été ajouté avec succès', 'Notification');

  })
}
//excel button click functionality
exportExcel() {
  import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.cases); // Sale Data
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "cases");
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