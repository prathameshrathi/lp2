import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  value1 = '';
  value2='';
  public matrix1:Number[]=[];
  public matrix2:Number[]=[];

  handleAdd=()=>{
      var l1 = this.value1.split('#')
      var l2 = this.value2.split('#')
      var x = parseInt(l1[0])
      var y = parseInt(l2[0])
      for (let i = 0; i < x*x; i++) {
          this.matrix1.push(i+x)
      }

      for (let j = 0; j < y*y; j++) {
        this.matrix2.push(j+y)
      }
  }

  isDone=(value : any)=>{
    var l1 = this.value1.split('#')
    var x = parseInt(l1[0])
    if((value-x)%x==x-1)
    {
      return false;
    }
    return true;
  }

  isDone2=(value : any)=>{
    var l1 = this.value2.split('#')
    var x = parseInt(l1[0])
    if((value-x)%x==x-1)
    {
      return false;
    }
    return true;
  }


  ngOnInit(): void {
  }

}
