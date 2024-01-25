arquivo = open('nomeArquivo.txt', 'r')

texto_arquivo = arquivo.read()
lista_linhas = arquivo.readlines()

arquivo = open('nomeArquivo.txt', 'w')
arquivo.write('Estou escrevendo no arquivo.\n')

arquivo = open('nomeArquivo.txt', 'a')
arquivo.write('Estou adicionando um texto a mais no arquivo.\n')

arquivo.close()


with open('nomeArquivo.txt', 'a') as arquivo:
    arquivo.write('Estou escrevendo no arquivo com with.\n')
    arquivo.write('Continuando a escrever no arquivo com with.\n')