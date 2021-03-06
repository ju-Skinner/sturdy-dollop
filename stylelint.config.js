module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-prettier', 'stylelint-config-sass-guidelines'],
  plugins: [
    'stylelint-declaration-strict-value',
    'stylelint-no-unsupported-browser-features',
    'stylelint-use-nesting',
  ],
  "defaultSeverity": "warning",
  "ignoreFiles": ["docs/lib/generators/**/*.*"],
  "rules": {
    "at-rule-empty-line-before": null,
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "block-closing-brace-space-before": null,
    "block-opening-brace-newline-after": ["always", { "severity": "error" }],
    "block-no-empty": [true, { "severity": "error" }],
    "color-named": [
      "never", {
        "ignore": ["inside-function"]
      }
    ],
    "comment-empty-line-before": null,
    "comment-no-empty": [true, { "severity": "error" }],
    "comment-whitespace-inside": "always",
    "custom-property-empty-line-before": null,
    "declaration-bang-space-after": ["never", { "severity": "error" }],
    "declaration-bang-space-before": ["always", { "severity": "error" }],
    "declaration-colon-space-after": ["always-single-line", { "severity": "error" }],
    "declaration-colon-space-before": ["never", { "severity": "error" }],
    "declaration-block-no-duplicate-properties": [true, {
      "ignore": ["consecutive-duplicates"],
      "severity": "error"
    }],
    "declaration-block-semicolon-newline-after": ["always-multi-line", { "severity": "error" }],
    "declaration-block-semicolon-space-after": null,
    "declaration-block-semicolon-space-before": null,
    "declaration-colon-newline-after": null,
    "declaration-no-important": true,
    "font-family-name-quotes": ["always-unless-keyword", { "severity": "error" }],
    "function-calc-no-unspaced-operator": [true, { "severity": "error" }],
    "function-parentheses-space-inside": "never-single-line",
    "keyframe-declaration-no-important": true,
    "max-empty-lines": 2,
    "max-nesting-depth": 2,
    "media-query-list-comma-newline-after": null,
    "media-query-list-comma-space-after": ["always", { "severity": "error" }],
    "no-unknown-animations": [true, { "severity": "error" }],
    "number-leading-zero": ["always", { "severity": "error" }],
    "order/order": [
      "custom-properties",
      "dollar-variables",
      "at-variables",
      "declarations"
    ],
    "order/properties-alphabetical-order": null,
    "order/properties-order": [
      {
        "properties": [ "content", "quotes" ],
        "order": "flexible"
      },
      {
        "properties": [
          "display", "visibility"
        ],
        "order": "flexible"
      },
      {
        "properties": [
          "box-sizing",
          "grid-template-columns", "grid-template-rows", "grid-template-areas", "grid-template", "grid-auto-columns", "grid-auto-rows", "grid-auto-flow", "grid", "grid-row-start", "grid-column-start", "grid-row-end", "grid-column-end", "grid-row", "grid-column", "grid-area", "grid-row-gap", "grid-column-gap", "grid-gap",
          "row-gap", "column-gap", "gap",
          "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "align-content", "align-items", "align-self", "justify-content", "order",
          "float", "clear",
          "overflow", "overflow-x", "overflow-y",
          "clip", "zoom",
          "columns", "column-gap", "column-fill", "column-rule", "column-span", "column-count", "column-width",
          "table-layout", "empty-cells", "caption-side", "border-spacing", "border-collapse",
          "position", "z-index", "top", "right", "bottom", "left",
          "transform", "transform-origin", "transform-style"
        ],
        "order": "flexible"
      },
      {
        "properties": [
          "width", "min-width", "max-width", "height", "min-height", "max-height"
        ],
        "order": "flexible"
      },
      {
        "properties": [
          "margin", "margin-top", "margin-right", "margin-bottom", "margin-left",
          "padding", "padding-top", "padding-right", "padding-bottom", "padding-left"
        ],
        "order": "flexible"
      },
      {
        "properties": [
          "font", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-display", "font-effect", "font-style", "font-variant", "font-weight",
          "font-emphasize", "font-emphasize-position", "font-emphasize-style",
          "color",
          "list-style", "list-style-position", "list-style-type", "list-style-image",
          "line-height", "word-spacing",
          "letter-spacing",
          "text-align", "text-align-last", "text-decoration", "text-indent", "text-justify", "text-overflow", "text-overflow-ellipsis", "text-overflow-mode", "text-rendering", "text-outline", "text-shadow", "text-transform", "text-wrap", "word-wrap", "word-break",
          "text-emphasis", "text-emphasis-color", "text-emphasis-style", "text-emphasis-position",
          "vertical-align", "white-space", "word-spacing", "hyphens",
          "src"
        ],
        "order": "flexible"
      },
      {
        "properties": [
          "border", "border-top", "border-right", "border-bottom", "border-left", "border-width", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width",
          "border-style", "border-top-style", "border-right-style", "border-bottom-style", "border-left-style",
          "border-color", "border-top-color", "border-right-color", "border-bottom-color", "border-left-color",
          "border-radius", "border-top-left-radius", "border-top-right-radius", "border-bottom-left-radius", "border-bottom-right-radius",
          "background", "background-color", "background-image", "background-repeat", "background-position", "background-size", "box-shadow", "fill",
          "outline", "outline-color", "outline-offset", "outline-style", "outline-width",
          "stroke-width", "stroke-linecap", "stroke-dasharray", "stroke-dashoffset", "stroke"
        ],
        "order": "flexible"
      },
      {
        "properties": [
          "transition", "transition-property", "transition-duration", "transition-timing-function", "transition-delay",
          "backface-visibility", "perspective", "perspective-origin"
        ],
        "order": "flexible"
      },
      {
        "properties": [
          "animation", "animation-name", "animation-duration", "animation-play-state", "animation-timing-function", "animation-delay", "animation-iteration-count", "animation-direction"
        ],
        "order": "flexible"
      },
      {
        "properties": [
          "opacity",
          "tab-size", "counter-reset", "counter-increment", "resize", "cursor", "pointer-events", "speak", "user-select", "nav-index", "nav-up", "nav-right", "nav-down", "nav-left"
        ],
        "order": "flexible"
      }
    ],
    "property-case": ["lower", { "severity": "error" }],
    "property-no-unknown": null,
    "rule-empty-line-before": null,
    "scss/double-slash-comment-whitespace-inside": "always",
    "scss/dimension-no-non-numeric-values": true,
    "scss/dollar-variable-pattern": "^[-]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/operator-no-unspaced": true,
    "scss/percent-placeholder-pattern": null,
    "scss/no-duplicate-mixins": true,
    "selector-class-pattern": null,
    'selector-disallowed-list': [
      /(?::?:after|:?:before|:?:first-letter|:?:first-line)[^,]+/,
      // /::slotted\(.+\) .*/,
      // /::slotted\(.+\):(?!:?after|:?before|:?first-letter|:?first-line)/,
      // /::slotted\(.*(?::?:after|:?:before|:?:first-letter|:?:first-line|::slotted|:host).*\)/,
      // /::slotted\([^,]+ [^,]+\)/,
      // /::slotted\([^,]*[>+~][^,]+\)/,
      // /:host\([^,]+ [^,]+\)/,
      // /:host\([^,]*[>+~][^,]+\)/,
      /([^, \n][ \n]*):host/,
    ],
    "selector-no-qualifying-type": [true, { "ignore": ["attribute"] }],
    "string-quotes": ["single", { "severity": "error" }],
    "value-keyword-case": ["lower", { "severity": "error" }]
  }
}
