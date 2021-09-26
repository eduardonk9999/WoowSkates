import './Layout.scss'

import h from 'hyperscript'
import helpers from 'hyperscript-helpers'



const {div, header, main, aside } = helpers(h)

const PageLayout = div({className: 'wow-page-layout'}, [
  header({className: 'wow-header'}),
  aside({className: 'wow-sbleft'}),
  main({className: 'wow-main'}),
  aside({className: 'wow-sbright'})

])


export default PageLayout