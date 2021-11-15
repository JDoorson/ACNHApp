import { Pipe, PipeTransform } from '@angular/core'

/**
 * Take a string in the following format:
 *  September 21st
 * And return HTML which superscripts the final two characters.
 * Usage:
 *  value | superscriptDate
 * Example:
 *  {{ "September 21st" | superscriptDate }}
 *  returns: September 21<sup>st</sup>
 */
@Pipe({name: 'superscriptDate'})
export class SuperscriptDatePipe implements PipeTransform {
    transform(value: string) {
        return `${value.slice(0, -2)}<sup>${value.slice(-2)}</sup>`;
    }
}