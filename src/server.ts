import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context';

// Inicializa la aplicación Angular
const angularAppEngine = new AngularAppEngine();

/**
 * Handler compatible con Netlify.
 */
export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext();

  const result = await angularAppEngine.handle(request, context);
  return result || new Response('Not found', { status: 404 });
}

/**
 * Manejador usado por Angular CLI (dev-server y durante la compilación).
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);
