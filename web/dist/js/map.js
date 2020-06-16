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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(13);

// import './china-map'

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

var barSeries = {
  type: 'bar',
  barGap: 0,
  barWidth: 14
};
var barChart = echarts.init(document.getElementById('bar-echart'));
var barOption = {
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

var mapChart = echarts.init(document.getElementById('china-map'));
var mapOption = {
  title: {
    text: '地图展示',
    left: 30,
    top: 22,
    textStyle: titleTextStyle
  },
  tooltip: {
    show: true, //不显示提示标签
    formatter: '{b} {c}', //提示标签格式
    borderColor: 'rgba(94,161,242,1)',
    backgroundColor: 'rgba(43,65,92,0.85)',
    textStyle: {
      color: '#FEFEFE',
      fontSize: 12,
      fontWeight: 'light'
    } //提示标签字体颜色
  },
  visualMap: {
    left: 20,
    min: 0,
    max: 100,
    inRange: {
      color: ['#092949', '#183E6C', '#2D64A5', '#3E71B7', '#4392E7', '#87CDFF']
    },
    textStyle: {
      color: '#D1D1D1'
    },
    text: ['高', '底'], // 文本，默认为数值文本
    calculable: true
  },
  series: [{
    type: 'map',
    map: 'china',
    label: {
      normal: {
        show: true, //显示省份标签
        textStyle: {
          color: "#D1D1D1" //省份标签字体颜色
        } }
    },
    itemStyle: {
      normal: {
        borderWidth: .5, //区域边框宽度
        borderColor: 'rgba(31,107,200,0.4)', //区域边框颜色
        areaColor: "transform" //区域颜色
      },
      emphasis: { //鼠标滑过地图高亮的相关设置
        label: {
          show: true,
          color: "#D1D1D1"
        },
        borderWidth: .5,
        borderColor: 'rgba(31,107,200,1)',
        areaColor: "#2E6FCB",
        color: "#D1D1D1"
      }
    },
    data: [{ name: '澳门', value: 20 }, { name: '香港', value: 20 }, { name: '黑龙江', value: 20 }, { name: '吉林', value: 20 }, { name: '辽宁', value: 20 }, { name: '河北', value: 30 }, { name: '宁夏', value: 20 }, { name: '甘肃', value: 20 }, { name: '云南', value: 20 }, { name: '贵州', value: 10 }, { name: '青海', value: 10 }, { name: '内蒙古', value: 0 }, { name: '陕西', value: 0 }, { name: '新疆', value: 0 }, { name: '西藏', value: 0 }, { name: '四川', value: 30 }, { name: '重庆', value: 30 }, { name: '湖南', value: 30 }, { name: '广西', value: 30 }, { name: '北京', value: 50 }, { name: '天津', value: 50 }, { name: '安徽', value: 50 }, { name: '广东', value: 80 }, { name: '上海', value: 80 }, { name: '湖北', value: 80 }, { name: '山东', value: 80 }, { name: '浙江', value: 80 }, { name: '福建', value: 80 }, { name: '河南', value: 50 }, { name: '江苏', value: 80 }, { name: '海南', value: 40 }, { name: '台湾', value: 40 }, { name: '山西', value: 40 }, { name: '江西', value: 40 }]
  }]
};
mapChart.setOption(mapOption);

var tableSwiper = new Swiper('#table-swiper', {
  autoplay: 5000,
  direction: 'vertical',
  slidesPerView: 'auto',
  loop: true
});

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
    text: '乡镇统计',
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
  }, {
    name: '标题六',
    type: 'bar',
    barGap: 1,
    barWidth: 10,
    itemStyle: {
      normal: {
        color: '#A8C5F4',
        label: itemLabel
      }
    },
    data: [230]
  }]
};
barHChart.setOption(barHOption);

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });