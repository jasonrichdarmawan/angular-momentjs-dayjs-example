import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import * as advancedFormat from 'dayjs/plugin/advancedFormat';
import * as calendar from 'dayjs/plugin/calendar';
import * as localizedFormat from 'dayjs/plugin/localizedFormat';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';
dayjs.extend(advancedFormat);
dayjs.extend(calendar);
dayjs.extend(localizedFormat);
dayjs.extend(utc)
dayjs.extend(timezone);

@Component({
  selector: 'app-dayjs',
  templateUrl: './dayjs.page.html',
  styleUrls: ['./dayjs.page.scss']
})
export class DayjsPage implements OnInit {
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
  nowFormatdddd;

  date: string;
  today: boolean;
  yesterday: boolean;
  dateFormatDDDDMMMMDDYYYY: string;
  dateFormatMMMMDDYYYY: string;

  tzNames: string[];
  tzGuess: string;
  tzString: string;
  tzZoneAbbr: string;

  constructor() {
    this.startTime = "2023-11-06 20:30:26.123";
    this.startDateToString = dayjs(this.startTime).toString();
    this.startDateFormatYYYYMMDD = dayjs(this.startTime).format("YYYY-MM-DD");
    this.startDateFormatMMMDo = dayjs(this.startTime).format("MMM Do"); // need advancedFormat
    this.startDateFormatMMDDYYYY = dayjs(this.startTime).format("MM-DD-YYYY");
    this.startDateFormatMMMDYYYYhmma = dayjs(this.startTime).format("MMM D, YYYY, h:mm aomeome");

    this.isBeforeStartTime = dayjs().isBefore(dayjs(this.startTime));

    this.startDateCalendar = dayjs(this.startTime).calendar(); // need calendar

    this.startDateFormatL = dayjs(this.startTime).format('L') === dayjs().format('L') ? 'Today' : dayjs(this.startTime).format('L'); // need localizedFormat

    this.startDateStartOfDay = dayjs(this.startTime).startOf('day').valueOf();

    this.startDateFormatYYYYMMDDTHHMMSS = dayjs(new Date(this.startTime).getTime()).format('YYYY-MM-DDTHH:mm:ss+08:00');

    this.nowToString = dayjs().toString();
    this.nowFormatMMDDYYYY = dayjs().format("MM-DD-YYYY");
    this.nowAdd = dayjs().add(30, 'days').valueOf();
    this.nowFormatdddd = dayjs().format("dddd");

    this.date = dayjs().format("MM-DD-YYYY");
    this.today = this.date === dayjs().format("MM-DD-YYYY");
    this.yesterday = this.date === dayjs().subtract(1, 'day').format('MM-DD-YYYY');
    this.dateFormatDDDDMMMMDDYYYY = dayjs(this.date, 'MM-DD-YYYY').format('dddd, MMMM DD, YYYY');
    this.dateFormatMMMMDDYYYY = dayjs(this.date).format('MMMM DD, YYYY');

    this.tzNames = Intl.supportedValuesOf("timeZone");
    this.tzGuess = dayjs.tz.guess();

    this.tzString = dayjs.tz(dayjs.tz.guess()).toDate().toISOString();
    this.tzZoneAbbr = dayjs().tz('Asia/Kuala_Lumpur').format('z');
  }

  ngOnInit(): void {
  }
}
