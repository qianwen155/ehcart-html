import '../less/index.less'

const color = ['#73C7C1', '#f7e02c', '#d88c26', '#2E6FCB'];
const titleTextStyle = {
  color:'#326BBA',
  fontSize: 18,
  fontWeight: 'bold'
};
const legendTextStyle = {
  color: "#929292",
  fontSize: 12,
  fontWeight: 'light'
};
const axis = {
  axisLine: {
    lineStyle: {
      color: '#153059'
    }
  },
  axisTick: {
    show: false
  },
  axisLabel: {
    color: '#B2CFCF'
  },
  splitLine: {
    lineStyle: {
      color: '#153059'
    }
  },
};
const lineSeries = {
  type: 'line',
  symbol:'circle',
  symbolSize: 12,
  lineStyle: {
    normal: {
      width: 1.5,
    },
  },
};
const lineChart = echarts.init(document.getElementById('line-echart'));
const lineOption = {
  title: {
    text: '两违统计',
    left: 30,
    top: 22,
    textStyle: titleTextStyle
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(43,65,92,0.85)',
    textStyle: {      //提示文本的样式
      color: '#FEFEFE',
      fontSize: 12,
      fontWeight: 'light'
    }
  },
  legend: {
    data: ['标题一', '标题二', '标题三', '标题四'],
    top: 26,
    left: 140,
    itemGap: 14,
    icon: "circle",
    textStyle: legendTextStyle,
    itemWidth: 7
  },
  grid: {
    left: '5%',
    right: '5%',
    bottom: '0%',
    top: 80,
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    ...axis,
    data: ['', '1月', '2月', '3月', '4月', '5月', '6月', '7月','8月', '9月', '10月', '11月', '12月']
  },
  yAxis: {
    type: 'value',
    ...axis
  },
  color: [...color],
  series: [
    {
      name: '标题一',
      ...lineSeries,
      data: [null, 320, 232, 101, 334, 190, 230, 210, 320, 232, 201, 304, 180, 250, 290]
    },
    {
      name: '标题二',
      ...lineSeries,
      data: [null, 420, 382, 391, 234, 290, 330, 310, 320, 232, 101, 334, 190, 230, 210,]
    },
    {
      name: '标题三',
      ...lineSeries,
      data: [null, 150, 232, 201, 154, 190, 330, 410, 400, 332, 451, 554, 690, 630, 610,]
    },
    {
      name: '标题四',
      ...lineSeries,
      data: [null, 300, 132, 251, 254, 290, 130, 210, 150, 232, 201, 154, 190, 330, 410]
    },
  ]
};
lineChart.setOption(lineOption);


const barSeries = {
  type: 'bar',
  barGap: 0,
  barWidth: 14
};
const barChart = echarts.init(document.getElementById('bar-echart'));
const barOption = {
  color: ['#73C7C1', '#4A84D6'],
  title: {
    text: '两违排行',
    left: 30,
    top: 22,
    textStyle: titleTextStyle
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(43,65,92,0.85)',
    textStyle: {      //提示文本的样式
      color: '#FEFEFE',
      fontSize: 12,
      fontWeight: 'light'
    },
    axisPointer: {
      show: false
    }
  },
  legend: {
    data: ['标题一', '标题二'],
    top: 26,
    left: 140,
    itemGap: 14,
    icon: "circle",
    textStyle: legendTextStyle,
    itemWidth: 7
  },
  grid: {
    left: '5%',
    right: '5%',
    bottom: '3%',
    top: 80,
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      ...axis,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月', '9月', '10月', '11月', '12月']
    }
  ],
  yAxis: [
    {
      type: 'value',
      ...axis
    }
  ],
  series: [
    {
      name: '标题一',
      ...barSeries,
      data: [120, 132, 51, 334, 190, 230, 490, 320, 232, 201, 304, 180, 250, 290]
    },
    {
      name: '标题二',
      ...barSeries,
      data: [100, 182, 91, 234, 290, 330, 510, 320, 232, 101, 334, 190, 230, 210,]
    },
  ],
};
barChart.setOption(barOption);


