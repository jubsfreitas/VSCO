from flask import Flask, render_template, request, jsonify
import cv2
import pyautogui
import pyodbc
from simple_facerec import SimpleFacerec
import queue
import time
import datetime
# import serial
import random

app = Flask(__name__,template_folder="app-da-anna/dist", static_folder="app-da-anna/dist/assets/")

dados = (
    "Driver={SQL Server};"
    "Server=ANNA\SQLEXPRESS;" 
    "Database=DADOS_PACIENTES;"
)

conexao = pyodbc.connect(dados)
cursor = conexao.cursor()

# contador_ap = 0
# contador_ac = 0
# contador_au = 0

# fila_prioritaria = queue.PriorityQueue()

# resultado = cursor.fetchone()

# Load Camera
# cap = cv2.VideoCapture(1)

# Tempo de captura em segundos
tempo_de_captura = 3

# Tempo inicial da captura
tempo_inicial = time.time()

def inserir_dados(nome, sobrenome, cpf, idade, data_criacao):
    try:
        # conexao = pyodbc.connect(dados)
        # cursor = conexao.cursor()
        
        sql = f"INSERT INTO Pacientes (nome, sobrenome, cpf, idade, data_criacao ) VALUES (?, ?, ?, ?, ?);"
        
        cursor.execute(sql, f'{nome}', f'{sobrenome}', f'{cpf}', idade, data_criacao)
        conexao.commit()
        print("Dados inseridos com sucesso no banco de dados.")
        
    except pyodbc.Error as err:
        print("Erro ao inserir dados no banco de dados:", err)
    finally:
        if conexao:
            conexao.close()
            
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')

# @app.route('/enviar_dados', methods=['POST'])
# def receber_dados():
#     dados = request.get_json()
#     # data = dados("obj")
#     # Extrair os dados do JSON
#     nome = dados["nome"]
#     sobrenome = dados["sobrenome"]
#     cpf = dados["cpf"]
#     idade = dados["idade"]  # 0 se não estiver presente
#     data_criacao = dados["dataCriacao"]
    
#     print(nome + ' ' + sobrenome)
#     print(cpf)
#     print(idade)
#     print(data_criacao)

#     # Chamar a função para inserir os dados no banco de dados
#     inserir_dados(nome, sobrenome, cpf, idade, data_criacao)

#     return jsonify({"message": "Dados recebidos e inseridos com sucesso."})
    
def tirar_captura_e_inserir_no_banco( nome, sobrenome, cpf, idade, data_criacao):
    try:
        # imagem = pyautogui.screenshot()
        # imagem.save(f'images/{cpf}.png')
        # print('Reconhecimento feito!')
        webcam = cv2.VideoCapture(0)
        if webcam.isOpened():
            validacao, frame = webcam.read()

            while validacao:  # deixa a camera funcionando
                validacao, frame = webcam.read()
                cv2.imshow("Pacientes", frame)
                key = cv2.waitKey(2)
                if key == 13:
                    imagem = pyautogui.screenshot()
                    imagem.save(f'C:/Users/jubsf/Downloads/app-da-anna/app-da-anna/python/source-code-face-recognition/source-code-face-recognition/source code/images/{cpf}.png')
                    print('Reconhecimento feito!')
                    break

        conexao = pyodbc.connect(dados)
        cursor = conexao.cursor()

        # Instrução SQL para inserir os dados na tabela "Pacientes"
        comando = f"INSERT INTO Pacientes (nome, sobrenome, cpf, idade, data_criacao ) VALUES (?, ?, ?, ?, ?);"

        # Executar a consulta com parâmetros
        cursor.execute(comando, f'{nome}', f'{sobrenome}', f'{cpf}', idade, data_criacao)
        conexao.commit()
        print("Dados inseridos com sucesso no banco de dados.")
    except Exception as e:
        print("Erro ao inserir dados e/ou salvar a imagem:", str(e))
    finally:
        if conexao:
            conexao.close()    

