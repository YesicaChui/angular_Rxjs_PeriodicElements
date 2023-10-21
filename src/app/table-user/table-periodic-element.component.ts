import { Component } from '@angular/core';
import { PeriodicElement } from './model';
import { TablePeriodicElementService } from './table-periodic-element.service';
import { Observable, filter, map, of } from 'rxjs';



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
    of(1, 2, 3, 4, 5)
      .pipe(
        filter(v => v < 3)
      )
      .subscribe({
        next: (v) => console.log(v)
      })

     this.periodicElements
      .pipe(        
        map(elements => elements.filter(element => element.weight <10))
      )
      .subscribe(filtered => {
        // Ahora filtered es un PeriodicElement
        console.log(filtered)
        this.periodicElements=of(filtered)
      })
  }

}
