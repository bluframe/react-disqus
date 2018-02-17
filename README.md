# reactdisqus

[![npm Version](https://img.shields.io/npm/v/reactdisqus.svg?style=flat-square)](https://www.npmjs.com/package/react-router-scroll-top)

A single component and all your Disqus comments appear on your page

## Usage

```jsx
import ReactDisqus from 'reactdisqus'

const Page = () => (
  <ReactDisqus    
    identifier={pageIdentifier} // Replace {pageIdentifier} with your page's unique identifier variable
    shortname={disqusShortname} // Replace {disqusShortname} with your Disqus Shortname
    title={pageTitle} // Replace {pageTitle} with your page title
    url={pageUrl} // Replace {pageUrl} with your page's canonical URL variable
  />
)
```

## How to install

If you use `yarn`

```shell
yarn add reactdisqus
```

And if you use `npm`

```shell
npm install reactdisqus --save
```
