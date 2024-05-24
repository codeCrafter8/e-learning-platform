import { Component, OnInit, ViewChild, forwardRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { CourseCreatorCourseInfoComponent } from '../course-creator-course-info/course-creator-course-info.component';
import { getNewLessonFormGroup } from 'src/app/services/lesson/lesson.form';

@Component({
  selector: 'app-course-creator',
  templateUrl: './course-creator.component.html',
  styleUrls: ['./course-creator.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseCreatorComponent),
      multi: true,
    }
  ]
})
export class CourseCreatorComponent implements OnInit {

  courseFormGroup = new FormGroup({
    title: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ],
      nonNullable: false,
    }),

    description: new FormControl('', {
      validators: [
        Validators.required
      ],
      nonNullable: false,
    }),

    price: new FormControl('', {
      validators: [
        Validators.required,
        // Validators.pattern("^[0-9]*$"),
      ],
      nonNullable: true,
    }),

    image: new FormControl('', {
      validators: [
        // Validators.required,
      ],
      nonNullable: true,
    }),

    language: new FormControl('', {
      validators: [
        Validators.required,
      ],
      nonNullable: true,
    }),

    targetAudience: new FormControl('', {
      validators: [
        Validators.required,
      ],
      nonNullable: true,
    }),

    categories: new FormControl([], {
      validators: [
        Validators.required,
      ],
      nonNullable: true,
    }),
  });
 
  
  
  publishFormGroup = new FormGroup({
    publish: new FormControl('', {
      validators: [
        Validators.required
      ],
      nonNullable: true,
    }),
  });
  

  lessonsFormArray = new FormArray([getNewLessonFormGroup()]);

  @ViewChild(MatStepper) stepper !: MatStepper;
  @ViewChild(CourseCreatorCourseInfoComponent) courseCreatorCourseInfoComponent !: CourseCreatorCourseInfoComponent;

  constructor() { }

  onStepChange(event: any): void {
    console.log('Step changed: ', event);
    // When user decide to change step from 0 to 1 by stepper in header, make sure to create course
    if (event.previouslySelectedIndex === 0) {
      
    }
  }

  nextStep(type:string): void {
    if(type === 'course'){
      if(this.courseFormGroup.valid){
        this.courseCreatorCourseInfoComponent.createCourse();
        this.stepper.next();
        
      }

    }
  }


  ngAfterViewInit() {
    this.stepper.selectedIndex = 0;
  }

  ngOnInit() {
  }
}
