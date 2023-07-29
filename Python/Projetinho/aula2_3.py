'''
Encontre o maior entre 2 números
'''
primeiro_valor = input('Digite o 1°valor: ')
segundo_valor = input('Digite o 2°valor: ')

if int(primeiro_valor) > int(segundo_valor) :      # tive q transformá-lo em um numero pois estava tipo String
    print("O 1° Valor é o maior")
else:
    print('O 2° Valor é o maior')