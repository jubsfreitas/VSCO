import queue
import time

import cv2
import pyodbc
import serial  # novo

from simple_facerec import SimpleFacerec

# Defina um contador para cada grupo de atendimento
contador_ap = 0
contador_ac = 0
contador_au = 0

# Crie uma fila prioritária para os atendimentos
fila_prioritaria = queue.PriorityQueue()

# Encode faces from a folder
sfr = SimpleFacerec()
sfr.load_encoding_images("C:/Users/jubsf/Downloads/app-da-anna/app-da-anna/python/source-code-face-recognition/source-code-face-recognition/source code/images/")

# Load Camera
cap = cv2.VideoCapture(0)


# Tempo de captura em segundos
tempo_de_captura = 3

# Tempo inicial da captura
tempo_inicial = time.time()

# Conexão com o banco de dados usando pyodbc
conn = pyodbc.connect(
    "Driver={SQL Server};"
    "Server=DESKTOP-HNS3ND4;"
    "Database=DADOS_PACIENTES;")

cursor = conn.cursor()

while cap.isOpened():
    ret, frame = cap.read()

    # Detect Faces
    face_locations, cpf_name = sfr.detect_known_faces(frame)
    for face_loc, cpf in zip(face_locations, cpf_name):
        y1, x2, y2, x1 = face_loc[0], face_loc[1], face_loc[2], face_loc[3]

        cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 200), 4)

        # Simulação de consulta ao banco de dados para obter o nome e a idade do paciente
        consulta_sql = "SELECT nome, idade FROM paciente WHERE cpf = ?"
        cursor.execute(consulta_sql, (cpf,))
        resultado = cursor.fetchone()

        if resultado:
            nome_do_paciente, idade = resultado[0], resultado[1]
        else:
            nome_do_paciente, idade = "Paciente não encontrado", 0
# parte nova --------------------------------------------------------------------------------------------

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

            # Fechar a porta serial (você pode descomentar esta linha se quiser fechar a porta serial no final)
            # port.close()

            oxigenio = data_buffer[-2]  # Sempre lê a penúltima linha
            data_hoje = datetime.date.today().strftime("%d-%m-%Y")  # Obter a data atual
            bpm = data_buffer[-1]  # Sempre lê a última linha
            temperatura = data_buffer[-3]  # Sempre lê a antepenúltima linha


        # Solicitar ao usuário que insira o peso e a altura
        peso = float(input("Digite o peso do paciente: "))
        altura = float(input("Digite a altura do paciente (em metros): "))
#parte nova -----------------------------------------------------------------------------------------

        consulta_sql_secundaria = "INSERT INTO Triagem (nome, idade, cpf, oxigenacao, temperatura, peso, altura, dia, bpm) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
        cursor.execute(consulta_sql_secundaria, (nome_do_paciente, idade, cpf, oxigenio, temperatura, peso, altura, data_hoje, bpm))
        conn.commit()  # Certifique-se de fazer o commit para salvar as alterações na tabela secundária

        if idade > 60:
            tipo_atendimento = "AP"  # Atendimento Preferencial
            contador_ap += 1
            senha = f"{tipo_atendimento}{contador_ap:03d}"  # Senha sequencial para AP
        elif oxigenio < 85:
            tipo_atendimento = "AU"  # Atendimento Urgente
            contador_au += 1
            senha = f"{tipo_atendimento}{contador_au:03d}"  # Senha sequencial para AU
        else:
            tipo_atendimento = "AC"  # Atendimento Comum
            contador_ac += 1
            senha = f"{tipo_atendimento}{contador_ac:03d}"  # Senha sequencial para AC

        # Adicionar atendimento à fila prioritária
        fila_prioritaria.put((tipo_atendimento, nome_do_paciente, senha))

    cv2.imshow("Frame", frame)

    # Verifique se o tempo de captura foi atingido
    if time.time() - tempo_inicial >= tempo_de_captura:
        break

# Liberar a câmera e fechar a janela
cap.release()
cv2.destroyAllWindows()



# Imprimir a senha gerada, o nome e a idade do paciente
while not fila_prioritaria.empty():
    tipo_atendimento, nome, senha = fila_prioritaria.get()
    print(f"Nome: {nome} Senha: {senha}")

# Fechar a conexão com o banco de dados
conn.close()
