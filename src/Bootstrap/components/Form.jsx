import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function SimpleInput({...props}) {
  const checkError = props.hasError && props.errors.data[props.name];

  let formGroupClasses = classNames({
    'form-group': true,
    'has-feedback': !props.loading,
    'has-error': checkError,
  })


  return (
    <div className={formGroupClasses}>
      <label className="control-label">{props.title}</label>
      <input
        className="form-control"
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder} />

      {/* Error glyphicon icon */}
      { checkError &&
        <span className="glyphicon glyphicon-remove form-control-feedback"></span>}

      {/* Error message */}
      { checkError &&
          <span className="help-block">{props.errors.data[props.name]}</span> }
    </div>
  );
}

SimpleInput.defaultProps = {};

SimpleInput.propTypes = {
  inputType: PropTypes.oneOf(['text', 'number','password']).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  placeholder: PropTypes.string,
  hasError: PropTypes.bool,
  errors: PropTypes.object,
};

// <select>...</select>
export function Select({ ...props }) {
  return (
    <div className="form-group">
      <label className="form-label">{props.title}</label>
      <select
        className="form-control"
        name={props.name}
        value={props.selectedOption}
        onChange={props.onChange}>

        {props.allowBlank && <option value="">{props.placeholder}</option>}

        {props.options.map(opt => {
          return (
            <option
              key={opt}
              value={opt} >
              {opt}
            </option>
          );
        })}
      </select>
    </div>
  );
}

Select.defaultProps = {};

Select.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  allowBlank: PropTypes.bool,
  hasError: PropTypes.bool,
  errors: PropTypes.object,
};


// <textarea>...</textarea>
export function TextArea({ ...props }) {
  return (
    <div className="form-group">
      <label className="form-label">{props.title}</label>
      <textarea
        className="form-control"
        name={props.name}
        value={props.value}
        rows={props.rows}
        cols={props.cols}
        placeholder={props.placeholder}/>
    </div>
  );
}

TextArea.defaultProps = {};

TextArea.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  hasError: PropTypes.bool,
  errors: PropTypes.object,
};
