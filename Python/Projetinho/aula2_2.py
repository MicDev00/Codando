'''
Eu cheguei atrasado na aula, ainda posso entrar ?
Se essa não for sua terceira vez chegando atrasado sim, caso contrário irá tomar uma suspensão!
'''

numero_de_atrasos = 3

if numero_de_atrasos == 3:
    print('Você está suspenso')
elif numero_de_atrasos ==2:
    print('Pode entrar. Mais um atraso e tomará suspensão')
elif numero_de_atrasos == 1:
    print('Pode entrar, mais 2 atrasos e será suspenso')

else:
    print('Pode entrar!')
