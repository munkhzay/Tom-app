import { Email, Phone, Copy } from "./Icons/Mail";
export const Connect = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <Email></Email>
        <a>tom@pinecone.mn</a>
        <Copy></Copy>
      </div>
      <div className="flex justify-center mb-4">
        <Phone></Phone>
        <a>+976 88112233</a>
        <Copy></Copy>
      </div>
    </div>
  );
};
