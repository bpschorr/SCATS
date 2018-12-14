import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'titleCase' })
export class TitleCasePipe implements PipeTransform {
    transform(value: string) {
        if (value) {
            return value.replace( /([A-Z])/g, ' $1' )
            .replace(/\b\w/g, first => first.toLocaleUpperCase());
        }
    }
}
