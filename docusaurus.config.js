module.exports = {
    title: '领域驱动的理想国',
    tagline: '天下代码一大抄,抄来抄去有提高,看你会抄不会抄',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    // onBrokenLinks: 'throw',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'lxchinesszz', // Usually your GitHub org/user name.
    projectName: 'ddd-website', // Usually your repo name.
    themeConfig: {
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
                '我们正在修改该文档,请填写你的建议 <a target="_blank" rel="noopener noreferrer" href="#">链接</a>',
            backgroundColor: '#ebebeb', // Defaults to `#fff`.
            textColor: '#091E42', // Defaults to `#000`.
            isCloseable: true, // Defaults to `true`.
        },
        navbar: {
            style: 'dark',
            //自动隐藏导航栏
            hideOnScroll: true,
            title: '领域驱动落地',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                {to: 'blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://blog.springlearn.cn/',
                    label: '作者博客',
                    position: 'right',
                },
                {
                    type: 'docsVersionDropdown',

                    //// Optional
                    position: 'left',
                    // Add additional dropdown items at the beginning/end of the dropdown.
                    dropdownItemsBefore: [],
                    dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
                    // Do not add the link active class when browsing docs.
                    dropdownActiveClassDisabled: true,
                    docsPluginId: 'default',
                },
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
};
