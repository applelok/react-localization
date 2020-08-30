A little demo on react-localization with Create-react-app/ React-intl v5/ flatten.

Using [Create-react-app](https://github.com/facebook/create-react-app), 
[React-intl v5](https://www.npmjs.com/package/react-intl) and [flat](https://www.npmjs.com/package/flat) for localization.

Main focus: Demostrate keys under each language folder could be declared in object structure instead of key-value mapping.

## Run project

Run `npm start` to view the demo

## Demo

<Image>

## Highlights

### Flatten the keys instead of hard-coding in each language folder
The keys could be defined under each of the language folder (src/i18n) with object type, which will be more readable.
<Image>

Using flat, we can flatten the keys in language object automatically

```javascript

const messages = {
  en: flatten(en),
  "zh-Hant-TW": flatten(zh_tw),
  zh: flatten(zh_sc),
  "ja-JP": flatten(jp),
};
```

And retrieve the keys in a single source file (src/i18n/keys.js)
<Image>

### Setting default language
Merging the current locale with English, we can display English instead of text's key in UI

```javascript
  const [locale, setLocale] = useState(navigator.language);
  const [mergedMessages, setMergedMessages] = useState(messages["en"]);

  useEffect(() => {
    // Merging english and current locale, avoid showing Text id if cannot look for the translate in locale file
    setMergedMessages(Object.assign({}, messages["en"], messages[locale]));
  }, [locale]);
```
