
/*
    *
    * font: https://medium.com/front-end-hacking/html5-form-validation-in-react-65712f778196
    * 
*/

import React from 'react';


class FormValidate extends React.Component {
    state = {
        isValidated: false
    }

    validate = () => {
        const formLength = this.formEl.length;

        if (this.formEl.checkValidity() === false) {
            for(let i=0; i<formLength; i++) {
                const elem = this.formEl[i];                
                const errorLabel = elem.parentNode.querySelector('.invalid-feedback');                
                if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
                    if (!elem.validity.valid) {
                        errorLabel.textContent = elem.validationMessage;
                        errorLabel.style = 'display: inline';
                    } else {
                        errorLabel.textContent = '';
                    }
                }
            }

            return false;
        } else {
            for(let i=0; i<formLength; i++) {
                const elem = this.formEl[i];
                const errorLabel = elem.parentNode.querySelector('.invalid-feedback');
                if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
                    errorLabel.textContent = '';
                    errorLabel.style = 'display: none';
                }
            };

            return true;
        }
    }

    submitHandler = (event) => {
        event.preventDefault();

        if (this.validate()) {
            this.props.submit();
        }

        this.setState({isValidated: true});
    }

    render() {
        const props = [...this.props];

        let classNames = [];
        if (props.className) {
            classNames = [...props.className];
            delete props.className;
        }

        if (this.state.isValidated) {
            classNames.push('.was-validated');
        }

        return (
            <form ref={form => this.formEl = form} onSubmit={this.submitHandler} {...props} className={classNames} noValidate>
                {this.props.children}
            </form>
        );
    }
};

export default FormValidate;