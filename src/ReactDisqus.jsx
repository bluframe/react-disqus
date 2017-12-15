// @flow

import React from "react"

const style = {
  marginTop: "20px"
}

const ReactDisqus = () => (
  <div>
    <div
      id="disqus_thread"
      style={style}
    />

    <noscript>
      {`Please enable JavaScript to view the `}
      <a
        href="https://disqus.com/?ref_noscript"
        rel="nofollow"
      >
        {`comments powered by Disqus.`}
      </a>
    </noscript>
  </div>
)

export default ReactDisqus
