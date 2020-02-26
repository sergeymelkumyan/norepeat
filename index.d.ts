import * as moment from 'moment';

declare module 'moment' {
    interface Moment {
        datesFormatter(star: any, end: any, lang: string): string;
        dateFormatter(date: any, lang: string): string;
    }
}

export = moment;
