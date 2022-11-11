import { Investimento } from './../shared/investimento.model';
import { InvestimentosService } from './../shared/investimentos.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public investimentos:Investimento[] = [];

  constructor(private investimentosService:InvestimentosService) { }

  ngOnInit(): void {
    this.investimentosService.getInvestimentos()
    .pipe(take(1))
    .subscribe(res => {
      this.investimentos = res;
    })

  }

}
