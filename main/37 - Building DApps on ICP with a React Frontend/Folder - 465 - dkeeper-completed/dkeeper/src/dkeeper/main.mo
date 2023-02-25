import List "mo:base/List";
import Debug "mo:base/Debug";

actor DKeeper {

    public type Note = {
        title: Text;
        content: Text;
    };

    stable var notes: List.List<Note> = List.nil<Note>();

    public func createNote(titleText: Text, contentText: Text) {

        let newNote: Note = {
            title = titleText;
            content = contentText;
        };

        notes := List.push(newNote,  notes);
        Debug.print(debug_show(notes));

    };

    public query func readNotes(): async [Note] {
        return List.toArray(notes);
    };

    public func removeNote(id: Nat) {
        //take drop append
        let listFront = List.take(notes, id);
        let listBack = List.drop(notes, id + 1);
        notes := List.append(listFront, listBack);
    
    }

}