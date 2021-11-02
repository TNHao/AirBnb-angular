import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class VerificationService {

	constructor(private http: HttpClient) {
	}

	post(endpoint: String, data: any): Observable<any>{
		return this.http.post(environment.urlAPI + endpoint, data);
	}
}
