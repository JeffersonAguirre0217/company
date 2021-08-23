import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPersefoneComponent } from './index-persefone.component';

describe('IndexPersefoneComponent', () => {
  let component: IndexPersefoneComponent;
  let fixture: ComponentFixture<IndexPersefoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPersefoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPersefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
