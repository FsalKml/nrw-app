import { FormGroup } from '@angular/forms';
    
export function ConfirmedValidator( controlPassword: string, matchingControlPassword: string ){
    return ( formGroup: FormGroup ) => {
        const control = formGroup.controls[ controlPassword ];
        const matchingControl = formGroup.controls[ matchingControlPassword ];
        if ( matchingControl.errors && !matchingControl.errors[ 'confirmedValidator' ]) {
            return;
        }
        if ( control.value !== matchingControl.value ) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors( null );
        }
    }
}