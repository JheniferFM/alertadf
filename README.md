# ALERTA DF

Aplicação web com mapa esquemático em SVG, sem serviço externo de mapas ou chave de API.

## Arquivos

- `index.html`: aplicação web.
- `api/relato.js`: informa que o envio de relatos ainda não está integrado a um serviço de atendimento.

## Publicar na Vercel

1. Envie `index.html` e a pasta `api` para um repositório Git ou importe a pasta do projeto na Vercel.
2. Faça o deploy. Não é necessário cadastrar chave de mapa, ativar faturamento ou criar variável de ambiente.

O mapa é desenhado no próprio `index.html`; não carrega tiles, imagens ou bibliotecas de mapas externas. O desenho é esquemático e serve para visualizar os riscos simulados por região, não para navegação ou localização precisa.

## Limitação do formulário de relatos

O formulário da página chama `/api/relato`, mas este projeto não tem integração com Defesa Civil, Bombeiros, banco de dados ou outro canal de atendimento. Por isso, a função responde que o serviço não está configurado; ela não armazena nem encaminha relatos. Para ativar esse recurso, é necessário escolher e configurar um serviço autorizado de recebimento, com as devidas proteções de privacidade.

## Teste local

Abra `index.html` por um servidor local ou use a CLI da Vercel. O mapa esquemático funciona sem uma chave ou conexão com um provedor de mapas.
