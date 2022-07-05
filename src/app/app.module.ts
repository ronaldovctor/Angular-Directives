import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgForFormComponent } from './components/ng-for-form/ng-for-form.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { NgContainerComponent } from './components/ng-container/ng-container.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
    NgForComponent,
    NgForFormComponent,
    NgSwitchComponent,
    NgTemplateComponent,
    NgContainerComponent,
    NgContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
