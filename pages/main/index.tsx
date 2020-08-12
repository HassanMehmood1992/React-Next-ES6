import React, { Component } from 'react';
import Icon, { Stack } from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import Button from '@material-ui/core/Button';
import Layout from '../../layouts/default';
class Main extends Component<{}> {
    render() {
        return (
            <Layout>
                <div className="test">
                    <div className="main">ssd</div>
                    <Icon path={mdiAccount} size="48px" />
                </div>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </Layout>
        );
    }
}

export default Main;