@app.route('/enviar_dados_e_acionar_acoes', methods=['POST'])            
def receber_dados_e_acionar_acoes():
    dados = request.get_json()

    # Extrair os dados do JSON
    nome = dados["nome"]
    sobrenome = dados["sobrenome"]
    cpf = dados["cpf"]
    idade = dados["idade"]  # 0 se não estiver presente
    data_criacao = dados["dataCriacao"]

    # Chamar a função para tirar a captura de tela e inserir os dados no banco de dados
    tirar_captura_e_inserir_no_banco( nome, sobrenome, cpf, idade, data_criacao)

    return jsonify({"message": "Dados recebidos e ações realizadas com sucesso."})







def inserir_dados_triagem( nome, idade, cpf, dia, peso, temperatura, oxigenacao, bpm, altura):
    try:
        # conexao = pyodbc.connect(dados)
        # cursor = conexao.cursor()
        
        sql = f"INSERT INTO Triagem (dia, peso, temperatura, oxigenacao, bpm, altura) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);"
        
        cursor.execute(sql, nome, idade, cpf, dia, f'{peso}', f'{temperatura}', f'{oxigenacao}', bpm, f'{altura}' )
        conexao.commit()
        print("Dados inseridos com sucesso no banco de dados.")
        
    except pyodbc.Error as err:
        print("Erro ao inserir dados no banco de dados:", err)
    finally:
        if conexao:
            conexao.close()
            
@app.route('/enviar_dados_e_gerar_senha', methods=['POST'])            
def receber_dados_triagem():
    dados = request.get_json()

    # Extrair os dados do JSON
    nome = nome
    # sobrenome = sobrenome
    cpf = dados["cpf"]
    idade = idade
    dia = datetime.date.today().strftime("%d-%m-%Y")
    peso = dados["peso"]
    temperatura = random.uniform(36, 37)
    oxigenacao = random.randint(90,100)
    bpm = random.randint(80, 110)
    altura = dados["altura"]
    
    contador_ap = 0
    contador_ac = 0
    contador_au = 0

    fila_prioritaria = queue.PriorityQueue()
    
    if idade > 60:
            tipo_atendimento = "AP"  # Atendimento Preferencial
            contador_ap += 1
            senha = f"{tipo_atendimento}{contador_ap:03d}"  # Senha sequencial para AP
    elif oxigenacao < 85:
            tipo_atendimento = "AU"  # Atendimento Urgente
            contador_au += 1
            senha = f"{tipo_atendimento}{contador_au:03d}"  # Senha sequencial para AU
    else:
            tipo_atendimento = "AC"  # Atendimento Comum
            
            contador_ac += 1
            senha = f"{tipo_atendimento}{contador_ac:03d}"  # Senha sequencial para AC

        # Adicionar atendimento à fila prioritária
    fila_prioritaria.put((tipo_atendimento, senha))
    print(senha)

    # Chamar a função para tirar a captura de tela e inserir os dados no banco de dados
    inserir_dados_triagem( nome, idade, cpf, dia, peso, temperatura, oxigenacao, bpm, altura)
    reconhecimento_facial( nome, idade, cpf )
    # mostrar_dados(peso, temperatura, oxigenacao, bpm, altura)

    return jsonify({"message": "Dados recebidos e ações realizadas com sucesso."})

# @app.route('/triagem')
# def mostrar_dados(peso, temperatura, oxigenacao, bpm, altura):
#     return render_template("index.html", pe = peso, temp = temperatura, oxi = oxigenacao, bp = bpm, alt = altura)
    

# def adicionar_pacientes_a_fila(nome, idade, cpf, oxigenio, temperatura, peso, altura, data_hoje, bpm):
#     try:
#         # conexao = pyodbc.connect(dados)
#         # cursor = conexao.cursor()
#         consulta_sql_secundaria = "INSERT INTO Triagem (nome, idade, cpf, oxigenacao, temperatura, peso, altura, dia, bpm) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
#         cursor.execute(consulta_sql_secundaria, (nome, idade, cpf, oxigenio, temperatura, peso, altura, data_hoje, bpm))
#         dados.commit()  # Certifique-se de fazer o commit para salvar as alterações na tabela secundária

