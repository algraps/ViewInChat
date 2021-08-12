import { Injectable } from "@angular/core";
import * as _moment from 'moment';

@Injectable({
	providedIn: 'root'
})
export class DatetimeService {

	constructor() { }

	getCurrentDate() {
		return localStorage.getItem('serverDateTime') ? localStorage.getItem('serverDateTime') : new Date();
	}

	setCurrentDate(date: Date) {

		localStorage.setItem('serverDateTime', date.toString());
	}




	formatDate(date) {
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [year, month, day].join('-');
	}
	getValidDateTimeSlot(date: any) {
		let m = _moment(date);
		let serverDT = this.getCurrentDate();
		let isAfter = m.isAfter(serverDT);
		if (!isAfter) {
			date = serverDT;
			const start = _moment(date);
			const remainder = 15 - (start.minute() % 15);

			date = _moment(start).add(remainder, "minutes").toDate();
		} else {
			date = _moment(date);
		}
		return date;
	}
	isValidSlot(date: any) {
		let m = _moment(date);
		let serverDT = _moment(new Date(this.getCurrentDate()));

		return m.isAfter(serverDT);
	}
}
