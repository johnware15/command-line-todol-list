import add from './commands/add.js'
import list from './commands/list.js'
import complete from './commands/complete.js'
import delete from './commands/delete.js'

var chai = require('chai')

describe('add', () => {
  // it('should be a function', function(){
  //   expect(add).to.be.a.('function')
  // })

  it('should add an item to the todo list', function(){
    assert.typeOf(add, 'string')
  })
})

describe('list', () => {
  it('should be a function', function(){
  //   expect(list).to.be.a.('function')
  // })

  it('should have 5 tasks in the list', function(){
    expect(list).to.have.lengthOf(5)
  })
})

describe('complete', () => {
  it('should be a function', function(){
    expect(complete).to.be.a.('function')
  })
})
