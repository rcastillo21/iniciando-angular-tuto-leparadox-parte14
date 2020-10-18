import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { User } from 'src/app/common/interfaces';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'parte14';

  constructor(
    private api: ApiService
  ){}

  ngOnInit(){
    this.api.getLista().subscribe(datos => this.datos = datos);
  }
  datos: User[] = [];

  page_size: number = 10;
  page_number: number = 1;
  page_SizeOptions = [5, 10, 25, 100];

  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;

  }
}
