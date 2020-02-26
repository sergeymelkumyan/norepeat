'use strict';

if (typeof require === 'function') {
  var moment = require('moment');
}

moment.fn.dateFormatter = function (date, format, lang) {
  const dateMoment = moment(date);
  dateMoment.locale(lang || 'hy-am');
  // return dateMoment.format(format);
  return dateMoment.format(format).charAt(0).toUpperCase() + dateMoment.format(format).slice(1);
};

moment.fn.datesFormatter = function (start, end, lang) {
  lang = lang || 'hy-am';
  // startDate
  let sD = {
      y: this.dateFormatter(start, 'YYYY', lang),
      m: this.dateFormatter(start, 'MMM', lang),
      d: this.dateFormatter(start, 'DD', lang),
      h: this.dateFormatter(start, 'HH', lang),
      mn: this.dateFormatter(start, 'mm', lang)
  };
  // endDate
  let eD = {
      y: this.dateFormatter(end, 'YYYY', lang),
      m: this.dateFormatter(end, 'MMM', lang),
      d: this.dateFormatter(end, 'DD', lang),
      h: this.dateFormatter(end, 'HH', lang),
      mn: this.dateFormatter(end, 'mm', lang)
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
  return this.dateFormatter(start, startDateFormat, lang) + this.dateFormatter(end, endDateFormat, lang);
};

if (typeof module != 'undefined' && module.exports) {
  module.exports = moment;
}
