import React from 'react'
import {Decorator as FormsyElement} from 'formsy-react';
import ReactSelect from 'react-select';

@FormsyElement()

class SelectInput extends React.Component {

  propTypes: {
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    multiple: React.PropTypes.bool,
    options: React.PropTypes.array.isRequired
    };

  changeValue(value, selectedOptions) {
    if (this.props.multiple) {
      this.setValue(selectedOptions.map(option => option.value));
    } else {
      this.setValue(value);
    }
  }

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

export default SelectInput