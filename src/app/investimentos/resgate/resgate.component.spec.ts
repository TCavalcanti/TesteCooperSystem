import { mockInvestimentoI } from './../../mock/mockInvestimentos';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InvestimentosService } from './../shared/investimentos.service';
import { FormsModule, ReactiveFormsModule, FormArray } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgateComponent } from './resgate.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('ResgateComponent', () => {
  let component: ResgateComponent;
  let fixture: ComponentFixture<ResgateComponent>;
  let service:InvestimentosService;
  let route:ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ ResgateComponent ],
      providers:[
        InvestimentosService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (nome:string) =>{
                  return 'INVESTIMENTO I'
                }
              }
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResgateComponent);
    component = fixture.componentInstance;

    service = TestBed.inject(InvestimentosService);
    route = TestBed.inject(ActivatedRoute);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should test param in actived router', ()=>{
    expect(route.snapshot.paramMap.get('name')).toBe('INVESTIMENTO I');
  })


  it('should test getInvestimentoByNome', ()=>{

    const nome = route.snapshot.paramMap.get('name') as string;

    spyOn(service, 'getInvestimentoByNome').and.returnValue(of(mockInvestimentoI))

    component.ngOnInit();

    expect(component.investimento).toEqual(mockInvestimentoI)

  })


  it('should test invalid form', ()=>{
    
    const nome = route.snapshot.paramMap.get('name') as string;

    spyOn(service, 'getInvestimentoByNome').and.returnValue(of(mockInvestimentoI))

    component.ngOnInit();

    const form:FormArray = component.formArray() as FormArray;

    form.controls.forEach(element => {
      element.get('valorSaque')?.setValue(12000);
    });


    expect(component.formResgate.valid).toBeFalse();
    expect(component.validarForm().length).toBeGreaterThanOrEqual(1)

  })

  it('shoul test cacenalar', ()=>{

    spyOn(service, 'getInvestimentoByNome').and.returnValue(of(mockInvestimentoI))
    component.ngOnInit();

    const form:FormArray = component.formArray() as FormArray;

    form.controls.forEach(element => {
      if(element.get('nome')?.value === "Banco do Brasil (BBAS3)"){
        element.get('valorSaque')?.setValue(10000);
      }
    });

    component.cancelar();

    expect(component.calcularValorTotalSaque()).toEqual(0)

  })



  it('(I) should test insert incorrect value and show modal error',async () => {
    
    spyOn(service, 'getInvestimentoByNome').and.returnValue(of(mockInvestimentoI))
    component.ngOnInit();
    fixture.detectChanges();

    const form:FormArray = component.formArray() as FormArray;

    form.controls.forEach(element => {
      if(element.get('nome')?.value === "Banco do Brasil (BBAS3)"){
        element.get('valorSaque')?.setValue(12000);
      }
    });

    fixture.detectChanges();

    fixture.whenStable().then(()=>{
      const modal = fixture.debugElement.query(By.css('.modal-body'));
      const pErrors = modal.queryAll(By.css('.itemErrado'))

      expect(pErrors.length).toEqual(1);

    })

  })




  it('(I) should test insert correct value and show modal success', async ()=>{

    spyOn(service, 'getInvestimentoByNome').and.returnValue(of(mockInvestimentoI))
    component.ngOnInit();
    fixture.detectChanges();

    const form:FormArray = component.formArray() as FormArray;

    form.controls.forEach(element => {
      if(element.get('nome')?.value === "Banco do Brasil (BBAS3)"){
        element.get('valorSaque')?.setValue(10000);
      }
    });

    fixture.detectChanges()

    fixture.whenStable().then(()=>{
    
      const modal = fixture.debugElement.query(By.css('.modal-body'));

      const successModal = fixture.debugElement.query(By.css('.successModal'));
      const pErrors = modal.queryAll(By.css('.itemErrado'))

      expect(pErrors.length).toEqual(0);
      expect(successModal.nativeElement.textContent).toContain('NOVO RESGATE')

    })

  })


  it('(I) should test cancelar click', async ()=>{
    const spy1 = spyOn(component, 'cancelar');

    spyOn(service, 'getInvestimentoByNome').and.returnValue(of(mockInvestimentoI))
    component.ngOnInit();
    fixture.detectChanges();

    const form:FormArray = component.formArray() as FormArray;

    form.controls.forEach(element => {
      if(element.get('nome')?.value === "Banco do Brasil (BBAS3)"){
        element.get('valorSaque')?.setValue(10000);
      }
    });

    const cancelButton = fixture.debugElement.query(By.css('#cancelar'));
    cancelButton.triggerEventHandler('click')
    fixture.detectChanges();

    expect(spy1).toHaveBeenCalled();


  })

})
