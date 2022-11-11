import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvestimentosService } from './../shared/investimentos.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ListComponent } from './list.component';
import { of } from 'rxjs';
import { mockInvestimentos } from 'src/app/mock/mockInvestimentos';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service:InvestimentosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [ ListComponent ],
      providers:[
        InvestimentosService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;

    service = TestBed.inject(InvestimentosService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should list all investments', ()=>{

    spyOn(service, 'getInvestimentos').and.returnValue(of(mockInvestimentos))

    component.ngOnInit();

    expect(component.investimentos).toEqual(mockInvestimentos)


  });

});
