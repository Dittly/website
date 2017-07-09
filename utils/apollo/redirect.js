import { Router } from '../routes'

export default (context, targetRoute) => {
  if (context.res) {
    // server
    // 303: "See other"
    context.res.writeHead(303, { Location: targetRoute.pattern })
    context.res.end()
  } else {
    // In the browser, we just pretend like this never even happened ;)
    Router.replaceRoute(targetRoute.name)
  }
}
