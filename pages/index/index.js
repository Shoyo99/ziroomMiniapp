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
    wx.login({
      timeout:2000,
      success:({code})=>{
        console.log(code);
        wx.request({
          url: 'http://www.ziroom.cc/api/v1/wxlogin',
          data: {code},
          method: 'POST',
          header: {
            'Accept': 'application/json',
            'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY5ODhlYjFjNzZiZGVmZDNiOGZjNzgyOTMyZmI3NjVmMGRiODUyMGM2OGJiYWJlMGIxNGI5OTQ0OGViOTNjMzQ1Yzk0Mjg1NmFjNGE5YzUwIn0.eyJhdWQiOiIxIiwianRpIjoiZjk4OGViMWM3NmJkZWZkM2I4ZmM3ODI5MzJmYjc2NWYwZGI4NTIwYzY4YmJhYmUwYjE0Yjk5NDQ4ZWI5M2MzNDVjOTQyODU2YWM0YTljNTAiLCJpYXQiOjE2MzQ5NzI0OTUsIm5iZiI6MTYzNDk3MjQ5NSwiZXhwIjoxNjY2NTA4NDk1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.IKImhOXu4C31Axmye-N3XY6hJQYloo-Iq9pZ-HLxlXxGoa2LdlRH-uZQ30p7wWwuEkWGUUE3ldqpjWAGsyBF5zWLr6zBUPJBEGjJDEmPGanipKqxafliikOYUuvZXFoUdXPuq9UpXgrNuAmFSJkSBrRyXs3iR_h71XR3HT7_JLx7PLUupVZbPMNY62cesX7xpPmWVxkumhVO2FDpGtXg4NHEGVyqK-N2qblTNmuAFBS5G8cf5FYAGFPcuGuFG3At-thfGiHWlCQ0q_E8Qv4kLiRjmR2KfzeTGw91hp8gpNE3m2du71NtDv37qV_qCebYxqMU7w2qNlxQsHTehm4DEYbbHzmfnB78IaQhPCq7FMcujBS5WKSB3PkXPSDZunEXN_sv43OCJ8a_xai3cB9EyuRF6bsDMJQbOFx12qGJX1mknozStl992LwWcuDe1BSiEAQPCQ6txTOWd50IrclQgryMQ8BA0Zm9Y69iQZ4zWQIjJcgX21mqu7eWJOVeQtt56vdV2R8XrrzO6b7ObtL98JPELsBD9PDa7NVpPUNaado8x9fGyEULwhhw9_Ncjot03Z8DYsHlzFmD9M2IcqonkDSlIyIqn6oEppAjUbY7klh-9Qp2ownszAcruWm1bqqJLOnwE0yHj7JteqLTJX1cx_3tGlE3ul8hMmdeVVVvBAE'
          },
          success:ret=>{
            console.log(ret);
          }
        })
      }
    });
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