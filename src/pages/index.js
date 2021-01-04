import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: '流程编排',
        imageUrl: 'img/undraw_docusaurus_mountain.svg',
        description: (
            <>
                流程编排
            </>
        ),
    },
    {
        title: '模型转换',
        imageUrl: 'img/undraw_docusaurus_tree.svg',
        description: (
            <>
                好比做菜,只要有刀有工具,各种业务也可以满足
                <code>docs</code> directory.
            </>
        ),
    },
    {
        title: '单体应用分层',
        imageUrl: 'img/undraw_docusaurus_react.svg',
        description: (
            <>
                明确项目结构,明确模型定义,编程不迷茫。
            </>
        ),
    },
];

function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title}/>
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <header className={clsx('hero shadow--lw', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/')}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                <section className={styles.main}>
                    <div>
                        <img src={useBaseUrl('img/idea_overview_5_1@2x.png')} alt=""/>
                    </div>
                </section>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                <section className={styles.framework}>
                    {/*hero shadow--lw*/}
                    <div className="hero hero--primary">
                        <div className="container">
                            <h1>分层架构</h1>
                            <p className="hero__subtitle">明确业务分层架构,定义领域模型,编程不迷茫</p>
                        </div>
                    </div>
                </section>
                {/*机构图*/}
                <section className={styles.framework}>
                    <div>
                        <img src="https://wasp-lang.dev/img/wasp-compilation.png" alt=""/>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

export default Home;
