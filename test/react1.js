import chai from "chai"
import React from 'react'
import equalJSX from 'chai-equal-jsx'
import {createRenderer} from 'react-addons-test-utils'
import {Tetris, Board} from '../src/client/components/test'
import {Square} from "../src/client/components/square";

chai.should()
chai.use(equalJSX)

describe('Fake react test', function(){
  it('works', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(Tetris));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<Board/>);
  })

})

describe('Class Square test', function(){
  it('should have a render function', function(){
    const sqr = new Square({col: 1, row: 1});
    sqr.render.should.be.a('function')
  })
  it('should draw a Square JSX element', function() {
    const renderer = createRenderer();
    renderer.render(React.createElement(Square));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div className="square"></div>);
  })
  it('should change color', function() {
    const renderer = createRenderer();
    const sqr = new Square({col: 1, row: 1, color: "red"});
    renderer.render(React.createElement(sqr));
    renderer.getRenderOutput().should.equalJSX(
      <div className="square" style="left: 0px; top: 0px; background-color: red;"></div>
    );
  })
})
