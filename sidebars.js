// noinspection NonAsciiCharacters
module.exports = {
    docs: [
        {
            type: 'doc',
            id: 'CodeSnippet',
        }, {
            type: 'category',
            label: '数组',
            collapsed: true,
            items: ['doc1'],
        }, {
            type: 'category',
            label: '集合',
            collapsed: true,
            items: ['enhance/_.distinct', 'enhance/_.mapDistinct',
                'enhance/_.mapToNonNullSum', 'enhance/_.mapToList',
                'enhance/_.mapToMergeList', 'enhance/_.group',
                'enhance/_.dismantling'],
        },
        {
            type: 'category',
            label: '函数',
            collapsed: true,
            items: ['doc3'],
        },
        {
            type: 'category',
            label: '字符串',
            collapsed: true,
            items: ['testmd1'],
        },
        {
            type: 'category',
            label: '对象',
            collapsed: true,
            items: ['doc4'],
        },
        {
            type: 'category',
            label: '数学',
            collapsed: true,
            items: ['doc5'],
        }
    ],
    cli: [
        {
            type: 'doc',
            id: 'mvn-cli',
        },
        {
            type: 'category',
            label: '入门',
            collapsed: true,
            items: ['mvn-cli/mvn-cli-design', 'mvn-cli/mvn-cli-install', 'mvn-cli/mvn-cli-setting'],
        },
        {
            type: 'category',
            label: '使用指南',
            collapsed: true,
            items: ['mvn-cli/use/mvn-cli-use'],
        },
        {
            type: 'category',
            label: '高级定制',
            collapsed: true,
            items: ['mvn-cli/mvn-cli-custom'],
        }
    ],
    test: [
        {
            type: 'doc',
            id: 'test/test-readme',
        },
        {
            type: 'category',
            label: '技术框架',
            collapsed: true,
            items: ['test/test-technology', 'test/junit-api', 'test/test-jmockdata', 'test/mockito-api', 'test/spring-boot-testing']
        },
        {
            type: 'category',
            label: '源码分析',
            items: ['test/test-source-read', 'test/test-source-runner', 'test/test-inject']
        },
        {
            type: 'category',
            label: '场景分析',
            items: ['test/test-cost', 'test/test-lazy', 'test/test-data-isolation', 'test/test-message', 'test/test-async']
        },
        {
            type: 'link',
            label: '单测标准',
            href: 'test-standard'
        }
    ]
};
