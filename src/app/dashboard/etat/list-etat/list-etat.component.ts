import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EtatService } from 'src/app/services/etat.service';
import * as fs from 'file-saver';

@Component({
  selector: 'app-list-etat',
  templateUrl: './list-etat.component.html',
  styleUrls: ['./list-etat.component.scss']
})
export class ListEtatComponent implements OnInit {
  etats:any=[]
   constructor(private toast:ToastrService,private etatService:EtatService) { }

  ngOnInit(): void {
    
    this.getAllEtat()
  }
  getAllEtat(){
    this.etatService.getAllEtat().subscribe(res=>{
      this.etats=res
       
      
    })
  }

  delete(id:any){
    this.etatService.deleteEtat(id).subscribe(res=>{
      this.getAllEtat()
        this.toast.success('Etat a été ajouté avec succès', 'Notification');

    })
  }
 

 //excel button click functionality
 exportExcel() {
  import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.etats); // Sale Data
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