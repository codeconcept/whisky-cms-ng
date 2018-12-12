import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../services/blogpost.service';
import { Blogpost } from '../models/blogpost';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  allBlogposts: Blogpost[];
  blogposts$: Observable<Blogpost[]>;

  constructor(private blogpostService: BlogpostService) { }

  ngOnInit() {
    this.blogpostService
      .getBlogposts()
      .subscribe(data => this.refresh(data));

  }

  deleteBlogposts(selectedOptions) {
    const ids = selectedOptions.map(so => so.value);
    if (ids.length === 1) {
      return this.blogpostService
        .deleteSingleBlogpost(ids[0])
        .subscribe(data => this.refresh(data), err => this.handleError(err));
    } else {
      return this.blogpostService
        .deleteBlogposts(ids)
        .subscribe(data => this.refresh(data), err => this.handleError(err));
    }
  }

  refresh(data) {
    console.log('data', data);
    this.blogpostService.getBlogposts().subscribe(data => {
      this.allBlogposts = data;
    });
  }

  handleError(error) {
    console.error(error);
  }


}
