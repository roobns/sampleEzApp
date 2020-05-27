import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BatterystatusPage } from './batterystatus.page';

describe('BatterystatusPage', () => {
  let component: BatterystatusPage;
  let fixture: ComponentFixture<BatterystatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatterystatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BatterystatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
