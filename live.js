const
 protocolumns = {

  "default.columns": {
   // Cell values which shouldn't be inherited along the prototype chain.
   get() {
    return ({
     // .layout determines which rows to use as css stylesheets when rendering the current row as an element
     ".layout": { value: "" },
     // .children determines which rows to use as child nodes when rendering the current row as an element
     ".children": { value: "" },
     // The inner html, if set, overrides .children and just sets the inner HTML of the shadow to the given string
     "inner.html": { value: null },
     // The layout css determines what the current row's css is if the row is used as a css stylesheet
     "layout.css": { value: "" },
     // The view node is the node which gets it's render data from this row
     "view.node": { value: null },
     // The view tag is the html tag name to be used when this row is used as a child node
     "view.tag": { value: "tag-" },
     // This is the list of rows which directly inherit from this row
     ".rows": { value: {} },
     // This is the stylesheet object generated by this row
     "view.stylesheet": { value: null }
    })
   }
  },

  "parent.row": { get() { return Object.getPrototypeOf(this) } },

  // Numerical values
  ".version": { value: 45 / 1000 },
  "next.version": { get() { return Math.trunc(this[".version"] * 1000 + 1) / 1000 } },

  // Booleans
  "debug.bool": { value: false },
  "true.bool": { value: true },
  "false.bool": { value: false },

  // URIs
  "name.uri": { value: "https://core.parts" },
  "path.uri": { get() { return (this["parent.row"]?.["path.uri"] ?? "") + this["name.uri"] + "/" } },

  /* Layouts
      Layouts are space-separated lists of row names which are to be treated as stylesheets. */
  "theme.layout": { value: "main-layout" },
  "sidebar.layout": { value: "sidebar" },
  "addressbar.layout": { value: "addressbar-layout" },
  "header.layout": { value: "header-layout" },
  "flex-spacer.layout": { value: "flex-spacer-layout" },

  /* Children
      Children is a space-separated list of row names which all are to be treated as child nodes. */
  "editor.children": { get() { return `${this["sidebar-open.bool"] ? 'sidebar ' : ''}header article` } },
  "sidebar.children": { get() { return `side-menu inspector` } },
  "inspector.children": { get() { return `header menu` } },
  "header.children": { value: "address flex-spacer version" },
  "zero.children": { value: "" },
  "menu-buttons.children": { value: "button button button button button" },

  /* Commits
   A commit is a string representation of the set of differences between a row and it's parent row */
  "grey2.commit": { value: "grey.color=grey2.color" },
  "grey1.commit": { value: "grey.color=data:text/color,#344555" },
  "dev.core.parts.commit": { value: "background.color=grey.color&.children=editor.children&.layout=theme.layout&color.html=./background.color" },
  "version.commit": { value: "inner.html=./.version&view.tag=./name.tag" },
  "address.commit": { value: "inner.html=path.uri&view.tag=data:text/tag,addressbar-&.layout=addressbar.layout" },
  "sidebar.commit": { value: ".children=sidebar.children&view.tag=./name.tag&.layout=sidebar.layout&layout.css=sidebar.css" },
  "article.commit": { value: "inner.html=color.html&view.tag=./native.tag" },
  "header.commit": { value: ".children=header.children&view.tag=./native.tag&.layout=header.layout" },
  "grey-background.commit": { value: "background.color=grey.color&layout.css=background.css" },
  "inspector.commit": { value: "header.commit=inspector-header.commit&.children=zero.children&view.tag=./name.tag" },
  "inspector-header.commit": { value: "inner.html=data:text/html,Some panel" },
  "side-menu.commit": { value: ".children=menu-buttons.children&view.tag=./name.tag" },
  "bottom-menu.commit": { value: "inner.html=data:text/html,bottom&view.tag=data:text/tag,bottom-menu" },
  "main-layout.commit": { value: "layout.css=main-layout.css" },
  "open-sidebar.commit": { value: "sidebar-open.bool=true.bool" },
  "open-inspector.commit": { value: "inspector-open.bool=true.bool" },
  "lighten-background.commit": { value: "background.color=light-background.color" },
  "addressbar-layout.commit": { value: 'layout.css=addressbar.css' },
  "header-layout.commit": { value: 'layout.css=header.css' },
  "flex-spacer.commit": { value: '.layout=flex-spacer.layout&view.tag=./name.tag' },
  "flex-spacer-layout.commit": { value: 'layout.css=flex-spacer.css' },
  "next-version.commit": { value: '.version=https://dev.core.parts/next.version' },
  "button.commit": { value: "" },

  // CSS color tokens
  "grey2.color": { value: "#444444" },
  "grey.color": { value: "#333445" },
  "light-background.color": { get() { return '#' + this["background.color"].match(/[^#]{2}/g).map(s => Math.trunc((1 - (1 - parseInt(s, 16) / 255) * 0.5) * 255).toString(16)).join('') } },
  "background.color": { value: "tomato" },

  // CSS
  "background.css": { get() { return `:host { color: white; padding: 12px; background: ${this["background.color"]} }` } },
  "addressbar.css": { get() { return `:host::before { content: 'ⓘ'; padding: 5px; border-radius: 50%; background: ${this["light-background.color"]}; margin-right: 8px; } :host { min-width: 50%; margin: 7px; display: inline-block; line-height: 24px; padding: 5px; color: white; border-radius: 16px; background: ${this["background.color"]}}` } },
  "header.css": { get() { return `:host { display: flex; flex-flow: row nowrap; background: ${this["beget.fn"]("lighten-background")["light-background.color"]}}` } },
  "flex-spacer.css": { value: `:host { flex: 1 1 }` },
  "sidebar.css": {
   get() {
    const inspectorOpen = this["inspector-open.bool"];
    return `
    :host {
     color: ${this["background.color"]};
     background: ${this["light-background.color"]};
     display: grid;
     grid-template: "b${inspectorOpen ? ' i' : ''}" 1fr / 56px ${inspectorOpen ? '1fr' : ''};
    }
    side-menu { grid-area: t }
    ${inspectorOpen ? `inspector- { grid-area: i; background: ${this["beget.fn"]("lighten-background")["light-background.color"]} }` : ''}`
   }
  },
  "main-layout.css": {
   get() {
    const sidebarOpen = this["sidebar-open.bool"]
    return `
   :host {
    --system-ui: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font: 13px var(--system-ui);
    margin: 0;
    padding: 0;
    display: grid;
    grid-template: 
     "${sidebarOpen ? 'h ' : ''}h" 48px
     "${sidebarOpen ? 's ' : ''}c" auto / ${sidebarOpen ? `${(this["inspector-open.bool"] ? '2' : '')}56px ` : ''}1fr;
   }
   sidebar- { grid-area: s }
   header { grid-area: h }
   article { grid-area: c; margin: 24px }`
   }
  },

  // HTML tag names
  "h1.tag": { value: "h1" },
  "native.tag": {
   get() {

    const name = this["name.uri"]

    if (!name || !/^[a-zA-Z]+$/.test(name))
     throw RangeError(`Error: name "${name}" is not a native tagname.`)

    return name
   }
  },
  "name.tag": {
   get() {

    const
     name = this["name.uri"].replaceAll(/[^a-zA-Z0-9]+/g, '-'),
     tag = name + (name.includes('-') ? '' : '-')

    return tag
   }
  },

  /* Tests
      A test is a linked list item whose string represents a single instruction
      test.fn plays the linked list as a function block starting from a given named instruction and waiting the given amount of time
  */
  "sidebar.test": { value: " insert open-sidebar grey1 100" },
  "grey1.test": { value: "sidebar insert grey1 grey2 1000" },
  "grey2.test": { value: "grey1 replaceWith grey2 lighten" },
  "lighten.test": { value: " insert next-version removed1" },
  "removed1.test": { value: "grey2 remove  inspect" },
  "inspect.test": { value: "lighten insert open-inspector addressbarFocus" },
  "addressbarFocus.test": { value: "lighten replaceWith address sidebarFocus" },
  "sidebarFocus.test": { value: "addressbarFocus replaceWith sidebar removed2" },
  "removed2.test": { value: "sidebarFocus remove  removed3 200" },
  "removed3.test": { value: "inspect remove  removed4 200" },
  "removed4.test": { value: "sidebar remove  sidebar 200" },

  // Functions
  "test.fn": {
   get() {
    return (name, o) => {

     if (name === undefined) {
      name = 'sidebar'
      o = { "": protorow }
     }

     const [src, fn, str, n2, t] = protorow[`${name}.test`].split(' ')

     setTimeout(() => {
      o[name] = o[src][fn + '.fn'](str || undefined)
      console.log(name, Object.getOwnPropertyDescriptors(o[name]))
      this["test.fn"](n2, o)
     }, parseInt(t || 2000))
    }
   }
  },
  "render.fn": {
   // Re/populates this row's nodes and stylesheets
   get() {
    return () => {

     if (this["view.stylesheet"] !== null)
      this["view.stylesheet"].replaceSync(this["layout.css"])

     if (this["view.node"] !== null) {
      const
       layout = this[".layout"],
       incomingLayoutUris = layout === '' ? [] : layout.split(' '),
       showAttributes = this["debug.bool"],
       { shadowRoot } = this["view.node"]

      const
       stylesheets = shadowRoot.adoptedStyleSheets,
       existingSheets = [...stylesheets],
       existingSheetRows = existingSheets.map(sheet => sheet.row)

      if (showAttributes)
       shadowRoot.host.setAttribute('data-layout', layout)

      let i = -1

      while (existingSheetRows.length && incomingLayoutUris.length) {

       i++

       const
        existingBranch = existingSheetRows.shift(),
        existing = existingBranch["name.uri"],
        incoming = incomingLayoutUris.shift()

       if (existing === incoming)
        continue

       const existingIndex = existingSheetRows.findIndex(row => row["name.uri"] === incoming)

       let stylesheet

       if (existingIndex === -1) {
        stylesheet = new CSSStyleSheet()
        stylesheet.row = this["beget.fn"](incoming, { ["view.stylesheet"]: { value: stylesheet } })
       } else {
        const stylesheetIndex = i + existingIndex + 1
        stylesheet = stylesheets[stylesheetIndex]
        stylesheets.splice(stylesheetIndex, 1)
        existingSheetRows.splice(existingIndex, 1)
       }

       stylesheets.splice(i, 0, stylesheet)

       if (incomingLayoutUris.some(name => name === existing)) {
        existingSheetRows.unshift(existing)
        continue
       }

       stylesheets.splice(i + 1, 1)
      }

      if (existingSheetRows.length)
       existingSheetRows.forEach(() => stylesheets.pop())
      else if (incomingLayoutUris.length)
       for (const incoming of incomingLayoutUris) {
        const stylesheet = new CSSStyleSheet()
        stylesheet.row = this["beget.fn"](incoming, { ["view.stylesheet"]: { value: stylesheet } })
        stylesheets.push(stylesheet)
       }

      const
       innerHTML = this["inner.html"],
       path = this["path.uri"],
       createNode = (name, index = -1) => {

        let node

        const
         row = this["beget.fn"](name, { "view.node": { get() { return node } } }),
         children = shadowRoot.children

        node = document.createElement(row["view.tag"])
        node.row = row

        if (showAttributes)
         node.setAttribute('data-name', name)

        try {
         node.attachShadow({ mode: 'open' })
        } catch (e) {
         throw new Error(`Error: cannot attach shadow to <${row["view.tag"]}>. (creating node "${name}" using row "${this["name.uri"]}")`)
        }

        if (index !== -1 && index < children.length)
         shadowRoot.insertBefore(node, children[index])
        else
         shadowRoot.appendChild(node)
       }

      if (innerHTML !== null) {

       if (shadowRoot.innerHTML != innerHTML)
        shadowRoot.innerHTML = innerHTML

       if (showAttributes && shadowRoot.host.getAttribute('data-path') != path)
        shadowRoot.host.setAttribute('data-path', path)
      } else {

       const
        manifest = this[".children"],
        incomingChildUris = manifest === '' ? [] : manifest.split(' '),
        children = shadowRoot.children,
        existingNodes = [...children],
        existingNodeRows = existingNodes.map(node => node.row)

       if (showAttributes)
        shadowRoot.host.setAttribute('data-path', path)

       i = -1

       while (existingNodeRows.length && incomingChildUris.length) {

        i++

        const
         existingBranch = existingNodeRows.shift(),
         existing = existingBranch["name.uri"],
         incoming = incomingChildUris.shift()

        if (existing !== incoming) {

         const existingIndex = existingNodeRows.findIndex(row => row["name.uri"] === incoming)

         if (existingIndex === -1) {
          createNode(incoming, i)
         } else {
          shadowRoot.insertBefore(children[i + existingIndex + 1], children[i])
          existingNodeRows.splice(existingIndex, 1)
         }

         if (incomingChildUris.some(name => name === existing)) {
          existingNodeRows.unshift(existing)
          continue
         }

         children[i + 1].remove()
        }
       }

       if (existingNodeRows.length)
        existingNodeRows.forEach(() => children[i + 1].remove())
       else
        incomingChildUris.forEach(createNode)
      }

     }

     Object.values(this[".rows"]).forEach(t => t["render.fn"]())
    }
   }
  },
  "beget.fn": {
   get() {
    return (name, inputColumns) => {

     const
      description = { ... this["default.columns"] },
      commit = this[name + ".commit"];

     if (!(name + ".commit" in this))
      throw new RangeError('Error: no commit called "' + name + '"')

     for (const [key, ref] of (commit ? commit.split('&') : []).map(a => a ? a.split('=') : [])) {

      if (ref.startsWith('data:')) {
       const datum = ref.slice(ref.indexOf(',') + 1)
       description[key] = { get() { return datum } }
       continue
      }

      if (ref.startsWith('https:')) {
       description[key] = {
        get() {
         console.warn('absolute cell', ref)
        }
       }
       continue
      }

      let
       levels = 1,
       subkey = ref


      if (subkey.startsWith('./')) {
       subkey = subkey.slice(2)
       levels = 0
      } else while (subkey.startsWith('../')) {
       subkey = subkey.slice(3)
       levels++
      }

      description[key] = {
       get() {

        let row = this

        for (let i = 0; i < levels; i++) {

         row = row["parent.row"]

         if (row === null)
          throw new RangeError(`Error: relative reference to row which is beyond protorow ${ref})`)
        }

        console.log('relative cell', row["path.uri"] + subkey)

        return row[subkey]
       }
      }
     }

     return this[".rows"][name] = Object.create(this, Object.assign(description, inputColumns, {
      "context.uri": { value: "context.uri instance.uri name.uri .commit" },
      "instance.uri": { value: Object.keys(description).join(' ') },
      "name.uri": { value: name },
      ".commit": { value: commit }
     }))
    }
   }
  },
  "donate.fn": {
   get() {
    return (child, parent, name = child["name.uri"]) => {
     delete this[".rows"][name]
     parent[".rows"][name] = child
     Object.setPrototypeOf(child, parent)
     child["render.fn"]()
    };
   },
  },
  "insert.fn": {
   get() {
    return name => {

     const
      row = this["beget.fn"](name),
      rows = this[".rows"]

     for (const subkey in rows)
      if (rows[subkey] !== row)
       this["donate.fn"](rows[subkey], row, subkey)

     return row
    }
   }
  },
  "remove.fn": {
   get() {
    return () => {

     if (this === protorow)
      throw new Error("Error: Attempted to remove protorow.")

     const
      parent = this["parent.row"],
      rows = this[".rows"]

     delete parent[".rows"][this["name.uri"]]

     for (const subkey in rows)
      this["donate.fn"](rows[subkey], parent, subkey)

     return parent
    }
   }
  },
  "replaceWith.fn": {
   get() {
    return name => {

     if (this === protorow)
      return this["insert.fn"](name)

     const
      parent = this["parent.row"],
      row = parent["beget.fn"](name),
      rows = this[".rows"]

     delete parent[".rows"][this["name.uri"]]

     for (const subkey in rows)
      this["donate.fn"](rows[subkey], row, subkey)

     return row
    }
   }
  },
  "boot.fn": {
   get() {
    return (hostname, viewNode) => {
     viewNode.attachShadow({ mode: 'open' });
     (viewNode.row = this["beget.fn"](hostname, { "view.node": { value: viewNode } }))["render.fn"]();
    }
   }
  }
 },
 protorow = Object.create(null, Object.assign(protocolumns, protocolumns["default.columns"].get()))

// Prepare the operating system
onload = () => {
 protorow["boot.fn"](location.host, document.body)
 protorow["test.fn"]()
}

// TODO: ServiceWorker