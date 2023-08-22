import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { ApiService } from './services/api.service';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { CarouselModule  } from 'ngx-owl-carousel-o';  
import { NgxGpAutocompleteModule } from "@angular-magic/ngx-gp-autocomplete";

@NgModule({
	declarations: [
		ControlMessagesComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,	
		NgbModule,
		ImageCropperModule,
		//GooglePlaceModule,
		AngularEditorModule,
		NgxIntlTelInputModule,	
		InlineSVGModule,
		NgxGpAutocompleteModule,
		CarouselModule 
	],
	exports: [   
		FormsModule,
		ReactiveFormsModule,	
		NgbModule,
		ImageCropperModule,
		//GooglePlaceModule,
		AngularEditorModule,
		NgxIntlTelInputModule,	
		InlineSVGModule,
		ControlMessagesComponent,
		NgxGpAutocompleteModule,
		CarouselModule 
	],
	providers: [
		ApiService
	]
	
})
export class SharedModule { }
