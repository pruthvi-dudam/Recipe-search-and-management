import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-error-messages',
  templateUrl: './form-error-messages.component.html',
  styleUrls: ['./form-error-messages.component.scss'],
})
export class FormErrorMessagesComponent implements OnInit {
  @Input() validatorMessage = null;

  constructor() {}

  ngOnInit(): void {}
}
