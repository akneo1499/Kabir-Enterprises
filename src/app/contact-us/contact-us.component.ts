import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"],
})
export class ContactUsComponent implements OnInit {
  FormData;

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl("", [Validators.required]),
      Email: new FormControl("", [Validators.compose([Validators.required, Validators.email])]),
      Subject: new FormControl("", [Validators.required]),
      Message: new FormControl("", [Validators.required]),
    });
  }

  onSubmit(event){
    console.log(event);
  }
}
