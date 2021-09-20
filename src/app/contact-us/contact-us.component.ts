import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
// import emailjs from 'emailjs-com';

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"],
})
export class ContactUsComponent implements OnInit {
  FormData;

  constructor() {}

  ngOnInit() {
    this.FormData = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      phone: new FormControl('', [Validators.required, Validators.pattern("[- +()0-9]{10}")]),
      message: new FormControl('', [Validators.required]),
    });
  }

  public sendEmail(event) {
  //   const serviceID = 'service_9g9kqie';
  //   const templateID = 'template_t21wn6j';
  //   const userID = 'user_sfneCMb69WYyr36OTf92K'
  //   emailjs.send(serviceID, templateID, event, userID)
  //   .then((response) => {
  //     console.log('SUCCESS!', response.status, response.text);
  //     alert("Message sent successfully.");
  //     this.FormData.reset();
  //  }, (err) => {
  //     console.log('FAILED...', err);
  //     alert("Failed to send the message.")
  //  });
  }



  // const templateParams = {
  //     name: 'James',
  //     notes: 'Check this out!'
  // };
  

}

