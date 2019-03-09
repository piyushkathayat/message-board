import React from 'react';
import { Divider, Icon } from 'semantic-ui-react';

export const Seperator = () => (
    <Divider horizontal>
        <h4>
            <Icon name='comments' />
            <span>Messages</span>
        </h4>
    </Divider>
);