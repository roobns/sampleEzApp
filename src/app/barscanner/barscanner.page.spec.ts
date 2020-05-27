import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarscannerPage } from './barscanner.page';

describe('BarscannerPage', () => {
  let component: BarscannerPage;
  let fixture: ComponentFixture<BarscannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarscannerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarscannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
