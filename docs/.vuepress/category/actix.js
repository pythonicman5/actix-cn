exports.actix = (title) => {
    return [
        '',
        {
          title: '介绍',
          collapsable: false,
          children: [
            'whatisactix',
            'installation'
          ]
        },
        {
          title: '基本',
          collapsable: false,
          children: [
            'getting-started',
            'application',
            'server',
            'handler',
            'extractors'
          ]
        },
        {
          title: '高级',
          collapsable: false,
          children: [
            'error',
            'URL-Dispatch',
            'request',
            'response',
            'test',
            'middleare',
            'staticfile'
          ]
        },
        {
          title: '协议',
          collapsable: false,
          children: [
            'websocket',
            'HTTP2'
          ]
        },
        {
          title: '主题',
          collapsable: false,
          children: [
            'autoreloade',
            'database',
            'sentry'
          ]
        }
    ]
}