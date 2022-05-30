import { MemList } from "../components/MemList";

export const Hot = (props) => {
  return (
    <div>
      <div>HOT</div>
      <MemList mems={props.mems} />
    </div>
  );
};


