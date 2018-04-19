import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserTableComponent } from './user/user-table/user-table.component';
import { UserService } from './user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from "@ngrx/store"
import { userReducer } from './reducers/user.reducer';


const routes: Routes = [{
  path: "", component: UserListComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserEditComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ usrs: userReducer })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
