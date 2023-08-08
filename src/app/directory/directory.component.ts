import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})

export class DirectoryComponent {
  ninja:string ='';

  constructor(private route: ActivatedRoute){
    this.ninja = route.snapshot.params['ninja']; //grab ninja parameter value
    // console.log(route.snapshot.params);
  }
}
