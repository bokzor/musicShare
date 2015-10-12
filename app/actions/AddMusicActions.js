import alt from '../alt';

class AddMusicActions {
  constructor() {
    this.generateActions(
      'addMusicSuccess',
      'addMusicFail',
      'updateTitle',
      'updateIsMix',
      'invalidTitle',
      'invalidIsMix'
    );
  }

  addMusic(title, isMix) {
    console.log('AddMusic : ' + title + ' ' + isMix);
    $.ajax({
      type: 'POST',
      url: '/api/music',
      data: { title: title, isMix: isMix }
    })
      .done((data) => {
        this.actions.addMusicSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addMusicFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddMusicActions);