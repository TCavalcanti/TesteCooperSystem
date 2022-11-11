import { take } from 'rxjs';
import { InvestimentosService } from './../shared/investimentos.service';
import { Investimento } from './../shared/investimento.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-resgate',
  templateUrl: './resgate.component.html',
  styleUrls: ['./resgate.component.scss']
})
export class ResgateComponent implements OnInit {

  public formResgate:FormGroup;
  public investimento:Investimento | null = null;

  constructor(private fb:FormBuilder, private investimentosService:InvestimentosService, private activatedRoute:ActivatedRoute) { 

    this.formResgate = this.buildForm();

  }

  ngOnInit(): void {
    const nomeInvestimento = this.activatedRoute.snapshot.paramMap.get('name') as string;
    this.investimentosService.getInvestimentoByNome(nomeInvestimento)
    .pipe(take(1))
    .subscribe(res => {
    
      this.investimento = res;

      const stocksForm = this.formArray();

      this.investimento.acoes.forEach(acao => {
        const item = this.fb.group({
          id: acao.id,
          nome:acao.nome,
          percentual: acao.percentual,
          saldoAcumulado: Number(this.investimento?.saldoTotal) * acao.percentual / 100,
          valorSaque: [null, [Validators.min(0), Validators.max(Number(this.investimento?.saldoTotal) * acao.percentual / 100)]]
        });

        stocksForm.push(item)
      })
    
    })

  }


  public formArray():FormArray{
    return this.formResgate.get('stocks') as FormArray
  }



  public calcularValorTotalSaque():number{
    return this.formArray().controls.reduce((acc, cur) => acc + cur.value.valorSaque, 0)
  }

  public cancelar():void{
    this.formArray().controls.forEach(e => {
      e.get('valorSaque')?.reset()
    })
  }


  public validarForm(){
    const items:any[] = []

    this.formArray().controls.forEach(e =>{
      if(e.status === 'INVALID'){
        items.push(e.value);
      }
    })

    return items;
  }


  private buildForm():FormGroup{
    return this.fb.group({
      stocks: this.fb.array([])
    })
  }

}
