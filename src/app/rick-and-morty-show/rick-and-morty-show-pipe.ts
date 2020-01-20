import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'transformDate'
})
export class CreatedDateTransformPipe implements PipeTransform {
    transform(date: string): number {
        const createdDate = + new Date(date);
        const todayDate = + new Date();
        const difference = todayDate - createdDate;
        const yearDiff = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
        return yearDiff;
    }
}
