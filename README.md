# Limpiador a Vapor Multiusos — página de ventas

Página responsive en español colombiano construida con React + Vite.

## Ejecutar localmente

```bash
npm install
npm run dev
```

## Antes de publicar

1. Confirma el precio real, el precio de referencia y las condiciones de la oferta.
2. Verifica con el proveedor las especificaciones y los 9 accesorios anunciados.
3. En `src/App.jsx`, cambia `PRICE` y `OLD_PRICE` según la oferta real.
4. Configura `ORDER_URL` con el enlace real de checkout/formulario COD (Shopify/Releasit o el proveedor logístico). Mientras esté vacío, el formulario solo muestra un aviso y **no envía pedidos**.
5. Actualiza marca, envío, garantía, devoluciones, privacidad y tiempos de entrega con las condiciones reales.

La ilustración del producto es CSS decorativo, no una fotografía del artículo real. Sustitúyela por imágenes auténticas del producto antes de anunciarlo.

## Despliegue

El proyecto puede importarse desde GitHub en Lovable o desplegarse en un servicio compatible con Vite.