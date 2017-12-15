import { disqusReset } from "./"
import { spy } from "sinon"

const FIRST = 0

describe("ReactDisqus", () => {
  describe("disqusReset", () => {
    it("calls DISQUS reset with expected properties", () => {
      global.DISQUS = {
        reset: spy()
      }
      const config = {
        identifier: "testidentifier",
        title: "Page Title",
        url: ""
      }

      disqusReset(config)

      expect(global.DISQUS.reset.calledOnce).toBe(true)
      expect(JSON.stringify(global.DISQUS.reset.args[FIRST][FIRST])).toEqual(
        JSON.stringify({
          config() {
            this.page.identifier = config.identifier
            this.page.title = config.title
            this.page.url = config.url
          },
          reload: true
        })
      )
    })
  })
})
