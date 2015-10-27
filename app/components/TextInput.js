import React from 'react'
import {Decorator as FormsyElement} from 'formsy-react';

@FormsyElement()
class TextInput extends React.Component {
  render() {
    var className = this.props.showError() ? 'has-error' : '';
    var type = this.props.type ? this.props.type : 'text';
    return (
      <div className={'form-group ' + className}>
        <input className="form-control rounded input-lg text-center no-border"
               value={this.props.getValue()}
               placeholder={this.props.placeholder}
               onChange={(e) => this.props.setValue(e.target.value)}
               type={type}
        />
        <span className='span-help-block'>{this.props.getErrorMessage()}</span>
      </div>
    );
  }
}

export default TextInput