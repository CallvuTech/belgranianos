# Belgranianos del Azul

Sitio institucional del movimiento **Belgranianos del Azul**, que impulsa la declaración de Azul (Buenos Aires, Argentina) como **Ciudad Belgraniana de la Argentina**.

## Stack

- HTML5 + CSS3 + JavaScript vanilla
- [Cloudflare Pages](https://pages.cloudflare.com/) — hosting con deploy automático desde `main`
- [Brevo](https://www.brevo.com/) — email transaccional para el formulario de contacto

## Desarrollo local

```bash
npx wrangler pages dev .
```

## Deploy

El deploy es automático al hacer push a `main` vía Cloudflare Pages CI.

## Variables de entorno

| Variable | Descripción |
|---|---|
| `BREVO_API_KEY` | API key de Brevo para envío de emails |

Configurar en Cloudflare Pages → Settings → Variables y secretos.

## Licencia

Apache 2.0 — ver [LICENSE](LICENSE).
