import { Component } from '@angular/core';
import { PeriodicElement } from './model';
import { TablePeriodicElementService } from './table-periodic-element.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-table-periodic-element',
  templateUrl: './table-periodic-element.component.html',
  styleUrls: ['./table-periodic-element.component.scss']
})
export class TablePeriodicElementComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  periodicElements: Observable<PeriodicElement[]>
  constructor(private periodicElementsService: TablePeriodicElementService) {
    // this.periodicElements=this.periodicElementsService.getPeriodicElements()
    this.periodicElements = this.periodicElementsService.getPeriodicElements()
    this.periodicElementsService.loadPeriodicElements()

  }

}
