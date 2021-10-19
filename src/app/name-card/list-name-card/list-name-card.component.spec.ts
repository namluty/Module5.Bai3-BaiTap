import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNameCardComponent } from './list-name-card.component';

describe('ListNameCardComponent', () => {
  let component: ListNameCardComponent;
  let fixture: ComponentFixture<ListNameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNameCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
