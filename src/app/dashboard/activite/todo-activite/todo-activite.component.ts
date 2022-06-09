import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivitieService } from 'src/app/services/activites.service';
import { ModalService } from 'src/app/services/modal.service';
import * as fs from 'file-saver';

@Component({
  selector: 'app-todo-activite',
  templateUrl: './todo-activite.component.html',
  styleUrls: ['./todo-activite.component.scss']
})
export class TodoActiviteComponent implements OnInit {
  activites:any=[]
  p:number=1
    constructor(
      private toast:ToastrService,
      private activiteService:ActivitieService,
      private modalService: ModalService) { }
  
    ngOnInit(): void {
      this.getAllActivite()
    }
  getAllActivite(){
    this.activiteService.getAllActivites().subscribe(res=>{
      this.activites=res
    })
  }
  delete(id:any){
    this.activiteService.deleteActtivitie(id).subscribe(res=>{
      this.getAllActivite()
        this.toast.success('Activite a été ajouté avec succès', 'Notification');
  
    })
  }
  //excel button click functionality
  exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.activites); // Sale Data
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "activite");
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
  open(){
    this.modalService.open();
  }
  }