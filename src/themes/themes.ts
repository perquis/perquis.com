export const dark = {
  name: 'Moonlight',
  type: 'dark',
  tokenColors: [
    {
      settings: {
        background: '#212539',
        foreground: '#e4f3fa',
      },
    },
    {
      name: 'Comment',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: {
        foreground: '#466486',
      },
    },
    {
      name: 'Variables',
      scope: ['variable', 'string constant.other.placeholder'],
      settings: {
        foreground: '#e4f3fa',
      },
    },
    {
      name: 'PHP Constants',
      scope: ['constant.other.php'],
      settings: {
        foreground: '#ffdf9b',
      },
    },
    {
      name: 'Colors',
      scope: ['constant.other.color'],
      settings: {
        foreground: '#e4f3fa',
      },
    },
    {
      name: 'Text',
      scope: ['text', 'meta.jsx.children'],
      settings: {
        foreground: '#e4f3fa',
      },
    },
    {
      name: 'Invalid',
      scope: ['invalid', 'invalid.illegal'],
      settings: {
        foreground: '#FF5370',
      },
    },
    {
      name: 'Invalid deprecated',
      scope: ['invalid.deprecated'],
      settings: {
        foreground: '#baacff',
      },
    },
    {
      name: 'Keyword, Storage',
      scope: ['keyword', 'storage.type', 'storage.modifier'],
      settings: {
        foreground: '#baacff',
      },
    },
    {
      name: 'Keyword Flow',
      scope: ['keyword.control.flow'],
      settings: {
        foreground: '#a6eefb',
      },
    },
    {
      name: 'Operator, Misc',
      scope: [
        'keyword.control.import',
        'keyword.control.export',
        'keyword.control.from',
        'keyword.control.as',
        'keyword.control.default',
        'constant.other.color',
        'punctuation',
        'meta.tag',
        'meta.block',
        'punctuation.definition.tag',
        'punctuation.separator.inheritance.php',
        'punctuation.definition.tag.html',
        'keyword.other.template',
        'keyword.other.substitution',
        'keyword.operator',
        'meta.brace',
      ],
      settings: {
        foreground: '#7fdaff',
      },
    },
    {
      name: 'Dark Punctuation',
      scope: ['punctuation.definition.template-expression'],
      settings: {
        foreground: '#ff757f',
      },
    },
    {
      name: 'Other Operator',
      scope: ['keyword.operator.logical', 'keyword.operator.comparison'],
      settings: {
        foreground: '#baacff',
      },
    },
    {
      name: 'Spread/Rest Operator',
      scope: ['keyword.operator.spread', 'keyword.operator.rest'],
      settings: {
        foreground: '#ff757f',
        fontStyle: 'bold',
      },
    },
    {
      name: 'Tag',
      scope: ['entity.name.tag', 'meta.tag.sgml', 'markup.deleted.git_gutter'],
      settings: {
        foreground: '#ff757f',
      },
    },
    {
      name: 'Function, Special Method',
      scope: ['entity.name.function', 'meta.function-call', 'variable.function', 'keyword.other.special-method'],
      settings: {
        foreground: '#70b0ff',
      },
    },
    {
      name: 'Function Method',
      scope: ['support.function', 'meta.object.member'],
      settings: {
        foreground: '#34d3fb',
      },
    },
    {
      name: 'C-related Block Level Variables',
      scope: ['source.cpp meta.block variable.other'],
      settings: {
        foreground: '#ff757f',
      },
    },
    {
      name: 'Object',
      scope: ['variable.other.object'],
      settings: {
        foreground: '',
      },
    },
    {
      name: 'Object Property',
      scope: ['variable.other.object.property'],
      settings: {
        foreground: '#a6eefb',
      },
    },
    {
      name: 'Object Property - Last',
      scope: ['support.variable.property', 'variable.other.property'],
      settings: {
        foreground: '#a7c6e8',
      },
    },
    {
      name: 'Object Literal Key',
      scope: ['meta.object-literal.key', 'entity.name.label.js', 'string.unquoted'],
      settings: {
        foreground: '#c7f59b',
      },
    },
    {
      name: 'DOM',
      scope: ['support.variable.dom', 'support.constant.json', 'support.constant.math'],
      settings: {
        foreground: '#ffdb8e',
      },
    },
    {
      name: 'Node',
      scope: ['support.variable.object.node', 'support.variable.object.process'],
      settings: {
        foreground: '#ffd88c',
      },
    },
    {
      name: 'Other Variable, String Link',
      scope: ['support.other.variable', 'string.other.link'],
      settings: {
        foreground: '#ff757f',
      },
    },
    {
      name: 'Constant, Function Argument, Tag Attribute, Embedded',
      scope: ['constant.language', 'support.constant', 'constant.escape', 'keyword.other.unit'],
      settings: {
        foreground: '#ff8a8a',
      },
    },
    {
      name: 'Constant Character',
      scope: ['constant.character'],
      settings: {
        foreground: '#ff757f',
      },
    },
    {
      name: 'Number',
      scope: ['constant.numeric', 'constant.language.infinity', 'constant.language.nan'],
      settings: {
        foreground: '#ff9668',
      },
    },
    {
      name: 'Undefined and Null',
      scope: ['constant.language.undefined', 'constant.language.null'],
      settings: {
        foreground: '#969bb8',
      },
    },
    {
      name: 'Number, Constant, Function Argument, Tag Attribute, Embedded',
      scope: ['variable.parameter.function.language.special', 'variable.parameter'],
      settings: {
        foreground: '#f3c1ff',
      },
    },
    {
      name: 'String, Symbols, Inherited Class, Markup Heading',
      scope: [
        'string',
        'constant.other.symbol',
        'constant.other.key',
        'entity.other.inherited-class',
        'markup.heading',
        'markup.inserted.git_gutter',
        'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
      ],
      settings: {
        fontStyle: 'normal',
        foreground: '#7af8ca',
      },
    },
    {
      name: 'Class, Support',
      scope: [
        'entity.name',
        'support.type',
        'support.class',
        'support.orther.namespace.use.php',
        'meta.use.php',
        'support.other.namespace.php',
        'markup.changed.git_gutter',
        'support.type.sys-types',
        'support.type.object.module',
      ],
      settings: {
        foreground: '#ffdb8e',
      },
    },
    {
      name: 'JSX Component',
      scope: ['support.class.component'],
      settings: {
        foreground: '#ff8dd3',
      },
    },
    {
      name: 'Entity Types',
      scope: ['support.type'],
      settings: {
        foreground: '#a7c6e8',
      },
    },
    {
      name: 'CSS psuedo-element and psuedo-class',
      scope: ['entity.other.attribute-name.pseudo-class', 'entity.other.attribute-name.pseudo-element'],
      settings: {
        foreground: '#c7f59b',
      },
    },
    {
      name: 'CSS unit',
      scope: ['keyword.other.unit'],
      settings: {
        foreground: '#ff8a8a',
      },
    },
    {
      name: 'Sub-methods',
      scope: ['entity.name.module.js', 'variable.import.parameter.js', 'variable.other.class.js'],
      settings: {
        foreground: '#FF5370',
      },
    },
    {
      name: 'Language methods',
      scope: ['variable.language'],
      settings: {
        foreground: '#ff757f',
      },
    },
    {
      name: 'meta.method.js',
      scope: ['meta.class-method.js entity.name.function.js', 'variable.function.constructor'],
      settings: {
        foreground: '#70b0ff',
      },
    },
    {
      name: 'Attributes',
      scope: ['entity.other.attribute-name'],
      settings: {
        foreground: '#ffbd76',
      },
    },
    {
      name: 'HTML Attributes',
      scope: ['text.html.basic entity.other.attribute-name.html', 'text.html.basic entity.other.attribute-name'],
      settings: {
        foreground: '#ffbd76',
      },
    },
    {
      name: 'HTML Doctype',
      scope: ['meta.tag.metadata.doctype entity.name.tag', 'meta.tag.metadata.doctype entity.other.attribute-name'],
      settings: {
        foreground: '#baacff',
      },
    },
    {
      name: 'CSS Punctuation',
      scope: ['source.css'],
      settings: {
        foreground: '#7fdaff',
      },
    },
    {
      name: 'CSS Classes',
      scope: ['entity.other.attribute-name.class'],
      settings: {
        foreground: '#ffbd76',
      },
    },
    {
      name: 'CSS Property',
      scope: ['support.type.property-name.css', 'support.type.property-name'],
      settings: {
        foreground: '#70b0ff',
      },
    },
    {
      name: 'CSS Unknown Property and Vendor Prefix',
      scope: ['meta.property-name.css', 'meta.property-name.scss', 'meta.property-name.less', 'support.type.vendored.property-name'],
      settings: {
        foreground: '#98b4e6',
      },
    },
    {
      name: 'CSS Value',
      scope: ['support.constant.property-value.css', 'meta.property-value', 'support.constant.font-name.css', 'support.constant.vendored.property-value.css'],
      settings: {
        foreground: '#a9eaff',
      },
    },
    {
      name: 'CSS Keyframes Name',
      scope: ['variable.parameter.keyframe-list', 'meta.at-rule.keyframes entity.name.function'],
      settings: {
        foreground: '#f989d3',
      },
    },
    {
      name: 'CSS Keyframe Offset',
      scope: ['entity.other.keyframe-offset', 'meta.at-rule.keyframes entity.other.attribute-name'],
      settings: {
        foreground: '#ceec94',
      },
    },
    {
      name: 'CSS Strings',
      scope: ['meta.attribute-selector'],
      settings: {
        foreground: '#7af8ca',
      },
    },
    {
      name: "CSS ID's",
      scope: ['source.sass keyword.control'],
      settings: {
        foreground: '#70b0ff',
      },
    },
    {
      name: 'Inserted',
      scope: ['markup.inserted'],
      settings: {
        foreground: '#c7f59b',
      },
    },
    {
      name: 'Deleted',
      scope: ['markup.deleted'],
      settings: {
        foreground: '#FF5370',
      },
    },
    {
      name: 'Changed',
      scope: ['markup.changed'],
      settings: {
        foreground: '#baacff',
      },
    },
    {
      name: 'Regular Expressions',
      scope: ['string.regexp'],
      settings: {
        foreground: '#a6eefb',
      },
    },
    {
      name: 'Regular Expressions - Character Class',
      scope: ['constant.other.character-class.regexp'],
      settings: {
        foreground: '#ceec94',
      },
    },
    {
      name: 'Regular Expressions - Character Class Set',
      scope: ['constant.other.character-class.set.regexp'],
      settings: {
        foreground: '#ffbd76',
      },
    },
    {
      name: 'Regular Expressions - Quantifier',
      scope: ['keyword.operator.quantifier.regexp'],
      settings: {
        foreground: '#f989d3',
      },
    },
    {
      name: 'Escape Characters',
      scope: ['constant.character.escape'],
      settings: {
        foreground: '#7fdaff',
      },
    },
    {
      name: 'URL',
      scope: ['*url*', '*link*', '*uri*'],
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      name: 'Decorators',
      scope: ['tag.decorator.js entity.name.tag.js', 'tag.decorator.js punctuation.definition.tag.js'],
      settings: {
        foreground: '#70b0ff',
      },
    },
    {
      name: 'ES7 Bind Operator',
      scope: ['source.js constant.other.object.key.js string.unquoted.label.js'],
      settings: {
        foreground: '#FF5370',
      },
    },
    {
      name: 'JSON Key - Level 0',
      scope: ['source.json meta.structure.dictionary.json support.type.property-name.json'],
      settings: {
        foreground: '#70b0ff',
      },
    },
    {
      name: 'JSON Key - Level 1',
      scope: ['source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'],
      settings: {
        foreground: '#34d3fb',
      },
    },
    {
      name: 'JSON Key - Level 2',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#c7f59b',
      },
    },
    {
      name: 'JSON Key - Level 3',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#ffdf9b',
      },
    },
    {
      name: 'JSON Key - Level 4',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#f0c4ff',
      },
    },
    {
      name: 'JSON Key - Level 5',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#baacff',
      },
    },
    {
      name: 'JSON Key - Level 6',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#ff757f',
      },
    },
    {
      name: 'Markdown',
      scope: ['text.html.markdown', 'meta.embedded.block'],
      settings: {
        foreground: '#e4f3fa',
      },
    },
    {
      name: 'Markdown - Markup Raw Inline',
      scope: ['text.html.markdown markup.inline.raw.markdown'],
      settings: {
        foreground: '#baacff',
      },
    },
    {
      name: 'Markdown - Markup Raw Inline Punctuation',
      scope: ['text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown'],
      settings: {
        foreground: '#4E5579',
      },
    },
    {
      name: 'Markdown - Line Break',
      scope: ['text.html.markdown meta.dummy.line-break'],
      settings: {
        foreground: '',
      },
    },
    {
      name: 'Markdown - Heading Punctuation',
      scope: ['markdown.heading', 'markup.heading | markup.heading entity.name', 'markup.heading.markdown punctuation.definition.heading.markdown'],
      settings: {
        foreground: '#7fdaff',
      },
    },
    {
      name: 'Markdown - Heading',
      scope: ['entity.name.section.markdown'],
      settings: {
        foreground: '#70b0ff',
      },
    },
    {
      name: 'Markup - Italic',
      scope: ['markup.italic'],
      settings: {
        fontStyle: 'italic',
        foreground: '#ff757f',
      },
    },
    {
      name: 'Markup - Bold',
      scope: ['markup.bold', 'markup.bold string'],
      settings: {
        fontStyle: 'bold',
        foreground: '#ff757f',
      },
    },
    {
      name: 'Markup - Bold-Italic',
      scope: [
        'markup.bold markup.italic',
        'markup.italic markup.bold',
        'markup.quote markup.bold',
        'markup.bold markup.italic string',
        'markup.italic markup.bold string',
        'markup.quote markup.bold string',
      ],
      settings: {
        fontStyle: 'bold',
        foreground: '#ff757f',
      },
    },
    {
      name: 'Markup - Underline',
      scope: ['markup.underline'],
      settings: {
        fontStyle: 'underline',
        foreground: '#34d3fb',
      },
    },
    {
      name: 'Markup - Strike',
      scope: ['markup.strike'],
      settings: {
        fontStyle: 'strike',
        foreground: '',
      },
    },
    {
      name: 'Markdown - Blockquote',
      scope: ['markup.quote punctuation.definition.blockquote.markdown'],
      settings: {
        foreground: '#4E5579',
      },
    },
    {
      name: 'Markup - Quote',
      scope: ['markup.quote'],
      settings: {
        fontStyle: 'italic',
        foreground: '',
      },
    },
    {
      name: 'Markdown - Link Text',
      scope: ['string.other.link.title.markdown'],
      settings: {
        foreground: '#aff1ff',
      },
    },
    {
      name: 'Markdown - Link Anchor',
      scope: ['constant.other.reference.link.markdown'],
      settings: {
        foreground: '#ffdf9b',
      },
    },
    {
      name: 'Markup - Raw Block',
      scope: ['markup.raw.block'],
      settings: {
        foreground: '#baacff',
      },
    },
    {
      name: 'Markdown - Fenced Bode Block Variable',
      scope: ['markup.fenced_code.block.markdown', 'markup.inline.raw.string.markdown'],
      settings: {
        foreground: '#a7c6e8',
      },
    },
    {
      name: 'Markdown - Fenced Language',
      scope: ['variable.language.fenced.markdown'],
      settings: {
        foreground: '#4E5579',
      },
    },
    {
      name: 'Markdown - Separator',
      scope: ['meta.separator'],
      settings: {
        fontStyle: 'bold',
        foreground: '#4E5579',
      },
    },
    {
      name: 'Markup - Table',
      scope: ['markup.table'],
      settings: {
        foreground: '#aab3e5',
      },
    },
  ],
  colors: {
    foreground: '#dcebff',
    focusBorder: '#70b0ff',
    contrastBorder: '#121523aa',
    'editorCursor.foreground': '#70b0ff',
    'editorRuler.foreground': '#4E5579',
    'scrollbar.shadow': '#00000022',
    'editorLink.activeForeground': '#aab3e5',
    'selection.background': '#aab3e5',
    'progressBar.background': '#74a0f1',
    'textLink.foreground': '#34d3fb',
    'textLink.activeForeground': '#b2dfff',
    'editorLineNumber.foreground': '#5b6395',
    'editorLineNumber.activeForeground': '#9da5d7',
    'editorBracketMatch.border': '#70b0ff50',
    'editorBracketMatch.background': '#212337',
    'editorWhitespace.foreground': '#aab3e540',
    'editor.background': '#212337',
    'editor.foreground': '#aab3e5',
    'editor.lineHighlightBackground': '#2a2e48',
    'editor.selectionBackground': '#717CB450',
    'editor.selectionHighlightBackground': '#3c4361',
    'editor.findMatchBackground': '#74a0f155',
    'editor.findMatchBorder': '#74c6f1bb',
    'editor.findMatchHighlightBackground': '#74a0f133',
    'editor.findMatchHighlightBorder': '#74a0f166',
    'editorOverviewRuler.border': '#212337',
    'editorHoverWidget.background': '#1b1d2c',
    'editorHoverWidget.border': '#121523aa',
    'editorIndentGuide.background': '#4E557970',
    'editorIndentGuide.activeBackground': '#4E5579',
    'editorGroupHeader.tabsBackground': '#1e2132',
    'editorGroup.border': '#161a2a',
    'editorGutter.modifiedBackground': '#70b0ff60',
    'editorGutter.addedBackground': '#c7f59b60',
    'editorGutter.deletedBackground': '#FF537060',
    'tab.activeBorder': '#74a0f1',
    'tab.activeModifiedBorder': '#7c85b3',
    'tab.unfocusedActiveBorder': '#7c85b3',
    'tab.activeForeground': '#e4f3fa',
    'tab.activeBackground': '#212337',
    'tab.inactiveForeground': '#7c85b3',
    'tab.inactiveBackground': '#1e2132',
    'tab.unfocusedActiveForeground': '#aab3e5',
    'tab.border': '#161a2a',
    'statusBar.noFolderBackground': '#212337',
    'statusBar.border': '#161a2a',
    'statusBar.background': '#1e2132',
    'statusBar.foreground': '#7c85b3',
    'statusBar.debuggingBackground': '#baacff',
    'statusBar.debuggingForeground': '#e4f3fa',
    'statusBarItem.hoverBackground': '#7c85b320',
    'activityBar.background': '#1e2132',
    'activityBar.border': '#21233760',
    'activityBar.foreground': '#aab3e5',
    'activityBarBadge.background': '#5881ea',
    'activityBarBadge.foreground': '#ffffff',
    'titleBar.activeBackground': '#1e2132',
    'titleBar.activeForeground': '#aab3e5',
    'titleBar.inactiveBackground': '#1e2132',
    'titleBar.inactiveForeground': '#7c85b3',
    'sideBar.background': '#1e2132',
    'sideBar.foreground': '#7c85b3',
    'sideBar.border': '#161a2a',
    'titleBar.border': '#161a2a',
    'sideBarTitle.foreground': '#aab3e5',
    'sideBarSectionHeader.background': '#1e2132',
    'sideBarSectionHeader.border': '#aab3e520',
    'input.background': '#191a2a',
    'input.foreground': '#e4f3fa',
    'input.focus': '#34d3fb',
    'input.placeholderForeground': '#aab3e5aa',
    'input.border': '#00000066',
    'inputValidation.errorBackground': '#c53b53',
    'inputValidation.errorForeground': '#FFFFFF',
    'inputValidation.errorBorder': '#FF537050',
    'inputValidation.infoBackground': '#446bbb',
    'inputValidation.infoForeground': '#FFFFFF',
    'inputValidation.infoBorder': '#70b0ff50',
    'inputValidation.warningBackground': '#ad7c43',
    'inputValidation.warningForeground': '#FFFFFF',
    'inputValidation.warningBorder': '#ffdf9b50',
    'dropdown.background': '#212337',
    'dropdown.border': '#00000066',
    'list.hoverForeground': '#e4f3fa',
    'list.hoverBackground': '#1e2132',
    'list.activeSelectionBackground': '#383e5c',
    'list.activeSelectionForeground': '#ffffff',
    'list.inactiveSelectionForeground': '#e4f3fa',
    'list.inactiveSelectionBackground': '#292e46',
    'list.focusBackground': '#293056',
    'list.focusForeground': '#ffffff',
    'list.highlightForeground': '#7fdaff',
    'list.warningForeground': '#deb86e',
    'terminal.ansiWhite': '#e4f3fa',
    'terminal.ansiBlack': '#000000',
    'terminal.ansiBlue': '#70b0ff',
    'terminal.ansiCyan': '#7fdaff',
    'terminal.ansiGreen': '#c7f59b',
    'terminal.ansiMagenta': '#baacff',
    'terminal.ansiRed': '#FF5370',
    'terminal.ansiYellow': '#ffdb8e',
    'terminal.ansiBrightWhite': '#e4f3fa',
    'terminal.ansiBrightBlack': '#7c85b3',
    'terminal.ansiBrightBlue': '#70b0ff',
    'terminal.ansiBrightCyan': '#7fdaff',
    'terminal.ansiBrightGreen': '#c7f59b',
    'terminal.ansiBrightMagenta': '#baacff',
    'terminal.ansiBrightRed': '#FF5370',
    'terminal.ansiBrightYellow': '#ffdb8e',
    'terminal.border': '#aab3e520',
    'scrollbarSlider.background': '#aab3e520',
    'scrollbarSlider.hoverBackground': '#aab3e510',
    'scrollbarSlider.activeBackground': '#74a0f1',
    'editorSuggestWidget.background': '#1a1e30',
    'editorSuggestWidget.foreground': '#aab3e5',
    'editorSuggestWidget.highlightForeground': '#74a0f1',
    'editorSuggestWidget.selectedBackground': '#00000050',
    'editorSuggestWidget.border': '#e4f3fa10',
    'editorError.foreground': '#FF5370cc',
    'editorWarning.foreground': '#c7f59bbb',
    'editorWidget.background': '#1e2132',
    'editorWidget.resizeBorder': '#74a0f1',
    'editorWidget.border': '',
    'editorMarkerNavigation.background': '#aab3e505',
    'widget.shadow': '#00000033',
    'panel.border': '#21233760',
    'panel.background': '#1e2132',
    'panel.dropBackground': '#aab3e5',
    'panelTitle.inactiveForeground': '#aab3e5',
    'panelTitle.activeForeground': '#e4f3fa',
    'panelTitle.activeBorder': '#74a0f1',
    'diffEditor.insertedTextBackground': '#c7f59b15',
    'diffEditor.removedTextBackground': '#FF537020',
    'notifications.background': '#1e2132',
    'notifications.foreground': '#aab3e5',
    'notificationLink.foreground': '#74a0f1',
    'badge.background': '#00000030',
    'badge.foreground': '#7c85b3',
    'button.background': '#4e80ffbb',
    'extensionButton.prominentBackground': '#c7f59b90',
    'extensionButton.prominentHoverBackground': '#c7f59b',
    'peekView.border': '#00000030',
    'peekViewEditor.background': '#aab3e505',
    'peekViewTitle.background': '#aab3e505',
    'peekViewResult.background': '#aab3e505',
    'peekViewEditorGutter.background': '#aab3e505',
    'peekViewTitleDescription.foreground': '#aab3e560',
    'peekViewResult.matchHighlightBackground': '#717CB450',
    'peekViewEditor.matchHighlightBackground': '#717CB450',
    'debugToolBar.background': '#1e2132',
    'pickerGroup.foreground': '#74a0f1',
    'gitDecoration.deletedResourceForeground': '#FF5370CC',
    'gitDecoration.conflictingResourceForeground': '#ffdf9bcc',
    'gitDecoration.modifiedResourceForeground': '#70b0ffee',
    'gitDecoration.untrackedResourceForeground': '#7af8cabb',
    'gitDecoration.ignoredResourceForeground': '#777fabaa',
    'peekViewResult.selectionBackground': '#7c85b370',
    'breadcrumb.background': '#212337',
    'breadcrumb.foreground': '#777fab',
    'breadcrumb.focusForeground': '#aab3e5',
    'breadcrumb.activeSelectionForeground': '#74a0f1',
    'breadcrumbPicker.background': '#1e2132',
    'menu.background': '#1e2132',
    'menu.foreground': '#aab3e5',
    'menu.selectionBackground': '#00000050',
    'menu.selectionForeground': '#74a0f1',
    'menu.selectionBorder': '#00000030',
    'menu.separatorBackground': '#aab3e5',
    'menubar.selectionBackground': '#00000030',
    'menubar.selectionForeground': '#74a0f1',
    'menubar.selectionBorder': '#00000030',
    'settings.dropdownForeground': '#aab3e5',
    'settings.dropdownBackground': '#2c314b',
    'settings.dropdownBorder': '#161a2a',
    'settings.numberInputForeground': '#aab3e5',
    'settings.numberInputBackground': '#191a2a',
    'settings.numberInputBorder': '#00000066',
    'settings.textInputForeground': '#aab3e5',
    'settings.textInputBackground': '#191a2a',
    'settings.textInputBorder': '#00000066',
    'settings.headerForeground': '#70b0ff',
    'settings.modifiedItemIndicator': '#70b0ff',
    'settings.checkboxBackground': '#191a2a',
    'settings.checkboxForeground': '#aab3e5',
    'settings.checkboxBorder': '#00000066',
  },
};

