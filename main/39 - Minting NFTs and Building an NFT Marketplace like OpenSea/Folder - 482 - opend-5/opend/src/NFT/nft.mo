import Debug "mo:base/Debug";
import Principal "mo:base/Principal";

actor class NFT (name: Text, owner: Principal, content: [Nat8]) = this {
  
  private let itemName = name;
  private var nftOwner = owner;
  private let imageBytes = content;
  private var listedForSale = false;

  public query func getName() : async Text{
    return itemName;
  };

  public query func getOwner() : async Principal {
    return nftOwner;
  };

  public query func getAsset() : async [Nat8] {
    return imageBytes;
  };

  public query func getCanisterId() : async Principal {
    return Principal.fromActor(this);
  };

  public shared(msg) func transferOwnership(newOwner: Principal, isListing: Bool) : async Text {
    if (isListing) {
      listedForSale := true;
    } else {
      listedForSale := false;
    };

    if (msg.caller == nftOwner) {
      nftOwner := newOwner;
      return "Success";
    } else {
      return "Error: Not initiated by the owner of the NFT."
    };
  };

};