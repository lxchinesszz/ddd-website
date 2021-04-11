module.exports = {
    title: '万物皆对象',
    tagline: '天下代码一大抄,抄来抄去有提高,看你会抄不会抄',
    url: 'https://ddd.springlearn.cn',
    baseUrl: '/',
    //当 Docusaurus 检测到任何无效的链接时所应采取的行为。'ignore' | 'log' | 'warn' | 'error' | 'throw'
    onBrokenLinks: 'ignore',
    // onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'https://img.springlearn.cn/blog/learn_1618020486000.png',
    organizationName: 'lxchinesszz', // Usually your GitHub org/user name.
    projectName: 'ddd-website', // Usually your repo name.
    themeConfig: {
        defaultLanguage: 'java',
        colorMode: {
            // "light" | "dark"
            defaultMode: 'light',
            disableSwitch: false,
            // Should we use the prefers-color-scheme media-query,
            // using user system preferences, instead of the hardcoded defaultMode
            respectPrefersColorScheme: false,

            // Dark/light switch icon options
            switchConfig: {
                // Icon for the switch while in dark mode
                darkIcon: '🌙',

                // CSS to apply to dark icon,
                // React inline style object
                // see https://reactjs.org/docs/dom-elements.html#style
                darkIconStyle: {
                    marginLeft: '2px',
                },

                // Unicode icons such as '\u2600' will work
                // Unicode with 5 chars require brackets: '\u{1F602}'
                lightIcon: '🌞',

                lightIconStyle: {
                    marginLeft: '2px',
                },
            },
        },
        announcementBar: {
            id: 'support_us', // Any value that will identify this message.
            content:
                '我们正在收集关于单元测试的问卷,请填写你的建议 <a target="_blank" rel="noopener noreferrer" href="https://wj.qq.com/s2/8308398/e9ff/">链接</a>',
            backgroundColor: '#ebebeb', // Defaults to `#fff`.
            textColor: '#091E42', // Defaults to `#000`.
            isCloseable: false, // Defaults to `true`.
        },
        navbar: {
            // 这里仅仅定义navbar的颜色,如果定义这个,全局的就对navbar失效
            // style: 'dark',
            //自动隐藏导航栏
            hideOnScroll: true,
            title: '领域驱动落地',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    to: 'docs/CodeSnippet/',
                    label: '代码片段',
                    position: 'left',
                },
                {
                    to: 'docs/test/test-readme',
                    label: '单元测试',
                    position: 'left',
                },
                // {
                //     to: 'docs/mvn-cli/',
                //     label: 'CLI',
                //     position: 'left',
                // },
                {
                    href: 'https://danchuang.yuque.com/nlmewm/tsxuer/vptnb4',
                    label: 'CLI'
                },
                {to: 'blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://blog.springlearn.cn/',
                    label: '作者博客',
                    position: 'right',
                },
                // {
                //     label: '新特性',
                //     position: 'left', // or 'right'
                //     dropdownActiveClassDisabled: true,
                //     items: [
                //         {to: '/blog', label: '博客'},
                //         {to: '/docs', label: '简书'},
                //     ],
                //     docsPluginId: 'default',
                // },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Style Guide',
                            to: 'docs/',
                        },
                        {
                            label: 'Second Doc',
                            to: 'docs/doc2/',
                        },
                    ],
                },
                {
                    title: '友链',
                    items: [
                        {
                            label: 'Java技术栈',
                            href: 'https://java.springlearn.cn/',
                        },
                        {
                            label: '程序猿升级课',
                            href: 'https://blog.springlearn.cn/',
                        }
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/facebook/docusaurus',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} DDD for liuxin, 豫ICP备18041471号`,
        },
        prism: {
            theme: require('prism-react-renderer/themes/github'),
            // theme: require('prism-react-renderer/themes/dracula'),
            darkTheme: require('prism-react-renderer/themes/dracula'),
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    path:'docs',
                    routeBasePath: 'docs',
                    editUrl:
                        'https://github.com/facebook/docusaurus/edit/master/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-sitemap',
            {
                id: 'plugin-sitemap',
                cacheTime: 600 * 1000, // 600 sec - cache purge period
                changefreq: 'weekly',
                priority: 0.5,
                trailingSlash: false,
            },
        ],
    ],
    themes: ['@docusaurus/theme-live-codeblock'],
};
