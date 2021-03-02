import Service from '@ember/service';
import { getOwner } from '@ember/application';

export default class EptService extends Service {
  appConfig = null; // reference to the applications environment as exported by ~/config/environment

  constructor() {
    super(...arguments);

    this.appConfig = getOwner(this).resolveRegistration('config:environment');

  }
}
