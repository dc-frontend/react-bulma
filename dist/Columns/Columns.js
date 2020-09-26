"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Columns = Columns;
exports.Column = Column;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Column
 * @param {*} props
 */
function Columns(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "columns"
  }, props.children);
}

Columns.propTypes = {
  children: _propTypes["default"].any
};
/**
 * Column
 * @param {*} props
 */

function Column(props) {
  var classes = props["class"] ? "column ".concat(props["class"]) : 'column';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes
  }, props.children);
}

Column.propTypes = {
  children: _propTypes["default"].any,
  "class": _propTypes["default"].any
};
Columns.__docgenInfo = {
  "description": "Column\n@param {*} props",
  "methods": [],
  "displayName": "Columns",
  "props": {
    "children": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    }
  }
};
Column.__docgenInfo = {
  "description": "Column\n@param {*} props",
  "methods": [],
  "displayName": "Column",
  "props": {
    "children": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    },
    "class": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    }
  }
};