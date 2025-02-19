import { createJiti } from 'jiti';
import { fileURLToPath } from 'node:url';

const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti we can import .ts files :)
jiti.import('./src/env/client.ts');
jiti.import('./src/env/server.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
