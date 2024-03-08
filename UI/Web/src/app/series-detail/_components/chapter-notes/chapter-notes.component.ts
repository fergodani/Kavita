import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookChapterItem } from 'src/app/book-reader/_models/book-chapter-item';
import { BookInfo } from 'src/app/book-reader/_models/book-info';
import { BookService } from 'src/app/book-reader/_services/book.service';
import { AccordeonComponent } from 'src/app/shared/accordeon/accordeon.component';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';

@Component({
  selector: 'app-chapter-notes',
  standalone: true,
  imports: [AccordeonComponent, LoadingComponent],
  templateUrl: './chapter-notes.component.html',
  styleUrl: './chapter-notes.component.scss'
})
export class ChapterNotesComponent implements OnInit{

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly bookService = inject(BookService);

  volumeId!: number;
  chapter!: BookChapterItem[];
  bookInfo!: BookInfo;
  isLoading: boolean = false;

  ngOnInit(): void {
    this.isLoading = true;
    const routeId = this.route.snapshot.paramMap.get('volumeId');
    if (routeId === null) {
      this.router.navigateByUrl('/home');
      return;
    }
    this.volumeId = parseInt(routeId, 10);
    this.bookService.getBookInfo(this.volumeId).subscribe((book: BookInfo) => {
      this.bookInfo = book;
    })
    this.bookService.getBookChapters(this.volumeId).subscribe((chapter:BookChapterItem[]) => {
      this.chapter = chapter;
      this.isLoading = false;
    })
  }

  saveNotes(): void {
    this.isLoading = true;
    this.bookService.saveNotes(this.chapter, this.volumeId).subscribe(() => {
      this.isLoading = false;
    })
  }

}
