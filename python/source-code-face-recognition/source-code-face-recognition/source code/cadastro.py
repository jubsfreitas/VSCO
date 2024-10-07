# from flask import Flask, request, jsonify
# import cv2
# import pyautogui
# import pyodbc

# app = Flask(__name__,template_folder="app-da-anna/dist", static_folder="app-da-anna/dist/assets/")

# dados = (
#     "Driver={SQL Server};"
#     "Server=DESKTOP-HNS3ND4;"
#     "Database=DADOS_PACIENTES;"
# )

# def inserir_dados(nome, sobrenome, cpf, idade):
#     try:
#         conexao = pyodbc.connect(dados)
#         cursor = conexao.cursor()
        
#         sql = f"INSERT INTO Pacientes (nome, sobrenome, cpf, idade) VALUES (?, ?, ?, ?);"
        
#         cursor.execute(sql, nome, sobrenome, cpf, idade)
#         conexao.commit()
#         print("Dados inseridos com sucesso no banco de dados.")
        
#     except pyodbc.Error as err:
#         print("Erro ao inserir dados no banco de dados:", err)
#     finally:
#         if conexao:
#             conexao.close()
            
# @app.route('/enviar_dados', methods=['POST'])
# def receber_dados():
#     dados = request.get_json()

#     # Extrair os dados do JSON
#     nome = dados.get('nome', '')
#     sobrenome = dados.get('sobrenome', '')
#     cpf = dados.get('cpf', '')
#     idade = dados.get('idade', 0)  # 0 se não estiver presente

#     # Chamar a função para inserir os dados no banco de dados
#     inserir_dados(nome, sobrenome, cpf, idade)

#     return jsonify({"message": "Dados recebidos e inseridos com sucesso."})

# def tirar_captura_e_inserir_no_banco(cpf, nome, sobrenome, idade):
#     try:
#         imagem = pyautogui.screenshot()
#         imagem.save(f'images/{cpf}.png')
#         print('Reconhecimento feito!')

#         conexao = pyodbc.connect(dados)
#         cursor = conexao.cursor()

#         # Instrução SQL para inserir os dados na tabela "Pacientes"
#         comando = f"INSERT INTO Paciente (cpf, nome, sobrenome, idade) VALUES (?, ?, ?, ?);"

#         # Executar a consulta com parâmetros
#         cursor.execute(comando, cpf, f'{nome} {sobrenome}', idade)
#         conexao.commit()
#         print("Dados inseridos com sucesso no banco de dados.")

#     except Exception as e:
#         print("Erro ao inserir dados e/ou salvar a imagem:", str(e))
#     finally:
#         if conexao:
#             conexao.close()
            
# def receber_dados_e_acionar_acoes():
#     dados = request.get_json()

#     # Extrair os dados do JSON
#     nome = dados.get('nome', '')
#     sobrenome = dados.get('sobrenome', '')
#     cpf = dados.get('cpf', '')
#     idade = dados.get('idade', 0)  # 0 se não estiver presente

#     # Chamar a função para tirar a captura de tela e inserir os dados no banco de dados
#     tirar_captura_e_inserir_no_banco(cpf, nome, sobrenome, idade)

#     return jsonify({"message": "Dados recebidos e ações realizadas com sucesso."})



# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=8080)


# # while True:
# #     conexao = pyodbc.connect(dados)
# #     print("Conexão estabelecida com sucesso.")
# #     nome = input('Qual o seu nome? :')
# #     sobrenome = input('Qual seu sobrenome? :')
# #     cpf = input('Qual o seu CPF (só número)? :')
# #     idade = input("Qual sua idade? :")
# #     break

