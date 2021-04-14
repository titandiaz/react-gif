import React from 'react'
import { render } from '@testing-library/react'

import { GifGridItem } from '../components/GifGridItem'

describe('<GifGridItem />', () => {
  test('render content', () => {
    const props = {
      id:1,
      title: 'nombre de imagen',
      url: 'https://i.giphy.com/media/fDO2Nk0ImzvvW/giphy.webp'
    }
    const component = render(<GifGridItem {...props} />)
    component.getByText('nombre de imagen')
  })
  
})
