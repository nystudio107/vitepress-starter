module.exports = {
    title: 'XXXX Documentation',
    description: 'Documentation for XXXX',
    base: '/docs/XXXX/',
    lang: 'en-US',
    head: [
        ['meta', { content: 'https://github.com/nystudio107', property: 'og:see_also', }],
        ['meta', { content: 'https://twitter.com/nystudio107', property: 'og:see_also', }],
        ['meta', { content: 'https://youtube.com/nystudio107', property: 'og:see_also', }],
        ['meta', { content: 'https://www.facebook.com/newyorkstudio107', property: 'og:see_also', }],
    ],
    themeConfig: {
        repo: 'vendor/project',
        docsDir: 'docs/docs',
        docsBranch: 'master',
        algolia: {
            apiKey: '',
            indexName: ''
        },
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        sidebar: [
            { text: 'Documentation', link: '/' },
            { text: 'Page Two', link: '/pagetwo.html' },
        ],
    },
};
