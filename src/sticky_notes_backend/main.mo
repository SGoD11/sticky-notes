actor {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
  public query func name(str : Text) : async Text{
    return "Your name is " # str # " !";
  }
};
