import Debug "mo:base/Debug";
// import Array "mo:base/Array";
import Nat "mo:base/Nat";
import List "mo:base/List";
actor simple {
  // Define the Note type
  public type Note = {
    title : Text;
    description : Text;
  };

  // Variable to store notes (ephemeral; use stable variables for persistence across upgrades)
  // stable var notes : [Note] = [];
  var notes : List.List<Note> = List.nil<Note>();

  // Function to add a new note to the notes array
  public func addNote(title : Text, description : Text) : async Nat {
    let newNote : Note = {
      title = title;
      description = description;
    };
    notes := List.push(newNote, notes); // in list push (newNote, "Which List ?")
    Debug.print(debug_show (notes));
    return 1;
  };

  // Function to retrieve all stored notes
  public query func getNotes() : async [Note] {
     return List.toArray(notes);
  };

};
