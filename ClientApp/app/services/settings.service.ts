import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SettingsService {
    results: string;

    constructor(private http: HttpClient){}

		getEnvironment(): string {
				this.http.get('/Settings')
            .subscribe(resp => {
                this.results = resp['results']
            });

				console.log(this.results);
        return this.results;
    }
}
