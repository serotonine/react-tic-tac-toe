export default function Log({score, names}){
  const {x:X,o:O,none} = score
  return (
    <div className="log">
      <h3>Parties : {X + O + none}</h3>
      <div className="flex flex-center">
        <p>{names.X} : {X} </p>
         <p>{names.O} : {O} </p>
      </div>

    </div>
  );
}