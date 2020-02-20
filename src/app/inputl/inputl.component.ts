import {Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'inputl-app',
  templateUrl: '/inputl.component.html',
  styleUrls: ['./inputl.component.css']
})
export class InputlComponent {
  @Input() userName: string;
  @Output() userNameChange = new EventEmitter<string>();
  onNameChange(model: string) {

    this.userName = model;
    this.userNameChange.emit(model);
  }

  visibility: boolean = true;
  // переключаем переменную
  toggle(){
    this.visibility = !this.visibility;
  }

}
