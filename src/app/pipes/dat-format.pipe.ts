import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datFormat',
  standalone: true
})
export class DatFormatPipe implements PipeTransform {

  transform(value:any) {
    const formatedDate = new Date(value).toLocaleString('en-US', {
      day:'2-digit',
      month:'2-digit',
      year:'numeric',
      second:'2-digit',
      hour:'2-digit',
      minute:'2-digit'
    })
    return formatedDate;
  }

}
