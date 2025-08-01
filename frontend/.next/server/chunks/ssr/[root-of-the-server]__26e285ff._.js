module.exports = {

"[externals]/util [external] (util, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/src/lib/axios/axiosInstance.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "http://localhost:8001",
    headers: {
        "Content-Type": "application/json"
    }
});
// smart interceptor
axiosInstance.interceptors.request.use((config)=>{
    if (config.data instanceof FormData) {
        config.headers["Content-Type"] = "multipart/form-data";
    }
    return config;
});
const __TURBOPACK__default__export__ = axiosInstance;
}),
"[project]/src/lib/api/customerApi.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createCustomer": ()=>createCustomer,
    "fetchCustomer": ()=>fetchCustomer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2f$axiosInstance$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios/axiosInstance.ts [app-ssr] (ecmascript)");
;
;
const createCustomer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("create/customer", async (_, thunkAPI)=>{
    try {
        const { data: result } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2f$axiosInstance$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/api/customer");
        return result;
    } catch (error) {
        const errorMessage = error?.response.data.message || error.message || "Something Went Wrong";
        return thunkAPI.rejectWithValue(errorMessage);
    }
});
const fetchCustomer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("fetch/customer", async (_, thunkAPI)=>{
    try {
        const { data: result } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2f$axiosInstance$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/api/customer");
        return result;
    } catch (error) {
        const errormessage = error?.response.data.message || error.message || "Something went wrong";
        return thunkAPI.rejectWithValue(errormessage);
    }
});
}),
"[project]/src/redux/slices/customerSlice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "clearCustomerState": ()=>clearCustomerState,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/customerApi.ts [app-ssr] (ecmascript)");
;
;
const initialState = {
    customers: [],
    loading: false,
    error: null
};
const customerSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "customers",
    initialState,
    reducers: {
        clearCustomerState: ()=>initialState
    },
    extraReducers: (builder)=>{
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCustomer"].pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchCustomer"].pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCustomer"].fulfilled, (state, action)=>{
            state.loading = false;
            state.customers = action.payload.customers;
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCustomer"].rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || action.error.message || "Failed to Create Customer";
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchCustomer"].fulfilled, (state, action)=>{
            state.loading = false;
            state.customers = action.payload.customers;
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchCustomer"].rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || action.error.message || "Failed to fetch Customer";
        });
    }
});
const { clearCustomerState } = customerSlice.actions;
const __TURBOPACK__default__export__ = customerSlice.reducer;
}),
"[project]/src/redux/rootReducer.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux/dist/redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$customerSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/slices/customerSlice.ts [app-ssr] (ecmascript)");
;
;
const rootReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineReducers"])({
    customers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$customerSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
const __TURBOPACK__default__export__ = rootReducer;
}),
"[project]/src/redux/store.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "persistor": ()=>persistor,
    "store": ()=>store
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__persistReducer$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/persistReducer.js [app-ssr] (ecmascript) <export default as persistReducer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__persistStore$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/persistStore.js [app-ssr] (ecmascript) <export default as persistStore>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/lib/storage/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$rootReducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/rootReducer.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const persistConfig = {
    key: "root",
    storage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    whitelist: [
        "customers"
    ]
};
const persistedReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__persistReducer$3e$__["persistReducer"])(persistConfig, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$rootReducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    "persist/PERSIST",
                    "persist/REHYDRATE"
                ]
            }
        })
});
const persistor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__persistStore$3e$__["persistStore"])(store);
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__26e285ff._.js.map