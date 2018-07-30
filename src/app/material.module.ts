import  { NgModule } from '@angular/core';
import  { CommonModule} from '@angular/common';
import  { MatButtonModule,MatInputModule,MatProgressSpinnerModule,MatCardModule, } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
	imports: [MatButtonModule, MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatAutocompleteModule],
    exports: [MatButtonModule, MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatAutocompleteModule],
})
export class MaterialModule  {


}