const barSmallChart = echarts.init(document.getElementById('bar-small-echart'));
const barSmallOption = {
  color: ['#73C7C1', '#4A84D6', '#f7e02c'],
  title: {
    text: '拆违统计',
    left: 30,
    top: 22,
    textStyle: titleTextStyle
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(43,65,92,0.85)',
    textStyle: {      //提示文本的样式
      color: '#FEFEFE',
      fontSize: 12,
      fontWeight: 'light'
    },
    axisPointer: {
      show: false
    }
  },
  legend: {
    data: ['标题一', '标题二', '标题三'],
    selected: {
      '标题一': true,
      '标题二': false,
      '标题三': false,
    },
    top: 26,
    left: 140,
    itemGap: 14,
    icon: "circle",
    textStyle: legendTextStyle,
    itemWidth: 7
  },
  grid: {
    left: '5%',
    right: '5%',
    bottom: '3%',
    top: 80,
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      ...axis,
      data: ['2018.3', '2018.4', '2018.5', '2018.6' ]
    }
  ],
  yAxis: [
    {
      type: 'value',
      ...axis,
      splitLine: {
        show: false
      }
    }
  ],
  series: [
    {
      name: '标题一',
      ...barSeries,
      barWidth: 10,
      data: [120, 132, 51, 334]
    },
    {
      name: '标题二',
      ...barSeries,
      barWidth: 10,
      data: [100, 182, 91, 234]
    },
    {
      name: '标题三',
      ...barSeries,
      barWidth: 10,
      data: [100, 182, 91, 234]
    },
  ],
};
barSmallChart.setOption(barSmallOption);

const pieChart = echarts.init(document.getElementById('pie-echart'));
const pieOption = {
  color: ['#3CCE6D', '#f7e02c', '#D88C26', '#F64949', '#9F34A9', '#348AE3',],
  title: {
    text: '每日拆违状态',
    left: 30,
    top: 22,
    textStyle: titleTextStyle
  },
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(43,65,92,0.85)',
    textStyle: {      //提示文本的样式
      color: '#FEFEFE',
      fontSize: 12,
      fontWeight: 'light'
    },
  },
  legend: {
    data: ['标题一', '标题二', '标题三', '标题四', '标题五', '标题六'],
    top: 48,
    left: 20,
    itemGap: 14,
    icon: "circle",
    textStyle: legendTextStyle,
    itemWidth: 7
  },
  grid: {
    left: '5%',
    right: '5%',
    bottom: '3%',
    top: 200,
    containLabel: true
  },
  series: [
    {
      type: 'pie',
      center: ['50%', '65%'],
      radius: '60%',
      roseType: 'radius',
      avoidLabelOverlap: false,
      // label: {
      //   show: false,
      //   position: 'center'
      // },
      labelLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        },
        smooth: 0.2,
        length: 10,
        length2: 20
      },
      data: [
        {value: 235, name: '标题一'},
        {value: 310, name: '标题二'},
        {value: 274, name: '标题三'},
        {value: 235, name: '标题四'},
        {value: 300, name: '标题五'},
        {value: 350, name: '标题六'},
      ].sort(function (a, b) { return a.value - b.value; })
    }
  ]
};
pieChart.setOption(pieOption);

const tableSwiper = new Swiper('#table-swiper', {
  autoplay: 1000,
  speed: 1000,
  direction: 'vertical',
  slidesPerView: 'auto',
  loop: true
});




