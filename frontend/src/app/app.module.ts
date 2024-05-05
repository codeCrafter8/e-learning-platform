import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/interceptors/auth.interceptor';
import { LoggedInPageComponent } from './logged-in-page/logged-in-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesListItemComponent } from './components/courses-list-item/courses-list-item.component';
import { ButtonComponent } from './components/button/button.component';
import { RatingComponent } from './components/rating/rating.component';
import { PriceComponent } from './components/price/price.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CancelComponent } from './components/payment/cancel/cancel.component';
import { SuccessComponent } from './components/payment/success/success.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { UsersComponent } from './components/admin/users/users.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CartDetailsComponent} from './components/admin/cart-details/cart-details.component';
import { CourseSearchComponent } from './components/course-search/course-search.component';
import { CartItemsListComponent } from './components/cart-items-list/cart-items-list.component';
import { UserCartsComponent } from './components/admin/user-carts/user-carts.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, LoggedInPageComponent, NavbarComponent, CourseDetailsComponent, ButtonComponent, RatingComponent, PriceComponent, MainPageComponent, CoursesListComponent, CoursesListItemComponent, CancelComponent, SuccessComponent, CartComponent, CartItemComponent, CourseSearchComponent, UsersComponent, CartDetailsComponent, CartItemsListComponent, UserCartsComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule, MatListModule, MatCardModule, MatButtonModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, FormsModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
