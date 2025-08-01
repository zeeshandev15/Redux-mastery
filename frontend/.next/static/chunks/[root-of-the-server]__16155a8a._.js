(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[next]/internal/font/google/geist_e531dabc.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "geist_e531dabc-module__QGiZLq__className",
  "variable": "geist_e531dabc-module__QGiZLq__variable",
});
}),
"[next]/internal/font/google/geist_e531dabc.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_e531dabc.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist', 'Geist Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/geist_mono_68a01160.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "geist_mono_68a01160-module__YLcDdW__className",
  "variable": "geist_mono_68a01160-module__YLcDdW__variable",
});
}),
"[next]/internal/font/google/geist_mono_68a01160.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_mono_68a01160.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist Mono', 'Geist Mono Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/src/lib/axios/axiosInstance.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "http://localhost:9000",
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/api/customerApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createCustomer": ()=>createCustomer,
    "deleteCustomer": ()=>deleteCustomer,
    "fetchCustomer": ()=>fetchCustomer,
    "updateCustomers": ()=>updateCustomers
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios/axiosInstance.ts [app-client] (ecmascript)");
;
;
const createCustomer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("create/customer", async (param, thunkAPI)=>{
    let { data } = param;
    try {
        const { data: result } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/customers", data);
        return result;
    } catch (error) {
        const errorMessage = (error === null || error === void 0 ? void 0 : error.response.data.message) || error.message || "Something Went Wrong";
        return thunkAPI.rejectWithValue(errorMessage);
    }
});
const fetchCustomer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("fetch/customer", async (_, thunkAPI)=>{
    try {
        const { data: result } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/customers");
        return result;
    } catch (error) {
        const errormessage = (error === null || error === void 0 ? void 0 : error.response.data.message) || error.message || "Something went wrong";
        return thunkAPI.rejectWithValue(errormessage);
    }
});
const updateCustomers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("update/customers", async (param, thunkAPI)=>{
    let { id, data } = param;
    try {
        const { data: result } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("/api/customers/".concat(id), data);
        return result;
    } catch (error) {
        var _error_response_data, _error_response;
        const errorMessage = (error === null || error === void 0 ? void 0 : (_error_response = error.response) === null || _error_response === void 0 ? void 0 : (_error_response_data = _error_response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.message) || error.message || "Something went wrong";
        return thunkAPI.rejectWithValue(errorMessage);
    }
});
const deleteCustomer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("delete/customers", async (param, thunkAPI)=>{
    let { id } = param;
    try {
        const { data: result } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("/api/customers/".concat(id));
        return result;
    } catch (error) {
        const errorMessage = (error === null || error === void 0 ? void 0 : error.response.data.message) || error.message || "Something went wrong";
        return thunkAPI.rejectWithValue(errorMessage);
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/redux/slices/customerSlice.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearCustomerState": ()=>clearCustomerState,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/customerApi.ts [app-client] (ecmascript)");
;
;
const initialState = {
    customers: [],
    loading: false,
    error: null
};
const customerSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "customers",
    initialState,
    reducers: {
        clearCustomerState: ()=>initialState
    },
    extraReducers: (builder)=>{
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCustomer"].pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCustomer"].pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCustomers"].pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCustomer"].pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCustomer"].fulfilled, (state, action)=>{
            state.loading = false;
            state.customers = action.payload.customers;
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCustomer"].rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || action.error.message || "Failed to Create Customer";
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCustomer"].fulfilled, (state, action)=>{
            state.loading = false;
            state.customers = action.payload.customers;
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCustomer"].rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || action.error.message || "Failed to fetch Customer";
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCustomers"].fulfilled, (state, action)=>{
            state.loading = false;
            const index = state.customers.findIndex((customer)=>customer._id === action.payload.id);
            if (index !== -1) {
                state.customers[index] = action.payload;
            }
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCustomers"].rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || action.error.message || "Failed to update Customer";
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCustomer"].fulfilled, (state, action)=>{
            state.loading = false;
            state.customers = state.customers.filter((customer)=>customer._id !== action.payload.id);
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCustomer"].rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || action.error.message || "failed to delete customer";
        });
    }
});
const { clearCustomerState } = customerSlice.actions;
const __TURBOPACK__default__export__ = customerSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/api/productApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createProduct": ()=>createProduct,
    "deleteProduct": ()=>deleteProduct,
    "getProducts": ()=>getProducts,
    "updateProducts": ()=>updateProducts
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios/axiosInstance.ts [app-client] (ecmascript)");
;
;
const createProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("create/product", async (formData, thunkAPI)=>{
    try {
        const { data: result } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("api/products", formData);
        return result;
    } catch (error) {
        const errorMessage = error.response.data.message || error.message || "Something went wrong";
        return thunkAPI.rejectWithValue(errorMessage);
    }
});
const getProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("get/products", async (_, thunkAPI)=>{
    try {
        const { data: result } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("api/products");
        return result;
    } catch (error) {
        const errorMessage = error.response.data.message || error.message || "Something went Wrong";
        return thunkAPI.rejectWithValue(errorMessage);
    }
});
const updateProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("update/products", async (param, thunkAPI)=>{
    let { id, updateData } = param;
    try {
        const { data: result } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("api/products/".concat(id), updateData);
        return result;
    } catch (error) {
        const errorMessage = error.response.data.message || error.message || "Something went wrong";
        return thunkAPI.rejectWithValue(errorMessage);
    }
});
const deleteProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("delete/product", async (param, thunkAPI)=>{
    let { id } = param;
    try {
        const { data: result } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("api/products/".concat(id));
        return result;
    } catch (error) {
        const errorMessage = error.response.data.message || error.message || "Something Went Wrong";
        return thunkAPI.rejectWithValue(errorMessage);
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/redux/slices/productSlice.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearAuthState": ()=>clearAuthState,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/productApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
;
const initialState = {
    products: [],
    loading: false,
    error: null
};
const productSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "products",
    initialState,
    reducers: {
        clearAuthState: ()=>initialState
    },
    extraReducers: (builder)=>{
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProduct"].pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProducts"].pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProducts"].pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteProduct"].pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProduct"].fulfilled, (state, action)=>{
            state.loading = false;
            state.products = action.payload.products;
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProduct"].rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || action.error.message || "Failed to create product";
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProducts"].fulfilled, (state, action)=>{
            state.loading = false;
            state.products = action.payload.products;
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProducts"].rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || action.error.message || "Failed to fetch products";
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProducts"].fulfilled, (state, action)=>{
            state.loading = false;
            const index = state.products.findIndex((p)=>p._id === action.payload._id);
            state.products[index] = action.payload;
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProducts"].rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || action.error.message || "Failed to update product";
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteProduct"].fulfilled, (state, action)=>{
            state.loading = false;
            state.products = state.products.filter((p)=>p._id !== action.payload.id);
        });
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteProduct"].rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || action.error.message || "Failed to delete product";
        });
    }
});
const { clearAuthState } = productSlice.actions;
const __TURBOPACK__default__export__ = productSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/redux/rootReducer.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux/dist/redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$customerSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/slices/customerSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$productSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/slices/productSlice.ts [app-client] (ecmascript)");
;
;
;
const rootReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineReducers"])({
    customers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$customerSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    products: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$productSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
const __TURBOPACK__default__export__ = rootReducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/redux/store.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "persistor": ()=>persistor,
    "store": ()=>store
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__persistReducer$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/persistReducer.js [app-client] (ecmascript) <export default as persistReducer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__persistStore$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/persistStore.js [app-client] (ecmascript) <export default as persistStore>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/lib/storage/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$rootReducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/rootReducer.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const persistConfig = {
    key: "root",
    storage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    whitelist: [
        ""
    ]
};
const persistedReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__persistReducer$3e$__["persistReducer"])(persistConfig, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$rootReducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
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
const persistor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__persistStore$3e$__["persistStore"])(store);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>RootLayout
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_e531dabc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_mono_68a01160.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$integration$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/integration/react.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function RootLayout(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "".concat(__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].variable, " ").concat(__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].variable, " antialiased"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
                store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$integration$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistGate"], {
                    loading: null,
                    persistor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persistor"],
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__16155a8a._.js.map