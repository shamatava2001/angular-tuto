import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'net-ninja';
  name = 'giga';
  show : boolean = true;
  childData : string = '';

  handleClick(e : any){
    console.log(e);
    this.show = !this.show;
  }

  handleCustomEvent(e:any){
    this.childData = e;
  }

  myObservable = new Observable((observer)=>{
    console.log('observable starts');
    observer.next('one');
    observer.next('two');
    observer.next('three');
  });

  ngOnInit(){
    this.myObservable.subscribe((val)=>{
      console.log(val);
    });
  }

}
