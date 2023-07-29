# Crie um programa que recebe um número e Exibe o seu Fatorial!

numero = int(input('Digite um Número: '))

if numero > 0:

    fatorial = 1 
    
    for item in range(1, numero +1):   #+1 pq o range não considera o último valor
        fatorial = fatorial * item
        print(fatorial)