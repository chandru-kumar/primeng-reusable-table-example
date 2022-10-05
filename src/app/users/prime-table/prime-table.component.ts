import { Component, Input, OnInit,ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-prime-table',
  templateUrl: './prime-table.component.html',
  styleUrls: ['./prime-table.component.scss']
})
export class PrimeTableComponent implements OnInit {

  @Input()
  data: any[] = [];

  @Input()
  columns: any[] = [];

  @Input()
  customBodyTemplate!: TemplateRef<any>;

  constructor() { }
  ngOnInit() {
      
  }

}
