import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return { name: 'Kitty Via', short_name: 'Kitty Via', description: 'Thoughtful cat-care recommendations.', start_url: '/', display: 'standalone', background_color: '#f8f5ef', theme_color: '#f8f5ef', icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }] };
}
