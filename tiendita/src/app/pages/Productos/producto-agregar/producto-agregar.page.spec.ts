import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductoAgregarPage } from './producto-agregar.page';

describe('ProductoAgregarPage', () => {
  let component: ProductoAgregarPage;
  let fixture: ComponentFixture<ProductoAgregarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoAgregarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoAgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
