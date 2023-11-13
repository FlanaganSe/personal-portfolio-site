When searching for a simple method to keep push a footer to the bottom of a page, most approaches I found were either hacky or required hard-coding the height of the filter / main content to work well.

![Footer not on bottom](/blog-images/footer-not-bottom.png)

However one simple solution can be achieved by assigning the flex css property on the parent element of the footer and setting the previous-child's margin bottom to auto.

```html
<body>
  <main>
    <h1>This is the main</h1>
  </main>
  <footer>
    <h2>This is the footer</h2>
  </footer>
</body>
```

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  margin-bottom: auto;
}
```

This achieves the desired output. The solution is dynamic, flexible, and does not result in a sticky footer. If the content takes up over 100% of the viewport height than the footer is simply pushed below any content on the page.

![Footer on bottom](/blog-images/footer-on-bottom.png)