export const light = {
  name: '1984 Light',
  type: 'light',
  colors: {
    'activityBar.background': '#e4e5f5',
    'activityBar.foreground': '#19152c',
    'activityBarBadge.background': '#FF16B0',
    'activityBarBadge.foreground': '#fcfcfc',
    'button.background': '#FF16B0',
    'button.foreground': '#19152c',
    'button.hoverBackground': '#0098fd',
    'diffEditor.insertedTextBackground': '#00809B33',
    'dropdown.background': '#e4e5f5ff',
    'dropdown.border': '#19152c',
    'editor.background': '#e4e5f5',
    'editor.foreground': '#19152c',
    'editorBracketMatch.border': '#B3F361',
    'editor.lineHighlightBackground': '#dcddec',
    'editor.selectionBackground': '#ffffff',
    'editorCursor.foreground': '#FF16B0',
    'editorGroup.border': '#dcddec',
    'editorGroupHeader.tabsBackground': '#dfe0f0',
    'editorIndentGuide.background': '#f1f1f1',
    'editorLineNumber.foreground': '#7f8a99',
    'editorWhitespace.foreground': '#f1f1f1',
    'editorHoverWidget.background': '#d9dbf0',
    'editorHoverWidget.border': '#19152c',
    'editorSuggestWidget.background': '#d9dbf0',
    'editorSuggestWidget.border': '#19152c',
    'editorSuggestWidget.selectedBackground': '#46beff6b',
    'editorWidget.background': '#d9dbf0',
    'input.background': '#d4d5e9',
    'input.border': '#a8b6ca',
    focusBorder: '#46BDFF',
    'list.activeSelectionBackground': '#46beff6b',
    'list.activeSelectionForeground': '#19152c',
    'list.focusBackground': '#46beff3f',
    'list.hoverBackground': '#46beff3f',
    'list.highlightForeground': '#19152c',
    'list.inactiveSelectionBackground': '#d4d5e9',
    'list.inactiveSelectionForeground': '#19152c',
    'pickerGroup.border': '#FF16B0',
    'scrollbarSlider.background': '#4E566680',
    'scrollbarSlider.activeBackground': '#747D9180',
    'scrollbarSlider.hoverBackground': '#5A637580',
    'sideBar.background': '#dfe0f0',
    'sideBar.foreground': '#585d74',
    'sideBarSectionHeader.background': '#d4d5e6',
    'statusBar.background': '#070825',
    'statusBar.foreground': '#b5becf',
    'statusBar.debuggingBackground': '#FF16B0',
    'statusBar.debuggingForeground': '#FFFFFF',
    'statusBarItem.hoverBackground': '#2C313A',
    'statusBar.noFolderBackground': '#19152c',
    'tab.activeBackground': '#e4e5f5',
    'tab.border': '#dfe0f0',
    'tab.inactiveBackground': '#d4d6e7',
    'titleBar.activeBackground': '#070825',
    'titleBar.activeForeground': '#b5becf',
    'titleBar.inactiveBackground': '#07082579',
    'titleBar.inactiveForeground': '#7b7f86',
    'extensionButton.prominentBackground': '#FF16B0',
    'extensionButton.prominentHoverBackground': '#ff16b196',
    'terminal.foreground': '#19152c',
    'terminal.ansiBlue': '#0098fd',
    'terminal.ansiBrightBlue': '#0098fd',
    'terminal.ansiBrightCyan': '#00b2be',
    'terminal.ansiBrightGreen': '#00af4f',
    'terminal.ansiBrightMagenta': '#F806FA',
    'terminal.ansiBrightRed': '#FF16B0',
    'terminal.ansiBrightYellow': '#FF8D01',
    'terminal.ansiCyan': '#00b2be',
    'terminal.ansiGreen': '#00af4f',
    'terminal.ansiMagenta': '#F806FA',
    'terminal.ansiRed': '#FF16B0',
    'terminal.ansiYellow': '#FF8D01',
    'terminal.selectionBackground': '#fff',
    'terminalCursor.background': '#ffffff',
    'terminalCursor.foreground': '#FF16B0',
    'debugToolBar.background': '#1C1E26',
    'walkThrough.embeddedEditorBackground': '#d5d9f1',
    'gitDecoration.addedResourceForeground': '#0098fd',
    'gitDecoration.modifiedResourceForeground': '#FF8D01',
    'gitDecoration.deletedResourceForeground': '#FF16B0',
    'gitDecoration.untrackedResourceForeground': '#00af4f',
    'gitDecoration.ignoredResourceForeground': '#adadad',
  },
  tokenColors: [
    {
      name: 'Comment',
      scope: 'comment',
      settings: {
        foreground: '#9bb2ca',
      },
    },
    {
      name: 'String',
      scope: ['string.quoted', 'string.template', 'punctuation.definition.string'],
      settings: {
        foreground: '#c300ff',
      },
    },
    {
      name: 'Punctuation within templates',
      scope: 'string.template meta.embedded.line',
      settings: {
        foreground: '#19152c',
      },
    },
    {
      name: 'Variable',
      scope: ['variable', 'entity.name.variable'],
      settings: {
        foreground: '#4d5eff',
      },
    },
    {
      name: 'Language variable',
      scope: ['variable.language', 'variable.other.object.js'],
      settings: {
        foreground: '#4d5eff',
      },
    },
    {
      name: 'Parameter',
      scope: 'variable.parameter',
      settings: {
        foreground: '#1930fd',
      },
    },
    {
      name: 'Storage (declaration or modifier keyword)',
      scope: ['storage.type', 'storage.modifier'],
      settings: {
        foreground: '#FF16B0',
      },
    },
    {
      name: 'Constant',
      scope: 'constant',
      settings: {
        foreground: '#4d5eff',
      },
    },
    {
      name: 'Regex',
      scope: 'string.regexp',
      settings: {
        foreground: '#4d5eff',
      },
    },
    {
      name: 'Text',
      scope: ['meta.jsx.children.js', 'meta.property-value.css', 'text.html.derivative'],
      settings: {
        foreground: '#3f374b',
      },
    },
    {
      name: 'Number',
      scope: 'constant.numeric',
      settings: {
        foreground: '#FF16B0',
      },
    },
    {
      name: 'Language constant (boolean, null)',
      scope: 'constant.language',
      settings: {
        foreground: '#4d5eff',
      },
    },
    {
      name: 'Character escape',
      scope: 'constant.character.escape',
      settings: {
        foreground: '#1f398f',
      },
    },
    {
      name: 'Entity',
      scope: 'entity.name',
      settings: {
        foreground: '#0098fd',
      },
    },
    {
      name: 'HTML or XML tag',
      scope: 'entity.name.tag',
      settings: {
        foreground: '#0098fd',
      },
    },
    {
      name: 'HTML or XML tag brackets',
      scope: ['punctuation.definition.tag'],
      settings: {
        foreground: '#665388',
      },
    },
    {
      name: 'Tag atttribute',
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: '#4d5eff',
      },
    },
    {
      name: 'Class',
      scope: 'entity.name.type',
      settings: {
        foreground: '#0098fd',
      },
    },
    {
      name: 'Inherited class',
      scope: 'entity.other.inherited-class',
      settings: {
        foreground: '#636262',
      },
    },
    {
      name: 'Function',
      scope: ['entity.name.function', 'variable.function'],
      settings: {
        foreground: '#251b50',
      },
    },
    {
      name: 'Keyword',
      scope: 'keyword',
      settings: {
        foreground: '#FF16B0',
      },
    },
    {
      name: 'Control keyword (if, try, while, etc.)',
      scope: 'keyword.control',
      settings: {
        foreground: '#FF16B0',
      },
    },
    {
      name: 'Operator',
      scope: 'keyword.operator',
      settings: {
        foreground: '#FF16B0',
      },
    },
    {
      name: 'Special operator',
      scope: ['keyword.operator.new', 'keyword.operator.expression', 'keyword.operator.logical'],
      settings: {
        foreground: '#FF16B0',
      },
    },
    {
      name: 'Unit',
      scope: 'keyword.other.unit',
      settings: {
        foreground: '#4d5eff',
      },
    },
    {
      name: 'Support',
      scope: 'support',
      settings: {
        foreground: '#0098fd',
      },
    },
    {
      name: 'Support function',
      scope: 'support.function',
      settings: {
        foreground: '#251b50',
      },
    },
    {
      name: 'Support variable',
      scope: 'support.variable',
      settings: {
        foreground: '#4d5eff',
      },
    },
    {
      name: 'Object literal key / property',
      scope: ['meta.object-literal.key', 'support.type.property-name'],
      settings: {
        foreground: '#0098fd',
      },
    },
    {
      name: 'JS Variable Property',
      scope: 'variable.other.property.js',
      settings: {
        foreground: '#FF16B0',
      },
    },
    {
      name: 'Key-value separator',
      scope: 'punctuation.separator.key-value',
      settings: {
        foreground: '#FF16B0',
      },
    },
    {
      name: 'Embedded puncuation',
      scope: 'punctuation.section.embedded',
      settings: {
        foreground: '#FF16B0',
      },
    },
    {
      name: 'Puncuation Definition block',
      scope: 'punctuation.section.embedded',
      settings: {
        foreground: '#080218',
      },
    },
    {
      name: 'Template expression',
      scope: ['punctuation.definition.template-expression.begin', 'punctuation.definition.template-expression.end'],
      settings: {
        foreground: '#FF16B0',
      },
    },
    {
      name: 'CSS property',
      scope: ['support.type.property-name.css', 'support.type.vendored.property-name.css'],
      settings: {
        foreground: '#39344e',
        fontStyle: '',
      },
    },
    {
      name: 'Color',
      scope: 'constant.other.color',
      settings: {
        foreground: '#FF16B0',
      },
    },
    {
      name: 'Font names',
      scope: 'support.constant.font-name',
      settings: {
        foreground: '#4d5eff',
      },
    },
    {
      name: 'CSS #id',
      scope: 'entity.other.attribute-name.id',
      settings: {
        foreground: '#FF16B0',
      },
    },
    {
      name: 'Pseudo CSS',
      scope: ['entity.other.attribute-name.pseudo-element', 'entity.other.attribute-name.pseudo-class'],
      settings: {
        foreground: '#080218',
      },
    },
    {
      name: 'CSS support functions (rgb)',
      scope: 'support.function.misc.css',
      settings: {
        foreground: '#FF16B0',
      },
    },
    {
      name: 'Markup heading',
      scope: ['markup.heading', 'entity.name.section'],
      settings: {
        foreground: '#4d5eff',
      },
    },
    {
      name: 'Markup quote',
      scope: 'markup.quote',
      settings: {
        foreground: '#FF407B',
      },
    },
    {
      name: 'Markup list',
      scope: 'beginning.punctuation.definition.list',
      settings: {
        foreground: '#4d5eff',
      },
    },
    {
      name: 'Markup link',
      scope: 'markup.underline.link',
      settings: {
        foreground: '#080218',
      },
    },
    {
      name: 'Markup link description',
      scope: 'string.other.link.description',
      settings: {
        foreground: '#4d5eff',
      },
    },
    {
      name: 'Python function call',
      scope: 'meta.function-call.generic.python',
      settings: {
        foreground: '#080218',
      },
    },
    {
      name: 'C# storage type',
      scope: 'storage.type.cs',
      settings: {
        foreground: '#FF16B0',
      },
    },
    {
      name: 'C# local variable',
      scope: 'entity.name.variable.local.cs',
      settings: {
        foreground: '#4d5eff',
      },
    },
    {
      name: 'C# properties and fields',
      scope: ['entity.name.variable.field.cs', 'entity.name.variable.property.cs'],
      settings: {
        foreground: '#4d5eff',
      },
    },
    {
      name: 'C++ operators',
      scope: 'source.cpp keyword.operator',
      settings: {
        foreground: '#FF16B0',
      },
    },
  ],
};
