var _Context$init;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}function _wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return _setPrototypeOf(Wrapper,Class);};return _wrapNativeSuper(Class);}function _construct(Parent,args,Class){if(_isNativeReflectConstruct()){_construct=Reflect.construct.bind();}else{_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)_setPrototypeOf(instance,Class.prototype);return instance;};}return _construct.apply(null,arguments);}function _isNativeFunction(fn){try{return Function.toString.call(fn).indexOf("[native code]")!==-1;}catch(e){return typeof fn==="function";}}function _get(){if(typeof Reflect!=="undefined"&&Reflect.get){_get=Reflect.get.bind();}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=Object.getOwnPropertyDescriptor(base,property);if(desc.get){return desc.get.call(arguments.length<3?target:receiver);}return desc.value;};}return _get.apply(this,arguments);}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break;}return object;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});Object.defineProperty(subClass,"prototype",{writable:false});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}else if(call!==void 0){throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _defineProperty(obj,key,value){key=_toPropertyKey(key);if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _createForOfIteratorHelper(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};},e:function e(_e){throw _e;},f:F};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion=true,didErr=false,err;return{s:function s(){it=it.call(o);},n:function n(){var step=it.next();normalCompletion=step.done;return step;},e:function e(_e2){didErr=true;err=_e2;},f:function f(){try{if(!normalCompletion&&it["return"]!=null)it["return"]();}finally{if(didErr)throw err;}}};}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2;}function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1;}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r;}finally{try{if(!f&&null!=t["return"]&&(u=t["return"](),Object(u)!==u))return;}finally{if(o)throw n;}}return a;}}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,"prototype",{writable:false});return Constructor;}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return _typeof(key)==="symbol"?key:String(key);}function _toPrimitive(input,hint){if(_typeof(input)!=="object"||input===null)return input;var prim=input[Symbol.toPrimitive];if(prim!==undefined){var res=prim.call(input,hint||"default");if(_typeof(res)!=="object")return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return(hint==="string"?String:Number)(input);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * Utility constants and functions
 */var MAX_INT=2147483647;var MIN_INT=-2147483648;var MAX_LONG=Number.MAX_SAFE_INTEGER;var MIN_LONG=Number.MIN_SAFE_INTEGER;// special value to identify missing items. treated differently from undefined
var MISSING=Symbol("missing");var CYCLE_FOUND_ERROR=Object.freeze(new Error("mingo: cycle detected while processing object/array"));var ARRAY_PROTO=Object.getPrototypeOf([]);var OBJECT_PROTO=Object.getPrototypeOf({});var OBJECT_TAG="[object Object]";var OBJECT_TYPE_RE=/^\[object ([a-zA-Z0-9]+)\]$/;var Null=/*#__PURE__*/_createClass(function Null(){_classCallCheck(this,Null);});var Undefined=/*#__PURE__*/_createClass(function Undefined(){_classCallCheck(this,Undefined);});var getConstructor=function getConstructor(v){if(v===null)return Null;if(v===undefined)return Undefined;return v.constructor;};/**
 * Uses the simple hash method as described in Effective Java.
 * @see https://stackoverflow.com/a/113600/1370481
 * @param value The value to hash
 * @returns {number}
 */var DEFAULT_HASH_FUNCTION=function DEFAULT_HASH_FUNCTION(value){var s=stringify(value);var hash=0;var i=s.length;while(i)hash=(hash<<5)-hash^s.charCodeAt(--i);return hash>>>0;};// no array, object, or function types
var JS_SIMPLE_TYPES=new Set(["null","undefined","boolean","number","string","date","regexp"]);var IMMUTABLE_TYPES_SET=new Set([Undefined,Null,Boolean,String,Number]);/** Convert simple value to string representation. */var toString$1=function toString$1(v){return v.toString();};// eslint-disable-line @typescript-eslint/no-base-to-string
/** Convert a typed array to string representation. */var typedArrayToString=function typedArrayToString(v){return"".concat(getConstructor(v).name,"[").concat(v.toString(),"]");};// eslint-disable-line @typescript-eslint/no-base-to-string
/** Map of constructors to string converter functions */var STRING_CONVERTERS=new Map([[Number,toString$1],[Boolean,toString$1],[RegExp,toString$1],[Function,toString$1],[Symbol,toString$1],[BigInt,function(n){return"0x"+n.toString(16);}],[Date,function(d){return d.toISOString();}],[String,JSON.stringify],[Null,function(_){return"null";}],[Undefined,function(_){return"undefined";}],[Int8Array,typedArrayToString],[Uint8Array,typedArrayToString],[Uint8ClampedArray,typedArrayToString],[Int16Array,typedArrayToString],[Uint16Array,typedArrayToString],[Int32Array,typedArrayToString],[Uint32Array,typedArrayToString],[Float32Array,typedArrayToString],[Float64Array,typedArrayToString],[BigInt64Array,typedArrayToString],[BigUint64Array,typedArrayToString]]);/** MongoDB sort comparison order. https://www.mongodb.com/docs/manual/reference/bson-type-comparison-order */var SORT_ORDER_BY_TYPE={"null":0,undefined:0,number:1,string:2,object:3,array:4,"boolean":5,date:6,regexp:7,"function":8};/**
 * Compare function which adheres to MongoDB comparison order.
 *
 * @param a The first value
 * @param b The second value
 * @returns {Number}
 */var compare$1=function compare$1(a,b){if(a===MISSING)a=undefined;if(b===MISSING)b=undefined;var _map=[a,b].map(function(n){return SORT_ORDER_BY_TYPE[getType(n).toLowerCase()];}),_map2=_slicedToArray(_map,2),u=_map2[0],v=_map2[1];if(u!==v)return u-v;// number | string | date
if(u===1||u===2||u===6){if(a<b)return-1;if(a>b)return 1;return 0;}// check for equivalence equality
if(isEqual(a,b))return 0;if(a<b)return-1;if(a>b)return 1;// if we get here we are comparing a type that does not make sense.
return 0;};function assert(condition,message){if(!condition)throw new Error(message);}var isTypedArray$2=function isTypedArray$2(v){var proto=Object.getPrototypeOf(getConstructor(v));return proto&&proto.name==="TypedArray";};/**
 * Deep clone an object. Value types and immutable objects are returned as is.
 */var cloneDeep=function cloneDeep(obj){if(IMMUTABLE_TYPES_SET.has(getConstructor(obj)))return obj;var cycle=new Set();var clone=function clone(val){if(cycle.has(val))throw CYCLE_FOUND_ERROR;var ctor=getConstructor(val);if(IMMUTABLE_TYPES_SET.has(ctor))return val;try{// arrays
if(isArray$2(val)){cycle.add(val);return val.map(clone);}// object literals
if(isObject$1(val)){cycle.add(val);var res={};for(var k in val)res[k]=clone(val[k]);return res;}}finally{cycle["delete"](val);}// dates, regex, typed arrays
if(ctor===Date||ctor===RegExp||isTypedArray$2(val)){return new ctor(val);}return val;};return clone(obj);};/**
 * Returns the name of type as specified in the tag returned by a call to Object.prototype.toString
 * @param v A value
 */var getType=function getType(v){return OBJECT_TYPE_RE.exec(Object.prototype.toString.call(v))[1];};var isBoolean=function isBoolean(v){return typeof v==="boolean";};var isString$1=function isString$1(v){return typeof v==="string";};var isNumber=function isNumber(v){return!isNaN(v)&&typeof v==="number";};var isArray$2=Array.isArray;var isObject$1=function isObject$1(v){if(!v)return false;var proto=Object.getPrototypeOf(v);return(proto===OBJECT_PROTO||proto===null)&&OBJECT_TAG===Object.prototype.toString.call(v);};//  objects, arrays, functions, date, custom object
var isObjectLike$1=function isObjectLike$1(v){return v===Object(v);};var isDate=function isDate(v){return v instanceof Date;};var isRegExp$2=function isRegExp$2(v){return v instanceof RegExp;};var isFunction$1=function isFunction$1(v){return typeof v==="function";};var isNil=function isNil(v){return v===null||v===undefined;};var inArray=function inArray(arr,item){return arr.includes(item);};var notInArray=function notInArray(arr,item){return!inArray(arr,item);};var truthy=function truthy(arg){var strict=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;return!!arg||strict&&arg==="";};var isEmpty$1=function isEmpty$1(x){return isNil(x)||isString$1(x)&&!x||x instanceof Array&&x.length===0||isObject$1(x)&&Object.keys(x).length===0;};var isMissing=function isMissing(v){return v===MISSING;};/** ensure a value is an array or wrapped within one. */var ensureArray=function ensureArray(x){return x instanceof Array?x:[x];};var has$1=function has$1(obj,prop){return!!obj&&Object.prototype.hasOwnProperty.call(obj,prop);};var mergeable=function mergeable(left,right){return isObject$1(left)&&isObject$1(right)||isArray$2(left)&&isArray$2(right);};/**
 * Deep merge objects or arrays.
 * When the inputs have unmergeable types, the  right hand value is returned.
 * If inputs are arrays and options.flatten is set, elements in the same position are merged together. Remaining elements are appended to the target object.
 * If options.flatten is false, the right hand value is just appended to the left-hand value.
 * @param target {Object|Array} the target to merge into
 * @param obj {Object|Array} the source object
 */function merge(target,obj,options){// default options
options=options||{flatten:false};// take care of missing inputs
if(isMissing(target)||isNil(target))return obj;if(isMissing(obj)||isNil(obj))return target;// fail only on initial input.
if(!mergeable(target,obj)){if(options.skipValidation)return obj||target;throw Error("mismatched types. must both be array or object");}// skip validation after initial input.
options.skipValidation=true;if(isArray$2(target)){var result=target;var input=obj;if(options.flatten){var i=0;var j=0;while(i<result.length&&j<input.length){result[i]=merge(result[i++],input[j++],options);}while(j<input.length){result.push(obj[j++]);}}else{into(result,input);}}else{for(var k in obj){target[k]=merge(target[k],obj[k],options);}}return target;}function buildHashIndex(arr){var hashFunction=arguments.length>1&&arguments[1]!==undefined?arguments[1]:DEFAULT_HASH_FUNCTION;var map=new Map();arr.forEach(function(o,i){var h=hashCode(o,hashFunction);if(map.has(h)){if(!map.get(h).some(function(j){return isEqual(arr[j],o);})){map.get(h).push(i);}}else{map.set(h,[i]);}});return map;}/**
 * Returns the intersection of multiple arrays.
 *
 * @param  {Array} input An array of arrays from which to find intersection.
 * @param  {Function} hashFunction Custom function to hash values, default the hashCode method
 * @return {Array} Array of intersecting values.
 */function intersection(input){var hashFunction=arguments.length>1&&arguments[1]!==undefined?arguments[1]:DEFAULT_HASH_FUNCTION;// if any array is empty, there is no intersection
if(input.some(function(arr){return arr.length==0;}))return[];if(input.length===1)return Array.from(input);// sort input arrays by to get smallest array
// const sorted = sortBy(input, (a: RawArray) => a.length) as RawArray[];
var sortedIndex=sortBy(input.map(function(a,i){return[i,a.length];}),function(a){return a[1];});// get the smallest
var smallest=input[sortedIndex[0][0]];// get hash index of smallest array
var map=buildHashIndex(smallest,hashFunction);// hashIndex for remaining arrays.
var rmap=new Map();// final intersection results and index of first occurrence.
var results=new Array();map.forEach(function(v,k){var lhs=v.map(function(j){return smallest[j];});var res=lhs.map(function(_){return 0;});// used to track first occurence of value in order of the original input array.
var stable=lhs.map(function(_){return[sortedIndex[0][0],0];});var found=false;var _loop=function _loop(i){var _sortedIndex$i=_slicedToArray(sortedIndex[i],2),currIndex=_sortedIndex$i[0],_=_sortedIndex$i[1];var arr=input[currIndex];if(!rmap.has(i))rmap.set(i,buildHashIndex(arr));// we found a match. let's confirm.
if(rmap.get(i).has(k)){var rhs=rmap.get(i).get(k).map(function(j){return arr[j];});// confirm the intersection with an equivalence check.
found=lhs.map(function(s,n){return rhs.some(function(t,m){// we expect only one to match here since these are just collisions.
var p=res[n];if(isEqual(s,t)){res[n]++;// track position of value ordering for stability.
if(currIndex<stable[n][0]){stable[n]=[currIndex,rmap.get(i).get(k)[m]];}}return p<res[n];});}).some(Boolean);}// found nothing, so exclude value. this was just a hash collision.
if(!found)return{v:void 0};},_ret;for(var i=1;i<input.length;i++){_ret=_loop(i);if(_ret)return _ret.v;}// extract value into result if we found an intersection.
// we find an intersection if the frequency counter matches the count of the remaining arrays.
if(found){into(results,res.map(function(n,i){return n===input.length-1?[lhs[i],stable[i]]:MISSING;}).filter(function(n){return n!==MISSING;}));}});return results.sort(function(a,b){var _a2=_slicedToArray(a,2),_i=_a2[0],_a2$=_slicedToArray(_a2[1],2),u=_a2$[0],m=_a2$[1];var _b2=_slicedToArray(b,2),_j=_b2[0],_b2$=_slicedToArray(_b2[1],2),v=_b2$[0],n=_b2$[1];var r=compare$1(u,v);if(r!==0)return r;return compare$1(m,n);}).map(function(v){return v[0];});}/**
 * Flatten the array
 *
 * @param {Array} xs The array to flatten
 * @param {Number} depth The number of nested lists to iterate
 */function flatten$1(xs){var depth=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var arr=new Array();function flatten2(ys,n){for(var i=0,len=ys.length;i<len;i++){if(isArray$2(ys[i])&&(n>0||n<0)){flatten2(ys[i],Math.max(-1,n-1));}else{arr.push(ys[i]);}}}flatten2(xs,depth);return arr;}/** Returns all members of the value in an object literal. */var getMembersOf=function getMembersOf(value){var _ref=[Object.getPrototypeOf(value),Object.getOwnPropertyNames(value)],proto=_ref[0],names=_ref[1];// save effective prototype
var activeProto=proto;// traverse the prototype hierarchy until we get property names or hit the bottom prototype.
while(!names.length&&proto!==OBJECT_PROTO&&proto!==ARRAY_PROTO){activeProto=proto;names=Object.getOwnPropertyNames(proto);proto=Object.getPrototypeOf(proto);}var o={};names.forEach(function(k){return o[k]=value[k];});return[o,activeProto];};/**
 * Determine whether two values are the same or strictly equivalent.
 * Checking whether values are the same only applies to built in objects.
 * For user-defined objects this checks for only referential equality so
 * two different instances with the same values are not equal.
 *
 * @param  {*}  a The first value
 * @param  {*}  b The second value
 * @return {Boolean}   Result of comparison
 */function isEqual(a,b){var lhs=[a];var rhs=[b];while(lhs.length>0){a=lhs.pop();b=rhs.pop();// strictly equal must be equal. matches simple and referentially equal values.
if(a===b)continue;// unequal types and functions (unless referentially equivalent) cannot be equal.
var ctor=getConstructor(a);if(ctor!==getConstructor(b)||isFunction$1(a))return false;// string convertable types
if(STRING_CONVERTERS.has(ctor)){var str=STRING_CONVERTERS.get(ctor);// eslint-disable-next-line @typescript-eslint/no-base-to-string
if(str(a)!==str(b))return false;// values are equal, so move next
continue;}// handle array types
if(ctor===Array){var xs=a;var ys=b;if(xs.length!==ys.length)return false;// add array items for comparison
into(lhs,xs);into(rhs,ys);}else if(ctor===Object){// literal object equality
// deep compare objects
var aKeys=Object.keys(a);var bKeys=Object.keys(b);// validate keys
if(aKeys.length!==bKeys.length)return false;if(new Set(aKeys.concat(bKeys)).size!=aKeys.length)return false;// push values to be compared
aKeys.forEach(function(k){lhs.push(a[k]);rhs.push(b[k]);});}else{// user-defined type detected.
// we don't try to compare user-defined types (even though we could...shhhh).
return false;}}return lhs.length===0;}/**
 * Encode value to string using a simple non-colliding stable scheme.
 * Handles user-defined types by processing keys on first non-empty prototype.
 * If a user-defined type provides a "toJSON" function, it is used.
 *
 * @param value The value to convert to a string representation.
 * @returns {String}
 */function stringify(value){var cycle=new Set();// stringify with cycle check
var str=function str(v){var ctor=getConstructor(v);// string convertable types
if(STRING_CONVERTERS.has(ctor)){return STRING_CONVERTERS.get(ctor)(v);}var tag=ctor===Object?"":ctor.name;// handle JSONable objects.
if(isFunction$1(v["toJSON"])){return"".concat(tag,"(").concat(JSON.stringify(v),")");}// handle cycles
if(cycle.has(v))throw CYCLE_FOUND_ERROR;cycle.add(v);try{// handle array
if(ctor===Array){return"["+v.map(str).join(",")+"]";}// handle user-defined object
if(ctor!==Object){// handle user-defined types or object literals.
var _getMembersOf=getMembersOf(v),_getMembersOf2=_slicedToArray(_getMembersOf,2),members=_getMembersOf2[0],_=_getMembersOf2[1];// custom type derived from array.
if(isArray$2(v)){// include other members as part of array elements.
return"".concat(tag).concat(str([].concat(_toConsumableArray(v),[members])));}// get members as literal
v=members;}var objKeys=Object.keys(v);objKeys.sort();return"".concat(tag,"{")+objKeys.map(function(k){return"".concat(k,":").concat(str(v[k]));}).join(",")+"}";}finally{cycle["delete"](v);}};// convert to string
return str(value);}/**
 * Generate hash code
 * This selected function is the result of benchmarking various hash functions.
 * This version performs well and can hash 10^6 documents in ~3s with on average 100 collisions.
 *
 * @param value
 * @returns {number|null}
 */function hashCode(value,hashFunction){hashFunction=hashFunction||DEFAULT_HASH_FUNCTION;if(isNil(value))return null;return hashFunction(value).toString();}/**
 * Returns a (stably) sorted copy of list, ranked in ascending order by the results of running each value through iteratee
 *
 * This implementation treats null/undefined sort keys as less than every other type
 *
 * @param {Array}   collection
 * @param {Function} keyFn The sort key function used to resolve sort keys
 * @param {Function} comparator The comparator function to use for comparing keys. Defaults to standard comparison via `compare(...)`
 * @return {Array} Returns a new sorted array by the given key and comparator function
 */function sortBy(collection,keyFn){var comparator=arguments.length>2&&arguments[2]!==undefined?arguments[2]:compare$1;if(isEmpty$1(collection))return collection;var sorted=new Array();var result=new Array();for(var i=0;i<collection.length;i++){var obj=collection[i];var key=keyFn(obj,i);if(isNil(key)){result.push(obj);}else{sorted.push([key,obj]);}}// use native array sorting but enforce stableness
sorted.sort(function(a,b){return comparator(a[0],b[0]);});return into(result,sorted.map(function(o){return o[1];}));}/**
 * Groups the collection into sets by the returned key
 *
 * @param collection
 * @param keyFn {Function} to compute the group key of an item in the collection
 * @returns {GroupByOutput}
 */function groupBy$2(collection,keyFn){var hashFunction=arguments.length>2&&arguments[2]!==undefined?arguments[2]:DEFAULT_HASH_FUNCTION;if(collection.length<1)return new Map();// map of hash to collided values
var lookup=new Map();// map of raw key values to objects.
var result=new Map();var _loop2=function _loop2(){var obj=collection[i];var key=keyFn(obj,i);var hash=hashCode(key,hashFunction);if(hash===null){if(result.has(null)){result.get(null).push(obj);}else{result.set(null,[obj]);}}else{// find if we can match a hash for which the value is equivalent.
// this is used to deal with collisions.
var existingKey=lookup.has(hash)?lookup.get(hash).find(function(k){return isEqual(k,key);}):null;// collision detected or first time seeing key
if(isNil(existingKey)){// collision detected or first entry so we create a new group.
result.set(key,[obj]);// upload the lookup with the collided key
if(lookup.has(hash)){lookup.get(hash).push(key);}else{lookup.set(hash,[key]);}}else{// key exists
result.get(existingKey).push(obj);}}};for(var i=0;i<collection.length;i++){_loop2();}return result;}// max elements to push.
// See argument limit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
var MAX_ARRAY_PUSH=50000;/**
 * Merge elements into the dest
 *
 * @param {*} target The target object
 * @param {*} rest The array of elements to merge into dest
 */function into(target){for(var _len=arguments.length,rest=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){rest[_key-1]=arguments[_key];}if(target instanceof Array){return rest.reduce(function(acc,arr){// push arrary in batches to handle large inputs
var i=Math.ceil(arr.length/MAX_ARRAY_PUSH);var begin=0;while(i-->0){Array.prototype.push.apply(acc,arr.slice(begin,begin+MAX_ARRAY_PUSH));begin+=MAX_ARRAY_PUSH;}return acc;},target);}else{// merge objects. same behaviour as Object.assign
return rest.filter(isObjectLike$1).reduce(function(acc,item){Object.assign(acc,item);return acc;},target);}}// mingo internal
/**
 * Retrieve the value of a given key on an object
 * @param obj
 * @param key
 * @returns {*}
 * @private
 */function getValue$1(obj,key){return isObjectLike$1(obj)?obj[key]:undefined;}/**
 * Unwrap a single element array to specified depth
 * @param {Array} arr
 * @param {Number} depth
 */function unwrap(arr,depth){if(depth<1)return arr;while(depth--&&arr.length===1)arr=arr[0];return arr;}/**
 * Resolve the value of the field (dot separated) on the given object
 * @param obj {Object} the object context
 * @param selector {String} dot separated path to field
 * @returns {*}
 */function resolve(obj,selector,options){var depth=0;function resolve2(o,path){var value=o;var _loop3=function _loop3(){var field=path[i];var isText=/^\d+$/.exec(field)===null;// using instanceof to aid typescript compiler
if(isText&&value instanceof Array){// On the first iteration, we check if we received a stop flag.
// If so, we stop to prevent iterating over a nested array value
// on consecutive object keys in the selector.
if(i===0&&depth>0)return 0;// break
depth+=1;// only look at the rest of the path
var subpath=path.slice(i);value=value.reduce(function(acc,item){var v=resolve2(item,subpath);if(v!==undefined)acc.push(v);return acc;},[]);return 0;// break
}else{value=getValue$1(value,field);}if(value===undefined)return 0;// break
},_ret2;for(var i=0;i<path.length;i++){_ret2=_loop3();if(_ret2===0)break;}return value;}var result=JS_SIMPLE_TYPES.has(getType(obj).toLowerCase())?obj:resolve2(obj,selector.split("."));return result instanceof Array&&(options===null||options===void 0?void 0:options.unwrapArray)?unwrap(result,depth):result;}/**
 * Returns the full object to the resolved value given by the selector.
 * This function excludes empty values as they aren't practically useful.
 *
 * @param obj {Object} the object context
 * @param selector {String} dot separated path to field
 */function resolveGraph(obj,selector,options){var names=selector.split(".");var key=names[0];// get the next part of the selector
var next=names.slice(1).join(".");var isIndex=/^\d+$/.exec(key)!==null;var hasNext=names.length>1;var result;var value;if(obj instanceof Array){if(isIndex){result=getValue$1(obj,Number(key));if(hasNext){result=resolveGraph(result,next,options);}result=[result];}else{result=[];var _iterator=_createForOfIteratorHelper(obj),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var item=_step.value;value=resolveGraph(item,selector,options);if(options===null||options===void 0?void 0:options.preserveMissing){if(value===undefined){value=MISSING;}result.push(value);}else if(value!==undefined){result.push(value);}}}catch(err){_iterator.e(err);}finally{_iterator.f();}}}else{value=getValue$1(obj,key);if(hasNext){value=resolveGraph(value,next,options);}if(value===undefined)return undefined;result=(options===null||options===void 0?void 0:options.preserveKeys)?Object.assign({},obj):{};result[key]=value;}return result;}/**
 * Filter out all MISSING values from the object in-place
 *
 * @param obj The object to filter
 */function filterMissing(obj){if(obj instanceof Array){for(var i=obj.length-1;i>=0;i--){if(obj[i]===MISSING){obj.splice(i,1);}else{filterMissing(obj[i]);}}}else if(isObject$1(obj)){for(var k in obj){if(has$1(obj,k)){filterMissing(obj[k]);}}}}var NUMBER_RE=/^\d+$/;/**
 * Walk the object graph and execute the given transform function
 *
 * @param  {Object|Array} obj   The object to traverse.
 * @param  {String} selector    The selector to navigate.
 * @param  {Callback} fn Callback to execute for value at the end the traversal.
 * @param  {WalkOptions} options The opetions to use for the function.
 * @return {*}
 */function walk(obj,selector,fn,options){var names=selector.split(".");var key=names[0];var next=names.slice(1).join(".");if(names.length===1){if(isObject$1(obj)||isArray$2(obj)&&NUMBER_RE.test(key)){fn(obj,key);}}else{// force the rest of the graph while traversing
if((options===null||options===void 0?void 0:options.buildGraph)&&isNil(obj[key])){obj[key]={};}// get the next item
var item=obj[key];// nothing more to do
if(!item)return;// we peek to see if next key is an array index.
var isNextArrayIndex=!!(names.length>1&&NUMBER_RE.test(names[1]));// if we have an array value but the next key is not an index and the 'descendArray' option is set,
// we walk each item in the array separately. This allows for handling traversing keys for objects
// nested within an array.
//
// Eg: Given { array: [ {k:1}, {k:2}, {k:3} ] }
//  - individual objecs can be traversed with "array.k"
//  - a specific object can be traversed with "array.1"
if(item instanceof Array&&(options===null||options===void 0?void 0:options.descendArray)&&!isNextArrayIndex){item.forEach(function(e){return walk(e,next,fn,options);});}else{walk(item,next,fn,options);}}}/**
 * Set the value of the given object field
 *
 * @param obj {Object|Array} the object context
 * @param selector {String} path to field
 * @param value {*} the value to set. if it is function, it is invoked with the old value and must return the new value.
 */function setValue(obj,selector,value){walk(obj,selector,function(item,key){item[key]=isFunction$1(value)?value(item[key]):value;},{buildGraph:true});}/**
 * Removes an element from the container.
 * If the selector resolves to an array and the leaf is a non-numeric key,
 * the remove operation will be performed on objects of the array.
 *
 * @param obj {ArrayOrObject} object or array
 * @param selector {String} dot separated path to element to remove
 */function removeValue(obj,selector,options){walk(obj,selector,function(item,key){if(item instanceof Array){if(/^\d+$/.test(key)){item.splice(parseInt(key),1);}else if(options&&options.descendArray){var _iterator2=_createForOfIteratorHelper(item),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var elem=_step2.value;if(isObject$1(elem)){delete elem[key];}}}catch(err){_iterator2.e(err);}finally{_iterator2.f();}}}else if(isObject$1(item)){delete item[key];}},options);}var OPERATOR_NAME_PATTERN=/^\$[a-zA-Z0-9_]+$/;/**
 * Check whether the given name passes for an operator. We assume AnyVal field name starting with '$' is an operator.
 * This is cheap and safe to do since keys beginning with '$' should be reserved for internal use.
 * @param {String} name
 */function isOperator(name){return OPERATOR_NAME_PATTERN.test(name);}/**
 * Simplify expression for easy evaluation with query operators map
 * @param expr
 * @returns {*}
 */function normalize(expr){// normalized primitives
if(JS_SIMPLE_TYPES.has(getType(expr).toLowerCase())){return isRegExp$2(expr)?{$regex:expr}:{$eq:expr};}// normalize object expression. using ObjectLike handles custom types
if(isObjectLike$1(expr)){var exprObj=expr;// no valid query operator found, so we do simple comparison
if(!Object.keys(exprObj).some(isOperator)){return{$eq:expr};}// ensure valid regex
if(has$1(expr,"$regex")){var newExpr=Object.assign({},expr);newExpr["$regex"]=new RegExp(expr["$regex"],expr["$options"]);delete newExpr["$options"];return newExpr;}}return expr;}/**
 * This controls how input and output documents are processed to meet different application needs.
 * Each mode has different trade offs for; immutability, reference sharing, and performance.
 */var ProcessingMode;(function(ProcessingMode){/**
     * Clone inputs prior to processing, and the outputs if some objects graphs may be shared.
     * Use this option to keep input collection immutable and to get distinct output objects.
     *
     * Note: This option is expensive and reduces performance.
     */ProcessingMode["CLONE_ALL"]="CLONE_ALL";/**
     * Clones inputs prior to processing.
     * This option will return output objects with shared graphs in their path if specific operators are used.
     * Use this option to keep the input collection immutable.
     *
     */ProcessingMode["CLONE_INPUT"]="CLONE_INPUT";/**
     * Clones the output to return distinct objects with no shared paths.
     * This option modifies the input collection and during processing.
     */ProcessingMode["CLONE_OUTPUT"]="CLONE_OUTPUT";/**
     * Turn off cloning and modifies the input collection as needed.
     * This option will also return output objects with shared paths in their graph when specific operators are used.
     * This option provides the greatest speedup for the biggest tradeoff.
     * When using the aggregation pipeline, you can use the "$out" operator to collect immutable intermediate results.
     *
     * @default
     */ProcessingMode["CLONE_OFF"]="CLONE_OFF";})(ProcessingMode||(ProcessingMode={}));/** Custom type to facilitate type checking for global options */var ComputeOptions=/*#__PURE__*/function(){function ComputeOptions(_opts,/** Reference to the root object when processing subgraphs of the object. */_root,_local){var timestamp=arguments.length>3&&arguments[3]!==undefined?arguments[3]:Date.now();_classCallCheck(this,ComputeOptions);this._opts=_opts;this._root=_root;this._local=_local;this.timestamp=timestamp;this.update(_root,_local);}/**
     * Initialize new ComputeOptions.
     *
     * @param options
     * @param root
     * @param local
     * @returns {ComputeOptions}
     */_createClass(ComputeOptions,[{key:"update",value:/** Updates the internal mutable state. */function update(root,local){var _a;// NOTE: this is done for efficiency to avoid creating too many intermediate options objects.
this._root=root;this._local=local?Object.assign({},local,{variables:Object.assign({},(_a=this._local)===null||_a===void 0?void 0:_a.variables,local===null||local===void 0?void 0:local.variables)}):local;return this;}},{key:"getOptions",value:function getOptions(){return Object.freeze(Object.assign(Object.assign({},this._opts),{context:Context.from(this._opts.context)}));}},{key:"root",get:function get(){return this._root;}},{key:"local",get:function get(){return this._local;}},{key:"idKey",get:function get(){return this._opts.idKey;}},{key:"collation",get:function get(){var _a;return(_a=this._opts)===null||_a===void 0?void 0:_a.collation;}},{key:"processingMode",get:function get(){var _a;return((_a=this._opts)===null||_a===void 0?void 0:_a.processingMode)||ProcessingMode.CLONE_OFF;}},{key:"useStrictMode",get:function get(){var _a;return(_a=this._opts)===null||_a===void 0?void 0:_a.useStrictMode;}},{key:"scriptEnabled",get:function get(){var _a;return(_a=this._opts)===null||_a===void 0?void 0:_a.scriptEnabled;}},{key:"useGlobalContext",get:function get(){var _a;return(_a=this._opts)===null||_a===void 0?void 0:_a.useGlobalContext;}},{key:"hashFunction",get:function get(){var _a;return(_a=this._opts)===null||_a===void 0?void 0:_a.hashFunction;}},{key:"collectionResolver",get:function get(){var _a;return(_a=this._opts)===null||_a===void 0?void 0:_a.collectionResolver;}},{key:"jsonSchemaValidator",get:function get(){var _a;return(_a=this._opts)===null||_a===void 0?void 0:_a.jsonSchemaValidator;}},{key:"variables",get:function get(){var _a;return(_a=this._opts)===null||_a===void 0?void 0:_a.variables;}},{key:"context",get:function get(){var _a;return(_a=this._opts)===null||_a===void 0?void 0:_a.context;}}],[{key:"init",value:function init(options,root,local){return options instanceof ComputeOptions?new ComputeOptions(options._opts,isNil(options.root)?root:options.root,Object.assign({},options.local,local)):new ComputeOptions(options,root,local);}}]);return ComputeOptions;}();/**
 * Creates an Option from another where required keys are initialized.
 * @param options Options
 */function initOptions(options){return options instanceof ComputeOptions?options.getOptions():Object.freeze(Object.assign(Object.assign({idKey:"_id",scriptEnabled:true,useStrictMode:true,useGlobalContext:true,processingMode:ProcessingMode.CLONE_OFF},options),{context:(options===null||options===void 0?void 0:options.context)?Context.from(options===null||options===void 0?void 0:options.context):Context.init({})}));}/**
 * The different groups of operators
 */var OperatorType;(function(OperatorType){OperatorType["ACCUMULATOR"]="accumulator";OperatorType["EXPRESSION"]="expression";OperatorType["PIPELINE"]="pipeline";OperatorType["PROJECTION"]="projection";OperatorType["QUERY"]="query";OperatorType["WINDOW"]="window";})(OperatorType||(OperatorType={}));var Context=/*#__PURE__*/function(){function Context(ops){_classCallCheck(this,Context);this.operators=cloneDeep(ops);}_createClass(Context,[{key:"addOperators",value:function addOperators(type,ops){for(var _i2=0,_Object$entries=Object.entries(ops);_i2<_Object$entries.length;_i2++){var _Object$entries$_i=_slicedToArray(_Object$entries[_i2],2),name=_Object$entries$_i[0],fn=_Object$entries$_i[1];if(!this.getOperator(type,name)){this.operators[type][name]=fn;}}return this;}// register
},{key:"addAccumulatorOps",value:function addAccumulatorOps(ops){return this.addOperators(OperatorType.ACCUMULATOR,ops);}},{key:"addExpressionOps",value:function addExpressionOps(ops){return this.addOperators(OperatorType.EXPRESSION,ops);}},{key:"addQueryOps",value:function addQueryOps(ops){return this.addOperators(OperatorType.QUERY,ops);}},{key:"addPipelineOps",value:function addPipelineOps(ops){return this.addOperators(OperatorType.PIPELINE,ops);}},{key:"addProjectionOps",value:function addProjectionOps(ops){return this.addOperators(OperatorType.PROJECTION,ops);}},{key:"addWindowOps",value:function addWindowOps(ops){return this.addOperators(OperatorType.WINDOW,ops);}// getters
},{key:"getOperator",value:function getOperator(type,name){return type in this.operators?this.operators[type][name]||null:null;}}],[{key:"init",value:function init(ops){var _merge;return new Context(merge((_merge={},_defineProperty(_merge,OperatorType.ACCUMULATOR,{}),_defineProperty(_merge,OperatorType.EXPRESSION,{}),_defineProperty(_merge,OperatorType.PIPELINE,{}),_defineProperty(_merge,OperatorType.PROJECTION,{}),_defineProperty(_merge,OperatorType.QUERY,{}),_defineProperty(_merge,OperatorType.WINDOW,{}),_merge),ops,{skipValidation:true}));}},{key:"from",value:function from(ctx){return new Context(ctx.operators);}}]);return Context;}();// operator definitions
var CONTEXT=Context.init({});/**
 * Register fully specified operators for the given operator class.
 *
 * @param type The operator type
 * @param operators Map of the operators
 */function useOperators(type,operators){for(var _i3=0,_Object$entries2=Object.entries(operators);_i3<_Object$entries2.length;_i3++){var _Object$entries2$_i=_slicedToArray(_Object$entries2[_i3],2),name=_Object$entries2$_i[0],fn=_Object$entries2$_i[1];assert(isFunction$1(fn)&&isOperator(name),"'".concat(name,"' is not a valid operator"));var currentFn=getOperator(type,name,null);assert(!currentFn||fn===currentFn,"".concat(name," already exists for '").concat(type,"' operators. Cannot change operator function once registered."));}// toss the operator salad :)
CONTEXT.addOperators(type,operators);}/**
 * Returns the operator function or undefined if it is not found
 * @param type Type of operator
 * @param operator Name of the operator
 */function getOperator(type,operator,options){var _ref2=options||{},ctx=_ref2.context,fallback=_ref2.useGlobalContext;var fn=ctx?ctx.getOperator(type,operator):null;return!fn&&fallback?CONTEXT.getOperator(type,operator):fn;}/* eslint-disable unused-imports/no-unused-vars-ts */ /**
 * Implementation of system variables
 * @type {Object}
 */var systemVariables={$$ROOT:function $$ROOT(obj,expr,options){return options.root;},$$CURRENT:function $$CURRENT(obj,expr,options){return obj;},$$REMOVE:function $$REMOVE(obj,expr,options){return undefined;},$$NOW:function $$NOW(obj,expr,options){return new Date(options.timestamp);}};/**
 * Implementation of $redact variables
 *
 * Each function accepts 3 arguments (obj, expr, options)
 *
 * @type {Object}
 */var redactVariables={$$KEEP:function $$KEEP(obj,expr,options){return obj;},$$PRUNE:function $$PRUNE(obj,expr,options){return undefined;},$$DESCEND:function $$DESCEND(obj,expr,options){// traverse nested documents iff there is a $cond
if(!has$1(expr,"$cond"))return obj;var result;for(var _i4=0,_Object$entries3=Object.entries(obj);_i4<_Object$entries3.length;_i4++){var _Object$entries3$_i=_slicedToArray(_Object$entries3[_i4],2),key=_Object$entries3$_i[0],current=_Object$entries3$_i[1];if(isObjectLike$1(current)){if(current instanceof Array){var array=[];var _iterator3=_createForOfIteratorHelper(current),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var elem=_step3.value;if(isObject$1(elem)){elem=redact(elem,expr,options.update(elem));}if(!isNil(elem)){array.push(elem);}}}catch(err){_iterator3.e(err);}finally{_iterator3.f();}result=array;}else{result=redact(current,expr,options.update(current));}if(isNil(result)){delete obj[key];// pruned result
}else{obj[key]=result;}}}return obj;}};/* eslint-enable unused-imports/no-unused-vars-ts */ /**
 * Computes the value of the expression on the object for the given operator
 *
 * @param obj the current object from the collection
 * @param expr the expression for the given field
 * @param operator the operator to resolve the field with
 * @param options {Object} extra options
 * @returns {*}
 */function computeValue(obj,expr,operator,options){var _a;// ensure valid options exist on first invocation
var copts=ComputeOptions.init(options,obj);operator=operator||"";if(isOperator(operator)){// if the field of the object is a valid operator
var callExpression=getOperator(OperatorType.EXPRESSION,operator,options);if(callExpression)return callExpression(obj,expr,copts);// we also handle $group accumulator operators
var callAccumulator=getOperator(OperatorType.ACCUMULATOR,operator,options);if(callAccumulator){// if object is not an array, first try to compute using the expression
if(!(obj instanceof Array)){obj=computeValue(obj,expr,null,copts);expr=null;}// validate that we have an array
assert(obj instanceof Array,"'".concat(operator,"' target must be an array."));// for accumulators, we use the global options since the root is specific to each element within array.
return callAccumulator(obj,expr,// reset the root object for accumulators.
copts.update(null,copts.local));}// operator was not found
throw new Error("operator '".concat(operator,"' is not registered"));}// if expr is a string and begins with "$$", then we have a variable.
//  this can be one of; redact variable, system variable, user-defined variable.
//  we check and process them in that order.
//
// if expr begins only a single "$", then it is a path to a field on the object.
if(isString$1(expr)&&expr.length>0&&expr[0]==="$"){// we return redact variables as literals
if(has$1(redactVariables,expr)){return expr;}// default to root for resolving path.
var context=copts.root;// handle selectors with explicit prefix
var arr=expr.split(".");if(has$1(systemVariables,arr[0])){// set 'root' only the first time it is required to be used for all subsequent calls
// if it already available on the options, it will be used
context=systemVariables[arr[0]](obj,null,copts);expr=expr.slice(arr[0].length+1);//  +1 for '.'
}else if(arr[0].slice(0,2)==="$$"){// handle user-defined variables
context=Object.assign({},copts.variables,// global vars
// current item is added before local variables because the binding may be changed.
{"this":obj},(_a=copts.local)===null||_a===void 0?void 0:_a.variables// local vars
);var prefix=arr[0].slice(2);assert(has$1(context,prefix),"Use of undefined variable: ".concat(prefix));expr=expr.slice(2);}else{// 'expr' is a path to a field on the object.
expr=expr.slice(1);}if(expr==="")return context;return resolve(context,expr);}// check and return value if already in a resolved state
if(isArray$2(expr)){return expr.map(function(item){return computeValue(obj,item,null,copts);});}else if(isObject$1(expr)){var result={};var _loop4=function _loop4(){var _Object$entries4$_i=_slicedToArray(_Object$entries4[_i5],2),key=_Object$entries4$_i[0],val=_Object$entries4$_i[1];result[key]=computeValue(obj,val,key,copts);// must run ONLY one aggregate operator per expression
// if so, return result of the computed value
if([OperatorType.EXPRESSION,OperatorType.ACCUMULATOR].some(function(t){return!!getOperator(t,key,options);})){// there should be only one operator
assert(Object.keys(expr).length===1,"Invalid aggregation expression '"+JSON.stringify(expr)+"'");return{v:result[key]};}},_ret3;for(var _i5=0,_Object$entries4=Object.entries(expr);_i5<_Object$entries4.length;_i5++){_ret3=_loop4();if(_ret3)return _ret3.v;}return result;}return expr;}/**
 * Redact an object
 * @param  {Object} obj The object to redact
 * @param  {*} expr The redact expression
 * @param  {*} options  Options for value
 * @return {*} returns the result of the redacted object
 */function redact(obj,expr,options){var result=computeValue(obj,expr,null,options);return has$1(redactVariables,result)?redactVariables[result](obj,expr,options):result;}// Boolean Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#boolean-expression-operators
/**
 * Returns true only when all its expressions evaluate to true. Accepts any number of argument expressions.
 *
 * @param obj
 * @param expr
 * @returns {boolean}
 */var $and$1=function $and$1(obj,expr,options){var value=computeValue(obj,expr,null,options);return truthy(value,options.useStrictMode)&&value.every(function(v){return truthy(v,options.useStrictMode);});};// Boolean Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#boolean-expression-operators
/**
 * Returns the boolean value that is the opposite of its argument expression. Accepts a single argument expression.
 *
 * @param obj RawObject from collection
 * @param expr Right hand side expression of operator
 * @returns {boolean}
 */var $not$1=function $not$1(obj,expr,options){var booleanExpr=ensureArray(expr);// array values are truthy so an emty array is false
if(booleanExpr.length==0)return false;// use provided value non-array value
if(booleanExpr.length==1)return!computeValue(obj,booleanExpr[0],null,options);// expects a single argument
throw"Expression $not takes exactly 1 argument";};// Boolean Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#boolean-expression-operators
/**
 * Returns true when any of its expressions evaluates to true. Accepts any number of argument expressions.
 *
 * @param obj
 * @param expr
 * @returns {boolean}
 */var $or$1=function $or$1(obj,expr,options){var value=computeValue(obj,expr,null,options);var strict=options.useStrictMode;return truthy(value,strict)&&value.some(function(v){return truthy(v,strict);});};var booleanOperators=/*#__PURE__*/Object.freeze({__proto__:null,$and:$and$1,$not:$not$1,$or:$or$1});// Comparison Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#comparison-expression-operators
/**
 * Compares two values and returns the result of the comparison as an integer.
 *
 * @param obj
 * @param expr
 * @returns {number}
 */var $cmp=function $cmp(obj,expr,options){var args=computeValue(obj,expr,null,options);if(args[0]>args[1])return 1;if(args[0]<args[1])return-1;return 0;};/**
 * Returns an iterator
 * @param {*} source An iterable source (Array, Function, Generator, or Iterator)
 */function Lazy(source){return source instanceof Iterator?source:new Iterator(source);}function compose(){for(var _len2=arguments.length,iterators=new Array(_len2),_key2=0;_key2<_len2;_key2++){iterators[_key2]=arguments[_key2];}var index=0;return Lazy(function(){while(index<iterators.length){var o=iterators[index].next();if(!o.done)return o;index++;}return{done:true};});}/**
 * Checks whether the given object is compatible with a generator i.e Object{next:Function}
 * @param {*} o An object
 */function isGenerator(o){return!!o&&_typeof(o)==="object"&&(o===null||o===void 0?void 0:o.next)instanceof Function;}function dropItem(array,i){var rest=array.slice(i+1);array.splice(i);Array.prototype.push.apply(array,rest);}// stop iteration error
var DONE=new Error();// Lazy function actions
var Action;(function(Action){Action[Action["MAP"]=0]="MAP";Action[Action["FILTER"]=1]="FILTER";Action[Action["TAKE"]=2]="TAKE";Action[Action["DROP"]=3]="DROP";})(Action||(Action={}));function createCallback(nextFn,iteratees,buffer){var done=false;var index=-1;var bufferIndex=0;// index for the buffer
return function(storeResult){// special hack to collect all values into buffer
try{outer:while(!done){var o=nextFn();index++;var i=-1;var size=iteratees.length;var innerDone=false;while(++i<size){var r=iteratees[i];switch(r.action){case Action.MAP:o=r.func(o,index);break;case Action.FILTER:if(!r.func(o,index))continue outer;break;case Action.TAKE:--r.count;if(!r.count)innerDone=true;break;case Action.DROP:--r.count;if(!r.count)dropItem(iteratees,i);continue outer;default:break outer;}}done=innerDone;if(storeResult){buffer[bufferIndex++]=o;}else{return{value:o,done:false};}}}catch(e){if(e!==DONE)throw e;}done=true;return{done:done};};}/**
 * A lazy collection iterator yields a single value at time upon request
 */var Iterator=/*#__PURE__*/function(_Symbol$iterator){/**
     * @param {*} source An iterable object or function.
     *    Array - return one element per cycle
     *    Object{next:Function} - call next() for the next value (this also handles generator functions)
     *    Function - call to return the next value
     * @param {Function} fn An optional transformation function
     */function Iterator(source){_classCallCheck(this,Iterator);this.iteratees=[];this.yieldedValues=[];this.isDone=false;var nextVal;if(source instanceof Function){// make iterable
source={next:source};}if(isGenerator(source)){var src=source;nextVal=function nextVal(){var o=src.next();if(o.done)throw DONE;return o.value;};}else if(source instanceof Array){var data=source;var size=data.length;var index=0;nextVal=function nextVal(){if(index<size)return data[index++];throw DONE;};}else if(!(source instanceof Function)){throw new Error("Source is of type '".concat(_typeof(source),"'. Must be Array, Function, or Generator"));}// create next function
this.getNext=createCallback(nextVal,this.iteratees,this.yieldedValues);}/**
     * Add an iteratee to this lazy sequence
     */_createClass(Iterator,[{key:"push",value:function push(action,value){if(typeof value==="function"){this.iteratees.push({action:action,func:value});}else if(typeof value==="number"){this.iteratees.push({action:action,count:value});}return this;}},{key:"next",value:function next(){return this.getNext();}// Iteratees methods
/**
     * Transform each item in the sequence to a new value
     * @param {Function} f
     */},{key:"map",value:function map(f){return this.push(Action.MAP,f);}/**
     * Select only items matching the given predicate
     * @param {Function} pred
     */},{key:"filter",value:function filter(predicate){return this.push(Action.FILTER,predicate);}/**
     * Take given numbe for values from sequence
     * @param {Number} n A number greater than 0
     */},{key:"take",value:function take(n){return n>0?this.push(Action.TAKE,n):this;}/**
     * Drop a number of values from the sequence
     * @param {Number} n Number of items to drop greater than 0
     */},{key:"drop",value:function drop(n){return n>0?this.push(Action.DROP,n):this;}// Transformations
/**
     * Returns a new lazy object with results of the transformation
     * The entire sequence is realized.
     *
     * @param {Function} fn Tranform function of type (Array) => (Any)
     */},{key:"transform",value:function transform(fn){var self=this;var iter;return Lazy(function(){if(!iter){iter=Lazy(fn(self.value()));}return iter.next();});}// Terminal methods
/**
     * Returns the fully realized values of the iterators.
     * The return value will be an array unless `lazy.first()` was used.
     * The realized values are cached for subsequent calls.
     */},{key:"value",value:function value(){if(!this.isDone){this.isDone=this.getNext(true).done;}return this.yieldedValues;}/**
     * Execute the funcion for each value. Will stop when an execution returns false.
     * @param {Function} f
     * @returns {Boolean} false iff `f` return false for AnyVal execution, otherwise true
     */},{key:"each",value:function each(f){for(;;){var o=this.next();if(o.done)break;if(f(o.value)===false)return false;}return true;}/**
     * Returns the reduction of sequence according the reducing function
     *
     * @param {*} f a reducing function
     * @param {*} initialValue
     */},{key:"reduce",value:function reduce(f,initialValue){var o=this.next();if(initialValue===undefined&&!o.done){initialValue=o.value;o=this.next();}while(!o.done){initialValue=f(initialValue,o.value);o=this.next();}return initialValue;}/**
     * Returns the number of matched items in the sequence
     */},{key:"size",value:function size(){return this.reduce(function(acc,_){return++acc;},0);}},{key:_Symbol$iterator,value:function value(){/* eslint-disable @typescript-eslint/no-unsafe-return */return this;}}]);return Iterator;}(Symbol.iterator);/**
 * Provides functionality for the mongoDB aggregation pipeline
 *
 * @param pipeline an Array of pipeline operators
 * @param options An optional Options to pass the aggregator
 * @constructor
 */var Aggregator=/*#__PURE__*/function(){function Aggregator(pipeline,options){_classCallCheck(this,Aggregator);this.pipeline=pipeline;this.options=initOptions(options);}/**
     * Returns an `Lazy` iterator for processing results of pipeline
     *
     * @param {*} collection An array or iterator object
     * @returns {Iterator} an iterator object
     */_createClass(Aggregator,[{key:"stream",value:function stream(collection){var iterator=Lazy(collection);var mode=this.options.processingMode;if(mode==ProcessingMode.CLONE_ALL||mode==ProcessingMode.CLONE_INPUT){iterator.map(cloneDeep);}var pipelineOperators=new Array();if(!isEmpty$1(this.pipeline)){// run aggregation pipeline
var _iterator4=_createForOfIteratorHelper(this.pipeline),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var operator=_step4.value;var operatorKeys=Object.keys(operator);var opName=operatorKeys[0];var call=getOperator(OperatorType.PIPELINE,opName,this.options);assert(operatorKeys.length===1&&!!call,"invalid pipeline operator ".concat(opName));pipelineOperators.push(opName);// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
iterator=call(iterator,operator[opName],this.options);}}catch(err){_iterator4.e(err);}finally{_iterator4.f();}}// operators that may share object graphs of inputs.
// we only need to clone the output for these since the objects will already be distinct for other operators.
if(mode==ProcessingMode.CLONE_OUTPUT||mode==ProcessingMode.CLONE_ALL&&!!intersection([["$group","$unwind"],pipelineOperators]).length){iterator.map(cloneDeep);}return iterator;}/**
     * Return the results of the aggregation as an array.
     *
     * @param {*} collection
     * @param {*} query
     */},{key:"run",value:function run(collection){return this.stream(collection).value();}}]);return Aggregator;}();/**
 * Cursor to iterate and perform filtering on matched objects.
 * This object must not be used directly. A cursor may be obtaine from calling `find()` on an instance of `Query`.
 *
 * @param collection The input source of the collection
 * @param predicate A predicate function to test documents
 * @param projection A projection criteria
 * @param options Options
 * @constructor
 */var Cursor=/*#__PURE__*/function(_Symbol$iterator2){function Cursor(source,predicate,projection,options){_classCallCheck(this,Cursor);this.source=source;this.predicate=predicate;this.projection=projection;this.options=options;this.operators=[];this.result=null;this.buffer=[];}/** Returns the iterator from running the query */_createClass(Cursor,[{key:"fetch",value:function fetch(){if(this.result)return this.result;// add projection operator
if(isObject$1(this.projection)){this.operators.push({$project:this.projection});}// filter collection
this.result=Lazy(this.source).filter(this.predicate);if(this.operators.length>0){this.result=new Aggregator(this.operators,this.options).stream(this.result);}return this.result;}/** Returns an iterator with the buffered data included */},{key:"fetchAll",value:function fetchAll(){var buffered=Lazy(_toConsumableArray(this.buffer));this.buffer=[];return compose(buffered,this.fetch());}/**
     * Return remaining objects in the cursor as an array. This method exhausts the cursor
     * @returns {Array}
     */},{key:"all",value:function all(){return this.fetchAll().value();}/**
     * Returns the number of objects return in the cursor. This method exhausts the cursor
     * @returns {Number}
     */},{key:"count",value:function count(){return this.all().length;}/**
     * Returns a cursor that begins returning results only after passing or skipping a number of documents.
     * @param {Number} n the number of results to skip.
     * @return {Cursor} Returns the cursor, so you can chain this call.
     */},{key:"skip",value:function skip(n){this.operators.push({$skip:n});return this;}/**
     * Constrains the size of a cursor's result set.
     * @param {Number} n the number of results to limit to.
     * @return {Cursor} Returns the cursor, so you can chain this call.
     */},{key:"limit",value:function limit(n){this.operators.push({$limit:n});return this;}/**
     * Returns results ordered according to a sort specification.
     * @param {Object} modifier an object of key and values specifying the sort order. 1 for ascending and -1 for descending
     * @return {Cursor} Returns the cursor, so you can chain this call.
     */},{key:"sort",value:function sort(modifier){this.operators.push({$sort:modifier});return this;}/**
     * Specifies the collation for the cursor returned by the `mingo.Query.find`
     * @param {*} spec
     */},{key:"collation",value:function collation(spec){this.options=Object.assign(Object.assign({},this.options),{collation:spec});return this;}/**
     * Returns the next document in a cursor.
     * @returns {Object | Boolean}
     */},{key:"next",value:function next(){// yield value obtains in hasNext()
if(this.buffer.length>0){return this.buffer.pop();}var o=this.fetch().next();if(o.done)return;return o.value;}/**
     * Returns true if the cursor has documents and can be iterated.
     * @returns {boolean}
     */},{key:"hasNext",value:function hasNext(){// there is a value in the buffer
if(this.buffer.length>0)return true;var o=this.fetch().next();if(o.done)return false;this.buffer.push(o.value);return true;}/**
     * Applies a function to each document in a cursor and collects the return values in an array.
     * @param fn
     * @returns {Array}
     */},{key:"map",value:function map(fn){return this.all().map(fn);}/**
     * Applies a JavaScript function for every document in a cursor.
     * @param fn
     */},{key:"forEach",value:function forEach(fn){this.all().forEach(fn);}},{key:_Symbol$iterator2,value:function value(){return this.fetchAll();}}]);return Cursor;}(Symbol.iterator);/**
 * An object used to filter input documents
 *
 * @param {Object} condition The condition for constructing predicates
 * @param {Options} options Options for use by operators
 * @constructor
 */var Query=/*#__PURE__*/function(){function Query(condition,options){_classCallCheck(this,Query);this.condition=condition;this.options=initOptions(options);this.compiled=[];this.compile();}_createClass(Query,[{key:"compile",value:function compile(){assert(isObject$1(this.condition),"query criteria must be an object: ".concat(JSON.stringify(this.condition)));var whereOperator={};for(var _i6=0,_Object$entries5=Object.entries(this.condition);_i6<_Object$entries5.length;_i6++){var _Object$entries5$_i=_slicedToArray(_Object$entries5[_i6],2),field=_Object$entries5$_i[0],expr=_Object$entries5$_i[1];if("$where"===field){Object.assign(whereOperator,{field:field,expr:expr});}else if(inArray(["$and","$or","$nor","$expr","$jsonSchema"],field)){this.processOperator(field,field,expr);}else{// normalize expression
assert(!isOperator(field),"unknown top level operator: ".concat(field));for(var _i7=0,_Object$entries6=Object.entries(normalize(expr));_i7<_Object$entries6.length;_i7++){var _Object$entries6$_i=_slicedToArray(_Object$entries6[_i7],2),operator=_Object$entries6$_i[0],val=_Object$entries6$_i[1];this.processOperator(field,operator,val);}}if(whereOperator.field){this.processOperator(whereOperator.field,whereOperator.field,whereOperator.expr);}}}},{key:"processOperator",value:function processOperator(field,operator,value){var call=getOperator(OperatorType.QUERY,operator,this.options);if(!call){throw new Error("unknown operator ".concat(operator));}var fn=call(field,value,this.options);this.compiled.push(fn);}/**
     * Checks if the object passes the query criteria. Returns true if so, false otherwise.
     *
     * @param obj The object to test
     * @returns {boolean} True or false
     */},{key:"test",value:function test(obj){for(var i=0,len=this.compiled.length;i<len;i++){if(!this.compiled[i](obj)){return false;}}return true;}/**
     * Returns a cursor to select matching documents from the input source.
     *
     * @param source A source providing a sequence of documents
     * @param projection An optional projection criteria
     * @returns {Cursor} A Cursor for iterating over the results
     */},{key:"find",value:function find(collection,projection){var _this=this;return new Cursor(collection,function(x){return _this.test(x);},projection||{},this.options);}/**
     * Remove matched documents from the collection returning the remainder
     *
     * @param collection An array of documents
     * @returns {Array} A new array with matching elements removed
     */},{key:"remove",value:function remove(collection){var _this2=this;return collection.reduce(function(acc,obj){if(!_this2.test(obj))acc.push(obj);return acc;},[]);}}]);return Query;}();/**
 * Predicates used for Query and Expression operators.
 */ /**
 * Returns a query operator created from the predicate
 *
 * @param predicate Predicate function
 */function createQueryOperator(predicate){var f=function f(selector,value,options){var opts={unwrapArray:true};var depth=Math.max(1,selector.split(".").length-1);return function(obj){// value of field must be fully resolved.
var lhs=resolve(obj,selector,opts);return predicate(lhs,value,Object.assign(Object.assign({},options),{depth:depth}));};};f.op="query";return f;// as QueryOperator;
}/**
 * Returns an expression operator created from the predicate
 *
 * @param predicate Predicate function
 */function createExpressionOperator(predicate){return function(obj,expr,options){var args=computeValue(obj,expr,null,options);return predicate.apply(void 0,_toConsumableArray(args));};}/**
 * Checks that two values are equal.
 *
 * @param a         The lhs operand as resolved from the object by the given selector
 * @param b         The rhs operand provided by the user
 * @returns {*}
 */function $eq$2(a,b,options){// start with simple equality check
if(isEqual(a,b))return true;// https://docs.mongodb.com/manual/tutorial/query-for-null-fields/
if(isNil(a)&&isNil(b))return true;// check
if(a instanceof Array){var _eq=isEqual.bind(null,b);return a.some(_eq)||flatten$1(a,options===null||options===void 0?void 0:options.depth).some(_eq);}return false;}/**
 * Matches all values that are not equal to the value specified in the query.
 *
 * @param a
 * @param b
 * @returns {boolean}
 */function $ne$2(a,b,options){return!$eq$2(a,b,options);}/**
 * Matches any of the values that exist in an array specified in the query.
 *
 * @param a
 * @param b
 * @returns {*}
 */function $in$1(a,b,options){// queries for null should be able to find undefined fields
if(isNil(a))return b.some(function(v){return v===null;});return intersection([ensureArray(a),b],options===null||options===void 0?void 0:options.hashFunction).length>0;}/**
 * Matches values that do not exist in an array specified to the query.
 *
 * @param a
 * @param b
 * @returns {*|boolean}
 */function $nin$1(a,b,options){return!$in$1(a,b,options);}/**
 * Matches values that are less than the value specified in the query.
 *
 * @param a
 * @param b
 * @returns {boolean}
 */function $lt$2(a,b,options){return compare(a,b,function(x,y){return compare$1(x,y)<0;});}/**
 * Matches values that are less than or equal to the value specified in the query.
 *
 * @param a
 * @param b
 * @returns {boolean}
 */function $lte$2(a,b,options){return compare(a,b,function(x,y){return compare$1(x,y)<=0;});}/**
 * Matches values that are greater than the value specified in the query.
 *
 * @param a
 * @param b
 * @returns {boolean}
 */function $gt$2(a,b,options){return compare(a,b,function(x,y){return compare$1(x,y)>0;});}/**
 * Matches values that are greater than or equal to the value specified in the query.
 *
 * @param a
 * @param b
 * @returns {boolean}
 */function $gte$2(a,b,options){return compare(a,b,function(x,y){return compare$1(x,y)>=0;});}/**
 * Performs a modulo operation on the value of a field and selects documents with a specified result.
 *
 * @param a
 * @param b
 * @returns {boolean}
 */function $mod$1(a,b,options){return ensureArray(a).some(function(x){return b.length===2&&x%b[0]===b[1];});}/**
 * Selects documents where values match a specified regular expression.
 *
 * @param a
 * @param b
 * @returns {boolean}
 */function $regex$1(a,b,options){var lhs=ensureArray(a);var match=function match(x){return isString$1(x)&&truthy(b.exec(x),options===null||options===void 0?void 0:options.useStrictMode);};return lhs.some(match)||flatten$1(lhs,1).some(match);}/**
 * Matches documents that have the specified field.
 *
 * @param a
 * @param b
 * @returns {boolean}
 */function $exists$1(a,b,options){return(b===false||b===0)&&a===undefined||(b===true||b===1)&&a!==undefined;}/**
 * Matches arrays that contain all elements specified in the query.
 *
 * @param values
 * @param queries
 * @returns boolean
 */function $all$1(values,queries,options){if(!isArray$2(values)||!isArray$2(queries)||!values.length||!queries.length){return false;}var matched=true;var _iterator5=_createForOfIteratorHelper(queries),_step5;try{var _loop5=function _loop5(){var query=_step5.value;// no need to check all the queries.
if(!matched)return 1;// break
if(isObject$1(query)&&inArray(Object.keys(query),"$elemMatch")){matched=$elemMatch$2(values,query["$elemMatch"],options);}else if(query instanceof RegExp){matched=values.some(function(s){return typeof s==="string"&&query.test(s);});}else{matched=values.some(function(v){return isEqual(query,v);});}};for(_iterator5.s();!(_step5=_iterator5.n()).done;){if(_loop5())break;}}catch(err){_iterator5.e(err);}finally{_iterator5.f();}return matched;}/**
 * Selects documents if the array field is a specified size.
 *
 * @param a
 * @param b
 * @returns {*|boolean}
 */function $size$1(a,b,options){return Array.isArray(a)&&a.length===b;}function isNonBooleanOperator(name){return isOperator(name)&&["$and","$or","$nor"].indexOf(name)===-1;}/**
 * Selects documents if element in the array field matches all the specified $elemMatch condition.
 *
 * @param a {Array} element to match against
 * @param b {Object} subquery
 */function $elemMatch$2(a,b,options){// should return false for non-matching input
if(isArray$2(a)&&!isEmpty$1(a)){var format=function format(x){return x;};var criteria=b;// If we find a boolean operator in the subquery, we fake a field to point to it. This is an
// attempt to ensure that it is a valid criteria. We cannot make this substitution for operators
// like $and/$or/$nor; as otherwise, this faking will break our query.
if(Object.keys(b).every(isNonBooleanOperator)){criteria={temp:b};format=function format(x){return{temp:x};};}var query=new Query(criteria,options);for(var i=0,len=a.length;i<len;i++){if(query.test(format(a[i]))){return true;}}}return false;}// helper functions
var isNull=function isNull(a){return a===null;};var isInt=function isInt(a){return isNumber(a)&&a>=MIN_INT&&a<=MAX_INT&&a.toString().indexOf(".")===-1;};var isLong=function isLong(a){return isNumber(a)&&a>=MIN_LONG&&a<=MAX_LONG&&a.toString().indexOf(".")===-1;};/** Mapping of type to predicate */var compareFuncs={array:isArray$2,bool:isBoolean,"boolean":isBoolean,date:isDate,decimal:isNumber,"double":isNumber,"int":isInt,"long":isLong,number:isNumber,"null":isNull,object:isObject$1,regex:isRegExp$2,regexp:isRegExp$2,string:isString$1,// added for completeness
undefined:isNil,"function":function _function(_){throw new Error("unsupported type key `function`.");},// Mongo identifiers
1:isNumber,2:isString$1,3:isObject$1,4:isArray$2,6:isNil,8:isBoolean,9:isDate,10:isNull,11:isRegExp$2,16:isInt,18:isLong,19:isNumber//decimal
};/**
 * Selects documents if a field is of the specified type.
 *
 * @param a
 * @param b
 * @returns {boolean}
 */function compareType(a,b,_){var f=compareFuncs[b];return f?f(a):false;}/**
 * Selects documents if a field is of the specified type.
 *
 * @param a
 * @param b
 * @returns {boolean}
 */function $type$1(a,b,options){return Array.isArray(b)?b.findIndex(function(t){return compareType(a,t);})>=0:compareType(a,b);}function compare(a,b,f){return ensureArray(a).some(function(x){return getType(x)===getType(b)&&f(x,b);});}// Comparison Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#comparison-expression-operators
/**
 * Matches values that are equal to a specified value.
 */var $eq$1=createExpressionOperator($eq$2);// Comparison Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#comparison-expression-operators
/**
 * Matches values that are greater than a specified value.
 */var $gt$1=createExpressionOperator($gt$2);// Comparison Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#comparison-expression-operators
/**
 * 	Matches values that are greater than or equal to a specified value.
 */var $gte$1=createExpressionOperator($gte$2);// Comparison Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#comparison-expression-operators
/**
 * Matches values that are less than the value specified in the query.
 */var $lt$1=createExpressionOperator($lt$2);// Comparison Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#comparison-expression-operators
/**
 * Matches values that are less than or equal to the value specified in the query.
 */var $lte$1=createExpressionOperator($lte$2);// Comparison Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#comparison-expression-operators
/**
 * Matches all values that are not equal to the value specified in the query.
 */var $ne$1=createExpressionOperator($ne$2);var comparisonOperators=/*#__PURE__*/Object.freeze({__proto__:null,$cmp:$cmp,$eq:$eq$1,$gt:$gt$1,$gte:$gte$1,$lt:$lt$1,$lte:$lte$1,$ne:$ne$1});/**
 * Takes all input documents and returns them in a stream of sorted documents.
 *
 * @param collection
 * @param sortKeys
 * @param  {Object} options
 * @returns {*}
 */var $sort=function $sort(collection,sortKeys,options){if(isEmpty$1(sortKeys)||!isObject$1(sortKeys))return collection;var cmp=compare$1;// check for collation spec on the options
var collationSpec=options.collation;// use collation comparator if provided
if(isObject$1(collationSpec)&&isString$1(collationSpec.locale)){cmp=collationComparator(collationSpec);}return collection.transform(function(coll){var modifiers=Object.keys(sortKeys);var _iterator6=_createForOfIteratorHelper(modifiers.reverse()),_step6;try{var _loop6=function _loop6(){var key=_step6.value;var groups=groupBy$2(coll,function(obj){return resolve(obj,key);},options.hashFunction);var sortedKeys=Array.from(groups.keys()).sort(cmp);if(sortKeys[key]===-1)sortedKeys.reverse();// reuse collection so the data is available for the next iteration of the sort modifiers.
coll=[];sortedKeys.reduce(function(acc,key){return into(acc,groups.get(key));},coll);};for(_iterator6.s();!(_step6=_iterator6.n()).done;){_loop6();}}catch(err){_iterator6.e(err);}finally{_iterator6.f();}return coll;});};// MongoDB collation strength to JS localeCompare sensitivity mapping.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
var COLLATION_STRENGTH={// Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.
1:"base",//  Only strings that differ in base letters or accents and other diacritic marks compare as unequal.
// Examples: a ≠ b, a ≠ á, a = A.
2:"accent",// Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal.
// Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A
3:"variant"// case - Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.
};/**
 * Creates a comparator function for the given collation spec. See https://docs.mongodb.com/manual/reference/collation/
 *
 * @param spec {Object} The MongoDB collation spec.
 * {
 *   locale: string,
 *   caseLevel: boolean,
 *   caseFirst: string,
 *   strength: int,
 *   numericOrdering: boolean,
 *   alternate: string,
 *   maxVariable: never, // unsupported
 *   backwards: never // unsupported
 * }
 */function collationComparator(spec){var localeOpt={sensitivity:COLLATION_STRENGTH[spec.strength||3],caseFirst:spec.caseFirst==="off"?"false":spec.caseFirst||"false",numeric:spec.numericOrdering||false,ignorePunctuation:spec.alternate==="shifted"};// when caseLevel is true for strength  1:base and 2:accent, bump sensitivity to the nearest that supports case comparison
if((spec.caseLevel||false)===true){if(localeOpt.sensitivity==="base")localeOpt.sensitivity="case";if(localeOpt.sensitivity==="accent")localeOpt.sensitivity="variant";}var collator=new Intl.Collator(spec.locale,localeOpt);return function(a,b){// non strings
if(!isString$1(a)||!isString$1(b))return compare$1(a,b);// only for strings
var i=collator.compare(a,b);if(i<0)return-1;if(i>0)return 1;return 0;};}/**
 * Restricts the number of documents in an aggregation pipeline.
 *
 * @param collection
 * @param value
 * @param options
 * @returns {Object|*}
 */var $limit=function $limit(collection,expr,options){return collection.take(expr);};// Array Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#array-expression-operators
/**
 * Returns a subset of an array.
 *
 * @param  {Object} obj
 * @param  {*} expr
 * @return {*}
 */var $slice$1=function $slice$1(obj,expr,options){var args=computeValue(obj,expr,null,options);var arr=args[0];var skip=args[1];var limit=args[2];// MongoDB $slice works a bit differently from Array.slice
// Uses single argument for 'limit' and array argument [skip, limit]
if(isNil(limit)){if(skip<0){skip=Math.max(0,arr.length+skip);limit=arr.length-skip+1;}else{limit=skip;skip=0;}}else{if(skip<0){skip=Math.max(0,arr.length+skip);}assert(limit>0,"Invalid argument for $slice operator. Limit must be a positive number");limit+=skip;}return arr.slice(skip,limit);};// Date Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#date-expression-operators
var buildMap=function buildMap(letters,sign){var h={};letters.split("").forEach(function(v,i){return h[v]=sign*(i+1);});return h;};Object.assign(Object.assign(Object.assign({},buildMap("ABCDEFGHIKLM",1)),buildMap("NOPQRSTUVWXY",-1)),{Z:0});// Trignometry Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#trigonometry-expression-operators
var FIXED_POINTS={undefined:null,"null":null,NaN:NaN,Infinity:new Error(),"-Infinity":new Error()};/**
 * Returns an operator for a given trignometric function
 *
 * @param f The trignometric function
 */function createTrignometryOperator(f){var fixedPoints=arguments.length>1&&arguments[1]!==undefined?arguments[1]:FIXED_POINTS;var fp=Object.assign({},FIXED_POINTS,fixedPoints);var keySet=new Set(Object.keys(fp));return function(obj,expr,options){var n=computeValue(obj,expr,null,options);if(keySet.has("".concat(n))){var res=fp["".concat(n)];if(res instanceof Error){throw new Error("cannot apply $".concat(f.name," to -inf, value must in (-inf,inf)"));}return res;}return f(n);};}// Trignometry Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#trigonometry-expression-operators
/** Returns the inverse cosine (arc cosine) of a value in radians. */createTrignometryOperator(Math.acos,{Infinity:Infinity,0:new Error()});// Trignometry Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#trigonometry-expression-operators
/** Returns the inverse hyperbolic cosine (hyperbolic arc cosine) of a value in radians. */createTrignometryOperator(Math.acosh,{Infinity:Infinity,0:new Error()});// Trignometry Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#trigonometry-expression-operators
/** Returns the inverse sin (arc sine) of a value in radians. */createTrignometryOperator(Math.asin);// Trignometry Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#trigonometry-expression-operators
/** Returns the inverse hyperbolic sine (hyperbolic arc sine) of a value in radians. */createTrignometryOperator(Math.asinh,{Infinity:Infinity,"-Infinity":-Infinity});// Trignometry Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#trigonometry-expression-operators
/** Returns the inverse tangent (arc tangent) of a value in radians. */createTrignometryOperator(Math.atan);// Trignometry Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#trigonometry-expression-operators
/** Returns the inverse hyperbolic tangent (hyperbolic arc tangent) of a value in radians. */createTrignometryOperator(Math.atanh,{1:Infinity,"-1":-Infinity});// Trignometry Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#trigonometry-expression-operators
/** Returns the cosine of a value that is measured in radians. */createTrignometryOperator(Math.cos);// Trignometry Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#trigonometry-expression-operators
/** Returns the hyperbolic cosine of a value that is measured in radians. */createTrignometryOperator(Math.cosh,{"-Infinity":Infinity,Infinity:Infinity// [Math.PI]: -1,
});// Trignometry Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#trigonometry-expression-operators
var RADIANS_FACTOR=Math.PI/180;/** Converts a value from degrees to radians. */createTrignometryOperator(function(n){return n*RADIANS_FACTOR;},{Infinity:Infinity,"-Infinity":Infinity});// Trignometry Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#trigonometry-expression-operators
var DEGREES_FACTOR=180/Math.PI;/** Converts a value from radians to degrees. */createTrignometryOperator(function(n){return n*DEGREES_FACTOR;},{Infinity:Infinity,"-Infinity":-Infinity});// Trignometry Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#trigonometry-expression-operators
/** Returns the sine of a value that is measured in radians. */createTrignometryOperator(Math.sin);// Trignometry Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#trigonometry-expression-operators
/** Returns the hyperbolic sine of a value that is measured in radians. */createTrignometryOperator(Math.sinh,{"-Infinity":-Infinity,Infinity:Infinity});// Trignometry Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#trigonometry-expression-operators
/** Returns the tangent of a value that is measured in radians. */createTrignometryOperator(Math.tan);/**
 * Reshapes a document stream.
 * $project can rename, add, or remove fields as well as create computed values and sub-documents.
 *
 * @param collection
 * @param expr
 * @param opt
 * @returns {Array}
 */var $project=function $project(collection,expr,options){if(isEmpty$1(expr))return collection;// result collection
var expressionKeys=Object.keys(expr);var idOnlyExcluded=false;// validate inclusion and exclusion
validateExpression(expr,options);var ID_KEY=options.idKey;if(inArray(expressionKeys,ID_KEY)){var id=expr[ID_KEY];if(id===0||id===false){expressionKeys=expressionKeys.filter(notInArray.bind(null,[ID_KEY]));idOnlyExcluded=expressionKeys.length==0;}}else{// if not specified the add the ID field
expressionKeys.push(ID_KEY);}var copts=ComputeOptions.init(options);return collection.map(function(obj){return processObject(obj,expr,copts.update(obj),expressionKeys,idOnlyExcluded);});};/**
 * Process the expression value for $project operators
 *
 * @param {Object} obj The object to use as options
 * @param {Object} expr The experssion object of $project operator
 * @param {Array} expressionKeys The key in the 'expr' object
 * @param {Boolean} idOnlyExcluded Boolean value indicating whether only the ID key is excluded
 */function processObject(obj,expr,options,expressionKeys,idOnlyExcluded){var newObj={};var foundSlice=false;var foundExclusion=false;var dropKeys=[];if(idOnlyExcluded){dropKeys.push(options.idKey);}var _iterator7=_createForOfIteratorHelper(expressionKeys),_step7;try{var _loop7=function _loop7(){var key=_step7.value;// final computed value of the key
var value=undefined;// expression to associate with key
var subExpr=expr[key];if(key!==options.idKey&&inArray([0,false],subExpr)){foundExclusion=true;}if(key===options.idKey&&isEmpty$1(subExpr)){// tiny optimization here to skip over id
value=obj[key];}else if(isString$1(subExpr)){value=computeValue(obj,subExpr,key,options);}else if(inArray([1,true],subExpr));else if(subExpr instanceof Array){value=subExpr.map(function(v){var r=computeValue(obj,v,null,options);if(isNil(r))return null;return r;});}else if(isObject$1(subExpr)){var subExprObj=subExpr;var subExprKeys=Object.keys(subExpr);var operator=subExprKeys.length==1?subExprKeys[0]:"";// first try a projection operator
var call=getOperator(OperatorType.PROJECTION,operator,options);if(call){// apply the projection operator on the operator expression for the key
if(operator==="$slice"){// $slice is handled differently for aggregation and projection operations
if(ensureArray(subExprObj[operator]).every(isNumber)){// $slice for projection operation
value=call(obj,subExprObj[operator],key,options);foundSlice=true;}else{// $slice for aggregation operation
value=computeValue(obj,subExprObj,key,options);}}else{value=call(obj,subExprObj[operator],key,options);}}else if(isOperator(operator)){// compute if operator key
value=computeValue(obj,subExprObj[operator],operator,options);}else if(has$1(obj,key)){// compute the value for the sub expression for the key
validateExpression(subExprObj,options);var target=obj[key];if(target instanceof Array){value=target.map(function(o){return processObject(o,subExprObj,options,subExprKeys,false);});}else{target=isObject$1(target)?target:obj;value=processObject(target,subExprObj,options,subExprKeys,false);}}else{// compute the value for the sub expression for the key
value=computeValue(obj,subExpr,null,options);}}else{dropKeys.push(key);return 1;// continue
}// get value with object graph
var objPathGraph=resolveGraph(obj,key,{preserveMissing:true});// add the value at the path
if(objPathGraph!==undefined){merge(newObj,objPathGraph,{flatten:true});}// if computed add/or remove accordingly
if(notInArray([0,1,false,true],subExpr)){if(value===undefined){removeValue(newObj,key,{descendArray:true});}else{setValue(newObj,key,value);}}};for(_iterator7.s();!(_step7=_iterator7.n()).done;){if(_loop7())continue;}// filter out all missing values preserved to support correct merging
}catch(err){_iterator7.e(err);}finally{_iterator7.f();}filterMissing(newObj);// For the following cases we include all keys on the object that were not explicitly excluded.
//
// 1. projection included $slice operator
// 2. some fields were explicitly excluded
// 3. only the id field was excluded
if(foundSlice||foundExclusion||idOnlyExcluded){newObj=into({},obj,newObj);if(dropKeys.length>0){var _iterator8=_createForOfIteratorHelper(dropKeys),_step8;try{for(_iterator8.s();!(_step8=_iterator8.n()).done;){var k=_step8.value;removeValue(newObj,k,{descendArray:true});}}catch(err){_iterator8.e(err);}finally{_iterator8.f();}}}return newObj;}/**
 * Validate inclusion and exclusion values in expression
 *
 * @param {Object} expr The expression given for the projection
 */function validateExpression(expr,options){var check=[false,false];for(var _i8=0,_Object$entries7=Object.entries(expr);_i8<_Object$entries7.length;_i8++){var _Object$entries7$_i=_slicedToArray(_Object$entries7[_i8],2),k=_Object$entries7$_i[0],v=_Object$entries7$_i[1];if(k===(options===null||options===void 0?void 0:options.idKey))return;if(v===0||v===false){check[0]=true;}else if(v===1||v===true){check[1]=true;}assert(!(check[0]&&check[1]),"Projection cannot have a mix of inclusion and exclusion.");}}/**
 * Skips over a specified number of documents from the pipeline and returns the rest.
 *
 * @param collection An iterator
 * @param expr
 * @param  {Options} options
 * @returns {*}
 */var $skip=function $skip(collection,expr,options){return collection.drop(expr);};// $elemMatch operator. https://docs.mongodb.com/manual/reference/operator/projection/elemMatch/#proj._S_elemMatch
/**
 * Projects only the first element from an array that matches the specified $elemMatch condition.
 *
 * @param obj
 * @param field
 * @param expr
 * @returns {*}
 */var $elemMatch$1=function $elemMatch$1(obj,expr,field,options){var arr=resolve(obj,field);var query=new Query(expr,options);assert(arr instanceof Array,"$elemMatch: argument must resolve to array");var result=[];for(var i=0;i<arr.length;i++){if(query.test(arr[i])){// MongoDB projects only the first nested document when using this operator.
// For some use cases this can lead to complicated queries to selectively project nested documents.
// When strict mode is disabled, we return all matching nested documents.
if(options.useStrictMode)return[arr[i]];result.push(arr[i]);}}return result.length>0?result:undefined;};// $slice operator. https://docs.mongodb.com/manual/reference/operator/projection/slice/#proj._S_slice
/**
 * Limits the number of elements projected from an array. Supports skip and limit slices.
 *
 * @param obj
 * @param field
 * @param expr
 */var $slice=function $slice(obj,expr,field,options){var xs=resolve(obj,field);var exprAsArray=expr;if(!isArray$2(xs))return xs;return $slice$1(obj,expr instanceof Array?[xs].concat(_toConsumableArray(exprAsArray)):[xs,expr],options);};// Projection Operators. https://docs.mongodb.com/manual/reference/operator/projection/
var projectionOperators=/*#__PURE__*/Object.freeze({__proto__:null,$elemMatch:$elemMatch$1,$slice:$slice});// Query Array Operators: https://docs.mongodb.com/manual/reference/operator/query-array/
/**
 * Matches arrays that contain all elements specified in the query.
 */var $all=createQueryOperator($all$1);// Query Array Operators: https://docs.mongodb.com/manual/reference/operator/query-array/
/**
 * Selects documents if element in the array field matches all the specified $elemMatch conditions.
 */var $elemMatch=createQueryOperator($elemMatch$2);// Query Array Operators: https://docs.mongodb.com/manual/reference/operator/query-array/
/**
 * Selects documents if the array field is a specified size.
 */var $size=createQueryOperator($size$1);var createBitwiseOperator=function createBitwiseOperator(predicate){return createQueryOperator(function(value,mask,options){var b=0;if(mask instanceof Array){var _iterator9=_createForOfIteratorHelper(mask),_step9;try{for(_iterator9.s();!(_step9=_iterator9.n()).done;){var n=_step9.value;b=b|1<<n;}}catch(err){_iterator9.e(err);}finally{_iterator9.f();}}else{b=mask;}return predicate(value&b,b);});};// Query Bitwise Operators: https://docs.mongodb.com/manual/reference/operator/query-bitwise/
/**
 * Matches numeric or binary values in which a set of bit positions all have a value of 0.
 */var $bitsAllClear=createBitwiseOperator(function(result,_){return result==0;});// Query Bitwise Operators: https://docs.mongodb.com/manual/reference/operator/query-bitwise/
/**
 * Matches numeric or binary values in which a set of bit positions all have a value of 1.
 */var $bitsAllSet=createBitwiseOperator(function(result,mask){return result==mask;});// Query Bitwise Operators: https://docs.mongodb.com/manual/reference/operator/query-bitwise/
/**
 * Matches numeric or binary values in which any bit from a set of bit positions has a value of 0.
 */var $bitsAnyClear=createBitwiseOperator(function(result,mask){return result<mask;});// Query Bitwise Operators: https://docs.mongodb.com/manual/reference/operator/query-bitwise/
/**
 * Matches numeric or binary values in which any bit from a set of bit positions has a value of 1.
 */var $bitsAnySet=createBitwiseOperator(function(result,_){return result>0;});// Query Comparison Operators: https://docs.mongodb.com/manual/reference/operator/query-comparison/
/**
 * Matches values that are equal to a specified value.
 */var $eq=createQueryOperator($eq$2);// Query Comparison Operators: https://docs.mongodb.com/manual/reference/operator/query-comparison/
/**
 * Matches values that are greater than a specified value.
 */var $gt=createQueryOperator($gt$2);// Query Comparison Operators: https://docs.mongodb.com/manual/reference/operator/query-comparison/
/**
 * 	Matches values that are greater than or equal to a specified value.
 */var $gte=createQueryOperator($gte$2);// Query Comparison Operators: https://docs.mongodb.com/manual/reference/operator/query-comparison/
/**
 * Matches any of the values that exist in an array specified in the query.
 */var $in=createQueryOperator($in$1);// Query Comparison Operators: https://docs.mongodb.com/manual/reference/operator/query-comparison/
/**
 * Matches values that are less than the value specified in the query.
 */var $lt=createQueryOperator($lt$2);// Query Comparison Operators: https://docs.mongodb.com/manual/reference/operator/query-comparison/
/**
 * Matches values that are less than or equal to the value specified in the query.
 */var $lte=createQueryOperator($lte$2);// Query Comparison Operators: https://docs.mongodb.com/manual/reference/operator/query-comparison/
/**
 * Matches all values that are not equal to the value specified in the query.
 */var $ne=createQueryOperator($ne$2);// Query Comparison Operators: https://docs.mongodb.com/manual/reference/operator/query-comparison/
/**
 * Matches values that do not exist in an array specified to the query.
 */var $nin=createQueryOperator($nin$1);// Query Element Operators: https://docs.mongodb.com/manual/reference/operator/query-element/
/**
 * Matches documents that have the specified field.
 */var $exists=createQueryOperator($exists$1);// Query Element Operators: https://docs.mongodb.com/manual/reference/operator/query-element/
/**
 * Selects documents if a field is of the specified type.
 */var $type=createQueryOperator($type$1);// Query Evaluation Operators: https://docs.mongodb.com/manual/reference/operator/query-evaluation/
/**
 * Allows the use of aggregation expressions within the query language.
 *
 * @param selector
 * @param rhs
 * @returns {Function}
 */function $expr(_,rhs,options){return function(obj){return computeValue(obj,rhs,null,options);};}// Query Evaluation Operators: https://docs.mongodb.com/manual/reference/operator/query-evaluation/
/**
 * Validate documents against the given JSON Schema.
 *
 * @param selector
 * @param schema
 * @returns {Function}
 */function $jsonSchema(_,schema,options){if(!(options===null||options===void 0?void 0:options.jsonSchemaValidator)){throw new Error("Missing option 'jsonSchemaValidator'. Configure to use '$jsonSchema' operator.");}var validate=options===null||options===void 0?void 0:options.jsonSchemaValidator(schema);return function(obj){return validate(obj);};}// Query Evaluation Operators: https://docs.mongodb.com/manual/reference/operator/query-evaluation/
/**
 * Performs a modulo operation on the value of a field and selects documents with a specified result.
 */var $mod=createQueryOperator($mod$1);// Query Evaluation Operators: https://docs.mongodb.com/manual/reference/operator/query-evaluation/
/**
 * Selects documents where values match a specified regular expression.
 */var $regex=createQueryOperator($regex$1);// Query Evaluation Operators: https://docs.mongodb.com/manual/reference/operator/query-evaluation/
/* eslint-disable */ /**
 * Matches documents that satisfy a JavaScript expression.
 *
 * @param selector
 * @param rhs
 * @returns {Function}
 */function $where(_,rhs,options){assert(options.scriptEnabled,"$where operator requires 'scriptEnabled' option to be true");var f=rhs;assert(isFunction$1(f),"$where only accepts a Function object");return function(obj){return truthy(f.call(obj),options===null||options===void 0?void 0:options.useStrictMode);};}// Query Logical Operators: https://docs.mongodb.com/manual/reference/operator/query-logical/
/**
 * Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
 *
 * @param selector
 * @param rhs
 * @returns {Function}
 */var $and=function $and(_,rhs,options){assert(isArray$2(rhs),"Invalid expression: $and expects value to be an Array.");var queries=rhs.map(function(expr){return new Query(expr,options);});return function(obj){return queries.every(function(q){return q.test(obj);});};};// Query Logical Operators: https://docs.mongodb.com/manual/reference/operator/query-logical/
/**
 * Joins query clauses with a logical OR returns all documents that match the conditions of either clause.
 *
 * @param selector
 * @param rhs
 * @returns {Function}
 */var $or=function $or(_,rhs,options){assert(isArray$2(rhs),"Invalid expression. $or expects value to be an Array");var queries=rhs.map(function(expr){return new Query(expr,options);});return function(obj){return queries.some(function(q){return q.test(obj);});};};// Query Logical Operators: https://docs.mongodb.com/manual/reference/operator/query-logical/
/**
 * Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
 *
 * @param selector
 * @param rhs
 * @returns {Function}
 */var $nor=function $nor(_,rhs,options){assert(isArray$2(rhs),"Invalid expression. $nor expects value to be an array.");var f=$or("$or",rhs,options);return function(obj){return!f(obj);};};// Query Logical Operators: https://docs.mongodb.com/manual/reference/operator/query-logical/
/**
 * Inverts the effect of a query expression and returns documents that do not match the query expression.
 *
 * @param selector
 * @param rhs
 * @returns {Function}
 */var $not=function $not(selector,rhs,options){var criteria={};criteria[selector]=normalize(rhs);var query=new Query(criteria,options);return function(obj){return!query.test(obj);};};var queryOperators=/*#__PURE__*/Object.freeze({__proto__:null,$all:$all,$and:$and,$bitsAllClear:$bitsAllClear,$bitsAllSet:$bitsAllSet,$bitsAnyClear:$bitsAnyClear,$bitsAnySet:$bitsAnySet,$elemMatch:$elemMatch,$eq:$eq,$exists:$exists,$expr:$expr,$gt:$gt,$gte:$gte,$in:$in,$jsonSchema:$jsonSchema,$lt:$lt,$lte:$lte,$mod:$mod,$ne:$ne,$nin:$nin,$nor:$nor,$not:$not,$or:$or,$regex:$regex,$size:$size,$type:$type,$where:$where});/**
 * Loads all Query and Projection operators
 */useOperators(OperatorType.EXPRESSION,Object.assign(Object.assign({},booleanOperators),comparisonOperators));useOperators(OperatorType.PIPELINE,{$project:$project,$skip:$skip,$limit:$limit,$sort:$sort});useOperators(OperatorType.PROJECTION,projectionOperators);useOperators(OperatorType.QUERY,queryOperators);/** The basic context for queries. */Context.init((_Context$init={},_defineProperty(_Context$init,OperatorType.EXPRESSION,Object.assign(Object.assign({},booleanOperators),comparisonOperators)),_defineProperty(_Context$init,OperatorType.PIPELINE,{$project:$project,$skip:$skip,$limit:$limit,$sort:$sort}),_defineProperty(_Context$init,OperatorType.PROJECTION,projectionOperators),_defineProperty(_Context$init,OperatorType.QUERY,queryOperators),_Context$init));/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==="undefined"?"undefined":_typeof(global))=='object'&&global&&global.Object===Object&&global;var freeGlobal$1=freeGlobal;/** Detect free variable `self`. */var freeSelf=(typeof self==="undefined"?"undefined":_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal$1||freeSelf||Function('return this')();var root$1=root;/** Built-in value references. */var Symbol$1=root$1.Symbol;var Symbol$2=Symbol$1;/** Used for built-in method references. */var objectProto$j=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$g=objectProto$j.hasOwnProperty;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString$1=objectProto$j.toString;/** Built-in value references. */var symToStringTag$1=Symbol$2?Symbol$2.toStringTag:undefined;/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function getRawTag(value){var isOwn=hasOwnProperty$g.call(value,symToStringTag$1),tag=value[symToStringTag$1];try{value[symToStringTag$1]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString$1.call(value);if(unmasked){if(isOwn){value[symToStringTag$1]=tag;}else{delete value[symToStringTag$1];}}return result;}/** Used for built-in method references. */var objectProto$i=Object.prototype;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto$i.toString;/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function objectToString(value){return nativeObjectToString.call(value);}/** `Object#toString` result references. */var nullTag='[object Null]',undefinedTag='[object Undefined]';/** Built-in value references. */var symToStringTag=Symbol$2?Symbol$2.toStringTag:undefined;/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(value){return value!=null&&_typeof(value)=='object';}/** `Object#toString` result references. */var symbolTag$3='[object Symbol]';/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function isSymbol(value){return _typeof(value)=='symbol'||isObjectLike(value)&&baseGetTag(value)==symbolTag$3;}/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function arrayMap(array,iteratee){var index=-1,length=array==null?0:array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */var isArray=Array.isArray;var isArray$1=isArray;/** Used as references for various `Number` constants. */var INFINITY$3=1/0;/** Used to convert symbols to primitives and strings. */var symbolProto$2=Symbol$2?Symbol$2.prototype:undefined,symbolToString=symbolProto$2?symbolProto$2.toString:undefined;/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=='string'){return value;}if(isArray$1(value)){// Recursively convert values (susceptible to call stack limits).
return arrayMap(value,baseToString)+'';}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY$3?'-0':result;}/** Used to match a single whitespace character. */var reWhitespace=/\s/;/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function trimmedEndIndex(string){var index=string.length;while(index--&&reWhitespace.test(string.charAt(index))){}return index;}/** Used to match leading whitespace. */var reTrimStart=/^\s+/;/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,''):string;}/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function isObject(value){var type=_typeof(value);return value!=null&&(type=='object'||type=='function');}/** Used as references for various `Number` constants. */var NAN=0/0;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Built-in method references without a dependency on `root`. */var freeParseInt=parseInt;/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}if(isObject(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}/** Used as references for various `Number` constants. */var INFINITY$2=1/0,MAX_INTEGER=1.7976931348623157e+308;/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */function toFinite(value){if(!value){return value===0?value:0;}value=toNumber(value);if(value===INFINITY$2||value===-INFINITY$2){var sign=value<0?-1:1;return sign*MAX_INTEGER;}return value===value?value:0;}/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0;}/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */function identity(value){return value;}/** `Object#toString` result references. */var asyncTag='[object AsyncFunction]',funcTag$2='[object Function]',genTag$1='[object GeneratorFunction]',proxyTag='[object Proxy]';/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function isFunction(value){if(!isObject(value)){return false;}// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var tag=baseGetTag(value);return tag==funcTag$2||tag==genTag$1||tag==asyncTag||tag==proxyTag;}/** Used to detect overreaching core-js shims. */var coreJsData=root$1['__core-js_shared__'];var coreJsData$1=coreJsData;/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData$1&&coreJsData$1.keys&&coreJsData$1.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/** Used for built-in method references. */var funcProto$1=Function.prototype;/** Used to resolve the decompiled source of functions. */var funcToString$1=funcProto$1.toString;/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function toSource(func){if(func!=null){try{return funcToString$1.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used for built-in method references. */var funcProto=Function.prototype,objectProto$h=Object.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty$f=objectProto$h.hasOwnProperty;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty$f).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(object,key){return object==null?undefined:object[key];}/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/* Built-in method references that are verified to be native. */var WeakMap=getNative(root$1,'WeakMap');var WeakMap$1=WeakMap;/** Built-in value references. */var objectCreate=Object.create;/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */var baseCreate=function(){function object(){}return function(proto){if(!isObject(proto)){return{};}if(objectCreate){return objectCreate(proto);}object.prototype=proto;var result=new object();object.prototype=undefined;return result;};}();var baseCreate$1=baseCreate;/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */function noop(){// No operation performed.
}/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}/** Used to detect hot functions by number of calls within a span of milliseconds. */var HOT_COUNT=800,HOT_SPAN=16;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeNow=Date.now;/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){if(++count>=HOT_COUNT){return arguments[0];}}else{count=0;}return func.apply(undefined,arguments);};}/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */function constant(value){return function(){return value;};}var defineProperty=function(){try{var func=getNative(Object,'defineProperty');func({},'',{});return func;}catch(e){}}();var defineProperty$1=defineProperty;/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */var baseSetToString=!defineProperty$1?identity:function(func,string){return defineProperty$1(func,'toString',{'configurable':true,'enumerable':false,'value':constant(string),'writable':true});};var baseSetToString$1=baseSetToString;/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */var setToString=shortOut(baseSetToString$1);var setToString$1=setToString;/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */function arrayEach(array,iteratee){var index=-1,length=array==null?0:array.length;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){if(predicate(array[index],index,array)){return index;}}return-1;}/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */function baseIsNaN(value){return value!==value;}/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function strictIndexOf(array,value,fromIndex){var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index;}}return-1;}/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function baseIndexOf(array,value,fromIndex){return value===value?strictIndexOf(array,value,fromIndex):baseFindIndex(array,baseIsNaN,fromIndex);}/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */function arrayIncludes(array,value){var length=array==null?0:array.length;return!!length&&baseIndexOf(array,value,0)>-1;}/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER$1=9007199254740991;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(value,length){var type=_typeof(value);length=length==null?MAX_SAFE_INTEGER$1:length;return!!length&&(type=='number'||type!='symbol'&&reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function baseAssignValue(object,key,value){if(key=='__proto__'&&defineProperty$1){defineProperty$1(object,key,{'configurable':true,'enumerable':true,'value':value,'writable':true});}else{object[key]=value;}}/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function eq(value,other){return value===other||value!==value&&other!==other;}/** Used for built-in method references. */var objectProto$g=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$e=objectProto$g.hasOwnProperty;/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty$e.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;if(newValue===undefined){newValue=source[key];}if(isNew){baseAssignValue(object,key,newValue);}else{assignValue(object,key,newValue);}}return object;}/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax$3=Math.max;/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */function overRest(func,start,transform){start=nativeMax$3(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax$3(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=transform(array);return apply(func,this,otherArgs);};}/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */function baseRest(func,start){return setToString$1(overRest(func,start,identity),func+'');}/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */function isIterateeCall(value,index,object){if(!isObject(object)){return false;}var type=_typeof(index);if(type=='number'?isArrayLike(object)&&isIndex(index,object.length):type=='string'&&index in object){return eq(object[index],value);}return false;}/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */function createAssigner(assigner){return baseRest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;customizer=assigner.length>3&&typeof customizer=='function'?(length--,customizer):undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1;}object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}return object;});}/** Used for built-in method references. */var objectProto$f=Object.prototype;/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto$f;return value===proto;}/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/** `Object#toString` result references. */var argsTag$3='[object Arguments]';/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag$3;}/** Used for built-in method references. */var objectProto$e=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$d=objectProto$e.hasOwnProperty;/** Built-in value references. */var propertyIsEnumerable$1=objectProto$e.propertyIsEnumerable;/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty$d.call(value,'callee')&&!propertyIsEnumerable$1.call(value,'callee');};var isArguments$1=isArguments;/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function stubFalse(){return false;}/** Detect free variable `exports`. */var freeExports$2=(typeof exports==="undefined"?"undefined":_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule$2=freeExports$2&&(typeof module==="undefined"?"undefined":_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports$2=freeModule$2&&freeModule$2.exports===freeExports$2;/** Built-in value references. */var Buffer$1=moduleExports$2?root$1.Buffer:undefined;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeIsBuffer=Buffer$1?Buffer$1.isBuffer:undefined;/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var isBuffer=nativeIsBuffer||stubFalse;var isBuffer$1=isBuffer;/** `Object#toString` result references. */var argsTag$2='[object Arguments]',arrayTag$2='[object Array]',boolTag$3='[object Boolean]',dateTag$3='[object Date]',errorTag$2='[object Error]',funcTag$1='[object Function]',mapTag$6='[object Map]',numberTag$3='[object Number]',objectTag$3='[object Object]',regexpTag$4='[object RegExp]',setTag$6='[object Set]',stringTag$4='[object String]',weakMapTag$2='[object WeakMap]';var arrayBufferTag$3='[object ArrayBuffer]',dataViewTag$4='[object DataView]',float32Tag$2='[object Float32Array]',float64Tag$2='[object Float64Array]',int8Tag$2='[object Int8Array]',int16Tag$2='[object Int16Array]',int32Tag$2='[object Int32Array]',uint8Tag$2='[object Uint8Array]',uint8ClampedTag$2='[object Uint8ClampedArray]',uint16Tag$2='[object Uint16Array]',uint32Tag$2='[object Uint32Array]';/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag$2]=typedArrayTags[float64Tag$2]=typedArrayTags[int8Tag$2]=typedArrayTags[int16Tag$2]=typedArrayTags[int32Tag$2]=typedArrayTags[uint8Tag$2]=typedArrayTags[uint8ClampedTag$2]=typedArrayTags[uint16Tag$2]=typedArrayTags[uint32Tag$2]=true;typedArrayTags[argsTag$2]=typedArrayTags[arrayTag$2]=typedArrayTags[arrayBufferTag$3]=typedArrayTags[boolTag$3]=typedArrayTags[dataViewTag$4]=typedArrayTags[dateTag$3]=typedArrayTags[errorTag$2]=typedArrayTags[funcTag$1]=typedArrayTags[mapTag$6]=typedArrayTags[numberTag$3]=typedArrayTags[objectTag$3]=typedArrayTags[regexpTag$4]=typedArrayTags[setTag$6]=typedArrayTags[stringTag$4]=typedArrayTags[weakMapTag$2]=false;/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)];}/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function baseUnary(func){return function(value){return func(value);};}/** Detect free variable `exports`. */var freeExports$1=(typeof exports==="undefined"?"undefined":_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule$1=freeExports$1&&(typeof module==="undefined"?"undefined":_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports$1=freeModule$1&&freeModule$1.exports===freeExports$1;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports$1&&freeGlobal$1.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{// Use `util.types` for Node.js 10+.
var types=freeModule$1&&freeModule$1.require&&freeModule$1.require('util').types;if(types){return types;}// Legacy `process.binding('util')` for Node.js < 10.
return freeProcess&&freeProcess.binding&&freeProcess.binding('util');}catch(e){}}();var nodeUtil$1=nodeUtil;/* Node.js helper references. */var nodeIsTypedArray=nodeUtil$1&&nodeUtil$1.isTypedArray;/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;var isTypedArray$1=isTypedArray;/** Used for built-in method references. */var objectProto$d=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$c=objectProto$d.hasOwnProperty;/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(value,inherited){var isArr=isArray$1(value),isArg=!isArr&&isArguments$1(value),isBuff=!isArr&&!isArg&&isBuffer$1(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray$1(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty$c.call(value,key))&&!(skipIndexes&&(// Safari 9 has enumerable `arguments.length` in strict mode.
key=='length'||// Node.js 0.10 has enumerable non-index properties on buffers.
isBuff&&(key=='offset'||key=='parent')||// PhantomJS 2 has enumerable non-index properties on typed arrays.
isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset')||// Skip index properties.
isIndex(key,length)))){result.push(key);}}return result;}/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(func,transform){return function(arg){return func(transform(arg));};}/* Built-in method references for those with the same name as other `lodash` methods. */var nativeKeys=overArg(Object.keys,Object);var nativeKeys$1=nativeKeys;/** Used for built-in method references. */var objectProto$c=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$b=objectProto$c.hasOwnProperty;/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeys(object){if(!isPrototype(object)){return nativeKeys$1(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty$b.call(object,key)&&key!='constructor'){result.push(key);}}return result;}/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}/** Used for built-in method references. */var objectProto$b=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$a=objectProto$b.hasOwnProperty;/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */var assign=createAssigner(function(object,source){if(isPrototype(source)||isArrayLike(source)){copyObject(source,keys(source),object);return;}for(var key in source){if(hasOwnProperty$a.call(source,key)){assignValue(object,key,source[key]);}}});var assign$1=assign;/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}/** Used for built-in method references. */var objectProto$a=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$9=objectProto$a.hasOwnProperty;/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object);}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty$9.call(object,key)))){result.push(key);}}return result;}/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */function isKey(value,object){if(isArray$1(value)){return false;}var type=_typeof(value);if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}/* Built-in method references that are verified to be native. */var nativeCreate=getNative(Object,'create');var nativeCreate$1=nativeCreate;/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function hashClear(){this.__data__=nativeCreate$1?nativeCreate$1(null):{};this.size=0;}/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result;}/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED$2='__lodash_hash_undefined__';/** Used for built-in method references. */var objectProto$9=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$8=objectProto$9.hasOwnProperty;/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(key){var data=this.__data__;if(nativeCreate$1){var result=data[key];return result===HASH_UNDEFINED$2?undefined:result;}return hasOwnProperty$8.call(data,key)?data[key]:undefined;}/** Used for built-in method references. */var objectProto$8=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$7=objectProto$8.hasOwnProperty;/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(key){var data=this.__data__;return nativeCreate$1?data[key]!==undefined:hasOwnProperty$7.call(data,key);}/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED$1='__lodash_hash_undefined__';/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=nativeCreate$1&&value===undefined?HASH_UNDEFINED$1:value;return this;}/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function listCacheClear(){this.__data__=[];this.size=0;}/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}/** Used for built-in method references. */var arrayProto=Array.prototype;/** Built-in value references. */var splice=arrayProto.splice;/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}--this.size;return true;}/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else{data[index][1]=value;}return this;}/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/* Built-in method references that are verified to be native. */var Map$1=getNative(root$1,'Map');var Map$2=Map$1;/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function mapCacheClear(){this.size=0;this.__data__={'hash':new Hash(),'map':new(Map$2||ListCache)(),'string':new Hash()};}/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(value){var type=_typeof(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function mapCacheDelete(key){var result=getMapData(this,key)['delete'](key);this.size-=result?1:0;return result;}/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this;}/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/** Error message constants. */var FUNC_ERROR_TEXT$1='Expected a function';/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */function memoize(func,resolver){if(typeof func!='function'||resolver!=null&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT$1);}var memoized=function memoized(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result)||cache;return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Expose `MapCache`.
memoize.Cache=MapCache;/** Used as the maximum memoize cache size. */var MAX_MEMOIZE_SIZE=500;/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */function memoizeCapped(func){var result=memoize(func,function(key){if(cache.size===MAX_MEMOIZE_SIZE){cache.clear();}return key;});var cache=result.cache;return result;}/** Used to match property names within property paths. */var rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */var stringToPath=memoizeCapped(function(string){var result=[];if(string.charCodeAt(0)===46/* . */){result.push('');}string.replace(rePropName,function(match,number,quote,subString){result.push(quote?subString.replace(reEscapeChar,'$1'):number||match);});return result;});var stringToPath$1=stringToPath;/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */function toString(value){return value==null?'':baseToString(value);}/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */function castPath(value,object){if(isArray$1(value)){return value;}return isKey(value,object)?[value]:stringToPath$1(toString(value));}/** Used as references for various `Number` constants. */var INFINITY$1=1/0;/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY$1?'-0':result;}/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */function baseGet(object,path){path=castPath(path,object);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined;}/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result;}/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}/** Built-in value references. */var spreadableSymbol=Symbol$2?Symbol$2.isConcatSpreadable:undefined;/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */function isFlattenable(value){return isArray$1(value)||isArguments$1(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol]);}/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=isFlattenable);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){// Recursively flatten arrays (susceptible to call stack limits).
baseFlatten(value,depth-1,predicate,isStrict,result);}else{arrayPush(result,value);}}else if(!isStrict){result[result.length]=value;}}return result;}/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */function flatten(array){var length=array==null?0:array.length;return length?baseFlatten(array,1):[];}/** Built-in value references. */var getPrototype=overArg(Object.getPrototypeOf,Object);var getPrototype$1=getPrototype;/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */function baseSlice(array,start,end){var index=-1,length=array.length;if(start<0){start=-start>length?0:length+start;}end=end>length?length:end;if(end<0){end+=length;}length=start>end?0:end-start>>>0;start>>>=0;var result=Array(length);while(++index<length){result[index]=array[index+start];}return result;}/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array==null?0:array.length;if(initAccum&&length){accumulator=array[++index];}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}return accumulator;}/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function stackClear(){this.__data__=new ListCache();this.size=0;}/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function stackDelete(key){var data=this.__data__,result=data['delete'](key);this.size=data.size;return result;}/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function stackGet(key){return this.__data__.get(key);}/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function stackHas(key){return this.__data__.has(key);}/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE$2=200;/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map$2||pairs.length<LARGE_ARRAY_SIZE$2-1){pairs.push([key,value]);this.size=++data.size;return this;}data=this.__data__=new MapCache(pairs);}data.set(key,value);this.size=data.size;return this;}/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */function baseAssignIn(object,source){return object&&copyObject(source,keysIn(source),object);}/** Detect free variable `exports`. */var freeExports=(typeof exports==="undefined"?"undefined":_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&(typeof module==="undefined"?"undefined":_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Built-in value references. */var Buffer=moduleExports?root$1.Buffer:undefined,allocUnsafe=Buffer?Buffer.allocUnsafe:undefined;/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);buffer.copy(result);return result;}/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function arrayFilter(array,predicate){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result;}/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function stubArray(){return[];}/** Used for built-in method references. */var objectProto$7=Object.prototype;/** Built-in value references. */var propertyIsEnumerable=objectProto$7.propertyIsEnumerable;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols$1=Object.getOwnPropertySymbols;/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbols=!nativeGetSymbols$1?stubArray:function(object){if(object==null){return[];}object=Object(object);return arrayFilter(nativeGetSymbols$1(object),function(symbol){return propertyIsEnumerable.call(object,symbol);});};var getSymbols$1=getSymbols;/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */function copySymbols(source,object){return copyObject(source,getSymbols$1(source),object);}/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols;/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbolsIn=!nativeGetSymbols?stubArray:function(object){var result=[];while(object){arrayPush(result,getSymbols$1(object));object=getPrototype$1(object);}return result;};var getSymbolsIn$1=getSymbolsIn;/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */function copySymbolsIn(source,object){return copyObject(source,getSymbolsIn$1(source),object);}/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray$1(object)?result:arrayPush(result,symbolsFunc(object));}/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols$1);}/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn$1);}/* Built-in method references that are verified to be native. */var DataView=getNative(root$1,'DataView');var DataView$1=DataView;/* Built-in method references that are verified to be native. */var Promise$1=getNative(root$1,'Promise');var Promise$2=Promise$1;/* Built-in method references that are verified to be native. */var Set$1=getNative(root$1,'Set');var Set$2=Set$1;/** `Object#toString` result references. */var mapTag$5='[object Map]',objectTag$2='[object Object]',promiseTag='[object Promise]',setTag$5='[object Set]',weakMapTag$1='[object WeakMap]';var dataViewTag$3='[object DataView]';/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView$1),mapCtorString=toSource(Map$2),promiseCtorString=toSource(Promise$2),setCtorString=toSource(Set$2),weakMapCtorString=toSource(WeakMap$1);/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if(DataView$1&&getTag(new DataView$1(new ArrayBuffer(1)))!=dataViewTag$3||Map$2&&getTag(new Map$2())!=mapTag$5||Promise$2&&getTag(Promise$2.resolve())!=promiseTag||Set$2&&getTag(new Set$2())!=setTag$5||WeakMap$1&&getTag(new WeakMap$1())!=weakMapTag$1){getTag=function getTag(value){var result=baseGetTag(value),Ctor=result==objectTag$2?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):'';if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag$3;case mapCtorString:return mapTag$5;case promiseCtorString:return promiseTag;case setCtorString:return setTag$5;case weakMapCtorString:return weakMapTag$1;}}return result;};}var getTag$1=getTag;/** Used for built-in method references. */var objectProto$6=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$6=objectProto$6.hasOwnProperty;/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */function initCloneArray(array){var length=array.length,result=new array.constructor(length);// Add properties assigned by `RegExp#exec`.
if(length&&typeof array[0]=='string'&&hasOwnProperty$6.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}/** Built-in value references. */var Uint8Array$1=root$1.Uint8Array;var Uint8Array$2=Uint8Array$1;/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array$2(result).set(new Uint8Array$2(arrayBuffer));return result;}/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}/** Used to convert symbols to primitives and strings. */var symbolProto$1=Symbol$2?Symbol$2.prototype:undefined,symbolValueOf$1=symbolProto$1?symbolProto$1.valueOf:undefined;/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */function cloneSymbol(symbol){return symbolValueOf$1?Object(symbolValueOf$1.call(symbol)):{};}/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}/** `Object#toString` result references. */var boolTag$2='[object Boolean]',dateTag$2='[object Date]',mapTag$4='[object Map]',numberTag$2='[object Number]',regexpTag$3='[object RegExp]',setTag$4='[object Set]',stringTag$3='[object String]',symbolTag$2='[object Symbol]';var arrayBufferTag$2='[object ArrayBuffer]',dataViewTag$2='[object DataView]',float32Tag$1='[object Float32Array]',float64Tag$1='[object Float64Array]',int8Tag$1='[object Int8Array]',int16Tag$1='[object Int16Array]',int32Tag$1='[object Int32Array]',uint8Tag$1='[object Uint8Array]',uint8ClampedTag$1='[object Uint8ClampedArray]',uint16Tag$1='[object Uint16Array]',uint32Tag$1='[object Uint32Array]';/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneByTag(object,tag,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag$2:return cloneArrayBuffer(object);case boolTag$2:case dateTag$2:return new Ctor(+object);case dataViewTag$2:return cloneDataView(object,isDeep);case float32Tag$1:case float64Tag$1:case int8Tag$1:case int16Tag$1:case int32Tag$1:case uint8Tag$1:case uint8ClampedTag$1:case uint16Tag$1:case uint32Tag$1:return cloneTypedArray(object,isDeep);case mapTag$4:return new Ctor();case numberTag$2:case stringTag$3:return new Ctor(object);case regexpTag$3:return cloneRegExp(object);case setTag$4:return new Ctor();case symbolTag$2:return cloneSymbol(object);}}/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate$1(getPrototype$1(object)):{};}/** `Object#toString` result references. */var mapTag$3='[object Map]';/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */function baseIsMap(value){return isObjectLike(value)&&getTag$1(value)==mapTag$3;}/* Node.js helper references. */var nodeIsMap=nodeUtil$1&&nodeUtil$1.isMap;/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */var isMap=nodeIsMap?baseUnary(nodeIsMap):baseIsMap;var isMap$1=isMap;/** `Object#toString` result references. */var setTag$3='[object Set]';/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */function baseIsSet(value){return isObjectLike(value)&&getTag$1(value)==setTag$3;}/* Node.js helper references. */var nodeIsSet=nodeUtil$1&&nodeUtil$1.isSet;/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */var isSet=nodeIsSet?baseUnary(nodeIsSet):baseIsSet;var isSet$1=isSet;/** Used to compose bitmasks for cloning. */var CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG$1=4;/** `Object#toString` result references. */var argsTag$1='[object Arguments]',arrayTag$1='[object Array]',boolTag$1='[object Boolean]',dateTag$1='[object Date]',errorTag$1='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag$2='[object Map]',numberTag$1='[object Number]',objectTag$1='[object Object]',regexpTag$2='[object RegExp]',setTag$2='[object Set]',stringTag$2='[object String]',symbolTag$1='[object Symbol]',weakMapTag='[object WeakMap]';var arrayBufferTag$1='[object ArrayBuffer]',dataViewTag$1='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag$1]=cloneableTags[arrayTag$1]=cloneableTags[arrayBufferTag$1]=cloneableTags[dataViewTag$1]=cloneableTags[boolTag$1]=cloneableTags[dateTag$1]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag$2]=cloneableTags[numberTag$1]=cloneableTags[objectTag$1]=cloneableTags[regexpTag$2]=cloneableTags[setTag$2]=cloneableTags[stringTag$2]=cloneableTags[symbolTag$1]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag$1]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */function baseClone(value,bitmask,customizer,key,object,stack){var result,isDeep=bitmask&CLONE_DEEP_FLAG,isFlat=bitmask&CLONE_FLAT_FLAG,isFull=bitmask&CLONE_SYMBOLS_FLAG$1;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject(value)){return value;}var isArr=isArray$1(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag$1(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer$1(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag$1||tag==argsTag$1||isFunc&&!object){result=isFlat||isFunc?{}:initCloneObject(value);if(!isDeep){return isFlat?copySymbolsIn(value,baseAssignIn(result,value)):copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,isDeep);}}// Check for circular references and return its corresponding clone.
stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);if(isSet$1(value)){value.forEach(function(subValue){result.add(baseClone(subValue,bitmask,customizer,subValue,value,stack));});}else if(isMap$1(value)){value.forEach(function(subValue,key){result.set(key,baseClone(subValue,bitmask,customizer,key,value,stack));});}var keysFunc=isFull?isFlat?getAllKeysIn:getAllKeys:isFlat?keysIn:keys;var props=isArr?undefined:keysFunc(value);arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
assignValue(result,key,baseClone(subValue,bitmask,customizer,key,value,stack));});return result;}/** Used to compose bitmasks for cloning. */var CLONE_SYMBOLS_FLAG=4;/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */function clone(value){return baseClone(value,CLONE_SYMBOLS_FLAG);}/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */function compact(array){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value){result[resIndex++]=value;}}return result;}/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */function setCacheHas(value){return this.__data__.has(value);}/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */function SetCache(values){var index=-1,length=values==null?0:values.length;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}// Add methods to `SetCache`.
SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */function arraySome(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function cacheHas(cache,key){return cache.has(key);}/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG$5=1,COMPARE_UNORDERED_FLAG$3=2;/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */function equalArrays(array,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG$5,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Check that cyclic values are equal.
var arrStacked=stack.get(array);var othStacked=stack.get(other);if(arrStacked&&othStacked){return arrStacked==other&&othStacked==array;}var index=-1,result=true,seen=bitmask&COMPARE_UNORDERED_FLAG$3?new SetCache():undefined;stack.set(array,other);stack.set(other,array);// Ignore non-index properties.
while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
if(seen){if(!arraySome(other,function(othValue,othIndex){if(!cacheHas(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){return seen.push(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){result=false;break;}}stack['delete'](array);stack['delete'](other);return result;}/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG$4=1,COMPARE_UNORDERED_FLAG$2=2;/** `Object#toString` result references. */var boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',mapTag$1='[object Map]',numberTag='[object Number]',regexpTag$1='[object RegExp]',setTag$1='[object Set]',stringTag$1='[object String]',symbolTag='[object Symbol]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]';/** Used to convert symbols to primitives and strings. */var symbolProto=Symbol$2?Symbol$2.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array$2(object),new Uint8Array$2(other))){return false;}return true;case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag$1:case stringTag$1:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return object==other+'';case mapTag$1:var convert=mapToArray;case setTag$1:var isPartial=bitmask&COMPARE_PARTIAL_FLAG$4;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=COMPARE_UNORDERED_FLAG$2;// Recursively compare objects (susceptible to call stack limits).
stack.set(object,other);var result=equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);stack['delete'](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}return false;}/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG$3=1;/** Used for built-in method references. */var objectProto$5=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$5=objectProto$5.hasOwnProperty;/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalObjects(object,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG$3,objProps=getAllKeys(object),objLength=objProps.length,othProps=getAllKeys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty$5.call(other,key))){return false;}}// Check that cyclic values are equal.
var objStacked=stack.get(object);var othStacked=stack.get(other);if(objStacked&&othStacked){return objStacked==other&&othStacked==object;}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);stack['delete'](other);return result;}/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG$2=1;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',objectTag='[object Object]';/** Used for built-in method references. */var objectProto$4=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$4=objectProto$4.hasOwnProperty;/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){var objIsArr=isArray$1(object),othIsArr=isArray$1(other),objTag=objIsArr?arrayTag:getTag$1(object),othTag=othIsArr?arrayTag:getTag$1(other);objTag=objTag==argsTag?objectTag:objTag;othTag=othTag==argsTag?objectTag:othTag;var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&isBuffer$1(object)){if(!isBuffer$1(other)){return false;}objIsArr=true;objIsObj=false;}if(isSameTag&&!objIsObj){stack||(stack=new Stack());return objIsArr||isTypedArray$1(object)?equalArrays(object,other,bitmask,customizer,equalFunc,stack):equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack);}if(!(bitmask&COMPARE_PARTIAL_FLAG$2)){var objIsWrapped=objIsObj&&hasOwnProperty$4.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty$4.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack());return equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack());return equalObjects(object,other,bitmask,customizer,equalFunc,stack);}/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */function baseIsEqual(value,other,bitmask,customizer,stack){if(value===other){return true;}if(value==null||other==null||!isObjectLike(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack);}/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG$1=1,COMPARE_UNORDERED_FLAG$1=2;/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return!length;}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false;}}else{var stack=new Stack();if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}if(!(result===undefined?baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG$1|COMPARE_UNORDERED_FLAG$1,customizer,stack):result)){return false;}}}return true;}/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */function isStrictComparable(value){return value===value&&!isObject(value);}/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result;}/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}return object[key]===srcValue&&(srcValue!==undefined||key in Object(object));};}/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}return function(object){return object===source||baseIsMatch(object,source,matchData);};}/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */function baseHasIn(object,key){return object!=null&&key in Object(object);}/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */function hasPath(object,path,hasFunc){path=castPath(path,object);var index=-1,length=path.length,result=false;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result||++index!=length){return result;}length=object==null?0:object.length;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray$1(object)||isArguments$1(object));}/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}return function(object){var objValue=get(object,path);return objValue===undefined&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG);};}/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function baseProperty(key){return function(object){return object==null?undefined:object[key];};}/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function basePropertyDeep(path){return function(object){return baseGet(object,path);};}/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */function baseIteratee(value){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
if(typeof value=='function'){return value;}if(value==null){return identity;}if(_typeof(value)=='object'){return isArray$1(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}return property(value);}/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */function arrayAggregator(array,setter,iteratee,accumulator){var index=-1,length=array==null?0:array.length;while(++index<length){var value=array[index];setter(accumulator,value,iteratee(value),array);}return accumulator;}/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;while(length--){var key=props[fromRight?length:++index];if(iteratee(iterable[key],key,iterable)===false){break;}}return object;};}/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */var baseFor=createBaseFor();var baseFor$1=baseFor;/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */function baseForOwn(object,iteratee){return object&&baseFor$1(object,iteratee,keys);}/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){if(collection==null){return collection;}if(!isArrayLike(collection)){return eachFunc(collection,iteratee);}var length=collection.length,index=fromRight?length:-1,iterable=Object(collection);while(fromRight?index--:++index<length){if(iteratee(iterable[index],index,iterable)===false){break;}}return collection;};}/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */var baseEach=createBaseEach(baseForOwn);var baseEach$1=baseEach;/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */function baseAggregator(collection,setter,iteratee,accumulator){baseEach$1(collection,function(value,key,collection){setter(accumulator,value,iteratee(value),collection);});return accumulator;}/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */function createAggregator(setter,initializer){return function(collection,iteratee){var func=isArray$1(collection)?arrayAggregator:baseAggregator,accumulator=initializer?initializer():{};return func(collection,setter,baseIteratee(iteratee),accumulator);};}/** Used for built-in method references. */var objectProto$3=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$3=objectProto$3.hasOwnProperty;/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */var defaults=baseRest(function(object,sources){object=Object(object);var index=-1;var length=sources.length;var guard=length>2?sources[2]:undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){length=1;}while(++index<length){var source=sources[index];var props=keysIn(source);var propsIndex=-1;var propsLength=props.length;while(++propsIndex<propsLength){var key=props[propsIndex];var value=object[key];if(value===undefined||eq(value,objectProto$3[key])&&!hasOwnProperty$3.call(object,key)){object[key]=source[key];}}}return object;});var defaults$1=defaults;/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */function arrayIncludesWith(array,value,comparator){var index=-1,length=array==null?0:array.length;while(++index<length){if(comparator(value,array[index])){return true;}}return false;}/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE$1=200;/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */function baseDifference(array,values,iteratee,comparator){var index=-1,includes=arrayIncludes,isCommon=true,length=array.length,result=[],valuesLength=values.length;if(!length){return result;}if(iteratee){values=arrayMap(values,baseUnary(iteratee));}if(comparator){includes=arrayIncludesWith;isCommon=false;}else if(values.length>=LARGE_ARRAY_SIZE$1){includes=cacheHas;isCommon=false;values=new SetCache(values);}outer:while(++index<length){var value=array[index],computed=iteratee==null?value:iteratee(value);value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var valuesIndex=valuesLength;while(valuesIndex--){if(values[valuesIndex]===computed){continue outer;}}result.push(value);}else if(!includes(values,computed,comparator)){result.push(value);}}return result;}/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */var difference=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true)):[];});var difference$1=difference;/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */function last(array){var length=array==null?0:array.length;return length?array[length-1]:undefined;}/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.drop([1, 2, 3]);
 * // => [2, 3]
 *
 * _.drop([1, 2, 3], 2);
 * // => [3]
 *
 * _.drop([1, 2, 3], 5);
 * // => []
 *
 * _.drop([1, 2, 3], 0);
 * // => [1, 2, 3]
 */function drop(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);return baseSlice(array,n<0?0:n,length);}/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.dropRight([1, 2, 3]);
 * // => [1, 2]
 *
 * _.dropRight([1, 2, 3], 2);
 * // => [1]
 *
 * _.dropRight([1, 2, 3], 5);
 * // => []
 *
 * _.dropRight([1, 2, 3], 0);
 * // => [1, 2, 3]
 */function dropRight(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);n=length-n;return baseSlice(array,0,n<0?0:n);}/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */function castFunction(value){return typeof value=='function'?value:identity;}/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */function forEach(collection,iteratee){var func=isArray$1(collection)?arrayEach:baseEach$1;return func(collection,castFunction(iteratee));}/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */function arrayEvery(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(!predicate(array[index],index,array)){return false;}}return true;}/**
 * The base implementation of `_.every` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`
 */function baseEvery(collection,predicate){var result=true;baseEach$1(collection,function(value,index,collection){result=!!predicate(value,index,collection);return result;});return result;}/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */function every(collection,predicate,guard){var func=isArray$1(collection)?arrayEvery:baseEvery;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}return func(collection,baseIteratee(predicate));}/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function baseFilter(collection,predicate){var result=[];baseEach$1(collection,function(value,index,collection){if(predicate(value,index,collection)){result.push(value);}});return result;}/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */function filter(collection,predicate){var func=isArray$1(collection)?arrayFilter:baseFilter;return func(collection,baseIteratee(predicate));}/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */function createFind(findIndexFunc){return function(collection,predicate,fromIndex){var iterable=Object(collection);if(!isArrayLike(collection)){var iteratee=baseIteratee(predicate);collection=keys(collection);predicate=function predicate(key){return iteratee(iterable[key],key,iterable);};}var index=findIndexFunc(collection,predicate,fromIndex);return index>-1?iterable[iteratee?collection[index]:index]:undefined;};}/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax$2=Math.max;/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */function findIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax$2(length+index,0);}return baseFindIndex(array,baseIteratee(predicate),index);}/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */var find=createFind(findIndex);var find$1=find;/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */function head(array){return array&&array.length?array[0]:undefined;}/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function baseMap(collection,iteratee){var index=-1,result=isArrayLike(collection)?Array(collection.length):[];baseEach$1(collection,function(value,key,collection){result[++index]=iteratee(value,key,collection);});return result;}/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */function map(collection,iteratee){var func=isArray$1(collection)?arrayMap:baseMap;return func(collection,baseIteratee(iteratee));}/**
 * Creates a flattened array of values by running each element in `collection`
 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
 * with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [n, n];
 * }
 *
 * _.flatMap([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */function flatMap(collection,iteratee){return baseFlatten(map(collection,iteratee),1);}/** Used for built-in method references. */var objectProto$2=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$2=objectProto$2.hasOwnProperty;/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */var groupBy=createAggregator(function(result,value,key){if(hasOwnProperty$2.call(result,key)){result[key].push(value);}else{baseAssignValue(result,key,[value]);}});var groupBy$1=groupBy;/** Used for built-in method references. */var objectProto$1=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$1=objectProto$1.hasOwnProperty;/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */function baseHas(object,key){return object!=null&&hasOwnProperty$1.call(object,key);}/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */function has(object,path){return object!=null&&hasPath(object,path,baseHas);}/** `Object#toString` result references. */var stringTag='[object String]';/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */function isString(value){return typeof value=='string'||!isArray$1(value)&&isObjectLike(value)&&baseGetTag(value)==stringTag;}/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */function baseValues(object,props){return arrayMap(props,function(key){return object[key];});}/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */function values(object){return object==null?[]:baseValues(object,keys(object));}/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax$1=Math.max;/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */function includes(collection,value,fromIndex,guard){collection=isArrayLike(collection)?collection:values(collection);fromIndex=fromIndex&&!guard?toInteger(fromIndex):0;var length=collection.length;if(fromIndex<0){fromIndex=nativeMax$1(length+fromIndex,0);}return isString(collection)?fromIndex<=length&&collection.indexOf(value,fromIndex)>-1:!!length&&baseIndexOf(collection,value,fromIndex)>-1;}/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax=Math.max;/**
 * Gets the index at which the first occurrence of `value` is found in `array`
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. If `fromIndex` is negative, it's used as the
 * offset from the end of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.indexOf([1, 2, 1, 2], 2);
 * // => 1
 *
 * // Search from the `fromIndex`.
 * _.indexOf([1, 2, 1, 2], 2, 2);
 * // => 3
 */function indexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseIndexOf(array,value,index);}/** `Object#toString` result references. */var mapTag='[object Map]',setTag='[object Set]';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */function isEmpty(value){if(value==null){return true;}if(isArrayLike(value)&&(isArray$1(value)||typeof value=='string'||typeof value.splice=='function'||isBuffer$1(value)||isTypedArray$1(value)||isArguments$1(value))){return!value.length;}var tag=getTag$1(value);if(tag==mapTag||tag==setTag){return!value.size;}if(isPrototype(value)){return!baseKeys(value).length;}for(var key in value){if(hasOwnProperty.call(value,key)){return false;}}return true;}/** `Object#toString` result references. */var regexpTag='[object RegExp]';/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */function baseIsRegExp(value){return isObjectLike(value)&&baseGetTag(value)==regexpTag;}/* Node.js helper references. */var nodeIsRegExp=nodeUtil$1&&nodeUtil$1.isRegExp;/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */var isRegExp=nodeIsRegExp?baseUnary(nodeIsRegExp):baseIsRegExp;var isRegExp$1=isRegExp;/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */function isUndefined(value){return value===undefined;}/** Error message constants. */var FUNC_ERROR_TEXT='Expected a function';/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */function negate(predicate){if(typeof predicate!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return function(){var args=arguments;switch(args.length){case 0:return!predicate.call(this);case 1:return!predicate.call(this,args[0]);case 2:return!predicate.call(this,args[0],args[1]);case 3:return!predicate.call(this,args[0],args[1],args[2]);}return!predicate.apply(this,args);};}/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */function baseSet(object,path,value,customizer){if(!isObject(object)){return object;}path=castPath(path,object);var index=-1,length=path.length,lastIndex=length-1,nested=object;while(nested!=null&&++index<length){var key=toKey(path[index]),newValue=value;if(key==='__proto__'||key==='constructor'||key==='prototype'){return object;}if(index!=lastIndex){var objValue=nested[key];newValue=customizer?customizer(objValue,key,nested):undefined;if(newValue===undefined){newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{};}}assignValue(nested,key,newValue);nested=nested[key];}return object;}/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */function basePickBy(object,paths,predicate){var index=-1,length=paths.length,result={};while(++index<length){var path=paths[index],value=baseGet(object,path);if(predicate(value,path)){baseSet(result,castPath(path,object),value);}}return result;}/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */function pickBy(object,predicate){if(object==null){return{};}var props=arrayMap(getAllKeysIn(object),function(prop){return[prop];});predicate=baseIteratee(predicate);return basePickBy(object,props,function(value,path){return predicate(value,path[0]);});}/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */function baseReduce(collection,iteratee,accumulator,initAccum,eachFunc){eachFunc(collection,function(value,index,collection){accumulator=initAccum?(initAccum=false,value):iteratee(accumulator,value,index,collection);});return accumulator;}/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */function reduce(collection,iteratee,accumulator){var func=isArray$1(collection)?arrayReduce:baseReduce,initAccum=arguments.length<3;return func(collection,baseIteratee(iteratee),accumulator,initAccum,baseEach$1);}/**
 * The opposite of `_.filter`; this method returns the elements of `collection`
 * that `predicate` does **not** return truthy for.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.filter
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': true }
 * ];
 *
 * _.reject(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.reject(users, { 'age': 40, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.reject(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.reject(users, 'active');
 * // => objects for ['barney']
 */function reject(collection,predicate){var func=isArray$1(collection)?arrayFilter:baseFilter;return func(collection,negate(baseIteratee(predicate)));}/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */function baseSome(collection,predicate){var result;baseEach$1(collection,function(value,index,collection){result=predicate(value,index,collection);return!result;});return!!result;}/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */function some(collection,predicate,guard){var func=isArray$1(collection)?arraySome:baseSome;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}return func(collection,baseIteratee(predicate));}/** Used as references for various `Number` constants. */var INFINITY=1/0;/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */var createSet=!(Set$2&&1/setToArray(new Set$2([,-0]))[1]==INFINITY)?noop:function(values){return new Set$2(values);};var createSet$1=createSet;/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */function baseUniq(array,iteratee,comparator){var index=-1,includes=arrayIncludes,length=array.length,isCommon=true,result=[],seen=result;if(comparator){isCommon=false;includes=arrayIncludesWith;}else if(length>=LARGE_ARRAY_SIZE){var set=iteratee?null:createSet$1(array);if(set){return setToArray(set);}isCommon=false;includes=cacheHas;seen=new SetCache();}else{seen=iteratee?[]:result;}outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var seenIndex=seen.length;while(seenIndex--){if(seen[seenIndex]===computed){continue outer;}}if(iteratee){seen.push(computed);}result.push(value);}else if(!includes(seen,computed,comparator)){if(seen!==result){seen.push(computed);}result.push(value);}}return result;}/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */function uniq(array){return array&&array.length?baseUniq(array):[];}function PRINT_ERROR(msg){/* istanbul ignore else - can't override global.console in node.js */if(console&&console.error){console.error("Error: ".concat(msg));}}function PRINT_WARNING(msg){/* istanbul ignore else - can't override global.console in node.js*/if(console&&console.warn){// TODO: modify docs accordingly
console.warn("Warning: ".concat(msg));}}function timer(func){var start=new Date().getTime();var val=func();var end=new Date().getTime();var total=end-start;return{time:total,value:val};}// based on: https://github.com/petkaantonov/bluebird/blob/b97c0d2d487e8c5076e8bd897e0dcd4622d31846/src/util.js#L201-L216
function toFastProperties(toBecomeFast){function FakeConstructor(){}// If our object is used as a constructor, it would receive
FakeConstructor.prototype=toBecomeFast;var fakeInstance=new FakeConstructor();function fakeAccess(){return _typeof(fakeInstance.bar);}// help V8 understand this is a "real" prototype by actually using
// the fake instance.
fakeAccess();fakeAccess();// Always true condition to suppress the Firefox warning of unreachable
// code after a return statement.
return toBecomeFast;}// TODO: duplicated code to avoid extracting another sub-package -- how to avoid?
function tokenLabel$1(tokType){if(hasTokenLabel$1(tokType)){return tokType.LABEL;}else{return tokType.name;}}// TODO: duplicated code to avoid extracting another sub-package -- how to avoid?
function hasTokenLabel$1(obj){return isString(obj.LABEL)&&obj.LABEL!=="";}var AbstractProduction=/*#__PURE__*/function(){function AbstractProduction(_definition){_classCallCheck(this,AbstractProduction);this._definition=_definition;}_createClass(AbstractProduction,[{key:"definition",get:function get(){return this._definition;},set:function set(value){this._definition=value;}},{key:"accept",value:function accept(visitor){visitor.visit(this);forEach(this.definition,function(prod){prod.accept(visitor);});}}]);return AbstractProduction;}();var NonTerminal=/*#__PURE__*/function(_AbstractProduction){_inherits(NonTerminal,_AbstractProduction);var _super=_createSuper(NonTerminal);function NonTerminal(options){var _this3;_classCallCheck(this,NonTerminal);_this3=_super.call(this,[]);_this3.idx=1;assign$1(_assertThisInitialized(_this3),pickBy(options,function(v){return v!==undefined;}));return _this3;}_createClass(NonTerminal,[{key:"definition",get:function get(){if(this.referencedRule!==undefined){return this.referencedRule.definition;}return[];},set:function set(definition){// immutable
}},{key:"accept",value:function accept(visitor){visitor.visit(this);// don't visit children of a reference, we will get cyclic infinite loops if we do so
}}]);return NonTerminal;}(AbstractProduction);var Rule=/*#__PURE__*/function(_AbstractProduction2){_inherits(Rule,_AbstractProduction2);var _super2=_createSuper(Rule);function Rule(options){var _this4;_classCallCheck(this,Rule);_this4=_super2.call(this,options.definition);_this4.orgText="";assign$1(_assertThisInitialized(_this4),pickBy(options,function(v){return v!==undefined;}));return _this4;}return _createClass(Rule);}(AbstractProduction);var Alternative=/*#__PURE__*/function(_AbstractProduction3){_inherits(Alternative,_AbstractProduction3);var _super3=_createSuper(Alternative);function Alternative(options){var _this5;_classCallCheck(this,Alternative);_this5=_super3.call(this,options.definition);_this5.ignoreAmbiguities=false;assign$1(_assertThisInitialized(_this5),pickBy(options,function(v){return v!==undefined;}));return _this5;}return _createClass(Alternative);}(AbstractProduction);var Option=/*#__PURE__*/function(_AbstractProduction4){_inherits(Option,_AbstractProduction4);var _super4=_createSuper(Option);function Option(options){var _this6;_classCallCheck(this,Option);_this6=_super4.call(this,options.definition);_this6.idx=1;assign$1(_assertThisInitialized(_this6),pickBy(options,function(v){return v!==undefined;}));return _this6;}return _createClass(Option);}(AbstractProduction);var RepetitionMandatory=/*#__PURE__*/function(_AbstractProduction5){_inherits(RepetitionMandatory,_AbstractProduction5);var _super5=_createSuper(RepetitionMandatory);function RepetitionMandatory(options){var _this7;_classCallCheck(this,RepetitionMandatory);_this7=_super5.call(this,options.definition);_this7.idx=1;assign$1(_assertThisInitialized(_this7),pickBy(options,function(v){return v!==undefined;}));return _this7;}return _createClass(RepetitionMandatory);}(AbstractProduction);var RepetitionMandatoryWithSeparator=/*#__PURE__*/function(_AbstractProduction6){_inherits(RepetitionMandatoryWithSeparator,_AbstractProduction6);var _super6=_createSuper(RepetitionMandatoryWithSeparator);function RepetitionMandatoryWithSeparator(options){var _this8;_classCallCheck(this,RepetitionMandatoryWithSeparator);_this8=_super6.call(this,options.definition);_this8.idx=1;assign$1(_assertThisInitialized(_this8),pickBy(options,function(v){return v!==undefined;}));return _this8;}return _createClass(RepetitionMandatoryWithSeparator);}(AbstractProduction);var Repetition=/*#__PURE__*/function(_AbstractProduction7){_inherits(Repetition,_AbstractProduction7);var _super7=_createSuper(Repetition);function Repetition(options){var _this9;_classCallCheck(this,Repetition);_this9=_super7.call(this,options.definition);_this9.idx=1;assign$1(_assertThisInitialized(_this9),pickBy(options,function(v){return v!==undefined;}));return _this9;}return _createClass(Repetition);}(AbstractProduction);var RepetitionWithSeparator=/*#__PURE__*/function(_AbstractProduction8){_inherits(RepetitionWithSeparator,_AbstractProduction8);var _super8=_createSuper(RepetitionWithSeparator);function RepetitionWithSeparator(options){var _this10;_classCallCheck(this,RepetitionWithSeparator);_this10=_super8.call(this,options.definition);_this10.idx=1;assign$1(_assertThisInitialized(_this10),pickBy(options,function(v){return v!==undefined;}));return _this10;}return _createClass(RepetitionWithSeparator);}(AbstractProduction);var Alternation=/*#__PURE__*/function(_AbstractProduction9){_inherits(Alternation,_AbstractProduction9);var _super9=_createSuper(Alternation);function Alternation(options){var _this11;_classCallCheck(this,Alternation);_this11=_super9.call(this,options.definition);_this11.idx=1;_this11.ignoreAmbiguities=false;_this11.hasPredicates=false;assign$1(_assertThisInitialized(_this11),pickBy(options,function(v){return v!==undefined;}));return _this11;}_createClass(Alternation,[{key:"definition",get:function get(){return this._definition;},set:function set(value){this._definition=value;}}]);return Alternation;}(AbstractProduction);var Terminal=/*#__PURE__*/function(){function Terminal(options){_classCallCheck(this,Terminal);this.idx=1;assign$1(this,pickBy(options,function(v){return v!==undefined;}));}_createClass(Terminal,[{key:"accept",value:function accept(visitor){visitor.visit(this);}}]);return Terminal;}();function serializeGrammar(topRules){return map(topRules,serializeProduction);}function serializeProduction(node){function convertDefinition(definition){return map(definition,serializeProduction);}/* istanbul ignore else */if(node instanceof NonTerminal){var serializedNonTerminal={type:"NonTerminal",name:node.nonTerminalName,idx:node.idx};if(isString(node.label)){serializedNonTerminal.label=node.label;}return serializedNonTerminal;}else if(node instanceof Alternative){return{type:"Alternative",definition:convertDefinition(node.definition)};}else if(node instanceof Option){return{type:"Option",idx:node.idx,definition:convertDefinition(node.definition)};}else if(node instanceof RepetitionMandatory){return{type:"RepetitionMandatory",idx:node.idx,definition:convertDefinition(node.definition)};}else if(node instanceof RepetitionMandatoryWithSeparator){return{type:"RepetitionMandatoryWithSeparator",idx:node.idx,separator:serializeProduction(new Terminal({terminalType:node.separator})),definition:convertDefinition(node.definition)};}else if(node instanceof RepetitionWithSeparator){return{type:"RepetitionWithSeparator",idx:node.idx,separator:serializeProduction(new Terminal({terminalType:node.separator})),definition:convertDefinition(node.definition)};}else if(node instanceof Repetition){return{type:"Repetition",idx:node.idx,definition:convertDefinition(node.definition)};}else if(node instanceof Alternation){return{type:"Alternation",idx:node.idx,definition:convertDefinition(node.definition)};}else if(node instanceof Terminal){var serializedTerminal={type:"Terminal",name:node.terminalType.name,label:tokenLabel$1(node.terminalType),idx:node.idx};if(isString(node.label)){serializedTerminal.terminalLabel=node.label;}var pattern=node.terminalType.PATTERN;if(node.terminalType.PATTERN){serializedTerminal.pattern=isRegExp$1(pattern)?pattern.source:pattern;}return serializedTerminal;}else if(node instanceof Rule){return{type:"Rule",name:node.name,orgText:node.orgText,definition:convertDefinition(node.definition)};/* c8 ignore next 3 */}else{throw Error("non exhaustive match");}}var GAstVisitor=/*#__PURE__*/function(){function GAstVisitor(){_classCallCheck(this,GAstVisitor);}_createClass(GAstVisitor,[{key:"visit",value:function visit(node){var nodeAny=node;switch(nodeAny.constructor){case NonTerminal:return this.visitNonTerminal(nodeAny);case Alternative:return this.visitAlternative(nodeAny);case Option:return this.visitOption(nodeAny);case RepetitionMandatory:return this.visitRepetitionMandatory(nodeAny);case RepetitionMandatoryWithSeparator:return this.visitRepetitionMandatoryWithSeparator(nodeAny);case RepetitionWithSeparator:return this.visitRepetitionWithSeparator(nodeAny);case Repetition:return this.visitRepetition(nodeAny);case Alternation:return this.visitAlternation(nodeAny);case Terminal:return this.visitTerminal(nodeAny);case Rule:return this.visitRule(nodeAny);/* c8 ignore next 2 */default:throw Error("non exhaustive match");}}/* c8 ignore next */},{key:"visitNonTerminal",value:function visitNonTerminal(node){}/* c8 ignore next */},{key:"visitAlternative",value:function visitAlternative(node){}/* c8 ignore next */},{key:"visitOption",value:function visitOption(node){}/* c8 ignore next */},{key:"visitRepetition",value:function visitRepetition(node){}/* c8 ignore next */},{key:"visitRepetitionMandatory",value:function visitRepetitionMandatory(node){}/* c8 ignore next 3 */},{key:"visitRepetitionMandatoryWithSeparator",value:function visitRepetitionMandatoryWithSeparator(node){}/* c8 ignore next */},{key:"visitRepetitionWithSeparator",value:function visitRepetitionWithSeparator(node){}/* c8 ignore next */},{key:"visitAlternation",value:function visitAlternation(node){}/* c8 ignore next */},{key:"visitTerminal",value:function visitTerminal(node){}/* c8 ignore next */},{key:"visitRule",value:function visitRule(node){}}]);return GAstVisitor;}();function isSequenceProd(prod){return prod instanceof Alternative||prod instanceof Option||prod instanceof Repetition||prod instanceof RepetitionMandatory||prod instanceof RepetitionMandatoryWithSeparator||prod instanceof RepetitionWithSeparator||prod instanceof Terminal||prod instanceof Rule;}function isOptionalProd(prod){var alreadyVisited=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];var isDirectlyOptional=prod instanceof Option||prod instanceof Repetition||prod instanceof RepetitionWithSeparator;if(isDirectlyOptional){return true;}// note that this can cause infinite loop if one optional empty TOP production has a cyclic dependency with another
// empty optional top rule
// may be indirectly optional ((A?B?C?) | (D?E?F?))
if(prod instanceof Alternation){// for OR its enough for just one of the alternatives to be optional
return some(prod.definition,function(subProd){return isOptionalProd(subProd,alreadyVisited);});}else if(prod instanceof NonTerminal&&includes(alreadyVisited,prod)){// avoiding stack overflow due to infinite recursion
return false;}else if(prod instanceof AbstractProduction){if(prod instanceof NonTerminal){alreadyVisited.push(prod);}return every(prod.definition,function(subProd){return isOptionalProd(subProd,alreadyVisited);});}else{return false;}}function isBranchingProd(prod){return prod instanceof Alternation;}function getProductionDslName(prod){/* istanbul ignore else */if(prod instanceof NonTerminal){return"SUBRULE";}else if(prod instanceof Option){return"OPTION";}else if(prod instanceof Alternation){return"OR";}else if(prod instanceof RepetitionMandatory){return"AT_LEAST_ONE";}else if(prod instanceof RepetitionMandatoryWithSeparator){return"AT_LEAST_ONE_SEP";}else if(prod instanceof RepetitionWithSeparator){return"MANY_SEP";}else if(prod instanceof Repetition){return"MANY";}else if(prod instanceof Terminal){return"CONSUME";/* c8 ignore next 3 */}else{throw Error("non exhaustive match");}}/**
 *  A Grammar Walker that computes the "remaining" grammar "after" a productions in the grammar.
 */var RestWalker=/*#__PURE__*/function(){function RestWalker(){_classCallCheck(this,RestWalker);}_createClass(RestWalker,[{key:"walk",value:function walk(prod){var _this12=this;var prevRest=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];forEach(prod.definition,function(subProd,index){var currRest=drop(prod.definition,index+1);/* istanbul ignore else */if(subProd instanceof NonTerminal){_this12.walkProdRef(subProd,currRest,prevRest);}else if(subProd instanceof Terminal){_this12.walkTerminal(subProd,currRest,prevRest);}else if(subProd instanceof Alternative){_this12.walkFlat(subProd,currRest,prevRest);}else if(subProd instanceof Option){_this12.walkOption(subProd,currRest,prevRest);}else if(subProd instanceof RepetitionMandatory){_this12.walkAtLeastOne(subProd,currRest,prevRest);}else if(subProd instanceof RepetitionMandatoryWithSeparator){_this12.walkAtLeastOneSep(subProd,currRest,prevRest);}else if(subProd instanceof RepetitionWithSeparator){_this12.walkManySep(subProd,currRest,prevRest);}else if(subProd instanceof Repetition){_this12.walkMany(subProd,currRest,prevRest);}else if(subProd instanceof Alternation){_this12.walkOr(subProd,currRest,prevRest);}else{throw Error("non exhaustive match");}});}},{key:"walkTerminal",value:function walkTerminal(terminal,currRest,prevRest){}},{key:"walkProdRef",value:function walkProdRef(refProd,currRest,prevRest){}},{key:"walkFlat",value:function walkFlat(flatProd,currRest,prevRest){// ABCDEF => after the D the rest is EF
var fullOrRest=currRest.concat(prevRest);this.walk(flatProd,fullOrRest);}},{key:"walkOption",value:function walkOption(optionProd,currRest,prevRest){// ABC(DE)?F => after the (DE)? the rest is F
var fullOrRest=currRest.concat(prevRest);this.walk(optionProd,fullOrRest);}},{key:"walkAtLeastOne",value:function walkAtLeastOne(atLeastOneProd,currRest,prevRest){// ABC(DE)+F => after the (DE)+ the rest is (DE)?F
var fullAtLeastOneRest=[new Option({definition:atLeastOneProd.definition})].concat(currRest,prevRest);this.walk(atLeastOneProd,fullAtLeastOneRest);}},{key:"walkAtLeastOneSep",value:function walkAtLeastOneSep(atLeastOneSepProd,currRest,prevRest){// ABC DE(,DE)* F => after the (,DE)+ the rest is (,DE)?F
var fullAtLeastOneSepRest=restForRepetitionWithSeparator(atLeastOneSepProd,currRest,prevRest);this.walk(atLeastOneSepProd,fullAtLeastOneSepRest);}},{key:"walkMany",value:function walkMany(manyProd,currRest,prevRest){// ABC(DE)*F => after the (DE)* the rest is (DE)?F
var fullManyRest=[new Option({definition:manyProd.definition})].concat(currRest,prevRest);this.walk(manyProd,fullManyRest);}},{key:"walkManySep",value:function walkManySep(manySepProd,currRest,prevRest){// ABC (DE(,DE)*)? F => after the (,DE)* the rest is (,DE)?F
var fullManySepRest=restForRepetitionWithSeparator(manySepProd,currRest,prevRest);this.walk(manySepProd,fullManySepRest);}},{key:"walkOr",value:function walkOr(orProd,currRest,prevRest){var _this13=this;// ABC(D|E|F)G => when finding the (D|E|F) the rest is G
var fullOrRest=currRest.concat(prevRest);// walk all different alternatives
forEach(orProd.definition,function(alt){// wrapping each alternative in a single definition wrapper
// to avoid errors in computing the rest of that alternative in the invocation to computeInProdFollows
// (otherwise for OR([alt1,alt2]) alt2 will be considered in 'rest' of alt1
var prodWrapper=new Alternative({definition:[alt]});_this13.walk(prodWrapper,fullOrRest);});}}]);return RestWalker;}();function restForRepetitionWithSeparator(repSepProd,currRest,prevRest){var repSepRest=[new Option({definition:[new Terminal({terminalType:repSepProd.separator})].concat(repSepProd.definition)})];var fullRepSepRest=repSepRest.concat(currRest,prevRest);return fullRepSepRest;}function first(prod){/* istanbul ignore else */if(prod instanceof NonTerminal){// this could in theory cause infinite loops if
// (1) prod A refs prod B.
// (2) prod B refs prod A
// (3) AB can match the empty set
// in other words a cycle where everything is optional so the first will keep
// looking ahead for the next optional part and will never exit
// currently there is no safeguard for this unique edge case because
// (1) not sure a grammar in which this can happen is useful for anything (productive)
return first(prod.referencedRule);}else if(prod instanceof Terminal){return firstForTerminal(prod);}else if(isSequenceProd(prod)){return firstForSequence(prod);}else if(isBranchingProd(prod)){return firstForBranching(prod);}else{throw Error("non exhaustive match");}}function firstForSequence(prod){var firstSet=[];var seq=prod.definition;var nextSubProdIdx=0;var hasInnerProdsRemaining=seq.length>nextSubProdIdx;var currSubProd;// so we enter the loop at least once (if the definition is not empty
var isLastInnerProdOptional=true;// scan a sequence until it's end or until we have found a NONE optional production in it
while(hasInnerProdsRemaining&&isLastInnerProdOptional){currSubProd=seq[nextSubProdIdx];isLastInnerProdOptional=isOptionalProd(currSubProd);firstSet=firstSet.concat(first(currSubProd));nextSubProdIdx=nextSubProdIdx+1;hasInnerProdsRemaining=seq.length>nextSubProdIdx;}return uniq(firstSet);}function firstForBranching(prod){var allAlternativesFirsts=map(prod.definition,function(innerProd){return first(innerProd);});return uniq(flatten(allAlternativesFirsts));}function firstForTerminal(terminal){return[terminal.terminalType];}// TODO: can this be removed? where is it used?
var IN="_~IN~_";// This ResyncFollowsWalker computes all of the follows required for RESYNC
// (skipping reference production).
var ResyncFollowsWalker=/*#__PURE__*/function(_RestWalker){_inherits(ResyncFollowsWalker,_RestWalker);var _super10=_createSuper(ResyncFollowsWalker);function ResyncFollowsWalker(topProd){var _this14;_classCallCheck(this,ResyncFollowsWalker);_this14=_super10.call(this);_this14.topProd=topProd;_this14.follows={};return _this14;}_createClass(ResyncFollowsWalker,[{key:"startWalking",value:function startWalking(){this.walk(this.topProd);return this.follows;}},{key:"walkTerminal",value:function walkTerminal(terminal,currRest,prevRest){// do nothing! just like in the public sector after 13:00
}},{key:"walkProdRef",value:function walkProdRef(refProd,currRest,prevRest){var followName=buildBetweenProdsFollowPrefix(refProd.referencedRule,refProd.idx)+this.topProd.name;var fullRest=currRest.concat(prevRest);var restProd=new Alternative({definition:fullRest});var t_in_topProd_follows=first(restProd);this.follows[followName]=t_in_topProd_follows;}}]);return ResyncFollowsWalker;}(RestWalker);function computeAllProdsFollows(topProductions){var reSyncFollows={};forEach(topProductions,function(topProd){var currRefsFollow=new ResyncFollowsWalker(topProd).startWalking();assign$1(reSyncFollows,currRefsFollow);});return reSyncFollows;}function buildBetweenProdsFollowPrefix(inner,occurenceInParent){return inner.name+occurenceInParent+IN;}function cc(_char){return _char.charCodeAt(0);}function insertToSet(item,set){if(Array.isArray(item)){item.forEach(function(subItem){set.push(subItem);});}else{set.push(item);}}function addFlag(flagObj,flagKey){if(flagObj[flagKey]===true){throw"duplicate flag "+flagKey;}flagObj[flagKey];flagObj[flagKey]=true;}function ASSERT_EXISTS(obj){// istanbul ignore next
if(obj===undefined){throw Error("Internal Error - Should never get here!");}return true;}// istanbul ignore next
function ASSERT_NEVER_REACH_HERE(){throw Error("Internal Error - Should never get here!");}function isCharacter(obj){return obj["type"]==="Character";}var digitsCharCodes=[];for(var i=cc("0");i<=cc("9");i++){digitsCharCodes.push(i);}var wordCharCodes=[cc("_")].concat(digitsCharCodes);for(var _i9=cc("a");_i9<=cc("z");_i9++){wordCharCodes.push(_i9);}for(var _i10=cc("A");_i10<=cc("Z");_i10++){wordCharCodes.push(_i10);}// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#character-classes
var whitespaceCodes=[cc(" "),cc("\f"),cc("\n"),cc("\r"),cc("\t"),cc("\v"),cc("\t"),cc("\xA0"),cc("\u1680"),cc("\u2000"),cc("\u2001"),cc("\u2002"),cc("\u2003"),cc("\u2004"),cc("\u2005"),cc("\u2006"),cc("\u2007"),cc("\u2008"),cc("\u2009"),cc("\u200A"),cc("\u2028"),cc("\u2029"),cc("\u202F"),cc("\u205F"),cc("\u3000"),cc("\uFEFF")];// consts and utilities
var hexDigitPattern=/[0-9a-fA-F]/;var decimalPattern=/[0-9]/;var decimalPatternNoZero=/[1-9]/;// https://hackernoon.com/the-madness-of-parsing-real-world-javascript-regexps-d9ee336df983
// https://www.ecma-international.org/ecma-262/8.0/index.html#prod-Pattern
var RegExpParser=/*#__PURE__*/function(){function RegExpParser(){_classCallCheck(this,RegExpParser);this.idx=0;this.input="";this.groupIdx=0;}_createClass(RegExpParser,[{key:"saveState",value:function saveState(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx};}},{key:"restoreState",value:function restoreState(newState){this.idx=newState.idx;this.input=newState.input;this.groupIdx=newState.groupIdx;}},{key:"pattern",value:function pattern(input){// parser state
this.idx=0;this.input=input;this.groupIdx=0;this.consumeChar("/");var value=this.disjunction();this.consumeChar("/");var flags={type:"Flags",loc:{begin:this.idx,end:input.length},global:false,ignoreCase:false,multiLine:false,unicode:false,sticky:false};while(this.isRegExpFlag()){switch(this.popChar()){case"g":addFlag(flags,"global");break;case"i":addFlag(flags,"ignoreCase");break;case"m":addFlag(flags,"multiLine");break;case"u":addFlag(flags,"unicode");break;case"y":addFlag(flags,"sticky");break;}}if(this.idx!==this.input.length){throw Error("Redundant input: "+this.input.substring(this.idx));}return{type:"Pattern",flags:flags,value:value,loc:this.loc(0)};}},{key:"disjunction",value:function disjunction(){var alts=[];var begin=this.idx;alts.push(this.alternative());while(this.peekChar()==="|"){this.consumeChar("|");alts.push(this.alternative());}return{type:"Disjunction",value:alts,loc:this.loc(begin)};}},{key:"alternative",value:function alternative(){var terms=[];var begin=this.idx;while(this.isTerm()){terms.push(this.term());}return{type:"Alternative",value:terms,loc:this.loc(begin)};}},{key:"term",value:function term(){if(this.isAssertion()){return this.assertion();}else{return this.atom();}}},{key:"assertion",value:function assertion(){var begin=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(begin)};case"$":return{type:"EndAnchor",loc:this.loc(begin)};// '\b' or '\B'
case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(begin)};case"B":return{type:"NonWordBoundary",loc:this.loc(begin)};}// istanbul ignore next
throw Error("Invalid Assertion Escape");// '(?=' or '(?!'
case"(":this.consumeChar("?");var type;switch(this.popChar()){case"=":type="Lookahead";break;case"!":type="NegativeLookahead";break;}ASSERT_EXISTS(type);var disjunction=this.disjunction();this.consumeChar(")");return{type:type,value:disjunction,loc:this.loc(begin)};}// istanbul ignore next
return ASSERT_NEVER_REACH_HERE();}},{key:"quantifier",value:function quantifier(){var isBacktracking=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;var range=undefined;var begin=this.idx;switch(this.popChar()){case"*":range={atLeast:0,atMost:Infinity};break;case"+":range={atLeast:1,atMost:Infinity};break;case"?":range={atLeast:0,atMost:1};break;case"{":var atLeast=this.integerIncludingZero();switch(this.popChar()){case"}":range={atLeast:atLeast,atMost:atLeast};break;case",":var atMost;if(this.isDigit()){atMost=this.integerIncludingZero();range={atLeast:atLeast,atMost:atMost};}else{range={atLeast:atLeast,atMost:Infinity};}this.consumeChar("}");break;}// throwing exceptions from "ASSERT_EXISTS" during backtracking
// causes severe performance degradations
if(isBacktracking===true&&range===undefined){return undefined;}ASSERT_EXISTS(range);break;}// throwing exceptions from "ASSERT_EXISTS" during backtracking
// causes severe performance degradations
if(isBacktracking===true&&range===undefined){return undefined;}// istanbul ignore else
if(ASSERT_EXISTS(range)){if(this.peekChar(0)==="?"){this.consumeChar("?");range.greedy=false;}else{range.greedy=true;}range.type="Quantifier";range.loc=this.loc(begin);return range;}}},{key:"atom",value:function atom(){var atom;var begin=this.idx;switch(this.peekChar()){case".":atom=this.dotAll();break;case"\\":atom=this.atomEscape();break;case"[":atom=this.characterClass();break;case"(":atom=this.group();break;}if(atom===undefined&&this.isPatternCharacter()){atom=this.patternCharacter();}// istanbul ignore else
if(ASSERT_EXISTS(atom)){atom.loc=this.loc(begin);if(this.isQuantifier()){atom.quantifier=this.quantifier();}return atom;}}},{key:"dotAll",value:function dotAll(){this.consumeChar(".");return{type:"Set",complement:true,value:[cc("\n"),cc("\r"),cc("\u2028"),cc("\u2029")]};}},{key:"atomEscape",value:function atomEscape(){this.consumeChar("\\");switch(this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom();}}},{key:"decimalEscapeAtom",value:function decimalEscapeAtom(){var value=this.positiveInteger();return{type:"GroupBackReference",value:value};}},{key:"characterClassEscape",value:function characterClassEscape(){var set;var complement=false;switch(this.popChar()){case"d":set=digitsCharCodes;break;case"D":set=digitsCharCodes;complement=true;break;case"s":set=whitespaceCodes;break;case"S":set=whitespaceCodes;complement=true;break;case"w":set=wordCharCodes;break;case"W":set=wordCharCodes;complement=true;break;}// istanbul ignore else
if(ASSERT_EXISTS(set)){return{type:"Set",value:set,complement:complement};}}},{key:"controlEscapeAtom",value:function controlEscapeAtom(){var escapeCode;switch(this.popChar()){case"f":escapeCode=cc("\f");break;case"n":escapeCode=cc("\n");break;case"r":escapeCode=cc("\r");break;case"t":escapeCode=cc("\t");break;case"v":escapeCode=cc("\v");break;}// istanbul ignore else
if(ASSERT_EXISTS(escapeCode)){return{type:"Character",value:escapeCode};}}},{key:"controlLetterEscapeAtom",value:function controlLetterEscapeAtom(){this.consumeChar("c");var letter=this.popChar();if(/[a-zA-Z]/.test(letter)===false){throw Error("Invalid ");}var letterCode=letter.toUpperCase().charCodeAt(0)-64;return{type:"Character",value:letterCode};}},{key:"nulCharacterAtom",value:function nulCharacterAtom(){// TODO implement '[lookahead ∉ DecimalDigit]'
// TODO: for the deprecated octal escape sequence
this.consumeChar("0");return{type:"Character",value:cc("\0")};}},{key:"hexEscapeSequenceAtom",value:function hexEscapeSequenceAtom(){this.consumeChar("x");return this.parseHexDigits(2);}},{key:"regExpUnicodeEscapeSequenceAtom",value:function regExpUnicodeEscapeSequenceAtom(){this.consumeChar("u");return this.parseHexDigits(4);}},{key:"identityEscapeAtom",value:function identityEscapeAtom(){// TODO: implement "SourceCharacter but not UnicodeIDContinue"
// // http://unicode.org/reports/tr31/#Specific_Character_Adjustments
var escapedChar=this.popChar();return{type:"Character",value:cc(escapedChar)};}},{key:"classPatternCharacterAtom",value:function classPatternCharacterAtom(){switch(this.peekChar()){// istanbul ignore next
case"\n":// istanbul ignore next
case"\r":// istanbul ignore next
case"\u2028":// istanbul ignore next
case"\u2029":// istanbul ignore next
case"\\":// istanbul ignore next
case"]":throw Error("TBD");default:var nextChar=this.popChar();return{type:"Character",value:cc(nextChar)};}}},{key:"characterClass",value:function characterClass(){var set=[];var complement=false;this.consumeChar("[");if(this.peekChar(0)==="^"){this.consumeChar("^");complement=true;}while(this.isClassAtom()){var from=this.classAtom();from.type==="Character";if(isCharacter(from)&&this.isRangeDash()){this.consumeChar("-");var to=this.classAtom();to.type==="Character";// a range can only be used when both sides are single characters
if(isCharacter(to)){if(to.value<from.value){throw Error("Range out of order in character class");}set.push({from:from.value,to:to.value});}else{// literal dash
insertToSet(from.value,set);set.push(cc("-"));insertToSet(to.value,set);}}else{insertToSet(from.value,set);}}this.consumeChar("]");return{type:"Set",complement:complement,value:set};}},{key:"classAtom",value:function classAtom(){switch(this.peekChar()){// istanbul ignore next
case"]":// istanbul ignore next
case"\n":// istanbul ignore next
case"\r":// istanbul ignore next
case"\u2028":// istanbul ignore next
case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom();}}},{key:"classEscape",value:function classEscape(){this.consumeChar("\\");switch(this.peekChar()){// Matches a backspace.
// (Not to be confused with \b word boundary outside characterClass)
case"b":this.consumeChar("b");return{type:"Character",value:cc("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom();}}},{key:"group",value:function group(){var capturing=true;this.consumeChar("(");switch(this.peekChar(0)){case"?":this.consumeChar("?");this.consumeChar(":");capturing=false;break;default:this.groupIdx++;break;}var value=this.disjunction();this.consumeChar(")");var groupAst={type:"Group",capturing:capturing,value:value};if(capturing){groupAst["idx"]=this.groupIdx;}return groupAst;}},{key:"positiveInteger",value:function positiveInteger(){var number=this.popChar();// istanbul ignore next - can't ever get here due to previous lookahead checks
// still implementing this error checking in case this ever changes.
if(decimalPatternNoZero.test(number)===false){throw Error("Expecting a positive integer");}while(decimalPattern.test(this.peekChar(0))){number+=this.popChar();}return parseInt(number,10);}},{key:"integerIncludingZero",value:function integerIncludingZero(){var number=this.popChar();if(decimalPattern.test(number)===false){throw Error("Expecting an integer");}while(decimalPattern.test(this.peekChar(0))){number+=this.popChar();}return parseInt(number,10);}},{key:"patternCharacter",value:function patternCharacter(){var nextChar=this.popChar();switch(nextChar){// istanbul ignore next
case"\n":// istanbul ignore next
case"\r":// istanbul ignore next
case"\u2028":// istanbul ignore next
case"\u2029":// istanbul ignore next
case"^":// istanbul ignore next
case"$":// istanbul ignore next
case"\\":// istanbul ignore next
case".":// istanbul ignore next
case"*":// istanbul ignore next
case"+":// istanbul ignore next
case"?":// istanbul ignore next
case"(":// istanbul ignore next
case")":// istanbul ignore next
case"[":// istanbul ignore next
case"|":// istanbul ignore next
throw Error("TBD");default:return{type:"Character",value:cc(nextChar)};}}},{key:"isRegExpFlag",value:function isRegExpFlag(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return true;default:return false;}}},{key:"isRangeDash",value:function isRangeDash(){return this.peekChar()==="-"&&this.isClassAtom(1);}},{key:"isDigit",value:function isDigit(){return decimalPattern.test(this.peekChar(0));}},{key:"isClassAtom",value:function isClassAtom(){var howMuch=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;switch(this.peekChar(howMuch)){case"]":case"\n":case"\r":case"\u2028":case"\u2029":return false;default:return true;}}},{key:"isTerm",value:function isTerm(){return this.isAtom()||this.isAssertion();}},{key:"isAtom",value:function isAtom(){if(this.isPatternCharacter()){return true;}switch(this.peekChar(0)){case".":case"\\":// atomEscape
case"[":// characterClass
// TODO: isAtom must be called before isAssertion - disambiguate
case"(":// group
return true;default:return false;}}},{key:"isAssertion",value:function isAssertion(){switch(this.peekChar(0)){case"^":case"$":return true;// '\b' or '\B'
case"\\":switch(this.peekChar(1)){case"b":case"B":return true;default:return false;}// '(?=' or '(?!'
case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return false;}}},{key:"isQuantifier",value:function isQuantifier(){var prevState=this.saveState();try{return this.quantifier(true)!==undefined;}catch(e){return false;}finally{this.restoreState(prevState);}}},{key:"isPatternCharacter",value:function isPatternCharacter(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case"\n":case"\r":case"\u2028":case"\u2029":return false;default:return true;}}},{key:"parseHexDigits",value:function parseHexDigits(howMany){var hexString="";for(var _i11=0;_i11<howMany;_i11++){var hexChar=this.popChar();if(hexDigitPattern.test(hexChar)===false){throw Error("Expecting a HexDecimal digits");}hexString+=hexChar;}var charCode=parseInt(hexString,16);return{type:"Character",value:charCode};}},{key:"peekChar",value:function peekChar(){var howMuch=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;return this.input[this.idx+howMuch];}},{key:"popChar",value:function popChar(){var nextChar=this.peekChar(0);this.consumeChar(undefined);return nextChar;}},{key:"consumeChar",value:function consumeChar(_char2){if(_char2!==undefined&&this.input[this.idx]!==_char2){throw Error("Expected: '"+_char2+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);}if(this.idx>=this.input.length){throw Error("Unexpected end of input");}this.idx++;}},{key:"loc",value:function loc(begin){return{begin:begin,end:this.idx};}}]);return RegExpParser;}();var BaseRegExpVisitor=/*#__PURE__*/function(){function BaseRegExpVisitor(){_classCallCheck(this,BaseRegExpVisitor);}_createClass(BaseRegExpVisitor,[{key:"visitChildren",value:function visitChildren(node){var _this15=this;for(var key in node){var child=node[key];/* istanbul ignore else */if(node.hasOwnProperty(key)){if(child.type!==undefined){this.visit(child);}else if(Array.isArray(child)){child.forEach(function(subChild){_this15.visit(subChild);},this);}}}}},{key:"visit",value:function visit(node){switch(node.type){case"Pattern":this.visitPattern(node);break;case"Flags":this.visitFlags(node);break;case"Disjunction":this.visitDisjunction(node);break;case"Alternative":this.visitAlternative(node);break;case"StartAnchor":this.visitStartAnchor(node);break;case"EndAnchor":this.visitEndAnchor(node);break;case"WordBoundary":this.visitWordBoundary(node);break;case"NonWordBoundary":this.visitNonWordBoundary(node);break;case"Lookahead":this.visitLookahead(node);break;case"NegativeLookahead":this.visitNegativeLookahead(node);break;case"Character":this.visitCharacter(node);break;case"Set":this.visitSet(node);break;case"Group":this.visitGroup(node);break;case"GroupBackReference":this.visitGroupBackReference(node);break;case"Quantifier":this.visitQuantifier(node);break;}this.visitChildren(node);}},{key:"visitPattern",value:function visitPattern(node){}},{key:"visitFlags",value:function visitFlags(node){}},{key:"visitDisjunction",value:function visitDisjunction(node){}},{key:"visitAlternative",value:function visitAlternative(node){}// Assertion
},{key:"visitStartAnchor",value:function visitStartAnchor(node){}},{key:"visitEndAnchor",value:function visitEndAnchor(node){}},{key:"visitWordBoundary",value:function visitWordBoundary(node){}},{key:"visitNonWordBoundary",value:function visitNonWordBoundary(node){}},{key:"visitLookahead",value:function visitLookahead(node){}},{key:"visitNegativeLookahead",value:function visitNegativeLookahead(node){}// atoms
},{key:"visitCharacter",value:function visitCharacter(node){}},{key:"visitSet",value:function visitSet(node){}},{key:"visitGroup",value:function visitGroup(node){}},{key:"visitGroupBackReference",value:function visitGroupBackReference(node){}},{key:"visitQuantifier",value:function visitQuantifier(node){}}]);return BaseRegExpVisitor;}();var regExpAstCache={};var regExpParser=new RegExpParser();function getRegExpAst(regExp){var regExpStr=regExp.toString();if(regExpAstCache.hasOwnProperty(regExpStr)){return regExpAstCache[regExpStr];}else{var regExpAst=regExpParser.pattern(regExpStr);regExpAstCache[regExpStr]=regExpAst;return regExpAst;}}function clearRegExpParserCache(){regExpAstCache={};}var complementErrorMessage="Complement Sets are not supported for first char optimization";var failedOptimizationPrefixMsg='Unable to use "first char" lexer optimizations:\n';function getOptimizedStartCodesIndices(regExp){var ensureOptimizations=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;try{var ast=getRegExpAst(regExp);var firstChars=firstCharOptimizedIndices(ast.value,{},ast.flags.ignoreCase);return firstChars;}catch(e){/* istanbul ignore next */ // Testing this relies on the regexp-to-ast library having a bug... */
// TODO: only the else branch needs to be ignored, try to fix with newer prettier / tsc
if(e.message===complementErrorMessage){if(ensureOptimizations){PRINT_WARNING("".concat(failedOptimizationPrefixMsg)+"\tUnable to optimize: < ".concat(regExp.toString()," >\n")+"\tComplement Sets cannot be automatically optimized.\n"+"\tThis will disable the lexer's first char optimizations.\n"+"\tSee: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.");}}else{var msgSuffix="";if(ensureOptimizations){msgSuffix="\n\tThis will disable the lexer's first char optimizations.\n"+"\tSee: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.";}PRINT_ERROR("".concat(failedOptimizationPrefixMsg,"\n")+"\tFailed parsing: < ".concat(regExp.toString()," >\n")+"\tUsing the @chevrotain/regexp-to-ast library\n"+"\tPlease open an issue at: https://github.com/chevrotain/chevrotain/issues"+msgSuffix);}}return[];}function firstCharOptimizedIndices(ast,result,ignoreCase){switch(ast.type){case"Disjunction":for(var _i12=0;_i12<ast.value.length;_i12++){firstCharOptimizedIndices(ast.value[_i12],result,ignoreCase);}break;case"Alternative":var terms=ast.value;for(var _i13=0;_i13<terms.length;_i13++){var term=terms[_i13];// skip terms that cannot effect the first char results
switch(term.type){case"EndAnchor":// A group back reference cannot affect potential starting char.
// because if a back reference is the first production than automatically
// the group being referenced has had to come BEFORE so its codes have already been added
case"GroupBackReference":// assertions do not affect potential starting codes
case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue;}var atom=term;switch(atom.type){case"Character":addOptimizedIdxToResult(atom.value,result,ignoreCase);break;case"Set":if(atom.complement===true){throw Error(complementErrorMessage);}forEach(atom.value,function(code){if(typeof code==="number"){addOptimizedIdxToResult(code,result,ignoreCase);}else{// range
var range=code;// cannot optimize when ignoreCase is
if(ignoreCase===true){for(var rangeCode=range.from;rangeCode<=range.to;rangeCode++){addOptimizedIdxToResult(rangeCode,result,ignoreCase);}}// Optimization (2 orders of magnitude less work for very large ranges)
else{// handle unoptimized values
for(var _rangeCode=range.from;_rangeCode<=range.to&&_rangeCode<minOptimizationVal;_rangeCode++){addOptimizedIdxToResult(_rangeCode,result,ignoreCase);}// Less common charCode where we optimize for faster init time, by using larger "buckets"
if(range.to>=minOptimizationVal){var minUnOptVal=range.from>=minOptimizationVal?range.from:minOptimizationVal;var maxUnOptVal=range.to;var minOptIdx=charCodeToOptimizedIndex(minUnOptVal);var maxOptIdx=charCodeToOptimizedIndex(maxUnOptVal);for(var currOptIdx=minOptIdx;currOptIdx<=maxOptIdx;currOptIdx++){result[currOptIdx]=currOptIdx;}}}}});break;case"Group":firstCharOptimizedIndices(atom.value,result,ignoreCase);break;/* istanbul ignore next */default:throw Error("Non Exhaustive Match");}// reached a mandatory production, no more **start** codes can be found on this alternative
var isOptionalQuantifier=atom.quantifier!==undefined&&atom.quantifier.atLeast===0;if(// A group may be optional due to empty contents /(?:)/
// or if everything inside it is optional /((a)?)/
atom.type==="Group"&&isWholeOptional(atom)===false||// If this term is not a group it may only be optional if it has an optional quantifier
atom.type!=="Group"&&isOptionalQuantifier===false){break;}}break;/* istanbul ignore next */default:throw Error("non exhaustive match!");}// console.log(Object.keys(result).length)
return values(result);}function addOptimizedIdxToResult(code,result,ignoreCase){var optimizedCharIdx=charCodeToOptimizedIndex(code);result[optimizedCharIdx]=optimizedCharIdx;if(ignoreCase===true){handleIgnoreCase(code,result);}}function handleIgnoreCase(code,result){var _char3=String.fromCharCode(code);var upperChar=_char3.toUpperCase();/* istanbul ignore else */if(upperChar!==_char3){var optimizedCharIdx=charCodeToOptimizedIndex(upperChar.charCodeAt(0));result[optimizedCharIdx]=optimizedCharIdx;}else{var lowerChar=_char3.toLowerCase();if(lowerChar!==_char3){var _optimizedCharIdx=charCodeToOptimizedIndex(lowerChar.charCodeAt(0));result[_optimizedCharIdx]=_optimizedCharIdx;}}}function findCode(setNode,targetCharCodes){return find$1(setNode.value,function(codeOrRange){if(typeof codeOrRange==="number"){return includes(targetCharCodes,codeOrRange);}else{// range
var range=codeOrRange;return find$1(targetCharCodes,function(targetCode){return range.from<=targetCode&&targetCode<=range.to;})!==undefined;}});}function isWholeOptional(ast){var quantifier=ast.quantifier;if(quantifier&&quantifier.atLeast===0){return true;}if(!ast.value){return false;}return isArray$1(ast.value)?every(ast.value,isWholeOptional):isWholeOptional(ast.value);}var CharCodeFinder=/*#__PURE__*/function(_BaseRegExpVisitor){_inherits(CharCodeFinder,_BaseRegExpVisitor);var _super11=_createSuper(CharCodeFinder);function CharCodeFinder(targetCharCodes){var _this16;_classCallCheck(this,CharCodeFinder);_this16=_super11.call(this);_this16.targetCharCodes=targetCharCodes;_this16.found=false;return _this16;}_createClass(CharCodeFinder,[{key:"visitChildren",value:function visitChildren(node){// No need to keep looking...
if(this.found===true){return;}// switch lookaheads as they do not actually consume any characters thus
// finding a charCode at lookahead context does not mean that regexp can actually contain it in a match.
switch(node.type){case"Lookahead":this.visitLookahead(node);return;case"NegativeLookahead":this.visitNegativeLookahead(node);return;}_get(_getPrototypeOf(CharCodeFinder.prototype),"visitChildren",this).call(this,node);}},{key:"visitCharacter",value:function visitCharacter(node){if(includes(this.targetCharCodes,node.value)){this.found=true;}}},{key:"visitSet",value:function visitSet(node){if(node.complement){if(findCode(node,this.targetCharCodes)===undefined){this.found=true;}}else{if(findCode(node,this.targetCharCodes)!==undefined){this.found=true;}}}}]);return CharCodeFinder;}(BaseRegExpVisitor);function canMatchCharCode(charCodes,pattern){if(pattern instanceof RegExp){var ast=getRegExpAst(pattern);var charCodeFinder=new CharCodeFinder(charCodes);charCodeFinder.visit(ast);return charCodeFinder.found;}else{return find$1(pattern,function(_char4){return includes(charCodes,_char4.charCodeAt(0));})!==undefined;}}var PATTERN="PATTERN";var DEFAULT_MODE="defaultMode";var MODES="modes";var SUPPORT_STICKY=typeof new RegExp("(?:)").sticky==="boolean";function analyzeTokenTypes(tokenTypes,options){options=defaults$1(options,{useSticky:SUPPORT_STICKY,debug:false,safeMode:false,positionTracking:"full",lineTerminatorCharacters:["\r","\n"],tracer:function tracer(msg,action){return action();}});var tracer=options.tracer;tracer("initCharCodeToOptimizedIndexMap",function(){initCharCodeToOptimizedIndexMap();});var onlyRelevantTypes;tracer("Reject Lexer.NA",function(){onlyRelevantTypes=reject(tokenTypes,function(currType){return currType[PATTERN]===Lexer.NA;});});var hasCustom=false;var allTransformedPatterns;tracer("Transform Patterns",function(){hasCustom=false;allTransformedPatterns=map(onlyRelevantTypes,function(currType){var currPattern=currType[PATTERN];/* istanbul ignore else */if(isRegExp$1(currPattern)){var regExpSource=currPattern.source;if(regExpSource.length===1&&// only these regExp meta characters which can appear in a length one regExp
regExpSource!=="^"&&regExpSource!=="$"&&regExpSource!=="."&&!currPattern.ignoreCase){return regExpSource;}else if(regExpSource.length===2&&regExpSource[0]==="\\"&&// not a meta character
!includes(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],regExpSource[1])){// escaped meta Characters: /\+/ /\[/
// or redundant escaping: /\a/
// without the escaping "\"
return regExpSource[1];}else{return options.useSticky?addStickyFlag(currPattern):addStartOfInput(currPattern);}}else if(isFunction(currPattern)){hasCustom=true;// CustomPatternMatcherFunc - custom patterns do not require any transformations, only wrapping in a RegExp Like object
return{exec:currPattern};}else if(_typeof(currPattern)==="object"){hasCustom=true;// ICustomPattern
return currPattern;}else if(typeof currPattern==="string"){if(currPattern.length===1){return currPattern;}else{var escapedRegExpString=currPattern.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&");var wrappedRegExp=new RegExp(escapedRegExpString);return options.useSticky?addStickyFlag(wrappedRegExp):addStartOfInput(wrappedRegExp);}}else{throw Error("non exhaustive match");}});});var patternIdxToType;var patternIdxToGroup;var patternIdxToLongerAltIdxArr;var patternIdxToPushMode;var patternIdxToPopMode;tracer("misc mapping",function(){patternIdxToType=map(onlyRelevantTypes,function(currType){return currType.tokenTypeIdx;});patternIdxToGroup=map(onlyRelevantTypes,function(clazz){var groupName=clazz.GROUP;/* istanbul ignore next */if(groupName===Lexer.SKIPPED){return undefined;}else if(isString(groupName)){return groupName;}else if(isUndefined(groupName)){return false;}else{throw Error("non exhaustive match");}});patternIdxToLongerAltIdxArr=map(onlyRelevantTypes,function(clazz){var longerAltType=clazz.LONGER_ALT;if(longerAltType){var longerAltIdxArr=isArray$1(longerAltType)?map(longerAltType,function(type){return indexOf(onlyRelevantTypes,type);}):[indexOf(onlyRelevantTypes,longerAltType)];return longerAltIdxArr;}});patternIdxToPushMode=map(onlyRelevantTypes,function(clazz){return clazz.PUSH_MODE;});patternIdxToPopMode=map(onlyRelevantTypes,function(clazz){return has(clazz,"POP_MODE");});});var patternIdxToCanLineTerminator;tracer("Line Terminator Handling",function(){var lineTerminatorCharCodes=getCharCodes(options.lineTerminatorCharacters);patternIdxToCanLineTerminator=map(onlyRelevantTypes,function(tokType){return false;});if(options.positionTracking!=="onlyOffset"){patternIdxToCanLineTerminator=map(onlyRelevantTypes,function(tokType){if(has(tokType,"LINE_BREAKS")){return!!tokType.LINE_BREAKS;}else{return checkLineBreaksIssues(tokType,lineTerminatorCharCodes)===false&&canMatchCharCode(lineTerminatorCharCodes,tokType.PATTERN);}});}});var patternIdxToIsCustom;var patternIdxToShort;var emptyGroups;var patternIdxToConfig;tracer("Misc Mapping #2",function(){patternIdxToIsCustom=map(onlyRelevantTypes,isCustomPattern);patternIdxToShort=map(allTransformedPatterns,isShortPattern);emptyGroups=reduce(onlyRelevantTypes,function(acc,clazz){var groupName=clazz.GROUP;if(isString(groupName)&&!(groupName===Lexer.SKIPPED)){acc[groupName]=[];}return acc;},{});patternIdxToConfig=map(allTransformedPatterns,function(x,idx){return{pattern:allTransformedPatterns[idx],longerAlt:patternIdxToLongerAltIdxArr[idx],canLineTerminator:patternIdxToCanLineTerminator[idx],isCustom:patternIdxToIsCustom[idx],"short":patternIdxToShort[idx],group:patternIdxToGroup[idx],push:patternIdxToPushMode[idx],pop:patternIdxToPopMode[idx],tokenTypeIdx:patternIdxToType[idx],tokenType:onlyRelevantTypes[idx]};});});var canBeOptimized=true;var charCodeToPatternIdxToConfig=[];if(!options.safeMode){tracer("First Char Optimization",function(){charCodeToPatternIdxToConfig=reduce(onlyRelevantTypes,function(result,currTokType,idx){if(typeof currTokType.PATTERN==="string"){var charCode=currTokType.PATTERN.charCodeAt(0);var optimizedIdx=charCodeToOptimizedIndex(charCode);addToMapOfArrays(result,optimizedIdx,patternIdxToConfig[idx]);}else if(isArray$1(currTokType.START_CHARS_HINT)){var lastOptimizedIdx;forEach(currTokType.START_CHARS_HINT,function(charOrInt){var charCode=typeof charOrInt==="string"?charOrInt.charCodeAt(0):charOrInt;var currOptimizedIdx=charCodeToOptimizedIndex(charCode);// Avoid adding the config multiple times
/* istanbul ignore else */ // - Difficult to check this scenario effects as it is only a performance
//   optimization that does not change correctness
if(lastOptimizedIdx!==currOptimizedIdx){lastOptimizedIdx=currOptimizedIdx;addToMapOfArrays(result,currOptimizedIdx,patternIdxToConfig[idx]);}});}else if(isRegExp$1(currTokType.PATTERN)){if(currTokType.PATTERN.unicode){canBeOptimized=false;if(options.ensureOptimizations){PRINT_ERROR("".concat(failedOptimizationPrefixMsg)+"\tUnable to analyze < ".concat(currTokType.PATTERN.toString()," > pattern.\n")+"\tThe regexp unicode flag is not currently supported by the regexp-to-ast library.\n"+"\tThis will disable the lexer's first char optimizations.\n"+"\tFor details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE");}}else{var optimizedCodes=getOptimizedStartCodesIndices(currTokType.PATTERN,options.ensureOptimizations);/* istanbul ignore if */ // start code will only be empty given an empty regExp or failure of regexp-to-ast library
// the first should be a different validation and the second cannot be tested.
if(isEmpty(optimizedCodes)){// we cannot understand what codes may start possible matches
// The optimization correctness requires knowing start codes for ALL patterns.
// Not actually sure this is an error, no debug message
canBeOptimized=false;}forEach(optimizedCodes,function(code){addToMapOfArrays(result,code,patternIdxToConfig[idx]);});}}else{if(options.ensureOptimizations){PRINT_ERROR("".concat(failedOptimizationPrefixMsg)+"\tTokenType: <".concat(currTokType.name,"> is using a custom token pattern without providing <start_chars_hint> parameter.\n")+"\tThis will disable the lexer's first char optimizations.\n"+"\tFor details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE");}canBeOptimized=false;}return result;},[]);});}return{emptyGroups:emptyGroups,patternIdxToConfig:patternIdxToConfig,charCodeToPatternIdxToConfig:charCodeToPatternIdxToConfig,hasCustom:hasCustom,canBeOptimized:canBeOptimized};}function validatePatterns(tokenTypes,validModesNames){var errors=[];var missingResult=findMissingPatterns(tokenTypes);errors=errors.concat(missingResult.errors);var invalidResult=findInvalidPatterns(missingResult.valid);var validTokenTypes=invalidResult.valid;errors=errors.concat(invalidResult.errors);errors=errors.concat(validateRegExpPattern(validTokenTypes));errors=errors.concat(findInvalidGroupType(validTokenTypes));errors=errors.concat(findModesThatDoNotExist(validTokenTypes,validModesNames));errors=errors.concat(findUnreachablePatterns(validTokenTypes));return errors;}function validateRegExpPattern(tokenTypes){var errors=[];var withRegExpPatterns=filter(tokenTypes,function(currTokType){return isRegExp$1(currTokType[PATTERN]);});errors=errors.concat(findEndOfInputAnchor(withRegExpPatterns));errors=errors.concat(findStartOfInputAnchor(withRegExpPatterns));errors=errors.concat(findUnsupportedFlags(withRegExpPatterns));errors=errors.concat(findDuplicatePatterns(withRegExpPatterns));errors=errors.concat(findEmptyMatchRegExps(withRegExpPatterns));return errors;}function findMissingPatterns(tokenTypes){var tokenTypesWithMissingPattern=filter(tokenTypes,function(currType){return!has(currType,PATTERN);});var errors=map(tokenTypesWithMissingPattern,function(currType){return{message:"Token Type: ->"+currType.name+"<- missing static 'PATTERN' property",type:LexerDefinitionErrorType.MISSING_PATTERN,tokenTypes:[currType]};});var valid=difference$1(tokenTypes,tokenTypesWithMissingPattern);return{errors:errors,valid:valid};}function findInvalidPatterns(tokenTypes){var tokenTypesWithInvalidPattern=filter(tokenTypes,function(currType){var pattern=currType[PATTERN];return!isRegExp$1(pattern)&&!isFunction(pattern)&&!has(pattern,"exec")&&!isString(pattern);});var errors=map(tokenTypesWithInvalidPattern,function(currType){return{message:"Token Type: ->"+currType.name+"<- static 'PATTERN' can only be a RegExp, a"+" Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:LexerDefinitionErrorType.INVALID_PATTERN,tokenTypes:[currType]};});var valid=difference$1(tokenTypes,tokenTypesWithInvalidPattern);return{errors:errors,valid:valid};}var end_of_input=/[^\\][$]/;function findEndOfInputAnchor(tokenTypes){var EndAnchorFinder=/*#__PURE__*/function(_BaseRegExpVisitor2){_inherits(EndAnchorFinder,_BaseRegExpVisitor2);var _super12=_createSuper(EndAnchorFinder);function EndAnchorFinder(){var _this17;_classCallCheck(this,EndAnchorFinder);_this17=_super12.apply(this,arguments);_this17.found=false;return _this17;}_createClass(EndAnchorFinder,[{key:"visitEndAnchor",value:function visitEndAnchor(node){this.found=true;}}]);return EndAnchorFinder;}(BaseRegExpVisitor);var invalidRegex=filter(tokenTypes,function(currType){var pattern=currType.PATTERN;try{var regexpAst=getRegExpAst(pattern);var endAnchorVisitor=new EndAnchorFinder();endAnchorVisitor.visit(regexpAst);return endAnchorVisitor.found;}catch(e){// old behavior in case of runtime exceptions with regexp-to-ast.
/* istanbul ignore next - cannot ensure an error in regexp-to-ast*/return end_of_input.test(pattern.source);}});var errors=map(invalidRegex,function(currType){return{message:"Unexpected RegExp Anchor Error:\n"+"\tToken Type: ->"+currType.name+"<- static 'PATTERN' cannot contain end of input anchor '$'\n"+"\tSee chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS"+"\tfor details.",type:LexerDefinitionErrorType.EOI_ANCHOR_FOUND,tokenTypes:[currType]};});return errors;}function findEmptyMatchRegExps(tokenTypes){var matchesEmptyString=filter(tokenTypes,function(currType){var pattern=currType.PATTERN;return pattern.test("");});var errors=map(matchesEmptyString,function(currType){return{message:"Token Type: ->"+currType.name+"<- static 'PATTERN' must not match an empty string",type:LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,tokenTypes:[currType]};});return errors;}var start_of_input=/[^\\[][\^]|^\^/;function findStartOfInputAnchor(tokenTypes){var StartAnchorFinder=/*#__PURE__*/function(_BaseRegExpVisitor3){_inherits(StartAnchorFinder,_BaseRegExpVisitor3);var _super13=_createSuper(StartAnchorFinder);function StartAnchorFinder(){var _this18;_classCallCheck(this,StartAnchorFinder);_this18=_super13.apply(this,arguments);_this18.found=false;return _this18;}_createClass(StartAnchorFinder,[{key:"visitStartAnchor",value:function visitStartAnchor(node){this.found=true;}}]);return StartAnchorFinder;}(BaseRegExpVisitor);var invalidRegex=filter(tokenTypes,function(currType){var pattern=currType.PATTERN;try{var regexpAst=getRegExpAst(pattern);var startAnchorVisitor=new StartAnchorFinder();startAnchorVisitor.visit(regexpAst);return startAnchorVisitor.found;}catch(e){// old behavior in case of runtime exceptions with regexp-to-ast.
/* istanbul ignore next - cannot ensure an error in regexp-to-ast*/return start_of_input.test(pattern.source);}});var errors=map(invalidRegex,function(currType){return{message:"Unexpected RegExp Anchor Error:\n"+"\tToken Type: ->"+currType.name+"<- static 'PATTERN' cannot contain start of input anchor '^'\n"+"\tSee https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS"+"\tfor details.",type:LexerDefinitionErrorType.SOI_ANCHOR_FOUND,tokenTypes:[currType]};});return errors;}function findUnsupportedFlags(tokenTypes){var invalidFlags=filter(tokenTypes,function(currType){var pattern=currType[PATTERN];return pattern instanceof RegExp&&(pattern.multiline||pattern.global);});var errors=map(invalidFlags,function(currType){return{message:"Token Type: ->"+currType.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[currType]};});return errors;}// This can only test for identical duplicate RegExps, not semantically equivalent ones.
function findDuplicatePatterns(tokenTypes){var found=[];var identicalPatterns=map(tokenTypes,function(outerType){return reduce(tokenTypes,function(result,innerType){if(outerType.PATTERN.source===innerType.PATTERN.source&&!includes(found,innerType)&&innerType.PATTERN!==Lexer.NA){// this avoids duplicates in the result, each Token Type may only appear in one "set"
// in essence we are creating Equivalence classes on equality relation.
found.push(innerType);result.push(innerType);return result;}return result;},[]);});identicalPatterns=compact(identicalPatterns);var duplicatePatterns=filter(identicalPatterns,function(currIdenticalSet){return currIdenticalSet.length>1;});var errors=map(duplicatePatterns,function(setOfIdentical){var tokenTypeNames=map(setOfIdentical,function(currType){return currType.name;});var dupPatternSrc=head(setOfIdentical).PATTERN;return{message:"The same RegExp pattern ->".concat(dupPatternSrc,"<-")+"has been used in all of the following Token Types: ".concat(tokenTypeNames.join(", ")," <-"),type:LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,tokenTypes:setOfIdentical};});return errors;}function findInvalidGroupType(tokenTypes){var invalidTypes=filter(tokenTypes,function(clazz){if(!has(clazz,"GROUP")){return false;}var group=clazz.GROUP;return group!==Lexer.SKIPPED&&group!==Lexer.NA&&!isString(group);});var errors=map(invalidTypes,function(currType){return{message:"Token Type: ->"+currType.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,tokenTypes:[currType]};});return errors;}function findModesThatDoNotExist(tokenTypes,validModes){var invalidModes=filter(tokenTypes,function(clazz){return clazz.PUSH_MODE!==undefined&&!includes(validModes,clazz.PUSH_MODE);});var errors=map(invalidModes,function(tokType){var msg="Token Type: ->".concat(tokType.name,"<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->").concat(tokType.PUSH_MODE,"<-")+"which does not exist";return{message:msg,type:LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[tokType]};});return errors;}function findUnreachablePatterns(tokenTypes){var errors=[];var canBeTested=reduce(tokenTypes,function(result,tokType,idx){var pattern=tokType.PATTERN;if(pattern===Lexer.NA){return result;}// a more comprehensive validation for all forms of regExps would require
// deeper regExp analysis capabilities
if(isString(pattern)){result.push({str:pattern,idx:idx,tokenType:tokType});}else if(isRegExp$1(pattern)&&noMetaChar(pattern)){result.push({str:pattern.source,idx:idx,tokenType:tokType});}return result;},[]);forEach(tokenTypes,function(tokType,testIdx){forEach(canBeTested,function(_ref3){var str=_ref3.str,idx=_ref3.idx,tokenType=_ref3.tokenType;if(testIdx<idx&&testTokenType(str,tokType.PATTERN)){var msg="Token: ->".concat(tokenType.name,"<- can never be matched.\n")+"Because it appears AFTER the Token Type ->".concat(tokType.name,"<-")+"in the lexer's definition.\n"+"See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE";errors.push({message:msg,type:LexerDefinitionErrorType.UNREACHABLE_PATTERN,tokenTypes:[tokType,tokenType]});}});});return errors;}function testTokenType(str,pattern){/* istanbul ignore else */if(isRegExp$1(pattern)){var regExpArray=pattern.exec(str);return regExpArray!==null&&regExpArray.index===0;}else if(isFunction(pattern)){// maintain the API of custom patterns
return pattern(str,0,[],{});}else if(has(pattern,"exec")){// maintain the API of custom patterns
return pattern.exec(str,0,[],{});}else if(typeof pattern==="string"){return pattern===str;}else{throw Error("non exhaustive match");}}function noMetaChar(regExp){//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
var metaChars=[".","\\","[","]","|","^","$","(",")","?","*","+","{"];return find$1(metaChars,function(_char5){return regExp.source.indexOf(_char5)!==-1;})===undefined;}function addStartOfInput(pattern){var flags=pattern.ignoreCase?"i":"";// always wrapping in a none capturing group preceded by '^' to make sure matching can only work on start of input.
// duplicate/redundant start of input markers have no meaning (/^^^^A/ === /^A/)
return new RegExp("^(?:".concat(pattern.source,")"),flags);}function addStickyFlag(pattern){var flags=pattern.ignoreCase?"iy":"y";// always wrapping in a none capturing group preceded by '^' to make sure matching can only work on start of input.
// duplicate/redundant start of input markers have no meaning (/^^^^A/ === /^A/)
return new RegExp("".concat(pattern.source),flags);}function performRuntimeChecks(lexerDefinition,trackLines,lineTerminatorCharacters){var errors=[];// some run time checks to help the end users.
if(!has(lexerDefinition,DEFAULT_MODE)){errors.push({message:"A MultiMode Lexer cannot be initialized without a <"+DEFAULT_MODE+"> property in its definition\n",type:LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE});}if(!has(lexerDefinition,MODES)){errors.push({message:"A MultiMode Lexer cannot be initialized without a <"+MODES+"> property in its definition\n",type:LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY});}if(has(lexerDefinition,MODES)&&has(lexerDefinition,DEFAULT_MODE)&&!has(lexerDefinition.modes,lexerDefinition.defaultMode)){errors.push({message:"A MultiMode Lexer cannot be initialized with a ".concat(DEFAULT_MODE,": <").concat(lexerDefinition.defaultMode,">")+"which does not exist\n",type:LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST});}if(has(lexerDefinition,MODES)){forEach(lexerDefinition.modes,function(currModeValue,currModeName){forEach(currModeValue,function(currTokType,currIdx){if(isUndefined(currTokType)){errors.push({message:"A Lexer cannot be initialized using an undefined Token Type. Mode:"+"<".concat(currModeName,"> at index: <").concat(currIdx,">\n"),type:LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});}else if(has(currTokType,"LONGER_ALT")){var longerAlt=isArray$1(currTokType.LONGER_ALT)?currTokType.LONGER_ALT:[currTokType.LONGER_ALT];forEach(longerAlt,function(currLongerAlt){if(!isUndefined(currLongerAlt)&&!includes(currModeValue,currLongerAlt)){errors.push({message:"A MultiMode Lexer cannot be initialized with a longer_alt <".concat(currLongerAlt.name,"> on token <").concat(currTokType.name,"> outside of mode <").concat(currModeName,">\n"),type:LexerDefinitionErrorType.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE});}});}});});}return errors;}function performWarningRuntimeChecks(lexerDefinition,trackLines,lineTerminatorCharacters){var warnings=[];var hasAnyLineBreak=false;var allTokenTypes=compact(flatten(values(lexerDefinition.modes)));var concreteTokenTypes=reject(allTokenTypes,function(currType){return currType[PATTERN]===Lexer.NA;});var terminatorCharCodes=getCharCodes(lineTerminatorCharacters);if(trackLines){forEach(concreteTokenTypes,function(tokType){var currIssue=checkLineBreaksIssues(tokType,terminatorCharCodes);if(currIssue!==false){var message=buildLineBreakIssueMessage(tokType,currIssue);var warningDescriptor={message:message,type:currIssue.issue,tokenType:tokType};warnings.push(warningDescriptor);}else{// we don't want to attempt to scan if the user explicitly specified the line_breaks option.
if(has(tokType,"LINE_BREAKS")){if(tokType.LINE_BREAKS===true){hasAnyLineBreak=true;}}else{if(canMatchCharCode(terminatorCharCodes,tokType.PATTERN)){hasAnyLineBreak=true;}}}});}if(trackLines&&!hasAnyLineBreak){warnings.push({message:"Warning: No LINE_BREAKS Found.\n"+"\tThis Lexer has been defined to track line and column information,\n"+"\tBut none of the Token Types can be identified as matching a line terminator.\n"+"\tSee https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS \n"+"\tfor details.",type:LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS});}return warnings;}function cloneEmptyGroups(emptyGroups){var clonedResult={};var groupKeys=keys(emptyGroups);forEach(groupKeys,function(currKey){var currGroupValue=emptyGroups[currKey];/* istanbul ignore else */if(isArray$1(currGroupValue)){clonedResult[currKey]=[];}else{throw Error("non exhaustive match");}});return clonedResult;}// TODO: refactor to avoid duplication
function isCustomPattern(tokenType){var pattern=tokenType.PATTERN;/* istanbul ignore else */if(isRegExp$1(pattern)){return false;}else if(isFunction(pattern)){// CustomPatternMatcherFunc - custom patterns do not require any transformations, only wrapping in a RegExp Like object
return true;}else if(has(pattern,"exec")){// ICustomPattern
return true;}else if(isString(pattern)){return false;}else{throw Error("non exhaustive match");}}function isShortPattern(pattern){if(isString(pattern)&&pattern.length===1){return pattern.charCodeAt(0);}else{return false;}}/**
 * Faster than using a RegExp for default newline detection during lexing.
 */var LineTerminatorOptimizedTester={// implements /\n|\r\n?/g.test
test:function test(text){var len=text.length;for(var _i14=this.lastIndex;_i14<len;_i14++){var c=text.charCodeAt(_i14);if(c===10){this.lastIndex=_i14+1;return true;}else if(c===13){if(text.charCodeAt(_i14+1)===10){this.lastIndex=_i14+2;}else{this.lastIndex=_i14+1;}return true;}}return false;},lastIndex:0};function checkLineBreaksIssues(tokType,lineTerminatorCharCodes){if(has(tokType,"LINE_BREAKS")){// if the user explicitly declared the line_breaks option we will respect their choice
// and assume it is correct.
return false;}else{/* istanbul ignore else */if(isRegExp$1(tokType.PATTERN)){try{// TODO: why is the casting suddenly needed?
canMatchCharCode(lineTerminatorCharCodes,tokType.PATTERN);}catch(e){/* istanbul ignore next - to test this we would have to mock <canMatchCharCode> to throw an error */return{issue:LexerDefinitionErrorType.IDENTIFY_TERMINATOR,errMsg:e.message};}return false;}else if(isString(tokType.PATTERN)){// string literal patterns can always be analyzed to detect line terminator usage
return false;}else if(isCustomPattern(tokType)){// custom token types
return{issue:LexerDefinitionErrorType.CUSTOM_LINE_BREAK};}else{throw Error("non exhaustive match");}}}function buildLineBreakIssueMessage(tokType,details){/* istanbul ignore else */if(details.issue===LexerDefinitionErrorType.IDENTIFY_TERMINATOR){return"Warning: unable to identify line terminator usage in pattern.\n"+"\tThe problem is in the <".concat(tokType.name,"> Token Type\n")+"\t Root cause: ".concat(details.errMsg,".\n")+"\tFor details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";}else if(details.issue===LexerDefinitionErrorType.CUSTOM_LINE_BREAK){return"Warning: A Custom Token Pattern should specify the <line_breaks> option.\n"+"\tThe problem is in the <".concat(tokType.name,"> Token Type\n")+"\tFor details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";}else{throw Error("non exhaustive match");}}function getCharCodes(charsOrCodes){var charCodes=map(charsOrCodes,function(numOrString){if(isString(numOrString)){return numOrString.charCodeAt(0);}else{return numOrString;}});return charCodes;}function addToMapOfArrays(map,key,value){if(map[key]===undefined){map[key]=[value];}else{map[key].push(value);}}var minOptimizationVal=256;/**
 * We are mapping charCode above ASCI (256) into buckets each in the size of 256.
 * This is because ASCI are the most common start chars so each one of those will get its own
 * possible token configs vector.
 *
 * Tokens starting with charCodes "above" ASCI are uncommon, so we can "afford"
 * to place these into buckets of possible token configs, What we gain from
 * this is avoiding the case of creating an optimization 'charCodeToPatternIdxToConfig'
 * which would contain 10,000+ arrays of small size (e.g unicode Identifiers scenario).
 * Our 'charCodeToPatternIdxToConfig' max size will now be:
 * 256 + (2^16 / 2^8) - 1 === 511
 *
 * note the hack for fast division integer part extraction
 * See: https://stackoverflow.com/a/4228528
 */var charCodeToOptimizedIdxMap=[];function charCodeToOptimizedIndex(charCode){return charCode<minOptimizationVal?charCode:charCodeToOptimizedIdxMap[charCode];}/**
 * This is a compromise between cold start / hot running performance
 * Creating this array takes ~3ms on a modern machine,
 * But if we perform the computation at runtime as needed the CSS Lexer benchmark
 * performance degrades by ~10%
 *
 * TODO: Perhaps it should be lazy initialized only if a charCode > 255 is used.
 */function initCharCodeToOptimizedIndexMap(){if(isEmpty(charCodeToOptimizedIdxMap)){charCodeToOptimizedIdxMap=new Array(65536);for(var _i15=0;_i15<65536;_i15++){charCodeToOptimizedIdxMap[_i15]=_i15>255?255+~~(_i15/255):_i15;}}}function tokenStructuredMatcher(tokInstance,tokConstructor){var instanceType=tokInstance.tokenTypeIdx;if(instanceType===tokConstructor.tokenTypeIdx){return true;}else{return tokConstructor.isParent===true&&tokConstructor.categoryMatchesMap[instanceType]===true;}}// Optimized tokenMatcher in case our grammar does not use token categories
// Being so tiny it is much more likely to be in-lined and this avoid the function call overhead
function tokenStructuredMatcherNoCategories(token,tokType){return token.tokenTypeIdx===tokType.tokenTypeIdx;}var tokenShortNameIdx=1;var tokenIdxToClass={};function augmentTokenTypes(tokenTypes){// collect the parent Token Types as well.
var tokenTypesAndParents=expandCategories(tokenTypes);// add required tokenType and categoryMatches properties
assignTokenDefaultProps(tokenTypesAndParents);// fill up the categoryMatches
assignCategoriesMapProp(tokenTypesAndParents);assignCategoriesTokensProp(tokenTypesAndParents);forEach(tokenTypesAndParents,function(tokType){tokType.isParent=tokType.categoryMatches.length>0;});}function expandCategories(tokenTypes){var result=clone(tokenTypes);var categories=tokenTypes;var searching=true;while(searching){categories=compact(flatten(map(categories,function(currTokType){return currTokType.CATEGORIES;})));var newCategories=difference$1(categories,result);result=result.concat(newCategories);if(isEmpty(newCategories)){searching=false;}else{categories=newCategories;}}return result;}function assignTokenDefaultProps(tokenTypes){forEach(tokenTypes,function(currTokType){if(!hasShortKeyProperty(currTokType)){tokenIdxToClass[tokenShortNameIdx]=currTokType;currTokType.tokenTypeIdx=tokenShortNameIdx++;}// CATEGORIES? : TokenType | TokenType[]
if(hasCategoriesProperty(currTokType)&&!isArray$1(currTokType.CATEGORIES)// &&
// !isUndefined(currTokType.CATEGORIES.PATTERN)
){currTokType.CATEGORIES=[currTokType.CATEGORIES];}if(!hasCategoriesProperty(currTokType)){currTokType.CATEGORIES=[];}if(!hasExtendingTokensTypesProperty(currTokType)){currTokType.categoryMatches=[];}if(!hasExtendingTokensTypesMapProperty(currTokType)){currTokType.categoryMatchesMap={};}});}function assignCategoriesTokensProp(tokenTypes){forEach(tokenTypes,function(currTokType){// avoid duplications
currTokType.categoryMatches=[];forEach(currTokType.categoryMatchesMap,function(val,key){currTokType.categoryMatches.push(tokenIdxToClass[key].tokenTypeIdx);});});}function assignCategoriesMapProp(tokenTypes){forEach(tokenTypes,function(currTokType){singleAssignCategoriesToksMap([],currTokType);});}function singleAssignCategoriesToksMap(path,nextNode){forEach(path,function(pathNode){nextNode.categoryMatchesMap[pathNode.tokenTypeIdx]=true;});forEach(nextNode.CATEGORIES,function(nextCategory){var newPath=path.concat(nextNode);// avoids infinite loops due to cyclic categories.
if(!includes(newPath,nextCategory)){singleAssignCategoriesToksMap(newPath,nextCategory);}});}function hasShortKeyProperty(tokType){return has(tokType,"tokenTypeIdx");}function hasCategoriesProperty(tokType){return has(tokType,"CATEGORIES");}function hasExtendingTokensTypesProperty(tokType){return has(tokType,"categoryMatches");}function hasExtendingTokensTypesMapProperty(tokType){return has(tokType,"categoryMatchesMap");}function isTokenType(tokType){return has(tokType,"tokenTypeIdx");}var defaultLexerErrorProvider={buildUnableToPopLexerModeMessage:function buildUnableToPopLexerModeMessage(token){return"Unable to pop Lexer Mode after encountering Token ->".concat(token.image,"<- The Mode Stack is empty");},buildUnexpectedCharactersMessage:function buildUnexpectedCharactersMessage(fullText,startOffset,length,line,column){return"unexpected character: ->".concat(fullText.charAt(startOffset),"<- at offset: ").concat(startOffset,",")+" skipped ".concat(length," characters.");}};var LexerDefinitionErrorType;(function(LexerDefinitionErrorType){LexerDefinitionErrorType[LexerDefinitionErrorType["MISSING_PATTERN"]=0]="MISSING_PATTERN";LexerDefinitionErrorType[LexerDefinitionErrorType["INVALID_PATTERN"]=1]="INVALID_PATTERN";LexerDefinitionErrorType[LexerDefinitionErrorType["EOI_ANCHOR_FOUND"]=2]="EOI_ANCHOR_FOUND";LexerDefinitionErrorType[LexerDefinitionErrorType["UNSUPPORTED_FLAGS_FOUND"]=3]="UNSUPPORTED_FLAGS_FOUND";LexerDefinitionErrorType[LexerDefinitionErrorType["DUPLICATE_PATTERNS_FOUND"]=4]="DUPLICATE_PATTERNS_FOUND";LexerDefinitionErrorType[LexerDefinitionErrorType["INVALID_GROUP_TYPE_FOUND"]=5]="INVALID_GROUP_TYPE_FOUND";LexerDefinitionErrorType[LexerDefinitionErrorType["PUSH_MODE_DOES_NOT_EXIST"]=6]="PUSH_MODE_DOES_NOT_EXIST";LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE"]=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE";LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY"]=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY";LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST"]=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST";LexerDefinitionErrorType[LexerDefinitionErrorType["LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED"]=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED";LexerDefinitionErrorType[LexerDefinitionErrorType["SOI_ANCHOR_FOUND"]=11]="SOI_ANCHOR_FOUND";LexerDefinitionErrorType[LexerDefinitionErrorType["EMPTY_MATCH_PATTERN"]=12]="EMPTY_MATCH_PATTERN";LexerDefinitionErrorType[LexerDefinitionErrorType["NO_LINE_BREAKS_FLAGS"]=13]="NO_LINE_BREAKS_FLAGS";LexerDefinitionErrorType[LexerDefinitionErrorType["UNREACHABLE_PATTERN"]=14]="UNREACHABLE_PATTERN";LexerDefinitionErrorType[LexerDefinitionErrorType["IDENTIFY_TERMINATOR"]=15]="IDENTIFY_TERMINATOR";LexerDefinitionErrorType[LexerDefinitionErrorType["CUSTOM_LINE_BREAK"]=16]="CUSTOM_LINE_BREAK";LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"]=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";})(LexerDefinitionErrorType||(LexerDefinitionErrorType={}));var DEFAULT_LEXER_CONFIG={deferDefinitionErrorsHandling:false,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:["\n","\r"],ensureOptimizations:false,safeMode:false,errorMessageProvider:defaultLexerErrorProvider,traceInitPerf:false,skipValidations:false,recoveryEnabled:true};Object.freeze(DEFAULT_LEXER_CONFIG);var Lexer=/*#__PURE__*/function(){function Lexer(lexerDefinition){var _this19=this;var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:DEFAULT_LEXER_CONFIG;_classCallCheck(this,Lexer);this.lexerDefinition=lexerDefinition;this.lexerDefinitionErrors=[];this.lexerDefinitionWarning=[];this.patternIdxToConfig={};this.charCodeToPatternIdxToConfig={};this.modes=[];this.emptyGroups={};this.trackStartLines=true;this.trackEndLines=true;this.hasCustom=false;this.canModeBeOptimized={};// Duplicated from the parser's perf trace trait to allow future extraction
// of the lexer to a separate package.
this.TRACE_INIT=function(phaseDesc,phaseImpl){// No need to optimize this using NOOP pattern because
// It is not called in a hot spot...
if(_this19.traceInitPerf===true){_this19.traceInitIndent++;var indent=new Array(_this19.traceInitIndent+1).join("\t");if(_this19.traceInitIndent<_this19.traceInitMaxIdent){console.log("".concat(indent,"--> <").concat(phaseDesc,">"));}var _timer=timer(phaseImpl),time=_timer.time,value=_timer.value;/* istanbul ignore next - Difficult to reproduce specific performance behavior (>10ms) in tests */var traceMethod=time>10?console.warn:console.log;if(_this19.traceInitIndent<_this19.traceInitMaxIdent){traceMethod("".concat(indent,"<-- <").concat(phaseDesc,"> time: ").concat(time,"ms"));}_this19.traceInitIndent--;return value;}else{return phaseImpl();}};if(typeof config==="boolean"){throw Error("The second argument to the Lexer constructor is now an ILexerConfig Object.\n"+"a boolean 2nd argument is no longer supported");}// todo: defaults func?
this.config=assign$1({},DEFAULT_LEXER_CONFIG,config);var traceInitVal=this.config.traceInitPerf;if(traceInitVal===true){this.traceInitMaxIdent=Infinity;this.traceInitPerf=true;}else if(typeof traceInitVal==="number"){this.traceInitMaxIdent=traceInitVal;this.traceInitPerf=true;}this.traceInitIndent=-1;this.TRACE_INIT("Lexer Constructor",function(){var actualDefinition;var hasOnlySingleMode=true;_this19.TRACE_INIT("Lexer Config handling",function(){if(_this19.config.lineTerminatorsPattern===DEFAULT_LEXER_CONFIG.lineTerminatorsPattern){// optimized built-in implementation for the defaults definition of lineTerminators
_this19.config.lineTerminatorsPattern=LineTerminatorOptimizedTester;}else{if(_this19.config.lineTerminatorCharacters===DEFAULT_LEXER_CONFIG.lineTerminatorCharacters){throw Error("Error: Missing <lineTerminatorCharacters> property on the Lexer config.\n"+"\tFor details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS");}}if(config.safeMode&&config.ensureOptimizations){throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');}_this19.trackStartLines=/full|onlyStart/i.test(_this19.config.positionTracking);_this19.trackEndLines=/full/i.test(_this19.config.positionTracking);// Convert SingleModeLexerDefinition into a IMultiModeLexerDefinition.
if(isArray$1(lexerDefinition)){actualDefinition={modes:{defaultMode:clone(lexerDefinition)},defaultMode:DEFAULT_MODE};}else{// no conversion needed, input should already be a IMultiModeLexerDefinition
hasOnlySingleMode=false;actualDefinition=clone(lexerDefinition);}});if(_this19.config.skipValidations===false){_this19.TRACE_INIT("performRuntimeChecks",function(){_this19.lexerDefinitionErrors=_this19.lexerDefinitionErrors.concat(performRuntimeChecks(actualDefinition,_this19.trackStartLines,_this19.config.lineTerminatorCharacters));});_this19.TRACE_INIT("performWarningRuntimeChecks",function(){_this19.lexerDefinitionWarning=_this19.lexerDefinitionWarning.concat(performWarningRuntimeChecks(actualDefinition,_this19.trackStartLines,_this19.config.lineTerminatorCharacters));});}// for extra robustness to avoid throwing an none informative error message
actualDefinition.modes=actualDefinition.modes?actualDefinition.modes:{};// an error of undefined TokenTypes will be detected in "performRuntimeChecks" above.
// this transformation is to increase robustness in the case of partially invalid lexer definition.
forEach(actualDefinition.modes,function(currModeValue,currModeName){actualDefinition.modes[currModeName]=reject(currModeValue,function(currTokType){return isUndefined(currTokType);});});var allModeNames=keys(actualDefinition.modes);forEach(actualDefinition.modes,function(currModDef,currModName){_this19.TRACE_INIT("Mode: <".concat(currModName,"> processing"),function(){_this19.modes.push(currModName);if(_this19.config.skipValidations===false){_this19.TRACE_INIT("validatePatterns",function(){_this19.lexerDefinitionErrors=_this19.lexerDefinitionErrors.concat(validatePatterns(currModDef,allModeNames));});}// If definition errors were encountered, the analysis phase may fail unexpectedly/
// Considering a lexer with definition errors may never be used, there is no point
// to performing the analysis anyhow...
if(isEmpty(_this19.lexerDefinitionErrors)){augmentTokenTypes(currModDef);var currAnalyzeResult;_this19.TRACE_INIT("analyzeTokenTypes",function(){currAnalyzeResult=analyzeTokenTypes(currModDef,{lineTerminatorCharacters:_this19.config.lineTerminatorCharacters,positionTracking:config.positionTracking,ensureOptimizations:config.ensureOptimizations,safeMode:config.safeMode,tracer:_this19.TRACE_INIT});});_this19.patternIdxToConfig[currModName]=currAnalyzeResult.patternIdxToConfig;_this19.charCodeToPatternIdxToConfig[currModName]=currAnalyzeResult.charCodeToPatternIdxToConfig;_this19.emptyGroups=assign$1({},_this19.emptyGroups,currAnalyzeResult.emptyGroups);_this19.hasCustom=currAnalyzeResult.hasCustom||_this19.hasCustom;_this19.canModeBeOptimized[currModName]=currAnalyzeResult.canBeOptimized;}});});_this19.defaultMode=actualDefinition.defaultMode;if(!isEmpty(_this19.lexerDefinitionErrors)&&!_this19.config.deferDefinitionErrorsHandling){var allErrMessages=map(_this19.lexerDefinitionErrors,function(error){return error.message;});var allErrMessagesString=allErrMessages.join("-----------------------\n");throw new Error("Errors detected in definition of Lexer:\n"+allErrMessagesString);}// Only print warning if there are no errors, This will avoid pl
forEach(_this19.lexerDefinitionWarning,function(warningDescriptor){PRINT_WARNING(warningDescriptor.message);});_this19.TRACE_INIT("Choosing sub-methods implementations",function(){// Choose the relevant internal implementations for this specific parser.
// These implementations should be in-lined by the JavaScript engine
// to provide optimal performance in each scenario.
if(SUPPORT_STICKY){_this19.chopInput=identity;_this19.match=_this19.matchWithTest;}else{_this19.updateLastIndex=noop;_this19.match=_this19.matchWithExec;}if(hasOnlySingleMode){_this19.handleModes=noop;}if(_this19.trackStartLines===false){_this19.computeNewColumn=identity;}if(_this19.trackEndLines===false){_this19.updateTokenEndLineColumnLocation=noop;}if(/full/i.test(_this19.config.positionTracking)){_this19.createTokenInstance=_this19.createFullToken;}else if(/onlyStart/i.test(_this19.config.positionTracking)){_this19.createTokenInstance=_this19.createStartOnlyToken;}else if(/onlyOffset/i.test(_this19.config.positionTracking)){_this19.createTokenInstance=_this19.createOffsetOnlyToken;}else{throw Error("Invalid <positionTracking> config option: \"".concat(_this19.config.positionTracking,"\""));}if(_this19.hasCustom){_this19.addToken=_this19.addTokenUsingPush;_this19.handlePayload=_this19.handlePayloadWithCustom;}else{_this19.addToken=_this19.addTokenUsingMemberAccess;_this19.handlePayload=_this19.handlePayloadNoCustom;}});_this19.TRACE_INIT("Failed Optimization Warnings",function(){var unOptimizedModes=reduce(_this19.canModeBeOptimized,function(cannotBeOptimized,canBeOptimized,modeName){if(canBeOptimized===false){cannotBeOptimized.push(modeName);}return cannotBeOptimized;},[]);if(config.ensureOptimizations&&!isEmpty(unOptimizedModes)){throw Error("Lexer Modes: < ".concat(unOptimizedModes.join(", ")," > cannot be optimized.\n")+'\t Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.\n'+"\t Or inspect the console log for details on how to resolve these issues.");}});_this19.TRACE_INIT("clearRegExpParserCache",function(){clearRegExpParserCache();});_this19.TRACE_INIT("toFastProperties",function(){toFastProperties(_this19);});});}_createClass(Lexer,[{key:"tokenize",value:function tokenize(text){var initialMode=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.defaultMode;if(!isEmpty(this.lexerDefinitionErrors)){var allErrMessages=map(this.lexerDefinitionErrors,function(error){return error.message;});var allErrMessagesString=allErrMessages.join("-----------------------\n");throw new Error("Unable to Tokenize because Errors detected in definition of Lexer:\n"+allErrMessagesString);}return this.tokenizeInternal(text,initialMode);}// There is quite a bit of duplication between this and "tokenizeInternalLazy"
// This is intentional due to performance considerations.
// this method also used quite a bit of `!` none null assertions because it is too optimized
// for `tsc` to always understand it is "safe"
},{key:"tokenizeInternal",value:function tokenizeInternal(text,initialMode){var _this20=this;var i,j,k,matchAltImage,longerAlt,matchedImage,payload,altPayload,imageLength,group,tokType,newToken,errLength,msg,match;var orgText=text;var orgLength=orgText.length;var offset=0;var matchedTokensIndex=0;// initializing the tokensArray to the "guessed" size.
// guessing too little will still reduce the number of array re-sizes on pushes.
// guessing too large (Tested by guessing x4 too large) may cost a bit more of memory
// but would still have a faster runtime by avoiding (All but one) array resizing.
var guessedNumberOfTokens=this.hasCustom?0// will break custom token pattern APIs the matchedTokens array will contain undefined elements.
:Math.floor(text.length/10);var matchedTokens=new Array(guessedNumberOfTokens);var errors=[];var line=this.trackStartLines?1:undefined;var column=this.trackStartLines?1:undefined;var groups=cloneEmptyGroups(this.emptyGroups);var trackLines=this.trackStartLines;var lineTerminatorPattern=this.config.lineTerminatorsPattern;var currModePatternsLength=0;var patternIdxToConfig=[];var currCharCodeToPatternIdxToConfig=[];var modeStack=[];var emptyArray=[];Object.freeze(emptyArray);var getPossiblePatterns;function getPossiblePatternsSlow(){return patternIdxToConfig;}function getPossiblePatternsOptimized(charCode){var optimizedCharIdx=charCodeToOptimizedIndex(charCode);var possiblePatterns=currCharCodeToPatternIdxToConfig[optimizedCharIdx];if(possiblePatterns===undefined){return emptyArray;}else{return possiblePatterns;}}var pop_mode=function pop_mode(popToken){// TODO: perhaps avoid this error in the edge case there is no more input?
if(modeStack.length===1&&// if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
// So no error should occur.
popToken.tokenType.PUSH_MODE===undefined){// if we try to pop the last mode there lexer will no longer have ANY mode.
// thus the pop is ignored, an error will be created and the lexer will continue parsing in the previous mode.
var _msg=_this20.config.errorMessageProvider.buildUnableToPopLexerModeMessage(popToken);errors.push({offset:popToken.startOffset,line:popToken.startLine,column:popToken.startColumn,length:popToken.image.length,message:_msg});}else{modeStack.pop();var newMode=last(modeStack);patternIdxToConfig=_this20.patternIdxToConfig[newMode];currCharCodeToPatternIdxToConfig=_this20.charCodeToPatternIdxToConfig[newMode];currModePatternsLength=patternIdxToConfig.length;var modeCanBeOptimized=_this20.canModeBeOptimized[newMode]&&_this20.config.safeMode===false;if(currCharCodeToPatternIdxToConfig&&modeCanBeOptimized){getPossiblePatterns=getPossiblePatternsOptimized;}else{getPossiblePatterns=getPossiblePatternsSlow;}}};function push_mode(newMode){modeStack.push(newMode);currCharCodeToPatternIdxToConfig=this.charCodeToPatternIdxToConfig[newMode];patternIdxToConfig=this.patternIdxToConfig[newMode];currModePatternsLength=patternIdxToConfig.length;currModePatternsLength=patternIdxToConfig.length;var modeCanBeOptimized=this.canModeBeOptimized[newMode]&&this.config.safeMode===false;if(currCharCodeToPatternIdxToConfig&&modeCanBeOptimized){getPossiblePatterns=getPossiblePatternsOptimized;}else{getPossiblePatterns=getPossiblePatternsSlow;}}// this pattern seems to avoid a V8 de-optimization, although that de-optimization does not
// seem to matter performance wise.
push_mode.call(this,initialMode);var currConfig;var recoveryEnabled=this.config.recoveryEnabled;while(offset<orgLength){matchedImage=null;var nextCharCode=orgText.charCodeAt(offset);var chosenPatternIdxToConfig=getPossiblePatterns(nextCharCode);var chosenPatternsLength=chosenPatternIdxToConfig.length;for(i=0;i<chosenPatternsLength;i++){currConfig=chosenPatternIdxToConfig[i];var currPattern=currConfig.pattern;payload=null;// manually in-lined because > 600 chars won't be in-lined in V8
var singleCharCode=currConfig["short"];if(singleCharCode!==false){if(nextCharCode===singleCharCode){// single character string
matchedImage=currPattern;}}else if(currConfig.isCustom===true){match=currPattern.exec(orgText,offset,matchedTokens,groups);if(match!==null){matchedImage=match[0];if(match.payload!==undefined){payload=match.payload;}}else{matchedImage=null;}}else{this.updateLastIndex(currPattern,offset);matchedImage=this.match(currPattern,text,offset);}if(matchedImage!==null){// even though this pattern matched we must try a another longer alternative.
// this can be used to prioritize keywords over identifiers
longerAlt=currConfig.longerAlt;if(longerAlt!==undefined){// TODO: micro optimize, avoid extra prop access
// by saving/linking longerAlt on the original config?
var longerAltLength=longerAlt.length;for(k=0;k<longerAltLength;k++){var longerAltConfig=patternIdxToConfig[longerAlt[k]];var longerAltPattern=longerAltConfig.pattern;altPayload=null;// single Char can never be a longer alt so no need to test it.
// manually in-lined because > 600 chars won't be in-lined in V8
if(longerAltConfig.isCustom===true){match=longerAltPattern.exec(orgText,offset,matchedTokens,groups);if(match!==null){matchAltImage=match[0];if(match.payload!==undefined){altPayload=match.payload;}}else{matchAltImage=null;}}else{this.updateLastIndex(longerAltPattern,offset);matchAltImage=this.match(longerAltPattern,text,offset);}if(matchAltImage&&matchAltImage.length>matchedImage.length){matchedImage=matchAltImage;payload=altPayload;currConfig=longerAltConfig;// Exit the loop early after matching one of the longer alternatives
// The first matched alternative takes precedence
break;}}}break;}}// successful match
if(matchedImage!==null){imageLength=matchedImage.length;group=currConfig.group;if(group!==undefined){tokType=currConfig.tokenTypeIdx;// TODO: "offset + imageLength" and the new column may be computed twice in case of "full" location information inside
// createFullToken method
newToken=this.createTokenInstance(matchedImage,offset,tokType,currConfig.tokenType,line,column,imageLength);this.handlePayload(newToken,payload);// TODO: optimize NOOP in case there are no special groups?
if(group===false){matchedTokensIndex=this.addToken(matchedTokens,matchedTokensIndex,newToken);}else{groups[group].push(newToken);}}text=this.chopInput(text,imageLength);offset=offset+imageLength;// TODO: with newlines the column may be assigned twice
column=this.computeNewColumn(column,imageLength);if(trackLines===true&&currConfig.canLineTerminator===true){var numOfLTsInMatch=0;var foundTerminator=void 0;var lastLTEndOffset=void 0;lineTerminatorPattern.lastIndex=0;do{foundTerminator=lineTerminatorPattern.test(matchedImage);if(foundTerminator===true){lastLTEndOffset=lineTerminatorPattern.lastIndex-1;numOfLTsInMatch++;}}while(foundTerminator===true);if(numOfLTsInMatch!==0){line=line+numOfLTsInMatch;column=imageLength-lastLTEndOffset;this.updateTokenEndLineColumnLocation(newToken,group,lastLTEndOffset,numOfLTsInMatch,line,column,imageLength);}}// will be NOOP if no modes present
this.handleModes(currConfig,pop_mode,push_mode,newToken);}else{// error recovery, drop characters until we identify a valid token's start point
var errorStartOffset=offset;var errorLine=line;var errorColumn=column;var foundResyncPoint=recoveryEnabled===false;while(foundResyncPoint===false&&offset<orgLength){// Identity Func (when sticky flag is enabled)
text=this.chopInput(text,1);offset++;for(j=0;j<currModePatternsLength;j++){var _currConfig=patternIdxToConfig[j];var _currPattern=_currConfig.pattern;// manually in-lined because > 600 chars won't be in-lined in V8
var _singleCharCode=_currConfig["short"];if(_singleCharCode!==false){if(orgText.charCodeAt(offset)===_singleCharCode){// single character string
foundResyncPoint=true;}}else if(_currConfig.isCustom===true){foundResyncPoint=_currPattern.exec(orgText,offset,matchedTokens,groups)!==null;}else{this.updateLastIndex(_currPattern,offset);foundResyncPoint=_currPattern.exec(text)!==null;}if(foundResyncPoint===true){break;}}}errLength=offset-errorStartOffset;column=this.computeNewColumn(column,errLength);// at this point we either re-synced or reached the end of the input text
msg=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(orgText,errorStartOffset,errLength,errorLine,errorColumn);errors.push({offset:errorStartOffset,line:errorLine,column:errorColumn,length:errLength,message:msg});if(recoveryEnabled===false){break;}}}// if we do have custom patterns which push directly into the
// TODO: custom tokens should not push directly??
if(!this.hasCustom){// if we guessed a too large size for the tokens array this will shrink it to the right size.
matchedTokens.length=matchedTokensIndex;}return{tokens:matchedTokens,groups:groups,errors:errors};}},{key:"handleModes",value:function handleModes(config,pop_mode,push_mode,newToken){if(config.pop===true){// need to save the PUSH_MODE property as if the mode is popped
// patternIdxToPopMode is updated to reflect the new mode after popping the stack
var pushMode=config.push;pop_mode(newToken);if(pushMode!==undefined){push_mode.call(this,pushMode);}}else if(config.push!==undefined){push_mode.call(this,config.push);}}},{key:"chopInput",value:function chopInput(text,length){return text.substring(length);}},{key:"updateLastIndex",value:function updateLastIndex(regExp,newLastIndex){regExp.lastIndex=newLastIndex;}// TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler
},{key:"updateTokenEndLineColumnLocation",value:function updateTokenEndLineColumnLocation(newToken,group,lastLTIdx,numOfLTsInMatch,line,column,imageLength){var lastCharIsLT,fixForEndingInLT;if(group!==undefined){// a none skipped multi line Token, need to update endLine/endColumn
lastCharIsLT=lastLTIdx===imageLength-1;fixForEndingInLT=lastCharIsLT?-1:0;if(!(numOfLTsInMatch===1&&lastCharIsLT===true)){// if a token ends in a LT that last LT only affects the line numbering of following Tokens
newToken.endLine=line+fixForEndingInLT;// the last LT in a token does not affect the endColumn either as the [columnStart ... columnEnd)
// inclusive to exclusive range.
newToken.endColumn=column-1+-fixForEndingInLT;}// else single LT in the last character of a token, no need to modify the endLine/EndColumn
}}},{key:"computeNewColumn",value:function computeNewColumn(oldColumn,imageLength){return oldColumn+imageLength;}},{key:"createOffsetOnlyToken",value:function createOffsetOnlyToken(image,startOffset,tokenTypeIdx,tokenType){return{image:image,startOffset:startOffset,tokenTypeIdx:tokenTypeIdx,tokenType:tokenType};}},{key:"createStartOnlyToken",value:function createStartOnlyToken(image,startOffset,tokenTypeIdx,tokenType,startLine,startColumn){return{image:image,startOffset:startOffset,startLine:startLine,startColumn:startColumn,tokenTypeIdx:tokenTypeIdx,tokenType:tokenType};}},{key:"createFullToken",value:function createFullToken(image,startOffset,tokenTypeIdx,tokenType,startLine,startColumn,imageLength){return{image:image,startOffset:startOffset,endOffset:startOffset+imageLength-1,startLine:startLine,endLine:startLine,startColumn:startColumn,endColumn:startColumn+imageLength-1,tokenTypeIdx:tokenTypeIdx,tokenType:tokenType};}},{key:"addTokenUsingPush",value:function addTokenUsingPush(tokenVector,index,tokenToAdd){tokenVector.push(tokenToAdd);return index;}},{key:"addTokenUsingMemberAccess",value:function addTokenUsingMemberAccess(tokenVector,index,tokenToAdd){tokenVector[index]=tokenToAdd;index++;return index;}},{key:"handlePayloadNoCustom",value:function handlePayloadNoCustom(token,payload){}},{key:"handlePayloadWithCustom",value:function handlePayloadWithCustom(token,payload){if(payload!==null){token.payload=payload;}}},{key:"matchWithTest",value:function matchWithTest(pattern,text,offset){var found=pattern.test(text);if(found===true){return text.substring(offset,pattern.lastIndex);}return null;}},{key:"matchWithExec",value:function matchWithExec(pattern,text){var regExpArray=pattern.exec(text);return regExpArray!==null?regExpArray[0]:null;}}]);return Lexer;}();Lexer.SKIPPED="This marks a skipped Token pattern, this means each token identified by it will"+"be consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";Lexer.NA=/NOT_APPLICABLE/;function tokenLabel(tokType){if(hasTokenLabel(tokType)){return tokType.LABEL;}else{return tokType.name;}}function hasTokenLabel(obj){return isString(obj.LABEL)&&obj.LABEL!=="";}var PARENT="parent";var CATEGORIES="categories";var LABEL="label";var GROUP="group";var PUSH_MODE="push_mode";var POP_MODE="pop_mode";var LONGER_ALT="longer_alt";var LINE_BREAKS="line_breaks";var START_CHARS_HINT="start_chars_hint";function createToken(config){return createTokenInternal(config);}function createTokenInternal(config){var pattern=config.pattern;var tokenType={};tokenType.name=config.name;if(!isUndefined(pattern)){tokenType.PATTERN=pattern;}if(has(config,PARENT)){throw"The parent property is no longer supported.\n"+"See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.";}if(has(config,CATEGORIES)){// casting to ANY as this will be fixed inside `augmentTokenTypes``
tokenType.CATEGORIES=config[CATEGORIES];}augmentTokenTypes([tokenType]);if(has(config,LABEL)){tokenType.LABEL=config[LABEL];}if(has(config,GROUP)){tokenType.GROUP=config[GROUP];}if(has(config,POP_MODE)){tokenType.POP_MODE=config[POP_MODE];}if(has(config,PUSH_MODE)){tokenType.PUSH_MODE=config[PUSH_MODE];}if(has(config,LONGER_ALT)){tokenType.LONGER_ALT=config[LONGER_ALT];}if(has(config,LINE_BREAKS)){tokenType.LINE_BREAKS=config[LINE_BREAKS];}if(has(config,START_CHARS_HINT)){tokenType.START_CHARS_HINT=config[START_CHARS_HINT];}return tokenType;}var EOF=createToken({name:"EOF",pattern:Lexer.NA});augmentTokenTypes([EOF]);function createTokenInstance(tokType,image,startOffset,endOffset,startLine,endLine,startColumn,endColumn){return{image:image,startOffset:startOffset,endOffset:endOffset,startLine:startLine,endLine:endLine,startColumn:startColumn,endColumn:endColumn,tokenTypeIdx:tokType.tokenTypeIdx,tokenType:tokType};}function tokenMatcher(token,tokType){return tokenStructuredMatcher(token,tokType);}var defaultParserErrorProvider={buildMismatchTokenMessage:function buildMismatchTokenMessage(_ref4){var expected=_ref4.expected,actual=_ref4.actual,previous=_ref4.previous,ruleName=_ref4.ruleName;var hasLabel=hasTokenLabel(expected);var expectedMsg=hasLabel?"--> ".concat(tokenLabel(expected)," <--"):"token of type --> ".concat(expected.name," <--");var msg="Expecting ".concat(expectedMsg," but found --> '").concat(actual.image,"' <--");return msg;},buildNotAllInputParsedMessage:function buildNotAllInputParsedMessage(_ref5){var firstRedundant=_ref5.firstRedundant,ruleName=_ref5.ruleName;return"Redundant input, expecting EOF but found: "+firstRedundant.image;},buildNoViableAltMessage:function buildNoViableAltMessage(_ref6){var expectedPathsPerAlt=_ref6.expectedPathsPerAlt,actual=_ref6.actual,previous=_ref6.previous,customUserDescription=_ref6.customUserDescription,ruleName=_ref6.ruleName;var errPrefix="Expecting: ";// TODO: issue: No Viable Alternative Error may have incomplete details. #502
var actualText=head(actual).image;var errSuffix="\nbut found: '"+actualText+"'";if(customUserDescription){return errPrefix+customUserDescription+errSuffix;}else{var allLookAheadPaths=reduce(expectedPathsPerAlt,function(result,currAltPaths){return result.concat(currAltPaths);},[]);var nextValidTokenSequences=map(allLookAheadPaths,function(currPath){return"[".concat(map(currPath,function(currTokenType){return tokenLabel(currTokenType);}).join(", "),"]");});var nextValidSequenceItems=map(nextValidTokenSequences,function(itemMsg,idx){return"  ".concat(idx+1,". ").concat(itemMsg);});var calculatedDescription="one of these possible Token sequences:\n".concat(nextValidSequenceItems.join("\n"));return errPrefix+calculatedDescription+errSuffix;}},buildEarlyExitMessage:function buildEarlyExitMessage(_ref7){var expectedIterationPaths=_ref7.expectedIterationPaths,actual=_ref7.actual,customUserDescription=_ref7.customUserDescription,ruleName=_ref7.ruleName;var errPrefix="Expecting: ";// TODO: issue: No Viable Alternative Error may have incomplete details. #502
var actualText=head(actual).image;var errSuffix="\nbut found: '"+actualText+"'";if(customUserDescription){return errPrefix+customUserDescription+errSuffix;}else{var nextValidTokenSequences=map(expectedIterationPaths,function(currPath){return"[".concat(map(currPath,function(currTokenType){return tokenLabel(currTokenType);}).join(","),"]");});var calculatedDescription="expecting at least one iteration which starts with one of these possible Token sequences::\n  "+"<".concat(nextValidTokenSequences.join(" ,"),">");return errPrefix+calculatedDescription+errSuffix;}}};Object.freeze(defaultParserErrorProvider);var defaultGrammarResolverErrorProvider={buildRuleNotFoundError:function buildRuleNotFoundError(topLevelRule,undefinedRule){var msg="Invalid grammar, reference to a rule which is not defined: ->"+undefinedRule.nonTerminalName+"<-\n"+"inside top level rule: ->"+topLevelRule.name+"<-";return msg;}};var defaultGrammarValidatorErrorProvider={buildDuplicateFoundError:function buildDuplicateFoundError(topLevelRule,duplicateProds){function getExtraProductionArgument(prod){if(prod instanceof Terminal){return prod.terminalType.name;}else if(prod instanceof NonTerminal){return prod.nonTerminalName;}else{return"";}}var topLevelName=topLevelRule.name;var duplicateProd=head(duplicateProds);var index=duplicateProd.idx;var dslName=getProductionDslName(duplicateProd);var extraArgument=getExtraProductionArgument(duplicateProd);var hasExplicitIndex=index>0;var msg="->".concat(dslName).concat(hasExplicitIndex?index:"","<- ").concat(extraArgument?"with argument: ->".concat(extraArgument,"<-"):"","\n                  appears more than once (").concat(duplicateProds.length," times) in the top level rule: ->").concat(topLevelName,"<-.                  \n                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES \n                  ");// white space trimming time! better to trim afterwards as it allows to use WELL formatted multi line template strings...
msg=msg.replace(/[ \t]+/g," ");msg=msg.replace(/\s\s+/g,"\n");return msg;},buildNamespaceConflictError:function buildNamespaceConflictError(rule){var errMsg="Namespace conflict found in grammar.\n"+"The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <".concat(rule.name,">.\n")+"To resolve this make sure each Terminal and Non-Terminal names are unique\n"+"This is easy to accomplish by using the convention that Terminal names start with an uppercase letter\n"+"and Non-Terminal names start with a lower case letter.";return errMsg;},buildAlternationPrefixAmbiguityError:function buildAlternationPrefixAmbiguityError(options){var pathMsg=map(options.prefixPath,function(currTok){return tokenLabel(currTok);}).join(", ");var occurrence=options.alternation.idx===0?"":options.alternation.idx;var errMsg="Ambiguous alternatives: <".concat(options.ambiguityIndices.join(" ,"),"> due to common lookahead prefix\n")+"in <OR".concat(occurrence,"> inside <").concat(options.topLevelRule.name,"> Rule,\n")+"<".concat(pathMsg,"> may appears as a prefix path in all these alternatives.\n")+"See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX\n"+"For Further details.";return errMsg;},buildAlternationAmbiguityError:function buildAlternationAmbiguityError(options){var pathMsg=map(options.prefixPath,function(currtok){return tokenLabel(currtok);}).join(", ");var occurrence=options.alternation.idx===0?"":options.alternation.idx;var currMessage="Ambiguous Alternatives Detected: <".concat(options.ambiguityIndices.join(" ,"),"> in <OR").concat(occurrence,">")+" inside <".concat(options.topLevelRule.name,"> Rule,\n")+"<".concat(pathMsg,"> may appears as a prefix path in all these alternatives.\n");currMessage=currMessage+"See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES\n"+"For Further details.";return currMessage;},buildEmptyRepetitionError:function buildEmptyRepetitionError(options){var dslName=getProductionDslName(options.repetition);if(options.repetition.idx!==0){dslName+=options.repetition.idx;}var errMsg="The repetition <".concat(dslName,"> within Rule <").concat(options.topLevelRule.name,"> can never consume any tokens.\n")+"This could lead to an infinite loop.";return errMsg;},// TODO: remove - `errors_public` from nyc.config.js exclude
//       once this method is fully removed from this file
buildTokenNameError:function buildTokenNameError(options){/* istanbul ignore next */return"deprecated";},buildEmptyAlternationError:function buildEmptyAlternationError(options){var errMsg="Ambiguous empty alternative: <".concat(options.emptyChoiceIdx+1,">")+" in <OR".concat(options.alternation.idx,"> inside <").concat(options.topLevelRule.name,"> Rule.\n")+"Only the last alternative may be an empty alternative.";return errMsg;},buildTooManyAlternativesError:function buildTooManyAlternativesError(options){var errMsg="An Alternation cannot have more than 256 alternatives:\n"+"<OR".concat(options.alternation.idx,"> inside <").concat(options.topLevelRule.name,"> Rule.\n has ").concat(options.alternation.definition.length+1," alternatives.");return errMsg;},buildLeftRecursionError:function buildLeftRecursionError(options){var ruleName=options.topLevelRule.name;var pathNames=map(options.leftRecursionPath,function(currRule){return currRule.name;});var leftRecursivePath="".concat(ruleName," --> ").concat(pathNames.concat([ruleName]).join(" --> "));var errMsg="Left Recursion found in grammar.\n"+"rule: <".concat(ruleName,"> can be invoked from itself (directly or indirectly)\n")+"without consuming any Tokens. The grammar path that causes this is: \n ".concat(leftRecursivePath,"\n")+" To fix this refactor your grammar to remove the left recursion.\n"+"see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.";return errMsg;},// TODO: remove - `errors_public` from nyc.config.js exclude
//       once this method is fully removed from this file
buildInvalidRuleNameError:function buildInvalidRuleNameError(options){/* istanbul ignore next */return"deprecated";},buildDuplicateRuleNameError:function buildDuplicateRuleNameError(options){var ruleName;if(options.topLevelRule instanceof Rule){ruleName=options.topLevelRule.name;}else{ruleName=options.topLevelRule;}var errMsg="Duplicate definition, rule: ->".concat(ruleName,"<- is already defined in the grammar: ->").concat(options.grammarName,"<-");return errMsg;}};function resolveGrammar$1(topLevels,errMsgProvider){var refResolver=new GastRefResolverVisitor(topLevels,errMsgProvider);refResolver.resolveRefs();return refResolver.errors;}var GastRefResolverVisitor=/*#__PURE__*/function(_GAstVisitor){_inherits(GastRefResolverVisitor,_GAstVisitor);var _super14=_createSuper(GastRefResolverVisitor);function GastRefResolverVisitor(nameToTopRule,errMsgProvider){var _this21;_classCallCheck(this,GastRefResolverVisitor);_this21=_super14.call(this);_this21.nameToTopRule=nameToTopRule;_this21.errMsgProvider=errMsgProvider;_this21.errors=[];return _this21;}_createClass(GastRefResolverVisitor,[{key:"resolveRefs",value:function resolveRefs(){var _this22=this;forEach(values(this.nameToTopRule),function(prod){_this22.currTopLevel=prod;prod.accept(_this22);});}},{key:"visitNonTerminal",value:function visitNonTerminal(node){var ref=this.nameToTopRule[node.nonTerminalName];if(!ref){var msg=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,node);this.errors.push({message:msg,type:ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:node.nonTerminalName});}else{node.referencedRule=ref;}}}]);return GastRefResolverVisitor;}(GAstVisitor);var AbstractNextPossibleTokensWalker=/*#__PURE__*/function(_RestWalker2){_inherits(AbstractNextPossibleTokensWalker,_RestWalker2);var _super15=_createSuper(AbstractNextPossibleTokensWalker);function AbstractNextPossibleTokensWalker(topProd,path){var _this23;_classCallCheck(this,AbstractNextPossibleTokensWalker);_this23=_super15.call(this);_this23.topProd=topProd;_this23.path=path;_this23.possibleTokTypes=[];_this23.nextProductionName="";_this23.nextProductionOccurrence=0;_this23.found=false;_this23.isAtEndOfPath=false;return _this23;}_createClass(AbstractNextPossibleTokensWalker,[{key:"startWalking",value:function startWalking(){this.found=false;if(this.path.ruleStack[0]!==this.topProd.name){throw Error("The path does not start with the walker's top Rule!");}// immutable for the win
this.ruleStack=clone(this.path.ruleStack).reverse();// intelij bug requires assertion
this.occurrenceStack=clone(this.path.occurrenceStack).reverse();// intelij bug requires assertion
// already verified that the first production is valid, we now seek the 2nd production
this.ruleStack.pop();this.occurrenceStack.pop();this.updateExpectedNext();this.walk(this.topProd);return this.possibleTokTypes;}},{key:"walk",value:function walk(prod){var prevRest=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];// stop scanning once we found the path
if(!this.found){_get(_getPrototypeOf(AbstractNextPossibleTokensWalker.prototype),"walk",this).call(this,prod,prevRest);}}},{key:"walkProdRef",value:function walkProdRef(refProd,currRest,prevRest){// found the next production, need to keep walking in it
if(refProd.referencedRule.name===this.nextProductionName&&refProd.idx===this.nextProductionOccurrence){var fullRest=currRest.concat(prevRest);this.updateExpectedNext();this.walk(refProd.referencedRule,fullRest);}}},{key:"updateExpectedNext",value:function updateExpectedNext(){// need to consume the Terminal
if(isEmpty(this.ruleStack)){// must reset nextProductionXXX to avoid walking down another Top Level production while what we are
// really seeking is the last Terminal...
this.nextProductionName="";this.nextProductionOccurrence=0;this.isAtEndOfPath=true;}else{this.nextProductionName=this.ruleStack.pop();this.nextProductionOccurrence=this.occurrenceStack.pop();}}}]);return AbstractNextPossibleTokensWalker;}(RestWalker);var NextAfterTokenWalker=/*#__PURE__*/function(_AbstractNextPossible){_inherits(NextAfterTokenWalker,_AbstractNextPossible);var _super16=_createSuper(NextAfterTokenWalker);function NextAfterTokenWalker(topProd,path){var _this24;_classCallCheck(this,NextAfterTokenWalker);_this24=_super16.call(this,topProd,path);_this24.path=path;_this24.nextTerminalName="";_this24.nextTerminalOccurrence=0;_this24.nextTerminalName=_this24.path.lastTok.name;_this24.nextTerminalOccurrence=_this24.path.lastTokOccurrence;return _this24;}_createClass(NextAfterTokenWalker,[{key:"walkTerminal",value:function walkTerminal(terminal,currRest,prevRest){if(this.isAtEndOfPath&&terminal.terminalType.name===this.nextTerminalName&&terminal.idx===this.nextTerminalOccurrence&&!this.found){var fullRest=currRest.concat(prevRest);var restProd=new Alternative({definition:fullRest});this.possibleTokTypes=first(restProd);this.found=true;}}}]);return NextAfterTokenWalker;}(AbstractNextPossibleTokensWalker);/**
 * This walker only "walks" a single "TOP" level in the Grammar Ast, this means
 * it never "follows" production refs
 */var AbstractNextTerminalAfterProductionWalker=/*#__PURE__*/function(_RestWalker3){_inherits(AbstractNextTerminalAfterProductionWalker,_RestWalker3);var _super17=_createSuper(AbstractNextTerminalAfterProductionWalker);function AbstractNextTerminalAfterProductionWalker(topRule,occurrence){var _this25;_classCallCheck(this,AbstractNextTerminalAfterProductionWalker);_this25=_super17.call(this);_this25.topRule=topRule;_this25.occurrence=occurrence;_this25.result={token:undefined,occurrence:undefined,isEndOfRule:undefined};return _this25;}_createClass(AbstractNextTerminalAfterProductionWalker,[{key:"startWalking",value:function startWalking(){this.walk(this.topRule);return this.result;}}]);return AbstractNextTerminalAfterProductionWalker;}(RestWalker);var NextTerminalAfterManyWalker=/*#__PURE__*/function(_AbstractNextTerminal){_inherits(NextTerminalAfterManyWalker,_AbstractNextTerminal);var _super18=_createSuper(NextTerminalAfterManyWalker);function NextTerminalAfterManyWalker(){_classCallCheck(this,NextTerminalAfterManyWalker);return _super18.apply(this,arguments);}_createClass(NextTerminalAfterManyWalker,[{key:"walkMany",value:function walkMany(manyProd,currRest,prevRest){if(manyProd.idx===this.occurrence){var firstAfterMany=head(currRest.concat(prevRest));this.result.isEndOfRule=firstAfterMany===undefined;if(firstAfterMany instanceof Terminal){this.result.token=firstAfterMany.terminalType;this.result.occurrence=firstAfterMany.idx;}}else{_get(_getPrototypeOf(NextTerminalAfterManyWalker.prototype),"walkMany",this).call(this,manyProd,currRest,prevRest);}}}]);return NextTerminalAfterManyWalker;}(AbstractNextTerminalAfterProductionWalker);var NextTerminalAfterManySepWalker=/*#__PURE__*/function(_AbstractNextTerminal2){_inherits(NextTerminalAfterManySepWalker,_AbstractNextTerminal2);var _super19=_createSuper(NextTerminalAfterManySepWalker);function NextTerminalAfterManySepWalker(){_classCallCheck(this,NextTerminalAfterManySepWalker);return _super19.apply(this,arguments);}_createClass(NextTerminalAfterManySepWalker,[{key:"walkManySep",value:function walkManySep(manySepProd,currRest,prevRest){if(manySepProd.idx===this.occurrence){var firstAfterManySep=head(currRest.concat(prevRest));this.result.isEndOfRule=firstAfterManySep===undefined;if(firstAfterManySep instanceof Terminal){this.result.token=firstAfterManySep.terminalType;this.result.occurrence=firstAfterManySep.idx;}}else{_get(_getPrototypeOf(NextTerminalAfterManySepWalker.prototype),"walkManySep",this).call(this,manySepProd,currRest,prevRest);}}}]);return NextTerminalAfterManySepWalker;}(AbstractNextTerminalAfterProductionWalker);var NextTerminalAfterAtLeastOneWalker=/*#__PURE__*/function(_AbstractNextTerminal3){_inherits(NextTerminalAfterAtLeastOneWalker,_AbstractNextTerminal3);var _super20=_createSuper(NextTerminalAfterAtLeastOneWalker);function NextTerminalAfterAtLeastOneWalker(){_classCallCheck(this,NextTerminalAfterAtLeastOneWalker);return _super20.apply(this,arguments);}_createClass(NextTerminalAfterAtLeastOneWalker,[{key:"walkAtLeastOne",value:function walkAtLeastOne(atLeastOneProd,currRest,prevRest){if(atLeastOneProd.idx===this.occurrence){var firstAfterAtLeastOne=head(currRest.concat(prevRest));this.result.isEndOfRule=firstAfterAtLeastOne===undefined;if(firstAfterAtLeastOne instanceof Terminal){this.result.token=firstAfterAtLeastOne.terminalType;this.result.occurrence=firstAfterAtLeastOne.idx;}}else{_get(_getPrototypeOf(NextTerminalAfterAtLeastOneWalker.prototype),"walkAtLeastOne",this).call(this,atLeastOneProd,currRest,prevRest);}}}]);return NextTerminalAfterAtLeastOneWalker;}(AbstractNextTerminalAfterProductionWalker);// TODO: reduce code duplication in the AfterWalkers
var NextTerminalAfterAtLeastOneSepWalker=/*#__PURE__*/function(_AbstractNextTerminal4){_inherits(NextTerminalAfterAtLeastOneSepWalker,_AbstractNextTerminal4);var _super21=_createSuper(NextTerminalAfterAtLeastOneSepWalker);function NextTerminalAfterAtLeastOneSepWalker(){_classCallCheck(this,NextTerminalAfterAtLeastOneSepWalker);return _super21.apply(this,arguments);}_createClass(NextTerminalAfterAtLeastOneSepWalker,[{key:"walkAtLeastOneSep",value:function walkAtLeastOneSep(atleastOneSepProd,currRest,prevRest){if(atleastOneSepProd.idx===this.occurrence){var firstAfterfirstAfterAtLeastOneSep=head(currRest.concat(prevRest));this.result.isEndOfRule=firstAfterfirstAfterAtLeastOneSep===undefined;if(firstAfterfirstAfterAtLeastOneSep instanceof Terminal){this.result.token=firstAfterfirstAfterAtLeastOneSep.terminalType;this.result.occurrence=firstAfterfirstAfterAtLeastOneSep.idx;}}else{_get(_getPrototypeOf(NextTerminalAfterAtLeastOneSepWalker.prototype),"walkAtLeastOneSep",this).call(this,atleastOneSepProd,currRest,prevRest);}}}]);return NextTerminalAfterAtLeastOneSepWalker;}(AbstractNextTerminalAfterProductionWalker);function possiblePathsFrom(targetDef,maxLength){var currPath=arguments.length>2&&arguments[2]!==undefined?arguments[2]:[];// avoid side effects
currPath=clone(currPath);var result=[];var i=0;// TODO: avoid inner funcs
function remainingPathWith(nextDef){return nextDef.concat(drop(targetDef,i+1));}// TODO: avoid inner funcs
function getAlternativesForProd(definition){var alternatives=possiblePathsFrom(remainingPathWith(definition),maxLength,currPath);return result.concat(alternatives);}/**
     * Mandatory productions will halt the loop as the paths computed from their recursive calls will already contain the
     * following (rest) of the targetDef.
     *
     * For optional productions (Option/Repetition/...) the loop will continue to represent the paths that do not include the
     * the optional production.
     */while(currPath.length<maxLength&&i<targetDef.length){var prod=targetDef[i];/* istanbul ignore else */if(prod instanceof Alternative){return getAlternativesForProd(prod.definition);}else if(prod instanceof NonTerminal){return getAlternativesForProd(prod.definition);}else if(prod instanceof Option){result=getAlternativesForProd(prod.definition);}else if(prod instanceof RepetitionMandatory){var newDef=prod.definition.concat([new Repetition({definition:prod.definition})]);return getAlternativesForProd(newDef);}else if(prod instanceof RepetitionMandatoryWithSeparator){var _newDef=[new Alternative({definition:prod.definition}),new Repetition({definition:[new Terminal({terminalType:prod.separator})].concat(prod.definition)})];return getAlternativesForProd(_newDef);}else if(prod instanceof RepetitionWithSeparator){var _newDef2=prod.definition.concat([new Repetition({definition:[new Terminal({terminalType:prod.separator})].concat(prod.definition)})]);result=getAlternativesForProd(_newDef2);}else if(prod instanceof Repetition){var _newDef3=prod.definition.concat([new Repetition({definition:prod.definition})]);result=getAlternativesForProd(_newDef3);}else if(prod instanceof Alternation){forEach(prod.definition,function(currAlt){// TODO: this is a limited check for empty alternatives
//   It would prevent a common case of infinite loops during parser initialization.
//   However **in-directly** empty alternatives may still cause issues.
if(isEmpty(currAlt.definition)===false){result=getAlternativesForProd(currAlt.definition);}});return result;}else if(prod instanceof Terminal){currPath.push(prod.terminalType);}else{throw Error("non exhaustive match");}i++;}result.push({partialPath:currPath,suffixDef:drop(targetDef,i)});return result;}function nextPossibleTokensAfter(initialDef,tokenVector,tokMatcher,maxLookAhead){var EXIT_NON_TERMINAL="EXIT_NONE_TERMINAL";// to avoid creating a new Array each time.
var EXIT_NON_TERMINAL_ARR=[EXIT_NON_TERMINAL];var EXIT_ALTERNATIVE="EXIT_ALTERNATIVE";var foundCompletePath=false;var tokenVectorLength=tokenVector.length;var minimalAlternativesIndex=tokenVectorLength-maxLookAhead-1;var result=[];var possiblePaths=[];possiblePaths.push({idx:-1,def:initialDef,ruleStack:[],occurrenceStack:[]});while(!isEmpty(possiblePaths)){var currPath=possiblePaths.pop();// skip alternatives if no more results can be found (assuming deterministic grammar with fixed lookahead)
if(currPath===EXIT_ALTERNATIVE){if(foundCompletePath&&last(possiblePaths).idx<=minimalAlternativesIndex){// remove irrelevant alternative
possiblePaths.pop();}continue;}var currDef=currPath.def;var currIdx=currPath.idx;var currRuleStack=currPath.ruleStack;var currOccurrenceStack=currPath.occurrenceStack;// For Example: an empty path could exist in a valid grammar in the case of an EMPTY_ALT
if(isEmpty(currDef)){continue;}var prod=currDef[0];/* istanbul ignore else */if(prod===EXIT_NON_TERMINAL){var nextPath={idx:currIdx,def:drop(currDef),ruleStack:dropRight(currRuleStack),occurrenceStack:dropRight(currOccurrenceStack)};possiblePaths.push(nextPath);}else if(prod instanceof Terminal){/* istanbul ignore else */if(currIdx<tokenVectorLength-1){var nextIdx=currIdx+1;var actualToken=tokenVector[nextIdx];if(tokMatcher(actualToken,prod.terminalType)){var _nextPath={idx:nextIdx,def:drop(currDef),ruleStack:currRuleStack,occurrenceStack:currOccurrenceStack};possiblePaths.push(_nextPath);}// end of the line
}else if(currIdx===tokenVectorLength-1){// IGNORE ABOVE ELSE
result.push({nextTokenType:prod.terminalType,nextTokenOccurrence:prod.idx,ruleStack:currRuleStack,occurrenceStack:currOccurrenceStack});foundCompletePath=true;}else{throw Error("non exhaustive match");}}else if(prod instanceof NonTerminal){var newRuleStack=clone(currRuleStack);newRuleStack.push(prod.nonTerminalName);var newOccurrenceStack=clone(currOccurrenceStack);newOccurrenceStack.push(prod.idx);var _nextPath2={idx:currIdx,def:prod.definition.concat(EXIT_NON_TERMINAL_ARR,drop(currDef)),ruleStack:newRuleStack,occurrenceStack:newOccurrenceStack};possiblePaths.push(_nextPath2);}else if(prod instanceof Option){// the order of alternatives is meaningful, FILO (Last path will be traversed first).
var nextPathWithout={idx:currIdx,def:drop(currDef),ruleStack:currRuleStack,occurrenceStack:currOccurrenceStack};possiblePaths.push(nextPathWithout);// required marker to avoid backtracking paths whose higher priority alternatives already matched
possiblePaths.push(EXIT_ALTERNATIVE);var nextPathWith={idx:currIdx,def:prod.definition.concat(drop(currDef)),ruleStack:currRuleStack,occurrenceStack:currOccurrenceStack};possiblePaths.push(nextPathWith);}else if(prod instanceof RepetitionMandatory){// TODO:(THE NEW operators here take a while...) (convert once?)
var secondIteration=new Repetition({definition:prod.definition,idx:prod.idx});var nextDef=prod.definition.concat([secondIteration],drop(currDef));var _nextPath3={idx:currIdx,def:nextDef,ruleStack:currRuleStack,occurrenceStack:currOccurrenceStack};possiblePaths.push(_nextPath3);}else if(prod instanceof RepetitionMandatoryWithSeparator){// TODO:(THE NEW operators here take a while...) (convert once?)
var separatorGast=new Terminal({terminalType:prod.separator});var _secondIteration=new Repetition({definition:[separatorGast].concat(prod.definition),idx:prod.idx});var _nextDef=prod.definition.concat([_secondIteration],drop(currDef));var _nextPath4={idx:currIdx,def:_nextDef,ruleStack:currRuleStack,occurrenceStack:currOccurrenceStack};possiblePaths.push(_nextPath4);}else if(prod instanceof RepetitionWithSeparator){// the order of alternatives is meaningful, FILO (Last path will be traversed first).
var _nextPathWithout={idx:currIdx,def:drop(currDef),ruleStack:currRuleStack,occurrenceStack:currOccurrenceStack};possiblePaths.push(_nextPathWithout);// required marker to avoid backtracking paths whose higher priority alternatives already matched
possiblePaths.push(EXIT_ALTERNATIVE);var _separatorGast=new Terminal({terminalType:prod.separator});var nthRepetition=new Repetition({definition:[_separatorGast].concat(prod.definition),idx:prod.idx});var _nextDef2=prod.definition.concat([nthRepetition],drop(currDef));var _nextPathWith={idx:currIdx,def:_nextDef2,ruleStack:currRuleStack,occurrenceStack:currOccurrenceStack};possiblePaths.push(_nextPathWith);}else if(prod instanceof Repetition){// the order of alternatives is meaningful, FILO (Last path will be traversed first).
var _nextPathWithout2={idx:currIdx,def:drop(currDef),ruleStack:currRuleStack,occurrenceStack:currOccurrenceStack};possiblePaths.push(_nextPathWithout2);// required marker to avoid backtracking paths whose higher priority alternatives already matched
possiblePaths.push(EXIT_ALTERNATIVE);// TODO: an empty repetition will cause infinite loops here, will the parser detect this in selfAnalysis?
var _nthRepetition=new Repetition({definition:prod.definition,idx:prod.idx});var _nextDef3=prod.definition.concat([_nthRepetition],drop(currDef));var _nextPathWith2={idx:currIdx,def:_nextDef3,ruleStack:currRuleStack,occurrenceStack:currOccurrenceStack};possiblePaths.push(_nextPathWith2);}else if(prod instanceof Alternation){// the order of alternatives is meaningful, FILO (Last path will be traversed first).
for(var _i16=prod.definition.length-1;_i16>=0;_i16--){var currAlt=prod.definition[_i16];var currAltPath={idx:currIdx,def:currAlt.definition.concat(drop(currDef)),ruleStack:currRuleStack,occurrenceStack:currOccurrenceStack};possiblePaths.push(currAltPath);possiblePaths.push(EXIT_ALTERNATIVE);}}else if(prod instanceof Alternative){possiblePaths.push({idx:currIdx,def:prod.definition.concat(drop(currDef)),ruleStack:currRuleStack,occurrenceStack:currOccurrenceStack});}else if(prod instanceof Rule){// last because we should only encounter at most a single one of these per invocation.
possiblePaths.push(expandTopLevelRule(prod,currIdx,currRuleStack,currOccurrenceStack));}else{throw Error("non exhaustive match");}}return result;}function expandTopLevelRule(topRule,currIdx,currRuleStack,currOccurrenceStack){var newRuleStack=clone(currRuleStack);newRuleStack.push(topRule.name);var newCurrOccurrenceStack=clone(currOccurrenceStack);// top rule is always assumed to have been called with occurrence index 1
newCurrOccurrenceStack.push(1);return{idx:currIdx,def:topRule.definition,ruleStack:newRuleStack,occurrenceStack:newCurrOccurrenceStack};}var PROD_TYPE;(function(PROD_TYPE){PROD_TYPE[PROD_TYPE["OPTION"]=0]="OPTION";PROD_TYPE[PROD_TYPE["REPETITION"]=1]="REPETITION";PROD_TYPE[PROD_TYPE["REPETITION_MANDATORY"]=2]="REPETITION_MANDATORY";PROD_TYPE[PROD_TYPE["REPETITION_MANDATORY_WITH_SEPARATOR"]=3]="REPETITION_MANDATORY_WITH_SEPARATOR";PROD_TYPE[PROD_TYPE["REPETITION_WITH_SEPARATOR"]=4]="REPETITION_WITH_SEPARATOR";PROD_TYPE[PROD_TYPE["ALTERNATION"]=5]="ALTERNATION";})(PROD_TYPE||(PROD_TYPE={}));function getProdType(prod){/* istanbul ignore else */if(prod instanceof Option||prod==="Option"){return PROD_TYPE.OPTION;}else if(prod instanceof Repetition||prod==="Repetition"){return PROD_TYPE.REPETITION;}else if(prod instanceof RepetitionMandatory||prod==="RepetitionMandatory"){return PROD_TYPE.REPETITION_MANDATORY;}else if(prod instanceof RepetitionMandatoryWithSeparator||prod==="RepetitionMandatoryWithSeparator"){return PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR;}else if(prod instanceof RepetitionWithSeparator||prod==="RepetitionWithSeparator"){return PROD_TYPE.REPETITION_WITH_SEPARATOR;}else if(prod instanceof Alternation||prod==="Alternation"){return PROD_TYPE.ALTERNATION;}else{throw Error("non exhaustive match");}}function buildLookaheadFuncForOr(occurrence,ruleGrammar,maxLookahead,hasPredicates,dynamicTokensEnabled,laFuncBuilder){var lookAheadPaths=getLookaheadPathsForOr(occurrence,ruleGrammar,maxLookahead);var tokenMatcher=areTokenCategoriesNotUsed(lookAheadPaths)?tokenStructuredMatcherNoCategories:tokenStructuredMatcher;return laFuncBuilder(lookAheadPaths,hasPredicates,tokenMatcher,dynamicTokensEnabled);}/**
 *  When dealing with an Optional production (OPTION/MANY/2nd iteration of AT_LEAST_ONE/...) we need to compare
 *  the lookahead "inside" the production and the lookahead immediately "after" it in the same top level rule (context free).
 *
 *  Example: given a production:
 *  ABC(DE)?DF
 *
 *  The optional '(DE)?' should only be entered if we see 'DE'. a single Token 'D' is not sufficient to distinguish between the two
 *  alternatives.
 *
 *  @returns A Lookahead function which will return true IFF the parser should parse the Optional production.
 */function buildLookaheadFuncForOptionalProd(occurrence,ruleGrammar,k,dynamicTokensEnabled,prodType,lookaheadBuilder){var lookAheadPaths=getLookaheadPathsForOptionalProd(occurrence,ruleGrammar,prodType,k);var tokenMatcher=areTokenCategoriesNotUsed(lookAheadPaths)?tokenStructuredMatcherNoCategories:tokenStructuredMatcher;return lookaheadBuilder(lookAheadPaths[0],tokenMatcher,dynamicTokensEnabled);}function buildAlternativesLookAheadFunc(alts,hasPredicates,tokenMatcher,dynamicTokensEnabled){var numOfAlts=alts.length;var areAllOneTokenLookahead=every(alts,function(currAlt){return every(currAlt,function(currPath){return currPath.length===1;});});// This version takes into account the predicates as well.
if(hasPredicates){/**
         * @returns {number} - The chosen alternative index
         */return function(orAlts){// unfortunately the predicates must be extracted every single time
// as they cannot be cached due to references to parameters(vars) which are no longer valid.
// note that in the common case of no predicates, no cpu time will be wasted on this (see else block)
var predicates=map(orAlts,function(currAlt){return currAlt.GATE;});for(var t=0;t<numOfAlts;t++){var currAlt=alts[t];var currNumOfPaths=currAlt.length;var currPredicate=predicates[t];if(currPredicate!==undefined&&currPredicate.call(this)===false){// if the predicate does not match there is no point in checking the paths
continue;}nextPath:for(var j=0;j<currNumOfPaths;j++){var currPath=currAlt[j];var currPathLength=currPath.length;for(var _i17=0;_i17<currPathLength;_i17++){var nextToken=this.LA(_i17+1);if(tokenMatcher(nextToken,currPath[_i17])===false){// mismatch in current path
// try the next pth
continue nextPath;}}// found a full path that matches.
// this will also work for an empty ALT as the loop will be skipped
return t;}// none of the paths for the current alternative matched
// try the next alternative
}// none of the alternatives could be matched
return undefined;};}else if(areAllOneTokenLookahead&&!dynamicTokensEnabled){// optimized (common) case of all the lookaheads paths requiring only
// a single token lookahead. These Optimizations cannot work if dynamically defined Tokens are used.
var singleTokenAlts=map(alts,function(currAlt){return flatten(currAlt);});var choiceToAlt=reduce(singleTokenAlts,function(result,currAlt,idx){forEach(currAlt,function(currTokType){if(!has(result,currTokType.tokenTypeIdx)){result[currTokType.tokenTypeIdx]=idx;}forEach(currTokType.categoryMatches,function(currExtendingType){if(!has(result,currExtendingType)){result[currExtendingType]=idx;}});});return result;},{});/**
         * @returns {number} - The chosen alternative index
         */return function(){var nextToken=this.LA(1);return choiceToAlt[nextToken.tokenTypeIdx];};}else{// optimized lookahead without needing to check the predicates at all.
// this causes code duplication which is intentional to improve performance.
/**
         * @returns {number} - The chosen alternative index
         */return function(){for(var t=0;t<numOfAlts;t++){var currAlt=alts[t];var currNumOfPaths=currAlt.length;nextPath:for(var j=0;j<currNumOfPaths;j++){var currPath=currAlt[j];var currPathLength=currPath.length;for(var _i18=0;_i18<currPathLength;_i18++){var nextToken=this.LA(_i18+1);if(tokenMatcher(nextToken,currPath[_i18])===false){// mismatch in current path
// try the next pth
continue nextPath;}}// found a full path that matches.
// this will also work for an empty ALT as the loop will be skipped
return t;}// none of the paths for the current alternative matched
// try the next alternative
}// none of the alternatives could be matched
return undefined;};}}function buildSingleAlternativeLookaheadFunction(alt,tokenMatcher,dynamicTokensEnabled){var areAllOneTokenLookahead=every(alt,function(currPath){return currPath.length===1;});var numOfPaths=alt.length;// optimized (common) case of all the lookaheads paths requiring only
// a single token lookahead.
if(areAllOneTokenLookahead&&!dynamicTokensEnabled){var singleTokensTypes=flatten(alt);if(singleTokensTypes.length===1&&isEmpty(singleTokensTypes[0].categoryMatches)){var expectedTokenType=singleTokensTypes[0];var expectedTokenUniqueKey=expectedTokenType.tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===expectedTokenUniqueKey;};}else{var choiceToAlt=reduce(singleTokensTypes,function(result,currTokType,idx){result[currTokType.tokenTypeIdx]=true;forEach(currTokType.categoryMatches,function(currExtendingType){result[currExtendingType]=true;});return result;},[]);return function(){var nextToken=this.LA(1);return choiceToAlt[nextToken.tokenTypeIdx]===true;};}}else{return function(){nextPath:for(var j=0;j<numOfPaths;j++){var currPath=alt[j];var currPathLength=currPath.length;for(var _i19=0;_i19<currPathLength;_i19++){var nextToken=this.LA(_i19+1);if(tokenMatcher(nextToken,currPath[_i19])===false){// mismatch in current path
// try the next pth
continue nextPath;}}// found a full path that matches.
return true;}// none of the paths matched
return false;};}}var RestDefinitionFinderWalker=/*#__PURE__*/function(_RestWalker4){_inherits(RestDefinitionFinderWalker,_RestWalker4);var _super22=_createSuper(RestDefinitionFinderWalker);function RestDefinitionFinderWalker(topProd,targetOccurrence,targetProdType){var _this26;_classCallCheck(this,RestDefinitionFinderWalker);_this26=_super22.call(this);_this26.topProd=topProd;_this26.targetOccurrence=targetOccurrence;_this26.targetProdType=targetProdType;return _this26;}_createClass(RestDefinitionFinderWalker,[{key:"startWalking",value:function startWalking(){this.walk(this.topProd);return this.restDef;}},{key:"checkIsTarget",value:function checkIsTarget(node,expectedProdType,currRest,prevRest){if(node.idx===this.targetOccurrence&&this.targetProdType===expectedProdType){this.restDef=currRest.concat(prevRest);return true;}// performance optimization, do not iterate over the entire Grammar ast after we have found the target
return false;}},{key:"walkOption",value:function walkOption(optionProd,currRest,prevRest){if(!this.checkIsTarget(optionProd,PROD_TYPE.OPTION,currRest,prevRest)){_get(_getPrototypeOf(RestDefinitionFinderWalker.prototype),"walkOption",this).call(this,optionProd,currRest,prevRest);}}},{key:"walkAtLeastOne",value:function walkAtLeastOne(atLeastOneProd,currRest,prevRest){if(!this.checkIsTarget(atLeastOneProd,PROD_TYPE.REPETITION_MANDATORY,currRest,prevRest)){_get(_getPrototypeOf(RestDefinitionFinderWalker.prototype),"walkOption",this).call(this,atLeastOneProd,currRest,prevRest);}}},{key:"walkAtLeastOneSep",value:function walkAtLeastOneSep(atLeastOneSepProd,currRest,prevRest){if(!this.checkIsTarget(atLeastOneSepProd,PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,currRest,prevRest)){_get(_getPrototypeOf(RestDefinitionFinderWalker.prototype),"walkOption",this).call(this,atLeastOneSepProd,currRest,prevRest);}}},{key:"walkMany",value:function walkMany(manyProd,currRest,prevRest){if(!this.checkIsTarget(manyProd,PROD_TYPE.REPETITION,currRest,prevRest)){_get(_getPrototypeOf(RestDefinitionFinderWalker.prototype),"walkOption",this).call(this,manyProd,currRest,prevRest);}}},{key:"walkManySep",value:function walkManySep(manySepProd,currRest,prevRest){if(!this.checkIsTarget(manySepProd,PROD_TYPE.REPETITION_WITH_SEPARATOR,currRest,prevRest)){_get(_getPrototypeOf(RestDefinitionFinderWalker.prototype),"walkOption",this).call(this,manySepProd,currRest,prevRest);}}}]);return RestDefinitionFinderWalker;}(RestWalker);/**
 * Returns the definition of a target production in a top level level rule.
 */var InsideDefinitionFinderVisitor=/*#__PURE__*/function(_GAstVisitor2){_inherits(InsideDefinitionFinderVisitor,_GAstVisitor2);var _super23=_createSuper(InsideDefinitionFinderVisitor);function InsideDefinitionFinderVisitor(targetOccurrence,targetProdType,targetRef){var _this27;_classCallCheck(this,InsideDefinitionFinderVisitor);_this27=_super23.call(this);_this27.targetOccurrence=targetOccurrence;_this27.targetProdType=targetProdType;_this27.targetRef=targetRef;_this27.result=[];return _this27;}_createClass(InsideDefinitionFinderVisitor,[{key:"checkIsTarget",value:function checkIsTarget(node,expectedProdName){if(node.idx===this.targetOccurrence&&this.targetProdType===expectedProdName&&(this.targetRef===undefined||node===this.targetRef)){this.result=node.definition;}}},{key:"visitOption",value:function visitOption(node){this.checkIsTarget(node,PROD_TYPE.OPTION);}},{key:"visitRepetition",value:function visitRepetition(node){this.checkIsTarget(node,PROD_TYPE.REPETITION);}},{key:"visitRepetitionMandatory",value:function visitRepetitionMandatory(node){this.checkIsTarget(node,PROD_TYPE.REPETITION_MANDATORY);}},{key:"visitRepetitionMandatoryWithSeparator",value:function visitRepetitionMandatoryWithSeparator(node){this.checkIsTarget(node,PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR);}},{key:"visitRepetitionWithSeparator",value:function visitRepetitionWithSeparator(node){this.checkIsTarget(node,PROD_TYPE.REPETITION_WITH_SEPARATOR);}},{key:"visitAlternation",value:function visitAlternation(node){this.checkIsTarget(node,PROD_TYPE.ALTERNATION);}}]);return InsideDefinitionFinderVisitor;}(GAstVisitor);function initializeArrayOfArrays(size){var result=new Array(size);for(var _i20=0;_i20<size;_i20++){result[_i20]=[];}return result;}/**
 * A sort of hash function between a Path in the grammar and a string.
 * Note that this returns multiple "hashes" to support the scenario of token categories.
 * -  A single path with categories may match multiple **actual** paths.
 */function pathToHashKeys(path){var keys=[""];for(var _i21=0;_i21<path.length;_i21++){var tokType=path[_i21];var longerKeys=[];for(var j=0;j<keys.length;j++){var currShorterKey=keys[j];longerKeys.push(currShorterKey+"_"+tokType.tokenTypeIdx);for(var t=0;t<tokType.categoryMatches.length;t++){var categoriesKeySuffix="_"+tokType.categoryMatches[t];longerKeys.push(currShorterKey+categoriesKeySuffix);}}keys=longerKeys;}return keys;}/**
 * Imperative style due to being called from a hot spot
 */function isUniquePrefixHash(altKnownPathsKeys,searchPathKeys,idx){for(var currAltIdx=0;currAltIdx<altKnownPathsKeys.length;currAltIdx++){// We only want to test vs the other alternatives
if(currAltIdx===idx){continue;}var otherAltKnownPathsKeys=altKnownPathsKeys[currAltIdx];for(var searchIdx=0;searchIdx<searchPathKeys.length;searchIdx++){var searchKey=searchPathKeys[searchIdx];if(otherAltKnownPathsKeys[searchKey]===true){return false;}}}// None of the SearchPathKeys were found in any of the other alternatives
return true;}function lookAheadSequenceFromAlternatives(altsDefs,k){var partialAlts=map(altsDefs,function(currAlt){return possiblePathsFrom([currAlt],1);});var finalResult=initializeArrayOfArrays(partialAlts.length);var altsHashes=map(partialAlts,function(currAltPaths){var dict={};forEach(currAltPaths,function(item){var keys=pathToHashKeys(item.partialPath);forEach(keys,function(currKey){dict[currKey]=true;});});return dict;});var newData=partialAlts;// maxLookahead loop
for(var pathLength=1;pathLength<=k;pathLength++){var currDataset=newData;newData=initializeArrayOfArrays(currDataset.length);// alternatives loop
var _loop8=function _loop8(altIdx){var currAltPathsAndSuffixes=currDataset[altIdx];// paths in current alternative loop
for(var currPathIdx=0;currPathIdx<currAltPathsAndSuffixes.length;currPathIdx++){var currPathPrefix=currAltPathsAndSuffixes[currPathIdx].partialPath;var suffixDef=currAltPathsAndSuffixes[currPathIdx].suffixDef;var prefixKeys=pathToHashKeys(currPathPrefix);var isUnique=isUniquePrefixHash(altsHashes,prefixKeys,altIdx);// End of the line for this path.
if(isUnique||isEmpty(suffixDef)||currPathPrefix.length===k){var currAltResult=finalResult[altIdx];// TODO: Can we implement a containsPath using Maps/Dictionaries?
if(containsPath(currAltResult,currPathPrefix)===false){currAltResult.push(currPathPrefix);// Update all new  keys for the current path.
for(var j=0;j<prefixKeys.length;j++){var currKey=prefixKeys[j];altsHashes[altIdx][currKey]=true;}}}// Expand longer paths
else{var newPartialPathsAndSuffixes=possiblePathsFrom(suffixDef,pathLength+1,currPathPrefix);newData[altIdx]=newData[altIdx].concat(newPartialPathsAndSuffixes);// Update keys for new known paths
forEach(newPartialPathsAndSuffixes,function(item){var prefixKeys=pathToHashKeys(item.partialPath);forEach(prefixKeys,function(key){altsHashes[altIdx][key]=true;});});}}};for(var altIdx=0;altIdx<currDataset.length;altIdx++){_loop8(altIdx);}}return finalResult;}function getLookaheadPathsForOr(occurrence,ruleGrammar,k,orProd){var visitor=new InsideDefinitionFinderVisitor(occurrence,PROD_TYPE.ALTERNATION,orProd);ruleGrammar.accept(visitor);return lookAheadSequenceFromAlternatives(visitor.result,k);}function getLookaheadPathsForOptionalProd(occurrence,ruleGrammar,prodType,k){var insideDefVisitor=new InsideDefinitionFinderVisitor(occurrence,prodType);ruleGrammar.accept(insideDefVisitor);var insideDef=insideDefVisitor.result;var afterDefWalker=new RestDefinitionFinderWalker(ruleGrammar,occurrence,prodType);var afterDef=afterDefWalker.startWalking();var insideFlat=new Alternative({definition:insideDef});var afterFlat=new Alternative({definition:afterDef});return lookAheadSequenceFromAlternatives([insideFlat,afterFlat],k);}function containsPath(alternative,searchPath){compareOtherPath:for(var _i22=0;_i22<alternative.length;_i22++){var otherPath=alternative[_i22];if(otherPath.length!==searchPath.length){continue;}for(var j=0;j<otherPath.length;j++){var searchTok=searchPath[j];var otherTok=otherPath[j];var matchingTokens=searchTok===otherTok||otherTok.categoryMatchesMap[searchTok.tokenTypeIdx]!==undefined;if(matchingTokens===false){continue compareOtherPath;}}return true;}return false;}function isStrictPrefixOfPath(prefix,other){return prefix.length<other.length&&every(prefix,function(tokType,idx){var otherTokType=other[idx];return tokType===otherTokType||otherTokType.categoryMatchesMap[tokType.tokenTypeIdx];});}function areTokenCategoriesNotUsed(lookAheadPaths){return every(lookAheadPaths,function(singleAltPaths){return every(singleAltPaths,function(singlePath){return every(singlePath,function(token){return isEmpty(token.categoryMatches);});});});}function validateLookahead(options){var lookaheadValidationErrorMessages=options.lookaheadStrategy.validate({rules:options.rules,tokenTypes:options.tokenTypes,grammarName:options.grammarName});return map(lookaheadValidationErrorMessages,function(errorMessage){return Object.assign({type:ParserDefinitionErrorType.CUSTOM_LOOKAHEAD_VALIDATION},errorMessage);});}function validateGrammar$1(topLevels,tokenTypes,errMsgProvider,grammarName){var duplicateErrors=flatMap(topLevels,function(currTopLevel){return validateDuplicateProductions(currTopLevel,errMsgProvider);});var termsNamespaceConflictErrors=checkTerminalAndNoneTerminalsNameSpace(topLevels,tokenTypes,errMsgProvider);var tooManyAltsErrors=flatMap(topLevels,function(curRule){return validateTooManyAlts(curRule,errMsgProvider);});var duplicateRulesError=flatMap(topLevels,function(curRule){return validateRuleDoesNotAlreadyExist(curRule,topLevels,grammarName,errMsgProvider);});return duplicateErrors.concat(termsNamespaceConflictErrors,tooManyAltsErrors,duplicateRulesError);}function validateDuplicateProductions(topLevelRule,errMsgProvider){var collectorVisitor=new OccurrenceValidationCollector();topLevelRule.accept(collectorVisitor);var allRuleProductions=collectorVisitor.allProductions;var productionGroups=groupBy$1(allRuleProductions,identifyProductionForDuplicates);var duplicates=pickBy(productionGroups,function(currGroup){return currGroup.length>1;});var errors=map(values(duplicates),function(currDuplicates){var firstProd=head(currDuplicates);var msg=errMsgProvider.buildDuplicateFoundError(topLevelRule,currDuplicates);var dslName=getProductionDslName(firstProd);var defError={message:msg,type:ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,ruleName:topLevelRule.name,dslName:dslName,occurrence:firstProd.idx};var param=getExtraProductionArgument(firstProd);if(param){defError.parameter=param;}return defError;});return errors;}function identifyProductionForDuplicates(prod){return"".concat(getProductionDslName(prod),"_#_").concat(prod.idx,"_#_").concat(getExtraProductionArgument(prod));}function getExtraProductionArgument(prod){if(prod instanceof Terminal){return prod.terminalType.name;}else if(prod instanceof NonTerminal){return prod.nonTerminalName;}else{return"";}}var OccurrenceValidationCollector=/*#__PURE__*/function(_GAstVisitor3){_inherits(OccurrenceValidationCollector,_GAstVisitor3);var _super24=_createSuper(OccurrenceValidationCollector);function OccurrenceValidationCollector(){var _this28;_classCallCheck(this,OccurrenceValidationCollector);_this28=_super24.apply(this,arguments);_this28.allProductions=[];return _this28;}_createClass(OccurrenceValidationCollector,[{key:"visitNonTerminal",value:function visitNonTerminal(subrule){this.allProductions.push(subrule);}},{key:"visitOption",value:function visitOption(option){this.allProductions.push(option);}},{key:"visitRepetitionWithSeparator",value:function visitRepetitionWithSeparator(manySep){this.allProductions.push(manySep);}},{key:"visitRepetitionMandatory",value:function visitRepetitionMandatory(atLeastOne){this.allProductions.push(atLeastOne);}},{key:"visitRepetitionMandatoryWithSeparator",value:function visitRepetitionMandatoryWithSeparator(atLeastOneSep){this.allProductions.push(atLeastOneSep);}},{key:"visitRepetition",value:function visitRepetition(many){this.allProductions.push(many);}},{key:"visitAlternation",value:function visitAlternation(or){this.allProductions.push(or);}},{key:"visitTerminal",value:function visitTerminal(terminal){this.allProductions.push(terminal);}}]);return OccurrenceValidationCollector;}(GAstVisitor);function validateRuleDoesNotAlreadyExist(rule,allRules,className,errMsgProvider){var errors=[];var occurrences=reduce(allRules,function(result,curRule){if(curRule.name===rule.name){return result+1;}return result;},0);if(occurrences>1){var errMsg=errMsgProvider.buildDuplicateRuleNameError({topLevelRule:rule,grammarName:className});errors.push({message:errMsg,type:ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:rule.name});}return errors;}// TODO: is there anyway to get only the rule names of rules inherited from the super grammars?
// This is not part of the IGrammarErrorProvider because the validation cannot be performed on
// The grammar structure, only at runtime.
function validateRuleIsOverridden(ruleName,definedRulesNames,className){var errors=[];var errMsg;if(!includes(definedRulesNames,ruleName)){errMsg="Invalid rule override, rule: ->".concat(ruleName,"<- cannot be overridden in the grammar: ->").concat(className,"<-")+"as it is not defined in any of the super grammars ";errors.push({message:errMsg,type:ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,ruleName:ruleName});}return errors;}function _validateNoLeftRecursion(topRule,currRule,errMsgProvider){var path=arguments.length>3&&arguments[3]!==undefined?arguments[3]:[];var errors=[];var nextNonTerminals=getFirstNoneTerminal(currRule.definition);if(isEmpty(nextNonTerminals)){return[];}else{var ruleName=topRule.name;var foundLeftRecursion=includes(nextNonTerminals,topRule);if(foundLeftRecursion){errors.push({message:errMsgProvider.buildLeftRecursionError({topLevelRule:topRule,leftRecursionPath:path}),type:ParserDefinitionErrorType.LEFT_RECURSION,ruleName:ruleName});}// we are only looking for cyclic paths leading back to the specific topRule
// other cyclic paths are ignored, we still need this difference to avoid infinite loops...
var validNextSteps=difference$1(nextNonTerminals,path.concat([topRule]));var errorsFromNextSteps=flatMap(validNextSteps,function(currRefRule){var newPath=clone(path);newPath.push(currRefRule);return _validateNoLeftRecursion(topRule,currRefRule,errMsgProvider,newPath);});return errors.concat(errorsFromNextSteps);}}function getFirstNoneTerminal(definition){var result=[];if(isEmpty(definition)){return result;}var firstProd=head(definition);/* istanbul ignore else */if(firstProd instanceof NonTerminal){result.push(firstProd.referencedRule);}else if(firstProd instanceof Alternative||firstProd instanceof Option||firstProd instanceof RepetitionMandatory||firstProd instanceof RepetitionMandatoryWithSeparator||firstProd instanceof RepetitionWithSeparator||firstProd instanceof Repetition){result=result.concat(getFirstNoneTerminal(firstProd.definition));}else if(firstProd instanceof Alternation){// each sub definition in alternation is a FLAT
result=flatten(map(firstProd.definition,function(currSubDef){return getFirstNoneTerminal(currSubDef.definition);}));}else if(firstProd instanceof Terminal);else{throw Error("non exhaustive match");}var isFirstOptional=isOptionalProd(firstProd);var hasMore=definition.length>1;if(isFirstOptional&&hasMore){var rest=drop(definition);return result.concat(getFirstNoneTerminal(rest));}else{return result;}}var OrCollector=/*#__PURE__*/function(_GAstVisitor4){_inherits(OrCollector,_GAstVisitor4);var _super25=_createSuper(OrCollector);function OrCollector(){var _this29;_classCallCheck(this,OrCollector);_this29=_super25.apply(this,arguments);_this29.alternations=[];return _this29;}_createClass(OrCollector,[{key:"visitAlternation",value:function visitAlternation(node){this.alternations.push(node);}}]);return OrCollector;}(GAstVisitor);function validateEmptyOrAlternative(topLevelRule,errMsgProvider){var orCollector=new OrCollector();topLevelRule.accept(orCollector);var ors=orCollector.alternations;var errors=flatMap(ors,function(currOr){var exceptLast=dropRight(currOr.definition);return flatMap(exceptLast,function(currAlternative,currAltIdx){var possibleFirstInAlt=nextPossibleTokensAfter([currAlternative],[],tokenStructuredMatcher,1);if(isEmpty(possibleFirstInAlt)){return[{message:errMsgProvider.buildEmptyAlternationError({topLevelRule:topLevelRule,alternation:currOr,emptyChoiceIdx:currAltIdx}),type:ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,ruleName:topLevelRule.name,occurrence:currOr.idx,alternative:currAltIdx+1}];}else{return[];}});});return errors;}function _validateAmbiguousAlternationAlternatives(topLevelRule,globalMaxLookahead,errMsgProvider){var orCollector=new OrCollector();topLevelRule.accept(orCollector);var ors=orCollector.alternations;// New Handling of ignoring ambiguities
// - https://github.com/chevrotain/chevrotain/issues/869
ors=reject(ors,function(currOr){return currOr.ignoreAmbiguities===true;});var errors=flatMap(ors,function(currOr){var currOccurrence=currOr.idx;var actualMaxLookahead=currOr.maxLookahead||globalMaxLookahead;var alternatives=getLookaheadPathsForOr(currOccurrence,topLevelRule,actualMaxLookahead,currOr);var altsAmbiguityErrors=checkAlternativesAmbiguities(alternatives,currOr,topLevelRule,errMsgProvider);var altsPrefixAmbiguityErrors=checkPrefixAlternativesAmbiguities(alternatives,currOr,topLevelRule,errMsgProvider);return altsAmbiguityErrors.concat(altsPrefixAmbiguityErrors);});return errors;}var RepetitionCollector=/*#__PURE__*/function(_GAstVisitor5){_inherits(RepetitionCollector,_GAstVisitor5);var _super26=_createSuper(RepetitionCollector);function RepetitionCollector(){var _this30;_classCallCheck(this,RepetitionCollector);_this30=_super26.apply(this,arguments);_this30.allProductions=[];return _this30;}_createClass(RepetitionCollector,[{key:"visitRepetitionWithSeparator",value:function visitRepetitionWithSeparator(manySep){this.allProductions.push(manySep);}},{key:"visitRepetitionMandatory",value:function visitRepetitionMandatory(atLeastOne){this.allProductions.push(atLeastOne);}},{key:"visitRepetitionMandatoryWithSeparator",value:function visitRepetitionMandatoryWithSeparator(atLeastOneSep){this.allProductions.push(atLeastOneSep);}},{key:"visitRepetition",value:function visitRepetition(many){this.allProductions.push(many);}}]);return RepetitionCollector;}(GAstVisitor);function validateTooManyAlts(topLevelRule,errMsgProvider){var orCollector=new OrCollector();topLevelRule.accept(orCollector);var ors=orCollector.alternations;var errors=flatMap(ors,function(currOr){if(currOr.definition.length>255){return[{message:errMsgProvider.buildTooManyAlternativesError({topLevelRule:topLevelRule,alternation:currOr}),type:ParserDefinitionErrorType.TOO_MANY_ALTS,ruleName:topLevelRule.name,occurrence:currOr.idx}];}else{return[];}});return errors;}function _validateSomeNonEmptyLookaheadPath(topLevelRules,maxLookahead,errMsgProvider){var errors=[];forEach(topLevelRules,function(currTopRule){var collectorVisitor=new RepetitionCollector();currTopRule.accept(collectorVisitor);var allRuleProductions=collectorVisitor.allProductions;forEach(allRuleProductions,function(currProd){var prodType=getProdType(currProd);var actualMaxLookahead=currProd.maxLookahead||maxLookahead;var currOccurrence=currProd.idx;var paths=getLookaheadPathsForOptionalProd(currOccurrence,currTopRule,prodType,actualMaxLookahead);var pathsInsideProduction=paths[0];if(isEmpty(flatten(pathsInsideProduction))){var errMsg=errMsgProvider.buildEmptyRepetitionError({topLevelRule:currTopRule,repetition:currProd});errors.push({message:errMsg,type:ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,ruleName:currTopRule.name});}});});return errors;}function checkAlternativesAmbiguities(alternatives,alternation,rule,errMsgProvider){var foundAmbiguousPaths=[];var identicalAmbiguities=reduce(alternatives,function(result,currAlt,currAltIdx){// ignore (skip) ambiguities with this alternative
if(alternation.definition[currAltIdx].ignoreAmbiguities===true){return result;}forEach(currAlt,function(currPath){var altsCurrPathAppearsIn=[currAltIdx];forEach(alternatives,function(currOtherAlt,currOtherAltIdx){if(currAltIdx!==currOtherAltIdx&&containsPath(currOtherAlt,currPath)&&// ignore (skip) ambiguities with this "other" alternative
alternation.definition[currOtherAltIdx].ignoreAmbiguities!==true){altsCurrPathAppearsIn.push(currOtherAltIdx);}});if(altsCurrPathAppearsIn.length>1&&!containsPath(foundAmbiguousPaths,currPath)){foundAmbiguousPaths.push(currPath);result.push({alts:altsCurrPathAppearsIn,path:currPath});}});return result;},[]);var currErrors=map(identicalAmbiguities,function(currAmbDescriptor){var ambgIndices=map(currAmbDescriptor.alts,function(currAltIdx){return currAltIdx+1;});var currMessage=errMsgProvider.buildAlternationAmbiguityError({topLevelRule:rule,alternation:alternation,ambiguityIndices:ambgIndices,prefixPath:currAmbDescriptor.path});return{message:currMessage,type:ParserDefinitionErrorType.AMBIGUOUS_ALTS,ruleName:rule.name,occurrence:alternation.idx,alternatives:currAmbDescriptor.alts};});return currErrors;}function checkPrefixAlternativesAmbiguities(alternatives,alternation,rule,errMsgProvider){// flatten
var pathsAndIndices=reduce(alternatives,function(result,currAlt,idx){var currPathsAndIdx=map(currAlt,function(currPath){return{idx:idx,path:currPath};});return result.concat(currPathsAndIdx);},[]);var errors=compact(flatMap(pathsAndIndices,function(currPathAndIdx){var alternativeGast=alternation.definition[currPathAndIdx.idx];// ignore (skip) ambiguities with this alternative
if(alternativeGast.ignoreAmbiguities===true){return[];}var targetIdx=currPathAndIdx.idx;var targetPath=currPathAndIdx.path;var prefixAmbiguitiesPathsAndIndices=filter(pathsAndIndices,function(searchPathAndIdx){// prefix ambiguity can only be created from lower idx (higher priority) path
return(// ignore (skip) ambiguities with this "other" alternative
alternation.definition[searchPathAndIdx.idx].ignoreAmbiguities!==true&&searchPathAndIdx.idx<targetIdx&&// checking for strict prefix because identical lookaheads
// will be be detected using a different validation.
isStrictPrefixOfPath(searchPathAndIdx.path,targetPath));});var currPathPrefixErrors=map(prefixAmbiguitiesPathsAndIndices,function(currAmbPathAndIdx){var ambgIndices=[currAmbPathAndIdx.idx+1,targetIdx+1];var occurrence=alternation.idx===0?"":alternation.idx;var message=errMsgProvider.buildAlternationPrefixAmbiguityError({topLevelRule:rule,alternation:alternation,ambiguityIndices:ambgIndices,prefixPath:currAmbPathAndIdx.path});return{message:message,type:ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,ruleName:rule.name,occurrence:occurrence,alternatives:ambgIndices};});return currPathPrefixErrors;}));return errors;}function checkTerminalAndNoneTerminalsNameSpace(topLevels,tokenTypes,errMsgProvider){var errors=[];var tokenNames=map(tokenTypes,function(currToken){return currToken.name;});forEach(topLevels,function(currRule){var currRuleName=currRule.name;if(includes(tokenNames,currRuleName)){var errMsg=errMsgProvider.buildNamespaceConflictError(currRule);errors.push({message:errMsg,type:ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:currRuleName});}});return errors;}function resolveGrammar(options){var actualOptions=defaults$1(options,{errMsgProvider:defaultGrammarResolverErrorProvider});var topRulesTable={};forEach(options.rules,function(rule){topRulesTable[rule.name]=rule;});return resolveGrammar$1(topRulesTable,actualOptions.errMsgProvider);}function validateGrammar(options){options=defaults$1(options,{errMsgProvider:defaultGrammarValidatorErrorProvider});return validateGrammar$1(options.rules,options.tokenTypes,options.errMsgProvider,options.grammarName);}var MISMATCHED_TOKEN_EXCEPTION="MismatchedTokenException";var NO_VIABLE_ALT_EXCEPTION="NoViableAltException";var EARLY_EXIT_EXCEPTION="EarlyExitException";var NOT_ALL_INPUT_PARSED_EXCEPTION="NotAllInputParsedException";var RECOGNITION_EXCEPTION_NAMES=[MISMATCHED_TOKEN_EXCEPTION,NO_VIABLE_ALT_EXCEPTION,EARLY_EXIT_EXCEPTION,NOT_ALL_INPUT_PARSED_EXCEPTION];Object.freeze(RECOGNITION_EXCEPTION_NAMES);// hacks to bypass no support for custom Errors in javascript/typescript
function isRecognitionException(error){// can't do instanceof on hacked custom js exceptions
return includes(RECOGNITION_EXCEPTION_NAMES,error.name);}var RecognitionException=/*#__PURE__*/function(_Error){_inherits(RecognitionException,_Error);var _super27=_createSuper(RecognitionException);function RecognitionException(message,token){var _this31;_classCallCheck(this,RecognitionException);_this31=_super27.call(this,message);_this31.token=token;_this31.resyncedTokens=[];// fix prototype chain when typescript target is ES5
Object.setPrototypeOf(_assertThisInitialized(_this31),(this instanceof RecognitionException?this.constructor:void 0).prototype);/* istanbul ignore next - V8 workaround to remove constructor from stacktrace when typescript target is ES5 */if(Error.captureStackTrace){Error.captureStackTrace(_assertThisInitialized(_this31),_this31.constructor);}return _this31;}return _createClass(RecognitionException);}(/*#__PURE__*/_wrapNativeSuper(Error));var MismatchedTokenException=/*#__PURE__*/function(_RecognitionException){_inherits(MismatchedTokenException,_RecognitionException);var _super28=_createSuper(MismatchedTokenException);function MismatchedTokenException(message,token,previousToken){var _this32;_classCallCheck(this,MismatchedTokenException);_this32=_super28.call(this,message,token);_this32.previousToken=previousToken;_this32.name=MISMATCHED_TOKEN_EXCEPTION;return _this32;}return _createClass(MismatchedTokenException);}(RecognitionException);var NoViableAltException=/*#__PURE__*/function(_RecognitionException2){_inherits(NoViableAltException,_RecognitionException2);var _super29=_createSuper(NoViableAltException);function NoViableAltException(message,token,previousToken){var _this33;_classCallCheck(this,NoViableAltException);_this33=_super29.call(this,message,token);_this33.previousToken=previousToken;_this33.name=NO_VIABLE_ALT_EXCEPTION;return _this33;}return _createClass(NoViableAltException);}(RecognitionException);var NotAllInputParsedException=/*#__PURE__*/function(_RecognitionException3){_inherits(NotAllInputParsedException,_RecognitionException3);var _super30=_createSuper(NotAllInputParsedException);function NotAllInputParsedException(message,token){var _this34;_classCallCheck(this,NotAllInputParsedException);_this34=_super30.call(this,message,token);_this34.name=NOT_ALL_INPUT_PARSED_EXCEPTION;return _this34;}return _createClass(NotAllInputParsedException);}(RecognitionException);var EarlyExitException=/*#__PURE__*/function(_RecognitionException4){_inherits(EarlyExitException,_RecognitionException4);var _super31=_createSuper(EarlyExitException);function EarlyExitException(message,token,previousToken){var _this35;_classCallCheck(this,EarlyExitException);_this35=_super31.call(this,message,token);_this35.previousToken=previousToken;_this35.name=EARLY_EXIT_EXCEPTION;return _this35;}return _createClass(EarlyExitException);}(RecognitionException);var EOF_FOLLOW_KEY={};var IN_RULE_RECOVERY_EXCEPTION="InRuleRecoveryException";var InRuleRecoveryException=/*#__PURE__*/function(_Error2){_inherits(InRuleRecoveryException,_Error2);var _super32=_createSuper(InRuleRecoveryException);function InRuleRecoveryException(message){var _this36;_classCallCheck(this,InRuleRecoveryException);_this36=_super32.call(this,message);_this36.name=IN_RULE_RECOVERY_EXCEPTION;return _this36;}return _createClass(InRuleRecoveryException);}(/*#__PURE__*/_wrapNativeSuper(Error));/**
 * This trait is responsible for the error recovery and fault tolerant logic
 */var Recoverable=/*#__PURE__*/function(){function Recoverable(){_classCallCheck(this,Recoverable);}_createClass(Recoverable,[{key:"initRecoverable",value:function initRecoverable(config){this.firstAfterRepMap={};this.resyncFollows={};this.recoveryEnabled=has(config,"recoveryEnabled")?config.recoveryEnabled// assumes end user provides the correct config value/type
:DEFAULT_PARSER_CONFIG.recoveryEnabled;// performance optimization, NOOP will be inlined which
// effectively means that this optional feature does not exist
// when not used.
if(this.recoveryEnabled){this.attemptInRepetitionRecovery=attemptInRepetitionRecovery;}}},{key:"getTokenToInsert",value:function getTokenToInsert(tokType){var tokToInsert=createTokenInstance(tokType,"",NaN,NaN,NaN,NaN,NaN,NaN);tokToInsert.isInsertedInRecovery=true;return tokToInsert;}},{key:"canTokenTypeBeInsertedInRecovery",value:function canTokenTypeBeInsertedInRecovery(tokType){return true;}},{key:"canTokenTypeBeDeletedInRecovery",value:function canTokenTypeBeDeletedInRecovery(tokType){return true;}},{key:"tryInRepetitionRecovery",value:function tryInRepetitionRecovery(grammarRule,grammarRuleArgs,lookAheadFunc,expectedTokType){var _this37=this;// TODO: can the resyncTokenType be cached?
var reSyncTokType=this.findReSyncTokenType();var savedLexerState=this.exportLexerState();var resyncedTokens=[];var passedResyncPoint=false;var nextTokenWithoutResync=this.LA(1);var currToken=this.LA(1);var generateErrorMessage=function generateErrorMessage(){var previousToken=_this37.LA(0);// we are preemptively re-syncing before an error has been detected, therefor we must reproduce
// the error that would have been thrown
var msg=_this37.errorMessageProvider.buildMismatchTokenMessage({expected:expectedTokType,actual:nextTokenWithoutResync,previous:previousToken,ruleName:_this37.getCurrRuleFullName()});var error=new MismatchedTokenException(msg,nextTokenWithoutResync,_this37.LA(0));// the first token here will be the original cause of the error, this is not part of the resyncedTokens property.
error.resyncedTokens=dropRight(resyncedTokens);_this37.SAVE_ERROR(error);};while(!passedResyncPoint){// re-synced to a point where we can safely exit the repetition/
if(this.tokenMatcher(currToken,expectedTokType)){generateErrorMessage();return;// must return here to avoid reverting the inputIdx
}else if(lookAheadFunc.call(this)){// we skipped enough tokens so we can resync right back into another iteration of the repetition grammar rule
generateErrorMessage();// recursive invocation in other to support multiple re-syncs in the same top level repetition grammar rule
grammarRule.apply(this,grammarRuleArgs);return;// must return here to avoid reverting the inputIdx
}else if(this.tokenMatcher(currToken,reSyncTokType)){passedResyncPoint=true;}else{currToken=this.SKIP_TOKEN();this.addToResyncTokens(currToken,resyncedTokens);}}// we were unable to find a CLOSER point to resync inside the Repetition, reset the state.
// The parsing exception we were trying to prevent will happen in the NEXT parsing step. it may be handled by
// "between rules" resync recovery later in the flow.
this.importLexerState(savedLexerState);}},{key:"shouldInRepetitionRecoveryBeTried",value:function shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch,nextTokIdx,notStuck){// Edge case of arriving from a MANY repetition which is stuck
// Attempting recovery in this case could cause an infinite loop
if(notStuck===false){return false;}// no need to recover, next token is what we expect...
if(this.tokenMatcher(this.LA(1),expectTokAfterLastMatch)){return false;}// error recovery is disabled during backtracking as it can make the parser ignore a valid grammar path
// and prefer some backtracking path that includes recovered errors.
if(this.isBackTracking()){return false;}// if we can perform inRule recovery (single token insertion or deletion) we always prefer that recovery algorithm
// because if it works, it makes the least amount of changes to the input stream (greedy algorithm)
//noinspection RedundantIfStatementJS
if(this.canPerformInRuleRecovery(expectTokAfterLastMatch,this.getFollowsForInRuleRecovery(expectTokAfterLastMatch,nextTokIdx))){return false;}return true;}// Error Recovery functionality
},{key:"getFollowsForInRuleRecovery",value:function getFollowsForInRuleRecovery(tokType,tokIdxInRule){var grammarPath=this.getCurrentGrammarPath(tokType,tokIdxInRule);var follows=this.getNextPossibleTokenTypes(grammarPath);return follows;}},{key:"tryInRuleRecovery",value:function tryInRuleRecovery(expectedTokType,follows){if(this.canRecoverWithSingleTokenInsertion(expectedTokType,follows)){var tokToInsert=this.getTokenToInsert(expectedTokType);return tokToInsert;}if(this.canRecoverWithSingleTokenDeletion(expectedTokType)){var nextTok=this.SKIP_TOKEN();this.consumeToken();return nextTok;}throw new InRuleRecoveryException("sad sad panda");}},{key:"canPerformInRuleRecovery",value:function canPerformInRuleRecovery(expectedToken,follows){return this.canRecoverWithSingleTokenInsertion(expectedToken,follows)||this.canRecoverWithSingleTokenDeletion(expectedToken);}},{key:"canRecoverWithSingleTokenInsertion",value:function canRecoverWithSingleTokenInsertion(expectedTokType,follows){var _this38=this;if(!this.canTokenTypeBeInsertedInRecovery(expectedTokType)){return false;}// must know the possible following tokens to perform single token insertion
if(isEmpty(follows)){return false;}var mismatchedTok=this.LA(1);var isMisMatchedTokInFollows=find$1(follows,function(possibleFollowsTokType){return _this38.tokenMatcher(mismatchedTok,possibleFollowsTokType);})!==undefined;return isMisMatchedTokInFollows;}},{key:"canRecoverWithSingleTokenDeletion",value:function canRecoverWithSingleTokenDeletion(expectedTokType){if(!this.canTokenTypeBeDeletedInRecovery(expectedTokType)){return false;}var isNextTokenWhatIsExpected=this.tokenMatcher(this.LA(2),expectedTokType);return isNextTokenWhatIsExpected;}},{key:"isInCurrentRuleReSyncSet",value:function isInCurrentRuleReSyncSet(tokenTypeIdx){var followKey=this.getCurrFollowKey();var currentRuleReSyncSet=this.getFollowSetFromFollowKey(followKey);return includes(currentRuleReSyncSet,tokenTypeIdx);}},{key:"findReSyncTokenType",value:function findReSyncTokenType(){var allPossibleReSyncTokTypes=this.flattenFollowSet();// this loop will always terminate as EOF is always in the follow stack and also always (virtually) in the input
var nextToken=this.LA(1);var k=2;while(true){var foundMatch=find$1(allPossibleReSyncTokTypes,function(resyncTokType){var canMatch=tokenMatcher(nextToken,resyncTokType);return canMatch;});if(foundMatch!==undefined){return foundMatch;}nextToken=this.LA(k);k++;}}},{key:"getCurrFollowKey",value:function getCurrFollowKey(){// the length is at least one as we always add the ruleName to the stack before invoking the rule.
if(this.RULE_STACK.length===1){return EOF_FOLLOW_KEY;}var currRuleShortName=this.getLastExplicitRuleShortName();var currRuleIdx=this.getLastExplicitRuleOccurrenceIndex();var prevRuleShortName=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(currRuleShortName),idxInCallingRule:currRuleIdx,inRule:this.shortRuleNameToFullName(prevRuleShortName)};}},{key:"buildFullFollowKeyStack",value:function buildFullFollowKeyStack(){var _this39=this;var explicitRuleStack=this.RULE_STACK;var explicitOccurrenceStack=this.RULE_OCCURRENCE_STACK;return map(explicitRuleStack,function(ruleName,idx){if(idx===0){return EOF_FOLLOW_KEY;}return{ruleName:_this39.shortRuleNameToFullName(ruleName),idxInCallingRule:explicitOccurrenceStack[idx],inRule:_this39.shortRuleNameToFullName(explicitRuleStack[idx-1])};});}},{key:"flattenFollowSet",value:function flattenFollowSet(){var _this40=this;var followStack=map(this.buildFullFollowKeyStack(),function(currKey){return _this40.getFollowSetFromFollowKey(currKey);});return flatten(followStack);}},{key:"getFollowSetFromFollowKey",value:function getFollowSetFromFollowKey(followKey){if(followKey===EOF_FOLLOW_KEY){return[EOF];}var followName=followKey.ruleName+followKey.idxInCallingRule+IN+followKey.inRule;return this.resyncFollows[followName];}// It does not make any sense to include a virtual EOF token in the list of resynced tokens
// as EOF does not really exist and thus does not contain any useful information (line/column numbers)
},{key:"addToResyncTokens",value:function addToResyncTokens(token,resyncTokens){if(!this.tokenMatcher(token,EOF)){resyncTokens.push(token);}return resyncTokens;}},{key:"reSyncTo",value:function reSyncTo(tokType){var resyncedTokens=[];var nextTok=this.LA(1);while(this.tokenMatcher(nextTok,tokType)===false){nextTok=this.SKIP_TOKEN();this.addToResyncTokens(nextTok,resyncedTokens);}// the last token is not part of the error.
return dropRight(resyncedTokens);}},{key:"attemptInRepetitionRecovery",value:function attemptInRepetitionRecovery(prodFunc,args,lookaheadFunc,dslMethodIdx,prodOccurrence,nextToksWalker,notStuck){// by default this is a NO-OP
// The actual implementation is with the function(not method) below
}},{key:"getCurrentGrammarPath",value:function getCurrentGrammarPath(tokType,tokIdxInRule){var pathRuleStack=this.getHumanReadableRuleStack();var pathOccurrenceStack=clone(this.RULE_OCCURRENCE_STACK);var grammarPath={ruleStack:pathRuleStack,occurrenceStack:pathOccurrenceStack,lastTok:tokType,lastTokOccurrence:tokIdxInRule};return grammarPath;}},{key:"getHumanReadableRuleStack",value:function getHumanReadableRuleStack(){var _this41=this;return map(this.RULE_STACK,function(currShortName){return _this41.shortRuleNameToFullName(currShortName);});}}]);return Recoverable;}();function attemptInRepetitionRecovery(prodFunc,args,lookaheadFunc,dslMethodIdx,prodOccurrence,nextToksWalker,notStuck){var key=this.getKeyForAutomaticLookahead(dslMethodIdx,prodOccurrence);var firstAfterRepInfo=this.firstAfterRepMap[key];if(firstAfterRepInfo===undefined){var currRuleName=this.getCurrRuleFullName();var ruleGrammar=this.getGAstProductions()[currRuleName];var walker=new nextToksWalker(ruleGrammar,prodOccurrence);firstAfterRepInfo=walker.startWalking();this.firstAfterRepMap[key]=firstAfterRepInfo;}var expectTokAfterLastMatch=firstAfterRepInfo.token;var nextTokIdx=firstAfterRepInfo.occurrence;var isEndOfRule=firstAfterRepInfo.isEndOfRule;// special edge case of a TOP most repetition after which the input should END.
// this will force an attempt for inRule recovery in that scenario.
if(this.RULE_STACK.length===1&&isEndOfRule&&expectTokAfterLastMatch===undefined){expectTokAfterLastMatch=EOF;nextTokIdx=1;}// We don't have anything to re-sync to...
// this condition was extracted from `shouldInRepetitionRecoveryBeTried` to act as a type-guard
if(expectTokAfterLastMatch===undefined||nextTokIdx===undefined){return;}if(this.shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch,nextTokIdx,notStuck)){// TODO: performance optimization: instead of passing the original args here, we modify
// the args param (or create a new one) and make sure the lookahead func is explicitly provided
// to avoid searching the cache for it once more.
this.tryInRepetitionRecovery(prodFunc,args,lookaheadFunc,expectTokAfterLastMatch);}}// Lookahead keys are 32Bit integers in the form
// TTTTTTTT-ZZZZZZZZZZZZ-YYYY-XXXXXXXX
// XXXX -> Occurrence Index bitmap.
// YYYY -> DSL Method Type bitmap.
// ZZZZZZZZZZZZZZZ -> Rule short Index bitmap.
// TTTTTTTTT -> alternation alternative index bitmap
var BITS_FOR_METHOD_TYPE=4;var BITS_FOR_OCCURRENCE_IDX=8;// short string used as part of mapping keys.
// being short improves the performance when composing KEYS for maps out of these
// The 5 - 8 bits (16 possible values, are reserved for the DSL method indices)
var OR_IDX=1<<BITS_FOR_OCCURRENCE_IDX;var OPTION_IDX=2<<BITS_FOR_OCCURRENCE_IDX;var MANY_IDX=3<<BITS_FOR_OCCURRENCE_IDX;var AT_LEAST_ONE_IDX=4<<BITS_FOR_OCCURRENCE_IDX;var MANY_SEP_IDX=5<<BITS_FOR_OCCURRENCE_IDX;var AT_LEAST_ONE_SEP_IDX=6<<BITS_FOR_OCCURRENCE_IDX;// this actually returns a number, but it is always used as a string (object prop key)
function _getKeyForAutomaticLookahead(ruleIdx,dslMethodIdx,occurrence){return occurrence|dslMethodIdx|ruleIdx;}var LLkLookaheadStrategy=/*#__PURE__*/function(){function LLkLookaheadStrategy(options){_classCallCheck(this,LLkLookaheadStrategy);var _a;this.maxLookahead=(_a=options===null||options===void 0?void 0:options.maxLookahead)!==null&&_a!==void 0?_a:DEFAULT_PARSER_CONFIG.maxLookahead;}_createClass(LLkLookaheadStrategy,[{key:"validate",value:function validate(options){var leftRecursionErrors=this.validateNoLeftRecursion(options.rules);if(isEmpty(leftRecursionErrors)){var emptyAltErrors=this.validateEmptyOrAlternatives(options.rules);var ambiguousAltsErrors=this.validateAmbiguousAlternationAlternatives(options.rules,this.maxLookahead);var emptyRepetitionErrors=this.validateSomeNonEmptyLookaheadPath(options.rules,this.maxLookahead);var allErrors=[].concat(_toConsumableArray(leftRecursionErrors),_toConsumableArray(emptyAltErrors),_toConsumableArray(ambiguousAltsErrors),_toConsumableArray(emptyRepetitionErrors));return allErrors;}return leftRecursionErrors;}},{key:"validateNoLeftRecursion",value:function validateNoLeftRecursion(rules){return flatMap(rules,function(currTopRule){return _validateNoLeftRecursion(currTopRule,currTopRule,defaultGrammarValidatorErrorProvider);});}},{key:"validateEmptyOrAlternatives",value:function validateEmptyOrAlternatives(rules){return flatMap(rules,function(currTopRule){return validateEmptyOrAlternative(currTopRule,defaultGrammarValidatorErrorProvider);});}},{key:"validateAmbiguousAlternationAlternatives",value:function validateAmbiguousAlternationAlternatives(rules,maxLookahead){return flatMap(rules,function(currTopRule){return _validateAmbiguousAlternationAlternatives(currTopRule,maxLookahead,defaultGrammarValidatorErrorProvider);});}},{key:"validateSomeNonEmptyLookaheadPath",value:function validateSomeNonEmptyLookaheadPath(rules,maxLookahead){return _validateSomeNonEmptyLookaheadPath(rules,maxLookahead,defaultGrammarValidatorErrorProvider);}},{key:"buildLookaheadForAlternation",value:function buildLookaheadForAlternation(options){return buildLookaheadFuncForOr(options.prodOccurrence,options.rule,options.maxLookahead,options.hasPredicates,options.dynamicTokensEnabled,buildAlternativesLookAheadFunc);}},{key:"buildLookaheadForOptional",value:function buildLookaheadForOptional(options){return buildLookaheadFuncForOptionalProd(options.prodOccurrence,options.rule,options.maxLookahead,options.dynamicTokensEnabled,getProdType(options.prodType),buildSingleAlternativeLookaheadFunction);}}]);return LLkLookaheadStrategy;}();/**
 * Trait responsible for the lookahead related utilities and optimizations.
 */var LooksAhead=/*#__PURE__*/function(){function LooksAhead(){_classCallCheck(this,LooksAhead);}_createClass(LooksAhead,[{key:"initLooksAhead",value:function initLooksAhead(config){this.dynamicTokensEnabled=has(config,"dynamicTokensEnabled")?config.dynamicTokensEnabled// assumes end user provides the correct config value/type
:DEFAULT_PARSER_CONFIG.dynamicTokensEnabled;this.maxLookahead=has(config,"maxLookahead")?config.maxLookahead// assumes end user provides the correct config value/type
:DEFAULT_PARSER_CONFIG.maxLookahead;this.lookaheadStrategy=has(config,"lookaheadStrategy")?config.lookaheadStrategy// assumes end user provides the correct config value/type
:new LLkLookaheadStrategy({maxLookahead:this.maxLookahead});this.lookAheadFuncsCache=new Map();}},{key:"preComputeLookaheadFunctions",value:function preComputeLookaheadFunctions(rules){var _this42=this;forEach(rules,function(currRule){_this42.TRACE_INIT("".concat(currRule.name," Rule Lookahead"),function(){var _collectMethods=collectMethods(currRule),alternation=_collectMethods.alternation,repetition=_collectMethods.repetition,option=_collectMethods.option,repetitionMandatory=_collectMethods.repetitionMandatory,repetitionMandatoryWithSeparator=_collectMethods.repetitionMandatoryWithSeparator,repetitionWithSeparator=_collectMethods.repetitionWithSeparator;forEach(alternation,function(currProd){var prodIdx=currProd.idx===0?"":currProd.idx;_this42.TRACE_INIT("".concat(getProductionDslName(currProd)).concat(prodIdx),function(){var laFunc=_this42.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:currProd.idx,rule:currRule,maxLookahead:currProd.maxLookahead||_this42.maxLookahead,hasPredicates:currProd.hasPredicates,dynamicTokensEnabled:_this42.dynamicTokensEnabled});var key=_getKeyForAutomaticLookahead(_this42.fullRuleNameToShort[currRule.name],OR_IDX,currProd.idx);_this42.setLaFuncCache(key,laFunc);});});forEach(repetition,function(currProd){_this42.computeLookaheadFunc(currRule,currProd.idx,MANY_IDX,"Repetition",currProd.maxLookahead,getProductionDslName(currProd));});forEach(option,function(currProd){_this42.computeLookaheadFunc(currRule,currProd.idx,OPTION_IDX,"Option",currProd.maxLookahead,getProductionDslName(currProd));});forEach(repetitionMandatory,function(currProd){_this42.computeLookaheadFunc(currRule,currProd.idx,AT_LEAST_ONE_IDX,"RepetitionMandatory",currProd.maxLookahead,getProductionDslName(currProd));});forEach(repetitionMandatoryWithSeparator,function(currProd){_this42.computeLookaheadFunc(currRule,currProd.idx,AT_LEAST_ONE_SEP_IDX,"RepetitionMandatoryWithSeparator",currProd.maxLookahead,getProductionDslName(currProd));});forEach(repetitionWithSeparator,function(currProd){_this42.computeLookaheadFunc(currRule,currProd.idx,MANY_SEP_IDX,"RepetitionWithSeparator",currProd.maxLookahead,getProductionDslName(currProd));});});});}},{key:"computeLookaheadFunc",value:function computeLookaheadFunc(rule,prodOccurrence,prodKey,prodType,prodMaxLookahead,dslMethodName){var _this43=this;this.TRACE_INIT("".concat(dslMethodName).concat(prodOccurrence===0?"":prodOccurrence),function(){var laFunc=_this43.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:prodOccurrence,rule:rule,maxLookahead:prodMaxLookahead||_this43.maxLookahead,dynamicTokensEnabled:_this43.dynamicTokensEnabled,prodType:prodType});var key=_getKeyForAutomaticLookahead(_this43.fullRuleNameToShort[rule.name],prodKey,prodOccurrence);_this43.setLaFuncCache(key,laFunc);});}// this actually returns a number, but it is always used as a string (object prop key)
},{key:"getKeyForAutomaticLookahead",value:function getKeyForAutomaticLookahead(dslMethodIdx,occurrence){var currRuleShortName=this.getLastExplicitRuleShortName();return _getKeyForAutomaticLookahead(currRuleShortName,dslMethodIdx,occurrence);}},{key:"getLaFuncFromCache",value:function getLaFuncFromCache(key){return this.lookAheadFuncsCache.get(key);}/* istanbul ignore next */},{key:"setLaFuncCache",value:function setLaFuncCache(key,value){this.lookAheadFuncsCache.set(key,value);}}]);return LooksAhead;}();var DslMethodsCollectorVisitor=/*#__PURE__*/function(_GAstVisitor6){_inherits(DslMethodsCollectorVisitor,_GAstVisitor6);var _super33=_createSuper(DslMethodsCollectorVisitor);function DslMethodsCollectorVisitor(){var _this44;_classCallCheck(this,DslMethodsCollectorVisitor);_this44=_super33.apply(this,arguments);_this44.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]};return _this44;}_createClass(DslMethodsCollectorVisitor,[{key:"reset",value:function reset(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]};}},{key:"visitOption",value:function visitOption(option){this.dslMethods.option.push(option);}},{key:"visitRepetitionWithSeparator",value:function visitRepetitionWithSeparator(manySep){this.dslMethods.repetitionWithSeparator.push(manySep);}},{key:"visitRepetitionMandatory",value:function visitRepetitionMandatory(atLeastOne){this.dslMethods.repetitionMandatory.push(atLeastOne);}},{key:"visitRepetitionMandatoryWithSeparator",value:function visitRepetitionMandatoryWithSeparator(atLeastOneSep){this.dslMethods.repetitionMandatoryWithSeparator.push(atLeastOneSep);}},{key:"visitRepetition",value:function visitRepetition(many){this.dslMethods.repetition.push(many);}},{key:"visitAlternation",value:function visitAlternation(or){this.dslMethods.alternation.push(or);}}]);return DslMethodsCollectorVisitor;}(GAstVisitor);var collectorVisitor=new DslMethodsCollectorVisitor();function collectMethods(rule){collectorVisitor.reset();rule.accept(collectorVisitor);var dslMethods=collectorVisitor.dslMethods;// avoid uncleaned references
collectorVisitor.reset();return dslMethods;}/**
 * This nodeLocation tracking is not efficient and should only be used
 * when error recovery is enabled or the Token Vector contains virtual Tokens
 * (e.g, Python Indent/Outdent)
 * As it executes the calculation for every single terminal/nonTerminal
 * and does not rely on the fact the token vector is **sorted**
 */function setNodeLocationOnlyOffset(currNodeLocation,newLocationInfo){// First (valid) update for this cst node
if(isNaN(currNodeLocation.startOffset)===true){// assumption1: Token location information is either NaN or a valid number
// assumption2: Token location information is fully valid if it exist
// (both start/end offsets exist and are numbers).
currNodeLocation.startOffset=newLocationInfo.startOffset;currNodeLocation.endOffset=newLocationInfo.endOffset;}// Once the startOffset has been updated with a valid number it should never receive
// any farther updates as the Token vector is sorted.
// We still have to check this this condition for every new possible location info
// because with error recovery enabled we may encounter invalid tokens (NaN location props)
else if(currNodeLocation.endOffset<newLocationInfo.endOffset===true){currNodeLocation.endOffset=newLocationInfo.endOffset;}}/**
 * This nodeLocation tracking is not efficient and should only be used
 * when error recovery is enabled or the Token Vector contains virtual Tokens
 * (e.g, Python Indent/Outdent)
 * As it executes the calculation for every single terminal/nonTerminal
 * and does not rely on the fact the token vector is **sorted**
 */function setNodeLocationFull(currNodeLocation,newLocationInfo){// First (valid) update for this cst node
if(isNaN(currNodeLocation.startOffset)===true){// assumption1: Token location information is either NaN or a valid number
// assumption2: Token location information is fully valid if it exist
// (all start/end props exist and are numbers).
currNodeLocation.startOffset=newLocationInfo.startOffset;currNodeLocation.startColumn=newLocationInfo.startColumn;currNodeLocation.startLine=newLocationInfo.startLine;currNodeLocation.endOffset=newLocationInfo.endOffset;currNodeLocation.endColumn=newLocationInfo.endColumn;currNodeLocation.endLine=newLocationInfo.endLine;}// Once the start props has been updated with a valid number it should never receive
// any farther updates as the Token vector is sorted.
// We still have to check this this condition for every new possible location info
// because with error recovery enabled we may encounter invalid tokens (NaN location props)
else if(currNodeLocation.endOffset<newLocationInfo.endOffset===true){currNodeLocation.endOffset=newLocationInfo.endOffset;currNodeLocation.endColumn=newLocationInfo.endColumn;currNodeLocation.endLine=newLocationInfo.endLine;}}function addTerminalToCst(node,token,tokenTypeName){if(node.children[tokenTypeName]===undefined){node.children[tokenTypeName]=[token];}else{node.children[tokenTypeName].push(token);}}function addNoneTerminalToCst(node,ruleName,ruleResult){if(node.children[ruleName]===undefined){node.children[ruleName]=[ruleResult];}else{node.children[ruleName].push(ruleResult);}}var NAME="name";function defineNameProp(obj,nameValue){Object.defineProperty(obj,NAME,{enumerable:false,configurable:true,writable:false,value:nameValue});}function defaultVisit(ctx,param){var childrenNames=keys(ctx);var childrenNamesLength=childrenNames.length;for(var _i23=0;_i23<childrenNamesLength;_i23++){var currChildName=childrenNames[_i23];var currChildArray=ctx[currChildName];var currChildArrayLength=currChildArray.length;for(var j=0;j<currChildArrayLength;j++){var currChild=currChildArray[j];// distinction between Tokens Children and CstNode children
if(currChild.tokenTypeIdx===undefined){this[currChild.name](currChild.children,param);}}}// defaultVisit does not support generic out param
}function createBaseSemanticVisitorConstructor(grammarName,ruleNames){var derivedConstructor=function derivedConstructor(){};// can be overwritten according to:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/
// name?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fname
defineNameProp(derivedConstructor,grammarName+"BaseSemantics");var semanticProto={visit:function visit(cstNode,param){// enables writing more concise visitor methods when CstNode has only a single child
if(isArray$1(cstNode)){// A CST Node's children dictionary can never have empty arrays as values
// If a key is defined there will be at least one element in the corresponding value array.
cstNode=cstNode[0];}// enables passing optional CstNodes concisely.
if(isUndefined(cstNode)){return undefined;}return this[cstNode.name](cstNode.children,param);},validateVisitor:function validateVisitor(){var semanticDefinitionErrors=_validateVisitor(this,ruleNames);if(!isEmpty(semanticDefinitionErrors)){var errorMessages=map(semanticDefinitionErrors,function(currDefError){return currDefError.msg;});throw Error("Errors Detected in CST Visitor <".concat(this.constructor.name,">:\n\t")+"".concat(errorMessages.join("\n\n").replace(/\n/g,"\n\t")));}}};derivedConstructor.prototype=semanticProto;derivedConstructor.prototype.constructor=derivedConstructor;derivedConstructor._RULE_NAMES=ruleNames;return derivedConstructor;}function createBaseVisitorConstructorWithDefaults(grammarName,ruleNames,baseConstructor){var derivedConstructor=function derivedConstructor(){};// can be overwritten according to:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/
// name?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fname
defineNameProp(derivedConstructor,grammarName+"BaseSemanticsWithDefaults");var withDefaultsProto=Object.create(baseConstructor.prototype);forEach(ruleNames,function(ruleName){withDefaultsProto[ruleName]=defaultVisit;});derivedConstructor.prototype=withDefaultsProto;derivedConstructor.prototype.constructor=derivedConstructor;return derivedConstructor;}var CstVisitorDefinitionError;(function(CstVisitorDefinitionError){CstVisitorDefinitionError[CstVisitorDefinitionError["REDUNDANT_METHOD"]=0]="REDUNDANT_METHOD";CstVisitorDefinitionError[CstVisitorDefinitionError["MISSING_METHOD"]=1]="MISSING_METHOD";})(CstVisitorDefinitionError||(CstVisitorDefinitionError={}));function _validateVisitor(visitorInstance,ruleNames){var missingErrors=validateMissingCstMethods(visitorInstance,ruleNames);return missingErrors;}function validateMissingCstMethods(visitorInstance,ruleNames){var missingRuleNames=filter(ruleNames,function(currRuleName){return isFunction(visitorInstance[currRuleName])===false;});var errors=map(missingRuleNames,function(currRuleName){return{msg:"Missing visitor method: <".concat(currRuleName,"> on ").concat(visitorInstance.constructor.name," CST Visitor."),type:CstVisitorDefinitionError.MISSING_METHOD,methodName:currRuleName};});return compact(errors);}/**
 * This trait is responsible for the CST building logic.
 */var TreeBuilder=/*#__PURE__*/function(){function TreeBuilder(){_classCallCheck(this,TreeBuilder);}_createClass(TreeBuilder,[{key:"initTreeBuilder",value:function initTreeBuilder(config){this.CST_STACK=[];// outputCst is no longer exposed/defined in the pubic API
this.outputCst=config.outputCst;this.nodeLocationTracking=has(config,"nodeLocationTracking")?config.nodeLocationTracking// assumes end user provides the correct config value/type
:DEFAULT_PARSER_CONFIG.nodeLocationTracking;if(!this.outputCst){this.cstInvocationStateUpdate=noop;this.cstFinallyStateUpdate=noop;this.cstPostTerminal=noop;this.cstPostNonTerminal=noop;this.cstPostRule=noop;}else{if(/full/i.test(this.nodeLocationTracking)){if(this.recoveryEnabled){this.setNodeLocationFromToken=setNodeLocationFull;this.setNodeLocationFromNode=setNodeLocationFull;this.cstPostRule=noop;this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery;}else{this.setNodeLocationFromToken=noop;this.setNodeLocationFromNode=noop;this.cstPostRule=this.cstPostRuleFull;this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular;}}else if(/onlyOffset/i.test(this.nodeLocationTracking)){if(this.recoveryEnabled){this.setNodeLocationFromToken=setNodeLocationOnlyOffset;this.setNodeLocationFromNode=setNodeLocationOnlyOffset;this.cstPostRule=noop;this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery;}else{this.setNodeLocationFromToken=noop;this.setNodeLocationFromNode=noop;this.cstPostRule=this.cstPostRuleOnlyOffset;this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular;}}else if(/none/i.test(this.nodeLocationTracking)){this.setNodeLocationFromToken=noop;this.setNodeLocationFromNode=noop;this.cstPostRule=noop;this.setInitialNodeLocation=noop;}else{throw Error("Invalid <nodeLocationTracking> config option: \"".concat(config.nodeLocationTracking,"\""));}}}},{key:"setInitialNodeLocationOnlyOffsetRecovery",value:function setInitialNodeLocationOnlyOffsetRecovery(cstNode){cstNode.location={startOffset:NaN,endOffset:NaN};}},{key:"setInitialNodeLocationOnlyOffsetRegular",value:function setInitialNodeLocationOnlyOffsetRegular(cstNode){cstNode.location={// without error recovery the starting Location of a new CstNode is guaranteed
// To be the next Token's startOffset (for valid inputs).
// For invalid inputs there won't be any CSTOutput so this potential
// inaccuracy does not matter
startOffset:this.LA(1).startOffset,endOffset:NaN};}},{key:"setInitialNodeLocationFullRecovery",value:function setInitialNodeLocationFullRecovery(cstNode){cstNode.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN};}/**
       *  @see setInitialNodeLocationOnlyOffsetRegular for explanation why this work
  
       * @param cstNode
       */},{key:"setInitialNodeLocationFullRegular",value:function setInitialNodeLocationFullRegular(cstNode){var nextToken=this.LA(1);cstNode.location={startOffset:nextToken.startOffset,startLine:nextToken.startLine,startColumn:nextToken.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN};}},{key:"cstInvocationStateUpdate",value:function cstInvocationStateUpdate(fullRuleName){var cstNode={name:fullRuleName,children:Object.create(null)};this.setInitialNodeLocation(cstNode);this.CST_STACK.push(cstNode);}},{key:"cstFinallyStateUpdate",value:function cstFinallyStateUpdate(){this.CST_STACK.pop();}},{key:"cstPostRuleFull",value:function cstPostRuleFull(ruleCstNode){// casts to `required<CstNodeLocation>` are safe because `cstPostRuleFull` should only be invoked when full location is enabled
var prevToken=this.LA(0);var loc=ruleCstNode.location;// If this condition is true it means we consumed at least one Token
// In this CstNode.
if(loc.startOffset<=prevToken.startOffset===true){loc.endOffset=prevToken.endOffset;loc.endLine=prevToken.endLine;loc.endColumn=prevToken.endColumn;}// "empty" CstNode edge case
else{loc.startOffset=NaN;loc.startLine=NaN;loc.startColumn=NaN;}}},{key:"cstPostRuleOnlyOffset",value:function cstPostRuleOnlyOffset(ruleCstNode){var prevToken=this.LA(0);// `location' is not null because `cstPostRuleOnlyOffset` will only be invoked when location tracking is enabled.
var loc=ruleCstNode.location;// If this condition is true it means we consumed at least one Token
// In this CstNode.
if(loc.startOffset<=prevToken.startOffset===true){loc.endOffset=prevToken.endOffset;}// "empty" CstNode edge case
else{loc.startOffset=NaN;}}},{key:"cstPostTerminal",value:function cstPostTerminal(key,consumedToken){var rootCst=this.CST_STACK[this.CST_STACK.length-1];addTerminalToCst(rootCst,consumedToken,key);// This is only used when **both** error recovery and CST Output are enabled.
this.setNodeLocationFromToken(rootCst.location,consumedToken);}},{key:"cstPostNonTerminal",value:function cstPostNonTerminal(ruleCstResult,ruleName){var preCstNode=this.CST_STACK[this.CST_STACK.length-1];addNoneTerminalToCst(preCstNode,ruleName,ruleCstResult);// This is only used when **both** error recovery and CST Output are enabled.
this.setNodeLocationFromNode(preCstNode.location,ruleCstResult.location);}},{key:"getBaseCstVisitorConstructor",value:function getBaseCstVisitorConstructor(){if(isUndefined(this.baseCstVisitorConstructor)){var newBaseCstVisitorConstructor=createBaseSemanticVisitorConstructor(this.className,keys(this.gastProductionsCache));this.baseCstVisitorConstructor=newBaseCstVisitorConstructor;return newBaseCstVisitorConstructor;}return this.baseCstVisitorConstructor;}},{key:"getBaseCstVisitorConstructorWithDefaults",value:function getBaseCstVisitorConstructorWithDefaults(){if(isUndefined(this.baseCstVisitorWithDefaultsConstructor)){var newConstructor=createBaseVisitorConstructorWithDefaults(this.className,keys(this.gastProductionsCache),this.getBaseCstVisitorConstructor());this.baseCstVisitorWithDefaultsConstructor=newConstructor;return newConstructor;}return this.baseCstVisitorWithDefaultsConstructor;}},{key:"getLastExplicitRuleShortName",value:function getLastExplicitRuleShortName(){var ruleStack=this.RULE_STACK;return ruleStack[ruleStack.length-1];}},{key:"getPreviousExplicitRuleShortName",value:function getPreviousExplicitRuleShortName(){var ruleStack=this.RULE_STACK;return ruleStack[ruleStack.length-2];}},{key:"getLastExplicitRuleOccurrenceIndex",value:function getLastExplicitRuleOccurrenceIndex(){var occurrenceStack=this.RULE_OCCURRENCE_STACK;return occurrenceStack[occurrenceStack.length-1];}}]);return TreeBuilder;}();/**
 * Trait responsible abstracting over the interaction with Lexer output (Token vector).
 *
 * This could be generalized to support other kinds of lexers, e.g.
 * - Just in Time Lexing / Lexer-Less parsing.
 * - Streaming Lexer.
 */var LexerAdapter=/*#__PURE__*/function(){function LexerAdapter(){_classCallCheck(this,LexerAdapter);}_createClass(LexerAdapter,[{key:"initLexerAdapter",value:function initLexerAdapter(){this.tokVector=[];this.tokVectorLength=0;this.currIdx=-1;}},{key:"input",get:function get(){return this.tokVector;}// skips a token and returns the next token
,set:function set(newInput){// @ts-ignore - `this parameter` not supported in setters/getters
//   - https://www.typescriptlang.org/docs/handbook/functions.html#this-parameters
if(this.selfAnalysisDone!==true){throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");}// @ts-ignore - `this parameter` not supported in setters/getters
//   - https://www.typescriptlang.org/docs/handbook/functions.html#this-parameters
this.reset();this.tokVector=newInput;this.tokVectorLength=newInput.length;}},{key:"SKIP_TOKEN",value:function SKIP_TOKEN(){if(this.currIdx<=this.tokVector.length-2){this.consumeToken();return this.LA(1);}else{return END_OF_FILE;}}// Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
// or lexers dependent on parser context.
},{key:"LA",value:function LA(howMuch){var soughtIdx=this.currIdx+howMuch;if(soughtIdx<0||this.tokVectorLength<=soughtIdx){return END_OF_FILE;}else{return this.tokVector[soughtIdx];}}},{key:"consumeToken",value:function consumeToken(){this.currIdx++;}},{key:"exportLexerState",value:function exportLexerState(){return this.currIdx;}},{key:"importLexerState",value:function importLexerState(newState){this.currIdx=newState;}},{key:"resetLexerState",value:function resetLexerState(){this.currIdx=-1;}},{key:"moveToTerminatedState",value:function moveToTerminatedState(){this.currIdx=this.tokVector.length-1;}},{key:"getLexerPosition",value:function getLexerPosition(){return this.exportLexerState();}}]);return LexerAdapter;}();/**
 * This trait is responsible for implementing the public API
 * for defining Chevrotain parsers, i.e:
 * - CONSUME
 * - RULE
 * - OPTION
 * - ...
 */var RecognizerApi=/*#__PURE__*/function(){function RecognizerApi(){_classCallCheck(this,RecognizerApi);}_createClass(RecognizerApi,[{key:"ACTION",value:function ACTION(impl){return impl.call(this);}},{key:"consume",value:function consume(idx,tokType,options){return this.consumeInternal(tokType,idx,options);}},{key:"subrule",value:function subrule(idx,ruleToCall,options){return this.subruleInternal(ruleToCall,idx,options);}},{key:"option",value:function option(idx,actionORMethodDef){return this.optionInternal(actionORMethodDef,idx);}},{key:"or",value:function or(idx,altsOrOpts){return this.orInternal(altsOrOpts,idx);}},{key:"many",value:function many(idx,actionORMethodDef){return this.manyInternal(idx,actionORMethodDef);}},{key:"atLeastOne",value:function atLeastOne(idx,actionORMethodDef){return this.atLeastOneInternal(idx,actionORMethodDef);}},{key:"CONSUME",value:function CONSUME(tokType,options){return this.consumeInternal(tokType,0,options);}},{key:"CONSUME1",value:function CONSUME1(tokType,options){return this.consumeInternal(tokType,1,options);}},{key:"CONSUME2",value:function CONSUME2(tokType,options){return this.consumeInternal(tokType,2,options);}},{key:"CONSUME3",value:function CONSUME3(tokType,options){return this.consumeInternal(tokType,3,options);}},{key:"CONSUME4",value:function CONSUME4(tokType,options){return this.consumeInternal(tokType,4,options);}},{key:"CONSUME5",value:function CONSUME5(tokType,options){return this.consumeInternal(tokType,5,options);}},{key:"CONSUME6",value:function CONSUME6(tokType,options){return this.consumeInternal(tokType,6,options);}},{key:"CONSUME7",value:function CONSUME7(tokType,options){return this.consumeInternal(tokType,7,options);}},{key:"CONSUME8",value:function CONSUME8(tokType,options){return this.consumeInternal(tokType,8,options);}},{key:"CONSUME9",value:function CONSUME9(tokType,options){return this.consumeInternal(tokType,9,options);}},{key:"SUBRULE",value:function SUBRULE(ruleToCall,options){return this.subruleInternal(ruleToCall,0,options);}},{key:"SUBRULE1",value:function SUBRULE1(ruleToCall,options){return this.subruleInternal(ruleToCall,1,options);}},{key:"SUBRULE2",value:function SUBRULE2(ruleToCall,options){return this.subruleInternal(ruleToCall,2,options);}},{key:"SUBRULE3",value:function SUBRULE3(ruleToCall,options){return this.subruleInternal(ruleToCall,3,options);}},{key:"SUBRULE4",value:function SUBRULE4(ruleToCall,options){return this.subruleInternal(ruleToCall,4,options);}},{key:"SUBRULE5",value:function SUBRULE5(ruleToCall,options){return this.subruleInternal(ruleToCall,5,options);}},{key:"SUBRULE6",value:function SUBRULE6(ruleToCall,options){return this.subruleInternal(ruleToCall,6,options);}},{key:"SUBRULE7",value:function SUBRULE7(ruleToCall,options){return this.subruleInternal(ruleToCall,7,options);}},{key:"SUBRULE8",value:function SUBRULE8(ruleToCall,options){return this.subruleInternal(ruleToCall,8,options);}},{key:"SUBRULE9",value:function SUBRULE9(ruleToCall,options){return this.subruleInternal(ruleToCall,9,options);}},{key:"OPTION",value:function OPTION(actionORMethodDef){return this.optionInternal(actionORMethodDef,0);}},{key:"OPTION1",value:function OPTION1(actionORMethodDef){return this.optionInternal(actionORMethodDef,1);}},{key:"OPTION2",value:function OPTION2(actionORMethodDef){return this.optionInternal(actionORMethodDef,2);}},{key:"OPTION3",value:function OPTION3(actionORMethodDef){return this.optionInternal(actionORMethodDef,3);}},{key:"OPTION4",value:function OPTION4(actionORMethodDef){return this.optionInternal(actionORMethodDef,4);}},{key:"OPTION5",value:function OPTION5(actionORMethodDef){return this.optionInternal(actionORMethodDef,5);}},{key:"OPTION6",value:function OPTION6(actionORMethodDef){return this.optionInternal(actionORMethodDef,6);}},{key:"OPTION7",value:function OPTION7(actionORMethodDef){return this.optionInternal(actionORMethodDef,7);}},{key:"OPTION8",value:function OPTION8(actionORMethodDef){return this.optionInternal(actionORMethodDef,8);}},{key:"OPTION9",value:function OPTION9(actionORMethodDef){return this.optionInternal(actionORMethodDef,9);}},{key:"OR",value:function OR(altsOrOpts){return this.orInternal(altsOrOpts,0);}},{key:"OR1",value:function OR1(altsOrOpts){return this.orInternal(altsOrOpts,1);}},{key:"OR2",value:function OR2(altsOrOpts){return this.orInternal(altsOrOpts,2);}},{key:"OR3",value:function OR3(altsOrOpts){return this.orInternal(altsOrOpts,3);}},{key:"OR4",value:function OR4(altsOrOpts){return this.orInternal(altsOrOpts,4);}},{key:"OR5",value:function OR5(altsOrOpts){return this.orInternal(altsOrOpts,5);}},{key:"OR6",value:function OR6(altsOrOpts){return this.orInternal(altsOrOpts,6);}},{key:"OR7",value:function OR7(altsOrOpts){return this.orInternal(altsOrOpts,7);}},{key:"OR8",value:function OR8(altsOrOpts){return this.orInternal(altsOrOpts,8);}},{key:"OR9",value:function OR9(altsOrOpts){return this.orInternal(altsOrOpts,9);}},{key:"MANY",value:function MANY(actionORMethodDef){this.manyInternal(0,actionORMethodDef);}},{key:"MANY1",value:function MANY1(actionORMethodDef){this.manyInternal(1,actionORMethodDef);}},{key:"MANY2",value:function MANY2(actionORMethodDef){this.manyInternal(2,actionORMethodDef);}},{key:"MANY3",value:function MANY3(actionORMethodDef){this.manyInternal(3,actionORMethodDef);}},{key:"MANY4",value:function MANY4(actionORMethodDef){this.manyInternal(4,actionORMethodDef);}},{key:"MANY5",value:function MANY5(actionORMethodDef){this.manyInternal(5,actionORMethodDef);}},{key:"MANY6",value:function MANY6(actionORMethodDef){this.manyInternal(6,actionORMethodDef);}},{key:"MANY7",value:function MANY7(actionORMethodDef){this.manyInternal(7,actionORMethodDef);}},{key:"MANY8",value:function MANY8(actionORMethodDef){this.manyInternal(8,actionORMethodDef);}},{key:"MANY9",value:function MANY9(actionORMethodDef){this.manyInternal(9,actionORMethodDef);}},{key:"MANY_SEP",value:function MANY_SEP(options){this.manySepFirstInternal(0,options);}},{key:"MANY_SEP1",value:function MANY_SEP1(options){this.manySepFirstInternal(1,options);}},{key:"MANY_SEP2",value:function MANY_SEP2(options){this.manySepFirstInternal(2,options);}},{key:"MANY_SEP3",value:function MANY_SEP3(options){this.manySepFirstInternal(3,options);}},{key:"MANY_SEP4",value:function MANY_SEP4(options){this.manySepFirstInternal(4,options);}},{key:"MANY_SEP5",value:function MANY_SEP5(options){this.manySepFirstInternal(5,options);}},{key:"MANY_SEP6",value:function MANY_SEP6(options){this.manySepFirstInternal(6,options);}},{key:"MANY_SEP7",value:function MANY_SEP7(options){this.manySepFirstInternal(7,options);}},{key:"MANY_SEP8",value:function MANY_SEP8(options){this.manySepFirstInternal(8,options);}},{key:"MANY_SEP9",value:function MANY_SEP9(options){this.manySepFirstInternal(9,options);}},{key:"AT_LEAST_ONE",value:function AT_LEAST_ONE(actionORMethodDef){this.atLeastOneInternal(0,actionORMethodDef);}},{key:"AT_LEAST_ONE1",value:function AT_LEAST_ONE1(actionORMethodDef){return this.atLeastOneInternal(1,actionORMethodDef);}},{key:"AT_LEAST_ONE2",value:function AT_LEAST_ONE2(actionORMethodDef){this.atLeastOneInternal(2,actionORMethodDef);}},{key:"AT_LEAST_ONE3",value:function AT_LEAST_ONE3(actionORMethodDef){this.atLeastOneInternal(3,actionORMethodDef);}},{key:"AT_LEAST_ONE4",value:function AT_LEAST_ONE4(actionORMethodDef){this.atLeastOneInternal(4,actionORMethodDef);}},{key:"AT_LEAST_ONE5",value:function AT_LEAST_ONE5(actionORMethodDef){this.atLeastOneInternal(5,actionORMethodDef);}},{key:"AT_LEAST_ONE6",value:function AT_LEAST_ONE6(actionORMethodDef){this.atLeastOneInternal(6,actionORMethodDef);}},{key:"AT_LEAST_ONE7",value:function AT_LEAST_ONE7(actionORMethodDef){this.atLeastOneInternal(7,actionORMethodDef);}},{key:"AT_LEAST_ONE8",value:function AT_LEAST_ONE8(actionORMethodDef){this.atLeastOneInternal(8,actionORMethodDef);}},{key:"AT_LEAST_ONE9",value:function AT_LEAST_ONE9(actionORMethodDef){this.atLeastOneInternal(9,actionORMethodDef);}},{key:"AT_LEAST_ONE_SEP",value:function AT_LEAST_ONE_SEP(options){this.atLeastOneSepFirstInternal(0,options);}},{key:"AT_LEAST_ONE_SEP1",value:function AT_LEAST_ONE_SEP1(options){this.atLeastOneSepFirstInternal(1,options);}},{key:"AT_LEAST_ONE_SEP2",value:function AT_LEAST_ONE_SEP2(options){this.atLeastOneSepFirstInternal(2,options);}},{key:"AT_LEAST_ONE_SEP3",value:function AT_LEAST_ONE_SEP3(options){this.atLeastOneSepFirstInternal(3,options);}},{key:"AT_LEAST_ONE_SEP4",value:function AT_LEAST_ONE_SEP4(options){this.atLeastOneSepFirstInternal(4,options);}},{key:"AT_LEAST_ONE_SEP5",value:function AT_LEAST_ONE_SEP5(options){this.atLeastOneSepFirstInternal(5,options);}},{key:"AT_LEAST_ONE_SEP6",value:function AT_LEAST_ONE_SEP6(options){this.atLeastOneSepFirstInternal(6,options);}},{key:"AT_LEAST_ONE_SEP7",value:function AT_LEAST_ONE_SEP7(options){this.atLeastOneSepFirstInternal(7,options);}},{key:"AT_LEAST_ONE_SEP8",value:function AT_LEAST_ONE_SEP8(options){this.atLeastOneSepFirstInternal(8,options);}},{key:"AT_LEAST_ONE_SEP9",value:function AT_LEAST_ONE_SEP9(options){this.atLeastOneSepFirstInternal(9,options);}},{key:"RULE",value:function RULE(name,implementation){var config=arguments.length>2&&arguments[2]!==undefined?arguments[2]:DEFAULT_RULE_CONFIG;if(includes(this.definedRulesNames,name)){var errMsg=defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({topLevelRule:name,grammarName:this.className});var error={message:errMsg,type:ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:name};this.definitionErrors.push(error);}this.definedRulesNames.push(name);var ruleImplementation=this.defineRule(name,implementation,config);this[name]=ruleImplementation;return ruleImplementation;}},{key:"OVERRIDE_RULE",value:function OVERRIDE_RULE(name,impl){var config=arguments.length>2&&arguments[2]!==undefined?arguments[2]:DEFAULT_RULE_CONFIG;var ruleErrors=validateRuleIsOverridden(name,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(ruleErrors);var ruleImplementation=this.defineRule(name,impl,config);this[name]=ruleImplementation;return ruleImplementation;}},{key:"BACKTRACK",value:function BACKTRACK(grammarRule,args){return function(){// save org state
this.isBackTrackingStack.push(1);var orgState=this.saveRecogState();try{grammarRule.apply(this,args);// if no exception was thrown we have succeed parsing the rule.
return true;}catch(e){if(isRecognitionException(e)){return false;}else{throw e;}}finally{this.reloadRecogState(orgState);this.isBackTrackingStack.pop();}};}// GAST export APIs
},{key:"getGAstProductions",value:function getGAstProductions(){return this.gastProductionsCache;}},{key:"getSerializedGastProductions",value:function getSerializedGastProductions(){return serializeGrammar(values(this.gastProductionsCache));}}]);return RecognizerApi;}();/**
 * This trait is responsible for the runtime parsing engine
 * Used by the official API (recognizer_api.ts)
 */var RecognizerEngine=/*#__PURE__*/function(){function RecognizerEngine(){_classCallCheck(this,RecognizerEngine);}_createClass(RecognizerEngine,[{key:"initRecognizerEngine",value:function initRecognizerEngine(tokenVocabulary,config){this.className=this.constructor.name;// TODO: would using an ES6 Map or plain object be faster (CST building scenario)
this.shortRuleNameToFull={};this.fullRuleNameToShort={};this.ruleShortNameIdx=256;this.tokenMatcher=tokenStructuredMatcherNoCategories;this.subruleIdx=0;this.definedRulesNames=[];this.tokensMap={};this.isBackTrackingStack=[];this.RULE_STACK=[];this.RULE_OCCURRENCE_STACK=[];this.gastProductionsCache={};if(has(config,"serializedGrammar")){throw Error("The Parser's configuration can no longer contain a <serializedGrammar> property.\n"+"\tSee: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0\n"+"\tFor Further details.");}if(isArray$1(tokenVocabulary)){// This only checks for Token vocabularies provided as arrays.
// That is good enough because the main objective is to detect users of pre-V4.0 APIs
// rather than all edge cases of empty Token vocabularies.
if(isEmpty(tokenVocabulary)){throw Error("A Token Vocabulary cannot be empty.\n"+"\tNote that the first argument for the parser constructor\n"+"\tis no longer a Token vector (since v4.0).");}if(typeof tokenVocabulary[0].startOffset==="number"){throw Error("The Parser constructor no longer accepts a token vector as the first argument.\n"+"\tSee: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0\n"+"\tFor Further details.");}}if(isArray$1(tokenVocabulary)){this.tokensMap=reduce(tokenVocabulary,function(acc,tokType){acc[tokType.name]=tokType;return acc;},{});}else if(has(tokenVocabulary,"modes")&&every(flatten(values(tokenVocabulary.modes)),isTokenType)){var _allTokenTypes=flatten(values(tokenVocabulary.modes));var uniqueTokens=uniq(_allTokenTypes);this.tokensMap=reduce(uniqueTokens,function(acc,tokType){acc[tokType.name]=tokType;return acc;},{});}else if(isObject(tokenVocabulary)){this.tokensMap=clone(tokenVocabulary);}else{throw new Error("<tokensDictionary> argument must be An Array of Token constructors,"+" A dictionary of Token constructors or an IMultiModeLexerDefinition");}// always add EOF to the tokenNames -> constructors map. it is useful to assure all the input has been
// parsed with a clear error message ("expecting EOF but found ...")
this.tokensMap["EOF"]=EOF;var allTokenTypes=has(tokenVocabulary,"modes")?flatten(values(tokenVocabulary.modes)):values(tokenVocabulary);var noTokenCategoriesUsed=every(allTokenTypes,function(tokenConstructor){return isEmpty(tokenConstructor.categoryMatches);});this.tokenMatcher=noTokenCategoriesUsed?tokenStructuredMatcherNoCategories:tokenStructuredMatcher;// Because ES2015+ syntax should be supported for creating Token classes
// We cannot assume that the Token classes were created using the "extendToken" utilities
// Therefore we must augment the Token classes both on Lexer initialization and on Parser initialization
augmentTokenTypes(values(this.tokensMap));}},{key:"defineRule",value:function defineRule(ruleName,impl,config){if(this.selfAnalysisDone){throw Error("Grammar rule <".concat(ruleName,"> may not be defined after the 'performSelfAnalysis' method has been called'\n")+"Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.");}var resyncEnabled=has(config,"resyncEnabled")?config.resyncEnabled// assumes end user provides the correct config value/type
:DEFAULT_RULE_CONFIG.resyncEnabled;var recoveryValueFunc=has(config,"recoveryValueFunc")?config.recoveryValueFunc// assumes end user provides the correct config value/type
:DEFAULT_RULE_CONFIG.recoveryValueFunc;// performance optimization: Use small integers as keys for the longer human readable "full" rule names.
// this greatly improves Map access time (as much as 8% for some performance benchmarks).
var shortName=this.ruleShortNameIdx<<BITS_FOR_METHOD_TYPE+BITS_FOR_OCCURRENCE_IDX;this.ruleShortNameIdx++;this.shortRuleNameToFull[shortName]=ruleName;this.fullRuleNameToShort[ruleName]=shortName;var invokeRuleWithTry;// Micro optimization, only check the condition **once** on rule definition
// instead of **every single** rule invocation.
if(this.outputCst===true){invokeRuleWithTry=function invokeRuleWithTry(){try{this.ruleInvocationStateUpdate(shortName,ruleName,this.subruleIdx);for(var _len3=arguments.length,args=new Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3];}impl.apply(this,args);var cst=this.CST_STACK[this.CST_STACK.length-1];this.cstPostRule(cst);return cst;}catch(e){return this.invokeRuleCatch(e,resyncEnabled,recoveryValueFunc);}finally{this.ruleFinallyStateUpdate();}};}else{invokeRuleWithTry=function invokeRuleWithTryCst(){try{this.ruleInvocationStateUpdate(shortName,ruleName,this.subruleIdx);for(var _len4=arguments.length,args=new Array(_len4),_key4=0;_key4<_len4;_key4++){args[_key4]=arguments[_key4];}return impl.apply(this,args);}catch(e){return this.invokeRuleCatch(e,resyncEnabled,recoveryValueFunc);}finally{this.ruleFinallyStateUpdate();}};}var wrappedGrammarRule=Object.assign(invokeRuleWithTry,{ruleName:ruleName,originalGrammarAction:impl});return wrappedGrammarRule;}},{key:"invokeRuleCatch",value:function invokeRuleCatch(e,resyncEnabledConfig,recoveryValueFunc){var isFirstInvokedRule=this.RULE_STACK.length===1;// note the reSync is always enabled for the first rule invocation, because we must always be able to
// reSync with EOF and just output some INVALID ParseTree
// during backtracking reSync recovery is disabled, otherwise we can't be certain the backtracking
// path is really the most valid one
var reSyncEnabled=resyncEnabledConfig&&!this.isBackTracking()&&this.recoveryEnabled;if(isRecognitionException(e)){var recogError=e;if(reSyncEnabled){var reSyncTokType=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(reSyncTokType)){recogError.resyncedTokens=this.reSyncTo(reSyncTokType);if(this.outputCst){var partialCstResult=this.CST_STACK[this.CST_STACK.length-1];partialCstResult.recoveredNode=true;return partialCstResult;}else{return recoveryValueFunc(e);}}else{if(this.outputCst){var _partialCstResult=this.CST_STACK[this.CST_STACK.length-1];_partialCstResult.recoveredNode=true;recogError.partialCstResult=_partialCstResult;}// to be handled Further up the call stack
throw recogError;}}else if(isFirstInvokedRule){// otherwise a Redundant input error will be created as well and we cannot guarantee that this is indeed the case
this.moveToTerminatedState();// the parser should never throw one of its own errors outside its flow.
// even if error recovery is disabled
return recoveryValueFunc(e);}else{// to be recovered Further up the call stack
throw recogError;}}else{// some other Error type which we don't know how to handle (for example a built in JavaScript Error)
throw e;}}// Implementation of parsing DSL
},{key:"optionInternal",value:function optionInternal(actionORMethodDef,occurrence){var key=this.getKeyForAutomaticLookahead(OPTION_IDX,occurrence);return this.optionInternalLogic(actionORMethodDef,occurrence,key);}},{key:"optionInternalLogic",value:function optionInternalLogic(actionORMethodDef,occurrence,key){var _this45=this;var lookAheadFunc=this.getLaFuncFromCache(key);var action;if(typeof actionORMethodDef!=="function"){action=actionORMethodDef.DEF;var predicate=actionORMethodDef.GATE;// predicate present
if(predicate!==undefined){var orgLookaheadFunction=lookAheadFunc;lookAheadFunc=function lookAheadFunc(){return predicate.call(_this45)&&orgLookaheadFunction.call(_this45);};}}else{action=actionORMethodDef;}if(lookAheadFunc.call(this)===true){return action.call(this);}return undefined;}},{key:"atLeastOneInternal",value:function atLeastOneInternal(prodOccurrence,actionORMethodDef){var laKey=this.getKeyForAutomaticLookahead(AT_LEAST_ONE_IDX,prodOccurrence);return this.atLeastOneInternalLogic(prodOccurrence,actionORMethodDef,laKey);}},{key:"atLeastOneInternalLogic",value:function atLeastOneInternalLogic(prodOccurrence,actionORMethodDef,key){var _this46=this;var lookAheadFunc=this.getLaFuncFromCache(key);var action;if(typeof actionORMethodDef!=="function"){action=actionORMethodDef.DEF;var predicate=actionORMethodDef.GATE;// predicate present
if(predicate!==undefined){var orgLookaheadFunction=lookAheadFunc;lookAheadFunc=function lookAheadFunc(){return predicate.call(_this46)&&orgLookaheadFunction.call(_this46);};}}else{action=actionORMethodDef;}if(lookAheadFunc.call(this)===true){var notStuck=this.doSingleRepetition(action);while(lookAheadFunc.call(this)===true&&notStuck===true){notStuck=this.doSingleRepetition(action);}}else{throw this.raiseEarlyExitException(prodOccurrence,PROD_TYPE.REPETITION_MANDATORY,actionORMethodDef.ERR_MSG);}// note that while it may seem that this can cause an error because by using a recursive call to
// AT_LEAST_ONE we change the grammar to AT_LEAST_TWO, AT_LEAST_THREE ... , the possible recursive call
// from the tryInRepetitionRecovery(...) will only happen IFF there really are TWO/THREE/.... items.
// Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
this.attemptInRepetitionRecovery(this.atLeastOneInternal,[prodOccurrence,actionORMethodDef],lookAheadFunc,AT_LEAST_ONE_IDX,prodOccurrence,NextTerminalAfterAtLeastOneWalker);}},{key:"atLeastOneSepFirstInternal",value:function atLeastOneSepFirstInternal(prodOccurrence,options){var laKey=this.getKeyForAutomaticLookahead(AT_LEAST_ONE_SEP_IDX,prodOccurrence);this.atLeastOneSepFirstInternalLogic(prodOccurrence,options,laKey);}},{key:"atLeastOneSepFirstInternalLogic",value:function atLeastOneSepFirstInternalLogic(prodOccurrence,options,key){var _this47=this;var action=options.DEF;var separator=options.SEP;var firstIterationLookaheadFunc=this.getLaFuncFromCache(key);// 1st iteration
if(firstIterationLookaheadFunc.call(this)===true){action.call(this);//  TODO: Optimization can move this function construction into "attemptInRepetitionRecovery"
//  because it is only needed in error recovery scenarios.
var separatorLookAheadFunc=function separatorLookAheadFunc(){return _this47.tokenMatcher(_this47.LA(1),separator);};// 2nd..nth iterations
while(this.tokenMatcher(this.LA(1),separator)===true){// note that this CONSUME will never enter recovery because
// the separatorLookAheadFunc checks that the separator really does exist.
this.CONSUME(separator);// No need for checking infinite loop here due to consuming the separator.
action.call(this);}// Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[prodOccurrence,separator,separatorLookAheadFunc,action,NextTerminalAfterAtLeastOneSepWalker],separatorLookAheadFunc,AT_LEAST_ONE_SEP_IDX,prodOccurrence,NextTerminalAfterAtLeastOneSepWalker);}else{throw this.raiseEarlyExitException(prodOccurrence,PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,options.ERR_MSG);}}},{key:"manyInternal",value:function manyInternal(prodOccurrence,actionORMethodDef){var laKey=this.getKeyForAutomaticLookahead(MANY_IDX,prodOccurrence);return this.manyInternalLogic(prodOccurrence,actionORMethodDef,laKey);}},{key:"manyInternalLogic",value:function manyInternalLogic(prodOccurrence,actionORMethodDef,key){var _this48=this;var lookaheadFunction=this.getLaFuncFromCache(key);var action;if(typeof actionORMethodDef!=="function"){action=actionORMethodDef.DEF;var predicate=actionORMethodDef.GATE;// predicate present
if(predicate!==undefined){var orgLookaheadFunction=lookaheadFunction;lookaheadFunction=function lookaheadFunction(){return predicate.call(_this48)&&orgLookaheadFunction.call(_this48);};}}else{action=actionORMethodDef;}var notStuck=true;while(lookaheadFunction.call(this)===true&&notStuck===true){notStuck=this.doSingleRepetition(action);}// Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
this.attemptInRepetitionRecovery(this.manyInternal,[prodOccurrence,actionORMethodDef],lookaheadFunction,MANY_IDX,prodOccurrence,NextTerminalAfterManyWalker,// The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
// is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
// An infinite loop cannot occur as:
// - Either the lookahead is guaranteed to consume something (Single Token Separator)
// - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
notStuck);}},{key:"manySepFirstInternal",value:function manySepFirstInternal(prodOccurrence,options){var laKey=this.getKeyForAutomaticLookahead(MANY_SEP_IDX,prodOccurrence);this.manySepFirstInternalLogic(prodOccurrence,options,laKey);}},{key:"manySepFirstInternalLogic",value:function manySepFirstInternalLogic(prodOccurrence,options,key){var _this49=this;var action=options.DEF;var separator=options.SEP;var firstIterationLaFunc=this.getLaFuncFromCache(key);// 1st iteration
if(firstIterationLaFunc.call(this)===true){action.call(this);var separatorLookAheadFunc=function separatorLookAheadFunc(){return _this49.tokenMatcher(_this49.LA(1),separator);};// 2nd..nth iterations
while(this.tokenMatcher(this.LA(1),separator)===true){// note that this CONSUME will never enter recovery because
// the separatorLookAheadFunc checks that the separator really does exist.
this.CONSUME(separator);// No need for checking infinite loop here due to consuming the separator.
action.call(this);}// Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[prodOccurrence,separator,separatorLookAheadFunc,action,NextTerminalAfterManySepWalker],separatorLookAheadFunc,MANY_SEP_IDX,prodOccurrence,NextTerminalAfterManySepWalker);}}},{key:"repetitionSepSecondInternal",value:function repetitionSepSecondInternal(prodOccurrence,separator,separatorLookAheadFunc,action,nextTerminalAfterWalker){while(separatorLookAheadFunc()){// note that this CONSUME will never enter recovery because
// the separatorLookAheadFunc checks that the separator really does exist.
this.CONSUME(separator);action.call(this);}// we can only arrive to this function after an error
// has occurred (hence the name 'second') so the following
// IF will always be entered, its possible to remove it...
// however it is kept to avoid confusion and be consistent.
// Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
/* istanbul ignore else */this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[prodOccurrence,separator,separatorLookAheadFunc,action,nextTerminalAfterWalker],separatorLookAheadFunc,AT_LEAST_ONE_SEP_IDX,prodOccurrence,nextTerminalAfterWalker);}},{key:"doSingleRepetition",value:function doSingleRepetition(action){var beforeIteration=this.getLexerPosition();action.call(this);var afterIteration=this.getLexerPosition();// This boolean will indicate if this repetition progressed
// or if we are "stuck" (potential infinite loop in the repetition).
return afterIteration>beforeIteration;}},{key:"orInternal",value:function orInternal(altsOrOpts,occurrence){var laKey=this.getKeyForAutomaticLookahead(OR_IDX,occurrence);var alts=isArray$1(altsOrOpts)?altsOrOpts:altsOrOpts.DEF;var laFunc=this.getLaFuncFromCache(laKey);var altIdxToTake=laFunc.call(this,alts);if(altIdxToTake!==undefined){var chosenAlternative=alts[altIdxToTake];return chosenAlternative.ALT.call(this);}this.raiseNoAltException(occurrence,altsOrOpts.ERR_MSG);}},{key:"ruleFinallyStateUpdate",value:function ruleFinallyStateUpdate(){this.RULE_STACK.pop();this.RULE_OCCURRENCE_STACK.pop();// NOOP when cst is disabled
this.cstFinallyStateUpdate();if(this.RULE_STACK.length===0&&this.isAtEndOfInput()===false){var firstRedundantTok=this.LA(1);var errMsg=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:firstRedundantTok,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new NotAllInputParsedException(errMsg,firstRedundantTok));}}},{key:"subruleInternal",value:function subruleInternal(ruleToCall,idx,options){var ruleResult;try{var args=options!==undefined?options.ARGS:undefined;this.subruleIdx=idx;ruleResult=ruleToCall.apply(this,args);this.cstPostNonTerminal(ruleResult,options!==undefined&&options.LABEL!==undefined?options.LABEL:ruleToCall.ruleName);return ruleResult;}catch(e){throw this.subruleInternalError(e,options,ruleToCall.ruleName);}}},{key:"subruleInternalError",value:function subruleInternalError(e,options,ruleName){if(isRecognitionException(e)&&e.partialCstResult!==undefined){this.cstPostNonTerminal(e.partialCstResult,options!==undefined&&options.LABEL!==undefined?options.LABEL:ruleName);delete e.partialCstResult;}throw e;}},{key:"consumeInternal",value:function consumeInternal(tokType,idx,options){var consumedToken;try{var nextToken=this.LA(1);if(this.tokenMatcher(nextToken,tokType)===true){this.consumeToken();consumedToken=nextToken;}else{this.consumeInternalError(tokType,nextToken,options);}}catch(eFromConsumption){consumedToken=this.consumeInternalRecovery(tokType,idx,eFromConsumption);}this.cstPostTerminal(options!==undefined&&options.LABEL!==undefined?options.LABEL:tokType.name,consumedToken);return consumedToken;}},{key:"consumeInternalError",value:function consumeInternalError(tokType,nextToken,options){var msg;var previousToken=this.LA(0);if(options!==undefined&&options.ERR_MSG){msg=options.ERR_MSG;}else{msg=this.errorMessageProvider.buildMismatchTokenMessage({expected:tokType,actual:nextToken,previous:previousToken,ruleName:this.getCurrRuleFullName()});}throw this.SAVE_ERROR(new MismatchedTokenException(msg,nextToken,previousToken));}},{key:"consumeInternalRecovery",value:function consumeInternalRecovery(tokType,idx,eFromConsumption){// no recovery allowed during backtracking, otherwise backtracking may recover invalid syntax and accept it
// but the original syntax could have been parsed successfully without any backtracking + recovery
if(this.recoveryEnabled&&// TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
eFromConsumption.name==="MismatchedTokenException"&&!this.isBackTracking()){var follows=this.getFollowsForInRuleRecovery(tokType,idx);try{return this.tryInRuleRecovery(tokType,follows);}catch(eFromInRuleRecovery){if(eFromInRuleRecovery.name===IN_RULE_RECOVERY_EXCEPTION){// failed in RuleRecovery.
// throw the original error in order to trigger reSync error recovery
throw eFromConsumption;}else{throw eFromInRuleRecovery;}}}else{throw eFromConsumption;}}},{key:"saveRecogState",value:function saveRecogState(){// errors is a getter which will clone the errors array
var savedErrors=this.errors;var savedRuleStack=clone(this.RULE_STACK);return{errors:savedErrors,lexerState:this.exportLexerState(),RULE_STACK:savedRuleStack,CST_STACK:this.CST_STACK};}},{key:"reloadRecogState",value:function reloadRecogState(newState){this.errors=newState.errors;this.importLexerState(newState.lexerState);this.RULE_STACK=newState.RULE_STACK;}},{key:"ruleInvocationStateUpdate",value:function ruleInvocationStateUpdate(shortName,fullName,idxInCallingRule){this.RULE_OCCURRENCE_STACK.push(idxInCallingRule);this.RULE_STACK.push(shortName);// NOOP when cst is disabled
this.cstInvocationStateUpdate(fullName);}},{key:"isBackTracking",value:function isBackTracking(){return this.isBackTrackingStack.length!==0;}},{key:"getCurrRuleFullName",value:function getCurrRuleFullName(){var shortName=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[shortName];}},{key:"shortRuleNameToFullName",value:function shortRuleNameToFullName(shortName){return this.shortRuleNameToFull[shortName];}},{key:"isAtEndOfInput",value:function isAtEndOfInput(){return this.tokenMatcher(this.LA(1),EOF);}},{key:"reset",value:function reset(){this.resetLexerState();this.subruleIdx=0;this.isBackTrackingStack=[];this.errors=[];this.RULE_STACK=[];// TODO: extract a specific reset for TreeBuilder trait
this.CST_STACK=[];this.RULE_OCCURRENCE_STACK=[];}}]);return RecognizerEngine;}();/**
 * Trait responsible for runtime parsing errors.
 */var ErrorHandler=/*#__PURE__*/function(){function ErrorHandler(){_classCallCheck(this,ErrorHandler);}_createClass(ErrorHandler,[{key:"initErrorHandler",value:function initErrorHandler(config){this._errors=[];this.errorMessageProvider=has(config,"errorMessageProvider")?config.errorMessageProvider// assumes end user provides the correct config value/type
:DEFAULT_PARSER_CONFIG.errorMessageProvider;}},{key:"SAVE_ERROR",value:function SAVE_ERROR(error){if(isRecognitionException(error)){error.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:clone(this.RULE_OCCURRENCE_STACK)};this._errors.push(error);return error;}else{throw Error("Trying to save an Error which is not a RecognitionException");}}},{key:"errors",get:function get(){return clone(this._errors);},set:function set(newErrors){this._errors=newErrors;}// TODO: consider caching the error message computed information
},{key:"raiseEarlyExitException",value:function raiseEarlyExitException(occurrence,prodType,userDefinedErrMsg){var ruleName=this.getCurrRuleFullName();var ruleGrammar=this.getGAstProductions()[ruleName];var lookAheadPathsPerAlternative=getLookaheadPathsForOptionalProd(occurrence,ruleGrammar,prodType,this.maxLookahead);var insideProdPaths=lookAheadPathsPerAlternative[0];var actualTokens=[];for(var _i24=1;_i24<=this.maxLookahead;_i24++){actualTokens.push(this.LA(_i24));}var msg=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:insideProdPaths,actual:actualTokens,previous:this.LA(0),customUserDescription:userDefinedErrMsg,ruleName:ruleName});throw this.SAVE_ERROR(new EarlyExitException(msg,this.LA(1),this.LA(0)));}// TODO: consider caching the error message computed information
},{key:"raiseNoAltException",value:function raiseNoAltException(occurrence,errMsgTypes){var ruleName=this.getCurrRuleFullName();var ruleGrammar=this.getGAstProductions()[ruleName];// TODO: getLookaheadPathsForOr can be slow for large enough maxLookahead and certain grammars, consider caching ?
var lookAheadPathsPerAlternative=getLookaheadPathsForOr(occurrence,ruleGrammar,this.maxLookahead);var actualTokens=[];for(var _i25=1;_i25<=this.maxLookahead;_i25++){actualTokens.push(this.LA(_i25));}var previousToken=this.LA(0);var errMsg=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:lookAheadPathsPerAlternative,actual:actualTokens,previous:previousToken,customUserDescription:errMsgTypes,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new NoViableAltException(errMsg,this.LA(1),previousToken));}}]);return ErrorHandler;}();var ContentAssist=/*#__PURE__*/function(){function ContentAssist(){_classCallCheck(this,ContentAssist);}_createClass(ContentAssist,[{key:"initContentAssist",value:function initContentAssist(){}},{key:"computeContentAssist",value:function computeContentAssist(startRuleName,precedingInput){var startRuleGast=this.gastProductionsCache[startRuleName];if(isUndefined(startRuleGast)){throw Error("Rule ->".concat(startRuleName,"<- does not exist in this grammar."));}return nextPossibleTokensAfter([startRuleGast],precedingInput,this.tokenMatcher,this.maxLookahead);}// TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
// TODO: should this be more explicitly part of the public API?
},{key:"getNextPossibleTokenTypes",value:function getNextPossibleTokenTypes(grammarPath){var topRuleName=head(grammarPath.ruleStack);var gastProductions=this.getGAstProductions();var topProduction=gastProductions[topRuleName];var nextPossibleTokenTypes=new NextAfterTokenWalker(topProduction,grammarPath).startWalking();return nextPossibleTokenTypes;}}]);return ContentAssist;}();var RECORDING_NULL_OBJECT={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(RECORDING_NULL_OBJECT);var HANDLE_SEPARATOR=true;var MAX_METHOD_IDX=Math.pow(2,BITS_FOR_OCCURRENCE_IDX)-1;var RFT=createToken({name:"RECORDING_PHASE_TOKEN",pattern:Lexer.NA});augmentTokenTypes([RFT]);var RECORDING_PHASE_TOKEN=createTokenInstance(RFT,"This IToken indicates the Parser is in Recording Phase\n\t"+""+"See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",// Using "-1" instead of NaN (as in EOF) because an actual number is less likely to
// cause errors if the output of LA or CONSUME would be (incorrectly) used during the recording phase.
-1,-1,-1,-1,-1,-1);Object.freeze(RECORDING_PHASE_TOKEN);var RECORDING_PHASE_CSTNODE={name:"This CSTNode indicates the Parser is in Recording Phase\n\t"+"See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",children:{}};/**
 * This trait handles the creation of the GAST structure for Chevrotain Grammars
 */var GastRecorder=/*#__PURE__*/function(){function GastRecorder(){_classCallCheck(this,GastRecorder);}_createClass(GastRecorder,[{key:"initGastRecorder",value:function initGastRecorder(config){this.recordingProdStack=[];this.RECORDING_PHASE=false;}},{key:"enableRecording",value:function enableRecording(){var _this50=this;this.RECORDING_PHASE=true;this.TRACE_INIT("Enable Recording",function(){var _loop9=function _loop9(_i26){var idx=_i26>0?_i26:"";_this50["CONSUME".concat(idx)]=function(arg1,arg2){return this.consumeInternalRecord(arg1,_i26,arg2);};_this50["SUBRULE".concat(idx)]=function(arg1,arg2){return this.subruleInternalRecord(arg1,_i26,arg2);};_this50["OPTION".concat(idx)]=function(arg1){return this.optionInternalRecord(arg1,_i26);};_this50["OR".concat(idx)]=function(arg1){return this.orInternalRecord(arg1,_i26);};_this50["MANY".concat(idx)]=function(arg1){this.manyInternalRecord(_i26,arg1);};_this50["MANY_SEP".concat(idx)]=function(arg1){this.manySepFirstInternalRecord(_i26,arg1);};_this50["AT_LEAST_ONE".concat(idx)]=function(arg1){this.atLeastOneInternalRecord(_i26,arg1);};_this50["AT_LEAST_ONE_SEP".concat(idx)]=function(arg1){this.atLeastOneSepFirstInternalRecord(_i26,arg1);};};/**
             * Warning Dark Voodoo Magic upcoming!
             * We are "replacing" the public parsing DSL methods API
             * With **new** alternative implementations on the Parser **instance**
             *
             * So far this is the only way I've found to avoid performance regressions during parsing time.
             * - Approx 30% performance regression was measured on Chrome 75 Canary when attempting to replace the "internal"
             *   implementations directly instead.
             */for(var _i26=0;_i26<10;_i26++){_loop9(_i26);}// DSL methods with the idx(suffix) as an argument
_this50["consume"]=function(idx,arg1,arg2){return this.consumeInternalRecord(arg1,idx,arg2);};_this50["subrule"]=function(idx,arg1,arg2){return this.subruleInternalRecord(arg1,idx,arg2);};_this50["option"]=function(idx,arg1){return this.optionInternalRecord(arg1,idx);};_this50["or"]=function(idx,arg1){return this.orInternalRecord(arg1,idx);};_this50["many"]=function(idx,arg1){this.manyInternalRecord(idx,arg1);};_this50["atLeastOne"]=function(idx,arg1){this.atLeastOneInternalRecord(idx,arg1);};_this50.ACTION=_this50.ACTION_RECORD;_this50.BACKTRACK=_this50.BACKTRACK_RECORD;_this50.LA=_this50.LA_RECORD;});}},{key:"disableRecording",value:function disableRecording(){var _this51=this;this.RECORDING_PHASE=false;// By deleting these **instance** properties, any future invocation
// will be deferred to the original methods on the **prototype** object
// This seems to get rid of any incorrect optimizations that V8 may
// do during the recording phase.
this.TRACE_INIT("Deleting Recording methods",function(){var that=_this51;for(var _i27=0;_i27<10;_i27++){var idx=_i27>0?_i27:"";delete that["CONSUME".concat(idx)];delete that["SUBRULE".concat(idx)];delete that["OPTION".concat(idx)];delete that["OR".concat(idx)];delete that["MANY".concat(idx)];delete that["MANY_SEP".concat(idx)];delete that["AT_LEAST_ONE".concat(idx)];delete that["AT_LEAST_ONE_SEP".concat(idx)];}delete that["consume"];delete that["subrule"];delete that["option"];delete that["or"];delete that["many"];delete that["atLeastOne"];delete that.ACTION;delete that.BACKTRACK;delete that.LA;});}//   Parser methods are called inside an ACTION?
//   Maybe try/catch/finally on ACTIONS while disabling the recorders state changes?
// @ts-expect-error -- noop place holder
},{key:"ACTION_RECORD",value:function ACTION_RECORD(impl){// NO-OP during recording
}// Executing backtracking logic will break our recording logic assumptions
},{key:"BACKTRACK_RECORD",value:function BACKTRACK_RECORD(grammarRule,args){return function(){return true;};}// LA is part of the official API and may be used for custom lookahead logic
// by end users who may forget to wrap it in ACTION or inside a GATE
},{key:"LA_RECORD",value:function LA_RECORD(howMuch){// We cannot use the RECORD_PHASE_TOKEN here because someone may depend
// On LA return EOF at the end of the input so an infinite loop may occur.
return END_OF_FILE;}},{key:"topLevelRuleRecord",value:function topLevelRuleRecord(name,def){try{var newTopLevelRule=new Rule({definition:[],name:name});newTopLevelRule.name=name;this.recordingProdStack.push(newTopLevelRule);def.call(this);this.recordingProdStack.pop();return newTopLevelRule;}catch(originalError){if(originalError.KNOWN_RECORDER_ERROR!==true){try{originalError.message=originalError.message+'\n\t This error was thrown during the "grammar recording phase" For more info see:\n\t'+"https://chevrotain.io/docs/guide/internals.html#grammar-recording";}catch(mutabilityError){// We may not be able to modify the original error object
throw originalError;}}throw originalError;}}// Implementation of parsing DSL
},{key:"optionInternalRecord",value:function optionInternalRecord(actionORMethodDef,occurrence){return recordProd.call(this,Option,actionORMethodDef,occurrence);}},{key:"atLeastOneInternalRecord",value:function atLeastOneInternalRecord(occurrence,actionORMethodDef){recordProd.call(this,RepetitionMandatory,actionORMethodDef,occurrence);}},{key:"atLeastOneSepFirstInternalRecord",value:function atLeastOneSepFirstInternalRecord(occurrence,options){recordProd.call(this,RepetitionMandatoryWithSeparator,options,occurrence,HANDLE_SEPARATOR);}},{key:"manyInternalRecord",value:function manyInternalRecord(occurrence,actionORMethodDef){recordProd.call(this,Repetition,actionORMethodDef,occurrence);}},{key:"manySepFirstInternalRecord",value:function manySepFirstInternalRecord(occurrence,options){recordProd.call(this,RepetitionWithSeparator,options,occurrence,HANDLE_SEPARATOR);}},{key:"orInternalRecord",value:function orInternalRecord(altsOrOpts,occurrence){return recordOrProd.call(this,altsOrOpts,occurrence);}},{key:"subruleInternalRecord",value:function subruleInternalRecord(ruleToCall,occurrence,options){assertMethodIdxIsValid(occurrence);if(!ruleToCall||has(ruleToCall,"ruleName")===false){var error=new Error("<SUBRULE".concat(getIdxSuffix(occurrence),"> argument is invalid")+" expecting a Parser method reference but got: <".concat(JSON.stringify(ruleToCall),">")+"\n inside top level rule: <".concat(this.recordingProdStack[0].name,">"));error.KNOWN_RECORDER_ERROR=true;throw error;}var prevProd=last(this.recordingProdStack);var ruleName=ruleToCall.ruleName;var newNoneTerminal=new NonTerminal({idx:occurrence,nonTerminalName:ruleName,label:options===null||options===void 0?void 0:options.LABEL,// The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
referencedRule:undefined});prevProd.definition.push(newNoneTerminal);return this.outputCst?RECORDING_PHASE_CSTNODE:RECORDING_NULL_OBJECT;}},{key:"consumeInternalRecord",value:function consumeInternalRecord(tokType,occurrence,options){assertMethodIdxIsValid(occurrence);if(!hasShortKeyProperty(tokType)){var error=new Error("<CONSUME".concat(getIdxSuffix(occurrence),"> argument is invalid")+" expecting a TokenType reference but got: <".concat(JSON.stringify(tokType),">")+"\n inside top level rule: <".concat(this.recordingProdStack[0].name,">"));error.KNOWN_RECORDER_ERROR=true;throw error;}var prevProd=last(this.recordingProdStack);var newNoneTerminal=new Terminal({idx:occurrence,terminalType:tokType,label:options===null||options===void 0?void 0:options.LABEL});prevProd.definition.push(newNoneTerminal);return RECORDING_PHASE_TOKEN;}}]);return GastRecorder;}();function recordProd(prodConstructor,mainProdArg,occurrence){var handleSep=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;assertMethodIdxIsValid(occurrence);var prevProd=last(this.recordingProdStack);var grammarAction=isFunction(mainProdArg)?mainProdArg:mainProdArg.DEF;var newProd=new prodConstructor({definition:[],idx:occurrence});if(handleSep){newProd.separator=mainProdArg.SEP;}if(has(mainProdArg,"MAX_LOOKAHEAD")){newProd.maxLookahead=mainProdArg.MAX_LOOKAHEAD;}this.recordingProdStack.push(newProd);grammarAction.call(this);prevProd.definition.push(newProd);this.recordingProdStack.pop();return RECORDING_NULL_OBJECT;}function recordOrProd(mainProdArg,occurrence){var _this52=this;assertMethodIdxIsValid(occurrence);var prevProd=last(this.recordingProdStack);// Only an array of alternatives
var hasOptions=isArray$1(mainProdArg)===false;var alts=hasOptions===false?mainProdArg:mainProdArg.DEF;var newOrProd=new Alternation({definition:[],idx:occurrence,ignoreAmbiguities:hasOptions&&mainProdArg.IGNORE_AMBIGUITIES===true});if(has(mainProdArg,"MAX_LOOKAHEAD")){newOrProd.maxLookahead=mainProdArg.MAX_LOOKAHEAD;}var hasPredicates=some(alts,function(currAlt){return isFunction(currAlt.GATE);});newOrProd.hasPredicates=hasPredicates;prevProd.definition.push(newOrProd);forEach(alts,function(currAlt){var currAltFlat=new Alternative({definition:[]});newOrProd.definition.push(currAltFlat);if(has(currAlt,"IGNORE_AMBIGUITIES")){currAltFlat.ignoreAmbiguities=currAlt.IGNORE_AMBIGUITIES;// assumes end user provides the correct config value/type
}// **implicit** ignoreAmbiguities due to usage of gate
else if(has(currAlt,"GATE")){currAltFlat.ignoreAmbiguities=true;}_this52.recordingProdStack.push(currAltFlat);currAlt.ALT.call(_this52);_this52.recordingProdStack.pop();});return RECORDING_NULL_OBJECT;}function getIdxSuffix(idx){return idx===0?"":"".concat(idx);}function assertMethodIdxIsValid(idx){if(idx<0||idx>MAX_METHOD_IDX){var error=new Error(// The stack trace will contain all the needed details
"Invalid DSL Method idx value: <".concat(idx,">\n\t")+"Idx value must be a none negative value smaller than ".concat(MAX_METHOD_IDX+1));error.KNOWN_RECORDER_ERROR=true;throw error;}}/**
 * Trait responsible for runtime parsing errors.
 */var PerformanceTracer=/*#__PURE__*/function(){function PerformanceTracer(){_classCallCheck(this,PerformanceTracer);}_createClass(PerformanceTracer,[{key:"initPerformanceTracer",value:function initPerformanceTracer(config){if(has(config,"traceInitPerf")){var userTraceInitPerf=config.traceInitPerf;var traceIsNumber=typeof userTraceInitPerf==="number";this.traceInitMaxIdent=traceIsNumber?userTraceInitPerf:Infinity;this.traceInitPerf=traceIsNumber?userTraceInitPerf>0:userTraceInitPerf;// assumes end user provides the correct config value/type
}else{this.traceInitMaxIdent=0;this.traceInitPerf=DEFAULT_PARSER_CONFIG.traceInitPerf;}this.traceInitIndent=-1;}},{key:"TRACE_INIT",value:function TRACE_INIT(phaseDesc,phaseImpl){// No need to optimize this using NOOP pattern because
// It is not called in a hot spot...
if(this.traceInitPerf===true){this.traceInitIndent++;var indent=new Array(this.traceInitIndent+1).join("\t");if(this.traceInitIndent<this.traceInitMaxIdent){console.log("".concat(indent,"--> <").concat(phaseDesc,">"));}var _timer2=timer(phaseImpl),time=_timer2.time,value=_timer2.value;/* istanbul ignore next - Difficult to reproduce specific performance behavior (>10ms) in tests */var traceMethod=time>10?console.warn:console.log;if(this.traceInitIndent<this.traceInitMaxIdent){traceMethod("".concat(indent,"<-- <").concat(phaseDesc,"> time: ").concat(time,"ms"));}this.traceInitIndent--;return value;}else{return phaseImpl();}}}]);return PerformanceTracer;}();function applyMixins(derivedCtor,baseCtors){baseCtors.forEach(function(baseCtor){var baseProto=baseCtor.prototype;Object.getOwnPropertyNames(baseProto).forEach(function(propName){if(propName==="constructor"){return;}var basePropDescriptor=Object.getOwnPropertyDescriptor(baseProto,propName);// Handle Accessors
if(basePropDescriptor&&(basePropDescriptor.get||basePropDescriptor.set)){Object.defineProperty(derivedCtor.prototype,propName,basePropDescriptor);}else{derivedCtor.prototype[propName]=baseCtor.prototype[propName];}});});}var END_OF_FILE=createTokenInstance(EOF,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(END_OF_FILE);var DEFAULT_PARSER_CONFIG=Object.freeze({recoveryEnabled:false,maxLookahead:3,dynamicTokensEnabled:false,outputCst:true,errorMessageProvider:defaultParserErrorProvider,nodeLocationTracking:"none",traceInitPerf:false,skipValidations:false});var DEFAULT_RULE_CONFIG=Object.freeze({recoveryValueFunc:function recoveryValueFunc(){return undefined;},resyncEnabled:true});var ParserDefinitionErrorType;(function(ParserDefinitionErrorType){ParserDefinitionErrorType[ParserDefinitionErrorType["INVALID_RULE_NAME"]=0]="INVALID_RULE_NAME";ParserDefinitionErrorType[ParserDefinitionErrorType["DUPLICATE_RULE_NAME"]=1]="DUPLICATE_RULE_NAME";ParserDefinitionErrorType[ParserDefinitionErrorType["INVALID_RULE_OVERRIDE"]=2]="INVALID_RULE_OVERRIDE";ParserDefinitionErrorType[ParserDefinitionErrorType["DUPLICATE_PRODUCTIONS"]=3]="DUPLICATE_PRODUCTIONS";ParserDefinitionErrorType[ParserDefinitionErrorType["UNRESOLVED_SUBRULE_REF"]=4]="UNRESOLVED_SUBRULE_REF";ParserDefinitionErrorType[ParserDefinitionErrorType["LEFT_RECURSION"]=5]="LEFT_RECURSION";ParserDefinitionErrorType[ParserDefinitionErrorType["NONE_LAST_EMPTY_ALT"]=6]="NONE_LAST_EMPTY_ALT";ParserDefinitionErrorType[ParserDefinitionErrorType["AMBIGUOUS_ALTS"]=7]="AMBIGUOUS_ALTS";ParserDefinitionErrorType[ParserDefinitionErrorType["CONFLICT_TOKENS_RULES_NAMESPACE"]=8]="CONFLICT_TOKENS_RULES_NAMESPACE";ParserDefinitionErrorType[ParserDefinitionErrorType["INVALID_TOKEN_NAME"]=9]="INVALID_TOKEN_NAME";ParserDefinitionErrorType[ParserDefinitionErrorType["NO_NON_EMPTY_LOOKAHEAD"]=10]="NO_NON_EMPTY_LOOKAHEAD";ParserDefinitionErrorType[ParserDefinitionErrorType["AMBIGUOUS_PREFIX_ALTS"]=11]="AMBIGUOUS_PREFIX_ALTS";ParserDefinitionErrorType[ParserDefinitionErrorType["TOO_MANY_ALTS"]=12]="TOO_MANY_ALTS";ParserDefinitionErrorType[ParserDefinitionErrorType["CUSTOM_LOOKAHEAD_VALIDATION"]=13]="CUSTOM_LOOKAHEAD_VALIDATION";})(ParserDefinitionErrorType||(ParserDefinitionErrorType={}));var Parser=/*#__PURE__*/function(){function Parser(tokenVocabulary,config){_classCallCheck(this,Parser);this.definitionErrors=[];this.selfAnalysisDone=false;var that=this;that.initErrorHandler(config);that.initLexerAdapter();that.initLooksAhead(config);that.initRecognizerEngine(tokenVocabulary,config);that.initRecoverable(config);that.initTreeBuilder(config);that.initContentAssist();that.initGastRecorder(config);that.initPerformanceTracer(config);if(has(config,"ignoredIssues")){throw new Error("The <ignoredIssues> IParserConfig property has been deprecated.\n\t"+"Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.\n\t"+"See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES\n\t"+"For further details.");}this.skipValidations=has(config,"skipValidations")?config.skipValidations// casting assumes the end user passing the correct type
:DEFAULT_PARSER_CONFIG.skipValidations;}_createClass(Parser,[{key:"performSelfAnalysis",value:function performSelfAnalysis(){var _this53=this;this.TRACE_INIT("performSelfAnalysis",function(){var defErrorsMsgs;_this53.selfAnalysisDone=true;var className=_this53.className;_this53.TRACE_INIT("toFastProps",function(){// Without this voodoo magic the parser would be x3-x4 slower
// It seems it is better to invoke `toFastProperties` **before**
// Any manipulations of the `this` object done during the recording phase.
toFastProperties(_this53);});_this53.TRACE_INIT("Grammar Recording",function(){try{_this53.enableRecording();// Building the GAST
forEach(_this53.definedRulesNames,function(currRuleName){var wrappedRule=_this53[currRuleName];var originalGrammarAction=wrappedRule["originalGrammarAction"];var recordedRuleGast;_this53.TRACE_INIT("".concat(currRuleName," Rule"),function(){recordedRuleGast=_this53.topLevelRuleRecord(currRuleName,originalGrammarAction);});_this53.gastProductionsCache[currRuleName]=recordedRuleGast;});}finally{_this53.disableRecording();}});var resolverErrors=[];_this53.TRACE_INIT("Grammar Resolving",function(){resolverErrors=resolveGrammar({rules:values(_this53.gastProductionsCache)});_this53.definitionErrors=_this53.definitionErrors.concat(resolverErrors);});_this53.TRACE_INIT("Grammar Validations",function(){// only perform additional grammar validations IFF no resolving errors have occurred.
// as unresolved grammar may lead to unhandled runtime exceptions in the follow up validations.
if(isEmpty(resolverErrors)&&_this53.skipValidations===false){var validationErrors=validateGrammar({rules:values(_this53.gastProductionsCache),tokenTypes:values(_this53.tokensMap),errMsgProvider:defaultGrammarValidatorErrorProvider,grammarName:className});var lookaheadValidationErrors=validateLookahead({lookaheadStrategy:_this53.lookaheadStrategy,rules:values(_this53.gastProductionsCache),tokenTypes:values(_this53.tokensMap),grammarName:className});_this53.definitionErrors=_this53.definitionErrors.concat(validationErrors,lookaheadValidationErrors);}});// this analysis may fail if the grammar is not perfectly valid
if(isEmpty(_this53.definitionErrors)){// The results of these computations are not needed unless error recovery is enabled.
if(_this53.recoveryEnabled){_this53.TRACE_INIT("computeAllProdsFollows",function(){var allFollows=computeAllProdsFollows(values(_this53.gastProductionsCache));_this53.resyncFollows=allFollows;});}_this53.TRACE_INIT("ComputeLookaheadFunctions",function(){var _a,_b;(_b=(_a=_this53.lookaheadStrategy).initialize)===null||_b===void 0?void 0:_b.call(_a,{rules:values(_this53.gastProductionsCache)});_this53.preComputeLookaheadFunctions(values(_this53.gastProductionsCache));});}if(!Parser.DEFER_DEFINITION_ERRORS_HANDLING&&!isEmpty(_this53.definitionErrors)){defErrorsMsgs=map(_this53.definitionErrors,function(defError){return defError.message;});throw new Error("Parser Definition Errors detected:\n ".concat(defErrorsMsgs.join("\n-------------------------------\n")));}});}}],[{key:"performSelfAnalysis",value:/**
     *  @deprecated use the **instance** method with the same name instead
     */function performSelfAnalysis(parserInstance){throw Error("The **static** `performSelfAnalysis` method has been deprecated."+"\t\nUse the **instance** method with the same name instead.");}}]);return Parser;}();// Set this flag to true if you don't want the Parser to throw error when problems in it's definition are detected.
// (normally during the parser's constructor).
// This is a design time flag, it will not affect the runtime error handling of the parser, just design time errors,
// for example: duplicate rule names, referencing an unresolved subrule, ect...
// This flag should not be enabled during normal usage, it is used in special situations, for example when
// needing to display the parser definition errors in some GUI(online playground).
Parser.DEFER_DEFINITION_ERRORS_HANDLING=false;applyMixins(Parser,[Recoverable,LooksAhead,TreeBuilder,LexerAdapter,RecognizerEngine,RecognizerApi,ErrorHandler,ContentAssist,GastRecorder,PerformanceTracer]);var CstParser=/*#__PURE__*/function(_Parser){_inherits(CstParser,_Parser);var _super34=_createSuper(CstParser);function CstParser(tokenVocabulary){var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:DEFAULT_PARSER_CONFIG;_classCallCheck(this,CstParser);var configClone=clone(config);configClone.outputCst=true;return _super34.call(this,tokenVocabulary,configClone);}return _createClass(CstParser);}(Parser);var commonjsGlobal=typeof globalThis!=='undefined'?globalThis:typeof window!=='undefined'?window:typeof global!=='undefined'?global:typeof self!=='undefined'?self:{};function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,'default')?x['default']:x;}var he$1={exports:{}};/*! https://mths.be/he v1.2.0 by @mathias | MIT license */he$1.exports;(function(module,exports){(function(root){// Detect free variables `exports`.
var freeExports=exports;// Detect free variable `module`.
var freeModule=module&&module.exports==freeExports&&module;// Detect free variable `global`, from Node.js or Browserified code,
// and use it as `root`.
var freeGlobal=_typeof(commonjsGlobal)=='object'&&commonjsGlobal;if(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal){root=freeGlobal;}/*--------------------------------------------------------------------------*/ // All astral symbols.
var regexAstralSymbols=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;// All ASCII symbols (not just printable ASCII) except those listed in the
// first column of the overrides table.
// https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides
var regexAsciiWhitelist=/[\x01-\x7F]/g;// All BMP symbols that are not ASCII newlines, printable ASCII symbols, or
// code points listed in the first column of the overrides table on
// https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides.
var regexBmpWhitelist=/[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;var regexEncodeNonAscii=/<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g;var encodeMap={'\xAD':'shy',"\u200C":'zwnj',"\u200D":'zwj',"\u200E":'lrm',"\u2063":'ic',"\u2062":'it',"\u2061":'af',"\u200F":'rlm',"\u200B":'ZeroWidthSpace',"\u2060":'NoBreak',"\u0311":'DownBreve',"\u20DB":'tdot',"\u20DC":'DotDot','\t':'Tab','\n':'NewLine',"\u2008":'puncsp',"\u205F":'MediumSpace',"\u2009":'thinsp',"\u200A":'hairsp',"\u2004":'emsp13',"\u2002":'ensp',"\u2005":'emsp14',"\u2003":'emsp',"\u2007":'numsp','\xA0':'nbsp',"\u205F\u200A":'ThickSpace',"\u203E":'oline','_':'lowbar',"\u2010":'dash',"\u2013":'ndash',"\u2014":'mdash',"\u2015":'horbar',',':'comma',';':'semi',"\u204F":'bsemi',':':'colon',"\u2A74":'Colone','!':'excl','\xA1':'iexcl','?':'quest','\xBF':'iquest','.':'period',"\u2025":'nldr',"\u2026":'mldr','\xB7':'middot','\'':'apos',"\u2018":'lsquo',"\u2019":'rsquo',"\u201A":'sbquo',"\u2039":'lsaquo',"\u203A":'rsaquo','"':'quot',"\u201C":'ldquo',"\u201D":'rdquo',"\u201E":'bdquo','\xAB':'laquo','\xBB':'raquo','(':'lpar',')':'rpar','[':'lsqb',']':'rsqb','{':'lcub','}':'rcub',"\u2308":'lceil',"\u2309":'rceil',"\u230A":'lfloor',"\u230B":'rfloor',"\u2985":'lopar',"\u2986":'ropar',"\u298B":'lbrke',"\u298C":'rbrke',"\u298D":'lbrkslu',"\u298E":'rbrksld',"\u298F":'lbrksld',"\u2990":'rbrkslu',"\u2991":'langd',"\u2992":'rangd',"\u2993":'lparlt',"\u2994":'rpargt',"\u2995":'gtlPar',"\u2996":'ltrPar',"\u27E6":'lobrk',"\u27E7":'robrk',"\u27E8":'lang',"\u27E9":'rang',"\u27EA":'Lang',"\u27EB":'Rang',"\u27EC":'loang',"\u27ED":'roang',"\u2772":'lbbrk',"\u2773":'rbbrk',"\u2016":'Vert','\xA7':'sect','\xB6':'para','@':'commat','*':'ast','/':'sol','undefined':null,'&':'amp','#':'num','%':'percnt',"\u2030":'permil',"\u2031":'pertenk',"\u2020":'dagger',"\u2021":'Dagger',"\u2022":'bull',"\u2043":'hybull',"\u2032":'prime',"\u2033":'Prime',"\u2034":'tprime',"\u2057":'qprime',"\u2035":'bprime',"\u2041":'caret','`':'grave','\xB4':'acute',"\u02DC":'tilde','^':'Hat','\xAF':'macr',"\u02D8":'breve',"\u02D9":'dot','\xA8':'die',"\u02DA":'ring',"\u02DD":'dblac','\xB8':'cedil',"\u02DB":'ogon',"\u02C6":'circ',"\u02C7":'caron','\xB0':'deg','\xA9':'copy','\xAE':'reg',"\u2117":'copysr',"\u2118":'wp',"\u211E":'rx',"\u2127":'mho',"\u2129":'iiota',"\u2190":'larr',"\u219A":'nlarr',"\u2192":'rarr',"\u219B":'nrarr',"\u2191":'uarr',"\u2193":'darr',"\u2194":'harr',"\u21AE":'nharr',"\u2195":'varr',"\u2196":'nwarr',"\u2197":'nearr',"\u2198":'searr',"\u2199":'swarr',"\u219D":'rarrw',"\u219D\u0338":'nrarrw',"\u219E":'Larr',"\u219F":'Uarr',"\u21A0":'Rarr',"\u21A1":'Darr',"\u21A2":'larrtl',"\u21A3":'rarrtl',"\u21A4":'mapstoleft',"\u21A5":'mapstoup',"\u21A6":'map',"\u21A7":'mapstodown',"\u21A9":'larrhk',"\u21AA":'rarrhk',"\u21AB":'larrlp',"\u21AC":'rarrlp',"\u21AD":'harrw',"\u21B0":'lsh',"\u21B1":'rsh',"\u21B2":'ldsh',"\u21B3":'rdsh',"\u21B5":'crarr',"\u21B6":'cularr',"\u21B7":'curarr',"\u21BA":'olarr',"\u21BB":'orarr',"\u21BC":'lharu',"\u21BD":'lhard',"\u21BE":'uharr',"\u21BF":'uharl',"\u21C0":'rharu',"\u21C1":'rhard',"\u21C2":'dharr',"\u21C3":'dharl',"\u21C4":'rlarr',"\u21C5":'udarr',"\u21C6":'lrarr',"\u21C7":'llarr',"\u21C8":'uuarr',"\u21C9":'rrarr',"\u21CA":'ddarr',"\u21CB":'lrhar',"\u21CC":'rlhar',"\u21D0":'lArr',"\u21CD":'nlArr',"\u21D1":'uArr',"\u21D2":'rArr',"\u21CF":'nrArr',"\u21D3":'dArr',"\u21D4":'iff',"\u21CE":'nhArr',"\u21D5":'vArr',"\u21D6":'nwArr',"\u21D7":'neArr',"\u21D8":'seArr',"\u21D9":'swArr',"\u21DA":'lAarr',"\u21DB":'rAarr',"\u21DD":'zigrarr',"\u21E4":'larrb',"\u21E5":'rarrb',"\u21F5":'duarr',"\u21FD":'loarr',"\u21FE":'roarr',"\u21FF":'hoarr',"\u2200":'forall',"\u2201":'comp',"\u2202":'part',"\u2202\u0338":'npart',"\u2203":'exist',"\u2204":'nexist',"\u2205":'empty',"\u2207":'Del',"\u2208":'in',"\u2209":'notin',"\u220B":'ni',"\u220C":'notni',"\u03F6":'bepsi',"\u220F":'prod',"\u2210":'coprod',"\u2211":'sum','+':'plus','\xB1':'pm','\xF7':'div','\xD7':'times','<':'lt',"\u226E":'nlt',"<\u20D2":'nvlt','=':'equals',"\u2260":'ne',"=\u20E5":'bne',"\u2A75":'Equal','>':'gt',"\u226F":'ngt',">\u20D2":'nvgt','\xAC':'not','|':'vert','\xA6':'brvbar',"\u2212":'minus',"\u2213":'mp',"\u2214":'plusdo',"\u2044":'frasl',"\u2216":'setmn',"\u2217":'lowast',"\u2218":'compfn',"\u221A":'Sqrt',"\u221D":'prop',"\u221E":'infin',"\u221F":'angrt',"\u2220":'ang',"\u2220\u20D2":'nang',"\u2221":'angmsd',"\u2222":'angsph',"\u2223":'mid',"\u2224":'nmid',"\u2225":'par',"\u2226":'npar',"\u2227":'and',"\u2228":'or',"\u2229":'cap',"\u2229\uFE00":'caps',"\u222A":'cup',"\u222A\uFE00":'cups',"\u222B":'int',"\u222C":'Int',"\u222D":'tint',"\u2A0C":'qint',"\u222E":'oint',"\u222F":'Conint',"\u2230":'Cconint',"\u2231":'cwint',"\u2232":'cwconint',"\u2233":'awconint',"\u2234":'there4',"\u2235":'becaus',"\u2236":'ratio',"\u2237":'Colon',"\u2238":'minusd',"\u223A":'mDDot',"\u223B":'homtht',"\u223C":'sim',"\u2241":'nsim',"\u223C\u20D2":'nvsim',"\u223D":'bsim',"\u223D\u0331":'race',"\u223E":'ac',"\u223E\u0333":'acE',"\u223F":'acd',"\u2240":'wr',"\u2242":'esim',"\u2242\u0338":'nesim',"\u2243":'sime',"\u2244":'nsime',"\u2245":'cong',"\u2247":'ncong',"\u2246":'simne',"\u2248":'ap',"\u2249":'nap',"\u224A":'ape',"\u224B":'apid',"\u224B\u0338":'napid',"\u224C":'bcong',"\u224D":'CupCap',"\u226D":'NotCupCap',"\u224D\u20D2":'nvap',"\u224E":'bump',"\u224E\u0338":'nbump',"\u224F":'bumpe',"\u224F\u0338":'nbumpe',"\u2250":'doteq',"\u2250\u0338":'nedot',"\u2251":'eDot',"\u2252":'efDot',"\u2253":'erDot',"\u2254":'colone',"\u2255":'ecolon',"\u2256":'ecir',"\u2257":'cire',"\u2259":'wedgeq',"\u225A":'veeeq',"\u225C":'trie',"\u225F":'equest',"\u2261":'equiv',"\u2262":'nequiv',"\u2261\u20E5":'bnequiv',"\u2264":'le',"\u2270":'nle',"\u2264\u20D2":'nvle',"\u2265":'ge',"\u2271":'nge',"\u2265\u20D2":'nvge',"\u2266":'lE',"\u2266\u0338":'nlE',"\u2267":'gE',"\u2267\u0338":'ngE',"\u2268\uFE00":'lvnE',"\u2268":'lnE',"\u2269":'gnE',"\u2269\uFE00":'gvnE',"\u226A":'ll',"\u226A\u0338":'nLtv',"\u226A\u20D2":'nLt',"\u226B":'gg',"\u226B\u0338":'nGtv',"\u226B\u20D2":'nGt',"\u226C":'twixt',"\u2272":'lsim',"\u2274":'nlsim',"\u2273":'gsim',"\u2275":'ngsim',"\u2276":'lg',"\u2278":'ntlg',"\u2277":'gl',"\u2279":'ntgl',"\u227A":'pr',"\u2280":'npr',"\u227B":'sc',"\u2281":'nsc',"\u227C":'prcue',"\u22E0":'nprcue',"\u227D":'sccue',"\u22E1":'nsccue',"\u227E":'prsim',"\u227F":'scsim',"\u227F\u0338":'NotSucceedsTilde',"\u2282":'sub',"\u2284":'nsub',"\u2282\u20D2":'vnsub',"\u2283":'sup',"\u2285":'nsup',"\u2283\u20D2":'vnsup',"\u2286":'sube',"\u2288":'nsube',"\u2287":'supe',"\u2289":'nsupe',"\u228A\uFE00":'vsubne',"\u228A":'subne',"\u228B\uFE00":'vsupne',"\u228B":'supne',"\u228D":'cupdot',"\u228E":'uplus',"\u228F":'sqsub',"\u228F\u0338":'NotSquareSubset',"\u2290":'sqsup',"\u2290\u0338":'NotSquareSuperset',"\u2291":'sqsube',"\u22E2":'nsqsube',"\u2292":'sqsupe',"\u22E3":'nsqsupe',"\u2293":'sqcap',"\u2293\uFE00":'sqcaps',"\u2294":'sqcup',"\u2294\uFE00":'sqcups',"\u2295":'oplus',"\u2296":'ominus',"\u2297":'otimes',"\u2298":'osol',"\u2299":'odot',"\u229A":'ocir',"\u229B":'oast',"\u229D":'odash',"\u229E":'plusb',"\u229F":'minusb',"\u22A0":'timesb',"\u22A1":'sdotb',"\u22A2":'vdash',"\u22AC":'nvdash',"\u22A3":'dashv',"\u22A4":'top',"\u22A5":'bot',"\u22A7":'models',"\u22A8":'vDash',"\u22AD":'nvDash',"\u22A9":'Vdash',"\u22AE":'nVdash',"\u22AA":'Vvdash',"\u22AB":'VDash',"\u22AF":'nVDash',"\u22B0":'prurel',"\u22B2":'vltri',"\u22EA":'nltri',"\u22B3":'vrtri',"\u22EB":'nrtri',"\u22B4":'ltrie',"\u22EC":'nltrie',"\u22B4\u20D2":'nvltrie',"\u22B5":'rtrie',"\u22ED":'nrtrie',"\u22B5\u20D2":'nvrtrie',"\u22B6":'origof',"\u22B7":'imof',"\u22B8":'mumap',"\u22B9":'hercon',"\u22BA":'intcal',"\u22BB":'veebar',"\u22BD":'barvee',"\u22BE":'angrtvb',"\u22BF":'lrtri',"\u22C0":'Wedge',"\u22C1":'Vee',"\u22C2":'xcap',"\u22C3":'xcup',"\u22C4":'diam',"\u22C5":'sdot',"\u22C6":'Star',"\u22C7":'divonx',"\u22C8":'bowtie',"\u22C9":'ltimes',"\u22CA":'rtimes',"\u22CB":'lthree',"\u22CC":'rthree',"\u22CD":'bsime',"\u22CE":'cuvee',"\u22CF":'cuwed',"\u22D0":'Sub',"\u22D1":'Sup',"\u22D2":'Cap',"\u22D3":'Cup',"\u22D4":'fork',"\u22D5":'epar',"\u22D6":'ltdot',"\u22D7":'gtdot',"\u22D8":'Ll',"\u22D8\u0338":'nLl',"\u22D9":'Gg',"\u22D9\u0338":'nGg',"\u22DA\uFE00":'lesg',"\u22DA":'leg',"\u22DB":'gel',"\u22DB\uFE00":'gesl',"\u22DE":'cuepr',"\u22DF":'cuesc',"\u22E6":'lnsim',"\u22E7":'gnsim',"\u22E8":'prnsim',"\u22E9":'scnsim',"\u22EE":'vellip',"\u22EF":'ctdot',"\u22F0":'utdot',"\u22F1":'dtdot',"\u22F2":'disin',"\u22F3":'isinsv',"\u22F4":'isins',"\u22F5":'isindot',"\u22F5\u0338":'notindot',"\u22F6":'notinvc',"\u22F7":'notinvb',"\u22F9":'isinE',"\u22F9\u0338":'notinE',"\u22FA":'nisd',"\u22FB":'xnis',"\u22FC":'nis',"\u22FD":'notnivc',"\u22FE":'notnivb',"\u2305":'barwed',"\u2306":'Barwed',"\u230C":'drcrop',"\u230D":'dlcrop',"\u230E":'urcrop',"\u230F":'ulcrop',"\u2310":'bnot',"\u2312":'profline',"\u2313":'profsurf',"\u2315":'telrec',"\u2316":'target',"\u231C":'ulcorn',"\u231D":'urcorn',"\u231E":'dlcorn',"\u231F":'drcorn',"\u2322":'frown',"\u2323":'smile',"\u232D":'cylcty',"\u232E":'profalar',"\u2336":'topbot',"\u233D":'ovbar',"\u233F":'solbar',"\u237C":'angzarr',"\u23B0":'lmoust',"\u23B1":'rmoust',"\u23B4":'tbrk',"\u23B5":'bbrk',"\u23B6":'bbrktbrk',"\u23DC":'OverParenthesis',"\u23DD":'UnderParenthesis',"\u23DE":'OverBrace',"\u23DF":'UnderBrace',"\u23E2":'trpezium',"\u23E7":'elinters',"\u2423":'blank',"\u2500":'boxh',"\u2502":'boxv',"\u250C":'boxdr',"\u2510":'boxdl',"\u2514":'boxur',"\u2518":'boxul',"\u251C":'boxvr',"\u2524":'boxvl',"\u252C":'boxhd',"\u2534":'boxhu',"\u253C":'boxvh',"\u2550":'boxH',"\u2551":'boxV',"\u2552":'boxdR',"\u2553":'boxDr',"\u2554":'boxDR',"\u2555":'boxdL',"\u2556":'boxDl',"\u2557":'boxDL',"\u2558":'boxuR',"\u2559":'boxUr',"\u255A":'boxUR',"\u255B":'boxuL',"\u255C":'boxUl',"\u255D":'boxUL',"\u255E":'boxvR',"\u255F":'boxVr',"\u2560":'boxVR',"\u2561":'boxvL',"\u2562":'boxVl',"\u2563":'boxVL',"\u2564":'boxHd',"\u2565":'boxhD',"\u2566":'boxHD',"\u2567":'boxHu',"\u2568":'boxhU',"\u2569":'boxHU',"\u256A":'boxvH',"\u256B":'boxVh',"\u256C":'boxVH',"\u2580":'uhblk',"\u2584":'lhblk',"\u2588":'block',"\u2591":'blk14',"\u2592":'blk12',"\u2593":'blk34',"\u25A1":'squ',"\u25AA":'squf',"\u25AB":'EmptyVerySmallSquare',"\u25AD":'rect',"\u25AE":'marker',"\u25B1":'fltns',"\u25B3":'xutri',"\u25B4":'utrif',"\u25B5":'utri',"\u25B8":'rtrif',"\u25B9":'rtri',"\u25BD":'xdtri',"\u25BE":'dtrif',"\u25BF":'dtri',"\u25C2":'ltrif',"\u25C3":'ltri',"\u25CA":'loz',"\u25CB":'cir',"\u25EC":'tridot',"\u25EF":'xcirc',"\u25F8":'ultri',"\u25F9":'urtri',"\u25FA":'lltri',"\u25FB":'EmptySmallSquare',"\u25FC":'FilledSmallSquare',"\u2605":'starf',"\u2606":'star',"\u260E":'phone',"\u2640":'female',"\u2642":'male',"\u2660":'spades',"\u2663":'clubs',"\u2665":'hearts',"\u2666":'diams',"\u266A":'sung',"\u2713":'check',"\u2717":'cross',"\u2720":'malt',"\u2736":'sext',"\u2758":'VerticalSeparator',"\u27C8":'bsolhsub',"\u27C9":'suphsol',"\u27F5":'xlarr',"\u27F6":'xrarr',"\u27F7":'xharr',"\u27F8":'xlArr',"\u27F9":'xrArr',"\u27FA":'xhArr',"\u27FC":'xmap',"\u27FF":'dzigrarr',"\u2902":'nvlArr',"\u2903":'nvrArr',"\u2904":'nvHarr',"\u2905":'Map',"\u290C":'lbarr',"\u290D":'rbarr',"\u290E":'lBarr',"\u290F":'rBarr',"\u2910":'RBarr',"\u2911":'DDotrahd',"\u2912":'UpArrowBar',"\u2913":'DownArrowBar',"\u2916":'Rarrtl',"\u2919":'latail',"\u291A":'ratail',"\u291B":'lAtail',"\u291C":'rAtail',"\u291D":'larrfs',"\u291E":'rarrfs',"\u291F":'larrbfs',"\u2920":'rarrbfs',"\u2923":'nwarhk',"\u2924":'nearhk',"\u2925":'searhk',"\u2926":'swarhk',"\u2927":'nwnear',"\u2928":'toea',"\u2929":'tosa',"\u292A":'swnwar',"\u2933":'rarrc',"\u2933\u0338":'nrarrc',"\u2935":'cudarrr',"\u2936":'ldca',"\u2937":'rdca',"\u2938":'cudarrl',"\u2939":'larrpl',"\u293C":'curarrm',"\u293D":'cularrp',"\u2945":'rarrpl',"\u2948":'harrcir',"\u2949":'Uarrocir',"\u294A":'lurdshar',"\u294B":'ldrushar',"\u294E":'LeftRightVector',"\u294F":'RightUpDownVector',"\u2950":'DownLeftRightVector',"\u2951":'LeftUpDownVector',"\u2952":'LeftVectorBar',"\u2953":'RightVectorBar',"\u2954":'RightUpVectorBar',"\u2955":'RightDownVectorBar',"\u2956":'DownLeftVectorBar',"\u2957":'DownRightVectorBar',"\u2958":'LeftUpVectorBar',"\u2959":'LeftDownVectorBar',"\u295A":'LeftTeeVector',"\u295B":'RightTeeVector',"\u295C":'RightUpTeeVector',"\u295D":'RightDownTeeVector',"\u295E":'DownLeftTeeVector',"\u295F":'DownRightTeeVector',"\u2960":'LeftUpTeeVector',"\u2961":'LeftDownTeeVector',"\u2962":'lHar',"\u2963":'uHar',"\u2964":'rHar',"\u2965":'dHar',"\u2966":'luruhar',"\u2967":'ldrdhar',"\u2968":'ruluhar',"\u2969":'rdldhar',"\u296A":'lharul',"\u296B":'llhard',"\u296C":'rharul',"\u296D":'lrhard',"\u296E":'udhar',"\u296F":'duhar',"\u2970":'RoundImplies',"\u2971":'erarr',"\u2972":'simrarr',"\u2973":'larrsim',"\u2974":'rarrsim',"\u2975":'rarrap',"\u2976":'ltlarr',"\u2978":'gtrarr',"\u2979":'subrarr',"\u297B":'suplarr',"\u297C":'lfisht',"\u297D":'rfisht',"\u297E":'ufisht',"\u297F":'dfisht',"\u299A":'vzigzag',"\u299C":'vangrt',"\u299D":'angrtvbd',"\u29A4":'ange',"\u29A5":'range',"\u29A6":'dwangle',"\u29A7":'uwangle',"\u29A8":'angmsdaa',"\u29A9":'angmsdab',"\u29AA":'angmsdac',"\u29AB":'angmsdad',"\u29AC":'angmsdae',"\u29AD":'angmsdaf',"\u29AE":'angmsdag',"\u29AF":'angmsdah',"\u29B0":'bemptyv',"\u29B1":'demptyv',"\u29B2":'cemptyv',"\u29B3":'raemptyv',"\u29B4":'laemptyv',"\u29B5":'ohbar',"\u29B6":'omid',"\u29B7":'opar',"\u29B9":'operp',"\u29BB":'olcross',"\u29BC":'odsold',"\u29BE":'olcir',"\u29BF":'ofcir',"\u29C0":'olt',"\u29C1":'ogt',"\u29C2":'cirscir',"\u29C3":'cirE',"\u29C4":'solb',"\u29C5":'bsolb',"\u29C9":'boxbox',"\u29CD":'trisb',"\u29CE":'rtriltri',"\u29CF":'LeftTriangleBar',"\u29CF\u0338":'NotLeftTriangleBar',"\u29D0":'RightTriangleBar',"\u29D0\u0338":'NotRightTriangleBar',"\u29DC":'iinfin',"\u29DD":'infintie',"\u29DE":'nvinfin',"\u29E3":'eparsl',"\u29E4":'smeparsl',"\u29E5":'eqvparsl',"\u29EB":'lozf',"\u29F4":'RuleDelayed',"\u29F6":'dsol',"\u2A00":'xodot',"\u2A01":'xoplus',"\u2A02":'xotime',"\u2A04":'xuplus',"\u2A06":'xsqcup',"\u2A0D":'fpartint',"\u2A10":'cirfnint',"\u2A11":'awint',"\u2A12":'rppolint',"\u2A13":'scpolint',"\u2A14":'npolint',"\u2A15":'pointint',"\u2A16":'quatint',"\u2A17":'intlarhk',"\u2A22":'pluscir',"\u2A23":'plusacir',"\u2A24":'simplus',"\u2A25":'plusdu',"\u2A26":'plussim',"\u2A27":'plustwo',"\u2A29":'mcomma',"\u2A2A":'minusdu',"\u2A2D":'loplus',"\u2A2E":'roplus',"\u2A2F":'Cross',"\u2A30":'timesd',"\u2A31":'timesbar',"\u2A33":'smashp',"\u2A34":'lotimes',"\u2A35":'rotimes',"\u2A36":'otimesas',"\u2A37":'Otimes',"\u2A38":'odiv',"\u2A39":'triplus',"\u2A3A":'triminus',"\u2A3B":'tritime',"\u2A3C":'iprod',"\u2A3F":'amalg',"\u2A40":'capdot',"\u2A42":'ncup',"\u2A43":'ncap',"\u2A44":'capand',"\u2A45":'cupor',"\u2A46":'cupcap',"\u2A47":'capcup',"\u2A48":'cupbrcap',"\u2A49":'capbrcup',"\u2A4A":'cupcup',"\u2A4B":'capcap',"\u2A4C":'ccups',"\u2A4D":'ccaps',"\u2A50":'ccupssm',"\u2A53":'And',"\u2A54":'Or',"\u2A55":'andand',"\u2A56":'oror',"\u2A57":'orslope',"\u2A58":'andslope',"\u2A5A":'andv',"\u2A5B":'orv',"\u2A5C":'andd',"\u2A5D":'ord',"\u2A5F":'wedbar',"\u2A66":'sdote',"\u2A6A":'simdot',"\u2A6D":'congdot',"\u2A6D\u0338":'ncongdot',"\u2A6E":'easter',"\u2A6F":'apacir',"\u2A70":'apE',"\u2A70\u0338":'napE',"\u2A71":'eplus',"\u2A72":'pluse',"\u2A73":'Esim',"\u2A77":'eDDot',"\u2A78":'equivDD',"\u2A79":'ltcir',"\u2A7A":'gtcir',"\u2A7B":'ltquest',"\u2A7C":'gtquest',"\u2A7D":'les',"\u2A7D\u0338":'nles',"\u2A7E":'ges',"\u2A7E\u0338":'nges',"\u2A7F":'lesdot',"\u2A80":'gesdot',"\u2A81":'lesdoto',"\u2A82":'gesdoto',"\u2A83":'lesdotor',"\u2A84":'gesdotol',"\u2A85":'lap',"\u2A86":'gap',"\u2A87":'lne',"\u2A88":'gne',"\u2A89":'lnap',"\u2A8A":'gnap',"\u2A8B":'lEg',"\u2A8C":'gEl',"\u2A8D":'lsime',"\u2A8E":'gsime',"\u2A8F":'lsimg',"\u2A90":'gsiml',"\u2A91":'lgE',"\u2A92":'glE',"\u2A93":'lesges',"\u2A94":'gesles',"\u2A95":'els',"\u2A96":'egs',"\u2A97":'elsdot',"\u2A98":'egsdot',"\u2A99":'el',"\u2A9A":'eg',"\u2A9D":'siml',"\u2A9E":'simg',"\u2A9F":'simlE',"\u2AA0":'simgE',"\u2AA1":'LessLess',"\u2AA1\u0338":'NotNestedLessLess',"\u2AA2":'GreaterGreater',"\u2AA2\u0338":'NotNestedGreaterGreater',"\u2AA4":'glj',"\u2AA5":'gla',"\u2AA6":'ltcc',"\u2AA7":'gtcc',"\u2AA8":'lescc',"\u2AA9":'gescc',"\u2AAA":'smt',"\u2AAB":'lat',"\u2AAC":'smte',"\u2AAC\uFE00":'smtes',"\u2AAD":'late',"\u2AAD\uFE00":'lates',"\u2AAE":'bumpE',"\u2AAF":'pre',"\u2AAF\u0338":'npre',"\u2AB0":'sce',"\u2AB0\u0338":'nsce',"\u2AB3":'prE',"\u2AB4":'scE',"\u2AB5":'prnE',"\u2AB6":'scnE',"\u2AB7":'prap',"\u2AB8":'scap',"\u2AB9":'prnap',"\u2ABA":'scnap',"\u2ABB":'Pr',"\u2ABC":'Sc',"\u2ABD":'subdot',"\u2ABE":'supdot',"\u2ABF":'subplus',"\u2AC0":'supplus',"\u2AC1":'submult',"\u2AC2":'supmult',"\u2AC3":'subedot',"\u2AC4":'supedot',"\u2AC5":'subE',"\u2AC5\u0338":'nsubE',"\u2AC6":'supE',"\u2AC6\u0338":'nsupE',"\u2AC7":'subsim',"\u2AC8":'supsim',"\u2ACB\uFE00":'vsubnE',"\u2ACB":'subnE',"\u2ACC\uFE00":'vsupnE',"\u2ACC":'supnE',"\u2ACF":'csub',"\u2AD0":'csup',"\u2AD1":'csube',"\u2AD2":'csupe',"\u2AD3":'subsup',"\u2AD4":'supsub',"\u2AD5":'subsub',"\u2AD6":'supsup',"\u2AD7":'suphsub',"\u2AD8":'supdsub',"\u2AD9":'forkv',"\u2ADA":'topfork',"\u2ADB":'mlcp',"\u2AE4":'Dashv',"\u2AE6":'Vdashl',"\u2AE7":'Barv',"\u2AE8":'vBar',"\u2AE9":'vBarv',"\u2AEB":'Vbar',"\u2AEC":'Not',"\u2AED":'bNot',"\u2AEE":'rnmid',"\u2AEF":'cirmid',"\u2AF0":'midcir',"\u2AF1":'topcir',"\u2AF2":'nhpar',"\u2AF3":'parsim',"\u2AFD":'parsl',"\u2AFD\u20E5":'nparsl',"\u266D":'flat',"\u266E":'natur',"\u266F":'sharp','\xA4':'curren','\xA2':'cent','$':'dollar','\xA3':'pound','\xA5':'yen',"\u20AC":'euro','\xB9':'sup1','\xBD':'half',"\u2153":'frac13','\xBC':'frac14',"\u2155":'frac15',"\u2159":'frac16',"\u215B":'frac18','\xB2':'sup2',"\u2154":'frac23',"\u2156":'frac25','\xB3':'sup3','\xBE':'frac34',"\u2157":'frac35',"\u215C":'frac38',"\u2158":'frac45',"\u215A":'frac56',"\u215D":'frac58',"\u215E":'frac78',"\uD835\uDCB6":'ascr',"\uD835\uDD52":'aopf',"\uD835\uDD1E":'afr',"\uD835\uDD38":'Aopf',"\uD835\uDD04":'Afr',"\uD835\uDC9C":'Ascr','\xAA':'ordf','\xE1':'aacute','\xC1':'Aacute','\xE0':'agrave','\xC0':'Agrave',"\u0103":'abreve',"\u0102":'Abreve','\xE2':'acirc','\xC2':'Acirc','\xE5':'aring','\xC5':'angst','\xE4':'auml','\xC4':'Auml','\xE3':'atilde','\xC3':'Atilde',"\u0105":'aogon',"\u0104":'Aogon',"\u0101":'amacr',"\u0100":'Amacr','\xE6':'aelig','\xC6':'AElig',"\uD835\uDCB7":'bscr',"\uD835\uDD53":'bopf',"\uD835\uDD1F":'bfr',"\uD835\uDD39":'Bopf',"\u212C":'Bscr',"\uD835\uDD05":'Bfr',"\uD835\uDD20":'cfr',"\uD835\uDCB8":'cscr',"\uD835\uDD54":'copf',"\u212D":'Cfr',"\uD835\uDC9E":'Cscr',"\u2102":'Copf',"\u0107":'cacute',"\u0106":'Cacute',"\u0109":'ccirc',"\u0108":'Ccirc',"\u010D":'ccaron',"\u010C":'Ccaron',"\u010B":'cdot',"\u010A":'Cdot','\xE7':'ccedil','\xC7':'Ccedil',"\u2105":'incare',"\uD835\uDD21":'dfr',"\u2146":'dd',"\uD835\uDD55":'dopf',"\uD835\uDCB9":'dscr',"\uD835\uDC9F":'Dscr',"\uD835\uDD07":'Dfr',"\u2145":'DD',"\uD835\uDD3B":'Dopf',"\u010F":'dcaron',"\u010E":'Dcaron',"\u0111":'dstrok',"\u0110":'Dstrok','\xF0':'eth','\xD0':'ETH',"\u2147":'ee',"\u212F":'escr',"\uD835\uDD22":'efr',"\uD835\uDD56":'eopf',"\u2130":'Escr',"\uD835\uDD08":'Efr',"\uD835\uDD3C":'Eopf','\xE9':'eacute','\xC9':'Eacute','\xE8':'egrave','\xC8':'Egrave','\xEA':'ecirc','\xCA':'Ecirc',"\u011B":'ecaron',"\u011A":'Ecaron','\xEB':'euml','\xCB':'Euml',"\u0117":'edot',"\u0116":'Edot',"\u0119":'eogon',"\u0118":'Eogon',"\u0113":'emacr',"\u0112":'Emacr',"\uD835\uDD23":'ffr',"\uD835\uDD57":'fopf',"\uD835\uDCBB":'fscr',"\uD835\uDD09":'Ffr',"\uD835\uDD3D":'Fopf',"\u2131":'Fscr',"\uFB00":'fflig',"\uFB03":'ffilig',"\uFB04":'ffllig',"\uFB01":'filig','fj':'fjlig',"\uFB02":'fllig',"\u0192":'fnof',"\u210A":'gscr',"\uD835\uDD58":'gopf',"\uD835\uDD24":'gfr',"\uD835\uDCA2":'Gscr',"\uD835\uDD3E":'Gopf',"\uD835\uDD0A":'Gfr',"\u01F5":'gacute',"\u011F":'gbreve',"\u011E":'Gbreve',"\u011D":'gcirc',"\u011C":'Gcirc',"\u0121":'gdot',"\u0120":'Gdot',"\u0122":'Gcedil',"\uD835\uDD25":'hfr',"\u210E":'planckh',"\uD835\uDCBD":'hscr',"\uD835\uDD59":'hopf',"\u210B":'Hscr',"\u210C":'Hfr',"\u210D":'Hopf',"\u0125":'hcirc',"\u0124":'Hcirc',"\u210F":'hbar',"\u0127":'hstrok',"\u0126":'Hstrok',"\uD835\uDD5A":'iopf',"\uD835\uDD26":'ifr',"\uD835\uDCBE":'iscr',"\u2148":'ii',"\uD835\uDD40":'Iopf',"\u2110":'Iscr',"\u2111":'Im','\xED':'iacute','\xCD':'Iacute','\xEC':'igrave','\xCC':'Igrave','\xEE':'icirc','\xCE':'Icirc','\xEF':'iuml','\xCF':'Iuml',"\u0129":'itilde',"\u0128":'Itilde',"\u0130":'Idot',"\u012F":'iogon',"\u012E":'Iogon',"\u012B":'imacr',"\u012A":'Imacr',"\u0133":'ijlig',"\u0132":'IJlig',"\u0131":'imath',"\uD835\uDCBF":'jscr',"\uD835\uDD5B":'jopf',"\uD835\uDD27":'jfr',"\uD835\uDCA5":'Jscr',"\uD835\uDD0D":'Jfr',"\uD835\uDD41":'Jopf',"\u0135":'jcirc',"\u0134":'Jcirc',"\u0237":'jmath',"\uD835\uDD5C":'kopf',"\uD835\uDCC0":'kscr',"\uD835\uDD28":'kfr',"\uD835\uDCA6":'Kscr',"\uD835\uDD42":'Kopf',"\uD835\uDD0E":'Kfr',"\u0137":'kcedil',"\u0136":'Kcedil',"\uD835\uDD29":'lfr',"\uD835\uDCC1":'lscr',"\u2113":'ell',"\uD835\uDD5D":'lopf',"\u2112":'Lscr',"\uD835\uDD0F":'Lfr',"\uD835\uDD43":'Lopf',"\u013A":'lacute',"\u0139":'Lacute',"\u013E":'lcaron',"\u013D":'Lcaron',"\u013C":'lcedil',"\u013B":'Lcedil',"\u0142":'lstrok',"\u0141":'Lstrok',"\u0140":'lmidot',"\u013F":'Lmidot',"\uD835\uDD2A":'mfr',"\uD835\uDD5E":'mopf',"\uD835\uDCC2":'mscr',"\uD835\uDD10":'Mfr',"\uD835\uDD44":'Mopf',"\u2133":'Mscr',"\uD835\uDD2B":'nfr',"\uD835\uDD5F":'nopf',"\uD835\uDCC3":'nscr',"\u2115":'Nopf',"\uD835\uDCA9":'Nscr',"\uD835\uDD11":'Nfr',"\u0144":'nacute',"\u0143":'Nacute',"\u0148":'ncaron',"\u0147":'Ncaron','\xF1':'ntilde','\xD1':'Ntilde',"\u0146":'ncedil',"\u0145":'Ncedil',"\u2116":'numero',"\u014B":'eng',"\u014A":'ENG',"\uD835\uDD60":'oopf',"\uD835\uDD2C":'ofr',"\u2134":'oscr',"\uD835\uDCAA":'Oscr',"\uD835\uDD12":'Ofr',"\uD835\uDD46":'Oopf','\xBA':'ordm','\xF3':'oacute','\xD3':'Oacute','\xF2':'ograve','\xD2':'Ograve','\xF4':'ocirc','\xD4':'Ocirc','\xF6':'ouml','\xD6':'Ouml',"\u0151":'odblac',"\u0150":'Odblac','\xF5':'otilde','\xD5':'Otilde','\xF8':'oslash','\xD8':'Oslash',"\u014D":'omacr',"\u014C":'Omacr',"\u0153":'oelig',"\u0152":'OElig',"\uD835\uDD2D":'pfr',"\uD835\uDCC5":'pscr',"\uD835\uDD61":'popf',"\u2119":'Popf',"\uD835\uDD13":'Pfr',"\uD835\uDCAB":'Pscr',"\uD835\uDD62":'qopf',"\uD835\uDD2E":'qfr',"\uD835\uDCC6":'qscr',"\uD835\uDCAC":'Qscr',"\uD835\uDD14":'Qfr',"\u211A":'Qopf',"\u0138":'kgreen',"\uD835\uDD2F":'rfr',"\uD835\uDD63":'ropf',"\uD835\uDCC7":'rscr',"\u211B":'Rscr',"\u211C":'Re',"\u211D":'Ropf',"\u0155":'racute',"\u0154":'Racute',"\u0159":'rcaron',"\u0158":'Rcaron',"\u0157":'rcedil',"\u0156":'Rcedil',"\uD835\uDD64":'sopf',"\uD835\uDCC8":'sscr',"\uD835\uDD30":'sfr',"\uD835\uDD4A":'Sopf',"\uD835\uDD16":'Sfr',"\uD835\uDCAE":'Sscr',"\u24C8":'oS',"\u015B":'sacute',"\u015A":'Sacute',"\u015D":'scirc',"\u015C":'Scirc',"\u0161":'scaron',"\u0160":'Scaron',"\u015F":'scedil',"\u015E":'Scedil','\xDF':'szlig',"\uD835\uDD31":'tfr',"\uD835\uDCC9":'tscr',"\uD835\uDD65":'topf',"\uD835\uDCAF":'Tscr',"\uD835\uDD17":'Tfr',"\uD835\uDD4B":'Topf',"\u0165":'tcaron',"\u0164":'Tcaron',"\u0163":'tcedil',"\u0162":'Tcedil',"\u2122":'trade',"\u0167":'tstrok',"\u0166":'Tstrok',"\uD835\uDCCA":'uscr',"\uD835\uDD66":'uopf',"\uD835\uDD32":'ufr',"\uD835\uDD4C":'Uopf',"\uD835\uDD18":'Ufr',"\uD835\uDCB0":'Uscr','\xFA':'uacute','\xDA':'Uacute','\xF9':'ugrave','\xD9':'Ugrave',"\u016D":'ubreve',"\u016C":'Ubreve','\xFB':'ucirc','\xDB':'Ucirc',"\u016F":'uring',"\u016E":'Uring','\xFC':'uuml','\xDC':'Uuml',"\u0171":'udblac',"\u0170":'Udblac',"\u0169":'utilde',"\u0168":'Utilde',"\u0173":'uogon',"\u0172":'Uogon',"\u016B":'umacr',"\u016A":'Umacr',"\uD835\uDD33":'vfr',"\uD835\uDD67":'vopf',"\uD835\uDCCB":'vscr',"\uD835\uDD19":'Vfr',"\uD835\uDD4D":'Vopf',"\uD835\uDCB1":'Vscr',"\uD835\uDD68":'wopf',"\uD835\uDCCC":'wscr',"\uD835\uDD34":'wfr',"\uD835\uDCB2":'Wscr',"\uD835\uDD4E":'Wopf',"\uD835\uDD1A":'Wfr',"\u0175":'wcirc',"\u0174":'Wcirc',"\uD835\uDD35":'xfr',"\uD835\uDCCD":'xscr',"\uD835\uDD69":'xopf',"\uD835\uDD4F":'Xopf',"\uD835\uDD1B":'Xfr',"\uD835\uDCB3":'Xscr',"\uD835\uDD36":'yfr',"\uD835\uDCCE":'yscr',"\uD835\uDD6A":'yopf',"\uD835\uDCB4":'Yscr',"\uD835\uDD1C":'Yfr',"\uD835\uDD50":'Yopf','\xFD':'yacute','\xDD':'Yacute',"\u0177":'ycirc',"\u0176":'Ycirc','\xFF':'yuml',"\u0178":'Yuml',"\uD835\uDCCF":'zscr',"\uD835\uDD37":'zfr',"\uD835\uDD6B":'zopf',"\u2128":'Zfr',"\u2124":'Zopf',"\uD835\uDCB5":'Zscr',"\u017A":'zacute',"\u0179":'Zacute',"\u017E":'zcaron',"\u017D":'Zcaron',"\u017C":'zdot',"\u017B":'Zdot',"\u01B5":'imped','\xFE':'thorn','\xDE':'THORN',"\u0149":'napos',"\u03B1":'alpha',"\u0391":'Alpha',"\u03B2":'beta',"\u0392":'Beta',"\u03B3":'gamma',"\u0393":'Gamma',"\u03B4":'delta',"\u0394":'Delta',"\u03B5":'epsi',"\u03F5":'epsiv',"\u0395":'Epsilon',"\u03DD":'gammad',"\u03DC":'Gammad',"\u03B6":'zeta',"\u0396":'Zeta',"\u03B7":'eta',"\u0397":'Eta',"\u03B8":'theta',"\u03D1":'thetav',"\u0398":'Theta',"\u03B9":'iota',"\u0399":'Iota',"\u03BA":'kappa',"\u03F0":'kappav',"\u039A":'Kappa',"\u03BB":'lambda',"\u039B":'Lambda',"\u03BC":'mu','\xB5':'micro',"\u039C":'Mu',"\u03BD":'nu',"\u039D":'Nu',"\u03BE":'xi',"\u039E":'Xi',"\u03BF":'omicron',"\u039F":'Omicron',"\u03C0":'pi',"\u03D6":'piv',"\u03A0":'Pi',"\u03C1":'rho',"\u03F1":'rhov',"\u03A1":'Rho',"\u03C3":'sigma',"\u03A3":'Sigma',"\u03C2":'sigmaf',"\u03C4":'tau',"\u03A4":'Tau',"\u03C5":'upsi',"\u03A5":'Upsilon',"\u03D2":'Upsi',"\u03C6":'phi',"\u03D5":'phiv',"\u03A6":'Phi',"\u03C7":'chi',"\u03A7":'Chi',"\u03C8":'psi',"\u03A8":'Psi',"\u03C9":'omega',"\u03A9":'ohm',"\u0430":'acy',"\u0410":'Acy',"\u0431":'bcy',"\u0411":'Bcy',"\u0432":'vcy',"\u0412":'Vcy',"\u0433":'gcy',"\u0413":'Gcy',"\u0453":'gjcy',"\u0403":'GJcy',"\u0434":'dcy',"\u0414":'Dcy',"\u0452":'djcy',"\u0402":'DJcy',"\u0435":'iecy',"\u0415":'IEcy',"\u0451":'iocy',"\u0401":'IOcy',"\u0454":'jukcy',"\u0404":'Jukcy',"\u0436":'zhcy',"\u0416":'ZHcy',"\u0437":'zcy',"\u0417":'Zcy',"\u0455":'dscy',"\u0405":'DScy',"\u0438":'icy',"\u0418":'Icy',"\u0456":'iukcy',"\u0406":'Iukcy',"\u0457":'yicy',"\u0407":'YIcy',"\u0439":'jcy',"\u0419":'Jcy',"\u0458":'jsercy',"\u0408":'Jsercy',"\u043A":'kcy',"\u041A":'Kcy',"\u045C":'kjcy',"\u040C":'KJcy',"\u043B":'lcy',"\u041B":'Lcy',"\u0459":'ljcy',"\u0409":'LJcy',"\u043C":'mcy',"\u041C":'Mcy',"\u043D":'ncy',"\u041D":'Ncy',"\u045A":'njcy',"\u040A":'NJcy',"\u043E":'ocy',"\u041E":'Ocy',"\u043F":'pcy',"\u041F":'Pcy',"\u0440":'rcy',"\u0420":'Rcy',"\u0441":'scy',"\u0421":'Scy',"\u0442":'tcy',"\u0422":'Tcy',"\u045B":'tshcy',"\u040B":'TSHcy',"\u0443":'ucy',"\u0423":'Ucy',"\u045E":'ubrcy',"\u040E":'Ubrcy',"\u0444":'fcy',"\u0424":'Fcy',"\u0445":'khcy',"\u0425":'KHcy',"\u0446":'tscy',"\u0426":'TScy',"\u0447":'chcy',"\u0427":'CHcy',"\u045F":'dzcy',"\u040F":'DZcy',"\u0448":'shcy',"\u0428":'SHcy',"\u0449":'shchcy',"\u0429":'SHCHcy',"\u044A":'hardcy',"\u042A":'HARDcy',"\u044B":'ycy',"\u042B":'Ycy',"\u044C":'softcy',"\u042C":'SOFTcy',"\u044D":'ecy',"\u042D":'Ecy',"\u044E":'yucy',"\u042E":'YUcy',"\u044F":'yacy',"\u042F":'YAcy',"\u2135":'aleph',"\u2136":'beth',"\u2137":'gimel',"\u2138":'daleth'};var regexEscape=/["&'<>`]/g;var escapeMap={'"':'&quot;','&':'&amp;','\'':'&#x27;','<':'&lt;',// See https://mathiasbynens.be/notes/ambiguous-ampersands: in HTML, the
// following is not strictly necessary unless it’s part of a tag or an
// unquoted attribute value. We’re only escaping it to support those
// situations, and for XML support.
'>':'&gt;',// In Internet Explorer ≤ 8, the backtick character can be used
// to break out of (un)quoted attribute values or HTML comments.
// See http://html5sec.org/#102, http://html5sec.org/#108, and
// http://html5sec.org/#133.
'`':'&#x60;'};var regexInvalidEntity=/&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/;var regexInvalidRawCodePoint=/[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;var regexDecode=/&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g;var decodeMap={'aacute':'\xE1','Aacute':'\xC1','abreve':"\u0103",'Abreve':"\u0102",'ac':"\u223E",'acd':"\u223F",'acE':"\u223E\u0333",'acirc':'\xE2','Acirc':'\xC2','acute':'\xB4','acy':"\u0430",'Acy':"\u0410",'aelig':'\xE6','AElig':'\xC6','af':"\u2061",'afr':"\uD835\uDD1E",'Afr':"\uD835\uDD04",'agrave':'\xE0','Agrave':'\xC0','alefsym':"\u2135",'aleph':"\u2135",'alpha':"\u03B1",'Alpha':"\u0391",'amacr':"\u0101",'Amacr':"\u0100",'amalg':"\u2A3F",'amp':'&','AMP':'&','and':"\u2227",'And':"\u2A53",'andand':"\u2A55",'andd':"\u2A5C",'andslope':"\u2A58",'andv':"\u2A5A",'ang':"\u2220",'ange':"\u29A4",'angle':"\u2220",'angmsd':"\u2221",'angmsdaa':"\u29A8",'angmsdab':"\u29A9",'angmsdac':"\u29AA",'angmsdad':"\u29AB",'angmsdae':"\u29AC",'angmsdaf':"\u29AD",'angmsdag':"\u29AE",'angmsdah':"\u29AF",'angrt':"\u221F",'angrtvb':"\u22BE",'angrtvbd':"\u299D",'angsph':"\u2222",'angst':'\xC5','angzarr':"\u237C",'aogon':"\u0105",'Aogon':"\u0104",'aopf':"\uD835\uDD52",'Aopf':"\uD835\uDD38",'ap':"\u2248",'apacir':"\u2A6F",'ape':"\u224A",'apE':"\u2A70",'apid':"\u224B",'apos':'\'','ApplyFunction':"\u2061",'approx':"\u2248",'approxeq':"\u224A",'aring':'\xE5','Aring':'\xC5','ascr':"\uD835\uDCB6",'Ascr':"\uD835\uDC9C",'Assign':"\u2254",'ast':'*','asymp':"\u2248",'asympeq':"\u224D",'atilde':'\xE3','Atilde':'\xC3','auml':'\xE4','Auml':'\xC4','awconint':"\u2233",'awint':"\u2A11",'backcong':"\u224C",'backepsilon':"\u03F6",'backprime':"\u2035",'backsim':"\u223D",'backsimeq':"\u22CD",'Backslash':"\u2216",'Barv':"\u2AE7",'barvee':"\u22BD",'barwed':"\u2305",'Barwed':"\u2306",'barwedge':"\u2305",'bbrk':"\u23B5",'bbrktbrk':"\u23B6",'bcong':"\u224C",'bcy':"\u0431",'Bcy':"\u0411",'bdquo':"\u201E",'becaus':"\u2235",'because':"\u2235",'Because':"\u2235",'bemptyv':"\u29B0",'bepsi':"\u03F6",'bernou':"\u212C",'Bernoullis':"\u212C",'beta':"\u03B2",'Beta':"\u0392",'beth':"\u2136",'between':"\u226C",'bfr':"\uD835\uDD1F",'Bfr':"\uD835\uDD05",'bigcap':"\u22C2",'bigcirc':"\u25EF",'bigcup':"\u22C3",'bigodot':"\u2A00",'bigoplus':"\u2A01",'bigotimes':"\u2A02",'bigsqcup':"\u2A06",'bigstar':"\u2605",'bigtriangledown':"\u25BD",'bigtriangleup':"\u25B3",'biguplus':"\u2A04",'bigvee':"\u22C1",'bigwedge':"\u22C0",'bkarow':"\u290D",'blacklozenge':"\u29EB",'blacksquare':"\u25AA",'blacktriangle':"\u25B4",'blacktriangledown':"\u25BE",'blacktriangleleft':"\u25C2",'blacktriangleright':"\u25B8",'blank':"\u2423",'blk12':"\u2592",'blk14':"\u2591",'blk34':"\u2593",'block':"\u2588",'bne':"=\u20E5",'bnequiv':"\u2261\u20E5",'bnot':"\u2310",'bNot':"\u2AED",'bopf':"\uD835\uDD53",'Bopf':"\uD835\uDD39",'bot':"\u22A5",'bottom':"\u22A5",'bowtie':"\u22C8",'boxbox':"\u29C9",'boxdl':"\u2510",'boxdL':"\u2555",'boxDl':"\u2556",'boxDL':"\u2557",'boxdr':"\u250C",'boxdR':"\u2552",'boxDr':"\u2553",'boxDR':"\u2554",'boxh':"\u2500",'boxH':"\u2550",'boxhd':"\u252C",'boxhD':"\u2565",'boxHd':"\u2564",'boxHD':"\u2566",'boxhu':"\u2534",'boxhU':"\u2568",'boxHu':"\u2567",'boxHU':"\u2569",'boxminus':"\u229F",'boxplus':"\u229E",'boxtimes':"\u22A0",'boxul':"\u2518",'boxuL':"\u255B",'boxUl':"\u255C",'boxUL':"\u255D",'boxur':"\u2514",'boxuR':"\u2558",'boxUr':"\u2559",'boxUR':"\u255A",'boxv':"\u2502",'boxV':"\u2551",'boxvh':"\u253C",'boxvH':"\u256A",'boxVh':"\u256B",'boxVH':"\u256C",'boxvl':"\u2524",'boxvL':"\u2561",'boxVl':"\u2562",'boxVL':"\u2563",'boxvr':"\u251C",'boxvR':"\u255E",'boxVr':"\u255F",'boxVR':"\u2560",'bprime':"\u2035",'breve':"\u02D8",'Breve':"\u02D8",'brvbar':'\xA6','bscr':"\uD835\uDCB7",'Bscr':"\u212C",'bsemi':"\u204F",'bsim':"\u223D",'bsime':"\u22CD",'bsol':'\\','bsolb':"\u29C5",'bsolhsub':"\u27C8",'bull':"\u2022",'bullet':"\u2022",'bump':"\u224E",'bumpe':"\u224F",'bumpE':"\u2AAE",'bumpeq':"\u224F",'Bumpeq':"\u224E",'cacute':"\u0107",'Cacute':"\u0106",'cap':"\u2229",'Cap':"\u22D2",'capand':"\u2A44",'capbrcup':"\u2A49",'capcap':"\u2A4B",'capcup':"\u2A47",'capdot':"\u2A40",'CapitalDifferentialD':"\u2145",'caps':"\u2229\uFE00",'caret':"\u2041",'caron':"\u02C7",'Cayleys':"\u212D",'ccaps':"\u2A4D",'ccaron':"\u010D",'Ccaron':"\u010C",'ccedil':'\xE7','Ccedil':'\xC7','ccirc':"\u0109",'Ccirc':"\u0108",'Cconint':"\u2230",'ccups':"\u2A4C",'ccupssm':"\u2A50",'cdot':"\u010B",'Cdot':"\u010A",'cedil':'\xB8','Cedilla':'\xB8','cemptyv':"\u29B2",'cent':'\xA2','centerdot':'\xB7','CenterDot':'\xB7','cfr':"\uD835\uDD20",'Cfr':"\u212D",'chcy':"\u0447",'CHcy':"\u0427",'check':"\u2713",'checkmark':"\u2713",'chi':"\u03C7",'Chi':"\u03A7",'cir':"\u25CB",'circ':"\u02C6",'circeq':"\u2257",'circlearrowleft':"\u21BA",'circlearrowright':"\u21BB",'circledast':"\u229B",'circledcirc':"\u229A",'circleddash':"\u229D",'CircleDot':"\u2299",'circledR':'\xAE','circledS':"\u24C8",'CircleMinus':"\u2296",'CirclePlus':"\u2295",'CircleTimes':"\u2297",'cire':"\u2257",'cirE':"\u29C3",'cirfnint':"\u2A10",'cirmid':"\u2AEF",'cirscir':"\u29C2",'ClockwiseContourIntegral':"\u2232",'CloseCurlyDoubleQuote':"\u201D",'CloseCurlyQuote':"\u2019",'clubs':"\u2663",'clubsuit':"\u2663",'colon':':','Colon':"\u2237",'colone':"\u2254",'Colone':"\u2A74",'coloneq':"\u2254",'comma':',','commat':'@','comp':"\u2201",'compfn':"\u2218",'complement':"\u2201",'complexes':"\u2102",'cong':"\u2245",'congdot':"\u2A6D",'Congruent':"\u2261",'conint':"\u222E",'Conint':"\u222F",'ContourIntegral':"\u222E",'copf':"\uD835\uDD54",'Copf':"\u2102",'coprod':"\u2210",'Coproduct':"\u2210",'copy':'\xA9','COPY':'\xA9','copysr':"\u2117",'CounterClockwiseContourIntegral':"\u2233",'crarr':"\u21B5",'cross':"\u2717",'Cross':"\u2A2F",'cscr':"\uD835\uDCB8",'Cscr':"\uD835\uDC9E",'csub':"\u2ACF",'csube':"\u2AD1",'csup':"\u2AD0",'csupe':"\u2AD2",'ctdot':"\u22EF",'cudarrl':"\u2938",'cudarrr':"\u2935",'cuepr':"\u22DE",'cuesc':"\u22DF",'cularr':"\u21B6",'cularrp':"\u293D",'cup':"\u222A",'Cup':"\u22D3",'cupbrcap':"\u2A48",'cupcap':"\u2A46",'CupCap':"\u224D",'cupcup':"\u2A4A",'cupdot':"\u228D",'cupor':"\u2A45",'cups':"\u222A\uFE00",'curarr':"\u21B7",'curarrm':"\u293C",'curlyeqprec':"\u22DE",'curlyeqsucc':"\u22DF",'curlyvee':"\u22CE",'curlywedge':"\u22CF",'curren':'\xA4','curvearrowleft':"\u21B6",'curvearrowright':"\u21B7",'cuvee':"\u22CE",'cuwed':"\u22CF",'cwconint':"\u2232",'cwint':"\u2231",'cylcty':"\u232D",'dagger':"\u2020",'Dagger':"\u2021",'daleth':"\u2138",'darr':"\u2193",'dArr':"\u21D3",'Darr':"\u21A1",'dash':"\u2010",'dashv':"\u22A3",'Dashv':"\u2AE4",'dbkarow':"\u290F",'dblac':"\u02DD",'dcaron':"\u010F",'Dcaron':"\u010E",'dcy':"\u0434",'Dcy':"\u0414",'dd':"\u2146",'DD':"\u2145",'ddagger':"\u2021",'ddarr':"\u21CA",'DDotrahd':"\u2911",'ddotseq':"\u2A77",'deg':'\xB0','Del':"\u2207",'delta':"\u03B4",'Delta':"\u0394",'demptyv':"\u29B1",'dfisht':"\u297F",'dfr':"\uD835\uDD21",'Dfr':"\uD835\uDD07",'dHar':"\u2965",'dharl':"\u21C3",'dharr':"\u21C2",'DiacriticalAcute':'\xB4','DiacriticalDot':"\u02D9",'DiacriticalDoubleAcute':"\u02DD",'DiacriticalGrave':'`','DiacriticalTilde':"\u02DC",'diam':"\u22C4",'diamond':"\u22C4",'Diamond':"\u22C4",'diamondsuit':"\u2666",'diams':"\u2666",'die':'\xA8','DifferentialD':"\u2146",'digamma':"\u03DD",'disin':"\u22F2",'div':'\xF7','divide':'\xF7','divideontimes':"\u22C7",'divonx':"\u22C7",'djcy':"\u0452",'DJcy':"\u0402",'dlcorn':"\u231E",'dlcrop':"\u230D",'dollar':'$','dopf':"\uD835\uDD55",'Dopf':"\uD835\uDD3B",'dot':"\u02D9",'Dot':'\xA8','DotDot':"\u20DC",'doteq':"\u2250",'doteqdot':"\u2251",'DotEqual':"\u2250",'dotminus':"\u2238",'dotplus':"\u2214",'dotsquare':"\u22A1",'doublebarwedge':"\u2306",'DoubleContourIntegral':"\u222F",'DoubleDot':'\xA8','DoubleDownArrow':"\u21D3",'DoubleLeftArrow':"\u21D0",'DoubleLeftRightArrow':"\u21D4",'DoubleLeftTee':"\u2AE4",'DoubleLongLeftArrow':"\u27F8",'DoubleLongLeftRightArrow':"\u27FA",'DoubleLongRightArrow':"\u27F9",'DoubleRightArrow':"\u21D2",'DoubleRightTee':"\u22A8",'DoubleUpArrow':"\u21D1",'DoubleUpDownArrow':"\u21D5",'DoubleVerticalBar':"\u2225",'downarrow':"\u2193",'Downarrow':"\u21D3",'DownArrow':"\u2193",'DownArrowBar':"\u2913",'DownArrowUpArrow':"\u21F5",'DownBreve':"\u0311",'downdownarrows':"\u21CA",'downharpoonleft':"\u21C3",'downharpoonright':"\u21C2",'DownLeftRightVector':"\u2950",'DownLeftTeeVector':"\u295E",'DownLeftVector':"\u21BD",'DownLeftVectorBar':"\u2956",'DownRightTeeVector':"\u295F",'DownRightVector':"\u21C1",'DownRightVectorBar':"\u2957",'DownTee':"\u22A4",'DownTeeArrow':"\u21A7",'drbkarow':"\u2910",'drcorn':"\u231F",'drcrop':"\u230C",'dscr':"\uD835\uDCB9",'Dscr':"\uD835\uDC9F",'dscy':"\u0455",'DScy':"\u0405",'dsol':"\u29F6",'dstrok':"\u0111",'Dstrok':"\u0110",'dtdot':"\u22F1",'dtri':"\u25BF",'dtrif':"\u25BE",'duarr':"\u21F5",'duhar':"\u296F",'dwangle':"\u29A6",'dzcy':"\u045F",'DZcy':"\u040F",'dzigrarr':"\u27FF",'eacute':'\xE9','Eacute':'\xC9','easter':"\u2A6E",'ecaron':"\u011B",'Ecaron':"\u011A",'ecir':"\u2256",'ecirc':'\xEA','Ecirc':'\xCA','ecolon':"\u2255",'ecy':"\u044D",'Ecy':"\u042D",'eDDot':"\u2A77",'edot':"\u0117",'eDot':"\u2251",'Edot':"\u0116",'ee':"\u2147",'efDot':"\u2252",'efr':"\uD835\uDD22",'Efr':"\uD835\uDD08",'eg':"\u2A9A",'egrave':'\xE8','Egrave':'\xC8','egs':"\u2A96",'egsdot':"\u2A98",'el':"\u2A99",'Element':"\u2208",'elinters':"\u23E7",'ell':"\u2113",'els':"\u2A95",'elsdot':"\u2A97",'emacr':"\u0113",'Emacr':"\u0112",'empty':"\u2205",'emptyset':"\u2205",'EmptySmallSquare':"\u25FB",'emptyv':"\u2205",'EmptyVerySmallSquare':"\u25AB",'emsp':"\u2003",'emsp13':"\u2004",'emsp14':"\u2005",'eng':"\u014B",'ENG':"\u014A",'ensp':"\u2002",'eogon':"\u0119",'Eogon':"\u0118",'eopf':"\uD835\uDD56",'Eopf':"\uD835\uDD3C",'epar':"\u22D5",'eparsl':"\u29E3",'eplus':"\u2A71",'epsi':"\u03B5",'epsilon':"\u03B5",'Epsilon':"\u0395",'epsiv':"\u03F5",'eqcirc':"\u2256",'eqcolon':"\u2255",'eqsim':"\u2242",'eqslantgtr':"\u2A96",'eqslantless':"\u2A95",'Equal':"\u2A75",'equals':'=','EqualTilde':"\u2242",'equest':"\u225F",'Equilibrium':"\u21CC",'equiv':"\u2261",'equivDD':"\u2A78",'eqvparsl':"\u29E5",'erarr':"\u2971",'erDot':"\u2253",'escr':"\u212F",'Escr':"\u2130",'esdot':"\u2250",'esim':"\u2242",'Esim':"\u2A73",'eta':"\u03B7",'Eta':"\u0397",'eth':'\xF0','ETH':'\xD0','euml':'\xEB','Euml':'\xCB','euro':"\u20AC",'excl':'!','exist':"\u2203",'Exists':"\u2203",'expectation':"\u2130",'exponentiale':"\u2147",'ExponentialE':"\u2147",'fallingdotseq':"\u2252",'fcy':"\u0444",'Fcy':"\u0424",'female':"\u2640",'ffilig':"\uFB03",'fflig':"\uFB00",'ffllig':"\uFB04",'ffr':"\uD835\uDD23",'Ffr':"\uD835\uDD09",'filig':"\uFB01",'FilledSmallSquare':"\u25FC",'FilledVerySmallSquare':"\u25AA",'fjlig':'fj','flat':"\u266D",'fllig':"\uFB02",'fltns':"\u25B1",'fnof':"\u0192",'fopf':"\uD835\uDD57",'Fopf':"\uD835\uDD3D",'forall':"\u2200",'ForAll':"\u2200",'fork':"\u22D4",'forkv':"\u2AD9",'Fouriertrf':"\u2131",'fpartint':"\u2A0D",'frac12':'\xBD','frac13':"\u2153",'frac14':'\xBC','frac15':"\u2155",'frac16':"\u2159",'frac18':"\u215B",'frac23':"\u2154",'frac25':"\u2156",'frac34':'\xBE','frac35':"\u2157",'frac38':"\u215C",'frac45':"\u2158",'frac56':"\u215A",'frac58':"\u215D",'frac78':"\u215E",'frasl':"\u2044",'frown':"\u2322",'fscr':"\uD835\uDCBB",'Fscr':"\u2131",'gacute':"\u01F5",'gamma':"\u03B3",'Gamma':"\u0393",'gammad':"\u03DD",'Gammad':"\u03DC",'gap':"\u2A86",'gbreve':"\u011F",'Gbreve':"\u011E",'Gcedil':"\u0122",'gcirc':"\u011D",'Gcirc':"\u011C",'gcy':"\u0433",'Gcy':"\u0413",'gdot':"\u0121",'Gdot':"\u0120",'ge':"\u2265",'gE':"\u2267",'gel':"\u22DB",'gEl':"\u2A8C",'geq':"\u2265",'geqq':"\u2267",'geqslant':"\u2A7E",'ges':"\u2A7E",'gescc':"\u2AA9",'gesdot':"\u2A80",'gesdoto':"\u2A82",'gesdotol':"\u2A84",'gesl':"\u22DB\uFE00",'gesles':"\u2A94",'gfr':"\uD835\uDD24",'Gfr':"\uD835\uDD0A",'gg':"\u226B",'Gg':"\u22D9",'ggg':"\u22D9",'gimel':"\u2137",'gjcy':"\u0453",'GJcy':"\u0403",'gl':"\u2277",'gla':"\u2AA5",'glE':"\u2A92",'glj':"\u2AA4",'gnap':"\u2A8A",'gnapprox':"\u2A8A",'gne':"\u2A88",'gnE':"\u2269",'gneq':"\u2A88",'gneqq':"\u2269",'gnsim':"\u22E7",'gopf':"\uD835\uDD58",'Gopf':"\uD835\uDD3E",'grave':'`','GreaterEqual':"\u2265",'GreaterEqualLess':"\u22DB",'GreaterFullEqual':"\u2267",'GreaterGreater':"\u2AA2",'GreaterLess':"\u2277",'GreaterSlantEqual':"\u2A7E",'GreaterTilde':"\u2273",'gscr':"\u210A",'Gscr':"\uD835\uDCA2",'gsim':"\u2273",'gsime':"\u2A8E",'gsiml':"\u2A90",'gt':'>','Gt':"\u226B",'GT':'>','gtcc':"\u2AA7",'gtcir':"\u2A7A",'gtdot':"\u22D7",'gtlPar':"\u2995",'gtquest':"\u2A7C",'gtrapprox':"\u2A86",'gtrarr':"\u2978",'gtrdot':"\u22D7",'gtreqless':"\u22DB",'gtreqqless':"\u2A8C",'gtrless':"\u2277",'gtrsim':"\u2273",'gvertneqq':"\u2269\uFE00",'gvnE':"\u2269\uFE00",'Hacek':"\u02C7",'hairsp':"\u200A",'half':'\xBD','hamilt':"\u210B",'hardcy':"\u044A",'HARDcy':"\u042A",'harr':"\u2194",'hArr':"\u21D4",'harrcir':"\u2948",'harrw':"\u21AD",'Hat':'^','hbar':"\u210F",'hcirc':"\u0125",'Hcirc':"\u0124",'hearts':"\u2665",'heartsuit':"\u2665",'hellip':"\u2026",'hercon':"\u22B9",'hfr':"\uD835\uDD25",'Hfr':"\u210C",'HilbertSpace':"\u210B",'hksearow':"\u2925",'hkswarow':"\u2926",'hoarr':"\u21FF",'homtht':"\u223B",'hookleftarrow':"\u21A9",'hookrightarrow':"\u21AA",'hopf':"\uD835\uDD59",'Hopf':"\u210D",'horbar':"\u2015",'HorizontalLine':"\u2500",'hscr':"\uD835\uDCBD",'Hscr':"\u210B",'hslash':"\u210F",'hstrok':"\u0127",'Hstrok':"\u0126",'HumpDownHump':"\u224E",'HumpEqual':"\u224F",'hybull':"\u2043",'hyphen':"\u2010",'iacute':'\xED','Iacute':'\xCD','ic':"\u2063",'icirc':'\xEE','Icirc':'\xCE','icy':"\u0438",'Icy':"\u0418",'Idot':"\u0130",'iecy':"\u0435",'IEcy':"\u0415",'iexcl':'\xA1','iff':"\u21D4",'ifr':"\uD835\uDD26",'Ifr':"\u2111",'igrave':'\xEC','Igrave':'\xCC','ii':"\u2148",'iiiint':"\u2A0C",'iiint':"\u222D",'iinfin':"\u29DC",'iiota':"\u2129",'ijlig':"\u0133",'IJlig':"\u0132",'Im':"\u2111",'imacr':"\u012B",'Imacr':"\u012A",'image':"\u2111",'ImaginaryI':"\u2148",'imagline':"\u2110",'imagpart':"\u2111",'imath':"\u0131",'imof':"\u22B7",'imped':"\u01B5",'Implies':"\u21D2",'in':"\u2208",'incare':"\u2105",'infin':"\u221E",'infintie':"\u29DD",'inodot':"\u0131",'int':"\u222B",'Int':"\u222C",'intcal':"\u22BA",'integers':"\u2124",'Integral':"\u222B",'intercal':"\u22BA",'Intersection':"\u22C2",'intlarhk':"\u2A17",'intprod':"\u2A3C",'InvisibleComma':"\u2063",'InvisibleTimes':"\u2062",'iocy':"\u0451",'IOcy':"\u0401",'iogon':"\u012F",'Iogon':"\u012E",'iopf':"\uD835\uDD5A",'Iopf':"\uD835\uDD40",'iota':"\u03B9",'Iota':"\u0399",'iprod':"\u2A3C",'iquest':'\xBF','iscr':"\uD835\uDCBE",'Iscr':"\u2110",'isin':"\u2208",'isindot':"\u22F5",'isinE':"\u22F9",'isins':"\u22F4",'isinsv':"\u22F3",'isinv':"\u2208",'it':"\u2062",'itilde':"\u0129",'Itilde':"\u0128",'iukcy':"\u0456",'Iukcy':"\u0406",'iuml':'\xEF','Iuml':'\xCF','jcirc':"\u0135",'Jcirc':"\u0134",'jcy':"\u0439",'Jcy':"\u0419",'jfr':"\uD835\uDD27",'Jfr':"\uD835\uDD0D",'jmath':"\u0237",'jopf':"\uD835\uDD5B",'Jopf':"\uD835\uDD41",'jscr':"\uD835\uDCBF",'Jscr':"\uD835\uDCA5",'jsercy':"\u0458",'Jsercy':"\u0408",'jukcy':"\u0454",'Jukcy':"\u0404",'kappa':"\u03BA",'Kappa':"\u039A",'kappav':"\u03F0",'kcedil':"\u0137",'Kcedil':"\u0136",'kcy':"\u043A",'Kcy':"\u041A",'kfr':"\uD835\uDD28",'Kfr':"\uD835\uDD0E",'kgreen':"\u0138",'khcy':"\u0445",'KHcy':"\u0425",'kjcy':"\u045C",'KJcy':"\u040C",'kopf':"\uD835\uDD5C",'Kopf':"\uD835\uDD42",'kscr':"\uD835\uDCC0",'Kscr':"\uD835\uDCA6",'lAarr':"\u21DA",'lacute':"\u013A",'Lacute':"\u0139",'laemptyv':"\u29B4",'lagran':"\u2112",'lambda':"\u03BB",'Lambda':"\u039B",'lang':"\u27E8",'Lang':"\u27EA",'langd':"\u2991",'langle':"\u27E8",'lap':"\u2A85",'Laplacetrf':"\u2112",'laquo':'\xAB','larr':"\u2190",'lArr':"\u21D0",'Larr':"\u219E",'larrb':"\u21E4",'larrbfs':"\u291F",'larrfs':"\u291D",'larrhk':"\u21A9",'larrlp':"\u21AB",'larrpl':"\u2939",'larrsim':"\u2973",'larrtl':"\u21A2",'lat':"\u2AAB",'latail':"\u2919",'lAtail':"\u291B",'late':"\u2AAD",'lates':"\u2AAD\uFE00",'lbarr':"\u290C",'lBarr':"\u290E",'lbbrk':"\u2772",'lbrace':'{','lbrack':'[','lbrke':"\u298B",'lbrksld':"\u298F",'lbrkslu':"\u298D",'lcaron':"\u013E",'Lcaron':"\u013D",'lcedil':"\u013C",'Lcedil':"\u013B",'lceil':"\u2308",'lcub':'{','lcy':"\u043B",'Lcy':"\u041B",'ldca':"\u2936",'ldquo':"\u201C",'ldquor':"\u201E",'ldrdhar':"\u2967",'ldrushar':"\u294B",'ldsh':"\u21B2",'le':"\u2264",'lE':"\u2266",'LeftAngleBracket':"\u27E8",'leftarrow':"\u2190",'Leftarrow':"\u21D0",'LeftArrow':"\u2190",'LeftArrowBar':"\u21E4",'LeftArrowRightArrow':"\u21C6",'leftarrowtail':"\u21A2",'LeftCeiling':"\u2308",'LeftDoubleBracket':"\u27E6",'LeftDownTeeVector':"\u2961",'LeftDownVector':"\u21C3",'LeftDownVectorBar':"\u2959",'LeftFloor':"\u230A",'leftharpoondown':"\u21BD",'leftharpoonup':"\u21BC",'leftleftarrows':"\u21C7",'leftrightarrow':"\u2194",'Leftrightarrow':"\u21D4",'LeftRightArrow':"\u2194",'leftrightarrows':"\u21C6",'leftrightharpoons':"\u21CB",'leftrightsquigarrow':"\u21AD",'LeftRightVector':"\u294E",'LeftTee':"\u22A3",'LeftTeeArrow':"\u21A4",'LeftTeeVector':"\u295A",'leftthreetimes':"\u22CB",'LeftTriangle':"\u22B2",'LeftTriangleBar':"\u29CF",'LeftTriangleEqual':"\u22B4",'LeftUpDownVector':"\u2951",'LeftUpTeeVector':"\u2960",'LeftUpVector':"\u21BF",'LeftUpVectorBar':"\u2958",'LeftVector':"\u21BC",'LeftVectorBar':"\u2952",'leg':"\u22DA",'lEg':"\u2A8B",'leq':"\u2264",'leqq':"\u2266",'leqslant':"\u2A7D",'les':"\u2A7D",'lescc':"\u2AA8",'lesdot':"\u2A7F",'lesdoto':"\u2A81",'lesdotor':"\u2A83",'lesg':"\u22DA\uFE00",'lesges':"\u2A93",'lessapprox':"\u2A85",'lessdot':"\u22D6",'lesseqgtr':"\u22DA",'lesseqqgtr':"\u2A8B",'LessEqualGreater':"\u22DA",'LessFullEqual':"\u2266",'LessGreater':"\u2276",'lessgtr':"\u2276",'LessLess':"\u2AA1",'lesssim':"\u2272",'LessSlantEqual':"\u2A7D",'LessTilde':"\u2272",'lfisht':"\u297C",'lfloor':"\u230A",'lfr':"\uD835\uDD29",'Lfr':"\uD835\uDD0F",'lg':"\u2276",'lgE':"\u2A91",'lHar':"\u2962",'lhard':"\u21BD",'lharu':"\u21BC",'lharul':"\u296A",'lhblk':"\u2584",'ljcy':"\u0459",'LJcy':"\u0409",'ll':"\u226A",'Ll':"\u22D8",'llarr':"\u21C7",'llcorner':"\u231E",'Lleftarrow':"\u21DA",'llhard':"\u296B",'lltri':"\u25FA",'lmidot':"\u0140",'Lmidot':"\u013F",'lmoust':"\u23B0",'lmoustache':"\u23B0",'lnap':"\u2A89",'lnapprox':"\u2A89",'lne':"\u2A87",'lnE':"\u2268",'lneq':"\u2A87",'lneqq':"\u2268",'lnsim':"\u22E6",'loang':"\u27EC",'loarr':"\u21FD",'lobrk':"\u27E6",'longleftarrow':"\u27F5",'Longleftarrow':"\u27F8",'LongLeftArrow':"\u27F5",'longleftrightarrow':"\u27F7",'Longleftrightarrow':"\u27FA",'LongLeftRightArrow':"\u27F7",'longmapsto':"\u27FC",'longrightarrow':"\u27F6",'Longrightarrow':"\u27F9",'LongRightArrow':"\u27F6",'looparrowleft':"\u21AB",'looparrowright':"\u21AC",'lopar':"\u2985",'lopf':"\uD835\uDD5D",'Lopf':"\uD835\uDD43",'loplus':"\u2A2D",'lotimes':"\u2A34",'lowast':"\u2217",'lowbar':'_','LowerLeftArrow':"\u2199",'LowerRightArrow':"\u2198",'loz':"\u25CA",'lozenge':"\u25CA",'lozf':"\u29EB",'lpar':'(','lparlt':"\u2993",'lrarr':"\u21C6",'lrcorner':"\u231F",'lrhar':"\u21CB",'lrhard':"\u296D",'lrm':"\u200E",'lrtri':"\u22BF",'lsaquo':"\u2039",'lscr':"\uD835\uDCC1",'Lscr':"\u2112",'lsh':"\u21B0",'Lsh':"\u21B0",'lsim':"\u2272",'lsime':"\u2A8D",'lsimg':"\u2A8F",'lsqb':'[','lsquo':"\u2018",'lsquor':"\u201A",'lstrok':"\u0142",'Lstrok':"\u0141",'lt':'<','Lt':"\u226A",'LT':'<','ltcc':"\u2AA6",'ltcir':"\u2A79",'ltdot':"\u22D6",'lthree':"\u22CB",'ltimes':"\u22C9",'ltlarr':"\u2976",'ltquest':"\u2A7B",'ltri':"\u25C3",'ltrie':"\u22B4",'ltrif':"\u25C2",'ltrPar':"\u2996",'lurdshar':"\u294A",'luruhar':"\u2966",'lvertneqq':"\u2268\uFE00",'lvnE':"\u2268\uFE00",'macr':'\xAF','male':"\u2642",'malt':"\u2720",'maltese':"\u2720",'map':"\u21A6",'Map':"\u2905",'mapsto':"\u21A6",'mapstodown':"\u21A7",'mapstoleft':"\u21A4",'mapstoup':"\u21A5",'marker':"\u25AE",'mcomma':"\u2A29",'mcy':"\u043C",'Mcy':"\u041C",'mdash':"\u2014",'mDDot':"\u223A",'measuredangle':"\u2221",'MediumSpace':"\u205F",'Mellintrf':"\u2133",'mfr':"\uD835\uDD2A",'Mfr':"\uD835\uDD10",'mho':"\u2127",'micro':'\xB5','mid':"\u2223",'midast':'*','midcir':"\u2AF0",'middot':'\xB7','minus':"\u2212",'minusb':"\u229F",'minusd':"\u2238",'minusdu':"\u2A2A",'MinusPlus':"\u2213",'mlcp':"\u2ADB",'mldr':"\u2026",'mnplus':"\u2213",'models':"\u22A7",'mopf':"\uD835\uDD5E",'Mopf':"\uD835\uDD44",'mp':"\u2213",'mscr':"\uD835\uDCC2",'Mscr':"\u2133",'mstpos':"\u223E",'mu':"\u03BC",'Mu':"\u039C",'multimap':"\u22B8",'mumap':"\u22B8",'nabla':"\u2207",'nacute':"\u0144",'Nacute':"\u0143",'nang':"\u2220\u20D2",'nap':"\u2249",'napE':"\u2A70\u0338",'napid':"\u224B\u0338",'napos':"\u0149",'napprox':"\u2249",'natur':"\u266E",'natural':"\u266E",'naturals':"\u2115",'nbsp':'\xA0','nbump':"\u224E\u0338",'nbumpe':"\u224F\u0338",'ncap':"\u2A43",'ncaron':"\u0148",'Ncaron':"\u0147",'ncedil':"\u0146",'Ncedil':"\u0145",'ncong':"\u2247",'ncongdot':"\u2A6D\u0338",'ncup':"\u2A42",'ncy':"\u043D",'Ncy':"\u041D",'ndash':"\u2013",'ne':"\u2260",'nearhk':"\u2924",'nearr':"\u2197",'neArr':"\u21D7",'nearrow':"\u2197",'nedot':"\u2250\u0338",'NegativeMediumSpace':"\u200B",'NegativeThickSpace':"\u200B",'NegativeThinSpace':"\u200B",'NegativeVeryThinSpace':"\u200B",'nequiv':"\u2262",'nesear':"\u2928",'nesim':"\u2242\u0338",'NestedGreaterGreater':"\u226B",'NestedLessLess':"\u226A",'NewLine':'\n','nexist':"\u2204",'nexists':"\u2204",'nfr':"\uD835\uDD2B",'Nfr':"\uD835\uDD11",'nge':"\u2271",'ngE':"\u2267\u0338",'ngeq':"\u2271",'ngeqq':"\u2267\u0338",'ngeqslant':"\u2A7E\u0338",'nges':"\u2A7E\u0338",'nGg':"\u22D9\u0338",'ngsim':"\u2275",'ngt':"\u226F",'nGt':"\u226B\u20D2",'ngtr':"\u226F",'nGtv':"\u226B\u0338",'nharr':"\u21AE",'nhArr':"\u21CE",'nhpar':"\u2AF2",'ni':"\u220B",'nis':"\u22FC",'nisd':"\u22FA",'niv':"\u220B",'njcy':"\u045A",'NJcy':"\u040A",'nlarr':"\u219A",'nlArr':"\u21CD",'nldr':"\u2025",'nle':"\u2270",'nlE':"\u2266\u0338",'nleftarrow':"\u219A",'nLeftarrow':"\u21CD",'nleftrightarrow':"\u21AE",'nLeftrightarrow':"\u21CE",'nleq':"\u2270",'nleqq':"\u2266\u0338",'nleqslant':"\u2A7D\u0338",'nles':"\u2A7D\u0338",'nless':"\u226E",'nLl':"\u22D8\u0338",'nlsim':"\u2274",'nlt':"\u226E",'nLt':"\u226A\u20D2",'nltri':"\u22EA",'nltrie':"\u22EC",'nLtv':"\u226A\u0338",'nmid':"\u2224",'NoBreak':"\u2060",'NonBreakingSpace':'\xA0','nopf':"\uD835\uDD5F",'Nopf':"\u2115",'not':'\xAC','Not':"\u2AEC",'NotCongruent':"\u2262",'NotCupCap':"\u226D",'NotDoubleVerticalBar':"\u2226",'NotElement':"\u2209",'NotEqual':"\u2260",'NotEqualTilde':"\u2242\u0338",'NotExists':"\u2204",'NotGreater':"\u226F",'NotGreaterEqual':"\u2271",'NotGreaterFullEqual':"\u2267\u0338",'NotGreaterGreater':"\u226B\u0338",'NotGreaterLess':"\u2279",'NotGreaterSlantEqual':"\u2A7E\u0338",'NotGreaterTilde':"\u2275",'NotHumpDownHump':"\u224E\u0338",'NotHumpEqual':"\u224F\u0338",'notin':"\u2209",'notindot':"\u22F5\u0338",'notinE':"\u22F9\u0338",'notinva':"\u2209",'notinvb':"\u22F7",'notinvc':"\u22F6",'NotLeftTriangle':"\u22EA",'NotLeftTriangleBar':"\u29CF\u0338",'NotLeftTriangleEqual':"\u22EC",'NotLess':"\u226E",'NotLessEqual':"\u2270",'NotLessGreater':"\u2278",'NotLessLess':"\u226A\u0338",'NotLessSlantEqual':"\u2A7D\u0338",'NotLessTilde':"\u2274",'NotNestedGreaterGreater':"\u2AA2\u0338",'NotNestedLessLess':"\u2AA1\u0338",'notni':"\u220C",'notniva':"\u220C",'notnivb':"\u22FE",'notnivc':"\u22FD",'NotPrecedes':"\u2280",'NotPrecedesEqual':"\u2AAF\u0338",'NotPrecedesSlantEqual':"\u22E0",'NotReverseElement':"\u220C",'NotRightTriangle':"\u22EB",'NotRightTriangleBar':"\u29D0\u0338",'NotRightTriangleEqual':"\u22ED",'NotSquareSubset':"\u228F\u0338",'NotSquareSubsetEqual':"\u22E2",'NotSquareSuperset':"\u2290\u0338",'NotSquareSupersetEqual':"\u22E3",'NotSubset':"\u2282\u20D2",'NotSubsetEqual':"\u2288",'NotSucceeds':"\u2281",'NotSucceedsEqual':"\u2AB0\u0338",'NotSucceedsSlantEqual':"\u22E1",'NotSucceedsTilde':"\u227F\u0338",'NotSuperset':"\u2283\u20D2",'NotSupersetEqual':"\u2289",'NotTilde':"\u2241",'NotTildeEqual':"\u2244",'NotTildeFullEqual':"\u2247",'NotTildeTilde':"\u2249",'NotVerticalBar':"\u2224",'npar':"\u2226",'nparallel':"\u2226",'nparsl':"\u2AFD\u20E5",'npart':"\u2202\u0338",'npolint':"\u2A14",'npr':"\u2280",'nprcue':"\u22E0",'npre':"\u2AAF\u0338",'nprec':"\u2280",'npreceq':"\u2AAF\u0338",'nrarr':"\u219B",'nrArr':"\u21CF",'nrarrc':"\u2933\u0338",'nrarrw':"\u219D\u0338",'nrightarrow':"\u219B",'nRightarrow':"\u21CF",'nrtri':"\u22EB",'nrtrie':"\u22ED",'nsc':"\u2281",'nsccue':"\u22E1",'nsce':"\u2AB0\u0338",'nscr':"\uD835\uDCC3",'Nscr':"\uD835\uDCA9",'nshortmid':"\u2224",'nshortparallel':"\u2226",'nsim':"\u2241",'nsime':"\u2244",'nsimeq':"\u2244",'nsmid':"\u2224",'nspar':"\u2226",'nsqsube':"\u22E2",'nsqsupe':"\u22E3",'nsub':"\u2284",'nsube':"\u2288",'nsubE':"\u2AC5\u0338",'nsubset':"\u2282\u20D2",'nsubseteq':"\u2288",'nsubseteqq':"\u2AC5\u0338",'nsucc':"\u2281",'nsucceq':"\u2AB0\u0338",'nsup':"\u2285",'nsupe':"\u2289",'nsupE':"\u2AC6\u0338",'nsupset':"\u2283\u20D2",'nsupseteq':"\u2289",'nsupseteqq':"\u2AC6\u0338",'ntgl':"\u2279",'ntilde':'\xF1','Ntilde':'\xD1','ntlg':"\u2278",'ntriangleleft':"\u22EA",'ntrianglelefteq':"\u22EC",'ntriangleright':"\u22EB",'ntrianglerighteq':"\u22ED",'nu':"\u03BD",'Nu':"\u039D",'num':'#','numero':"\u2116",'numsp':"\u2007",'nvap':"\u224D\u20D2",'nvdash':"\u22AC",'nvDash':"\u22AD",'nVdash':"\u22AE",'nVDash':"\u22AF",'nvge':"\u2265\u20D2",'nvgt':">\u20D2",'nvHarr':"\u2904",'nvinfin':"\u29DE",'nvlArr':"\u2902",'nvle':"\u2264\u20D2",'nvlt':"<\u20D2",'nvltrie':"\u22B4\u20D2",'nvrArr':"\u2903",'nvrtrie':"\u22B5\u20D2",'nvsim':"\u223C\u20D2",'nwarhk':"\u2923",'nwarr':"\u2196",'nwArr':"\u21D6",'nwarrow':"\u2196",'nwnear':"\u2927",'oacute':'\xF3','Oacute':'\xD3','oast':"\u229B",'ocir':"\u229A",'ocirc':'\xF4','Ocirc':'\xD4','ocy':"\u043E",'Ocy':"\u041E",'odash':"\u229D",'odblac':"\u0151",'Odblac':"\u0150",'odiv':"\u2A38",'odot':"\u2299",'odsold':"\u29BC",'oelig':"\u0153",'OElig':"\u0152",'ofcir':"\u29BF",'ofr':"\uD835\uDD2C",'Ofr':"\uD835\uDD12",'ogon':"\u02DB",'ograve':'\xF2','Ograve':'\xD2','ogt':"\u29C1",'ohbar':"\u29B5",'ohm':"\u03A9",'oint':"\u222E",'olarr':"\u21BA",'olcir':"\u29BE",'olcross':"\u29BB",'oline':"\u203E",'olt':"\u29C0",'omacr':"\u014D",'Omacr':"\u014C",'omega':"\u03C9",'Omega':"\u03A9",'omicron':"\u03BF",'Omicron':"\u039F",'omid':"\u29B6",'ominus':"\u2296",'oopf':"\uD835\uDD60",'Oopf':"\uD835\uDD46",'opar':"\u29B7",'OpenCurlyDoubleQuote':"\u201C",'OpenCurlyQuote':"\u2018",'operp':"\u29B9",'oplus':"\u2295",'or':"\u2228",'Or':"\u2A54",'orarr':"\u21BB",'ord':"\u2A5D",'order':"\u2134",'orderof':"\u2134",'ordf':'\xAA','ordm':'\xBA','origof':"\u22B6",'oror':"\u2A56",'orslope':"\u2A57",'orv':"\u2A5B",'oS':"\u24C8",'oscr':"\u2134",'Oscr':"\uD835\uDCAA",'oslash':'\xF8','Oslash':'\xD8','osol':"\u2298",'otilde':'\xF5','Otilde':'\xD5','otimes':"\u2297",'Otimes':"\u2A37",'otimesas':"\u2A36",'ouml':'\xF6','Ouml':'\xD6','ovbar':"\u233D",'OverBar':"\u203E",'OverBrace':"\u23DE",'OverBracket':"\u23B4",'OverParenthesis':"\u23DC",'par':"\u2225",'para':'\xB6','parallel':"\u2225",'parsim':"\u2AF3",'parsl':"\u2AFD",'part':"\u2202",'PartialD':"\u2202",'pcy':"\u043F",'Pcy':"\u041F",'percnt':'%','period':'.','permil':"\u2030",'perp':"\u22A5",'pertenk':"\u2031",'pfr':"\uD835\uDD2D",'Pfr':"\uD835\uDD13",'phi':"\u03C6",'Phi':"\u03A6",'phiv':"\u03D5",'phmmat':"\u2133",'phone':"\u260E",'pi':"\u03C0",'Pi':"\u03A0",'pitchfork':"\u22D4",'piv':"\u03D6",'planck':"\u210F",'planckh':"\u210E",'plankv':"\u210F",'plus':'+','plusacir':"\u2A23",'plusb':"\u229E",'pluscir':"\u2A22",'plusdo':"\u2214",'plusdu':"\u2A25",'pluse':"\u2A72",'PlusMinus':'\xB1','plusmn':'\xB1','plussim':"\u2A26",'plustwo':"\u2A27",'pm':'\xB1','Poincareplane':"\u210C",'pointint':"\u2A15",'popf':"\uD835\uDD61",'Popf':"\u2119",'pound':'\xA3','pr':"\u227A",'Pr':"\u2ABB",'prap':"\u2AB7",'prcue':"\u227C",'pre':"\u2AAF",'prE':"\u2AB3",'prec':"\u227A",'precapprox':"\u2AB7",'preccurlyeq':"\u227C",'Precedes':"\u227A",'PrecedesEqual':"\u2AAF",'PrecedesSlantEqual':"\u227C",'PrecedesTilde':"\u227E",'preceq':"\u2AAF",'precnapprox':"\u2AB9",'precneqq':"\u2AB5",'precnsim':"\u22E8",'precsim':"\u227E",'prime':"\u2032",'Prime':"\u2033",'primes':"\u2119",'prnap':"\u2AB9",'prnE':"\u2AB5",'prnsim':"\u22E8",'prod':"\u220F",'Product':"\u220F",'profalar':"\u232E",'profline':"\u2312",'profsurf':"\u2313",'prop':"\u221D",'Proportion':"\u2237",'Proportional':"\u221D",'propto':"\u221D",'prsim':"\u227E",'prurel':"\u22B0",'pscr':"\uD835\uDCC5",'Pscr':"\uD835\uDCAB",'psi':"\u03C8",'Psi':"\u03A8",'puncsp':"\u2008",'qfr':"\uD835\uDD2E",'Qfr':"\uD835\uDD14",'qint':"\u2A0C",'qopf':"\uD835\uDD62",'Qopf':"\u211A",'qprime':"\u2057",'qscr':"\uD835\uDCC6",'Qscr':"\uD835\uDCAC",'quaternions':"\u210D",'quatint':"\u2A16",'quest':'?','questeq':"\u225F",'quot':'"','QUOT':'"','rAarr':"\u21DB",'race':"\u223D\u0331",'racute':"\u0155",'Racute':"\u0154",'radic':"\u221A",'raemptyv':"\u29B3",'rang':"\u27E9",'Rang':"\u27EB",'rangd':"\u2992",'range':"\u29A5",'rangle':"\u27E9",'raquo':'\xBB','rarr':"\u2192",'rArr':"\u21D2",'Rarr':"\u21A0",'rarrap':"\u2975",'rarrb':"\u21E5",'rarrbfs':"\u2920",'rarrc':"\u2933",'rarrfs':"\u291E",'rarrhk':"\u21AA",'rarrlp':"\u21AC",'rarrpl':"\u2945",'rarrsim':"\u2974",'rarrtl':"\u21A3",'Rarrtl':"\u2916",'rarrw':"\u219D",'ratail':"\u291A",'rAtail':"\u291C",'ratio':"\u2236",'rationals':"\u211A",'rbarr':"\u290D",'rBarr':"\u290F",'RBarr':"\u2910",'rbbrk':"\u2773",'rbrace':'}','rbrack':']','rbrke':"\u298C",'rbrksld':"\u298E",'rbrkslu':"\u2990",'rcaron':"\u0159",'Rcaron':"\u0158",'rcedil':"\u0157",'Rcedil':"\u0156",'rceil':"\u2309",'rcub':'}','rcy':"\u0440",'Rcy':"\u0420",'rdca':"\u2937",'rdldhar':"\u2969",'rdquo':"\u201D",'rdquor':"\u201D",'rdsh':"\u21B3",'Re':"\u211C",'real':"\u211C",'realine':"\u211B",'realpart':"\u211C",'reals':"\u211D",'rect':"\u25AD",'reg':'\xAE','REG':'\xAE','ReverseElement':"\u220B",'ReverseEquilibrium':"\u21CB",'ReverseUpEquilibrium':"\u296F",'rfisht':"\u297D",'rfloor':"\u230B",'rfr':"\uD835\uDD2F",'Rfr':"\u211C",'rHar':"\u2964",'rhard':"\u21C1",'rharu':"\u21C0",'rharul':"\u296C",'rho':"\u03C1",'Rho':"\u03A1",'rhov':"\u03F1",'RightAngleBracket':"\u27E9",'rightarrow':"\u2192",'Rightarrow':"\u21D2",'RightArrow':"\u2192",'RightArrowBar':"\u21E5",'RightArrowLeftArrow':"\u21C4",'rightarrowtail':"\u21A3",'RightCeiling':"\u2309",'RightDoubleBracket':"\u27E7",'RightDownTeeVector':"\u295D",'RightDownVector':"\u21C2",'RightDownVectorBar':"\u2955",'RightFloor':"\u230B",'rightharpoondown':"\u21C1",'rightharpoonup':"\u21C0",'rightleftarrows':"\u21C4",'rightleftharpoons':"\u21CC",'rightrightarrows':"\u21C9",'rightsquigarrow':"\u219D",'RightTee':"\u22A2",'RightTeeArrow':"\u21A6",'RightTeeVector':"\u295B",'rightthreetimes':"\u22CC",'RightTriangle':"\u22B3",'RightTriangleBar':"\u29D0",'RightTriangleEqual':"\u22B5",'RightUpDownVector':"\u294F",'RightUpTeeVector':"\u295C",'RightUpVector':"\u21BE",'RightUpVectorBar':"\u2954",'RightVector':"\u21C0",'RightVectorBar':"\u2953",'ring':"\u02DA",'risingdotseq':"\u2253",'rlarr':"\u21C4",'rlhar':"\u21CC",'rlm':"\u200F",'rmoust':"\u23B1",'rmoustache':"\u23B1",'rnmid':"\u2AEE",'roang':"\u27ED",'roarr':"\u21FE",'robrk':"\u27E7",'ropar':"\u2986",'ropf':"\uD835\uDD63",'Ropf':"\u211D",'roplus':"\u2A2E",'rotimes':"\u2A35",'RoundImplies':"\u2970",'rpar':')','rpargt':"\u2994",'rppolint':"\u2A12",'rrarr':"\u21C9",'Rrightarrow':"\u21DB",'rsaquo':"\u203A",'rscr':"\uD835\uDCC7",'Rscr':"\u211B",'rsh':"\u21B1",'Rsh':"\u21B1",'rsqb':']','rsquo':"\u2019",'rsquor':"\u2019",'rthree':"\u22CC",'rtimes':"\u22CA",'rtri':"\u25B9",'rtrie':"\u22B5",'rtrif':"\u25B8",'rtriltri':"\u29CE",'RuleDelayed':"\u29F4",'ruluhar':"\u2968",'rx':"\u211E",'sacute':"\u015B",'Sacute':"\u015A",'sbquo':"\u201A",'sc':"\u227B",'Sc':"\u2ABC",'scap':"\u2AB8",'scaron':"\u0161",'Scaron':"\u0160",'sccue':"\u227D",'sce':"\u2AB0",'scE':"\u2AB4",'scedil':"\u015F",'Scedil':"\u015E",'scirc':"\u015D",'Scirc':"\u015C",'scnap':"\u2ABA",'scnE':"\u2AB6",'scnsim':"\u22E9",'scpolint':"\u2A13",'scsim':"\u227F",'scy':"\u0441",'Scy':"\u0421",'sdot':"\u22C5",'sdotb':"\u22A1",'sdote':"\u2A66",'searhk':"\u2925",'searr':"\u2198",'seArr':"\u21D8",'searrow':"\u2198",'sect':'\xA7','semi':';','seswar':"\u2929",'setminus':"\u2216",'setmn':"\u2216",'sext':"\u2736",'sfr':"\uD835\uDD30",'Sfr':"\uD835\uDD16",'sfrown':"\u2322",'sharp':"\u266F",'shchcy':"\u0449",'SHCHcy':"\u0429",'shcy':"\u0448",'SHcy':"\u0428",'ShortDownArrow':"\u2193",'ShortLeftArrow':"\u2190",'shortmid':"\u2223",'shortparallel':"\u2225",'ShortRightArrow':"\u2192",'ShortUpArrow':"\u2191",'shy':'\xAD','sigma':"\u03C3",'Sigma':"\u03A3",'sigmaf':"\u03C2",'sigmav':"\u03C2",'sim':"\u223C",'simdot':"\u2A6A",'sime':"\u2243",'simeq':"\u2243",'simg':"\u2A9E",'simgE':"\u2AA0",'siml':"\u2A9D",'simlE':"\u2A9F",'simne':"\u2246",'simplus':"\u2A24",'simrarr':"\u2972",'slarr':"\u2190",'SmallCircle':"\u2218",'smallsetminus':"\u2216",'smashp':"\u2A33",'smeparsl':"\u29E4",'smid':"\u2223",'smile':"\u2323",'smt':"\u2AAA",'smte':"\u2AAC",'smtes':"\u2AAC\uFE00",'softcy':"\u044C",'SOFTcy':"\u042C",'sol':'/','solb':"\u29C4",'solbar':"\u233F",'sopf':"\uD835\uDD64",'Sopf':"\uD835\uDD4A",'spades':"\u2660",'spadesuit':"\u2660",'spar':"\u2225",'sqcap':"\u2293",'sqcaps':"\u2293\uFE00",'sqcup':"\u2294",'sqcups':"\u2294\uFE00",'Sqrt':"\u221A",'sqsub':"\u228F",'sqsube':"\u2291",'sqsubset':"\u228F",'sqsubseteq':"\u2291",'sqsup':"\u2290",'sqsupe':"\u2292",'sqsupset':"\u2290",'sqsupseteq':"\u2292",'squ':"\u25A1",'square':"\u25A1",'Square':"\u25A1",'SquareIntersection':"\u2293",'SquareSubset':"\u228F",'SquareSubsetEqual':"\u2291",'SquareSuperset':"\u2290",'SquareSupersetEqual':"\u2292",'SquareUnion':"\u2294",'squarf':"\u25AA",'squf':"\u25AA",'srarr':"\u2192",'sscr':"\uD835\uDCC8",'Sscr':"\uD835\uDCAE",'ssetmn':"\u2216",'ssmile':"\u2323",'sstarf':"\u22C6",'star':"\u2606",'Star':"\u22C6",'starf':"\u2605",'straightepsilon':"\u03F5",'straightphi':"\u03D5",'strns':'\xAF','sub':"\u2282",'Sub':"\u22D0",'subdot':"\u2ABD",'sube':"\u2286",'subE':"\u2AC5",'subedot':"\u2AC3",'submult':"\u2AC1",'subne':"\u228A",'subnE':"\u2ACB",'subplus':"\u2ABF",'subrarr':"\u2979",'subset':"\u2282",'Subset':"\u22D0",'subseteq':"\u2286",'subseteqq':"\u2AC5",'SubsetEqual':"\u2286",'subsetneq':"\u228A",'subsetneqq':"\u2ACB",'subsim':"\u2AC7",'subsub':"\u2AD5",'subsup':"\u2AD3",'succ':"\u227B",'succapprox':"\u2AB8",'succcurlyeq':"\u227D",'Succeeds':"\u227B",'SucceedsEqual':"\u2AB0",'SucceedsSlantEqual':"\u227D",'SucceedsTilde':"\u227F",'succeq':"\u2AB0",'succnapprox':"\u2ABA",'succneqq':"\u2AB6",'succnsim':"\u22E9",'succsim':"\u227F",'SuchThat':"\u220B",'sum':"\u2211",'Sum':"\u2211",'sung':"\u266A",'sup':"\u2283",'Sup':"\u22D1",'sup1':'\xB9','sup2':'\xB2','sup3':'\xB3','supdot':"\u2ABE",'supdsub':"\u2AD8",'supe':"\u2287",'supE':"\u2AC6",'supedot':"\u2AC4",'Superset':"\u2283",'SupersetEqual':"\u2287",'suphsol':"\u27C9",'suphsub':"\u2AD7",'suplarr':"\u297B",'supmult':"\u2AC2",'supne':"\u228B",'supnE':"\u2ACC",'supplus':"\u2AC0",'supset':"\u2283",'Supset':"\u22D1",'supseteq':"\u2287",'supseteqq':"\u2AC6",'supsetneq':"\u228B",'supsetneqq':"\u2ACC",'supsim':"\u2AC8",'supsub':"\u2AD4",'supsup':"\u2AD6",'swarhk':"\u2926",'swarr':"\u2199",'swArr':"\u21D9",'swarrow':"\u2199",'swnwar':"\u292A",'szlig':'\xDF','Tab':'\t','target':"\u2316",'tau':"\u03C4",'Tau':"\u03A4",'tbrk':"\u23B4",'tcaron':"\u0165",'Tcaron':"\u0164",'tcedil':"\u0163",'Tcedil':"\u0162",'tcy':"\u0442",'Tcy':"\u0422",'tdot':"\u20DB",'telrec':"\u2315",'tfr':"\uD835\uDD31",'Tfr':"\uD835\uDD17",'there4':"\u2234",'therefore':"\u2234",'Therefore':"\u2234",'theta':"\u03B8",'Theta':"\u0398",'thetasym':"\u03D1",'thetav':"\u03D1",'thickapprox':"\u2248",'thicksim':"\u223C",'ThickSpace':"\u205F\u200A",'thinsp':"\u2009",'ThinSpace':"\u2009",'thkap':"\u2248",'thksim':"\u223C",'thorn':'\xFE','THORN':'\xDE','tilde':"\u02DC",'Tilde':"\u223C",'TildeEqual':"\u2243",'TildeFullEqual':"\u2245",'TildeTilde':"\u2248",'times':'\xD7','timesb':"\u22A0",'timesbar':"\u2A31",'timesd':"\u2A30",'tint':"\u222D",'toea':"\u2928",'top':"\u22A4",'topbot':"\u2336",'topcir':"\u2AF1",'topf':"\uD835\uDD65",'Topf':"\uD835\uDD4B",'topfork':"\u2ADA",'tosa':"\u2929",'tprime':"\u2034",'trade':"\u2122",'TRADE':"\u2122",'triangle':"\u25B5",'triangledown':"\u25BF",'triangleleft':"\u25C3",'trianglelefteq':"\u22B4",'triangleq':"\u225C",'triangleright':"\u25B9",'trianglerighteq':"\u22B5",'tridot':"\u25EC",'trie':"\u225C",'triminus':"\u2A3A",'TripleDot':"\u20DB",'triplus':"\u2A39",'trisb':"\u29CD",'tritime':"\u2A3B",'trpezium':"\u23E2",'tscr':"\uD835\uDCC9",'Tscr':"\uD835\uDCAF",'tscy':"\u0446",'TScy':"\u0426",'tshcy':"\u045B",'TSHcy':"\u040B",'tstrok':"\u0167",'Tstrok':"\u0166",'twixt':"\u226C",'twoheadleftarrow':"\u219E",'twoheadrightarrow':"\u21A0",'uacute':'\xFA','Uacute':'\xDA','uarr':"\u2191",'uArr':"\u21D1",'Uarr':"\u219F",'Uarrocir':"\u2949",'ubrcy':"\u045E",'Ubrcy':"\u040E",'ubreve':"\u016D",'Ubreve':"\u016C",'ucirc':'\xFB','Ucirc':'\xDB','ucy':"\u0443",'Ucy':"\u0423",'udarr':"\u21C5",'udblac':"\u0171",'Udblac':"\u0170",'udhar':"\u296E",'ufisht':"\u297E",'ufr':"\uD835\uDD32",'Ufr':"\uD835\uDD18",'ugrave':'\xF9','Ugrave':'\xD9','uHar':"\u2963",'uharl':"\u21BF",'uharr':"\u21BE",'uhblk':"\u2580",'ulcorn':"\u231C",'ulcorner':"\u231C",'ulcrop':"\u230F",'ultri':"\u25F8",'umacr':"\u016B",'Umacr':"\u016A",'uml':'\xA8','UnderBar':'_','UnderBrace':"\u23DF",'UnderBracket':"\u23B5",'UnderParenthesis':"\u23DD",'Union':"\u22C3",'UnionPlus':"\u228E",'uogon':"\u0173",'Uogon':"\u0172",'uopf':"\uD835\uDD66",'Uopf':"\uD835\uDD4C",'uparrow':"\u2191",'Uparrow':"\u21D1",'UpArrow':"\u2191",'UpArrowBar':"\u2912",'UpArrowDownArrow':"\u21C5",'updownarrow':"\u2195",'Updownarrow':"\u21D5",'UpDownArrow':"\u2195",'UpEquilibrium':"\u296E",'upharpoonleft':"\u21BF",'upharpoonright':"\u21BE",'uplus':"\u228E",'UpperLeftArrow':"\u2196",'UpperRightArrow':"\u2197",'upsi':"\u03C5",'Upsi':"\u03D2",'upsih':"\u03D2",'upsilon':"\u03C5",'Upsilon':"\u03A5",'UpTee':"\u22A5",'UpTeeArrow':"\u21A5",'upuparrows':"\u21C8",'urcorn':"\u231D",'urcorner':"\u231D",'urcrop':"\u230E",'uring':"\u016F",'Uring':"\u016E",'urtri':"\u25F9",'uscr':"\uD835\uDCCA",'Uscr':"\uD835\uDCB0",'utdot':"\u22F0",'utilde':"\u0169",'Utilde':"\u0168",'utri':"\u25B5",'utrif':"\u25B4",'uuarr':"\u21C8",'uuml':'\xFC','Uuml':'\xDC','uwangle':"\u29A7",'vangrt':"\u299C",'varepsilon':"\u03F5",'varkappa':"\u03F0",'varnothing':"\u2205",'varphi':"\u03D5",'varpi':"\u03D6",'varpropto':"\u221D",'varr':"\u2195",'vArr':"\u21D5",'varrho':"\u03F1",'varsigma':"\u03C2",'varsubsetneq':"\u228A\uFE00",'varsubsetneqq':"\u2ACB\uFE00",'varsupsetneq':"\u228B\uFE00",'varsupsetneqq':"\u2ACC\uFE00",'vartheta':"\u03D1",'vartriangleleft':"\u22B2",'vartriangleright':"\u22B3",'vBar':"\u2AE8",'Vbar':"\u2AEB",'vBarv':"\u2AE9",'vcy':"\u0432",'Vcy':"\u0412",'vdash':"\u22A2",'vDash':"\u22A8",'Vdash':"\u22A9",'VDash':"\u22AB",'Vdashl':"\u2AE6",'vee':"\u2228",'Vee':"\u22C1",'veebar':"\u22BB",'veeeq':"\u225A",'vellip':"\u22EE",'verbar':'|','Verbar':"\u2016",'vert':'|','Vert':"\u2016",'VerticalBar':"\u2223",'VerticalLine':'|','VerticalSeparator':"\u2758",'VerticalTilde':"\u2240",'VeryThinSpace':"\u200A",'vfr':"\uD835\uDD33",'Vfr':"\uD835\uDD19",'vltri':"\u22B2",'vnsub':"\u2282\u20D2",'vnsup':"\u2283\u20D2",'vopf':"\uD835\uDD67",'Vopf':"\uD835\uDD4D",'vprop':"\u221D",'vrtri':"\u22B3",'vscr':"\uD835\uDCCB",'Vscr':"\uD835\uDCB1",'vsubne':"\u228A\uFE00",'vsubnE':"\u2ACB\uFE00",'vsupne':"\u228B\uFE00",'vsupnE':"\u2ACC\uFE00",'Vvdash':"\u22AA",'vzigzag':"\u299A",'wcirc':"\u0175",'Wcirc':"\u0174",'wedbar':"\u2A5F",'wedge':"\u2227",'Wedge':"\u22C0",'wedgeq':"\u2259",'weierp':"\u2118",'wfr':"\uD835\uDD34",'Wfr':"\uD835\uDD1A",'wopf':"\uD835\uDD68",'Wopf':"\uD835\uDD4E",'wp':"\u2118",'wr':"\u2240",'wreath':"\u2240",'wscr':"\uD835\uDCCC",'Wscr':"\uD835\uDCB2",'xcap':"\u22C2",'xcirc':"\u25EF",'xcup':"\u22C3",'xdtri':"\u25BD",'xfr':"\uD835\uDD35",'Xfr':"\uD835\uDD1B",'xharr':"\u27F7",'xhArr':"\u27FA",'xi':"\u03BE",'Xi':"\u039E",'xlarr':"\u27F5",'xlArr':"\u27F8",'xmap':"\u27FC",'xnis':"\u22FB",'xodot':"\u2A00",'xopf':"\uD835\uDD69",'Xopf':"\uD835\uDD4F",'xoplus':"\u2A01",'xotime':"\u2A02",'xrarr':"\u27F6",'xrArr':"\u27F9",'xscr':"\uD835\uDCCD",'Xscr':"\uD835\uDCB3",'xsqcup':"\u2A06",'xuplus':"\u2A04",'xutri':"\u25B3",'xvee':"\u22C1",'xwedge':"\u22C0",'yacute':'\xFD','Yacute':'\xDD','yacy':"\u044F",'YAcy':"\u042F",'ycirc':"\u0177",'Ycirc':"\u0176",'ycy':"\u044B",'Ycy':"\u042B",'yen':'\xA5','yfr':"\uD835\uDD36",'Yfr':"\uD835\uDD1C",'yicy':"\u0457",'YIcy':"\u0407",'yopf':"\uD835\uDD6A",'Yopf':"\uD835\uDD50",'yscr':"\uD835\uDCCE",'Yscr':"\uD835\uDCB4",'yucy':"\u044E",'YUcy':"\u042E",'yuml':'\xFF','Yuml':"\u0178",'zacute':"\u017A",'Zacute':"\u0179",'zcaron':"\u017E",'Zcaron':"\u017D",'zcy':"\u0437",'Zcy':"\u0417",'zdot':"\u017C",'Zdot':"\u017B",'zeetrf':"\u2128",'ZeroWidthSpace':"\u200B",'zeta':"\u03B6",'Zeta':"\u0396",'zfr':"\uD835\uDD37",'Zfr':"\u2128",'zhcy':"\u0436",'ZHcy':"\u0416",'zigrarr':"\u21DD",'zopf':"\uD835\uDD6B",'Zopf':"\u2124",'zscr':"\uD835\uDCCF",'Zscr':"\uD835\uDCB5",'zwj':"\u200D",'zwnj':"\u200C"};var decodeMapLegacy={'aacute':'\xE1','Aacute':'\xC1','acirc':'\xE2','Acirc':'\xC2','acute':'\xB4','aelig':'\xE6','AElig':'\xC6','agrave':'\xE0','Agrave':'\xC0','amp':'&','AMP':'&','aring':'\xE5','Aring':'\xC5','atilde':'\xE3','Atilde':'\xC3','auml':'\xE4','Auml':'\xC4','brvbar':'\xA6','ccedil':'\xE7','Ccedil':'\xC7','cedil':'\xB8','cent':'\xA2','copy':'\xA9','COPY':'\xA9','curren':'\xA4','deg':'\xB0','divide':'\xF7','eacute':'\xE9','Eacute':'\xC9','ecirc':'\xEA','Ecirc':'\xCA','egrave':'\xE8','Egrave':'\xC8','eth':'\xF0','ETH':'\xD0','euml':'\xEB','Euml':'\xCB','frac12':'\xBD','frac14':'\xBC','frac34':'\xBE','gt':'>','GT':'>','iacute':'\xED','Iacute':'\xCD','icirc':'\xEE','Icirc':'\xCE','iexcl':'\xA1','igrave':'\xEC','Igrave':'\xCC','iquest':'\xBF','iuml':'\xEF','Iuml':'\xCF','laquo':'\xAB','lt':'<','LT':'<','macr':'\xAF','micro':'\xB5','middot':'\xB7','nbsp':'\xA0','not':'\xAC','ntilde':'\xF1','Ntilde':'\xD1','oacute':'\xF3','Oacute':'\xD3','ocirc':'\xF4','Ocirc':'\xD4','ograve':'\xF2','Ograve':'\xD2','ordf':'\xAA','ordm':'\xBA','oslash':'\xF8','Oslash':'\xD8','otilde':'\xF5','Otilde':'\xD5','ouml':'\xF6','Ouml':'\xD6','para':'\xB6','plusmn':'\xB1','pound':'\xA3','quot':'"','QUOT':'"','raquo':'\xBB','reg':'\xAE','REG':'\xAE','sect':'\xA7','shy':'\xAD','sup1':'\xB9','sup2':'\xB2','sup3':'\xB3','szlig':'\xDF','thorn':'\xFE','THORN':'\xDE','times':'\xD7','uacute':'\xFA','Uacute':'\xDA','ucirc':'\xFB','Ucirc':'\xDB','ugrave':'\xF9','Ugrave':'\xD9','uml':'\xA8','uuml':'\xFC','Uuml':'\xDC','yacute':'\xFD','Yacute':'\xDD','yen':'\xA5','yuml':'\xFF'};var decodeMapNumeric={'0':"\uFFFD",'128':"\u20AC",'130':"\u201A",'131':"\u0192",'132':"\u201E",'133':"\u2026",'134':"\u2020",'135':"\u2021",'136':"\u02C6",'137':"\u2030",'138':"\u0160",'139':"\u2039",'140':"\u0152",'142':"\u017D",'145':"\u2018",'146':"\u2019",'147':"\u201C",'148':"\u201D",'149':"\u2022",'150':"\u2013",'151':"\u2014",'152':"\u02DC",'153':"\u2122",'154':"\u0161",'155':"\u203A",'156':"\u0153",'158':"\u017E",'159':"\u0178"};var invalidReferenceCodePoints=[1,2,3,4,5,6,7,8,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,64976,64977,64978,64979,64980,64981,64982,64983,64984,64985,64986,64987,64988,64989,64990,64991,64992,64993,64994,64995,64996,64997,64998,64999,65000,65001,65002,65003,65004,65005,65006,65007,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111];/*--------------------------------------------------------------------------*/var stringFromCharCode=String.fromCharCode;var object={};var hasOwnProperty=object.hasOwnProperty;var has=function has(object,propertyName){return hasOwnProperty.call(object,propertyName);};var contains=function contains(array,value){var index=-1;var length=array.length;while(++index<length){if(array[index]==value){return true;}}return false;};var merge=function merge(options,defaults){if(!options){return defaults;}var result={};var key;for(key in defaults){// A `hasOwnProperty` check is not needed here, since only recognized
// option names are used anyway. Any others are ignored.
result[key]=has(options,key)?options[key]:defaults[key];}return result;};// Modified version of `ucs2encode`; see https://mths.be/punycode.
var codePointToSymbol=function codePointToSymbol(codePoint,strict){var output='';if(codePoint>=0xD800&&codePoint<=0xDFFF||codePoint>0x10FFFF){// See issue #4:
// “Otherwise, if the number is in the range 0xD800 to 0xDFFF or is
// greater than 0x10FFFF, then this is a parse error. Return a U+FFFD
// REPLACEMENT CHARACTER.”
if(strict){parseError('character reference outside the permissible Unicode range');}return"\uFFFD";}if(has(decodeMapNumeric,codePoint)){if(strict){parseError('disallowed character reference');}return decodeMapNumeric[codePoint];}if(strict&&contains(invalidReferenceCodePoints,codePoint)){parseError('disallowed character reference');}if(codePoint>0xFFFF){codePoint-=0x10000;output+=stringFromCharCode(codePoint>>>10&0x3FF|0xD800);codePoint=0xDC00|codePoint&0x3FF;}output+=stringFromCharCode(codePoint);return output;};var hexEscape=function hexEscape(codePoint){return'&#x'+codePoint.toString(16).toUpperCase()+';';};var decEscape=function decEscape(codePoint){return'&#'+codePoint+';';};var parseError=function parseError(message){throw Error('Parse error: '+message);};/*--------------------------------------------------------------------------*/var encode=function encode(string,options){options=merge(options,encode.options);var strict=options.strict;if(strict&&regexInvalidRawCodePoint.test(string)){parseError('forbidden code point');}var encodeEverything=options.encodeEverything;var useNamedReferences=options.useNamedReferences;var allowUnsafeSymbols=options.allowUnsafeSymbols;var escapeCodePoint=options.decimal?decEscape:hexEscape;var escapeBmpSymbol=function escapeBmpSymbol(symbol){return escapeCodePoint(symbol.charCodeAt(0));};if(encodeEverything){// Encode ASCII symbols.
string=string.replace(regexAsciiWhitelist,function(symbol){// Use named references if requested & possible.
if(useNamedReferences&&has(encodeMap,symbol)){return'&'+encodeMap[symbol]+';';}return escapeBmpSymbol(symbol);});// Shorten a few escapes that represent two symbols, of which at least one
// is within the ASCII range.
if(useNamedReferences){string=string.replace(/&gt;\u20D2/g,'&nvgt;').replace(/&lt;\u20D2/g,'&nvlt;').replace(/&#x66;&#x6A;/g,'&fjlig;');}// Encode non-ASCII symbols.
if(useNamedReferences){// Encode non-ASCII symbols that can be replaced with a named reference.
string=string.replace(regexEncodeNonAscii,function(string){// Note: there is no need to check `has(encodeMap, string)` here.
return'&'+encodeMap[string]+';';});}// Note: any remaining non-ASCII symbols are handled outside of the `if`.
}else if(useNamedReferences){// Apply named character references.
// Encode `<>"'&` using named character references.
if(!allowUnsafeSymbols){string=string.replace(regexEscape,function(string){return'&'+encodeMap[string]+';';// no need to check `has()` here
});}// Shorten escapes that represent two symbols, of which at least one is
// `<>"'&`.
string=string.replace(/&gt;\u20D2/g,'&nvgt;').replace(/&lt;\u20D2/g,'&nvlt;');// Encode non-ASCII symbols that can be replaced with a named reference.
string=string.replace(regexEncodeNonAscii,function(string){// Note: there is no need to check `has(encodeMap, string)` here.
return'&'+encodeMap[string]+';';});}else if(!allowUnsafeSymbols){// Encode `<>"'&` using hexadecimal escapes, now that they’re not handled
// using named character references.
string=string.replace(regexEscape,escapeBmpSymbol);}return string// Encode astral symbols.
.replace(regexAstralSymbols,function($0){// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
var high=$0.charCodeAt(0);var low=$0.charCodeAt(1);var codePoint=(high-0xD800)*0x400+low-0xDC00+0x10000;return escapeCodePoint(codePoint);})// Encode any remaining BMP symbols that are not printable ASCII symbols
// using a hexadecimal escape.
.replace(regexBmpWhitelist,escapeBmpSymbol);};// Expose default options (so they can be overridden globally).
encode.options={'allowUnsafeSymbols':false,'encodeEverything':false,'strict':false,'useNamedReferences':false,'decimal':false};var decode=function decode(html,options){options=merge(options,decode.options);var strict=options.strict;if(strict&&regexInvalidEntity.test(html)){parseError('malformed character reference');}return html.replace(regexDecode,function($0,$1,$2,$3,$4,$5,$6,$7,$8){var codePoint;var semicolon;var decDigits;var hexDigits;var reference;var next;if($1){reference=$1;// Note: there is no need to check `has(decodeMap, reference)`.
return decodeMap[reference];}if($2){// Decode named character references without trailing `;`, e.g. `&amp`.
// This is only a parse error if it gets converted to `&`, or if it is
// followed by `=` in an attribute context.
reference=$2;next=$3;if(next&&options.isAttributeValue){if(strict&&next=='='){parseError('`&` did not start a character reference');}return $0;}else{if(strict){parseError('named character reference was not terminated by a semicolon');}// Note: there is no need to check `has(decodeMapLegacy, reference)`.
return decodeMapLegacy[reference]+(next||'');}}if($4){// Decode decimal escapes, e.g. `&#119558;`.
decDigits=$4;semicolon=$5;if(strict&&!semicolon){parseError('character reference was not terminated by a semicolon');}codePoint=parseInt(decDigits,10);return codePointToSymbol(codePoint,strict);}if($6){// Decode hexadecimal escapes, e.g. `&#x1D306;`.
hexDigits=$6;semicolon=$7;if(strict&&!semicolon){parseError('character reference was not terminated by a semicolon');}codePoint=parseInt(hexDigits,16);return codePointToSymbol(codePoint,strict);}// If we’re still here, `if ($7)` is implied; it’s an ambiguous
// ampersand for sure. https://mths.be/notes/ambiguous-ampersands
if(strict){parseError('named character reference was not terminated by a semicolon');}return $0;});};// Expose default options (so they can be overridden globally).
decode.options={'isAttributeValue':false,'strict':false};var escape=function escape(string){return string.replace(regexEscape,function($0){// Note: there is no need to check `has(escapeMap, $0)` here.
return escapeMap[$0];});};/*--------------------------------------------------------------------------*/var he={'version':'1.2.0','encode':encode,'decode':decode,'escape':escape,'unescape':decode};// Some AMD build optimizers, like r.js, check for specific condition patterns
// like the following:
if(freeExports&&!freeExports.nodeType){if(freeModule){// in Node.js, io.js, or RingoJS v0.8.0+
freeModule.exports=he;}else{// in Narwhal or RingoJS v0.7.0-
for(var key in he){has(he,key)&&(freeExports[key]=he[key]);}}}else{// in Rhino or a web browser
root.he=he;}})(commonjsGlobal);})(he$1,he$1.exports);var heExports=he$1.exports;var he=/*@__PURE__*/getDefaultExportFromCjs(heExports);function getTokens(v2Compatible){var Symbols={OR:'|',ELSE:'||',DYNAMIC:'$',STATIC:'#',ENTITY:'&',OPEN_GATE:'@',CLOSE_GATE:'@',PENDING_GATE:'@@',OPEN_SILENT:'{',CLOSE_SILENT:'}'};var v2Symbols={OPEN_CHOICE:'(',CLOSE_CHOICE:')',OPEN_WEIGHT:'[',CLOSE_WEIGHT:']',CONTINUATION:'\\'};var v3Symbols={OPEN_CHOICE:'[',CLOSE_CHOICE:']',OPEN_WEIGHT:'^',// also allows (int), eg. (3)
CLOSE_WEIGHT:'^',CONTINUATION:'~'};Object.assign(Symbols,v2Compatible?v2Symbols:v3Symbols);var Escaped={};Object.entries(Symbols).forEach(function(_ref8){var _ref9=_slicedToArray(_ref8,2),k=_ref9[0],v=_ref9[1];Escaped[k]=escapeRegex(v);});var PENDING_GATE_PATTERN=new RegExp("".concat(Escaped.PENDING_GATE,"([0-9]{9,11})"));Escaped.SPECIAL=Object.values(Escaped).join('').replace(/[<>]/g,'');// allow <>& for html 
Symbols.PENDING_GATE_RE=new RegExp(PENDING_GATE_PATTERN.source,'g');// for unresolved gates
var ExitGate=createToken({name:"ExitGate",pattern:new RegExp("\\s*".concat(Escaped.CLOSE_GATE)),pop_mode:true});var Gate=createToken({name:"Gate",pattern:new RegExp("[^".concat(Escaped.CLOSE_GATE,"]+"))});var PendingGate=createToken({name:"PendingGate",pattern:PENDING_GATE_PATTERN});var EnterGate=createToken({name:"EnterGate",pattern:new RegExp("".concat(Escaped.OPEN_GATE,"\\s*")),push_mode:"gate_mode"});var OC=createToken({name:"OC",pattern:new RegExp(Escaped.OPEN_CHOICE+'\\s*')});var CC=createToken({name:"CC",pattern:new RegExp("\\s*".concat(Escaped.CLOSE_CHOICE))});var OR=createToken({name:"OR",pattern:/\s*\|\s*/});var ELSE=createToken({name:"ELSE",pattern:/\s*\|\|\s*/});var EQ=createToken({name:"EQ",pattern:/\s*=\s*/});var TF=createToken({name:"TF",pattern:/\.[A-Za-z_0-9][A-Za-z_0-9]*(\(\))?/});var OS=createToken({name:"OS",pattern:new RegExp("".concat(Escaped.OPEN_SILENT,"\\s*"))});var CS=createToken({name:"CS",pattern:new RegExp("\\s*".concat(Escaped.CLOSE_SILENT))});var SYM=createToken({name:"SYM",pattern:new RegExp("[".concat(Escaped.DYNAMIC).concat(Escaped.STATIC,"][A-Za-z_0-9]*"))});var Entity=createToken({name:"Entity",pattern:/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/i});var Weight=createToken({name:"Weight",pattern:new RegExp("\\s*".concat(Escaped.OPEN_WEIGHT,".+").concat(Escaped.CLOSE_WEIGHT,"\\s*"))});var Raw=createToken({name:"Raw",pattern:new RegExp("[^".concat(Escaped.SPECIAL,"]+"))});var normalMode=[Entity,Weight,ELSE,OC,CC,OR,EQ,SYM,TF,OS,CS,PendingGate,Raw,EnterGate];var gateMode=[Gate,ExitGate];var multiMode={modes:{normal:normalMode,gate_mode:gateMode},defaultMode:'normal'};return{tokens:multiMode,Constants:{Symbols:Symbols,Escaped:Escaped}};}function escapeRegex(s){return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');}var RiScriptParser=/*#__PURE__*/function(_CstParser){_inherits(RiScriptParser,_CstParser);var _super35=_createSuper(RiScriptParser);function RiScriptParser(allTokens){var _this54;_classCallCheck(this,RiScriptParser);_this54=_super35.call(this,allTokens,{nodeLocationTracking:"full"});_this54.atomTypes=['silent','assign','symbol','choice','pgate','text','entity'];_this54.buildRules();return _this54;}_createClass(RiScriptParser,[{key:"parse",value:function parse(opts){this.input=opts.tokens;// superclass member (do not change)
var cst=this.script();if(this.errors.length>0)throw Error("[PARSING]\n"+this.errors[0].message);return cst;}},{key:"buildRules",value:function buildRules(){var _this55=this;var $=this,Tokens=this.tokensMap;$.RULE("script",function(){$.MANY(function(){return $.SUBRULE($.expr);});});$.RULE("pgate",function(){$.CONSUME(Tokens.PendingGate);$.MANY(function(){return $.CONSUME(Tokens.TF);});});$.RULE("entity",function(){$.CONSUME(Tokens.Entity);});$.RULE("gate",function(){$.CONSUME(Tokens.EnterGate);$.MANY(function(){return $.CONSUME(Tokens.Gate);});$.CONSUME(Tokens.ExitGate);});$.RULE("silent",function(){$.CONSUME(Tokens.OS);$.OPTION1(function(){return $.SUBRULE($.gate);});$.CONSUME(Tokens.SYM);$.OPTION2(function(){$.CONSUME(Tokens.EQ);$.SUBRULE($.expr);});$.CONSUME(Tokens.CS);});$.RULE("assign",function(){$.CONSUME(Tokens.SYM);$.CONSUME(Tokens.EQ);$.SUBRULE($.expr);});$.RULE("symbol",function(){$.CONSUME(Tokens.SYM);$.MANY(function(){return $.CONSUME(Tokens.TF);});});$.RULE("accept",function(){$.SUBRULE($.or_expr);});$.RULE("reject",function(){$.SUBRULE($.or_expr);});$.RULE("or_expr",function(){$.MANY_SEP({SEP:Tokens.OR,DEF:function DEF(){return $.SUBRULE($.wexpr);}});});// choice: (LP (wexpr OR)* wexpr RP) transform*;
$.RULE("choice",function(){$.CONSUME(Tokens.OC);$.OPTION1(function(){return $.SUBRULE($.gate);});$.SUBRULE($.accept);// $.MANY_SEP({
//   SEP: Tokens.OR,
//   DEF: () => $.SUBRULE($.wexpr)
// });
$.OPTION2(function(){$.CONSUME(Tokens.ELSE);$.SUBRULE($.reject);});$.CONSUME(Tokens.CC);$.MANY(function(){return $.CONSUME(Tokens.TF);});});$.RULE("wexpr",function(){$.MANY(function(){$.OR([{ALT:function ALT(){return $.SUBRULE($.expr);}},{ALT:function ALT(){return $.CONSUME(Tokens.Weight);}}]);});});$.RULE("expr",function(){$.AT_LEAST_ONE(function(){return $.SUBRULE($.atom);});});$.RULE("atom",function(){$.OR(_this55.atomTypes.map(function(t){return{ALT:function ALT(){return $.SUBRULE($[t]);}};}));});$.RULE("text",function(){$.CONSUME(Tokens.Raw);});this.performSelfAnalysis();// keep
}}]);return RiScriptParser;}(CstParser);var BaseVisitor=/*#__PURE__*/function(){function BaseVisitor(riScript){_classCallCheck(this,BaseVisitor);this.input=0;this.path='';this.tracePath=true;this.scripting=riScript;this.warnOnInvalidGates=false;this.RiScript=this.scripting.constructor;// class hack
}_createClass(BaseVisitor,[{key:"isCstNode",value:function isCstNode(o){return _typeof(o)==='object'&&('accept'in o||'name'in o&&'location'in o&&'children'in o);}},{key:"visit",value:function visit(cstNode,param){if(Array.isArray(cstNode)){cstNode=cstNode[0];}if(typeof cstNode==='undefined'){return undefined;}if(!this.isCstNode(cstNode)){throw Error('Non-cstNode passed to visit: '+JSON.stringify(cstNode));}var _cstNode=cstNode,name=_cstNode.name,location=_cstNode.location;this.nodeText=this.input.substring(location.startOffset,location.endOffset+1);if(typeof this[name]!=='function')throw Error('BaseVisitor.visit: expecting function for this['+name+'],'+' found '+_typeof(this[name])+': '+JSON.stringify(this[name]));if(this.tracePath&&!/(expr|atom|silent)/.test(name)){this.path+=name+'.';}return this[name](cstNode.children,param);}},{key:"validateVisitor",value:function validateVisitor(){/* no-op */}}]);return BaseVisitor;}();var RiScriptVisitor=/*#__PURE__*/function(_BaseVisitor){_inherits(RiScriptVisitor,_BaseVisitor);var _super36=_createSuper(RiScriptVisitor);function RiScriptVisitor(riScript){var _this56;var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_classCallCheck(this,RiScriptVisitor);_this56=_super36.call(this,riScript);// stored as global RiScript (TODO)
_this56.context=context;_this56.trace=0;_this56.choices={};_this56.isNoRepeat=false;_this56.symbols=_this56.scripting.Symbols;_this56.escaped=_this56.scripting.Escaped;// lookups
_this56.statics={};_this56.dynamics={};_this56.pendingGates={};_this56.pendingSymbols=new Set();_this56.validateVisitor();// keep
return _this56;}_createClass(RiScriptVisitor,[{key:"start",value:function start(){var opts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.input=opts.input;this.trace=opts.trace;this.traceTx=opts.traceTx;if(!opts.cst)throw Error('no cst');return _get(_getPrototypeOf(RiScriptVisitor.prototype),"visit",this).call(this,opts.cst);}},{key:"script",value:function script(ctx){this.order=0;var count=ctx.expr?ctx.expr.length:0;this.print('script',"'"+this.RiScript.escapeText(this.input)+"' :: "+count+' expression(s)');if(!count)return'';if(Object.keys(ctx).length!==1)throw Error('script: invalid expr');return this.visit(ctx.expr);}},{key:"expr",value:function expr(ctx){var _this57=this;//this.print('expr', ctx);
var types=Object.keys(ctx);if(types.length!==1)throw Error('invalid expr: '+types.length);var exprs=ctx.atom.map(function(c){return _this57.visit(c);});// handle special cases of the form: "not [quite|] far enough"
for(var _i28=1;_i28<exprs.length-1;_i28++){if(exprs[_i28].length===0&&exprs[_i28-1].endsWith(' ')&&exprs[_i28+1].startsWith(' ')){exprs[_i28+1]=exprs[_i28+1].substring(1);}}return exprs.join('');}},{key:"wexpr",value:function wexpr(ctx){this.print('wexpr');}},{key:"gate",value:function gate(ctx){var _this58=this;// returns { decision: [accept | reject] } or { decision: 'defer', operands: [] }
if(ctx.Gate.length!==1)throw Error('Invalid gate: '+ctx.Gate);var mingoQuery,raw=ctx.Gate[0].image;try{mingoQuery=this.scripting._query(raw);}catch(e){if(!this.warnOnInvalidGates){throw Error("Invalid gate[2]: \"@".concat(raw,"@\"\n\nRootCause -> ").concat(e));}if(!this.scripting.RiTa.SILENT&&!this.scripting.silent){console.warn("[WARN] Ignoring invalid gate: @".concat(raw,"@\n"),e);}return{decision:'accept'};}var resolvedOps={},unresolvedOps=[];var operands=mingoQuery.operands();operands.forEach(function(sym){var _this58$checkContext=_this58.checkContext(sym),result=_this58$checkContext.result,resolved=_this58$checkContext.resolved,isStatic=_this58$checkContext.isStatic,isUser=_this58$checkContext.isUser;if(typeof result==='function'){// while {} ?
result=result.call();// call it
resolved=!_this58.scripting.isParseable(result);}if(typeof result==='undefined'||!resolved){unresolvedOps.push(sym);}else{// add to appropriate context
if(isStatic){_this58.statics[sym]=result;}else if(isUser){_this58.context[sym]=result;}else{_this58.dynamics[sym]=result;}// store resolved result
resolvedOps[sym]=result;}});if(Object.keys(resolvedOps).length+unresolvedOps.length!==operands.length)throw Error('invalid operands');// if we have unresolved operands, return them (and defer)
if(unresolvedOps.length)return{decision:'defer',operands:unresolvedOps};var result=mingoQuery.test(resolvedOps);// do test
if(!result&&this.castValues(resolvedOps)){result=mingoQuery.test(resolvedOps);// redo test after casting
}return{decision:result?'accept':'reject'};}},{key:"assign",value:function assign(ctx,opts){var sym=ctx.SYM[0].image,value,info;var ident=sym.replace(this.scripting.AnySymbolRE,'');var isStatic=sym.startsWith(this.symbols.STATIC);if(isStatic){value=this.visit(ctx.expr);if(this.scripting.isParseable(value)){this.statics[ident]=value;// store in lookup table ??
value=this.inlineAssignment(ident,ctx.TF,value);}else{this.statics[ident]=value;// store in lookup table
this.pendingSymbols["delete"](ident);// no longer pending
this.trace&&console.log('  [pending.delete]',sym,this.pendingSymbols.length?JSON.stringify(this.pendingSymbols):'');}info="".concat(sym," = ").concat(this.RiScript.escapeText(value))+" [#static] ".concat(opts!==null&&opts!==void 0&&opts.silent?'{silent}':'');}else{var $=this;// dynamic: store as func to be resolved later, perhaps many times
value=function value(){return $.visit(ctx.expr);};info="".concat(sym," = <f*:pending>"),opts!==null&&opts!==void 0&&opts.silent?'{silent}':'';// NOTE: this function may contain a choice, which needs to be handled
// when called from a symbol with a norepeat transform (??) TODO: test
this.dynamics[ident]=value;// store in lookup table
}this.print('assign',info);return value;}},{key:"silent",value:function silent(ctx){if(ctx.EQ){this.assign(ctx,{silent:true});}else{this.symbol(ctx,{silent:true});}return'';}},{key:"atom",value:function atom(ctx){var _this59=this;var result,types=Object.keys(ctx);if(types.length!==1)throw Error('invalid atom: '+types);this.scripting.parser.atomTypes.forEach(function(type){var context=ctx[type];if(context){if(context.length!==1)throw Error(type+': bad length -> '+ctx[type].length);//console.log(type + ':', context[0]);
result=_this59.visit(context[0]);}});// pending function, call it
if(typeof result==='function'){result=result.call();}return result;}},{key:"text",value:function text(ctx){if(ctx.Raw.length!==1)throw Error('[1] invalid text');if(Object.keys(ctx).length!==1)throw Error('[2] invalid text');var image=ctx.Raw[0].image;this.print('text',this.RiScript.escapeText("'"+image+"'"));return image;}},{key:"entity",value:function entity(ctx){return this.nodeText;}},{key:"symbol",value:function symbol(ctx,opts){if(ctx.SYM.length!==1)throw Error('[1] invalid symbol');var original=this.nodeText;var symbol=ctx.SYM[0].image;var ident=symbol.replace(this.scripting.AnySymbolRE,'');this.isNoRepeat=this.hasNoRepeat(ctx.TF);if(this.pendingSymbols.has(ident)){this.print('symbol',"".concat(symbol," [is-pending]"));return original;}// lookup: result is either a value, a function, or undef
var _this$checkContext=this.checkContext(ident),result=_this$checkContext.result,isStatic=_this$checkContext.isStatic,isUser=_this$checkContext.isUser,resolved=_this$checkContext.resolved;if(!isStatic&&symbol.startsWith(this.symbols.STATIC)){if(!this.scripting.EntityRE.test(symbol)){throw Error("Attempt to refer to dynamic symbol '".concat(ident,"' as")+" ".concat(this.symbols.STATIC).concat(ident,", did you mean $").concat(ident,"?"));}}if(typeof result==='function'){// while {} ?
result=result.call();// call it
resolved=!this.scripting.isParseable(result);}if(this.isNoRepeat&&(isStatic||isUser)){this.isNoRepeat=false;var msg='Attempt to call norepeat() on '+(isStatic?"static symbol '"+symbol+"'. Did you mean to use '"+this.symbols.DYNAMIC+ident+"' ?":"non-dynamic symbol '"+ident+"'. Did you mean to define '"+this.symbols.DYNAMIC+ident+"' in riscript?");throw Error(msg);}if(typeof result==='undefined'){// nothing found, defer
this.print('symbol',symbol+" -> '"+original+"' ctx="+this.lookupsToString(),'[deferred]',opts!==null&&opts!==void 0&&opts.silent?'{silent}':'');return original;}var info=original+" -> '"+result+"'"+(opts!==null&&opts!==void 0&&opts.silent?' {silent}':'');// defer if we still have unresolved riscript
if(typeof result==='string'&&!resolved){if(isStatic){this.pendingSymbols.add(ident);result=this.inlineAssignment(ident,ctx.TF,result);this.print('symbol*',"".concat(original," -> ").concat(result," :: pending.add(").concat(ident,")"));}else{if(ctx.TF)result=this.restoreTransforms(result,ctx.TF);this.print('symbol',info);}return result;}if(isStatic){// store !untransformed! result in static context
this.statics[ident]=result;// ADDED 8/18/23 - FIXED 10/8/23
}if(ctx.TF){result=this.applyTransforms(result,ctx.TF);info+=" -> '"+result+"'";// info += " -> " + ctx.TF.map(tf => ` ${tf.image} -> `) + '\'' + result + "'";
// console.log("INFO: " + info);
if(this.isNoRepeat)info+=' (norepeat)';}this.print('symbol',info);// resolved, so remove from pending
if(this.pendingSymbols.has(ident)){this.trace&&console.log('  [$pending.delete]',(isStatic?'#':'$')+ident,this.pendingSymbols.length?JSON.stringify(this.pendingSymbols):'');this.pendingSymbols["delete"](ident);}this.isNoRepeat=false;// reset
return result;}},{key:"pgate",value:function pgate(ctx){var _this60=this;this.print('pgate',this.nodeText);//new RegExp(`^${this.symbols.PENDING_GATE}`
var original=this.nodeText;var ident=original.replace(this.symbols.PENDING_GATE,'');var lookup=this.pendingGates[ident];if(!lookup)throw Error('no pending gate="'+original+'" pgates='+JSON.stringify(Object.keys(this.pendingGates)));var stillUnresolved=lookup.operands.some(function(o){var _this60$checkContext=_this60.checkContext(o),result=_this60$checkContext.result,resolved=_this60$checkContext.resolved;if(typeof result==='function'){// while {} ?
result=result.call();// call it
resolved=!_this60.scripting.isParseable(result);}return typeof result==='undefined'||!resolved;});if(stillUnresolved)return original;// still deferred
var result=this.choice(lookup.deferredContext);// execute the gate
return result;}},{key:"else",value:function _else(ctx){// this.print('else', this.nodeText);
return this.visit(ctx.expr).trim();}},{key:"choice",value:function choice(ctx,opts){var _ctx$decision;var $=this.symbols;var rawGate,gateResult;var original=this.nodeText,info=original;var choiceKey=this.RiScript.stringHash(original+' #'+this.choiceId(ctx));if(!this.isNoRepeat&&this.hasNoRepeat(ctx.TF))throw Error('noRepeat() not allowed on choice (use a $variable instead): '+original);var decision='accept';if(opts!==null&&opts!==void 0&&opts.forceReject){decision='reject';}else{if(ctx.gate){// do we have a gate
rawGate=ctx.gate[0].children.Gate[0].image;gateResult=this.visit(ctx.gate);decision=gateResult.decision;info+="\n  [gate] ".concat(rawGate," -> ").concat(decision!=='defer'?decision.toUpperCase():"DEFER ".concat($.PENDING_GATE).concat(choiceKey),"  ").concat(this.lookupsToString());}if(gateResult){if(gateResult.decision==='defer'){this.pendingGates[choiceKey]={deferredContext:ctx,operands:gateResult.operands};return"".concat($.PENDING_GATE).concat(choiceKey);// gate defers
}}}if(decision==='reject'&&!('reject'in ctx)){return'';// rejected without reject expr, return ''
}var orExpr=(_ctx$decision=ctx[decision])===null||_ctx$decision===void 0||(_ctx$decision=_ctx$decision[0])===null||_ctx$decision===void 0||(_ctx$decision=_ctx$decision.children)===null||_ctx$decision===void 0||(_ctx$decision=_ctx$decision.or_expr)===null||_ctx$decision===void 0?void 0:_ctx$decision[0];// yuck
var options=this.parseOptions(orExpr);// get options
if(!options)throw Error('No options in choice: '+original);var value=null,excluded=[],restored=false;while(value===null){value=this.choose(options,excluded).value;// if we still have script, defer until its resolved
if(this.scripting.isParseable(value)){if(ctx.TF)value=this.restoreTransforms(value,ctx.TF);restored=true;break;}// apply any remaining transforms
if(ctx.TF)value=this.applyTransforms(value,ctx.TF);// we have 'norepeat' but value was already used, try again
if(this.isNoRepeat&&value===this.choices[choiceKey]){this.print('choice.reject',value+' [norepeat]');excluded.push(value);value=null;continue;}}if(!restored)this.choices[choiceKey]=value;// put in choice cache
return value;}// Helpers ================================================
},{key:"hasNoRepeat",value:function hasNoRepeat(tfs){var transforms=this.RiScript.transformNames(tfs);if(transforms.length){return transforms.includes('nr')||transforms.includes('norepeat');}return false;}},{key:"checkContext",value:function checkContext(ident){var isStatic=false,isUser=false,result;if(ident.length===0){return{result:'',resolved:true,isStatic:isStatic,isUser:isUser};}// check for dynamic symbol: $var
result=this.dynamics[ident];if(typeof result==='undefined'){// no dynamic
// check for static symbol: #var
result=this.statics[ident];if(typeof result!=='undefined'){isStatic=true;// found static
}}if(typeof result==='undefined'){// no static
// check for user-defined symbol: context[var]
result=this.context[ident];if(typeof result!=='undefined'){isUser=true;// found user symbol
}else{// check for user-defined dynamic? context[$var]
result=this.context[this.symbols.DYNAMIC+ident];}}// do we have more script to deal with ?
var resolved=!this.scripting.isParseable(result);return{result:result,isStatic:isStatic,isUser:isUser,resolved:resolved};// TODO: replace with 'type'
}},{key:"inlineAssignment",value:function inlineAssignment(ident,tfs,result){var $=this.symbols;var lhs=$.STATIC+ident;var rhs=this.restoreTransforms(result,tfs);result=$.OPEN_CHOICE+(lhs+'='+rhs)+$.CLOSE_CHOICE;return result;}},{key:"choiceId",value:function choiceId(ctx){if(!ctx.OC||!ctx.OC.length)throw Error('invalid choice');return ctx.OC[0].startOffset+'.'+ctx.OC[0].endOffset;}},{key:"parseOptions",value:function parseOptions(ctx){var _ctx$children,_this61=this;var options=[];if(ctx&&ctx!==null&&ctx!==void 0&&(_ctx$children=ctx.children)!==null&&_ctx$children!==void 0&&_ctx$children.wexpr){var wexprs=ctx.children.wexpr;var _loop10=function _loop10(){var wexpr=wexprs[_i29];var expr=wexpr.children.expr;if(expr&&expr.length!=1)throw Error('invalid choice-expr: '+expr.length);var weight=wexpr.children.Weight;if(weight){if(weight.length!=1)throw Error('invalid weight: '+weight.length);var mult=1;try{mult=parseInt(_this61.symbols.CLOSE_WEIGHT.length?weight[0].image.trim().slice(1,-1):weight[0].image.trim().slice(1));}catch(e){console.log('EX: '+mult);}Array.from({length:mult},function(){return options.push(expr);});}else{options.push(expr||'');}};for(var _i29=0;_i29<wexprs.length;_i29++){_loop10();}}return options;}},{key:"chooseUnique",value:function chooseUnique(options,choiceKey){// not used
var isUnique=false;while(options.length&&!isUnique){var _this$choose=this.choose(options),index=_this$choose.index,value=_this$choose.value;if(value!==this.choices[choiceKey])return value;//console.log(`Skipping ${index}: '${value}'`);
options.splice(index,1);}throw Error('No remaining options');}},{key:"choose",value:function choose(options){var excludes=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];if(!options||!options.length){throw Error('Invalid choice: no options');}var valid=options.filter(function(x){return!excludes.includes(x);});if(!valid.length){throw Error('Invalid choice: no valid options');}var index=this.scripting.RiTa.randi(valid.length);var value='',selected=valid[index];if(typeof selected==='string'){this.print('choice.text',"''");}else{// if (typeof selected === 'object') {
this.path='choice.'+this.path;value=this.visit(selected);// cstNode
}if(typeof value==='string')value=value.trim();return{index:index,value:value};}},{key:"applyTransforms",value:function applyTransforms(value,txs){if(this.traceTx)console.log('applyTransforms',this.formatTxs.apply(this,arguments));for(var _i30=0;_i30<txs.length;_i30++){value=this.applyTransform(value,txs[_i30]);}return value;}// value is not yet resolved, so store with transform for later
},{key:"restoreTransforms",value:function restoreTransforms(value,txs){if(typeof value==='string'){var patt=new RegExp('^'+this.escaped.OPEN_CHOICE+'.*'+this.escaped.CLOSE_CHOICE+'$');if(!patt.test(value)){// wrap in choice to preserve
value=this.symbols.OPEN_CHOICE+value+this.symbols.CLOSE_CHOICE;}if(txs){txs.forEach(function(tx){return value+=tx.image;});// append transform strings
}if(this.traceTx)console.log('restoreTransforms:',value);}return value;}},{key:"castValues",value:function castValues(obj){var madeCast=false;Object.entries(obj).forEach(function(_ref10){var _ref11=_slicedToArray(_ref10,2),k=_ref11[0],v=_ref11[1];var num=parseFloat(v);if(!isNaN(num)){madeCast=true;obj[k]=num;// update object with casted value
}});return madeCast;}},{key:"contextIsResolved",value:function contextIsResolved(table){var _this62=this;var allResolved=true;Object.entries(table).forEach(function(_ref12){var _ref13=_slicedToArray(_ref12,2),key=_ref13[0],val=_ref13[1];if(!_this62.scripting.isParseable(val)){allResolved=false;return;}});return allResolved;}},{key:"applyTransform",value:function applyTransform(target,transform){var image=transform.image;var result,raw=target+image;var tx=image.substring(1).replace(/\(\)$/,'');// function in dynamics
if(typeof this.dynamics[tx]==='function'){result=this.dynamics[tx](target);}// function in statics
else if(typeof this.statics[tx]==='function'){result=this.statics[tx](target);}// function in context
else if(typeof this.context[tx]==='function'){result=this.context[tx](target);}// function in transforms
else if(typeof this.RiScript.transforms[tx]==='function'){result=this.RiScript.transforms[tx](target);}// member functions (usually on String)
else if(typeof target[tx]==='function'){result=target[tx]();}else{// check for property
if(target.hasOwnProperty(tx)){result=target[tx];}else{if(!this.scripting.RiTa.SILENT&&!this.scripting.silent){console.warn('[WARN] Unresolved transform: '+raw);}/* Replace transform parens so as not to trigger
           RiScript.isParseable (for example, in v2) 0*/result=raw.replace(/\(\)$/,'&lpar;&rpar;');}}if(this.trace)console.log("".concat(this.tindent(),"[transform] ").concat(raw," -> '").concat(result,"'"));return result;}},{key:"lookupsToString",value:function lookupsToString(){var dyns={},stats={};Object.entries(this.dynamics||{}).forEach(function(_ref14){var _ref15=_slicedToArray(_ref14,2),k=_ref15[0],v=_ref15[1];return dyns["$".concat(k," ")]=v;});Object.entries(this.statics||{}).forEach(function(_ref16){var _ref17=_slicedToArray(_ref16,2),k=_ref17[0],v=_ref17[1];return stats["#".concat(k," ")]=v;});return JSON.stringify(_objectSpread(_objectSpread(_objectSpread({},this.context),stats),dyns),function(k,v){return typeof v==='function'?'<f*:pending>':v;}).replace(/"/g,'');}},{key:"formatTxs",value:function formatTxs(value,txs){return value+txs.map(function(tx){return tx.image.replace(/()/,'')+'()';}).join('');}},{key:"print",value:function print(s){if(this.trace){var _console;if(this.path&&s!=='script'){s=this.path.replace(/\.$/,'');}for(var _len5=arguments.length,args=new Array(_len5>1?_len5-1:0),_key5=1;_key5<_len5;_key5++){args[_key5-1]=arguments[_key5];}(_console=console).log.apply(_console,[++this.order,"[".concat(s,"]")].concat(args));this.path='';}}},{key:"tindent",value:function tindent(){return' '.repeat((this.order+'').length+1);}}]);return RiScriptVisitor;}(BaseVisitor);// console.log('&#33; -> '+decode('&#33;'));
// console.log('&amp; -> '+decode('&amp;'));
var decode=he.decode;/*
  Specification:
    script: expr+
    expr: (atom)+
    wexpr: (atom)+ weight
    symbol: SYM transform*
    assign: SYM EQ expr transform*
    gate: @mingo@
    silent: { gate? expr }
    atom: (choice | symbol | text | silent) weight?
    choice: [ gate? ( expr | wexpr ) (OR  (expr | wexpr ) )* else? ] transform*
    else: ELSE expr
    raw: Raw
*/ //import { decode } from 'html-entitiesX';
var VowelRE=/[aeiou]/;var RegexEscape='_RE_';var HtmlEntities=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi;var RiQuery=/*#__PURE__*/function(_Query){_inherits(RiQuery,_Query);var _super37=_createSuper(RiQuery);function RiQuery(scripting,condition,options){_classCallCheck(this,RiQuery);if(typeof condition==='string'){condition=scripting.parseJSOL(condition);//console.log('RAW: ', raw, 'parsed', condition);
}return _super37.call(this,condition,options);}_createClass(RiQuery,[{key:"test",value:function test(obj){for(var _i31=0,len=this.compiled.length;_i31<len;_i31++){if(!this.compiled[_i31](obj))return false;}return true;}},{key:"operands",value:function operands(){var stack=[this.condition];var keys=new Set();var _loop11=function _loop11(){var currentObj=stack.pop();Object.keys(currentObj).forEach(function(key){var value=currentObj[key];// console.log(`key: ${ key }, value: ${ value } `);
if(!key.startsWith('$'))keys.add(key);if(_typeof(value)==='object'&&value!==null){var eles=Array.isArray(value)?value:[value];eles.forEach(function(ele){return stack.push(ele);});}});};while((stack===null||stack===void 0?void 0:stack.length)>0){_loop11();}return Array.from(keys);}}]);return RiQuery;}(Query);var RiScript=/*#__PURE__*/function(){function RiScript(){var opts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,RiScript);// private ?
this.visitor=0;// created in evaluate() or passed in here
this.v2Compatible=opts.compatibility===2;var _getTokens=getTokens(this.v2Compatible),Constants=_getTokens.Constants,tokens=_getTokens.tokens;this.Escaped=Constants.Escaped;this.Symbols=Constants.Symbols;var anysym=Constants.Escaped.STATIC+Constants.Escaped.DYNAMIC;var open=Constants.Escaped.OPEN_CHOICE,close=Constants.Escaped.CLOSE_CHOICE;this.JSOLIdentRE=new RegExp("([".concat(anysym,"]?[A-Za-z_0-9][A-Za-z_0-9]*)\\s*:"),'g');this.RawAssignRE=new RegExp("^[".concat(anysym,"][A-Za-z_0-9][A-Za-z_0-9]*\\s*="));this.ChoiceWrapRE=new RegExp('^'+open+'[^'+open+close+']*'+close+'$');this.SpecialRE=new RegExp("[".concat(this.Escaped.SPECIAL.replace('&',''),"]"));this.ContinueRE=new RegExp(this.Escaped.CONTINUATION+'\\r?\\n','g');this.WhitespaceRE=/[\u00a0\u2000-\u200b\u2028-\u2029\u3000]+/g;this.AnySymbolRE=new RegExp("[".concat(anysym,"]"));// added
this.silent=false;this.lexer=new Lexer(tokens);this.parser=new RiScriptParser(tokens);this.RiTa=opts.RiTa||{VERSION:0,randi:function randi(k){return Math.floor(Math.random()*k);}};}_createClass(RiScript,[{key:"lex",value:function lex(opts){if(!opts.input)throw Error('no input');var lexResult=this.lexer.tokenize(opts.input);if(lexResult.errors.length){console.error('Input: '+opts.input+'\n',lexResult.errors[0].message);throw Error('[LEXING] '+lexResult.errors[0].message);}if(opts.trace)this.printTokens(lexResult.tokens);opts.tokens=lexResult.tokens;// return lexResult;
}},{key:"parse",value:function parse(opts){opts.cst=this.parser.parse(opts);}},{key:"visit",value:function visit(opts){return this.visitor.start(opts);}},{key:"lexParseVisit",value:function lexParseVisit(){var opts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.lex(opts);this.parse(opts);return this.visit(opts);}},{key:"evaluate",value:function evaluate(script,context){var opts=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};if(typeof script!=='string'){throw Error('RiScript.evaluate() expects a string, got '+_typeof(script));}opts.input=script;opts.visitor=new RiScriptVisitor(this,context);return this._evaluate(opts);}},{key:"_evaluate",value:function _evaluate(opts){var input=opts.input;// opts.onepass = true; // TMP
var last,endingBreak=/\r?\n$/.test(input);// keep
var expr=this.preParse(input,opts);if(!expr)return'';if(opts.trace)console.log("\nInput:  '".concat(RiScript.escapeText(input),"'"));if(opts.trace&&input!==expr){console.log("Parsed: '".concat(RiScript.escapeText(expr),"'"));}if(!opts.visitor)throw Error('no visitor');this.visitor=opts.visitor;delete opts.visitor;// remind me why
for(var _i32=1;expr!==last&&_i32<=10;_i32++){last=expr;if(opts.trace)console.log('-'.repeat(20)+' Pass#'+_i32+' '+'-'.repeat(20));opts.input=expr;expr=this.lexParseVisit(opts);// do it
if(opts.trace)console.log("Result(".concat(_i32,") -> \"")+"".concat(RiScript.escapeText(expr),"\" ctx=").concat(this.visitor.lookupsToString()));// end if no more riscript
if(opts.onepass||!this.isParseable(expr))break;}// check for unresolved symbols ([$#]) after removing HTML entities
if(!this.silent&&!this.RiTa.SILENT){if(this.AnySymbolRE.test(expr.replace(HtmlEntities,''))){console.warn('[WARN] Unresolved symbol(s) in "'+expr.replace(/\n/g,'\\n')+'" ');}}return this.postParse(expr,opts)+(endingBreak?'\n':'');}},{key:"_query",value:function _query(rawQuery,opts){return new RiQuery(this,rawQuery,opts);}},{key:"printTokens",value:function printTokens(tokens){var s=tokens.reduce(function(str,t){var name=t.tokenType.name;var tag=name;if(tag==='TEXT')tag=RiScript.escapeText(t.image,1);if(tag==='SYM')tag='sym('+t.image+')';if(tag==='TX')tag='tx('+t.image+')';return str+tag+', ';},'').slice(0,-2);console.log('\nTokens: [ '+s+' ]  Context:',this.visitor.lookupsToString());}},{key:"postParse",value:function postParse(input,opts){var _this63=this;if(typeof input!=='string')return'';// replace html entities
var decoded=decode(input);// clean up whitespace, linebreaks
var result=decoded.replace(this.WhitespaceRE,' ').replace(/\r?\n$/,'');// handle unresolved gates
var gates=_toConsumableArray(result.matchAll(this.Symbols.PENDING_GATE_RE));gates.forEach(function(g){if(!g||!g[0]||!g[1])throw Error('bad gate: '+g);var deferredGate=_this63.visitor.pendingGates[g[1]];var deferredContext=deferredGate.deferredContext,operands=deferredGate.operands;if(!operands.length)throw Error('no operands');var reject=_this63.visitor.choice(deferredContext,{forceReject:true});result=result.replace(g[0],reject);if(opts.trace)console.log('  '+g[0]+'-> '+reject);});if(opts.trace)console.log("\nFinal: '".concat(result,"'"));if(!opts.preserveLookups){// reset lookups unless preserveLookups=true (for testing only)
this.visitor.statics=undefined;this.visitor.dynamics=undefined;}return result;}},{key:"preParse",value:function preParse(script,opts){if(typeof script!=='string')return'';var $=this.Symbols;var input=script;if(!this.v2Compatible){// handle parenthesized weights ??
input=input.replace(/\((\s*\d+\s*)\)/g,'^$1^');}input=input.replace(/\/\*[^]*?(\r?\n)?\//g,'');// multi-line comments
input=input.replace(/\/\/[^\n]+(\r?\n|$)/g,'');// single-line comments
input=input.replace(this.ContinueRE,'');// line continuations
input=slashEscapesToEntities(input);// double-backslashed escapes
var result='';var lines=input.split(/\r?\n/);for(var _i33=0;_i33<lines.length;_i33++){// special-case: handle assignments alone on a line
if(/*!opts.noAddedSilence && */this.RawAssignRE.test(lines[_i33])){// a very convoluted way of preserving line-breaks inside groups
var eqIdx=lines[_i33].indexOf('=');if(eqIdx<0)throw Error('invalid state: no assigment: '+lines[_i33]);var lhs=lines[_i33].substring(0,eqIdx),rhs=lines[_i33].substring(eqIdx+1);var opens=charCount(rhs,$.OPEN_CHOICE);var closes=charCount(rhs,$.CLOSE_CHOICE);while(opens>closes){var line=lines[++_i33];rhs+='\n'+line;opens+=charCount(line,$.OPEN_CHOICE);closes+=charCount(line,$.CLOSE_CHOICE);}result+=$.OPEN_SILENT+(lhs+'='+rhs)+$.CLOSE_SILENT;}else{result+=lines[_i33];if(_i33<lines.length-1)result+='\n';}}return result;}/**
   * Parses a mingo query into JSON format
   */},{key:"parseJSOL",value:function parseJSOL(text){var unescapeRegexProperty=function unescapeRegexProperty(text){// TODO: why do we need this?
var res=text;if(typeof text==='string'&&text.startsWith(RegexEscape)&&text.endsWith(RegexEscape)){var parts=text.split(RegexEscape);if(parts.length!==4)throw Error('invalid regex in unescape');res=new RegExp(parts[1],parts[2]);}return res;};var escaped=RiScript.escapeJSONRegex(text).replace(this.JSOLIdentRE,'"$1":').replace(/'/g,'"');// console.log("escaped: '"+escaped+"'");
var result=JSON.parse(escaped),urp=unescapeRegexProperty;Object.keys(result).forEach(function(k){return result[k]=urp(result[k]);});return result;}},{key:"isParseable",value:function isParseable(s){// conservatively assume non-string/numbers are always parseable
var result=true;var isStrOrNum=/(string|number)/.test(_typeof(s));// if a string or num, test for special chars
if(isStrOrNum)result=this.SpecialRE.test(s.toString());return result;}// ========================= statics ===============================
}],[{key:"evaluate",value:function evaluate(script,context){var opts=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};return new RiScript().evaluate(script,context,opts);}},{key:"transformNames",value:function transformNames(txs){return txs&&txs.length?txs.map(function(tx){return tx.image.replace(/(^\.|\(\)$)/g,'');},[]):[];}},{key:"flattenTransforms",value:function flattenTransforms(txs){if(!txs||!txs.length)return'';return txs.map(function(tx){return tx.image;},[]).join('');}},{key:"escapeText",value:function escapeText(s,quotify){if(typeof s!=='string')return s;var t=s.replace(/\r?\n/g,'\\n');return quotify||!t.length?"'"+t+"'":t;}},{key:"escapeJSONRegex",value:function escapeJSONRegex(text){return text.replace(/\/([^/]+?)\/([igmsuy]*)/g,"\"".concat(RegexEscape,"$1").concat(RegexEscape,"$2").concat(RegexEscape,"\""));}},{key:"stringHash",value:function stringHash(s){var chr,hash=0;for(var _i34=0;_i34<s.length;_i34++){chr=s.charCodeAt(_i34);hash=(hash<<5)-hash+chr;hash|=0;// Convert to 32bit integer
}var strHash=hash.toString();return hash<0?strHash.replace('-','0'):strHash;}// Default transform that adds an article
},{key:"articlize",value:function articlize(s){var _RiScript$RiTa;if(!s||!s.length)return'';var first=s.split(/\s+/)[0];if(!((_RiScript$RiTa=RiScript.RiTa)!==null&&_RiScript$RiTa!==void 0&&_RiScript$RiTa.phones)){if(!RiScript.RiTaWarnings.phones){console.warn('[WARN] Install RiTa for proper phonemes');RiScript.RiTaWarnings.phones=true;}// first.startsWith('a') ? 'an ' : 'a ') + s;
return(/^[aeiou].*/i.test(first)?'an ':'a ')+s;}var phones=RiScript.RiTa.phones(first,{silent:true});// could still be original word if no phones found
return(phones&&phones.length&&VowelRE.test(phones[0])?'an ':'a ')+s;}// Default transform that capitalizes the first character
},{key:"capitalize",value:function capitalize(s){return s?s[0].toUpperCase()+s.substring(1):'';}// Default transform that capitalizes the string
},{key:"uppercase",value:function uppercase(s){return s?s.toUpperCase():'';}// Default transform that wraps the string in (smart) quotes.
},{key:"quotify",value:function quotify(s){return'&#8220;'+(s||'')+'&#8221;';}// Default transform that pluralizes a string (requires RiTa)
},{key:"pluralize",value:function pluralize(s){var _RiScript$RiTa2;if(!((_RiScript$RiTa2=RiScript.RiTa)!==null&&_RiScript$RiTa2!==void 0&&_RiScript$RiTa2.pluralize)){if(!RiScript.RiTaWarnings.plurals){RiScript.RiTaWarnings.plurals=true;console.warn('[WARN] Install RiTa for proper pluralization');}return s.endsWith('s')?s:s+'s';}return RiScript.RiTa.pluralize(s);}// Default no-op transform
},{key:"identity",value:function identity(s){return s;}// Default transform that returns an empty string
},{key:"empty",value:function empty(s){return'';}}]);return RiScript;}();////////////////////// STATIC PROPS ///////////////////////
_defineProperty(RiScript,"Query",RiQuery);_defineProperty(RiScript,"RiTaWarnings",{plurals:false,phones:false});RiScript.transforms={quotify:RiScript.quotify,pluralize:RiScript.pluralize,capitalize:RiScript.capitalize,articlize:RiScript.articlize,uppercase:RiScript.uppercase,// sequences
norepeat:RiScript.identity,// aliases
art:RiScript.articlize,nr:RiScript.identity,cap:RiScript.capitalize,ucf:RiScript.capitalize,// deprecated?
uc:RiScript.uppercase,qq:RiScript.quotify,s:RiScript.pluralize};// (async function () {
//   let loaded;
//   try {
//     loaded = await import(/*webpackIgnore: true*/'rita');
//     if (loaded && loaded?.default) RiScript.RiTa = loaded.default;
//   } catch (error) {
//     // console.warn('[WARN] Unable to load RiTa:', error?.message);
//   }
// })();
RiScript.Visitor=RiScriptVisitor;///////////////////////// FUNCTIONS /////////////////////////
function slashEscapesToEntities(s){s=replaceAll(s,'\\(','&lpar;');s=replaceAll(s,'\\)','&rpar;');s=replaceAll(s,'\\[','&lsqb;');s=replaceAll(s,'\\]','&rsqb;');s=replaceAll(s,'\\{','&lcqb;');s=replaceAll(s,'\\}','&rcqb;');s=replaceAll(s,'\\@','&commat;');s=replaceAll(s,'\\#','&num;');s=replaceAll(s,'\\|',' &vert');s=replaceAll(s,'\\=',' &equals');return s;}function escapeRegExp(string){return string.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}function replaceAll(str,match,replacement){return str.replace(new RegExp(escapeRegExp(match),'g'),function(){return replacement;});}function charCount(str,c){var count=0;for(var _i35=0;_i35<str.length;_i35++){if(str[_i35]===c)count++;}return count;}// esm
export{RiScript as default};
//# sourceMappingURL=riscript.es5.js.map
