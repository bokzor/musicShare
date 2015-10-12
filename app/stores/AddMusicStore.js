import alt from '../alt';
import AddMusicActions from '../actions/AddMusicActions';

class AddMusicStore {
  constructor() {
    this.bindActions(AddMusicActions);
    this.title = '';
    this.isMix = '';
    this.helpBlock = '';
    this.titleValidationState = '';
    this.isMixValidationState = '';
  }

  onAddMusicSuccess(successMessage) {
    this.titleValidationState = 'has-success';
    this.helpBlock = successMessage;
  }

  onAddMusicFail(errorMessage) {
    this.titleValidationState = 'has-error';
    this.helpBlock = errorMessage;
  }

  onUpdateTitle(event) {
    this.title = event.target.value;
    this.titleValidationState = '';
    this.helpBlock = '';
  }

  onUpdateIsMix(event) {
    this.isMix = event.target.value;
    this.isMixValidationState = '';
  }

  onInvalidTitle() {
    this.titleValidationState = 'has-error';
    this.helpBlock = 'Please enter a title.';
  }

  onInvalidIsMix() {
    this.isMixValidationState = 'has-error';
  }
}

export default alt.createStore(AddMusicStore);