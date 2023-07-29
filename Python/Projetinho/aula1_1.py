#Calcular Salario por hora

salario_mensal = input("Qual é o seu salário Mensal? ")
hora_mensal = input('Quantas horas você trbalha por mês? ')

calculo = int(salario_mensal)/ int(hora_mensal)   # Esse int foi p/ transformar a String em tipo Inteiro p/ conseguir efetuar o calculo
print(calculo)