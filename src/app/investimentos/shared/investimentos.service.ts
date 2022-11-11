import { Investimento } from './investimento.model';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { map, Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class InvestimentosService{

    private url = `https://run.mocky.io/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653`;


    public constructor(private http:HttpClient){}
    

    public getInvestimentos():Observable<Investimento[]>{
        return this.http.get(this.url).pipe(
            map(this.mapToInvestimentos)
        )
    }


    public getInvestimentoByNome(investimento:string):Observable<Investimento>{

       return this.http.get(this.url).pipe(
            map(e => this.mapToInvestimento(e, investimento))
        )

    }

    private mapToInvestimentos(data:any): Investimento[]{
        const investimentos = data.response.data.listaInvestimentos as Investimento[];
        return investimentos;
    }


    private mapToInvestimento(data:any, investimento:string):Investimento{
        return data.response.data.listaInvestimentos
            .find((item:Investimento) => item.nome === investimento) as Investimento;
    }

}