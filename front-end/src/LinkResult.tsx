const LinkResult = ({ urlshortened }: any) => {
  const text = `localhost:4000/${urlshortened}`;
  const CopyTextToClipboard = (argText: string) =>
    navigator.clipboard.writeText(argText);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return CopyTextToClipboard(text);
  };
  return (
    <div className="">
      <button
        className="p-4 bg-main-blue text-white rounded-full"
        onClick={onClick}
      >
        Click to copy
      </button>
    </div>
  );
};

export default LinkResult;
