import { Componet } from "./Componet";

export function App() {
  return (
    <>
      <input type="text" />
      <input type="checkbox" />
      <Componet />
    </>
  );
  // can not return an object and needs one parent to return
  //parent can be a div tag or a fragment just <>
  // works like html tags

  // js needs to be in bracks to work {}
  // props work as parent child
  // in app or main jsx put the tag and followed by the data
  // camelCase ={data} to acces it with js would be {name.camelCase}
  // props are read only
}
