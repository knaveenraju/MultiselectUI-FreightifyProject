import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  
    
}