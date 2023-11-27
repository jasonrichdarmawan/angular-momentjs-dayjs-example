import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import * as momentTz from 'moment-timezone';

@Component({
  selector: 'app-momentjs',
  templateUrl: './momentjs.page.html',
  styleUrls: ['./momentjs.page.scss']
})
export class MomentjsPage implements OnInit {
  moment = moment;

  startTime: string;
  startDateToString: string;
  startDateFormatYYYYMMDD: string;
  startDateFormatMMMDo: string;
  startDateFormatMMDDYYYY: string;
  startDateFormatMMMDYYYYhmma: string;
  
  isBeforeStartTime: boolean;

  startDateCalendar: string;

  startDateFormatL: string;

  startDateStartOfDay: number;

  startDateFormatYYYYMMDDTHHMMSS: string;

  nowToString: string;
  nowFormatMMDDYYYY: string;
  nowAdd: number;
  nowFormatdddd: string;

  date: string;
  today: boolean;
  yesterday: boolean;
  dateFormatDDDDMMMMDDYYYY: string;
  dateFormatMMMMDDYYYY: string;

  tzNames: string[];

  tzGuess: string;
  tzString: string;
  tzZoneAbbr: string;

  tzStart: Date;
  tzStartWrong: Date;

  tzNewDate: string;

  tzFormat: string;

  tzThreeParameter: Date;

  constructor() {
    this.startTime = "2023-11-06 20:30:26.123";
    this.startDateFormatYYYYMMDD = moment(this.startTime).utc().format("YYYY-MM-DD");
    this.startDateToString = moment(this.startTime).utc().toString();
    this.startDateFormatMMMDo = moment(this.startTime).utc().format("MMM Do");
    this.startDateFormatMMDDYYYY = moment(this.startTime).utc().format("MM-DD-YYYY");
    this.startDateFormatMMMDYYYYhmma = moment(this.startTime).format("MMM D, YYYY, h:mm a");

    this.isBeforeStartTime = moment().isBefore(moment(this.startTime));

    this.startDateCalendar = moment(this.startTime).calendar();

    this.startDateFormatL = moment(this.startTime).format('L') === moment().format('L') ? 'Today' : moment(this.startTime).format('L');
    
    this.startDateStartOfDay = moment(this.startTime).startOf('day').valueOf();

    this.startDateFormatYYYYMMDDTHHMMSS = moment(new Date(this.startTime).getTime()).format('YYYY-MM-DDTHH:mm:ss+08:00');

    this.nowToString = moment().toString();
    this.nowFormatMMDDYYYY = moment().format("MM-DD-YYYY");
    this.nowAdd = moment().add('30', 'days').valueOf();
    this.nowFormatdddd = moment().format("dddd");

    this.date = moment().format("MM-DD-YYYY");
    this.today = this.date === moment().format("MM-DD-YYYY");
    this.yesterday = this.date === moment().subtract(1, 'day').format('MM-DD-YYYY');
    this.dateFormatDDDDMMMMDDYYYY = moment(this.date, 'MM-DD-YYYY').format('dddd, MMMM DD, YYYY');
    this.dateFormatMMMMDDYYYY = moment(this.date).format('MMMM DD, YYYY');

    this.tzNames = momentTz.tz.names();

    this.tzGuess = momentTz.tz.guess();
    this.tzString = momentTz.tz(moment.tz.guess()).toDate().toISOString();
    this.tzZoneAbbr = momentTz.tz('Asia/Kuala_Lumpur').zoneAbbr();

    this.tzStart = moment('2024-01-08T08:10:00.000Z').tz('Asia/Kuala_Lumpur').toDate();
    this.tzStartWrong = moment.tz('2024-01-08T08:10:00.000Z', 'Asia/Kuala_Lumpur').toDate();

    this.tzThreeParameter = moment.tz('2024-01-08T08:10:00.000Z', 'YYYY-MM-DD h:mmA', 'Asia/Kuala_Lumpur').toDate();

    this.tzNewDate = moment(new Date()).tz('Asia/Kuala_Lumpur').format('z');

    this.tzFormat = moment.tz('2024-01-08T08:10:00.000Z', 'Asia/Kuala_Lumpur').format("Z");
  }

  ngOnInit(): void {
  }

}
