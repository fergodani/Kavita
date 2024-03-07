import { Component, Input } from '@angular/core';
import {
  AsyncPipe,
  DecimalPipe,
  DOCUMENT,
  NgClass,
  NgFor,
  NgIf,
  NgOptimizedImage,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet
} from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { BookChapterItem } from 'src/app/book-reader/_models/book-chapter-item';

@Component({
  selector: 'app-accordeon',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './accordeon.component.html',
  styleUrl: './accordeon.component.scss',
})
export class AccordeonComponent {
  @Input() items: BookChapterItem[] | undefined;

  animationState = 'out';

  toggleAccordion(item: any) {
    if (item.children) {
      item.expanded = !item.expanded;
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
    }
  }
}
