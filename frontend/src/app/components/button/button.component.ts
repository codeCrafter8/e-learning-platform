import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Type} from './button.types';



@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {

  @Input() text : string = '';
  @Input() type : string = Type.DEFAULT;
  @Output() buttonClick = new EventEmitter<void>();

  getButtonClass(): string {
    switch (this.type) {
      case Type.BUY:
        return 'buy-button';
      case Type.LOG_IN:
        return 'log-in-button';
      case Type.SIGN_UP:
        return 'sign-up-button';
      case Type.SUBMIT:
        return 'submit-button';
      default:
        return 'default-button';
    }
  }

  onClick(): void { // Add this method
    this.buttonClick.emit();
  }
}
