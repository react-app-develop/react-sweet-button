import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './sweet_button.scss';

class SweetButton extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    render() {
        const btn_type = {
            default: '',
            light: 'bg-color-light',
            primary: 'bg-color-primary',
            secondary: 'bg-color-secondary',
            danger: 'bg-color-danger',
            dark: 'bg-color-dark'
        }

        const btn_size = {
            xlarge: 'size-xlarge',
            large: 'size-large',
            medium: 'size-medium',
            small: 'size-small',
            xsmall: 'size-xsmall'
        }

        const { type, size, disabled, className, style, children } = this.props;

        const btn_class = classnames('custom-button', btn_type[type], btn_size[size], className, {disabled: disabled});

        return (
            <a className={btn_class} style={style} onClick={(e)=>this.onClick(e)}>
                {children}
            </a>
        );
    }

    onClick(e) {
        e.stopPropagation();
        const {onClick} = this.props;
        if(onClick) onClick();
    }
}

SweetButton.propTypes = {
    text: PropTypes.string,
    children: PropTypes.node
};

SweetButton.defaultProps = {
    text: '按钮'
};

export default SweetButton;