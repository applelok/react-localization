A little demo on react-localization with Create-react-app/ Format-js(React-intl) v5/ flat, with a more readable and maintainable structure.

Using [Create-react-app](https://github.com/facebook/create-react-app), 
[format-js v5 (React)](https://www.npmjs.com/package/react-intl) and [flat](https://www.npmjs.com/package/flat) for localization.

Main focus: Demostrate keys under each language folder could be declared in object structure instead of key-value mapping.

## Run project

Run `npm start` to view the demo

## Demo

![Demo image](https://raw.githubusercontent.com/applelok/react-localization/master/src/img/demo.gif)

## Highlights

### Flatten the keys instead of hard-coding in each language folder
Standard way in React-intl:
  
```javascript
const messagesInEnglish = {
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
};

```

But in fact we can (also prefer to) define the keys and values in each of the language folder (src/i18n) with object type, which will be more readable.

```javascript
// src/i18n/en
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
};
```

Using flat, we can flatten the keys in language object automatically, and convert into a correct format for react-intl

```javascript
import flatten from "flat";

const messages = {
  en: flatten(en),
  "zh-Hant-TW": flatten(zh_tw),
};
```

### Centralizing the place for retrieving locale keys
We can centralize the locale keys to avoid the typo.

![locale keys centralized image](https://raw.githubusercontent.com/applelok/react-localization/master/src/img/locale_keys_centralized.png)


### Setting default language
Merging the current locale with English, we can display English as default instead of text's id in UI, when the text id is failed to look from locale file

```javascript
const [locale, setLocale] = useState(navigator.language);
const [mergedMessages, setMergedMessages] = useState(messages["en"]);

useEffect(() => {
  // Merging English and current locale, avoid showing Text id if cannot look for the translate in locale file
  setMergedMessages(Object.assign({}, messages["en"], messages[locale]));
}, [locale]);
```
