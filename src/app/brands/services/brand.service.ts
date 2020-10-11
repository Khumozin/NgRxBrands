import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Brand } from '../models/brand.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private readonly baseUrl: string = environment.api + '/brands';

  constructor(private http: HttpClient) { }

  createBrand(brand: Brand): Observable<Brand> {
    return this.http.post<Brand>(`${this.baseUrl}/add`, brand);
  }

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.baseUrl}/get`)
  }

  getBrandByID(id: string): Observable<Brand> {
    return this.http.get<Brand>(`${this.baseUrl}/get/${id}`);
  }

  updateBrand(id: string | number, changes: Partial<Brand>): Observable<Brand> {
    return this.http.put<Brand>(`${this.baseUrl}/update/${id}`, changes);
  }

  deleteBrand(id: string): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/delete/${id}`);
  }

}
