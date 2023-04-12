export const SIMPLEFORM = {
  fields: [{
    type: 'input',
    title: '姓名',
    field: 'name',
    value: '',
    props: {
      placeholder: '输入姓名'
    }
  },
  {
    type: 'input',
    title: '年龄',
    field: 'age',
    value: '',
    props: {
      type: 'number',
      placeholder: '输入年龄'
    }
  },
  {
    type: 'number',
    title: '工作时长(年)',
    field: 'experience',
    value: '',
    props: {
      step: 0.5
    },
  },
  {
    type: 'select',
    title: '现居地',
    field: 'address',
    value: '',
    props: {
      placeholder: '选择现居地'
    },
    data: {
      list: [{
        label: '北京',
        value: 'beijing'
      },
      {
        label: '上海',
        value: 'shanghai'
      }, {
        label: '深圳',
        value: 'shenzhen'
      }, {
        label: '成都',
        value: 'chengdu'
      }
      ],
      label: 'label',
      value: 'value'
    }
  },
  {
    type: 'radio',
    title: '性别',
    field: 'gender',
    value: '',
    data: {
      list: [{
        label: '男',
        value: 'man'
      },
      {
        label: '女',
        value: 'woman'
      }, {
        label: '男女',
        value: 'woman&man'
      }
      ],
      label: 'label',
      value: 'value'
    }
  },
  {
    type: 'checkbox',
    title: '爱好',
    field: 'likes',
    value: '',
    data: {
      list: [{
        label: '唱',
        value: 'song'
      },
      {
        label: '跳',
        value: 'dance'
      }, {
        label: 'rap',
        value: 'rap'
      }, {
        label: '篮球',
        value: 'basketball'
      }
      ],
      label: 'label',
      value: 'value'
    }
  }, {
    type: 'slider',
    title: '身高',
    field: 'height',
    value: '',
    props: {
      min: 100,
      max: 200
    }
  },
  {
    type: 'switch',
    title: '信息公开',
    field: 'public',
    value: ''
  }
  ],
  labelWidth: 'auto',
  labelPosition: 'right',
  hideRequiredAsterisk: false,
  requireAsteriskPosition: 'left',
  showMessage: true,
  disabled: false,
}

export const VALIDATEFORM = {
  fields: [{
    type: 'input',
    title: '姓名',
    field: 'name',
    value: '',
    props: {
      placeholder: '输入姓名',
      clearable: true
    }
  },
  {
    type: 'input',
    title: '年龄',
    field: 'age',
    value: '',
    props: {
      type: 'number',
      placeholder: '输入年龄'
    }
  },
  {
    type: 'number',
    title: '工作时长(年)',
    field: 'experience',
    value: '',
    props: {
      step: 0.5
    },
  },
  {
    type: 'select',
    title: '现居地',
    field: 'address',
    value: '',
    props: {
      placeholder: '选择现居地',
    },
    data: {
      list: [{
        label: '北京',
        value: 'beijing'
      },
      {
        label: '上海',
        value: 'shanghai'
      }, {
        label: '深圳',
        value: 'shenzhen'
      }, {
        label: '成都',
        value: 'chengdu'
      }
      ],
      label: 'label',
      value: 'value'
    }
  },
  {
    type: 'radio',
    title: '性别',
    field: 'gender',
    value: '',
    data: {
      list: [{
        label: '男',
        value: 'man'
      },
      {
        label: '女',
        value: 'woman'
      }, {
        label: '男女',
        value: 'woman&man'
      }
      ],
      label: 'label',
      value: 'value'
    }
  },
  {
    type: 'checkbox',
    title: '爱好',
    field: 'likes',
    value: '',
    data: {
      list: [{
        label: '唱',
        value: 'song'
      },
      {
        label: '跳',
        value: 'dance'
      }, {
        label: 'rap',
        value: 'rap'
      }, {
        label: '篮球',
        value: 'basketball'
      }
      ],
      label: 'label',
      value: 'value'
    }
  }, {
    type: 'slider',
    title: '身高',
    field: 'height',
    value: '',
    props: {
      min: 100,
      max: 200
    }
  },
  {
    type: 'switch',
    title: '信息公开',
    field: 'public',
    value: ''
  }
  ],
  rules: {
    name: [{
      required: true, message: '名字为必填项'
    }],
    age: [{
      required: true, message: '年龄为必填项'
    }],
    address: [{
      required: true, message: '居住地为必选项'
    }]
  },
  labelWidth: 'auto',
  labelPosition: 'right',
  hideRequiredAsterisk: false,
  requireAsteriskPosition: 'left',
  showMessage: true,
  disabled: false,
}


export const SIMPLEFORMDATA = {
  name: 'QQ',
  age: 18,
}


