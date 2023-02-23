import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Appcomponents } from './appcomponent';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoComponent } from './todo/todo.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';
@NgModule({

    declarations: [Appcomponents, NavbarComponent, TodoComponent,],
    imports: [DragDropModule,ReactiveFormsModule,MatButtonModule,MatIconModule,MatInputModule,MatFormFieldModule,MatCardModule,BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule,MatToolbarModule],
    bootstrap: [Appcomponents],
})

export class AppModule { }