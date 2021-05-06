import React, {Component} from 'react'
import clsx from 'clsx';
import Layout from '@theme/Layout';
import anime from 'animejs/lib/anime.es.js';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


export default class AnimePage extends Component {

    componentDidMount() {
        console.log(this.context)
    }

    render() {
        // let {siteConfig = {}} = this.context;
        //  title={`${siteConfig.title}`}
        return (
            <Layout>
                <div className={styles.animeContext}>
                </div>
            </Layout>
        )
    }
}
