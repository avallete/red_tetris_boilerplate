import chai from 'chai'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import chaiEnzyme from 'chai-enzyme'
import { shallow, configure } from 'enzyme'
import { Tetris, Board } from '../src/client/components/test'

configure({ adapter: new Adapter() });
chai.should()
chai.use(chaiEnzyme())

describe('Fake react test', () => {
  it('works', (done) => {
    const wrapper = shallow(<Board/>)
    wrapper.length.should.equal(1)
    wrapper.html().should.equal('<div></div>')
    done()
  })
})
