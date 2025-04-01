import Debug "mo:base/Debug";
import Array "mo:base/Array";
import Nat "mo:base/Nat";
actor simple {
  // Define the Note type
  public type Note = {
    title: Text;
    description: Text;
  };

  // Variable to store notes (ephemeral; use stable variables for persistence across upgrades)
  stable var notes : [Note] = [];

  // Function to add a new note to the notes array
  public func addNote(note: Note) : async Nat {
    notes := Array.append(notes, [note]);
    Debug.print("Added note: " # note.title # " - " # note.description);
    return 1;
  };

  // Function to retrieve all stored notes
  public query func getNotes() : async [Note] {
    return notes;
  };

};
