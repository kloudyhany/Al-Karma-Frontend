import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule , FormGroup , FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewpasssetService } from '../newpassset.service';

@Component({
  selector: 'app-createnewpassword',
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './createnewpassword.component.html',
  styleUrl: './createnewpassword.component.css'
})
export class CreatenewpasswordComponent {

  newpassform! : FormGroup ;

  constructor(private fb:FormBuilder , private router : Router  , private Service : NewpasssetService) {}

  ngOnInit(): void {
    this.newpassform = this.fb.group({
      password: ['', Validators.required],
    });
  }

  onSubmit() : void {
    if (this.newpassform.valid) {
    this.router.navigate(['/login']);
    alert('تم إنشاء كلمة مرور جديدة بنجاح!');
    }

    // if (this.newpassform.valid) {
    //   const password = this.newpassform.value.password;
    //   this.authService.resetPassword(password).subscribe({
    //     next: () => {
    //       alert('تم إنشاء كلمة مرور جديدة بنجاح!');
    //       this.router.navigate(['/clientprofile']);
    //     },
    //     error: (err) => {
    //       console.error(err);
    //       alert('حدث خطأ أثناء تعيين كلمة المرور.');
    //     }
    //   });
  }

  get FormControls() {
    return this.newpassform.controls;
  }
}
