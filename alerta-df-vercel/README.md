# ALERTA DF

Aplicação web com mapa Leaflet e camadas do OpenStreetMap, sem chave de API.

## Arquivos

- `index.html`: aplicação web.
- `api/relato.js`: informa que o envio de relatos ainda não está integrado a um serviço de atendimento.

## Publicar na Vercel

1. Envie `index.html` e a pasta `api` para um repositório Git ou importe a pasta do projeto na Vercel.
2. Faça o deploy. Não é necessário cadastrar chave de mapa, ativar faturamento ou criar variável de ambiente.

O mapa usa a biblioteca Leaflet e os tiles públicos do OpenStreetMap, carregados pela internet. Mantenha a atribuição visível no mapa e respeite a [política de uso dos tiles do OpenStreetMap](https://operations.osmfoundation.org/policies/tiles/). O serviço público é gratuito, mas tem capacidade limitada e não oferece garantia para tráfego intenso.

## Limitação do formulário de relatos

O formulário da página chama `/api/relato`, mas este projeto não tem integração com Defesa Civil, Bombeiros, banco de dados ou outro canal de atendimento. Por isso, a função responde que o serviço não está configurado; ela não armazena nem encaminha relatos. Para ativar esse recurso, é necessário escolher e configurar um serviço autorizado de recebimento, com as devidas proteções de privacidade.

## Teste local

Abra `index.html` por um servidor local ou use a CLI da Vercel. É necessária conexão com a internet para carregar a biblioteca e os tiles do mapa.
