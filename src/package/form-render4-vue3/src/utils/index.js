export const ElementTypeMapping = {
  select: 'simple-select',
  radio: 'radio',
  checkbox: 'checkbox',
  input: 'simple-input',
  number: 'number-input',
  rate: 'rate',
  slider: 'slider',
  color: 'color-picker',
  switch: 'switch',
}


const BASE_SCHEMA = {
  fields: [],
  rules: [],
  labelWidth: 'auto',
  labelPosition: 'right',
  hideRequiredAsterisk: false,
  requireAsteriskPosition: 'left',
  showMessage: true,
  disabled: false
}

/**
 * form-item 必须有 type、 title、field 这三个属性
 */
const BASE_FIELD_SCHEMA = {
  value:'',
  props: {
    labelWidth: 'auto'
  }
}

export function mergeSchema(userSchema) {
  userSchema = Object.assign({}, BASE_SCHEMA, userSchema)
  if (userSchema.fields.length) {
    userSchema.fields = userSchema.fields.map(schema => {
      return Object.assign({}, BASE_FIELD_SCHEMA, schema)
    })
  }
  return userSchema
}
