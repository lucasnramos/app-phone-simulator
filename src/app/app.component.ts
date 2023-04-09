import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Observable, take } from 'rxjs';
import { App } from './models/app.model';
import { AppService } from './services/app-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appList$: Observable<Array<App>>;
  isLoading = true;

  @ViewChild(MatPaginator)
  paginator: MatPaginator = {} as MatPaginator;

  dataSource: MatTableDataSource<App>;

  obs: any;

  constructor(
    private appService: AppService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.appList$ = this.appService.apps;
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
    this.appList$.pipe(take(1)).subscribe((data) => {
      this.dataSource.data = data;
      this.isLoading = false;
    });
  }
}
