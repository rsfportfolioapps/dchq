import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScChatlogViewerComponent } from './sc-chatlog-viewer.component';

describe('ScChatlogViewerComponent', () => {
  let component: ScChatlogViewerComponent;
  let fixture: ComponentFixture<ScChatlogViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScChatlogViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScChatlogViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
