import { useLocation } from "react-router";
import metadata from "../data/metadata";
import { MetadataType } from "../types/types";

function useMetadata() {
  const location = useLocation();
  const pathname = location?.pathname;

  const meta = metadata.find(
    (value) => value.path === pathname,
  ) as MetadataType;

  return [meta];
}

export default useMetadata;
