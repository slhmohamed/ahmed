import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BestService } from './../../../services/bestPractice.service';
import * as fs from 'file-saver';

@Component({
  selector: 'app-list-best-practice',
  templateUrl: './list-best-practice.component.html',
  styleUrls: ['./list-best-practice.component.scss']
})
export class ListBestPracticeComponent implements OnInit {
  basts:any=[]
  p: number = 1;
  constructor(private toast:ToastrService,private bestService:BestService,private best:BestService) { }

  ngOnInit(): void {
    this.getAllBest()
  }
getAllBest(){
  this.best.getAllBest().subscribe(res=>{
    this.basts=res
  })
}
visualise(url:any){
  window.open(url, "_blank");

}


open(url:any){
  window.open(url, "_blank");

}
delete(id:any){
  this.bestService.deleteBest(id).subscribe(res=>{
    this.getAllBest()
      this.toast.success('Best practice a été ajouté avec succès', 'Notification');

  })
}
//excel button click functionality
exportExcel() {
  import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.basts); // Sale Data
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "basts");
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