import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { RiskArea } from '../../classes/risk-area';

@Component({
  selector: 'app-list-risk-area',
  templateUrl: './list-risk-area.component.html',
  styleUrls: ['./list-risk-area.component.scss']
})
export class ListRiskAreaComponent implements OnInit {

  public riskAreaArray: RiskArea[] = [
    {
      name: 'Localização 1',
      center: {
        latitude: -19.939165,
        longitude: -43.99911
      },
      area: [],
      situation: 0
    },
    {
      name: 'Localização 2',
      center: {
        latitude: 0,
        longitude: 0
      },
      area: [],
      situation: 1
    },
    {
      name: 'Localização 3',
      center: {
        latitude: 0,
        longitude: 0
      },
      area: [],
      situation: 2
    }
  ];

  constructor() { }

  displayedColumns: string[] = ['name', 'latitude', 'longitude', 'situation', 'options'];
  dataSource = new MatTableDataSource<RiskArea>(this.riskAreaArray);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter);
    };
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}