const itemLabel = {
  formatter: "{c}",
    show: true,
    position: "right",
    textStyle: {
    fontWeight: "lighter",
      fontSize: "12",
      color: "#fff"
  },
};
const barHChart = echarts.init(document.getElementById('bar-h-echarts'));
const barHOption = {
  title: {
    text: '乡镇违建统计',
    left: 30,
    top: 22,
    textStyle: titleTextStyle
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(43,65,92,0.85)',
    textStyle: {      //提示文本的样式
      color: '#FEFEFE',
      fontSize: 12,
      fontWeight: 'light'
    },
    axisPointer: {
      show: false
    }
  },
  legend: {
    data: ['标题一', '标题二', '标题三', '标题四', '标题五'],
    top: 60,
    left: 30,
    itemGap: 14,
    icon: "circle",
    textStyle: legendTextStyle,
    itemWidth: 7
  },
  grid: {
    left: '8%',
    right: '10%',
    bottom: '0%',
    top: 100,
    containLabel: true
  },
  xAxis: [
    {
      show: false,
      type: 'value',
    }
  ],
  yAxis: [
    {
      type: 'category',
      ...axis,
      // data: ['标题一', '标题二', '标题三', '标题四', '标题五']
      data: ['']
    }
  ],
  series: [
    {
      name: '标题一',
      type: 'bar',
      barGap: 1,
      barWidth: 10,
      itemStyle: {
        normal: {
          color: '#73C7C1',
          label: itemLabel,
        }
      },
      data: [120]
    },
    {
      name: '标题二',
      type: 'bar',
      barGap: 1,
      barWidth: 10,
      itemStyle: {
        normal: {
          color: '#f7e02c',
          label: itemLabel,
        }
      },
      data: [51]
    },
    {
      name: '标题三',
      type: 'bar',
      barGap: 1,
      barWidth: 10,
      itemStyle: {
        normal: {
          color: '#d88c26',
          label: itemLabel,
        }
      },
      data: [334]
    },
    {
      name: '标题四',
      // ...barSeries,
      // barWidth: 8,
      type: 'bar',
      barGap: 1,
      barWidth: 10,
      itemStyle: {
        normal: {
          color: '#2E6FCB',
          label: itemLabel,
        }
      },
      data: [190]
    },
    {
      name: '标题五',
      // ...barSeries,
      type: 'bar',
      barGap: 1,
      barWidth: 10,
      itemStyle: {
        normal: {
          color: '#6ED290',
          label: itemLabel,
        }
      },
      data: [230]
    },
  ],
};
barHChart.setOption(barHOption);

const serie = {
  name: "",
  type: "pie",
  radius: ["20%", "24%"],
  center: ['18%', '42%'],
  startAngle: 270,
  z: 4,
  avoidLabelOverlap: false,
  label: {
    show: true,
    position: 'center'
  },
  data: [
    {
      value: 80,
      name: "80%",
      label: {
        textStyle: {
          fontSize: 16
        }
      },
      itemStyle: {
        color: '#579CFF',
      }
    },
    {
      value: 20,
      name: "20%",
      label: {
        normal: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          color: "#0E2F5E"
        }
      }
    }
  ]
};
const serie2 = {
  name: "",
  type: "pie",
  radius: ["20%", "24%"],
  center: ['18%', '46%'],
  startAngle: 270,
  z: 4,
  label: {
    show: true,
    position: 'center'
  },
  data: [{
    value: 80,
    name: "80%",
    label: {
      textStyle: {
        fontSize: 16
      }
    },
    itemStyle: {
      color: '#3CC973'
    }
  },
    {
      value: 20,
      name: "",
      label: {
        normal: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          color: "#0A4820"
        }
      }
    }
  ]
};
const morePieChart = echarts.init(document.getElementById('pie-more-ehcart'));
const morePieOption = {
  title: [
    {
      text: '全区违建类型统计',
      left: 30,
      top: 22,
      textStyle: titleTextStyle
    }, {
      subtext: '标题一',
      left: '18.5%',
      top: '50%',
      textAlign: 'center'
    }, {
      subtext: '标题二',
      left: '50%',
      top: '49%',
      textAlign: 'center'
    }, {
      subtext: '标题三',
      left: '78.5%',
      top: '50%',
      textAlign: 'center'
    },{
      subtext: '标题四',
      left: '18.5%',
      top: '88%',
      textAlign: 'center'
    }, {
      subtext: '标题五',
      left: '49%',
      top: '88%',
      textAlign: 'center'
    }, {
      subtext: '标题六',
      left: '78.5%',
      top: '88%',
      textAlign: 'center'
    }
  ],
  grid: {
    left: '8%',
    right: '10%',
    bottom: '0%',
    top: 0,
    containLabel: true
  },
  series: [
    {
      ...serie,
      center: ['20%', '40%'],
    },
    {
      ...serie,
      center: ['50%', '40%'],
    },
    {
      ...serie,
      center: ['80%', '40%'],
    },
    {
      ...serie2,
      center: ['20%', '80%'],
    },
    {
      ...serie2,
      center: ['50%', '80%'],
    },
    {
      ...serie2,
      center: ['80%', '80%'],
    }
  ]
};
morePieChart.setOption(morePieOption);

