programa
{
	
	funcao inicio()
	{
		escreva("1 - Abrir Netflix 2 - Abrir Amazon Prime 3 - Abrir HBO Max 4 - Sair")
		inteiro menu = 0
		escreva("\n" + "Sua opção:")
		leia(menu)

		escolha(menu)
		{
			caso 1:
			escreva("Ok! Abrir Netflix!!")
			pare

			caso 2:
			escreva("Ok! Abrir Amazon Prime!!")
			pare	

			caso 3:
			escreva("Ok! Abrir HBO Max!!")
			pare

			caso 4:
			escreva("Saindo do menu...")
			pare

			caso contrario:
			escreva("Você deve escolher uma das opções 1, 2 ou 3")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 416; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */