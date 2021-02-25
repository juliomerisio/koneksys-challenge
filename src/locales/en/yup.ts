/* eslint-disable no-template-curly-in-string */
import { YupTranslation } from '../base'

export const yup: YupTranslation = {
  invalid_field_length: 'This field must have at least ${min} characters',
  invalid_number_length: 'This field should be bigger than ${min}.',
  mixed_invalid_field: 'This field is invalid.',
  mixed_required_field: 'This field is required.',
  mixed_not_type: 'This field is invalid.',
  mixed_one_of: "This field doesn't match.",
  mixed_max: 'This field should be smaller than ${max}.',
  mixed_min: 'This field should be bigger than ${min}.',
  string_email: 'This field needs to be a valid email.',
  string_max: 'This field should be smaller than ${max}.',
  string_min: 'This field should be bigger than ${min}.',
  number_max: 'This field should be smaller than ${max}.',
  number_min: 'This field should be bigger than ${min}.',
}
