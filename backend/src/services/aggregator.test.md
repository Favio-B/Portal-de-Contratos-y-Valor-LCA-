# Pruebas de integracion — aggregator.service.js

## Escenario 1: todos los servicios activos
- Ejecutar: node mock-services.js
- Llamar: GET http://localhost:3007/dashboard/1
- Esperado: 6 servicios con status "ok"

## Escenario 2: servicio caido
- Detener mock del puerto 3004
- Llamar: GET http://localhost:3007/dashboard/1
- Esperado: riesgos.status = "unavailable", resto ok

## Escenario 3: todos caidos
- Detener mock-services.js
- Llamar: GET http://localhost:3007/dashboard/1
- Esperado: score=0, todas dimensiones unavailable, HTTP 200

Validado por: Carlos Andrés Lamus Gómez
  