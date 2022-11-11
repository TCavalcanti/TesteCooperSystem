import { mockInvestimentos, mockResponse, mockInvestimentoI } from './../../mock/mockInvestimentos';
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { InvestimentosService } from './investimentos.service';

describe('InvestimentosService', ()=>{

    let service:InvestimentosService;
    let httpMock:HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations:[],
            providers: [],
            
        }).compileComponents();

        service = TestBed.inject(InvestimentosService)
        httpMock = TestBed.inject(HttpTestingController);
    })

    it('should be create service', ()=>{
        expect(service).toBeTruthy()
    })

 
    it('should test getInvestimentos', ()=>{
        spyOn((service as any), 'mapToInvestimentos').and.returnValue(mockInvestimentos)

        service.getInvestimentos().subscribe(
            res =>{
                expect(res).toEqual(mockInvestimentos)
            }
        )


        const url = `https://run.mocky.io/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653`;
        const req = httpMock.expectOne(url);
        expect(req.request.method).toEqual('GET')

        req.flush(mockResponse);

    })


    it('should test getInvestimentoByNome', ()=>{

        spyOn((service as any), 'mapToInvestimento').and.returnValue(mockInvestimentoI)

        service.getInvestimentoByNome('INVESTIMENTO I').subscribe(
            res =>{
                expect(res).toEqual(mockInvestimentoI)
            }
        )


        const url = `https://run.mocky.io/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653`;
        const req = httpMock.expectOne(url);
        expect(req.request.method).toEqual('GET')

        req.flush(mockResponse);

    })


    it('should test mapInvestimento', ()=>{
       const mapInvestimento = service['mapToInvestimento'] ;
       expect(mapInvestimento(mockResponse, 'INVESTIMENTO I').nome).toEqual('INVESTIMENTO I')
    })


    it('should test mapInvestimentos', ()=>{
        const mapInvestimento = service['mapToInvestimentos'] ;
        expect(mapInvestimento(mockResponse).length).toEqual(4)
     })

})