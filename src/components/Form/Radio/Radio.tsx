import { FiCheck } from 'react-icons/fi'

import { Item } from './Radio.styled'

export const Radio = () => {
  return (
    <form>
      <Item>
        <input type='radio' id='test2' name='radio-group' />
        <label htmlFor='test2'>
          Apple
          <FiCheck />
        </label>
      </Item>
      <Item>
        <input type='radio' id='test1' name='radio-group' />
        <label htmlFor='test1'>
          Banana
          <FiCheck />
        </label>
      </Item>
    </form>
  )
}
