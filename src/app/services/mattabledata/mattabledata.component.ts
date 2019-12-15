import { Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BackendService } from '../backend.service'



@Component({
  selector: 'app-mattabledata',
  templateUrl: './mattabledata.component.html',
  styleUrls: ['./mattabledata.component.css']
})
export class MattabledataComponent implements OnInit {

  displayedColumns: string[] = ['SESSION_ID', 'CLS', 'ROLLNO', 'STD_NM', 'FATH_NM', 'PERCENT'];
  //dataSource: MatTableDataSource<any>;
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private myservice: BackendService) {}

  ngOnInit() {
    //this.dataSource = new MatTableDataSource(this.myservice.getData());
    return this.myservice.getData().subscribe(res => this.dataSource.data = res["0"]["data"]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


