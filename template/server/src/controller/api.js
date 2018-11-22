const Base = require('./base.js');

module.exports = class extends Base {
  async detailAction() {
    return this.json({
      id: '123',
      title: '【文禾日语】重要通知！',
      little_class: '',
      shop_name: '文禾日语',
      service_area: '昆都仑区 青山 稀土高新区',
      shop_address: '昆都仑区 - 包头乐园 - 保利拉菲公馆',
      shop_website: '#',
      post_url: '#',
      service_description:
        '已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！',
      images: [
        'https://vuejs.org/images/logo.png',
        'https://vuejs.org/images/logo.png',
        'https://vuejs.org/images/logo.png',
        'https://vuejs.org/images/logo.png',
        'https://vuejs.org/images/logo.png',
        'https://vuejs.org/images/logo.png',
        'https://vuejs.org/images/logo.png',
        'https://vuejs.org/images/logo.png'
      ]
    });
  }
  async listAction() {
    return this.json([
      {
        key: '123',
        subdisplay: {
          title: '_相关课程',
          url: '/detail',
          link: '#',
          name: '',
          school: '文禾日语',
          description: '【文禾日语】重要通知！',
          label: '',
          image: 'https://vuejs.org/images/logo.png'
        }
      },
      {
        key: '123',
        subdisplay: {
          title: '_相关课程',
          url: '/detail',
          link: '#',
          name: '',
          school: '文禾日语',
          description: '【文禾日语】重要通知！',
          label: '',
          image: 'https://vuejs.org/images/logo.png'
        }
      },
      {
        key: '123',
        subdisplay: {
          title: '_相关课程',
          url: '/detail',
          link: '#',
          name: '',
          school: '文禾日语',
          description: '【文禾日语】重要通知！',
          label: '',
          image: 'https://vuejs.org/images/logo.png'
        }
      }
    ]);
  }
};