#         if idade > 60:
#             tipo_atendimento = "AP"  # Atendimento Preferencial
#             contador_ap += 1
#             senha = f"{tipo_atendimento}{contador_ap:03d}"  # Senha sequencial para AP
#         elif oxigenio < 85:
#             tipo_atendimento = "AU"  # Atendimento Urgente
#             contador_au += 1
#             senha = f"{tipo_atendimento}{contador_au:03d}"  # Senha sequencial para AU
#         else:
#             tipo_atendimento = "AC"  # Atendimento Comum
#             contador_ac += 1
#             senha = f"{tipo_atendimento}{contador_ac:03d}"  # Senha sequencial para AC

#         # Adicionar atendimento à fila prioritária
#         fila_prioritaria.put((tipo_atendimento, nome, senha))

# def processar_dados_arduino():
#     global fila_prioritaria, contador_ap, contador_ac, contador_au, sfr

#     data_buffer = []
    
#     num_values_to_store = 3
    
#     # Restante do código...
    
#     cap = cv2.VideoCapture(0)

#     while cap.isOpened():
#         # Restante do código...
#         ret, frame = cap.read()

#         # Detect Faces
#         face_locations, cpf_name = sfr.detect_known_faces(frame)
#         for face_loc, cpf in zip(face_locations, cpf_name):
#             y1, x2, y2, x1 = face_loc[0], face_loc[1], face_loc[2], face_loc[3]

#             cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 200), 4)

#             # Simulação de consulta ao banco de dados para obter o nome e a idade do paciente
#             consulta_sql = "SELECT nome, idade FROM paciente WHERE cpf = ?"
#             cursor.execute(consulta_sql, (cpf,))
#             resultado = cursor.fetchone()

#             if resultado:
#                 nome, sobrenome, idade = resultado[0], resultado[1]
#             else:
#                 nome, sobrenome, idade = "Paciente não encontrado", 0

#         # Ler os valores enviados pelo Arduino e armazenar na lista
#         while True:
#             data = port.readline().decode().strip()
#             data_buffer.append(data)

#             # Manter apenas os últimos "num_values_to_store" valores na lista
#             if len(data_buffer) > num_values_to_store:
#                 data_buffer.pop(0)

#             # Se tiver pelo menos 3 valores, atribuir às variáveis
#             if len(data_buffer) == num_values_to_store:
#                 bpm, oxigenio, temperatura = data_buffer
                
#              # Fechar a porta serial (você pode descomentar esta linha se quiser fechar a porta serial no final)
#             # port.close()

#             oxigenio = data_buffer[-2]  # Sempre lê a penúltima linha
#             data_hoje = datetime.date.today().strftime("%d-%m-%Y")  # Obter a data atual
#             bpm = data_buffer[-1]  # Sempre lê a última linha
#             temperatura = data_buffer[-3]  # Sempre lê a antepenúltima linha


#         # Solicitar ao usuário que insira o peso e a altura
#         # peso = float(input("Digite o peso do paciente: "))
#         # altura = float(input("Digite a altura do paciente (em metros): "))

#             # Restante do código...
 
# @app.route('/processar_dados_arduino', methods=['POST'])           
# def processar_dados_arduino_route():
#     processar_dados_arduino()
#     return jsonify({"message": "Dados processados com sucesso."})

# # Rota para mostrar os atendimentos na fila
# @app.route('/atendimentos', methods=['GET'])
# def mostrar_atendimentos():
#     atendimentos = []
#     while not fila_prioritaria.empty():
#         tipo_atendimento, nome, senha = fila_prioritaria.get()
#         atendimentos.append({"tipo_atendimento": tipo_atendimento, "nome": nome, "senha": senha})
#     return jsonify({"atendimentos": atendimentos})


# Função para reconhecimento facial
# def reconhecer_paciente(frame):
#     # Reconhecimento facial usando a biblioteca SimpleFacerec
#     face_locations, patient_info = sfr.recognize_face(frame)

#     # Se nenhum rosto for detectado, retornamos None
#     if not face_locations:
#         return None

