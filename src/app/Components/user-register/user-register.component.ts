import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  usrFromGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.usrFromGroup = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: [''],
      mobileNo: fb.array([fb.control('')]),
      address: this.fb.group({
        city: [''],
        street: ['']
      }),
      referral:[''],
      referralOther:[''],
      password: [''],
      rePassword: ['']
    });
    // this.usrFromGroup=new FormGroup({
    //   fullName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    //   email: new FormControl(''),
    //   mobileNo: new FormControl(''),
    //   address: new FormGroup({
    //     city:new FormControl(''),
    //     street: new FormControl('')
    //   }),
    //   password: new FormControl(''),
    //   rePassword: new FormControl('')
    // });
  }

  ngOnInit(): void {
    // this.usrFromGroup.setValue({
    //   fullName: "ggtt",
    //   email: "ewrwe",
    //   mobileNo: 11,
    //   address: { city: "aa", street: "ss" },
    //   password: "qq",
    //   //rePassword: "q"
    // });

    // this.usrFromGroup.patchValue({
    //   fullName: "ggtt",
    //   email: "ewrwe",
    //   mobileNo: 11,
    //   address: { city: "aa", street: "ss" }
    //   //password: "qq",
    //   //rePassword: "q"
    // });


}

get fullName()
{
  return this.usrFromGroup.get('fullName');
}

get referral()
{
  return this.usrFromGroup.get('referral');
}

get mobileNo()
{
  return this.usrFromGroup.get('mobileNo') as FormArray;
}



addMobile()
{
  this.mobileNo.push(this.fb.control(''));
}



// get checkMobileRequired(): boolean
// {
//   return this.mobileNo.controls[0].value;
// }

updateReferralValidation()
{
  if(this.referral?.value=='other')
  {
    this.usrFromGroup.get('referralOther')?.addValidators([Validators.required]);
  }
  else
  {
    this.usrFromGroup.get('referralOther')?.clearValidators();
  }

  this.usrFromGroup.get('referralOther')?.updateValueAndValidity();
}

register()
{
  // this.usrFromGroup.con
  // Call register API
  // userService.register(this.usrFromGroup.value);

  // console.log (this.mobileNo.controls[0].value)
}
}
