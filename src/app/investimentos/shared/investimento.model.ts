import { Acao } from "./acao.model";

export interface Investimento{
    nome:string;
    objetivo:string;
    saldoTotal:string;
    indicadorCarencia:string;
    acoes:Acao[];
}