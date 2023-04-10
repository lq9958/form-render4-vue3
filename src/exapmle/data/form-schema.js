export const SIMPLEFORM = {
  fields: [{
      type: 'input',
      title: '姓名',
      field: 'name',
      value: '',
      props:{
        placeholder:'输入姓名'
      }
    },
    {
      type: 'input',
      title: '年龄',
      field: 'age',
      value: '',
      props: {
        type: 'number',
        placeholder:'输入年龄'
      }
    },
    {
      type: 'select',
      title: '爱好',
      field: 'like',
      value: '',
      props:{
        placeholder:'选择爱好'
      },
      data:{
        list:[{
          label:'唱',
          value:'song'
        },
        {
          label:'跳',
          value:'dance'
        },{
          label:'rap',
          value:'rap'
        },{
          label:'篮球',
          value:'basketball'
        }],
        label: 'label',
        value: 'value'
      }
    }
  ],
  labelWidth: 'auto',
  labelPosition: 'right',
  hideRequiredAsterisk: false,
  requireAsteriskPosition: 'left',
  showMessage: true,
  disabled: true,
}


export const SIMPLEFORMDATA = {
  name: '只因',
  age: 18,

}
