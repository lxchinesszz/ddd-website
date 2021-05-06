import React, {Component} from 'react'
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {init} from 'ityped'

export default class Hello extends Component {

    componentDidMount() {
        const myElement = document.querySelector('#myElement')
        init(myElement, {showCursor: false, strings: ['Use with React.js!', 'Yeah!']})
    }

    render() {
        return (
            <Layout>
                <div id="myElement"></div>
            </Layout>
        )

    }
}
