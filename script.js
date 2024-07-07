const Core = {
 get "size.part"() {
  return {
   "index.htm": "./core-address-size.number",
   "style.css": `./stat.css`
  }
 },
 get "tray.part"() {
  return {
   "index.parts": `./tray.parts`,
   "style.css": `data:,:host {
    position: relative;
    display: flex;
    flex-flow: row;
    gap: 3px;
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    user-select: none;
    padding: 3px 4px 3px;
    text-align: left;
    background: #c3c3c3;
    box-shadow: inset -1px -1px white, inset 1px 1px #7a7a7a;
   }`
  }
 },
 get "line.part"() {
  return {
   "style.css": `data:text/css,:host {
      display: flex;
      flex-flow: row;
      font-family: monospace;
      overflow: hidden;
      background: ${this["theme.color"]};
     }
     :host(:first-child) {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
     }
     :host(:last-child) {
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
     }
     :host(:first-child) > * {
      padding-top: 0.5ch;
     }
     :host(:last-child) > * {
      padding-bottom: 0.5ch;
     }`,
   "index.parts": `data:text/json,${JSON.stringify([
    { ".name": "data:,line-number" },
    { ".name": "data:,line-content" }
   ])}`,
   "line-content.part": `data:text/json,${JSON.stringify({
    "index.htm": `data:text/getter,return this["content.txt"]`,
    "style.css": `data:text/css,:host {
     white-space: pre;
     padding-left: 0.5ch;
    }`
   })}`,
   "line-number.part": `data:text/json,${JSON.stringify({
    "index.htm": `data:text/getter,return "" + (isNaN(this["index.number"]) ? NaN : this["index.number"])`,
    "style.css": `data:text/css,:host {
     flex: 0 0 5ch;
     text-align: right;
     padding-right: 0.5ch;
     background: ${this["shade-theme.fn"]()};
    }`
   })}`,
   ".examples": `data:text/json,${JSON.stringify({
    "bad-line-number": [{ ".name": "data:,line", "index.number": 'data:text/json,"bad line number"' }],
    "no-line-number": [{ ".name": "data:,line", "content.txt": "data:, // missing line number" }]
   })}`
  }
 },
 get "clock.part"() {
  return {
   "index.htm": `./time.txt`,
   ".examples": `data:text/json,${JSON.stringify({
    clock: [{ ".name": "data:,clock" }],
    tray: [{ ".name": "data:,tray" }],
    taskbar: [{ ".name": "data:,taskbar" }]
   })}`
  }
 },
 get "empty.part"() {
  return {
   "index.parts": "./empty.parts",
   "onresize.fn": `./capture-resize.fn`,
   "style.css": `./empty.css`
  }
 },
 get "blank.part"() {
  return {}
 },
 get "title.part"() {
  return {
   "index.htm": `./title.htm`,
   "style.css": "./title.css"
  }
 },
 get "search.part"() {
  return {
   "index.parts": "./search.parts",
   "style.css": `data:text/css,:host { flex: 1 1; display: flex }`,
   "search-input.part": `data:text/json,${JSON.stringify({
    "style.css": `data:text/css,:host { flex: 1 1; }`,
    "index.htm": `data:text/html,Search`
   })}`,
   "search-icon.part": `data:text/json,${JSON.stringify({
    "index.htm": `data:text/html,🔍`
   })}`
  }
 },
 get "header.part"() {
  return {
   "index.parts": "./header.parts",
   "style.css": `./header.css`,
   "title.css": `data:text/css,:host {
    font-size: 32px;
    font-weight: 500;
   }`
  }
 },
 get "status.part"() {
  return {
   "index.parts": `./status.parts`,
   "style.css": `./status.css`
  }
 },
 get "version.part"() {
  return {
   "index.htm": `./version.number`,
   "pill-icon-right.bool": `./true.bool`,
   "style.css": `./stat.css`
  }
 },
 get "shelf.part"() {
  return {
   "index.parts": `./shelf.parts`,
   "style.css": `./shelf.css`
  }
 },
 get "taskbar.part"() {
  return {
   "height.number": `data:,28px`,
   "index.parts": `./taskbar.parts`,
   "style.css": `data:,:host { position: relative; width: 100 %; box - sizing: border - box; height: 100 %; margin: 0; display: flex; flex - flow: row; gap: 3px; height: 100 %; padding: 4px 2px 2px; background: #c3c3c3; box - shadow: inset 0 1px #c3c3c3, inset 0 2px white; } `
  }
 },
 get "desktop.part"() {
  return {
   "style.css": `data:,:host{ background: #377f7f } `
  }
 },
 get "error404.part"() {
  return {
   "index.htm": `./error404.htm`,
   "style.css": `./error404.css`
  }
 },
 get "core-address.part"() {
  return {
   "index.htm": `./core-address.htm`,
   "style.css": `./core-address.css`
  }
 },
 get "universal.part"() {
  return {
   ".tag": "./name.tag",
   "onclick.fn": "data:text/getter,",
   "onresize.fn": "data:text/getter,",
   "onpointerdown.fn": "data:text/getter,",
   ".examples": "data:text/getter,",
   "style.css": "data:text/getter,",
   "index.htm": "data:text/getter,",
   "index.parts": "data:text/getter,"
  }
 },
 get "part-list.part"() {
  return {
   "style.css": `data:,:host {
     padding: 48px;
     display: flex;
     flex-flow: column;
     background: ${this["theme.color"]};
     overflow-y: auto;
     font-size: 17px;
     font-weight: 200;
    }`,
   "index.parts": `./part-list.parts`,
   "onscroll.fn": "./scroll-name-y.fn"
  }
 },
 get "empty-icon.part"() {
  return {
   "index.htm": `data:text/html,∅`
  }
 },
 get "start-menu.part"() {
  return {
   "style.css": `./start-menu.css`,
   "index.parts": `./start-menu.parts`
  }
 },
 get "core.parts.part"() {
  return {
   "index.parts": `./core.parts.parts`,
   "style.css": `./core.parts.css`,
   "part-list-scroll-y.number": "data:text/json,0",
   "example-viewer-scroll-y.number": "data:text/json,0",
   "part-explorer.bool": `./true.bool`,
   "selected-part.name": `data:,pilot-parts`,
   ".examples": `data:text/json,${JSON.stringify({
    "home-1024-768": [{ ".name": "data:,core.parts" }, { width: 1024, height: 768 }],
    "home-640-480": [{ ".name": "data:,core.parts" }, { width: 640, height: 480 }],
    "editing-line": [
     {
      ".name": "data:,core.parts",
      "part-explorer.bool": "./false.bool",
      "selected-part.name": "data:,line"
     },
     { width: 1024, height: 768 }
    ]
   })}`
  }
 },
 get "test-canvas.part"() {
  return {
   "style.css": `./test-canvas.css`
  }
 },
 get "pilot.parts.part"() {
  return {
   "style.css": `./os.css`,
   "index.parts": `./os.parts`
  }
 },
 get "flex-spacer.part"() {
  return {
   "style.css": `./flex-spacer.css`
  }
 },
 get "play-button.part"() {
  return {
   "onclick.fn": `./toggle-play.fn`,
   "index.htm": "data:,▶",
   "style.css": `./stat.css`
  }
 },
 get "reset-button.part"() {
  return {
   "index.htm": `data:text/html,⟳`,
   "style.css": `./unicode-button.css`,
   "onclick.fn": `./reset.fn`
  }
 },
 get "mini-browser.part"() {
  return {
   "index.parts": `./mini-browser.parts`,
   "style.css": `./mini-browser.css`
  }
 },
 get "start-button.part"() {
  return {
   "style.css": `./start-button.css`,
   "index.htm": `data:,<icon-></icon->Start`,
   "onpointerdown.fn": `https://pilot.parts/toggle-start-menu.fn`,
   "tabindex.number": `1`
  }
 },
 get "ejaugust.com.part"() {
  return {
   "index.parts": `./portfolio.parts`,
   "style.css": `./portfolio.css`,
   "onresize.fn": `./grid-snap.fn`,
   "selected-part.name": `data:,ejaugust.com`,
   "part-explorer.bool": `./false.bool`,
   "part-list-scroll-y.number": "data:text/json,0",
   "example-viewer-scroll-y.number": "data:text/json,0"
  }
 },
 get "part-explorer.part"() {
  return {
   "title.txt": "data:,Parts",
   "style.css": `data:,:host{
     display: flex;
     flex-flow: column;
     overflow-y: auto;
    }
    :host(:focus){
     box-shadow: inset 0 0 0 2px blue;
    }`,
   "index.parts": `data:text/json,${JSON.stringify([{ ".name": "data:,header" }, { ".name": "data:,part-list" }])}`,
   "tabindex.number": "data:text/json,1"
  }
 },
 get "part-list-item.part"() {
  return {
   "index.parts": `./part-list-item.parts`,
   "onclick.fn": `./select-part.fn`,
   "style.css": `./part-list-item.css`
  }
 },
 get "orenjinari.com.part"() {
  return {
   "index.parts": `./orenjinari.com.parts`,
   "style.css": `./orenjinari.com.css`,
   "portfolio-scroll-y.number": "data:text/json,0"
  }
 },
 get "example-viewer.part"() {
  return {
   "title.txt": "data:,Examples",
   "index.parts": `./example-viewer.parts`,
   "onscroll.fn": "./scroll-name-y.fn",
   "style.css": `./example-viewer.css`
  }
 },
 get "core-address-usage.part"() {
  return {
   "index.htm": "./core-address-usage.htm",
   "style.css": `./stat.css`
  }
 },
 get "part-explorer-button.part"() {
  return {
   "index.htm": `data:text/html,☰`,
   "style.css": `./unicode-button.css`,
   "onclick.fn": `./toggle-part-explorer.fn`
  }
 },

 get "set.fn"() {
  return metaPatch => {
   const patch = this["patch.part"],
    part = this[this[".name"] + ".part"],
    delta = {}

   for (const name in metaPatch) {
    if (metaPatch[name] === patch[name] || (!(name in patch) && metaPatch[name] === part[name])) continue
    if (metaPatch[name] !== part[name]) {
     if (metaPatch[name] === undefined) {
      delete patch[name]
      delta[name] = part[name]
     } else delta[name] = patch[name] = metaPatch[name]
    } else if (patch[name]) {
     delete patch[name]
     if (part[name]) delta[name] = part[name]
     else delete this[name]
    }
   }

   if (!Object.keys(delta).length) return

   Object.defineProperties(this, this["describe-part.fn"](delta))

   this["signal.fn"]()

   if (this === Core) {
    if (history._timeout) clearTimeout(history._timeout)

    history._timeout = setTimeout(() => history.replaceState({}, null, `https://dev.` + this["patch.uri"]), 120)
   }
  }
 },
 get "log.fn"() {
  return (...args) => console.info(this["prefix.txt"], ...args)
 },
 get "boot.fn"() {
  return () => {
   Object.setPrototypeOf(this, null)
   const nodes = new Map(),
    bootTime = Date.now(),
    name = location.host.slice(location.host.startsWith("dev.") ? 4 : 0),
    exists = name + ".part" in this,
    partname = (exists ? name : "error404") + ".part",
    part = this[partname],
    patch = this["url2part.fn"](location)

   Object.defineProperties(this, {
    "patch.part": {
     get() {
      return patch
     }
    },
    ".nodes": {
     get() {
      return nodes
     }
    },
    "boot-time.number": {
     get() {
      return bootTime
     }
    },
    ...this["describe-part.fn"](part),
    ...this["describe-part.fn"](patch)
   })

   if (this["server.bool"]) {
    onfetch = e => this["fetch.fn"](e.request.url, e)
    onactivate = onmessage = e => clients.claim()
    oninstall = e => {
     globalThis.skipWaiting()
     e.waitUntil(
      fetch(location.origin)
       .then(index => index.text())
       .then(text => {
        const bootstrap = text.replace(`<link rel="manifest">`, `<link rel="manifest" href="${this["manifest.uri"]}"/>`)
        Object.defineProperty(this, "bootstrap.htm", {
         get() {
          return bootstrap
         }
        })
        this["log.fn"]()
       })
     )
    }
   } else {
    Promise.all([
     (async () => {
      const registration = await navigator.serviceWorker.register(location.origin + "/script.js"),
       { waiting: w, installing: i, active: a } = registration
      if (!a)
       await new Promise(
        resolve => ((w ?? i).onstatechange = ({ target: t }) => (t.state === "activated" ? resolve(t) : 0))
       )
      return registration
     })(),
     new Promise(resolve => (onload = resolve))
    ]).then(([registration]) => {
     if (location.host.startsWith("dev.")) {
      document.onvisibilitychange = () => document.hidden || registration.update()
      window.onfocus = () => registration.update()
     }

     const manifest = document.querySelector('[rel="manifest"]'),
      original = !manifest.href,
      server = navigator.serviceWorker.controller,
      forceRefreshed = !server,
      bootstrap = document.documentElement.outerHTML.replace(
       `<link rel="manifest">`,
       `<link rel="manifest" href="${this["manifest.uri"]}"/>`
      )
     begin = () => {
      this["log.fn"]()
      if (original) manifest.href = this["manifest.uri"]
      this["ownNode.fn"](document.body)
      this["signal.fn"]()
     }

     let waiting

     navigator.serviceWorker.oncontrollerchange = () => {
      if (waiting) {
       waiting = false
       begin()
       return
      }

      location.reload()
     }

     Object.defineProperties(this, {
      "original.bool": {
       get() {
        return original
       }
      },
      "force-refresh.bool": {
       get() {
        return forceRefreshed
       }
      },
      "bootstrap.htm": {
       get() {
        return bootstrap
       }
      }
     })

     if (forceRefreshed) {
      waiting = true
      registration.active.postMessage(1)
     } else begin()
    })
   }
  }
 },
 get "fetch.fn"() {
  return (url, event) => {
   const { pathname } = new URL(url),
    patch = this["url2part.fn"](url)

   let object = this["branch.fn"](patch)

   if (pathname.includes("/", 1))
    throw new RangeError(`Fetch event does not support directories yet.\n\tRequest: ${url}`)

   event.respondWith(object["respond.fn"](pathname.slice(1)))

   /*
    const partnames = pathname.split("/")

    partnames.shift() // remove empty name before starting slash

    if (pathname.endsWith("/")) partnames.pop() // remove empty name after trailing slash

    for (const partname of partnames) object = object["branch.fn"]({ ".name": partname })

    event.respondWith(object[".response"])
   */
  }
 },
 get "reset.fn"() {
  return () => {
   location = location.origin
  }
 },
 get "signal.fn"() {
  return () => {
   if (!this[".node"]) return

   const { shadowRoot } = this[".node"]

   if (this["style.css"] !== undefined)
    (shadowRoot.adoptedStyleSheets[0] ??= new CSSStyleSheet()).replaceSync(this["style.css"])

   children: {
    if (this["index.htm"] === undefined) {
     const incomingParts = this["index.parts"] ?? []

     if (!(incomingParts && Array.isArray(incomingParts)))
      throw new Error(`Cannot use parts file of type ${typeof incomingParts}.\n${incomingParts}${this["trace.txt"]}`)

     const { children } = shadowRoot,
      max = 250

     let i = -1

     while (incomingParts.length) {
      i++

      if (i >= max) throw "∞ loop"

      const incomingPart = incomingParts.shift(),
       incomingURI = this["part2url.fn"](incomingPart),
       existingURI = children[i]?.object["patch.uri"]

      if (!incomingPart) throw new Error(`No name on node.\n\t[${this["index.parts"]}].${this["trace.txt"]}`)

      if (incomingURI === existingURI) continue

      const existingIndex = [...children].findIndex((n, o) => o > i && n.object["patch.uri"] === incomingURI)

      if (existingIndex !== -1) {
       shadowRoot.insertBefore(children[existingIndex], children[i])
       continue
      }

      const object = this["branch.fn"](incomingPart),
       node = object[".node"]

      console.log(`creating part ` + this["part2url.fn"](incomingPart))

      if (!node) throw new Error(`Create Node Error: this object doesn't have a node.${this["trace.txt"]}`)

      if (i !== -1 && i < children.length) shadowRoot.insertBefore(node, children[i])
      else shadowRoot.appendChild(node)

      node.callback?.()
     }

     while (children[i + 1]) children[i + 1].remove()
    } else if (shadowRoot.innerHTML != this["index.htm"]) shadowRoot.innerHTML = this["index.htm"]
   }

   this["forEach.fn"](object => object["signal.fn"]())
  }
 },
 get "branch.fn"() {
  return patch => {
   const nameHREF = patch[".name"]

   if (!nameHREF)
    throw new Error(`Can't branch an object without .name in patch.\n${JSON.stringify(patch)}${this["trace.txt"]}`)

   const object = Object.create(this, {
     "patch.part": {
      get() {
       return patch
      }
     }
    }),
    name = object["checkout-cell.fn"](nameHREF)

   Object.defineProperties(object, {
    ...object["describe-part.fn"](object["universal.part"]),
    ...object["describe-part.fn"](object[(name + ".part" in this ? name : "error404") + ".part"]),
    ...object["describe-part.fn"](patch)
   })

   return object
  }
 },
 get "forEach.fn"() {
  return callback => {
   const { shadowRoot } = this[".node"] ?? {}

   if (!shadowRoot) throw Error(`called subsignal on an object with no shadowRoot.${this["trace.txt"]}`)

   let index = 0

   for (const node of shadowRoot.children) if (node.object) callback(node.object, index++, "node")
  }
 },
 get "ownNode.fn"() {
  return incomingNode => {
   if (Core[".nodes"].has(this)) {
    if (incomingNode) throw new Error(`Own Node Error: this object already owns a node.${this["trace.txt"]}"`)

    return Core[".nodes"].get(this)
   }

   if (xxx++ > 500) throw new Error("Max compute." + this["trace.txt"])

   const node = incomingNode ?? document.createElement(this[".tag"])

   Core[".nodes"].set(this, node)

   node.object = this
   node.onclick = this["onclick.fn"]
   node.onscroll = this["onscroll.fn"]
   node.onpointerdown = this["onpointerdown.fn"]

   if (this["tabindex.number"]) node.tabIndex = this["tabindex.number"]

   if (this["onresize.fn"] || this["onscroll.fn"]) {
    let timeout,
     scroll = !!this["onscroll.fn"]
    new ResizeObserver(e => {
     if (scroll) {
      scroll = false
      node.scrollTo(this[this[".name"] + "-scroll-x.number"] ?? 0, this[this[".name"] + "-scroll-y.number"] ?? 0)
     }

     if (timeout) clearTimeout(timeout)

     timeout = setTimeout(() => {
      this["onresize.fn"]?.(e[0])
     }, 75)
    }).observe(node)
   }
   try {
    node.attachShadow({ mode: "open" })
   } catch {
    throw new Error(`Error: can't attach shadow to ${this[".tag"]}.${this["trace.txt"]}`)
   }
   return node
  }
 },
 get "forChain.fn"() {
  return callback => {
   let object = this,
    index = 0

   while (object) {
    callback(object, index++)
    object = Object.getPrototypeOf(object)
   }
  }
 },
 get "grid-snap.fn"() {
  return entry => {
   const {
     borderBoxSize: [{ blockSize: height, inlineSize: width }]
    } = entry,
    tileSize = 14,
    trueTilesWide = width / tileSize,
    trueTilesHigh = height / tileSize,
    roundedTilesWide = Math.round(trueTilesWide),
    roundedTilesHigh = Math.round(trueTilesHigh),
    xFactor = trueTilesWide / roundedTilesWide,
    yFactor = trueTilesHigh / roundedTilesHigh,
    tileWidth = xFactor * tileSize,
    tileHeight = yFactor * tileSize

   Object.assign(Core, {
    "tile-width.number": tileWidth,
    "tile-height.number": tileHeight
   })

   Core["signal.fn"]()
  }
 },
 get "url2part.fn"() {
  return url => {
   url = new URL(url)
   return Object.fromEntries([
    ...(url.searchParams?.entries() ?? []),
    [".name", `data:,${url.host.slice(url.host.startsWith("dev.") ? 4 : 0)}`]
   ])
  }
 },
 get "part2url.fn"() {
  return part => {
   let name

   if (typeof part === "string") {
    const inputname = part
    part = this[inputname + ".part"]
    if (!part) throw new RangeError("Missing part." + this["trace.txt"])
    name = ".name" in part ? this["checkout-cell.fn"](part[".name"]) : inputname
   } else {
    if (!(".name" in part))
     throw new Error(`Can't generate url of a part without .name in it.\n${JSON.stringify(patch)}${this["trace.txt"]}`)
    name = this["checkout-cell.fn"](part[".name"])
   }

   let search = []

   for (const key in part) {
    if (key === ".name") continue
    search.push(key + (part[key] ? "=" + part[key] : ""))
   }

   return name + (search.length ? "?" + search.join("&") : "")
  }
 },
 get "reduceChain.fn"() {
  return (callback, value) => {
   this["forChain.fn"]((object, index) => {
    value = callback(value, object, index)
    object = Object.getPrototypeOf(object)
   })

   return value
  }
 },
 get "shade-theme.fn"() {
  return (addend = 0.1) =>
   "#" +
   this["theme.color"]
    .match(/[^#]{2}/g)
    .map(s => Math.trunc((1 - (1 - parseInt(s, 16) / 255) * (1 - addend)) * 255).toString(16))
    .join("")
 },
 get "select-part.fn"() {
  return () => {
   Core["set.fn"]({
    "selected-part.name": `data:,${this["selected-part.name"]}`,
    "part-explorer.bool": `./false.bool`
   })
  }
 },
 get "literal-cell.fn"() {
  return href => {
   const commaIndex = href.indexOf(","),
    datum = href.slice(commaIndex + 1),
    header = href.slice(5, commaIndex).split(";"),
    type = header.shift() || "text/plain",
    body = type === "text/json" ? JSON.parse(datum) : type === "text/getter" ? new Function(datum).apply(this) : datum

   return body
  }
 },
 get "checkout-cell.fn"() {
  return href => {
   const cellType = href.startsWith("data:") ? "literal" : href.startsWith("https://") ? "absolute" : "relative"
   return this[cellType + "-cell.fn"](href)
  }
 },
 get "absolute-cell.fn"() {
  return href => {
   const subpaths = href.slice(8).split("/"),
    key = subpaths.pop()

   if (!key)
    throw new RangeError(
     `Error: absolute cell reference must include a file name. Get reference to entire object not yet supported.\n (adding ${href})${this["trace.txt"]}`
    )

   let object = Core

   for (const subpath of subpaths) object = object["branch.fn"]({ ".name": `data:,${subpath}` })

   return object[key]
  }
 },
 get "relative-cell.fn"() {
  return href => {
   let levels = 1,
    subname = href

   if (subname.startsWith("./")) {
    subname = subname.slice(2)
    levels = 0
   } else
    while (subname.startsWith("../")) {
     subname = subname.slice(3)
     levels++
    }

   let object = this

   for (let i = 0; i < levels; i++) {
    object = Object.getPrototypeOf(object)
    if (object === null)
     throw new RangeError(`Error: relative reference to object which is beyond Core ${href}.${this["trace.txt"]}`)
   }

   let result
   result = object[subname]

   return result
  }
 },
 get "scroll-name-x.fn"() {
  return () => {
   Core["set.fn"]({
    [`${this[".name"]}-scroll-x.number`]: `data:text/json,${this["scroll-out-x.number"]}`
   })
  }
 },
 get "scroll-name-y.fn"() {
  return () => {
   Core["set.fn"]({
    [`${this[".name"]}-scroll-y.number`]: `data:text/json,${this["scroll-out-y.number"]}`
   })
  }
 },
 get "describe-part.fn"() {
  return part => {
   const description = {},
    self = this

   for (const name in part) {
    const href = part[name] ?? name

    description[name] = {
     get() {
      return self["checkout-cell.fn"](href)
     },
     configurable: true,
     enumerable: true
    }
   }

   return description
  }
 },
 get "capture-resize.fn"() {
  return entry => {
   const {
    borderBoxSize: [{ blockSize, inlineSize }]
   } = entry

   Object.defineProperties(this, {
    "resize-width.number": {
     get() {
      return inlineSize
     },
     configurable: true
    },
    "resize-height.number": {
     get() {
      return blockSize
     },
     configurable: true
    }
   })

   this["signal.fn"]()
  }
 },
 get "toggle-start-menu.fn"() {
  return () =>
   Core["set.fn"]({
    "start-menu.bool": "./" + !Core["start-menu.bool"] + ".bool"
   })
 },
 get "toggle-part-explorer.fn"() {
  return () => {
   Core["set.fn"]({
    "part-explorer.bool": "./" + !Core["part-explorer.bool"] + ".bool"
   })
  }
 },

 get "os.css"() {
  return `:host { position: fixed; top: 0; left: 0; width: 100%; box-sizing: border-box; height: 100%; margin: 0; display: grid; grid-template-rows: 1fr ${
   this["branch.fn"]({ ".name": "data:,taskbar" })["height.number"]
  }; font: 11px / 16px sans-serif; }`
 },
 get "stat.css"() {
  return `:host {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    ${this["pill-icon-right.bool"] ? "text-align: right; " : ""}
    display: inline-block;
    line-height: 24px;
    padding: 3px;
    background: ${this["theme.color"]};
    padding-${this["pill-icon-right.bool"] ? "left" : "right"}: 12px;
   }`
 },
 get "title.css"() {
  return `:host {
    margin: 0;
    display: block;
    font-weight: 600;
    padding: 4px;
    text-transform: uppercase;
    background: ${this["theme.color"]};
   }`
 },
 get "empty.css"() {
  return `:host {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: ${this["resize-width.number"]}px;
    line-height: ${this["resize-height.number"]}px;
    text-align: center;
    background: ${this["theme.color"]};
    opacity: 25%;
   }`
 },
 get "status.css"() {
  return `:host {
    display: flex;
    flex-flow: row;
    background: ${this["shade-theme.fn"](0.2)};
   }`
 },
 get "header.css"() {
  return `:host {
    display: flex;
    flex-flow: row;
    padding: 32px;
    box-sizing: border-box;
    background: ${this["shade-theme.fn"]()};
   }`
 },
 get "shelf.css"() {
  return `:host {
    display: flex;
    flex-flow: row;
    gap: 4px;
    padding: 4px;
    background: ${this["shade-theme.fn"]()};
   }`
 },
 get "error404.css"() {
  return `:host {
    background: tomato;
    box-sizing: border-box;
    border: 0.5px dashed #821;
   }`
 },
 get "portfolio.css"() {
  return `:host {
    --w: ${this["tile-width.number"] ?? 14}px;
    --h: ${this["tile-height.number"] ?? 14}px;
    box-sizing: border-box;
    gap: var(--h);
    padding: calc(var(--w) * 4.5) calc(var(--h) * 4.5);
    display: flex;
    flex-flow: row;
    align-items: stretch;
    background: url(data:image/png;base64,${this["blue-grid.png"]}), #999AAB;
    background-size: calc(var(--w) * 10) calc(var(--h) * 10);
    transition: background-size 0.2s;
    transform: scale(50%)
   }
   :host::before {
    box-shadow: 2px 4px 10px #0005;
    border-radius: 14px;
    content: "";
    background: url(data:image/png;base64,${this["blue-grid.png"]}), white;
    background-size: inherit;
    position: absolute;
    left: calc(1.5 * var(--w));
    right: calc(1.5 * var(--w));
    top: calc(1.5 * var(--h));
    bottom: calc(1.5 * var(--h));
   }
   core-parts,
   pilot-parts,
   orenjinari-com {
    position: relative;
    width: calc(var(--w) * 40);
    height: calc(var(--h) * 30);
    border-radius: 7px;
    overflow: hidden;
   }`
 },
 get "core.parts.css"() {
  return `:host {
    --system-ui: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font: 13px var(--system-ui);
    margin: 0;
    padding: 0;
    display: grid;
    color: white;
    grid-template:
     ${this["part-explorer.bool"] ? "" : `"shelf" ${this["shelf-height.number"]}px`}
     "main" 1fr
     ${this["part-explorer.bool"] ? "" : `"status" 32px`}  / 1fr;
    }
    ${this["part-explorer.bool"] ? "" : "shelf- { grid-area: shelf }"}
    status- { grid-area: status }
    example-viewer, part-explorer { grid-area: main }`
 },
 get "start-menu.css"() {
  return `:host {
       position: relative;
       min-width: 164px;
       display: flex;
       flex-flow: column;
       position: absolute;
       left: 2px;
       bottom: calc(${this["branch.fn"]({ ".name": "data:,taskbar" })["height.number"]} - 4px);
       user-select: none;
       line-height: 18px;
       text-align: left;
       background: #c3c3c3;
       box-sizing: border-box;
       padding: 3px 3px 3px 24px;
       text-align: left;
     background: #c3c3c3;
     box-shadow: inset -1px -1px black, inset 1px 1px white, inset -2px -2px #7a7a7a, inset 2px 2px #dbdbdb
    }
    :host::after {
     pointer-events: none;
     display: block;
     content: "Pilot";
     writing-mode: tb-rl;
     transform: rotate(-180deg);
     line-height: 21px;
     font-size: 18px;
     font-weight: 900;
     color: #c3c3c3;
     padding-top: 4px;
     box-sizing: border-box;
     position: absolute;
     left: 3px;
     top: 3px;
     bottom: 3px;
     background: #7f7f7f;
     width: 21px
    }`
 },
 get "flex-spacer.css"() {
  return `:host { flex: 1 1 }`
 },
 get "test-canvas.css"() {
  const { width, height } = this["size.json"] ?? { width: 640, height: 480 },
   standardHeight = Math.min(256, height),
   aspect = width / height,
   scale = standardHeight / height

  console.log("compute size here", {
   standardHeight,
   width,
   height,
   aspect,
   scale
  })

  return `:host {
     box-sizing: border-box;
     background: ${this["shade-theme.fn"](0.6)};
     position: absolute;
     width: ${width}px;
     height: ${height}px;
     transform-origin: top left;
     top: 23px;
     transform: scale(${scale});
    }`
 },
 get "example-viewer.css"() {
  return `:host {
   display: flex;
   flex-flow: row wrap;
   align-content: start;
   gap: 16px;
   padding: 16px;
   padding-top: 39px;
   overflow: hidden;
   position: relative;
   overflow-y: auto;
   align-items: start;
   background: ${this["shade-theme.fn"]()};
  }
  title- {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
  }`
 },
 get "start-button.css"() {
  return `:host { flex: 0 0; position: relative; width: 100%; box-sizing: border-box; height: 100%; display: flex; flex-flow: row; gap: 3px; border: none; font: bold 11px / 16px sans-serif; box-sizing: border-box; padding: ${
   this["start-menu.bool"] ? 4 : 3
  }px 4px 2px; text-align: left; background: #c3c3c3; box-shadow: ${
   this["start-menu.bool"]
    ? `  inset -1px -1px white,  inset 1px 1px black,  inset -2px -2px #dbdbdb,  inset 2px 2px #7a7a7a`
    : `  inset -1px -1px black,  inset 1px 1px white,  inset -2px -2px #7a7a7a,  inset 2px 2px #dbdbdb`
  };}:host(:focus)::after { border: 1px dotted black; content: ""; position: absolute; margin: 3px; left: 0; right: 0; top: 0; bottom: 0; pointer-events: none;}icon- { width: 16px; height: 16px; background: url(data:image/png;base64,${
   this["icon.png"]
  }); background-size: 16px;}`
 },
 get "mini-browser.css"() {
  const { width = 300, height = 150 } = this["size.json"] ?? {},
   standardHeight = Math.min(256, height),
   aspect = width / height,
   scaledWidth = standardHeight * aspect

  return `:host {
    border-radius: 8px;
    display: flex;
    flex-flow: column;
    position: relative;
    overflow: clip;
    box-shadow:
     inset 0 0 0 1px ${this["theme.color"]},
     2px 4px 9px -2px ${this["theme.color"]};
    flex: 0 0 ${scaledWidth}px;
    height: ${standardHeight}px;
   }`
 },
 get "core-address.css"() {
  return this["stat.css"] + this["flex-spacer.css"]
 },
 get "orenjinari.com.css"() {
  return `:host {
    display: grid;
    grid-template:
     "sp1 sp1 sp1 sp1 sp1" 1fr
     "sp2 art art art sp3" max(min(40%, 240px), 128px)
     "sp2 re1 re2 re3 sp3" max(min(20%, 96px), 36px)
     "sp2 sp4 sp4 sp4 sp3" 2fr / 1fr max(min(25%, 240px), 64px)  max(min(25%, 240px), 64px)  max(min(25%, 240px), 64px) 1fr;
    background: #dadbca;
    width: 100%;
    height: 100%;
    pad: 24px;
   }
   nari-artwork {
    grid-area: art;
   }
   nari-recent:nth-of-type(1) {
    grid-area: re1;
   }
   nari-recent:nth-of-type(2) {
    grid-area: re2;
   }
   nari-recent:nth-of-type(3) {
    grid-area: re3;
   }`
 },
 get "unicode-button.css"() {
  return `:host {
   cursor: pointer;
   border-radius: 4px;
   line-height: 32px;
   width: 32px;
   font-size: 32px;
   aspect-ratio: 1 / 1;
   height: 32px;
   text-align: center;
  }
  :host(:hover) {
   background: ${this["shade-theme.fn"](0.2)};
  }`
 },
 get "part-list-item.css"() {
  return `:host {
     cursor: pointer;
     text-overflow: ellipsis;
     white-space: nowrap;
     overflow: hidden;
     line-height: 24px;
     box-sizing: border-box;
     padding: 12px;
     border-radius: 8px;
     flex: 0 0 48px;
    }
    :host${Core["selected-part.name"] === this["selected-part.name"] ? "" : "(:hover)"} {
     background: ${this["shade-theme.fn"](0.3)};
    }`
 },

 get "os.parts"() {
  return [
   { ".name": "data:,desktop" },
   { ".name": "data:,taskbar" },
   ...(this["windows.parts"] ?? []),
   ...(this["start-menu.bool"] ? [{ ".name": `data:,start-menu` }] : []),
   ...(this["context-menu.bool"] ? [{ ".name": `data:,context-menu` }] : [])
  ]
 },
 get "tray.parts"() {
  return [{ ".name": "data:,factory-reset" }, { ".name": "data:,fullscreen" }, { ".name": "data:,clock" }]
 },
 get "empty.parts"() {
  return [{ ".name": "data:,empty-icon" }]
 },
 get "status.parts"() {
  return [{ ".name": "data:,core-address-usage" }, { ".name": "data:,core-address" }, { ".name": "data:,version" }]
 },
 get "search.parts"() {
  return [{ ".name": "data:,search-icon" }, { ".name": "data:,search-input" }]
 },
 get "header.parts"() {
  return [
   { ".name": "data:,title" },
   { ".name": "data:,search" },
   { ".name": "data:,filters" },
   { ".name": "data:,add" }
  ]
 },
 get "taskbar.parts"() {
  return [
   { ".name": "data:,start-button" },
   ...(this["apps.parts"] ?? []),
   { ".name": "data:,flex-spacer" },
   { ".name": "data:,tray" }
  ]
 },
 get "shelf.parts"() {
  return [
   { ".name": "data:,part-explorer-button" },
   { ".name": "data:,flex-spacer" },
   { ".name": "data:,reset-button" }
  ]
 },
 get "portfolio.parts"() {
  return [
   {
    ".name": "core.parts",
    "selected-part.name": undefined,
    "part-explorer.bool": undefined,
    "part-list-scroll-y.number": undefined,
    "example-viewer-scroll-y.number": undefined
   },
   { ".name": "data:text/name,pilot.parts" },
   { ".name": "data:text/name,orenjinari.com" }
  ]
 },
 get "part-list.parts"() {
  const makeItem = name => ({ ".name": "data:,part-list-item", "selected-part.name": `data:,${name}` }),
   propertyEntries = Object.entries(Core[".properties"]),
   reducer = (parts, [name]) => {
    if (name.endsWith(".part")) parts.push(makeItem(name.slice(0, -5)))

    return parts
   }
  return propertyEntries.reduce(reducer, [])
 },
 get "start-menu.parts"() {
  return [
   { ".name": "data:text/name,locate" },
   { ".name": "data:text/name,relate" },
   { ".name": "data:text/name,debate" },
   { ".name": "data:text/name,horizontal-line-1" },
   { ".name": "data:text/name,welcome" },
   { ".name": "data:text/name,horizontal-line-2" },
   { ".name": "data:text/name,save-computer" },
   { ".name": "data:text/name,restart-computer" },
   { ".name": "data:text/name,restart-server" }
  ]
 },
 get "core.parts.parts"() {
  return [
   ...(this["part-explorer.bool"] ? [] : [{ ".name": "data:,shelf" }]),
   { ".name": `data:,${this["part-explorer.bool"] ? "part-explorer" : "example-viewer"}` },
   ...(this["part-explorer.bool"] ? [] : [{ ".name": "data:,status" }])
  ]
 },
 get "mini-browser.parts"() {
  return [{ ".name": "data:,title" }, { ".name": "data:,test-canvas", "index.parts": "input.parts" }]
 },
 get "part-list-item.parts"() {
  console.log(this["selected-part.name"], this[this["selected-part.name"] + ".part"])
  return [
   { ".name": `data:,blank`, "index.htm": this["selected-part.name"], ".tag": "data:,item-name" },
   {
    ".name": `data:,blank`,
    "index.htm": `data:text/html,${this["part2url.fn"](this["selected-part.name"])}`
   }
  ]
 },
 get "example-viewer.parts"() {
  const selectedPart = { ".name": `data:,${this["selected-part.name"]}` },
   selectedObject = Core["branch.fn"](selectedPart)

  return [
   { ".name": "data:,title" },
   {
    ".name": "data:,mini-browser",
    "title.txt": "data:,Default",
    "input.parts": `data:text/json,${JSON.stringify([selectedPart])}`
   },
   ...Object.entries(selectedObject[".examples"] ?? {}).map(([name, [part, { width = 300, height = 150 } = {}]]) => ({
    ".name": "data:,mini-browser",
    "title.txt": `data:,${name}`,
    "size.json": `data:text/json,${JSON.stringify({ width, height })}`,
    "input.parts": `data:text/json,${JSON.stringify([part])}`
   }))
  ]
 },
 get "orenjinari.com.parts"() {
  return [
   { ".name": "data:,nari-artwork" },
   { ".name": "data:,nari-recent", "index.number": "data:text/json,0" },
   { ".name": "data:,nari-recent", "index.number": "data:text/json,1" },
   { ".name": "data:,nari-recent", "index.number": "data:text/json,2" }
  ]
 },

 get "version.number"() {
  return 58 / 1000
 },
 get "scroll-out-x.number"() {
  return this[".node"].scrollLeft
 },
 get "scroll-out-y.number"() {
  return this[".node"].scrollTop
 },
 get "shelf-height.number"() {
  return 42
 },
 get "branch-length.number"() {
  return this["reduceChain.fn"](k => k++, 0)
 },
 get "core-address-size.number"() {
  return Core["patch.uri"].length
 },
 get "core-address-usage.number"() {
  return ("https://" + Core["patch.uri"]).length / 20.48
 },

 get "title.htm"() {
  return `${this["title.txt"] ?? "Untitled"}`
 },
 get "error404.htm"() {
  return `404`
 },
 get "core-address.html"() {
  return Core["patch.uri"]
 },
 get "core-address-usage.htm"() {
  return Math.trunc(this["core-address-usage.number"]) + " %"
 },

 get "time.txt"() {
  setTimeout(() => this["signal.fn"](), 60005 - (Date.now() % 60000))
  return new Date().toLocaleString("en-US", {
   hour: "numeric",
   minute: "numeric",
   hourCycle: "h12"
  })
 },
 get "trace.txt"() {
  return this["reduceChain.fn"]((t, r) => t + `\n\tat ${r["patch.uri"]}`, "")
 },
 get "prefix.txt"() {
  return (
   (Core["force-refresh.bool"] ? "FORCED-" : Core["original.bool"] ? "HTTPS-" : "") +
   (Core["server.bool"] ? "SERVER-" : "CLIENT-") +
   Core["boot-time.number"]
  )
 },

 get "true.bool"() {
  return true
 },
 get "false.bool"() {
  return false
 },
 get "server.bool"() {
  return typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope
 },

 get "patch.uri"() {
  return this["part2url.fn"]("patch")
 },
 get "manifest.uri"() {
  return `https://${location.host}/manifest.json`
 },

 get "icon.png"() {
  return "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"
 },
 get "blue-grid.png"() {
  return "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"
 },

 get ".properties"() {
  return Object.getOwnPropertyDescriptors(this)
 },
 get "deep.properties"() {
  return this["reduceChain.fn"]((allproperties, object) => {
   const objectProperties = object[".properties"]

   for (const filename in objectProperties)
    if (!(filename in allproperties)) allproperties[filename] = objectProperties[filename]

   return allproperties
  }, {})
 },

 get ".extension"() {
  return this[".name"].split(".").at(-1)
 },

 get ".node"() {
  return this["ownNode.fn"]()
 },

 get "toTag.fn"() {
  return name => {
   name = name.replaceAll(/[^a-zA-Z0-9]+/g, "-")

   if (!name.includes("-")) name += "-"

   return name
  }
 },

 get "name.tag"() {
  return this["toTag.fn"](this[".name"])
 },

 get "script.js"() {
  return `const Core = {${Object.values(Core[".properties"]).map(
   ({ get }) => `\n ${get}`
  )}\n}\nlet xxx = 1\nCore["boot.fn"]()\n`
 },

 get "respond.fn"() {
  return filename => {
   const encoder = new TextEncoder()
   let body, type

   if (filename in this) {
    const extension = this[".extension"],
     string = this[filename]
    body = encoder.encode(string)
    type =
     {
      png: "image/png",
      js: "text/javascript; charset=UTF-8",
      css: "text/css; charset=UTF-8",
      htm: "text/html; charset=UTF-8",
      html: "text/html; charset=UTF-8"
     }[extension] ?? "text/plain; charset=UTF-8"
    if (extension === "png") {
     const B = atob(string),
      k = B.length,
      A = new ArrayBuffer(k),
      I = new Uint8Array(A)
     for (var i = 0; i < k; i++) I[i] = B.charCodeAt(i)
     body = new Blob([I], { type })
    }
   } else {
    body = encoder.encode(Core["bootstrap.htm"])
    type = "text/html; charset=UTF-8"
   }
   return new Response(body, {
    headers: {
     "content-type": type,
     "expires": "Sun, 20 Jul 1969 20:17:00 UTC",
     "server": "kireji"
    }
   })
  }
 },

 get "theme.color"() {
  return `#333445`
 },

 get "manifest.json"() {
  return JSON.stringify({
   name: Core[".name"].split(".")[0],
   short_name: Core[".name"],
   start_url: ".",
   display: "standalone",
   background_color: this["theme.color"],
   theme_color: this["theme.color"],
   description: "An expirimental app.",
   icons: [
    {
     src: "icon.png",
     sizes: "144x144",
     type: "image/png"
    }
   ]
  })
 }
}
let xxx = 1
Core["boot.fn"]()
