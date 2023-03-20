/* eslint-disable */
import type { Options } from 'rehype-pretty-code';
import type { IThemeRegistration, Theme } from 'shiki';
import { BUNDLED_LANGUAGES, getHighlighter } from 'shiki';

import theme from './moonlight.json';

export const options: Options = {
  keepBackground: false,
  theme: theme as unknown as Theme,
  tokensMap: {
    fn: 'entity.name.function',
  },
  filterMetaString: (string) => string.replace(/filename="[^"]*"/, ''),
  getHighlighter: () =>
    getHighlighter({
      theme: theme as unknown as IThemeRegistration,
      langs: [...BUNDLED_LANGUAGES],
    }),
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node, id) {
    node.properties.className = ['word'];

    if (id) {
      const backgroundColor = {
        v: 'rgb(196 42 94 / 59%)',
        s: 'rgb(0 103 163 / 56%)',
        i: 'rgb(100 50 255 / 35%)',
      }[id];

      const color = {
        v: 'rgb(255 225 225 / 100%)',
        s: 'rgb(175 255 255 / 100%)',
        i: 'rgb(225 200 255 / 100%)',
      }[id];

      if (node.properties['data-rehype-pretty-code-wrapper']) {
        node.children.forEach((childNode: any) => {
          childNode.properties.style = '';
        });
      }

      node.properties.style = `background-color: ${backgroundColor}; color: ${color};`;
    }
  },
};
