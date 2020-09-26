"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ItemGrid = void 0;

var _react = _interopRequireDefault(require("react"));

var _Columns = require("../Columns/Columns");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ItemGrid = /*#__PURE__*/function (_React$Component) {
  _inherits(ItemGrid, _React$Component);

  var _super = _createSuper(ItemGrid);

  function ItemGrid() {
    _classCallCheck(this, ItemGrid);

    return _super.apply(this, arguments);
  }

  _createClass(ItemGrid, [{
    key: "key",
    value: function key() {
      return this.props.key || 'id';
    }
  }, {
    key: "columns",
    value: function columns() {
      return this.props.columns || 3;
    }
  }, {
    key: "renderColumns",
    value: function renderColumns(columns) {
      var _this = this;

      var cols = columns.map(function (col) {
        return _this.renderColumn(col);
      });
      return /*#__PURE__*/_react["default"].createElement(_Columns.Columns, null, cols);
    }
  }, {
    key: "renderColumn",
    value: function renderColumn(col) {
      var items = col.items.map(function (item) {
        return item;
      });
      return /*#__PURE__*/_react["default"].createElement(_Columns.Column, {
        key: col.id
      }, items);
    }
  }, {
    key: "buildColumnizedListing",
    value: function buildColumnizedListing() {
      var items = this.props.children;
      var colCount = this.columns();
      var columns = [];
      var i = 0;

      while (i < colCount) {
        columns.push({
          id: i,
          items: []
        });
        i++;
      }

      console.log('typeof items', _typeof(items));
      console.log('items', items);

      if (!Array.isArray(items)) {
        columns[0].items.push(this.props.children);
        return columns;
      }

      var column = 0;
      items.forEach(function (item) {
        columns[column].items.push(item);

        if (column === 2) {
          column = 0;
        } else {
          column++;
        }
      });
      return columns;
    }
  }, {
    key: "title",
    value: function title() {
      return /*#__PURE__*/_react["default"].createElement("h1", null, this.props.title) || '';
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.buildColumnizedListing();
      var title = this.title();
      var cols = this.renderColumns(data);
      var outerClasses = 'item-grid ';

      if (typeof this.props.outerClasses !== 'undefined') {
        outerClasses = outerClasses + this.props.outerClasses;
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: outerClasses
      }, title, cols);
    }
  }]);

  return ItemGrid;
}(_react["default"].Component);

exports.ItemGrid = ItemGrid;
ItemGrid.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "key",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "columns",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderColumns",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "columns",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderColumn",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "col",
      "type": null
    }],
    "returns": null
  }, {
    "name": "buildColumnizedListing",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "title",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "ItemGrid"
};
var _default = ItemGrid;
exports["default"] = _default;