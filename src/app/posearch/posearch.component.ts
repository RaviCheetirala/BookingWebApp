import { Component, OnInit ,ViewChild} from '@angular/core';
import { BookingService } from '../services/booking.service';
import { PurchaseOrder } from '../model/purchaseorder';
import { ResultList,Result,AuditList } from '../model/resultobj';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-posearch',
  templateUrl: './posearch.component.html',
  styleUrls: ['./posearch.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class PosearchComponent implements OnInit {

  resultList: ResultList[];
  auditList: AuditList[];
  result:Result
  columnRows = ['Po Number', 'DC Number', 'Delivery Date', 'Vendor No','Status','Delivery Dock','Delivery Time'];
   columnsToDisplay=['poNo','dcNo','deliveryDate','vendorNo','status','deliveryDock','deliveryTime'];
   displayedColumns = ['oldDeliveryDate', 'oldDeliveryTime', 'changedBy','changedOn','reasonCode'];
  /* expandedElement: ResultList[]; */
  showAudit: boolean = false;
  showSearch: boolean = false;
  
  dataSource = new MatTableDataSource;
  dataSource1 = new MatTableDataSource; 
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
 @ViewChild(MatPaginator,{static: false}) paginator1: MatPaginator;
  
  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
     this.dataSource.paginator = this.paginator;
    // this.dataSource1.paginator = this.paginator1;
  }
 
  ngOnInit() {
    /* this.dataSource.paginator = this.paginator; */
  }
  constructor(public booking: BookingService) { }

  poNumber: string;
  dcNumber: string;
  vendorNumber : string;
  orderDate:string;
  deliveryDate:string;
  
  searchPO() {
    this.showAudit = false;
    this.booking.getPO(this.poNumber).subscribe(data => {
    //  this.op = JSON.parse(JSON.stringify(result));
    this.result= data;
    this.resultList=this.result.resultList;
    this.auditList = this.result.resultList[0].auditList;
    this.dataSource = new MatTableDataSource(data.resultList);
    this.dataSource.paginator = this.paginator;
  //this.dataSource1 = new MatTableDataSource(data.resultList[0].auditList);
   // this.dataSource1.paginator = this.paginator1;
    //this.dataSource = this.resultList;
    var parsed = this.result.resultList;
    
  if(this.resultList != null){
    this.showSearch = true;
  }else{
    this.showSearch = false;
  }
       /*  for(var x in parsed){ */

          

          /* this.auditList= [{oldDeliveryDock:parsed[x].auditList[x].oldDeliveryDock,oldDeliveryDate:parsed[x].auditList[x].oldDeliveryDate,
            oldDeliveryTime:parsed[x].auditList[x].oldDeliveryTime,changedBy:parsed[x].auditList[x].changedBy,
            changedOn:parsed[x].auditList[x].changedOn,reasonCode:parsed[x].auditList[x].reasonCode
            }]; */
         
          
       /*  } */
        console.log("AuditListObj"+ this.auditList);
        console.log("AuditList"+ this.auditList[0].oldDeliveryDate);
        console.log("datasource"+ this.dataSource);
    //this.auditList = this.result.resultList.auditlist[0];
    
    });
  }


  display(){
  if(this.showAudit){
    this.showAudit = false;
  }else {
    this.showAudit = true;
  }
   
  }

}
