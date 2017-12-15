// @flow

import { lifecycle } from "recompose"

declare var DISQUS: any

type ResetConfig = {
  identifier: string,
  title: string,
  url: string
}

export const disqusReset = ({ identifier, title, url }: ResetConfig) => {
  DISQUS.reset({
    config() {
      this.page.identifier = identifier
      this.page.title = title
      this.page.url = url
    },
    reload: true
  })
}

const disqusInitialize = ({ identifier, shortname, title, url }) => {
  /* eslint-disable camelcase */
  /* * * CONFIGURATION VARIABLES * * */
  window.disqus_shortname = shortname
  window.disqus_identifier = identifier
  window.disqus_title = title
  window.disqus_url = url
  /* eslint-enable camelcase */

  /* eslint-disable */
  /* * * DON'T EDIT BELOW THIS LINE * * */
  ;(function() {
    const dsq = document.createElement("script")
    dsq.type = "text/javascript"
    dsq.async = true
    dsq.src = `//${window.disqus_shortname}.disqus.com/embed.js`
    ;(
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(dsq)
  })()
  /* eslint-enable */
}

const componentDidMount = function componentDidMount() {
  // eslint-disable-next-line no-invalid-this
  const { identifier, shortname, title, url } = this.props

  if (window.DISQUS) {
    disqusReset({ identifier, title, url })
    return
  }

  disqusInitialize({ identifier, shortname, title, url })
}

export default lifecycle({ componentDidMount })
