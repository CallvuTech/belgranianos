# Belgranianos del Azul — Sitio web

Sitio institucional del movimiento Belgranianos del Azul, que impulsa la declaración de Azul (Buenos Aires) como Ciudad Belgraniana de la Argentina.

## Stack

- HTML5 + CSS3 + JavaScript vanilla (sin framework)
- Hosting: Cloudflare Pages (deploy automático desde `main`)
- Email transaccional: Brevo API v3
- Dominio: belgranianos.com.ar (Nic.ar → Cloudflare DNS)

## Estructura

```
index.html          # Página única con todas las secciones
styles.css          # Todos los estilos
contact.js          # Handler del formulario (fetch a /contact)
functions/
  contact.js        # Cloudflare Pages Function → Brevo API
img/                # Imágenes estáticas
_headers            # Security headers de Cloudflare Pages
robots.txt
sitemap.xml
wrangler.jsonc
```

## Variables de entorno

| Variable | Dónde | Para qué |
|---|---|---|
| `BREVO_API_KEY` | Cloudflare Pages → Settings → Variables y secretos | Enviar emails del formulario de contacto |

## Secciones del sitio

1. **Quiénes somos** — descripción del movimiento y sus integrantes
2. **Manuel Belgrano** — valores e ideas del prócer que inspiran el movimiento
3. **Ciudad Belgraniana** — qué significa la declaración y por qué Azul
4. **Azul** — historia y vínculo de la ciudad con Belgrano
5. **Iniciativa** — pasos y estado de la gestión ante autoridades
6. **Contacto** — formulario → BREVO_API_KEY → contacto@belgranianos.com.ar

## Email routing

`contacto@belgranianos.com.ar` → email personal del administrador (Cloudflare Email Routing)

## Pendiente

- Definir dominio definitivo (belgranianos.com.ar u otro)
- Contenido de secciones (textos e imágenes)
- Redes sociales del movimiento
