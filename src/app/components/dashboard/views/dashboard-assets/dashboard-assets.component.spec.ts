import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyService } from 'src/app/services/company/company.service';
import { provideMockStore } from '@ngrx/store/testing';
import { DashboardAssetsComponent } from './dashboard-assets.component';

describe('DashboardAssetsComponent', () => {
  let component: DashboardAssetsComponent;
  let fixture: ComponentFixture<DashboardAssetsComponent>;
  const initialState = { user: { companyIdSelected: 0 } };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAssetsComponent],
      imports: [HttpClientTestingModule],
      providers: [CompanyService, provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
