import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomUsersComponent } from './custom-users.component';

describe('CustomUsersComponent', () => {
  let component: CustomUsersComponent;
  let fixture: ComponentFixture<CustomUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
