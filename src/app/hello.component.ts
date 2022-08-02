import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>WELCOME {{name}}!</h1>`,
  styles: [`h1 { font-family: Sans-serif; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
