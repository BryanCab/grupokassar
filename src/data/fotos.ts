import type { ImageMetadata } from 'astro';

const fotos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/fotos/*.jpg', { eager: true });
const logos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/clientes/*.png', { eager: true });

export const fotoDe = (nombre?: string) => (nombre ? fotos[`/src/assets/fotos/${nombre}.jpg`]?.default : undefined);
export const logoCliente = (nombre: string) => logos[`/src/assets/clientes/${nombre}.png`].default;
