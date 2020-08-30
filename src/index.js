import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { IntlProvider, FormattedMessage } from "react-intl";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import zh_tw from "./i18n/zh_tw";
import jp from "./i18n/jp";
import zh_sc from "./i18n/zh_sc";
import flatten from "flat";
import { localizationKeys } from "./i18n/keys";
import en from "./i18n/en";

const messages = {
  en: flatten(en),
  "zh-Hant-TW": flatten(zh_tw),
  zh: flatten(zh_sc),
  "ja-JP": flatten(jp),
};

const Root = () => {
  const [locale, setLocale] = useState(navigator.language);
  const [mergedMessages, setMergedMessages] = useState(messages["en"]);

  useEffect(() => {
    // Merging english and current locale, avoid showing Text id if cannot look for the translate in locale file
    setMergedMessages(Object.assign({}, messages["en"], messages[locale]));
  }, [locale]);

  return (
    <IntlProvider
      messages={mergedMessages}
      locale={locale}
      key={locale}
      defaultLocale="en"
    >
      <Button color="red" onClick={() => setLocale("en")}>
        English
      </Button>
      <Button color="green" onClick={() => setLocale("zh-Hant-TW")}>
        Chinese Tradition
      </Button>
      <Button color="teal" onClick={() => setLocale("zh")}>
        Simplified Chinese
      </Button>
      <Button color="blue" onClick={() => setLocale("ja-JP")}>
        Japanese
      </Button>

      <p>
        <FormattedMessage
          id={localizationKeys.student.name}
          values={{ name: "Apple" }}
        />
        <br />
        <FormattedMessage
          id={localizationKeys.student.contact.phone}
          values={{ phone: 12345678 }}
        />
      </p>
    </IntlProvider>
  );
};
ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
