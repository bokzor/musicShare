import React from 'react'
import {HOC} from 'formsy-react'
import ReactSelect from 'react-select'

class SelectInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  changeValue(value) {
    this.props.setValue(value);
  }

  render() {
    var className = this.props.showError() || this.props.showRequired() ? 'has-error' : '';
    var classContainer = this.props.classContainer ? this.props.classContainer : '';

    return (
      <div className={'form-group ' + className}>
        <label className="col-sm-2 control-label" htmlFor={this.props.id}>{this.props.title}</label>
        <div className={classContainer}>
          <ReactSelect
            id={this.props.id}
            name={this.props.name}
            multi={this.props.multi}
            onChange={this.changeValue.bind(this)}
            value={this.props.getValue()}
            options={this.props.options}
            allowCreate={this.props.allowCreate}
            searchPromptText={this.props.searchPromptText}
            placeholder={this.props.placeholder}
            noResultsText={this.props.noResultsText}
          />
        </div>
        <span className='span-help-block'>{this.props.getErrorMessage()}</span>
      </div>
    );
  }
}

export default HOC(SelectInput)