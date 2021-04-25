export const ARTICLES = {
  'objects': {
    title: 'Objects',
    body: `Javascript objects are like arrays, but values are accessed by named properties, not just numbers. An object’s property can also be set to a function. Because they are associated with an object, these functions are called methods.\n\nLet’s consider the role of an object before you learn how to create and use one. Objects, like arrays, numbers, strings, and booleans are used to model the world around us. The difference is that objects can model both the data and the functions that manipulate the data.\n\nObjects are especially useful for storing information (and functions that use that information) in the same place.\n\nYou can think of objects as a collection of property-value pairs. Values, however, don’t have to be numbers like 0, 1, or 2, they can be any other data type and even variables.`,
    author: 'Ben Spector',
    slug: 'objects'
  },
  'browser-compatibility': {
    title: 'Browser Compatibility',
    body: `Web developers will often have a preferred Internet browser. Naturally, that same browser is the one used to preview websites and web applications in development. There are, however, a multitude of browsers (and many versions of those browsers), resulting in a variety of experiences for users. This creates a problem for developers: how can we ensure that a website is compatible across as many browsers as possible? In this article, you’ll learn about the varying, default CSS rules that different browsers apply to HTML, how to reset default browser CSS, and how to increase browser compatibility for websites.\n\nWhen building a website, you’ve probably noticed that heading elements like ${'`h1`'} are always a default size (and font) or that hyperlinks always appear blue and underlined, all before you add your own styles. Why is that so? And how does that happen?\n\nAll browsers have a default set of CSS rules that they apply to HTML. The default CSS rules live in a stylesheet specific to the browser. The stylesheet is known as a _user agent style sheet_.\n\nIf you were to view the same website across many different web browsers, you might notice that the website looks different in each browser. This is because each browser has its own user agent stylesheet. This variance in user agent style sheets is what makes it difficult to create a website that is consistent across all browsers.
    `,
    author: 'Nick Duckwiler',
    slug: 'browser-compatibility'
  },
  'accessibility-and-html': {
    title: 'Accessibility and HTML',
    body: `When designing and creating web pages, it’s important that the web pages are accessible to all audiences. In particular, due to the visual and dynamic nature of the webpages that you’ll be making, it’s important to make sure that your website will also make sense to visually-impaired or blind users. Many visually-impaired or blind users access web pages with the help of screen readers. Screen readers parse through the HTML of your web page and read the contents out loud, responding to commands to navigate around the page, and take actions such as clicking on a link, typing in an input field, or submitting a form. In this resource, we’ll give an overview of a few ways that you can improve the accessibility of your web page and help screen readers better interpret it!\n\nOne way to make the elements of your page more comprehensible to screen readers is to provide alt text for images. Alt, or alternative, text is provided as an attribute to the ${'`<img>`'} tag to describe the image to the screen reader. Be sure to provide succinct alt text descriptions for each image on your web page! \n\nARIA, also known as WAI-ARIA, stands for Accessible Rich Internet Applications. ARIA defines a variety of markup extensions, usually HTML5 attributes, that can be added to elements to give screen readers more information about the element and help visually-impaired users better grasp what’s happening on the webpage. For instance, one useful ARIA attribute is the ${'`role`'} attribute. When added to an element, this will provide the screen reader with extra context about what that element’s function is in context of a page. There are many other functions for ARIA attributes, such as telling the user the state of forms and checkboxes, and even calling their attention to an element on the page that was just changed by JavaScript. We won’t cover everything related to ARIA in this article, but feel free to check out the spec [here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA).`,
    author: 'Ben Spector',
    slug: 'accessibility-and-html'
  }
}

export const AUTHORS = {
  'Ben Spector': {
    articles: [
      'accessibility-and-html',
      'objects'
    ]
  },
  'Nick Duckwiler': {
    articles: [
      'browser-compatibility'
    ]
  }
}

export const CATEGORIES = {
  react: [],
  javascript: [
    'objects'
  ],
  html: [
    'accessibility-and-html',
    'browser-compatibility'
  ]
}
