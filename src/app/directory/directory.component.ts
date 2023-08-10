import { Component} from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})

export class DirectoryComponent {
  ninjas = [
    {name:'minato', belt:'green'},
    {name:'kakashi', belt:'red'},
    {name:'obito', belt:'yellow'}
  ]
  
  term:any;

}
