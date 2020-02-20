import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import {TodoComponent} from './todo/todo.component';
import {CalendarComponent} from './todo/calendar/calendar.component';
import {SelectorComponent} from './todo/selector/selector.component';
import {OrganizerComponent} from './todo/organizer/organizer.component';
import {MomentPipe} from './todo/shared/moment.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {SpliceComponent} from './splice/splice.component';
import {InputlComponent} from './inputl/inputl.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: '', component: AppComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'inputl', component: InputlComponent },





];

@NgModule({
  declarations: [
    TodoComponent,
    CalendarComponent,
    SelectorComponent,
    OrganizerComponent,
    MomentPipe,
    HomeComponent,
    AboutComponent,
    AppComponent,
    MenuComponent,
    SpliceComponent,
    InputlComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule {
}
