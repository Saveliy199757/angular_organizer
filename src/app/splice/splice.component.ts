import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'splice-app',
  templateUrl: '/splice.component.html',
  styleUrls: ['./splice.component.css']
})
export class SpliceComponent {
  @Input() userName: string;
  _userAge: number;

  @Input()
  set userAge(age:number) {
    if(age<0)
      this._userAge=0;
    else if(age>100)
      this._userAge=100;
    else
      this._userAge = age;
  }
  get userAge() { return this._userAge; }

  @Output() onChanged = new EventEmitter<boolean>();
  change(increased:any) {
    this.onChanged.emit(increased);
  }
}
