import './styles.css'

function GameArea(props: any) {

  const height = window.innerHeight;
  const width = height * (9/16)
  return (
    <div className="GameArea" style={{height: height, width: width}}>
      {props.children}
    </div>
  );
}

export default GameArea;
