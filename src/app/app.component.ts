import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  counter = 0;

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--
  }
}
