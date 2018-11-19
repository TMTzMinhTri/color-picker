import React, { Component } from 'react';

class SizeSetting extends Component {
    render() {
        return (
            <div className="card border-primary">
                <div className="card-header bg-primary text-white">Size: 15px</div>
                <div className="card-body">
                    <button type="button" className="btn btn-info ">Giảm</button>&nbsp;
                        <button type="button" className="btn btn-info ">Tăng</button>
                </div>
            </div>
        );
    }
}

export default SizeSetting;
