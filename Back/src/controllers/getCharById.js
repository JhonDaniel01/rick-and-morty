
const URL="https://rickandmortyapi.com/api/character/";
const getCharById=(req,res)=>{
  console.log(req.params);
  const params=req.params
   let character={};
    fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        character.id=data.id;
        character.name=data.name;
        character.image=data.image;
        character.gender=data.gender;
        character.species=data.species;
        res.status(200).json(character);    
    })
      .catch((err)=>{res.status(404).json({error:err.message})});
}
module.exports =getCharById;