const lineSmallChart = echarts.init(document.getElementById('line-small-echart'));
const lineSmallOption = {
  title: {
    text: '违建增长',
    left: 30,
    top: 22,
    textStyle: titleTextStyle
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(43,65,92,0.85)',
    textStyle: {      //提示文本的样式
      color: '#FEFEFE',
      fontSize: 12,
      fontWeight: 'light'
    }
  },
  legend: {
    data: ['标题一', '标题二', '标题三', '标题四'],
    top: 26,
    left: 140,
    itemGap: 14,
    icon: "circle",
    textStyle: legendTextStyle,
    itemWidth: 7
  },
  grid: {
    left: '5%',
    right: '8%',
    bottom: '0%',
    top: 80,
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    ...axis,
    data: ['', '1月', '2月', '3月', '4月', '5月', '6月', '7月','8月', '9月', '10月', '11月', '12月']
  },
  yAxis: {
    type: 'value',
    ...axis
  },
  color:  ['#6ED290', '#f7e02c', '#d88c26'],
  series: [
    {
      name: '标题一',
      ...lineSeries,
      symbolSize: 6,
      data: [null, 320, 232, 101, 334, 190, 230, 210, 320, 232, 201, 304, 180, 250, 290]
    },
    {
      name: '标题二',
      ...lineSeries,
      symbolSize: 6,
      data: [null, 420, 382, 391, 234, 290, 330, 310, 320, 232, 101, 334, 190, 230, 210,]
    },
    {
      name: '标题三',
      ...lineSeries,
      symbolSize: 6,
      data: [null, 150, 232, 201, 154, 190, 330, 410, 400, 332, 451, 554, 690, 630, 610,]
    },
  ]
};
lineSmallChart.setOption(lineSmallOption);


let j = 1;
setInterval(()=>{
  let option = barSmallChart.getOption();
  let selected = {};
  const legendData = barSmallOption.legend.data;
  for(let i=0;i<legendData.length;i++){    // this.legendData是legend中data的值，上面是写死的值，做自动切换时不要写死
    selected[legendData[i]] = j === i;
  }
  barSmallChart.clear();      // 清空原来的折线图
  option.legend[0].selected = selected;    //更改legend里的selected
  barSmallChart.setOption(option);//重绘
  j += 1;
  if(j === legendData.length){
    j = 0;
  }
}, 3000);

Date.prototype.format = function (fmt) {
  const days = {
    0: '日',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
  };
  let o = {
    "y+": this.getFullYear, //年
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "D": days[this.getDay()], //星期
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "ss": this.getSeconds() //秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (let k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};
setInterval("document.getElementById('dateTime').innerHTML = (new Date()).format('yyyy年MM月dd <span>星期D</span> <span>hh:mm:ss</span>');", 1000);

