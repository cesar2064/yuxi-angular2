import { TeacherModel } from '../../shared/definitions/teacher.model';
import { ITeachersService } from '../../core/definitions/teachers.service';
import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {
  private title:string;
  @Input() teacher: TeacherModel;
  @Output() afterUpdateTeacher: EventEmitter<TeacherModel> = new EventEmitter();

  private teacherForm: FormGroup;  

  constructor(
    @Inject('ITeachersService') private teacherSer: ITeachersService,    
    private formBuilder: FormBuilder
  ) {}

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
    this.afterUpdateTeacher.emit(
      Object.assign(this.teacher,this.teacherForm.value)
    );
  }

}
