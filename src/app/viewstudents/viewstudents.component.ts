import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[{"name":"Prema","Age":50,"photo":"https://tse3.mm.bing.net/th?id=OIP.C2mTGdKXdgQ12X0usocvRgHaHa&pid=Api&P=0&w=156&h=156"},
  {"name":"Pragya","Age":19,"photo":"https://tse3.mm.bing.net/th?id=OIP.C2mTGdKXdgQ12X0usocvRgHaHa&pid=Api&P=0&w=156&h=156"},
  {"name":"Abhishek Prem","Age":20,"photo":"https://365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png"},
  {"name":"Kiara","Age":20,"photo":"https://tse3.mm.bing.net/th?id=OIP.C2mTGdKXdgQ12X0usocvRgHaHa&pid=Api&P=0&w=156&h=156"},
  {"name":"Mohan","Age":35,"photo":"https://365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png"},
  {"name":"Radha","Age":25,"photo":"https://tse3.mm.bing.net/th?id=OIP.C2mTGdKXdgQ12X0usocvRgHaHa&pid=Api&P=0&w=156&h=156"}






  ]

}
