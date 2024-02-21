// projects/app/src/environments/environments.ts
// We would import environment.prod.ts
// if it was on a production environment
import { globalEnvironment } from '../../environments/environment';
export const environment = {
  global: globalEnvironment,
  application: {
    project: 'Angular-17-jwt-auth'
  }
};
