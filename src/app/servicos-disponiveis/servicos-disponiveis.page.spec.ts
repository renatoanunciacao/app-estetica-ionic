import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicosDisponiveisPage } from './servicos-disponiveis.page';

describe('ServicosDisponiveisPage', () => {
  let component: ServicosDisponiveisPage;
  let fixture: ComponentFixture<ServicosDisponiveisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicosDisponiveisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicosDisponiveisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
