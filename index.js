// function shadowizard(options) {
//     options = options * 2
// }


// module.exports.shadowizard = shadowizard;



'use strict';

if (typeof require === 'function') {
    var moment = require('moment');
}

moment.fn.datesFormatter = function (start, end) {
    // startDate
    let sD = {
        y: this.dateFormatter(start, 'YYYY'),
        m: this.dateFormatter(start, 'MMM'),
        d: this.dateFormatter(start, 'DD'),
        h: this.dateFormatter(start, 'HH'),
        mn: this.dateFormatter(start, 'mm')
    };
    // endDate
    let eD = {
        y: this.dateFormatter(end, 'YYYY'),
        m: this.dateFormatter(end, 'MMM'),
        d: this.dateFormatter(end, 'DD'),
        h: this.dateFormatter(end, 'HH'),
        mn: this.dateFormatter(end, 'mm')
    };
    let startDateFormat;
    let endDateFormat;

    if (sD.y === eD.y) { // years are equal
        if (sD.m === eD.m) { // months are equal
            if (sD.d === eD.d) { // days are equal
                if (sD.h === eD.h && sD.mn === eD.mn) { // time is equal
                    startDateFormat = 'MMM DD ';
                    endDateFormat = ', YYYY';
                } else { // time is different
                    startDateFormat = 'MMM DD, HH:mm - ';
                    endDateFormat = 'HH:mm, YYYY';
                }
            } else { // days are different
                if (sD.h === eD.h && sD.mn === eD.mn) { // time is equal
                    startDateFormat = 'MMM DD - ';
                    endDateFormat = 'DD, YYYY';
                } else { // time is different
                    startDateFormat = 'MMM DD, HH:mm - ';
                    endDateFormat = 'DD, HH:mm, YYYY';
                }
            }
        } else { // months are different
            if (sD.h === eD.h && sD.mn === eD.mn) { // time is equal
                startDateFormat = 'MMM DD - ';
                endDateFormat = 'MMM DD, YYYY';
            } else { // time is different
                startDateFormat = 'MMM DD, HH:mm - ';
                endDateFormat = 'DD, HH:mm, YYYY';
            }
        }
    } else { // years are different
        if (sD.h === eD.h && sD.mn === eD.mn) { // time is equal
            startDateFormat = 'MMM DD, YYYY - ';
            endDateFormat = 'MMM DD, YYYY';
        } else { // time is different
            startDateFormat = 'MMM DD, YYYY, HH:mm - ';
            endDateFormat = 'MMM DD, YYYY, HH:mm';
        }
    }

    return [this.dateFormatter(start, startDateFormat) + this.dateFormatter(end, endDateFormat)];
}
