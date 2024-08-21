export const Texts = (props) => {
  const { text, para } = props;
  return (
    <div>
      <div className="mb-4 text-center gap-y-6 lg:mb-6">
        <a className="text-sm font-medium text-gray-600 py-1 px-5 rounded-xl border-gray-200 bg-gray-200 border-2 ">
          {text}
        </a>
      </div>
      <p className="mb-6 text-center font-normal text-gray-600 text-lg ">
        {para}
      </p>
    </div>
  );
};
