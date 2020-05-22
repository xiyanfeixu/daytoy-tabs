var that
class Tab {
  constructor() {
    that = this
    this.main = document.querySelector("#tab")
    this.add = document.querySelector(".tabadd")
    this.ul = document.querySelector(".firstnav ul")
    this.content = document.querySelector(".tabscon")
    this.init()
  }
  init() {
    this.updateNodes()
    this.add.onclick = this.addTab
    for (var i = 0; i < this.tabs.length; i++) {
      this.tabs[i].index = i
      this.tabs[i].onclick = this.toggle
      this.remove[i].onclick = this.delete
      this.spans[i].ondblclick = this.edit
      this.content_spans[i].ondblclick = this.edit
    }
  }
  addTab() {
    that.clearStyle()
    const temp = Math.random()
    var tab =
      '<li class="active"><span>肖战</span><i class="fa fa-times"></i></li>'
    var content = '<section class="active"><span>' + temp + "</span></section>"
    that.ul.insertAdjacentHTML("beforeend", tab)
    that.content.insertAdjacentHTML("beforeend", content)
    that.init()
  }
  updateNodes() {
    this.tabs = document.querySelectorAll(".firstnav li")
    this.contents = document.querySelectorAll(".tabscon section")
    this.remove = document.querySelectorAll(".firstnav li i")
    this.spans = document.querySelectorAll(".firstnav ul span")
    this.content_spans = document.querySelectorAll(".tabscon section span")
  }
  clearStyle() {
    for (var i = 0; i < this.tabs.length; i++) {
      this.tabs[i].className = ""
      this.contents[i].className = ""
    }
  }
  toggle() {
    that.clearStyle()
    this.className = "active"
    that.contents[this.index].className = "active"
  }
  delete(e) {
    e.stopPropagation()
    var index = this.parentNode.index
    this.parentNode.remove()
    that.contents[index].remove()
    that.init()
    that.tabs[index] && that.tabs[index].click()
  }
  edit() {
    var str = this.innerHTML
    // 双击禁止选中文字
    window.getSelection
      ? window.getSelection().removeAllRanges()
      : document.selection.empty()
    this.innerHTML = '<input type="text">'
    var input = this.children[0]
    input.value = str
    input.select()
    input.onblur = function () {
      this.parentNode.innerHTML = this.value
    }
    input.onkeydown = function (e) {
      if (e.keyCode === 13) {
        this.blur()
      }
    }
  }
}
new Tab()
