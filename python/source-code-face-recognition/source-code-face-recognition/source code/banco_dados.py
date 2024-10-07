import serial

# Configurar a porta serial
port = serial.Serial('COM3', 9600)  # Substitua 'COM3' pela porta do seu Arduino

# Inicializar uma lista para armazenar os valores
data_buffer = []

# Número de valores que você deseja armazenar
num_values_to_store = 3

# Variáveis para armazenar os resultados separados
oxigenio = None
bpm = None
temperatura = None

# Ler os valores enviados pelo Arduino e armazenar na lista
while True:
    data = port.readline().decode().strip()
    data_buffer.append(data)

    # Manter apenas os últimos "num_values_to_store" valores na lista
    if len(data_buffer) > num_values_to_store:
        data_buffer.pop(0)

    # Se tiver pelo menos 3 valores, atribuir às variáveis
    if len(data_buffer) == num_values_to_store:
        bpm, oxigenio, temperatura = data_buffer

        # Exibir os valores separados no console
        print(f'Valor lido de BPM: {bpm}')
        print(f'Valor lido de Oxigenação: {oxigenio}')
        print(f'Valor lido de Temperatura: {temperatura}')

# Fechar a porta serial (você pode descomentar esta linha se quiser fechar a porta serial no final)
#port.close()
