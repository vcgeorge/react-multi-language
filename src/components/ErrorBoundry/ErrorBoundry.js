import React, { Component } from 'react'
import Typography from '@mui/material/Typography';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    // componentDidCatch(error, errorInfo) {        
    //     logErrorToMyService(error, errorInfo);
    // }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <div style={{ textAlign: 'center', margin: '30px 0 0' }}>
                        <Typography variant="h3" component="div" gutterBottom>
                            Oops.. Something went wrong
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Please try again after sometime..
                        </Typography>
                    </div>
                </>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundry
