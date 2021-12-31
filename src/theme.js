import { swiss } from 'mdx-deck/themes'
import style from 'react-syntax-highlighter/styles/prism/ghcolors'
import java from 'react-syntax-highlighter/languages/prism/java'
import scala from 'react-syntax-highlighter/languages/prism/scala'

export default {
  // extend a default theme
  ...swiss,
  // custom font
  font: 'Roboto, sans-serif',
  // custom colors
  colors: {
    text: 'black',
    background: 'white',
    link: 'blue',
  },
  // syntax highlighting
  prism: {
    style,
    languages: {
      java,
      scala,
    },
  },
}