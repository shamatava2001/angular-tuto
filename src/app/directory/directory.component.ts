import { Component } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})

export class DirectoryComponent {
  show: boolean = true;
  classes = {

  }

  showPar(){
    this.show = !this.show;
  }

  changeClass(color: string){
    if(color === 'blue'){
      this.classes = {
        'blue': true,
        'yellow': false
      }
    } else {
      this.classes = {
        'blue': false,
        'yellow': true
      }
    }
  }

}
