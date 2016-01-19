describe('encrypt', function(){
  it("it will take the argument and make it lowercase", function(){
    expect(encrypt('HELLO')).to.equal('hello');
  });

  // it("it will remove all spaces from string", function(){
  //   expect(encrypt('hello world wide')).to.equal('helloworldwide');
  // });

  it("it will remove all exclaimation points from string", function(){
    expect(encrypt('Hello!@#$   WOrld!%^& wide!')).to.equal('helloworldwide');
  });

});
