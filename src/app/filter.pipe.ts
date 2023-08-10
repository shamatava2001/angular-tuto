import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ninjas: any, term: any): any {
    // check if search term is undefined
    if(term === undefined) return ninjas;

    // // return updated ninjas array
    return ninjas.filter((ninja:any)=>{
      return ninja.name.toLowerCase().includes(term.toLowerCase());
    })
    // console.log(ninjas[0]);
    // return ninjas;
  }

}
