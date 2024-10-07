import serial

# Configurar a porta serial
port = serial.Serial('COM3', 9600)  # Substitua 'COM3' pela porta do seu Arduino

# Ler os valores enviados pelo Arduino
data1 = (port.readline().decode().strip())
data2 = (port.readline().decode().strip())
data3 = (port.readline().decode().strip())

# Fechar a porta serial
port.close()

# Imprimir os valores no console
print(f'Valor lido da porta A0: {data1}')
print(f'Valor lido da porta A1: {data2}')
print(f'Valor lido da porta A2: {data3}')