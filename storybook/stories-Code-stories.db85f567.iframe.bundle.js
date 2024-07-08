"use strict";(self.webpackChunk_oauch_neat_ui=self.webpackChunk_oauch_neat_ui||[]).push([[740],{"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectDestructuringEmpty(t){if(null==t)throw new TypeError("Cannot destructure "+t)}__webpack_require__.d(__webpack_exports__,{A:()=>_objectDestructuringEmpty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)>=0)continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./src/stories/Code.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Code_:()=>Code_,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_neat_ui_neat_ui_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),_home_runner_work_neat_ui_neat_ui_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_components_Code__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Code.tsx"),__jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Code",args:{fs:15,color:"#fff",bgColor:"rgba(0, 0, 0, 0.6)"},component:_components_Code__WEBPACK_IMPORTED_MODULE_1__.A};function Component(_ref){var props=(0,_home_runner_work_neat_ui_neat_ui_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.A)({},((0,_home_runner_work_neat_ui_neat_ui_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref),_ref));return __jsx(_components_Code__WEBPACK_IMPORTED_MODULE_1__.A,props,"return (\n  <Wrapper color={color}>\n    <InWrapper>\n      <CodeText>{children}</CodeText>\n      <CopyButton onClick={onCopy}>{isCopy ? '✅' : '📝'}</CopyButton>\n    </InWrapper>\n  </Wrapper>\n);")}Component.displayName="Component";var Code_={render:Component};Code_.parameters={...Code_.parameters,docs:{...Code_.parameters?.docs,source:{originalSource:"{\n  render: Component\n}",...Code_.parameters?.docs?.source}}};const __namedExportsOrder=["Code_"]},"./src/components/Code.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Code});var taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const hooks_useClipBoard=function useClipBoard(value){var _useState=(0,react.useState)(!1),isCopy=_useState[0],setIsCopy=_useState[1],_useState2=(0,react.useState)(value),copyValue=_useState2[0],setCopyValue=_useState2[1],onCopy=(0,react.useCallback)((function(){setIsCopy(!0),navigator.clipboard.writeText(copyValue)}),[copyValue]);return(0,react.useEffect)((function(){setCopyValue(value)}),[value]),(0,react.useEffect)((function(){isCopy&&window.setTimeout((function(){setIsCopy(!1)}),2e3)}),[isCopy]),{isCopy,setIsCopy,copyValue,setCopyValue,onCopy}};var _templateObject,_templateObject2,_templateObject3,_templateObject4,styles_color=__webpack_require__("./src/styles/color.ts"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_excluded=["children"],__jsx=react.createElement;function Code(_ref){var children=_ref.children,props=(0,objectWithoutProperties.A)(_ref,_excluded),_useClipBoard=hooks_useClipBoard(String(children)),isCopy=_useClipBoard.isCopy,onCopy=_useClipBoard.onCopy;return __jsx(Wrapper,props,__jsx(InWrapper,null,__jsx(CodeText,null,__jsx("pre",null,__jsx("code",null,children))),__jsx(CopyButton,{onClick:onCopy},isCopy?"✅":"📝")))}Code.displayName="Code";const components_Code=Code;var Wrapper=emotion_styled_browser_esm.A.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n  position: relative;\n  width: fit-content;\n  padding: 8px;\n  padding-left: 10px;\n  padding-right: 70px;\n  border-radius: 5px;\n  font-size: ","px;\n  background-color: ",";\n  color: ",";\n"])),(function(_ref2){var _ref2$fs=_ref2.fs;return void 0===_ref2$fs?"15":_ref2$fs}),(function(_ref3){var _ref3$bgColor=_ref3.bgColor;return void 0===_ref3$bgColor?"rgba(0, 0, 0, 0.6)":_ref3$bgColor}),(function(_ref4){var _ref4$color=_ref4.color;return void 0===_ref4$color?styles_color.l.WHITE:_ref4$color})),InWrapper=emotion_styled_browser_esm.A.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),CodeText=emotion_styled_browser_esm.A.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)(["\n  white-space: pre-line;\n  line-height: 25px;\n"]))),CopyButton=emotion_styled_browser_esm.A.button(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.A)(["\n  all: unset;\n  cursor: pointer;\n  position: absolute;\n  top: 5px;\n  right: 8px;\n"])));try{Code.displayName="Code",Code.__docgenInfo={description:"",displayName:"Code",props:{fs:{defaultValue:null,description:"",name:"fs",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Code.tsx#Code"]={docgenInfo:Code.__docgenInfo,name:"Code",path:"src/components/Code.tsx#Code"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>COLORS});var COLORS={PRIMARY:"#2E8B57",BLACK:"#000",BLACK_SUB:"#2b2b2b",WHITE:"#FFF",GRAY:"#818181",LightGray:"#D3D3D3",HOVER_TEXT:"#303134",DISABLED:" rgba(0, 0, 0, 0.2);",HIGH_LIGHT:"#FFFF00",SKIN:"#F5DDC2",T_SHIRTS:"#01641D",MOUSE:"#F3C0B9",SUCCESS:"#EDF7ED",ERROR:"#FCEDEC",WARNING:"#FFF3E5",INFO:"#E5F5FD",FILL_SUCCESS:"#388E3C",FILL_ERROR:"#FF4242",FILL_WARNING:"#F17C00",FILL_INFO:"#0288D1",CODE_BG:"#3B404B"}}}]);