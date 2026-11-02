# Grupo Kassar

Sitio web de Grupo Kassar: control de plagas (Kassar Control Total), control de patógenos (Kassar Good Washed) y sanitización.

Hecho con Astro, Tailwind CSS, GSAP y Lenis. La intro usa WebGL2 directo. El sitio es 100% estático y las solicitudes de cotización se envían por WhatsApp.

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Revisa tipos y genera `dist/` |
| `npm run preview` | Sirve `dist/` en local |

## Estructura

```
docs/              Créditos de fotos
public/            Archivos servidos tal cual (robots, puntos del águila)
scripts/           Utilidades (imagen para redes)
src/assets/        Logos, clientes y fotos (se optimizan al compilar)
src/components/    layout, secciones y ui
src/data/          Contenido: sitio, plagas y sectores
src/pages/         Rutas del sitio
src/scripts/       Animaciones y partículas
```

Para cambiar textos, teléfonos, plagas o sectores, edita `src/data/`.

## Publicación

El sitio se publica en GitHub Pages con `.github/workflows/deploy.yml` en cada push a `main`.

### Vista previa (sin dominio)

1. El repositorio debe ser público. En GitHub: **Settings > Pages > Source: GitHub Actions**.
2. El sitio queda en `https://bryancab.github.io/grupokassar/`. El workflow define `SITIO_URL` y `SITIO_BASE` para que los enlaces funcionen en ese subdirectorio. Los enlaces internos usan `enlace()` de `src/data/sitio.ts`.

### Dominio propio (grupokassar.com)

1. En el workflow, elimina las variables `SITIO_URL` y `SITIO_BASE`.
2. Crea `public/CNAME` con `grupokassar.com`.
3. En Porkbun, crea 4 registros `A` en la raíz (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) y un `CNAME` de `www` hacia `bryancab.github.io`.
4. En **Settings > Pages > Custom domain** escribe `grupokassar.com` y activa **Enforce HTTPS**.

## Contacto por WhatsApp

El formulario arma el mensaje y abre `wa.me` con el número de la sucursal (Ensenada o Guadalajara). Los números están en `src/data/sitio.ts`.
