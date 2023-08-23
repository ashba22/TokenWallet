import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthService } from '../service/auth.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-user',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserComponent implements AfterViewInit {

  constructor(private builder: FormBuilder, private service: AuthService, private dialog: MatDialog) {
    this.LoadUser();
  }
  userlist: any;
  dataSource: any;
  userCount: any;
  tokensCount: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {

  }




  LoadUser() {
    this.service.getAll().subscribe(res => {
      this.userlist = res;
      this.dataSource = new MatTableDataSource(this.userlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.userCount = this.dataSource.data.length;
      this.tokensCount = this.dataSource.data.map((t: any) => t.tokens).reduce((acc: any, value: any) => acc + value, 0);
    });
    // count the number of users using dataSource length
 

  }
  displayedColumns: string[] = ['username', 'name', 'status', 'tokens'];



}
