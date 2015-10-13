import React from 'react';
import mixin from 'mixin-decorator'
import addChangeHandler from '../decorators/changeHandler'

import AddMusicStore from '../stores/AddMusicStore'
import AddMusicActions from '../actions/AddMusicActions'

@mixin(addChangeHandler)
class AddMusicAd extends React.Component {
    constructor(props) {
        super(props);
        this.state = AddMusicStore.getState();
        this.onChange = this.onChange.bind(this);
    }



    componentDidMount() {
        AddMusicStore.listen(this.onChange);
    }

    componentWillUnmount() {
        AddMusicStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <section>
                <section className="vbox">
                    <section className="scrollable padder-lg w-f-md" id="bjax-target">
                        <h2 className="font-thin m-b">Add a music</h2>
                        <section className="panel panel-default">
                            <header className="panel-heading font-bold">
                                Add a music to my profile!
                            </header>
                            <div className="panel-body">
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label" for="input-id-name">Url</label>
                                        <div className="col-sm-10">
                                            <input
                                                placeholder="https://www.youtube.com/watch?v=XXXX | https://soundcloud.com/XXXX"
                                                type="text"
                                                className="form-control"
                                                id="input-id-name"
                                                onChange={AddMusicActions.fetchUrl} />
                                        </div>
                                    </div>
                                    <div className="line line-dashed b-b line-lg pull-in"></div>

                                    <div className="form-group">
                                        {(this.state.music.image)
                                            ?<div className="col-sm-6">
                                                <div className="text-center wrapper">
                                                    <img src={this.state.music.image} />
                                                <i className="fa fa-spinner fa fa-spin fa fa-large"></i>
                                                </div>
                                            </div>
                                            :null
                                        }
                                        <div className="col-sm-6">

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>

                    </section>
                </section>
            </section>
        );
    }
}

export default AddMusicAd;