// @flow

import ReactDisqus from "./ReactDisqus"
import withDisqusPrepare from "./HigherOrder/withDisqusPrepare"

export type Props = {
  identifier: string,
  title: string,
  url: string
}

export default withDisqusPrepare(ReactDisqus)
