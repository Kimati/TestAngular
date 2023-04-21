import { Component, OnInit } from '@angular/core';

export interface Telemetry{
  telemetryId:string;
  companyId:string;
  assetId:string;
  assetType:string;
  dateCreated:string;
  timeSeriesKey:string;
}

@Component({
  selector: 'app-test-mat-tables',
  templateUrl: './test-mat-tables.component.html',
  styleUrls: ['./test-mat-tables.component.scss']
})
export class TestMatTablesComponent implements OnInit {
  telemetriesData:Telemetry[] = new Array();
  tableColumns:string[] = [
    'telemetryId',
    'companyId',
    'assetId',
    'assetType',
    'dateCreated',
    'timeSeriesKey',
  ];

  columns = new Array();


  constructor() { 
    this.telemetriesData.push({telemetryId:"tel001",companyId:"comp001",assetId:"as001",assetType:"typeone",dateCreated:"01/10/2022",timeSeriesKey:"01102022"});
    this.telemetriesData.push({telemetryId:"tel002",companyId:"comp002",assetId:"as002",assetType:"typetwo",dateCreated:"01/10/2022",timeSeriesKey:"01102022"});
    this.telemetriesData.push({telemetryId:"tel003",companyId:"comp003",assetId:"as003",assetType:"typethree",dateCreated:"01/10/2022",timeSeriesKey:"01102022"});
    this.telemetriesData.push({telemetryId:"tel004",companyId:"comp004",assetId:"as004",assetType:"typefour",dateCreated:"01/10/2022",timeSeriesKey:"01102022"});
    this.telemetriesData.push({telemetryId:"tel005",companyId:"comp005",assetId:"as005",assetType:"typefive",dateCreated:"01/10/2022",timeSeriesKey:"01102022"});
    this.telemetriesData.push({telemetryId:"tel006",companyId:"comp006",assetId:"as006",assetType:"typesix",dateCreated:"01/10/2022",timeSeriesKey:"01102022"});
    this.telemetriesData.push({telemetryId:"tel007",companyId:"comp007",assetId:"as007",assetType:"typeseven",dateCreated:"01/10/2022",timeSeriesKey:"01102022"});
    this.telemetriesData.push({telemetryId:"tel008",companyId:"comp008",assetId:"as008",assetType:"typeone",dateCreated:"01/10/2022",timeSeriesKey:"01102022"});
    this.telemetriesData.push({telemetryId:"tel009",companyId:"comp009",assetId:"as009",assetType:"typeone",dateCreated:"01/10/2022",timeSeriesKey:"01102022"});
    this.telemetriesData.push({telemetryId:"tel010",companyId:"comp010",assetId:"as010",assetType:"typeone",dateCreated:"01/10/2022",timeSeriesKey:"01102022"});
    this.telemetriesData.push({telemetryId:"tel011",companyId:"comp011",assetId:"as011",assetType:"typeone",dateCreated:"01/10/2022",timeSeriesKey:"01102022"});
    this.telemetriesData.push({telemetryId:"tel012",companyId:"comp012",assetId:"as012",assetType:"typeone",dateCreated:"01/10/2022",timeSeriesKey:"01102022"});
    this.telemetriesData.push({telemetryId:"tel013",companyId:"comp013",assetId:"as013",assetType:"typeone",dateCreated:"01/10/2022",timeSeriesKey:"01102022"});
    this.telemetriesData.push({telemetryId:"tel014",companyId:"comp014",assetId:"as014",assetType:"typeone",dateCreated:"01/10/2022",timeSeriesKey:"01102022"});
    this.telemetriesData.push({telemetryId:"tel015",companyId:"comp015",assetId:"as015",assetType:"typeone",dateCreated:"01/10/2022",timeSeriesKey:"01102022"});
    
  }

  ngOnInit(): void {

  }



}
