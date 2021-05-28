import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LaudoDTO } from 'src/app/models/domain/laudo.dto';



@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.css']
})
export class TestTableComponent implements OnInit {

  displayedColumns: string[] = ['numeroMedidor', 'cn', 'cp', 'ci', 'ensaioRegistrador', 'ensaioMarchaVazio', 'acoes'];
  columnsToDisplay: string [] = ['numeroMedidor', 'cn', 'cp', 'ci', 'ensaioRegistrador', 'ensaioMarchaVazio', 'acoes'];
  resultsLength: any = 10;  
  
  dataSource: any [] = [
    { numeroMedidor: '1', CN: '10', CP: '15', CI: '01', registrador: 'APROVADO', marchaEmVazio: ''},
    { numeroMedidor: '1', CN: '', CP: '', CI: '', registrador: '', marchaEmVazio: ''},
    { numeroMedidor: '1', CN: '', CP: '', CI: '', registrador: '', marchaEmVazio: ''},
    { numeroMedidor: '1', CN: '', CP: '', CI: '', registrador: '', marchaEmVazio: ''},
    { numeroMedidor: '1', CN: '', CP: '', CI: '', registrador: '', marchaEmVazio: ''}
  ]
  pageSize = 5;  
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })  sort!: MatSort;
  
  constructor() { 
    
    
  }

  ngOnInit(): void {
   
  }

  openDialog(value: any){
    console.log(value);
  }

}
