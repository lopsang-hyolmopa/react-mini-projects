import Faq from "./Faq";
import { faqs } from "../constants/faqs";

export default function FaqList() {
  return (
    <div>
      {faqs.map((faq) => {
        return <Faq key={faq.id} title={faq.title} info={faq.info} />;
      })}
    </div>
  );
}
