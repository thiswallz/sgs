import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'subscribe' })
export class SubscribePipe implements PipeTransform {
  transform(value: boolean): string {
    return value === true ? 'Subscribed' : 'No subscribed';
  }
}
