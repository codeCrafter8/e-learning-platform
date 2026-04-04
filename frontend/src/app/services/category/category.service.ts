import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/category.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly apiUrl = `${environment.apiUrl}/api/v1`;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`);
  }

  addCategoryToCourse(categoryId: number, courseId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/courses/${courseId}/categories/${categoryId}`, {});
  }

  removeCategoryFromCourse(categoryId: number, courseId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/courses/${courseId}/categories/${categoryId}`);
  }

}
