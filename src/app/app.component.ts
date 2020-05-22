import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["./app.style.scss"],
})
export class AppComponent {
  user: any = {
    email: "",
    plan: "basic",
    password: "",
  };

  onSubmitForm(f: NgForm) {}
}
