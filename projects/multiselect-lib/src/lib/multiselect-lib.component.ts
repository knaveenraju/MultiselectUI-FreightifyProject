import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-Multiselect-Lib',
  templateUrl: './multiselect-lib.component.html',
  styleUrls: ['./multiselect-lib.component.css']
})
export class MultiselectLibComponent implements OnInit,OnChanges {
  @Output() onChange = new EventEmitter();
  @Input() list: any[];
  @Input() filter: any;
  @Input() filterBy: any
  filteredCountryList: any[];  
  sample: any = [];
  viewDropDown: boolean =false;
  selectedCountries: any[];
  currentSelected!: {};

  constructor() {

    this.filteredCountryList = [];

    this.list = [];
    
    this.selectedCountries = [];
  }
  
  ngOnChanges(changes:SimpleChanges){

    const newfilter:SimpleChange= changes.filter;
       this.filter=newfilter.currentValue;
      
  }


  ngOnInit() {
    this.filteredCountryList = this.list;
   
   
  }

  getSelectedValue(status: Boolean, value: String) {
    if (status) {

      this.selectedCountries.push(value);
    }
    
    else {

      var index = this.selectedCountries.indexOf(value);
      this.selectedCountries.splice(index, 1);
    }

    this.currentSelected = { checked: status, name: value };

    
    this.selectedCountryList();

  }
  selectedCountryList() {
    this.onChange.emit(this.selectedCountries);
  }

  viewdropDown(){
    this.viewDropDown= !this.viewDropDown;
  }

  search_list(val: any) {
   
    this.sample = [];

    if(this.filter=="true"){
    
   
          
         if(this.filterBy=='lable'){
          if (val) {

            this.filteredCountryList = [];
             this.list.filter(obj => {
                    if ( obj.lable.toLowerCase().includes(val.toLowerCase())) {
                         obj.lable = obj.lable;
                         this.sample.push(obj)
                        this.filteredCountryList = this.sample;
                             }
                             })
                   }
 

          else {
                this.filteredCountryList = this.list;
               }

      
         }

      else if(this.filterBy== 'value'){

            if (val) {

                this.filteredCountryList = [];
                 this.list.filter(obj => {
                        if ( obj.value.toLowerCase().includes(val.toLowerCase())) {
                             obj.lable = obj.lable;
                             this.sample.push(obj)
                            this.filteredCountryList = this.sample;
                                 }
                                 })
                       }
     
              else {
                    this.filteredCountryList = this.list;
                   }
    
      }

      else if(this.filterBy== 'lable,value' || this.filterBy== 'value,lable' ){
     
         if (val) {

                this.filteredCountryList = [];
                 this.list.filter(obj => {
                if (obj.value.toLowerCase().includes(val.toLowerCase()) || obj.lable.toLowerCase().includes(val.toLowerCase())) {
                    obj.lable = obj.lable;
                    this.sample.push(obj)
                    this.filteredCountryList = this.sample
                      }
                                         })
                   }

        else {
          this.filteredCountryList = this.list;
        }

      }


    

    else{
      alert("Please provide the valid filterBy field");
    }
  }


  }

}
