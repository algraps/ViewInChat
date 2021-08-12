// Angular
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
// RxJS
import { Observable } from 'rxjs';
// import { AuthServiceSuzy } from '../../../auth/_services/auth.service';
import { throwError, from } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class InterceptService implements HttpInterceptor {

	constructor() {
		//
	}

	// intercept request and add token
	intercept(
		request: HttpRequest<any>,
		next: HttpHandler): Observable<HttpEvent<any>> {
		return from(this.handleAccess(request, next));
	}
	private async handleAccess(request: HttpRequest<any>, next: HttpHandler):
		Promise<HttpEvent<any>> {
		//
		let token: string = localStorage.getItem('access_token');
		let isTokenExpire = new Date().getTime() > new Date(localStorage.getItem('tokenExpiryTime')).getTime();
		if (!token || isTokenExpire) {
			//await this.authServiceSuzy.authenticateInSuzyLive();
		}
		//
		token = localStorage.getItem('access_token');
		request = request.clone({ headers: request.headers.set('Authorization_Garving', "Bearer " + token) });
		request = request.clone({ headers: request.headers.set('UserTimeZone', new Date().getTimezoneOffset().toString()) });
		return next.handle(request).pipe(catchError(x => this.handleAuthError(x))).toPromise();
	}

	private handleAuthError(err: HttpErrorResponse): Observable<any> {
		//handle your auth error or rethrow
		if (err.status === 401) {
			//navigate /delete cookies or whatever
			//this.oauthService.logout();
			// if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
		}
		return throwError(err);
	}
}
export const authInterceptorProviders = [
	{ provide: HTTP_INTERCEPTORS, useClass: InterceptService, multi: true }
];
