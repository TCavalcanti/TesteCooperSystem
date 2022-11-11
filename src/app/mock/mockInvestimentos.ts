import { Investimento } from './../investimentos/shared/investimento.model';
export const mockInvestimentos: Investimento[] = [
	{
		"nome": "INVESTIMENTO I", "objetivo": "Minha aposentadoria", "saldoTotal": "39321.29", "indicadorCarencia": "N",
		"acoes": [
			{ "id": 1, "nome": "Banco do Brasil (BBAS3)", "percentual": 28.1 },
			{ "id": 2, "nome": "Vale (VALE3)", "percentual": 20.71 },
			{ "id": 3, "nome": "Petrobras (PETR4)", "percentual": 21.63 },
			{ "id": 4, "nome": "Cemig (CMIG3)", "percentual": 12.41 },
			{ "id": 5, "nome": "Oi (OIBR3)", "percentual": 17.15 }
		]
	}, {
		"nome": "INVESTIMENTO II", "objetivo": "Viajem dos sonhos", "saldoTotal": "7300", "indicadorCarencia": "N",
		"acoes": [
			{ "id": 1, "nome": "Banco do Brasil (BBAS3)", "percentual": 35.81 },
			{ "id": 2, "nome": "Vale (VALE3)", "percentual": 26.42 },
			{ "id": 3, "nome": "Petrobras (PETR4)", "percentual": 37.77 }
		]
	}, {
		"nome": "INVESTIMENTO III", "objetivo": "Abrir meu próprio negócio", "saldoTotal": "26000","indicadorCarencia": "N",
		"acoes": [
			{ "id": 1, "nome": "Banco do Brasil (BBAS3)", "percentual": 41.1 },
			{ "id": 2, "nome": "Vale (VALE3)", "percentual": 22.43 },
			{ "id": 3, "nome": "Petrobras (PETR4)", "percentual": 26.12 },
			{ "id": 5, "nome": "OI (OIBR3)", "percentual": 10.35 }
		]
	}, {
		"nome": "INVESTIMENTO IV", "objetivo": "Investimento em carencia", "saldoTotal": "44000", "indicadorCarencia": "S",
		"acoes": [
			{ "id": 1, "nome": "Banco do Brasil (BBAS3)", "percentual": 41.1 },
			{ "id": 2, "nome": "Vale (VALE3)", "percentual": 22.43 },
			{ "id": 3, "nome": "Petrobras (PETR4)", "percentual": 26.12 },
			{ "id": 5, "nome": "OI (OIBR3)", "percentual": 10.35}
		]
	}]


export const mockInvestimentoI:Investimento = {
	"nome": "INVESTIMENTO I", "objetivo": "Minha aposentadoria", "saldoTotal": "39321.29", "indicadorCarencia": "N",
	"acoes": [
		{ "id": 1, "nome": "Banco do Brasil (BBAS3)", "percentual": 28.1 },
		{ "id": 2, "nome": "Vale (VALE3)", "percentual": 20.71 },
		{ "id": 3, "nome": "Petrobras (PETR4)", "percentual": 21.63 },
		{ "id": 4, "nome": "Cemig (CMIG3)", "percentual": 12.41 },
		{ "id": 5, "nome": "Oi (OIBR3)", "percentual": 17.15 }
	]
}


export const mockResponse = 
{
	"response": {
		"status": "200",
		"data": {
		"listaInvestimentos": [
			{
			"nome": "INVESTIMENTO I",
			"objetivo": "Minha aposentadoria",
			"saldoTotal": 39321.29,
			"indicadorCarencia": "N",
			"acoes": [
				{
				"id": "1",
				"nome": "Banco do Brasil (BBAS3)",
				"percentual": 28.1
				},
				{
				"id": "2",
				"nome": "Vale (VALE3)",
				"percentual": 20.71
				},
				{
				"id": "3",
				"nome": "Petrobras (PETR4)",
				"percentual": 21.63
				},
				{
				"id": "4",
				"nome": "Cemig (CMIG3)",
				"percentual": 12.41
				},
				{
				"id": "5",
				"nome": "Oi (OIBR3)",
				"percentual": 17.15
				}
			]
			},
			{
			"nome": "INVESTIMENTO II",
			"objetivo": "Viajem dos sonhos",
			"saldoTotal": 7300,
			"indicadorCarencia": "N",
			"acoes": [
				{
				"id": "1",
				"nome": "Banco do Brasil (BBAS3)",
				"percentual": 35.81
				},
				{
				"id": "2",
				"nome": "Vale (VALE3)",
				"percentual": 26.42
				},
				{
				"id": "3",
				"nome": "Petrobras (PETR4)",
				"percentual": 37.77
				}
			]
			},
			{
			"nome": "INVESTIMENTO III",
			"objetivo": "Abrir meu próprio negócio",
			"saldoTotal": 26000,
			"indicadorCarencia": "N",
			"acoes": [
				{
				"id": "1",
				"nome": "Banco do Brasil (BBAS3)",
				"percentual": 41.1
				},
				{
				"id": "2",
				"nome": "Vale (VALE3)",
				"percentual": 22.43
				},
				{
				"id": "3",
				"nome": "Petrobras (PETR4)",
				"percentual": 26.12
				},
				{
				"id": "5",
				"nome": "OI (OIBR3)",
				"percentual": 10.35
				}
			]
			},
			{
			"nome": "INVESTIMENTO IV",
			"objetivo": "Investimento em carencia",
			"saldoTotal": 44000,
			"indicadorCarencia": "S",
			"acoes": [
				{
				"id": "1",
				"nome": "Banco do Brasil (BBAS3)",
				"percentual": 41.1
				},
				{
				"id": "2",
				"nome": "Vale (VALE3)",
				"percentual": 22.43
				},
				{
				"id": "3",
				"nome": "Petrobras (PETR4)",
				"percentual": 26.12
				},
				{
				"id": "5",
				"nome": "OI (OIBR3)",
				"percentual": 10.35
				}
			]
			}
		]
		}
	}
	}