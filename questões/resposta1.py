def main():
    vetor_de_entrada = []

    for x in range(0, 10):
        numero = int(input("Digite um numero: "))
        vetor_de_entrada.append(numero)

    valorShift = int(input("Digite o valor do shift: "))

    vetorShiftado = shift(vetor_de_entrada, valorShift)
    
    print("Vetor inicial")
    print(vetor_de_entrada)
    print("Vetor final")
    print(vetorShiftado)

def shift(vetor_de_entrada, valorShift):
    vetor_final = []
    for i in range(0,10):
        shiftRange = i - valorShift
        if shiftRange >= 10:
            shiftRange -= 10
            vetor_final.append(vetor_de_entrada[shiftRange])
            
        elif shiftRange < 0:
            shiftRange += 10
            vetor_final.append(vetor_de_entrada[shiftRange])
        else:
            vetor_final.append(vetor_de_entrada[shiftRange])
    return vetor_final
    

if __name__ == "__main__":
    main()
