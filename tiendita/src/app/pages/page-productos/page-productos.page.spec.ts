import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageProductosPage } from './page-productos.page';

describe('PageProductosPage', () => {
  let component: PageProductosPage;
  let fixture: ComponentFixture<PageProductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
