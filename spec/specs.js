describe('encrypt', function(){
  it("it will take the argument and make it lowercase", function(){
    expect(encrypt('HELLO')).to.equal('hello');
  });

  it("it will remove all spaces and exclaimation points from string", function(){
    expect(encrypt('Hello!@#$   WOrld!%^& wide!')).to.equal('helloworldwide');
  });

  // it("it will take string and convert to text block that is 5 characters wide", function(){
  //   expect(encrypt('hello world')).to.equal('hello''world');
  // });
});
