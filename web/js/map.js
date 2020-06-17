import '../less/map.less'
// import './china-map'

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

const barSeries = {
  type: 'bar',
  barGap: 0,
  barWidth: 14
};
const barChart = echarts.init(document.getElementById('bar-echart'));
const barOption = {
  color: ['#3CCE6D', '#4A84D6'],
  title: {
    text: '建房统计',
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
    bottom: '10%',
    top: 80,
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      ...axis,
      boundaryGap: true,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月', '9月', '10月', '11月', '12月']
    }
  ],
  yAxis: [
    {
      type: 'value',
      ...axis
    }
  ],
  dataZoom: [{
    type: 'inside',
    startValue: 3,
    endValue: 11
  }, {
    startValue: 3,
    endValue: 11,
    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
    handleSize: '100%',
    handleStyle: {
      color: '#fff',
      shadowBlur: 3,
      shadowColor: 'rgba(0, 0, 0, 0.6)',
      shadowOffsetX: 2,
      shadowOffsetY: 2
    }
  }],
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


const tableSwiper = new Swiper('#table-swiper', {
  autoplay: 1000,
  speed: 1000,
  direction: 'vertical',
  slidesPerView: 'auto',
  loop: true
});


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
    text: '乡镇统计',
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
    data: ['标题一', '标题二', '标题三', '标题四', '标题五', '标题六'],
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
    top: 120,
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
    {
      name: '标题六',
      type: 'bar',
      barGap: 1,
      barWidth: 10,
      itemStyle: {
        normal: {
          color: '#A8C5F4',
          label: itemLabel,
        }
      },
      data: [230]
    },
  ],
};
barHChart.setOption(barHOption);

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


setInterval(()=>{
  let option = barChart.getOption();
  const dataZoom = barOption.dataZoom;
  const start = dataZoom[0].startValue;
  if (start > 6) {
    dataZoom[0].startValue = 0;
    dataZoom[0].startValue = 0;
  } else {
    dataZoom[0].startValue = start + 1;
    dataZoom[0].startValue =start + 1;
  }
  barChart.clear();      // 清空
  option.dataZoom = dataZoom;    //更改
  barChart.setOption(option);//重绘
}, 3000);
