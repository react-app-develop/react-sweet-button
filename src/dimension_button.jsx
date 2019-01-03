import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './button.scss';

class DimensionButton extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    render() {
        const btn_type = {
            default: '',
            light: 'bg-color-light-3d',
            primary: 'bg-color-primary-3d',
            secondary: 'bg-color-secondary-3d',
            danger: 'bg-color-danger-3d',
            dark: 'bg-color-dark-3d'
        }

        const btn_size = {
            xlarge: 'size-xlarge',
            large: 'size-large',
            medium: 'size-medium',
            small: 'size-small',
            xsmall: 'size-xsmall'
        }

        const { type, size, disabled, className, style, children } = this.props;

        const btn_class = classnames('dimension-button', btn_type[type], btn_size[size], className, {disabled: disabled});

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

DimensionButton.propTypes = {
    text: PropTypes.string,
    children: PropTypes.node
};

DimensionButton.defaultProps = {
    text: '按钮'
};

export default DimensionButton;