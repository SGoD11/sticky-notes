import Debug "mo:base/Debug";
import Array "mo:base/Array";
actor simple {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
  public query func name(str : Text) : async Text{
    return "Your name is " # str # " !";
  };

  public query func greeting() : async Text{
    return "Good Morning";
  };

  var value = "hllo";

  public func something(some: Text){
    Debug.print(debug_show (some));
    value := some;
  };

  public query func querySometing() :async Text  {

    Debug.print(debug_show(value));
    return value;
  };

  // Define the Note type
  public type Note = {
    title: Text;
    description: Text;
  };

  // Variable to store notes (ephemeral; use stable variables for persistence across upgrades)
  stable var notes : [Note] = [];

  // Function to add a new note to the notes array
  public func addNote(note: Note) : async Text {
    notes := Array.append(notes, [note]);
    Debug.print("Added note: " # note.title # " - " # note.description);
    return "success";
  };

  // Function to retrieve all stored notes
  public query func getNotes() : async [Note] {
    return notes;
  };

};
