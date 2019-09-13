import { Component, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl ,FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-table-inline-edit',
  templateUrl: './table-inline-edit.component.html',
  styleUrls: ['./table-inline-edit.component.css']
})
export class TableInlineEditComponent implements OnInit {

  userForm: FormGroup;
  newUserForm: FormGroup;
  collapsed= {};
  editable={};
  @ViewChild('myModal') myModal;
  showModal= false;
  constructor(private fb: FormBuilder) {}
  
  inputFields=[
    {
      name: 'name',
      input: 'input',
      type : 'text',
      placeholder: 'Name'
    },
    {
      name: 'email',
      input: 'input',
      type: 'email',
      placeholder: 'Email'
    },
    {
      name: 'mobNumber',
      input: 'select',
      type: '',
      placeholder: '',
      value:{

      }
    }
  ];

  ngOnInit() {
    this.userForm = this.fb.group({
          users: this.fb.array([]) 
    });

    this.newUserForm = this.fb.group({
      users: this.fb.array([]) 
    });

    this.renderUser();
  }

  showModel(){console.log("test");
    this.showModal = true;
  }

  // Add form field row with initial data
  formRowWithData(data): FormGroup {
    let startDateData = data.startDate.split("-");
    return this.fb.group({    
      name: [data.name, Validators.required],  
      email: data.email,
      /*startDate: [{
                  year:parseInt(startDateData[0]), 
                  month:parseInt(startDateData[1]), 
                  day: parseInt(startDateData[2])  }
                ],*/
     // startTime: [],
      mobNumber: data.mobNumber
    });
  }

  // Add form field row with no data
  formRowWithOutData(): FormGroup {
    return this.fb.group({    
      name: ['', Validators.required],  
      email: [''],
      //startDate: [{}],
     // startTime: [null, Validators.required],
      mobNumber: ['']
    });
  }

  // Dummy json 
  initialData = [
    {name : "a", email : "a@b.com", startDate: "2019-05-06", mobNumber:  "1111"},
    {name : "b", email : "b@c.com", startDate: "2019-06-07", mobNumber:  "2222"},
    {name : "c", email : "c@d.com", startDate: "2019-08-08", mobNumber:  "3333"}
  ]

  
  // Add new row in form
  addUser() {
    const control = <FormArray>this.newUserForm.get('users');
    control.push(this.formRowWithOutData());  
  }

  // Render initial data
  renderUser(){
    const control = <FormArray>this.userForm.get('users');
    var i = 0;
    for (let data of this.initialData ) {
      control.push(this.formRowWithData(data));  
      this.editable[i] = {};
      i++;
    }
  }

  // Remove desired user row
  remove(index: number) {
    const control = <FormArray>this.userForm.get('users');
    control.removeAt(index);  

    // Romove Index row that are recorded as change
    let elementIndexToRemove = this.rowNeedToUpdate.indexOf(index);

    console.log(elementIndexToRemove);
    if (elementIndexToRemove >= 0) {
      this.rowNeedToUpdate.splice(elementIndexToRemove, 1);  
    }

    //console.log(elementIndexToRemove);
    //console.log(this.rowNeedToUpdate);

    // Managing rows array as we remove one elemement
    for(let i=elementIndexToRemove; i< this.rowNeedToUpdate.length; i++){
      this.rowNeedToUpdate[i] = this.rowNeedToUpdate[i] -1;
    }

    console.log(this.rowNeedToUpdate);
    
  }

  // Get form data
  save() {
    // To get all form records
    //console.log(this.userForm.value);

    // To get records that we need to update

    var dataToSend = [];
    for(let i=0; i< this.rowNeedToUpdate.length; i++){
      dataToSend.push(this.userForm.value.users[this.rowNeedToUpdate[i]]);
    }
    console.log("---Edited Rows---");
    console.log(dataToSend);
    console.log("---New Rows---");
    console.log(this.newUserForm.value.users);
  }

  // Get row only for updation
  
  rowNeedToUpdate =[];
  dataToUpdate(rowIndex:any){
    //console.log(rowIndex);
    if(this.rowNeedToUpdate.includes(rowIndex)){
      return false;
    }
    this.rowNeedToUpdate.push(rowIndex);
    
  }
}
