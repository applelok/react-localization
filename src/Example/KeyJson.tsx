import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
export default function KeyJson() {
  return (
    <div>
      <h3>Flatten the keys instead of hard-coding in each language folder</h3>
      <p>Standard way in formatJS:</p>
      <SyntaxHighlighter language="javascript" style={vs2015}>
        {`const messagesInEnglish = {
  "student.name": "Name - {name}"
  "student.contact.phone": "Phone - {phone}"
};
  
const messagesInZhTw = {
  "student.name": "姓名 - {name}"
  "student.contact.phone": "電話 - {phone}"
}; 

const messages = {
  en: messagesInEnglish,
  "zh-Hant-TW": messagesInZhTw
};`}
      </SyntaxHighlighter>
      <p>
        But in fact we can (also prefer to) define the keys and values in each
        of the language folder (src/i18n) with object type, which will be more
        readable.
      </p>
      <SyntaxHighlighter language="javascript" style={vs2015}>
        {`// src/i18n/en
export const student = {
  name: "Name - {name}",
  contact: {
    phone: "Phone: {phone}",
  },
};

// src/i18n/zh_tw
export const student = {
  name: "姓名 - {name}",
  contact: {
    phone: "電話: {phone}",
  },
}`}
      </SyntaxHighlighter>
      <p>
        Using flat, we can flatten the keys in language object automatically,
        and convert into a correct format for formatJS
      </p>
      <SyntaxHighlighter language="javascript" style={vs2015}>
        {`import flatten from "flat";

const messages = {
  en: flatten(en),
  "zh-Hant-TW": flatten(zh_tw),
};`}
      </SyntaxHighlighter>
    </div>
  );
}
