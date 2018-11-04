import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  // テンプレートのコンポーネントにバインドするため'public'でなければならない
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
