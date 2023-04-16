import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable, Subject, take, takeUntil } from 'rxjs';
import { App } from './models/app.model';
import { AppService } from './services/app-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator)
  paginator: MatPaginator = {} as MatPaginator;

  appList$: Observable<Array<App>>;
  isLoading: boolean;
  dataSource: MatTableDataSource<App>;

  private destroy$: Subject<void>;

  constructor(
    private appService: AppService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.isLoading = true;
    this.destroy$ = new Subject();
    this.dataSource = new MatTableDataSource();
    this.appList$ = this.dataSource.connect();
  }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;

    this.appService.apps.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.dataSource.data = data;
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
