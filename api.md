HTTP

API REST

Solicitação > Resposta
Request > Response

> Solicitante (client) 
    > Verbo HTTP - traz consigo a intenção da solicitação 
        - GET listagem ou obtenção do recurso (Read)
        - POST cadastro/gravação de um novo recurso (Create) Operação Atômica
        - PUT / PATCH atualização de um recurso (total ou parcial) (Update) Operação Atômica
        - DELETE  exclusão de um recurso (soft delete ou full/hard delete) (Delete) Operação Atômica
    
    > URL - para onde a solicitação é enviada 
     - base determina para qual máquina https://minha-api.com.br
     - path qual o caminho dentro da máquina que esta o recurso  https://minha-api.com.br/customers

    > Parâmetros
      > Query - utilizado para filtragem 
      https://minha-api.com.br/customers?chave=valor&chave2=valor2

      > Route/Path
        https://minha-api.com.br/customers/<id>/orders

      > Request/Response Body
      JSON
      {
        "name": "John",
        "age": 20,
        "isActive": true
        "address": {
            "street": "jbhdfhs"
        }
      }

> Servidor (server) 
  > processing
  > response