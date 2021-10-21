// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: ['', '', '', ''],
    showflag: [false, false, false, false],
    text: ['位置','合租/整租','租金','筛选'],
    selectedIndex: 0,
    columns: [['附近','商圈','地铁'],['合租','整租'],['0-999','1000-1999','2000-2999'],['测试']],
    columnClass: ['','',''],
    line: ['','',''],
    select: ['','','',''],
    iconSelect: ['','','',''],
    arrows:['icon-xiangxia','icon-xiangxia','icon-xiangxia','icon-xiangxia'],
    imgUrls: ['/static/img/index/bar03.png','/static/img/index/bar01.jpg','/static/img/index/bar02.jpg','/static/img/index/bar04.jpg'],
    indicatordots: true,
    circular: true,
    autoplay: true,
    duration: 1000,
    interval: 3000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },
  //一级选择器隐藏
  hideDiv(index){
    let show = this.data.show;
    let showflag = this.data.showflag;
    let arrows = this.data.arrows;
    let iconSelect = this.data.iconSelect;

    show[index] = '';
    showflag[index] = false;
    arrows[index] = 'icon-xiangxia';
    iconSelect[index] = '';

    this.setData({
      show,
      showflag,
      arrows,
      iconSelect
    })
  },
  //一级选择器展开
  showDiv(index){
    let show = this.data.show;
    let showflag = this.data.showflag;
    let arrows = this.data.arrows;
    let iconSelect = this.data.iconSelect;

    show[index] = 'now';
    showflag[index] = true;
    arrows[index] = 'icon-xiangshang';
    iconSelect[index] = 'selected';

    this.setData({
      show,
      showflag
    })
  },
  // 一级选择器选中事件
  onShadeDiv(evt) {
    let index = evt.currentTarget.dataset.index;
    let show = this.data.show;
    let showflag = this.data.showflag;
    let selectedIndex = this.data.selectedIndex;

    if (showflag[index]) { // 已显示，再次点击隐藏起来
      this.hideDiv(index);
    } else {
      for (let key in show) {
        if (key == index) {
          this.showDiv(key);
          selectedIndex = index;
        } else {
         this.hideDiv(key);
        }
      }
    }
    this.setData({
      selectedIndex
    })
  },

  //二级选择器选中事件
  onSelect(evt){
    let index = evt.currentTarget.dataset.index;
    let columnClass = this.data.columnClass;
    let line = this.data.line;
    let columns = this.data.columns;
    let selectedIndex = this.data.selectedIndex;
    let text = this.data.text;
    let select = this.data.select;

    for (let key in columnClass){
      if (key == index){
        columnClass[key] = 'column';
        line[key] = 'line';
        text[selectedIndex] = columns[selectedIndex][index];
        select[selectedIndex] = 'selected';
      }else {
        columnClass[key] = '';
        line[key] = '';
      }
    }
    this.setData({
      columnClass,
      line,
      text,
      select
    });
    this.hideDiv(selectedIndex);
  }
})