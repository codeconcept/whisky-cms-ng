import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupDirective } from '@angular/forms';
import { BlogpostService } from '../services/blogpost.service';


@Component({
  selector: 'app-blogpost-create',
  templateUrl: './blogpost-create.component.html',
  styleUrls: ['./blogpost-create.component.css']
})
export class BlogpostCreateComponent implements OnInit {
  creationForm: FormGroup;
  constructor(private fb: FormBuilder, private blogpostService: BlogpostService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.creationForm = this.fb.group({
      title: '',
      subTitle: '',
      content: ''
    });
  }

  createBlogpost(formDirective: FormGroupDirective) {
    if(this.creationForm.valid) {
      console.log(this.creationForm);
      this.blogpostService
        .createBlogpost(this.creationForm.value)
        .subscribe(data => this.handleSuccess(data, formDirective), error => this.handleError(error));
    }
  }

  handleSuccess(data, formDirective) {
    console.log('OK blog post created', data);
    this.creationForm.reset();
    formDirective.resetForm();
  }
  
  handleError(error) {
    console.log('KO blog post NOT created', error);
  }

}
