import { useSelector } from "react-redux";
import { clipsSlice } from "../store/slices/clips/clips";

const { getCurrentKey } = clipsSlice.selectors;

export const TemplateTitle = () => {
  const currentKey = useSelector(getCurrentKey);

  return (
    <div className="w-full bg-nord-6">
      { currentKey }
    </div>
  );
}
