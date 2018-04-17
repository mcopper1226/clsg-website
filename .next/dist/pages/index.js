'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/megancopper/Desktop/Projects/CLSG Site/site/pages/index.js?entry';


var Index = function Index(props) {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'Posts'), _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, props.mposts.map(function (post) {
    return _react2.default.createElement('li', { key: post.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, _react2.default.createElement(_link2.default, { as: '/p/' + post.slug, href: '/post?slug=' + post.slug, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, _react2.default.createElement('a', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, post.title.rendered)));
  })));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var res, mposts;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _isomorphicUnfetch2.default)('http://18.218.187.95/wp-json/wp/v2/events/?_embed');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          mposts = _context.sent;

          console.log('Show data fetched. Count: ' + mposts.length);

          return _context.abrupt('return', {
            mposts: mposts
          });

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIkxpbmsiLCJmZXRjaCIsIkluZGV4IiwicHJvcHMiLCJtcG9zdHMiLCJtYXAiLCJwb3N0IiwiaWQiLCJzbHVnIiwidGl0bGUiLCJyZW5kZXJlZCIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sUUFBUSxTQUFSLEFBQVEsTUFBQSxBQUFDLE9BQUQ7eUJBQ1osQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0EsMEJBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsV0FDRyxBQUFNLE9BQU4sQUFBYSxJQUFJLFVBQUEsQUFBQyxNQUFEOzJCQUNoQixjQUFBLFFBQUksS0FBSyxLQUFULEFBQWM7a0JBQWQ7b0JBQUEsQUFDRTtBQURGO0tBQUEsa0JBQ0UsQUFBQyxnQ0FBSyxZQUFVLEtBQWhCLEFBQXFCLE1BQVEsc0JBQW9CLEtBQWpELEFBQXNEO2tCQUF0RDtvQkFBQSxBQUNFO0FBREY7dUJBQ0UsY0FBQTs7a0JBQUE7b0JBQUEsQUFBSTtBQUFKO0FBQUEsWUFBSSxBQUFLLE1BSEcsQUFDaEIsQUFDRSxBQUNFLEFBQWU7QUFQYixBQUNaLEFBRUUsQUFDRztBQUpQOztBQWVBLE1BQUEsQUFBTSwyRkFBa0IsbUJBQUE7V0FBQTtnRUFBQTtjQUFBO3VDQUFBO2FBQUE7MEJBQUE7aUJBQ0osaUNBREksQUFDSixBQUFNOzthQUFsQjtBQURnQix5QkFBQTswQkFBQTtpQkFFRCxJQUZDLEFBRUQsQUFBSTs7YUFBbkI7QUFGZ0IsNEJBSXRCOztrQkFBQSxBQUFRLG1DQUFpQyxPQUpuQixBQUl0QixBQUFnRDs7O29CQUoxQixBQU1mO0FBQUEsQUFDTDs7YUFQb0I7YUFBQTswQkFBQTs7QUFBQTtjQUFBO0FBQXhCLEFBV0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21lZ2FuY29wcGVyL0Rlc2t0b3AvUHJvamVjdHMvQ0xTRyBTaXRlL3NpdGUifQ==