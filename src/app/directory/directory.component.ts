import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';
import { INinjas } from '../ninjas';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {
  ninjas: any;

  term: any;
  constructor(
    private logger: LoggingService,
    private dataService: DataService,
  ) {
    console.log(logger);
  }

  logIt() {
    this.logger.log();
  }

  ngOnInit(): void {
    this.dataService.getNinjas().subscribe((res) => (this.ninjas = res));
  }
}
