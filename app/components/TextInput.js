import React from 'react'
import {HOC} from 'formsy-react';

class TextInput extends React.Component {
  render() {
    var className = this.props.showError() ? 'has-error' : '';
    var classInput = this.props.classInput ? this.props.classInput : '';
    var classContainer = this.props.classContainer ? this.props.classContainer : '';

    var type = this.props.type ? this.props.type : 'text';
    return (
      <div className={'form-group ' + className}>

        {/* we display the label */}
        {(this.props.title)
          ? <label className="col-sm-2 control-label" htmlFor={this.props.id}>{this.props.title}</label>
          : null
        }
        <div className={classContainer}>
          <input className={'form-control ' + classInput}
                 value={this.props.getValue()}
                 placeholder={this.props.placeholder}
                 onChange={(e) => this.props.setValue(e.target.value)}
                 type={type}
          />
        </div>
        <span className='span-help-block'>{this.props.getErrorMessage()}</span>
      </div>
    );
  }
}

export default HOC(TextInput)