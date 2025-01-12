import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context';

// Inicializa la aplicación Angular
const angularAppEngine = new AngularAppEngine();

/**
 * Handler para las funciones de Netlify.
 * Esto reemplaza el uso de Express en Netlify.
 */
export async function handler(event: any, context: any) {
  const netlifyContext = getContext();

  const request:any = {
    method: event.httpMethod,
    headers: event.headers,
    body: event.body,
    path: event.path,
    queryStringParameters: event.queryStringParameters,
  };

  const result:any = await angularAppEngine.handle(request, netlifyContext);

  return result || {
    statusCode: 404,
    body: 'Not Found',
  };
}
