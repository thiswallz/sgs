import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private readonly http: HttpClient) {}

  getAssets(companyId: number): Observable<any> {
    return this.http.get<any>(`${environment.restApi}/companies/${companyId}/assets`);
  }
}
