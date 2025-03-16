import { MetadataType } from "../../types/types";

function Metadata({ metadata }: { metadata: MetadataType }) {
  const { path, title, meta } = metadata;

  return (
    <>
      {title && <title>{title}</title>}
      {meta.map(({ name, content }) => (
        <meta key={content} name={name} content={content} />
      ))}
      <link rel="canonical" href={path} />
    </>
  );
}

export default Metadata;
