import React from 'react';
import LinkButton from './LinkButton';
import renderer from 'react-test-renderer';
import { withRouter } from 'react-router'

it('should match snapshot', () => {
    const hocLinkButton = withRouter(LinkButton)
    const tree = renderer
        .create(
            <hocLinkButton />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})