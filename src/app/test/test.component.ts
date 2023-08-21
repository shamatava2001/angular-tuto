import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  id = new Number();

  constructor(route : ActivatedRoute){
    this.id = route.snapshot.params['id'];
    console.log(route);
  }
}
