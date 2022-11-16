import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-index-bar',
  templateUrl: './course-index-bar.component.html',
  styleUrls: ['./course-index-bar.component.scss']
})
export class CourseIndexBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  async toggleMenu(element: HTMLElement){

    element.classList.toggle("show");

  }

  private sleep(ms:number){
    return new Promise(r=>{
      setTimeout(r, ms);
    })
  }
  
}
