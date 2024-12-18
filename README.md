# anonymous-text

 * **template** is a text with, possibly, several fragments to replace
 * **choice** is an array of templates, possibly, each choice template may have a weight

## Syntax

 * Template, text
```text
A tree with {{color}} apples
```

 * Choice, text
```text
green |
red |
blue
```

 * Choice, yaml
```yaml
- green
- red
- blue
```

* Choice, yaml with weights
```yaml
- text: green    # text: green, weight: 3
  weight: 3
- "4:red"        # text: red, weight: 4
- blue           # text: blue, weight: 1
```
All variants without weight have a 1 weight
