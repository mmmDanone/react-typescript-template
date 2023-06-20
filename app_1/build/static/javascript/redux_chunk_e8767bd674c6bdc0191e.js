"use strict";
(globalThis["webpackChunk"] = globalThis["webpackChunk"] || []).push([["redux"],{

/***/ "./components/ReduxCounter/ReduxCounter.tsx":
/*!**************************************************!*\
  !*** ./components/ReduxCounter/ReduxCounter.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReduxCounter": () => (/* binding */ ReduxCounter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxHooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxHooks */ "./redux/hooks/index.ts");
/* harmony import */ var _redux_slices_counter_counterSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/counter/counterSlice */ "./redux/slices/counter/counterSlice.ts");




const ReduxCounter = () => {
  const dispatch = (0,_reduxHooks__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const counter = (0,_reduxHooks__WEBPACK_IMPORTED_MODULE_2__.useSelector)(store => store.counter.value);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
      children: counter
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({
        onClick: () => dispatch((0,_redux_slices_counter_counterSlice__WEBPACK_IMPORTED_MODULE_3__.decrement)())
      }, {
        children: "-1"
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({
        onClick: () => dispatch((0,_redux_slices_counter_counterSlice__WEBPACK_IMPORTED_MODULE_3__.increment)())
      }, {
        children: "+1"
      }))]
    })]
  });
};

/***/ }),

/***/ "./components/ReduxCounter/index.ts":
/*!******************************************!*\
  !*** ./components/ReduxCounter/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReduxCounter": () => (/* reexport safe */ _ReduxCounter__WEBPACK_IMPORTED_MODULE_0__.ReduxCounter)
/* harmony export */ });
/* harmony import */ var _ReduxCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReduxCounter */ "./components/ReduxCounter/ReduxCounter.tsx");


/***/ }),

/***/ "./pages/Redux.ts":
/*!************************!*\
  !*** ./pages/Redux.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _components_ReduxCounter__WEBPACK_IMPORTED_MODULE_0__.ReduxCounter)
/* harmony export */ });
/* harmony import */ var _components_ReduxCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/ReduxCounter */ "./components/ReduxCounter/index.ts");


/***/ }),

/***/ "./redux/hooks/index.ts":
/*!******************************!*\
  !*** ./redux/hooks/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDispatch": () => (/* reexport safe */ _useDispatch__WEBPACK_IMPORTED_MODULE_1__.useDispatch),
/* harmony export */   "useSelector": () => (/* reexport safe */ _useSelector__WEBPACK_IMPORTED_MODULE_0__.useSelector)
/* harmony export */ });
/* harmony import */ var _useSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useSelector */ "./redux/hooks/useSelector.ts");
/* harmony import */ var _useDispatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useDispatch */ "./redux/hooks/useDispatch.ts");



/***/ }),

/***/ "./redux/hooks/useDispatch.ts":
/*!************************************!*\
  !*** ./redux/hooks/useDispatch.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDispatch": () => (/* binding */ useDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");

const useDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch;

/***/ }),

/***/ "./redux/hooks/useSelector.ts":
/*!************************************!*\
  !*** ./redux/hooks/useSelector.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSelector": () => (/* binding */ useSelector)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");

const useSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2phdmFzY3JpcHQvcmVkdXhfY2h1bmtfZTg3NjdiZDY3NGM2YmRjMDE5MWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFGQTtBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBR2pCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlZHV4Q291bnRlci9SZWR1eENvdW50ZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVkdXhDb3VudGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3BhZ2VzL1JlZHV4LnRzIiwid2VicGFjazovLy8uL3JlZHV4L2hvb2tzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3JlZHV4L2hvb2tzL3VzZURpc3BhdGNoLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2hvb2tzL3VzZVNlbGVjdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaH0gZnJvbSAnQHJlZHV4SG9va3MnO1xuaW1wb3J0IHtpbmNyZW1lbnQsIGRlY3JlbWVudH0gZnJvbSAnQC9yZWR1eC9zbGljZXMvY291bnRlci9jb3VudGVyU2xpY2UnO1xuXG5leHBvcnQgY29uc3QgUmVkdXhDb3VudGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBjb3VudGVyID0gdXNlU2VsZWN0b3IoKHN0b3JlKSA9PiBzdG9yZS5jb3VudGVyLnZhbHVlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e2NvdW50ZXJ9PC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZGVjcmVtZW50KCkpfT4tMTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGluY3JlbWVudCgpKX0+KzE8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vUmVkdXhDb3VudGVyJztcbiIsImV4cG9ydCB7UmVkdXhDb3VudGVyIGFzIGRlZmF1bHR9IGZyb20gJ0AvY29tcG9uZW50cy9SZWR1eENvdW50ZXInO1xuIiwiZXhwb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSAnLi91c2VTZWxlY3Rvcic7XG5leHBvcnQge3VzZURpc3BhdGNofSBmcm9tICcuL3VzZURpc3BhdGNoJztcbiIsImltcG9ydCB7dXNlRGlzcGF0Y2ggYXMgdXNlRGlzcGF0Y2hEZWZhdWx0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgdHlwZSB7QXBwRGlzcGF0Y2h9IGZyb20gJy4uL3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IHVzZURpc3BhdGNoOiAoKSA9PiBBcHBEaXNwYXRjaCA9IHVzZURpc3BhdGNoRGVmYXVsdDtcbiIsImltcG9ydCB7VHlwZWRVc2VTZWxlY3Rvckhvb2ssIHVzZVNlbGVjdG9yIGFzIHVzZVNlbGVjdG9yRGVmYXVsdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtBcHBSb290U3RhdGV9IGZyb20gJy4uL3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IHVzZVNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxBcHBSb290U3RhdGU+ID0gdXNlU2VsZWN0b3JEZWZhdWx0O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9