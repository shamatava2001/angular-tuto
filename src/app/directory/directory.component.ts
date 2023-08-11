import { Component} from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [LoggingService]
})

export class DirectoryComponent {
  ninjas = [
    {name:'minato', belt:'green'},
    {name:'kakashi', belt:'red'},
    {name:'obito', belt:'yellow'}
  ]

  term:any;
  constructor(private logger: LoggingService){
    console.log(logger);
  }

  logIt(){
    this.logger.log();
  }

}
