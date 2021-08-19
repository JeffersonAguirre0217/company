import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPersefoneComponent } from './information-persefone.component';

describe('InformationPersefoneComponent', () => {
  let component: InformationPersefoneComponent;
  let fixture: ComponentFixture<InformationPersefoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationPersefoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationPersefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
