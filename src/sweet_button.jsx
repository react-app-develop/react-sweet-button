import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './button.scss';

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

        const btn_outline_type = {
            default: 'bg-color-primary-outline',
            light: 'bg-color-light-outline',
            primary: 'bg-color-primary-outline',
            secondary: 'bg-color-secondary-outline',
            danger: 'bg-color-danger-outline',
            dark: 'bg-color-dark-outline'
        }

        const btn_size = {
            xlarge: 'size-xlarge',
            large: 'size-large',
            medium: 'size-medium',
            small: 'size-small',
            xsmall: 'size-xsmall'
        }

        const { type, size, disabled, outline, block, className, style, children } = this.props;

        let btn_outline = null;
        if(outline) {
            if(type && btn_type[type]) {
                btn_outline = btn_outline_type[type];
            }else {
                btn_outline = btn_outline_type['primary'];
            }
        }
        
        const btn_class = classnames('sweet-button', btn_type[type], btn_outline, btn_size[size], block ? ' block' : null, className, {disabled: disabled});

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