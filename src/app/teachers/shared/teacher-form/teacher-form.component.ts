import { ITeachersService } from './../../../core/definitions/teachers.service';
import { Router } from '@angular/router';
import { TeacherModel } from '../../../shared/definitions/teacher.model';
import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

export const TEACHER_FORM_COMPONENT_METADATA = {
  selector: 'teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
}

export class TeacherFormComponent implements OnInit {

  protected teacher: TeacherModel;

  protected teacherForm: FormGroup;

  constructor(
    protected formBuilder: FormBuilder,
    protected router: Router,
    protected teachersSer:ITeachersService,
    protected title: string    
  ) { }

  ngOnInit() {
    this.teacherForm = this.formGroup();
  }

  private formGroup(): FormGroup {
    let teacher = this.teacher;
    return this.formBuilder.group({
      name: [teacher.name],
      lastName: [teacher.lastName]
    })
  }

  saveTeacher(event: Event): void {
    event.preventDefault();
    this.teachersSer.save(this.teacherForm.value).subscribe(
      (TeacherModel) => {
        this.router.navigate(['/teachers']);
      }
    );
  }

}
