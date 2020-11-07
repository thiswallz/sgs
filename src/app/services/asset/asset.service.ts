import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAsset } from 'src/app/models/asset.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  constructor(private readonly http: HttpClient) {}

  getDetail(assetPath: string): Observable<IAsset> {
    return this.http.get<IAsset>(`${environment.restApi}${assetPath}`);
  }

  getImage(assetId: number): Observable<Blob> {
    return this.http.get(`${environment.restApi}/assets/${assetId}/image`, { responseType: 'blob' });
  }
}
