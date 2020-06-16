/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(4);

var color = ['#73C7C1', '#f7e02c', '#d88c26', '#2E6FCB'];
var titleTextStyle = {
  color: '#326BBA',
  fontSize: 18,
  fontWeight: 'bold'
};
var legendTextStyle = {
  color: "#929292",
  fontSize: 12,
  fontWeight: 'light'
};
var axis = {
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
  }
};
var lineSeries = {
  type: 'line',
  symbol: 'circle',
  symbolSize: 12,
  lineStyle: {
    normal: {
      width: 1.5
    }
  }
};
var lineChart = echarts.init(document.getElementById('line-echart'));
var lineOption = {
  title: {
    text: '两违统计',
    left: 30,
    top: 22,
    textStyle: titleTextStyle
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(43,65,92,0.85)',
    textStyle: { //提示文本的样式
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
  xAxis: _extends({
    type: 'category',
    boundaryGap: false
  }, axis, {
    data: ['', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  }),
  yAxis: _extends({
    type: 'value'
  }, axis),
  color: [].concat(color),
  series: [_extends({
    name: '标题一'
  }, lineSeries, {
    data: [null, 320, 232, 101, 334, 190, 230, 210, 320, 232, 201, 304, 180, 250, 290]
  }), _extends({
    name: '标题二'
  }, lineSeries, {
    data: [null, 420, 382, 391, 234, 290, 330, 310, 320, 232, 101, 334, 190, 230, 210]
  }), _extends({
    name: '标题三'
  }, lineSeries, {
    data: [null, 150, 232, 201, 154, 190, 330, 410, 400, 332, 451, 554, 690, 630, 610]
  }), _extends({
    name: '标题四'
  }, lineSeries, {
    data: [null, 300, 132, 251, 254, 290, 130, 210, 150, 232, 201, 154, 190, 330, 410]
  })]
};
lineChart.setOption(lineOption);

var barSeries = {
  type: 'bar',
  barGap: 0,
  barWidth: 14
};
var barChart = echarts.init(document.getElementById('bar-echart'));
var barOption = {
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
    textStyle: { //提示文本的样式
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
  xAxis: [_extends({
    type: 'category'
  }, axis, {
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  })],
  yAxis: [_extends({
    type: 'value'
  }, axis)],
  series: [_extends({
    name: '标题一'
  }, barSeries, {
    data: [120, 132, 51, 334, 190, 230, 490, 320, 232, 201, 304, 180, 250, 290]
  }), _extends({
    name: '标题二'
  }, barSeries, {
    data: [100, 182, 91, 234, 290, 330, 510, 320, 232, 101, 334, 190, 230, 210]
  })]
};
barChart.setOption(barOption);

var barSmallChart = echarts.init(document.getElementById('bar-small-echart'));
var barSmallOption = {
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
    textStyle: { //提示文本的样式
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
  xAxis: [_extends({
    type: 'category'
  }, axis, {
    data: ['2018.3', '2018.4', '2018.5', '2018.6']
  })],
  yAxis: [_extends({
    type: 'value'
  }, axis, {
    splitLine: {
      show: false
    }
  })],
  series: [_extends({
    name: '标题一'
  }, barSeries, {
    barWidth: 10,
    data: [120, 132, 51, 334]
  }), _extends({
    name: '标题二'
  }, barSeries, {
    barWidth: 10,
    data: [100, 182, 91, 234]
  }), _extends({
    name: '标题三'
  }, barSeries, {
    barWidth: 10,
    data: [100, 182, 91, 234]
  })]
};
barSmallChart.setOption(barSmallOption);

var pieChart = echarts.init(document.getElementById('pie-echart'));
var pieOption = {
  color: ['#3CCE6D', '#f7e02c', '#348AE3', '#D88C26', '#F64949', '#9F34A9'],
  title: {
    text: '每日拆违状态',
    left: 30,
    top: 22,
    textStyle: titleTextStyle
  },
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(43,65,92,0.85)',
    textStyle: { //提示文本的样式
      color: '#FEFEFE',
      fontSize: 12,
      fontWeight: 'light'
    }
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
  series: [{
    type: 'pie',
    center: ['50%', '65%'],
    radius: ['46%', '60%'],
    avoidLabelOverlap: false,
    label: {
      show: false,
      position: 'center'
    },
    labelLine: {
      show: false
    },
    data: [{ value: 335, name: '标题一' }, { value: 310, name: '标题二' }, { value: 1234, name: '标题三' }, { value: 135, name: '标题四' }, { value: 1548, name: '标题五' }, { value: 348, name: '标题六' }]
  }]
};
pieChart.setOption(pieOption);

var tableSwiper = new Swiper('#table-swiper', {
  autoplay: 5000,
  direction: 'vertical',
  slidesPerView: 'auto',
  loop: true
});

var itemLabel = {
  formatter: "{c}",
  show: true,
  position: "right",
  textStyle: {
    fontWeight: "lighter",
    fontSize: "12",
    color: "#fff"
  }
};
var barHChart = echarts.init(document.getElementById('bar-h-echarts'));
var barHOption = {
  title: {
    text: '乡镇违建统计',
    left: 30,
    top: 22,
    textStyle: titleTextStyle
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(43,65,92,0.85)',
    textStyle: { //提示文本的样式
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
  xAxis: [{
    show: false,
    type: 'value'
  }],
  yAxis: [_extends({
    type: 'category'
  }, axis, {
    // data: ['标题一', '标题二', '标题三', '标题四', '标题五']
    data: ['']
  })],
  series: [{
    name: '标题一',
    type: 'bar',
    barGap: 1,
    barWidth: 10,
    itemStyle: {
      normal: {
        color: '#73C7C1',
        label: itemLabel
      }
    },
    data: [120]
  }, {
    name: '标题二',
    type: 'bar',
    barGap: 1,
    barWidth: 10,
    itemStyle: {
      normal: {
        color: '#f7e02c',
        label: itemLabel
      }
    },
    data: [51]
  }, {
    name: '标题三',
    type: 'bar',
    barGap: 1,
    barWidth: 10,
    itemStyle: {
      normal: {
        color: '#d88c26',
        label: itemLabel
      }
    },
    data: [334]
  }, {
    name: '标题四',
    // ...barSeries,
    // barWidth: 8,
    type: 'bar',
    barGap: 1,
    barWidth: 10,
    itemStyle: {
      normal: {
        color: '#2E6FCB',
        label: itemLabel
      }
    },
    data: [190]
  }, {
    name: '标题五',
    // ...barSeries,
    type: 'bar',
    barGap: 1,
    barWidth: 10,
    itemStyle: {
      normal: {
        color: '#6ED290',
        label: itemLabel
      }
    },
    data: [230]
  }]
};
barHChart.setOption(barHOption);

var serie = {
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
  data: [{
    value: 80,
    name: "80%",
    label: {
      textStyle: {
        fontSize: 16
      }
    },
    itemStyle: {
      color: '#579CFF'
    }
  }, {
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
  }]
};
var serie2 = {
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
  }, {
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
  }]
};
var morePieChart = echarts.init(document.getElementById('pie-more-ehcart'));
var morePieOption = {
  title: [{
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
  }, {
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
  }],
  grid: {
    left: '8%',
    right: '10%',
    bottom: '0%',
    top: 0,
    containLabel: true
  },
  series: [_extends({}, serie, {
    center: ['20%', '40%']
  }), _extends({}, serie, {
    center: ['50%', '40%']
  }), _extends({}, serie, {
    center: ['80%', '40%']
  }), _extends({}, serie2, {
    center: ['20%', '80%']
  }), _extends({}, serie2, {
    center: ['50%', '80%']
  }), _extends({}, serie2, {
    center: ['80%', '80%']
  })]
};
morePieChart.setOption(morePieOption);

var lineSmallChart = echarts.init(document.getElementById('line-small-echart'));
var lineSmallOption = {
  title: {
    text: '违建增长',
    left: 30,
    top: 22,
    textStyle: titleTextStyle
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(43,65,92,0.85)',
    textStyle: { //提示文本的样式
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
  xAxis: _extends({
    type: 'category',
    boundaryGap: false
  }, axis, {
    data: ['', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  }),
  yAxis: _extends({
    type: 'value'
  }, axis),
  color: ['#6ED290', '#f7e02c', '#d88c26'],
  series: [_extends({
    name: '标题一'
  }, lineSeries, {
    symbolSize: 6,
    data: [null, 320, 232, 101, 334, 190, 230, 210, 320, 232, 201, 304, 180, 250, 290]
  }), _extends({
    name: '标题二'
  }, lineSeries, {
    symbolSize: 6,
    data: [null, 420, 382, 391, 234, 290, 330, 310, 320, 232, 101, 334, 190, 230, 210]
  }), _extends({
    name: '标题三'
  }, lineSeries, {
    symbolSize: 6,
    data: [null, 150, 232, 201, 154, 190, 330, 410, 400, 332, 451, 554, 690, 630, 610]
  })]
};
lineSmallChart.setOption(lineSmallOption);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);