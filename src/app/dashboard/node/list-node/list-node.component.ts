import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NodeService } from 'src/app/services/node.service';
import * as fs from 'file-saver';

@Component({
  selector: 'app-list-node',
  templateUrl: './list-node.component.html',
  styleUrls: ['./list-node.component.scss']
})
export class ListNodeComponent implements OnInit {
  search=''
  nodes:any=[]
  role: string | null;
  constructor(private toast:ToastrService,private nodeService:NodeService) { }

  ngOnInit(): void {
    
    this.getAllNode()
  }
 
  getAllNode(){
    this.nodeService.getAllNode().subscribe(res=>{
      this.nodes=res
       
      
    })
  }
  searchM(){
 
    
    console.log(this.search);
    this.nodes.array.forEach((element:any) => {
      if((element.Node_Name.indexOf!=-1)||(element.Node_Name.indexOf!=-1)){
        this.nodes.push(element)

      }
    });
    
  }
  
  delete(id:any){
    this.nodeService.deleteNode(id).subscribe(res=>{
      this.getAllNode()
        this.toast.success('Node a été ajouté avec succès', 'Notification');

    })
  }
 
//excel button click functionality
exportExcel() {
  import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.nodes); // Sale Data
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