#     # Neste exemplo, consideraremos apenas o primeiro rosto detectado
#     primeiro_rosto = face_locations[0]
#     # Vamos supor que a biblioteca retorna as informações do paciente como um dicionário
#     info_paciente = patient_info[0]

#     return info_paciente


# Inicialize a câmera (substitua 0 pelo número de câmera correto)
# cap = cv2.VideoCapture(0)

# while True:
#     ret, frame = cap.read()

#     # Chamada à função de reconhecimento facial (fictícia neste exemplo)
#     dados_paciente = reconhecer_paciente(frame)

#     # Exibindo os dados fictícios do paciente
#     print("Dados do Paciente:")
#     print("Nome:", dados_paciente["nome"])
#     print("Sobrenome:", dados_paciente["sobrenome"])
#     print("Idade:", dados_paciente["idade"])
#     print("CPF:", dados_paciente["cpf"])

#     # Exibindo o quadro (você pode substituir isso pela sua lógica de exibição)
#     cv2.imshow("Frame", frame)

#     # Pressione 'q' para sair do loop
#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         break

# # Libere a câmera e feche a janela
# cap.release()
# cv2.destroyAllWindows()



# def adicionar_pacientes_a_fila(dados_paciente):
#     global contador_ap, contador_ac, contador_au

#     idade = dados_paciente["idade"]
#     oxigenio = dados_paciente["oxigenio"]

#     if idade > 60:
#         tipo_atendimento = "AP"  # Atendimento Preferencial
#         contador_ap += 1
#         senha = f"{tipo_atendimento}{contador_ap:03d}"
#     elif oxigenio < 85:
#         tipo_atendimento = "AU"  # Atendimento Urgente
#         contador_au += 1
#         senha = f"{tipo_atendimento}{contador_au:03d}"
#     else:
#         tipo_atendimento = "AC"  # Atendimento Comum
#         contador_ac += 1
#         senha = f"{tipo_atendimento}{contador_ac:03d}"

#     # Adiciona o paciente à fila prioritária
#     fila_prioritaria.put((tipo_atendimento, dados_paciente, senha))
    
# def adicionar_pacientes_a_fila(nome, idade, cpf, oxigenio, temperatura, peso, altura, data_hoje, bpm):
#     try:
#         # conexao = pyodbc.connect(dados)
#         # cursor = conexao.cursor()
#         consulta_sql_secundaria = "INSERT INTO Triagem (nome, idade, cpf, oxigenacao, temperatura, peso, altura, dia, bpm) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
#         cursor.execute(consulta_sql_secundaria, (nome, idade, cpf, oxigenio, temperatura, peso, altura, data_hoje, bpm))
#         dados.commit()  # Certifique-se de fazer o commit para salvar as alterações na tabela secundária

#         if idade > 60:
#             tipo_atendimento = "AP"  # Atendimento Preferencial
#             contador_ap += 1
#             senha = f"{tipo_atendimento}{contador_ap:03d}"  # Senha sequencial para AP
#         elif oxigenio < 85:
#             tipo_atendimento = "AU"  # Atendimento Urgente
#             contador_au += 1
#             senha = f"{tipo_atendimento}{contador_au:03d}"  # Senha sequencial para AU
#         else:
#             tipo_atendimento = "AC"  # Atendimento Comum
#             contador_ac += 1
#             senha = f"{tipo_atendimento}{contador_ac:03d}"  # Senha sequencial para AC

#         # Adicionar atendimento à fila prioritária
#         fila_prioritaria.put((tipo_atendimento, nome, senha))

#     cv2.imshow("Frame", frame)

#     # Verifique se o tempo de captura foi atingido
#     if time.time() - tempo_inicial >= tempo_de_captura:
#         break

# # Liberar a câmera e fechar a janela
# cap.release()
# cv2.destroyAllWindows()
        
#     except pyodbc.Error as err:
#         print("Erro ao inserir dados no banco de dados:", err)
#     finally:
#         if conexao:
#             conexao.close()
            

