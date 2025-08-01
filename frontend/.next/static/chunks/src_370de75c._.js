(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/redux/hooks.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useAppDispatch": ()=>useAppDispatch,
    "useAppSelector": ()=>useAppSelector
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
const useAppDispatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"];
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/products/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/productApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ProductPage = ()=>{
    _s();
    const { products, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "ProductPage.useAppSelector": (state)=>state.products
    }["ProductPage.useAppSelector"]);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductPage.useEffect": ()=>{
            const fetchData = {
                "ProductPage.useEffect.fetchData": async ()=>{
                    if (!products || products.length === 0) {
                        await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProducts"])());
                    }
                }
            }["ProductPage.useEffect.fetchData"];
            fetchData();
        }
    }["ProductPage.useEffect"], [
        dispatch,
        products.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductPage.useEffect": ()=>{
            console.log("i wanna check products", products);
        }
    }["ProductPage.useEffect"], [
        products
    ]);
    const handleCreate = async ()=>{
        const formData = {
            title: "Wireless Headphones",
            description: "Noise-cancelling over-ear headphones.",
            date: "2025-08-01",
            price: "$199.99",
            image: "https://example.com/image.jpg"
        };
        try {
            const resultAction = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProduct"])(formData));
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProduct"].fulfilled.match(resultAction)) {
                alert("create product successfully");
            } else {
                throw new Error("Failed to create");
            }
        } catch (error) {
            console.error("create Error:", error.message);
            alert("An error occur while creating the product");
        }
    };
    const handleUpdate = async ()=>{
        const updateData = {
            _id: "688c144c68decd75e58dfb78",
            title: "Watch2",
            description: "watch best seller2.",
            date: "2025-08-01",
            price: "$299.99",
            image: "https://example.com/image.jpg"
        };
        try {
            const resultAction = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProducts"])({
                id: updateData._id,
                updateData
            }));
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProducts"].fulfilled.match(resultAction)) {
                alert("update Product successfully");
            } else {
                throw new Error("Failed to udpate");
            }
        } catch (error) {
            console.error("update Error:", error.message);
            alert("An error accour while the update product");
        }
    };
    const handleDelete = async ()=>{
        try {
            const resultAction = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteProduct"])({
                id: "688c144c68decd75e58dfb78"
            }));
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteProduct"].fulfilled.match(resultAction)) {
                alert("product deleted successfully");
                await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProducts"])());
            } else {
                throw new Error("delete Failed");
            }
        } catch (error) {
            console.error("delete Error:", error.message);
            alert("An error accour while deleting the product");
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "loading..."
    }, void 0, false, {
        fileName: "[project]/src/app/products/page.tsx",
        lineNumber: 95,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            "This is our Products",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
                onClick: handleCreate,
                children: "create"
            }, void 0, false, {
                fileName: "[project]/src/app/products/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
                onClick: handleUpdate,
                children: "update"
            }, void 0, false, {
                fileName: "[project]/src/app/products/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
                onClick: handleDelete,
                children: "Delete"
            }, void 0, false, {
                fileName: "[project]/src/app/products/page.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/products/page.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProductPage, "xZIAUwfEljYzep4diszwC3SUZp8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"]
    ];
});
_c = ProductPage;
const __TURBOPACK__default__export__ = ProductPage;
var _c;
__turbopack_context__.k.register(_c, "ProductPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_370de75c._.js.map