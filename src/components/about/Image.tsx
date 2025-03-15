function Image({
  source,
  description,
  style,
}: {
  source: string;
  description: string;
  style?: string;
}) {
  return (
    <div className={`bg-lighter-peach ${style}`}>
      <img
        src={`/assets/about/desktop/${source}`}
        alt={description}
        className="h-full w-full object-cover object-center"
        draggable={false}
        loading="lazy"
      />
    </div>
  );
}

export default Image;
