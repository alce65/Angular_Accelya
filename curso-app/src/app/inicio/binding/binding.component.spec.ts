import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingComponent } from './binding.component';
import { FormsModule } from '@angular/forms';

describe('BindingComponent', () => {
  let component: BindingComponent;
  let fixture: ComponentFixture<BindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
