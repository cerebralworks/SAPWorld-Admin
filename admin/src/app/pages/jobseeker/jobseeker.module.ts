import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobSeekerComponent } from './jobseeker.component';
import { DataTablesModule } from "angular-datatables";
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
@NgModule({
  declarations: [JobSeekerComponent],
  imports: [
    CommonModule,DataTablesModule,ReactiveFormsModule,FormsModule,SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: JobSeekerComponent,
      },
    ])
  ],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class JobSeekerModule {}
