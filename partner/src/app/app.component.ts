import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public constructor(
    private observable: Observable<string>
  ){

  }
  private handleSubmit = (e: any) => {
    e.preventDefault();

    const { target: form } = e;
    const input = form?.elements?.something;
    this.observable.subscribe(input.value);
    form.reset();
  }

  ngOnInit(): void {

  }

  title = 'partner';
}
