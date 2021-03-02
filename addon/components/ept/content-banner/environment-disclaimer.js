import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class EPTContentBannerEnvironmentDisclaimerComponent extends Component {
  @service('ept') state;
  iconSize = 37;

  @tracked isShowingDisclaimer = true;

  get permanentlyDismiss() {
    return this.args.permanentlyDismiss === undefined ? false : this.args.permanentlyDismiss;
  }

  get restoreIconPosition() {
    return this.args.restoreIconPosition === undefined ? "right: 5px; " : `right: ${5 + this.iconSize * this.args.restoreIconPosition}px !important;`

  }
}
