import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {FormGroup,FormControl,FormBuilder, Validators, FormArray} from '@angular/forms';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup;

  valueChangedTracked='';

  constructor(private formBuilder:  FormBuilder) {

   /* this.checkoutForm= formBuilder.group({
      emailAddr:new FormControl(),
      quantity:new FormControl(),
      terms: new FormControl()


    });*/

    this.checkoutForm= formBuilder.group({
      emailAddr:['', [Validators.minLength(5),
                      Validators.minLength(10),
                      Validators.required, 
                      Validators.email]],
      quantity:['', Validators.required],
      terms: ['', Validators.requiredTrue],


      /*items: this.formBuilder.array([

         new FormControl('Angular'),
         new FormControl('React'),
      ])*/

     items: this.formBuilder.array([

        this.formBuilder.group({

          itemId:['1'],
          itemName:['ARC'],
          itemDesc:['Tutorial'],
          itemDone:['',Validators.requiredTrue]

        })

      ])
        /*this.formBuilder.group({

          taskId:['1'],
          taskName:['ARC'],
          itemDesc:['Tutorial'],
          itemDone:['',Validators.requiredTrue]

        })*/



      

    });


   }

  ngOnInit(): void {

    //get the legth(size of the array)
    //getting individual array items
    //set array value for elements
    //reset array
   

    this.checkoutForm.get('items').setValue([{

          itemId:['1'],
          itemName:['Learning'],
          itemDesc:['Angular 9'],
          itemDone:['',Validators.requiredTrue]
    }]);

    console.log(this.checkoutForm.get('items').value.length);
    console.log(this.checkoutForm.get('items').value);
   const itemVal = this.checkoutForm.get('items').value;
    console.log(itemVal[0].itemDesc);

    //this.checkoutForm.get('items').reset();

   /* this.checkoutForm.get('emailAddr').valueChanges.subscribe(data =>{

      this.valueChangedTracked= data;
    });*/

   /* this.checkoutForm.valueChanges.subscribe(data =>{
      console.log(data);
    });*/

   /* this.checkoutForm.setValue({
        emailAddr:'test@gmax.com' ,
        quantity: 10,
        terms: true

    })
    */
   /*this.checkoutForm.patchValue({
    emailAddr:'test@gmax.com' ,
    quantity: 10
    

})*/

//Learning to use statusChanges on FormControl

/*this.checkoutForm.get('emailAddr').statusChanges.subscribe(data =>{

  console.log(data);
});*/

//Learning to use statusChanges on entire Form

this.checkoutForm.statusChanges.subscribe(formState =>{

  console.log(formState);
});




  }

  postData(){

    console.log(this.checkoutForm.value);
    console.log(`Email Address`+ this.checkoutForm.value.emailAddr);
    console.log(`Quiantity`+ this.checkoutForm.value.quantity);
    console.log(`Term`+ this.checkoutForm.value.terms);

   // this.resetForm();

  }

  resetForm(){

    //this.checkoutForm.reset();
  }


  get items(){

    return this.checkoutForm.get('items') as FormArray;
  }

  addNewItem(){

    const itemLength = this.items.length;
    const newItem = this.formBuilder.group({

          itemId:[itemLength + 1],
          itemName:[''],
          itemDesc:[''],
          itemDone:['',Validators.requiredTrue]
    });

    this.items.push(newItem);
  }

}