@app.route('/reconhecimento_facial', methods=['POST'])
def reconhecimento_facial(nome, idade, cpf):
    try:
        cap = cv2.VideoCapture(1)
        if cap.isOpened():
            ret, frame = cap.read()
            
            # while ret:
            #     ret, frame = cap.read()
            #     sfr = SimpleFacerec()
            #     sfr.load_encoding_images(f'C:/Users/jubsf/Downloads/app-da-anna/app-da-anna/python/source-code-face-recognition/source-code-face-recognition/source code/images/')

            #     # Detect Faces
            #     face_locations, cpf_name = sfr.detect_known_faces(frame)
            #     for face_loc, cpf in zip(face_locations, cpf_name):
            #         y1, x2, y2, x1 = face_loc[0], face_loc[1], face_loc[2], face_loc[3]

            #         cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 200), 4)

                    # Simulação de consulta ao banco de dados para obter o nome e a idade do paciente
            consulta_sql = "SELECT nome, idade FROM paciente WHERE cpf = ?"
            cursor.execute(consulta_sql, (cpf))
            resultado = cursor.fetchone()
            
            if resultado:
                nome, idade = resultado[0], resultado[1]
            else:
                nome, idade = "Paciente não encontrado", 0
                
            return nome, idade
                        
                # cv2.imshow("Frame", frame)
                
                # break

            cap.release()
            cv2.destroyAllWindows()
                        
            print("Reconhecimento facial feito e paciente adicionado à fila.")
                        
    except Exception as e:
        print("Erro ao fazer reconhecimento", str(e))
        
    finally:
        if conexao:
            conexao.close() 
    
    return jsonify({"message": "Reconhecimento facial feito e paciente adicionado à fila."})
    
#     # Rota para processar os dados do Arduino e fazer o reconhecimento facial
# def processar_dados():
#     global fila_prioritaria, contador_ap, contador_ac, contador_au, sfr
    
#     while cap.isOpened():
#         ret, frame = cap.read()

#     # Detect Faces
#         face_locations, cpf_name = sfr.detect_known_faces(frame)
#         for face_loc, cpf in zip(face_locations, cpf_name):
#             y1, x2, y2, x1 = face_loc[0], face_loc[1], face_loc[2], face_loc[3]

#             cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 200), 4)

#             # Simulação de consulta ao banco de dados para obter o nome e a idade do paciente
#             consulta_sql = "SELECT nome, idade FROM paciente WHERE cpf = ?"
#             cursor.execute(consulta_sql, (cpf,))
#             resultado = cursor.fetchone()

#             if resultado:
#                 nome, sobrenome, idade = resultado[0], resultado[1]
#             else:
#                 nome, sobrenome, idade = "Paciente não encontrado", 0
#         # Restante do código...

#         # Simulação de consulta ao banco de dados para obter o nome e a idade do paciente
#         consulta_sql = "SELECT nome, idade FROM paciente WHERE cpf = ?"
#         cursor.execute(consulta_sql, (cpf,))
#         resultado = cursor.fetchone()

#         # Restante do código...

#         # Processamento dos dados do Arduino
#         # Restante do código...

#         # Adicionar atendimento à fila prioritária
#         fila_prioritaria.put((tipo_atendimento, nome, sobrenome, idade, senha))
        
#         cv2.imshow("Frame", frame)

#     # Verifique se o tempo de captura foi atingido
#     if time.time() - tempo_inicial >= tempo_de_captura:
#         break

# Liberar a câmera e fechar a janela
# cap.release()
# cv2.destroyAllWindows()

    
# @app.route('/processar_dados', methods=['POST'])
# def processar_dados_route():
#     processar_dados()
#     return jsonify({"message": "Dados processados com sucesso."})

# # Rota para mostrar os atendimentos na fila
# @app.route('/atendimentos', methods=['GET'])
# def mostrar_atendimentos():
#     atendimentos = []
#     while not fila_prioritaria.empty():
#         tipo_atendimento, nome, senha = fila_prioritaria.get()
#         atendimentos.append({"tipo_atendimento": tipo_atendimento, "nome": nome, "senha": senha})
#     return jsonify({"atendimentos": atendimentos})


if __name__ == "__main__":
    app.run(host='0.0.0.0')