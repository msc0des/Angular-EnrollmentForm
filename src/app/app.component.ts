import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { user } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['Angular','React','Vue'];
  topicHasError=true;
  userModel=new user('','rob@gmail.com',1234569870,'default','morning',true);
  submitted=false;
  submsg=false;
  errormsg="";
  constructor(private _enrollmentService:EnrollmentService){}
  onValidate(value)
  {
    if(value==='default'){
      this.topicHasError=true;
    }
    else
    {
      this.topicHasError=false;
    }
  }
  onSubmit()
    {
      this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data=>console.log('success',data),
        error=>this.errormsg=error

      );
      this.submitted=true;
      this.submsg=true;
    }

}
