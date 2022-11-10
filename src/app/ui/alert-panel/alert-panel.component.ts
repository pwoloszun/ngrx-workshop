import { Component, Input, OnInit } from '@angular/core';

type AlertType = 'primary' | 'secondary' | 'warning' | 'danger' | 'dark' | 'success';

const typeClassMap = {
  primary: 'bg-blue-100 text-blue-700',
  secondary: 'bg-purple-100 text-purple-700',
  warning: 'bg-yellow-100 text-yellow-700',
  danger: 'bg-red-100 text-red-700',
  dark: 'bg-gray-300 text-gray-800',
  success: 'bg-green-100 text-green-700',
};

@Component({
  selector: 'app-alert-panel',
  templateUrl: './alert-panel.component.html',
})
export class AlertPanelComponent implements OnInit {

  @Input()
  type!: AlertType;

  @Input()
  message: string | null = '';

  get cssClasses() {
    return (typeClassMap as any)[this.type];
  }

  ngOnInit(): void { }

}
