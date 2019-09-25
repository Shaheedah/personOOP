
describe("Person", function(){
    let person = new Person('Ryan',30,'male','being a hardarse','agile', 'ssd hard drives' );
    it("should return the person's name", function(){
      let output = person.name;
      expect(output).toBe('Ryan');
  })
  
  it("should return the person's age", function(){
    let output = person.age;
    expect(output).toBe(30);
  })

    it("should return the person's gender", function(){
    let output = person.gender;
    expect(output).toBe('male');
  })

    it("should return the person's interests", function(){
    let output = person.interests;
    expect(output).toBe('being a hardarse','agile', 'ssd hard drives');
  })
  })