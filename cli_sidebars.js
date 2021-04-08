// noinspection NonAsciiCharacters
module.exports = {
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
    ]
};
