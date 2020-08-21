import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmersSearchComponent } from './farmers-search.component';

describe('FarmersSearchComponent', () => {
  let component: FarmersSearchComponent;
  let fixture: ComponentFixture<FarmersSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmersSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
