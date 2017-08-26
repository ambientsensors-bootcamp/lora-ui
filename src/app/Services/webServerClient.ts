import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import * as _ from 'lodash';
//npm install --save lodash
import { ImportantConfig } from '../../assets/config';

@Injectable()
export class WebServiceClient {
    private errorsSubject = new Subject<any>();
     public baseURL: string = "/api/"

    constructor(private http: Http, private config: ImportantConfig) {
    }

    public getResource(resource: string): Observable<any> {
        console.log("Important API KEY is: " + this.config.API_KEY);
        let fullPath = this.baseURL + resource;
        console.log("GET request to full path: " + fullPath);
        const response = this.http.get(fullPath);
        return this.getResponseBody(response);
    }

    private getResponseBody(obs: Observable<Response>): Observable<any> {
        let self = this;
        let response = obs
            .catch(error => {
                self.errorsSubject.next(error);
                return Observable.throw(error);
            })
            .map(resp => {
                if (resp['_body'])
                    return resp.json();
            }
            )
            .catch(this.parseError);

        return this.actLikeSafePromise(response);
    }

    actLikeSafePromise<T>(obs: Observable<T>): Observable<T> {
        return obs.map(e => _.cloneDeep(e));
    }

    private parseError(err: Response): Observable<{ message: string; detailMessage: string; status: number }> {
        let message = `Received ${err.status} from the server`;
        return Observable.throw({ message: message, status });
    }
}