import CharacterList from "./CharacterList";


function CharacterContainer() {
  return (
    <div className="container py-3">
      <div className="row">
        <CharacterList />
      </div>
    </div>

  );
}

export default CharacterContainer;