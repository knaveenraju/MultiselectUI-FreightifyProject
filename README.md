# Table of contents

* Project Title
* Requirements
* Installation
* Code
  * app.module.ts
  * app.component.ts
  * app.component.html
* Demo

  

## Project Title
 ```
Multi-Select Dropdown 
 ```
## Requirements
 ```
Develop a reusable multiselect ui component using Angular 8 or above

Expected features in multi-select component: 
1. Searchable 
2. Scrollable 
3. Clickable 

filter   - When this option is set to true, then the filter input would be visible in the dropdown.
filterBy - When filtering is enabled, filterBy option will decide which field or fields to lookup while the user is searching.
 ```
## Installation
 ```
npm i multiselect-ui-freightify-project
 ```
## Code
 ```
Add the below code to implement the Multi-Select Dropdown
 ```
### app.module.ts
```
```

### app.component.ts
 ```
 title="MultiselectUI-FreightifyProject";
  countryDataList:any;
  filter="true";
  
  onChange(item:any[]){
    console.log(item);
  }


    ngOnInit(){
      this.countryDataList = 
      [
        {lable:'Afghanistan',value:'AFG', isChecked :false, img:"https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-1-2048x1365.jpg" },
        {lable :'Australia',value:'AUS', isChecked :false , img:"https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-9-2048x1024.jpg" },
        {lable :'Bangladesh',value:'BGD', isChecked :false , img:"https://images.all-free-download.com/images/graphiclarge/bangladesh_132894.jpg" },
        {lable:'Canada',value:'CAN', isChecked :false , img:"https://images.all-free-download.com/images/graphiclarge/canada_logo_28270.jpg" },
        {lable:'China',value:'CHN', isChecked :false , img:"https://cdn.countryflags.com/thumbs/china/flag-800.png" },
        {lable :'Germany',value:'DEU', isChecked :false , img:"https://images.all-free-download.com/images/graphiclarge/schwarz_rot_gold_55219.jpg" },
        {lable:'India',value:'IND', isChecked :false , img:"https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png" },
        {lable :'Kenya',value:'KEN', isChecked :false , img:"https://images.all-free-download.com/images/graphiclarge/kenya_clip_art_14285.jpg" },
        {lable :'Maldives',value:'MDV', isChecked :false , img:"https://www.countryflags.com/wp-content/uploads/maldives-flag-png-large.png" },
        {lable :'Pakistan',value:'PAK', isChecked :false , img:"https://cdn.countryflags.com/thumbs/pakistan/flag-800.png" },
        {lable :'South Africa',value:'ZAF', isChecked :false , img:"https://cdn.countryflags.com/thumbs/south-africa/flag-800.png" },
        {lable :'Zimbabwe',value:'ZWE', isChecked :false , img:"https://www.countryflags.com/wp-content/uploads/zimbabwe-flag-png-large.png" },
      ]
    }
 ```

### app.component.html
 ```
 <span ><b>Do you want to filter feature to MultiSelect Dropdown</b></span>
 <input type="radio" id="true" name="filter" value="true" [(ngModel)]="filter" >
   <label for="true">YES</label>
   <input type="radio" id="false" name="filter" value="false" [(ngModel)]="filter" >
   <label for="false">NO</label><br>

<lib-Multiselect-Lib
 [list]="countryDataList"
 [filter]="filter" filterBy="lable,value"
 (onChange)="onChange($event)" 
 ></lib-Multiselect-Lib>

  ```
## Demo



