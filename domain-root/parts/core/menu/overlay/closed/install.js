this.overlay = this.parent.overlay
this.overlay.setAttribute("style", "--overlay-tween: 0")

this.menuButton = this.parent.menuButton
this.menuButton.onclick = () => this.parent.setState(1n)