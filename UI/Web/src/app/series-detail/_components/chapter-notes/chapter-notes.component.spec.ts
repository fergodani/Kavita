import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterNotesComponent } from './chapter-notes.component';

describe('ChapterNotesComponent', () => {
  let component: ChapterNotesComponent;
  let fixture: ComponentFixture<ChapterNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChapterNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
