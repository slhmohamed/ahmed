import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SeviritiesService } from './../../../services/servities.service';
import * as fs from 'file-saver';

@Component({
  selector: 'app-list-servitie',
  templateUrl: './list-servitie.component.html',
  styleUrls: ['./list-servitie.component.scss']
})
export class ListServitieComponent implements OnInit {
  sev:any=[]
  search=''
  constructor(private toast:ToastrService,private sevService:SeviritiesService) { }

 ngOnInit(): void {
   
   this.getAllStatus()
 }
 
 searchM(){
 
    
  console.log(this.search);
  this.sev.array.forEach((element:any) => {
    if((element.Name_SV.indexOf!=-1) ){
      this.sev.push(element)

    }
  });
  
}
 getAllStatus(){
   this.sevService.getAllServities().subscribe(res=>{
     this.sev=res
      
     
   })
 }
 
 delete(id:any){
   this.sevService.deleteServities(id).subscribe(res=>{
     this.getAllStatus()
       this.toast.success('Sevirities a été ajouté avec succès', 'Notification');

   })
 }
 //excel button click functionality
 exportExcel() {
   import("xlsx").then(xlsx => {
       const worksheet = xlsx.utils.json_to_sheet(this.sev); // Sale Data
       const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
       const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
       this.saveAsExcelFile(excelBuffer, "nodes");
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