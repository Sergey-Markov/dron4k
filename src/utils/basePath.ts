// The `public/` folder is served at the site root, so raw string paths into it
// (unlike `next/image` static imports, which Next.js's asset pipeline prefixes
// automatically) need this prepended by hand on a sub-path deployment like GitHub
// Pages (e.g. /dron4k). Empty locally and on a root-domain deployment.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const withBasePath = (path: string) => `${BASE_PATH}${path}`;
