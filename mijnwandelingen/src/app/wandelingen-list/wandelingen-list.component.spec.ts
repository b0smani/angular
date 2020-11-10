import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WandelingenListComponent } from './wandelingen-list.component';

describe('WandelingenListComponent', () => {
  let component: WandelingenListComponent;
  let fixture: ComponentFixture<WandelingenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WandelingenListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WandelingenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
