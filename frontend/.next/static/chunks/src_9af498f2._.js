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
"[project]/src/app/customers/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/customerApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Customer = ()=>{
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { customers, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "Customer.useAppSelector": (state)=>state.customers
    }["Customer.useAppSelector"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Customer.useEffect": ()=>{
            const fetchData = {
                "Customer.useEffect.fetchData": async ()=>{
                    if (customers.length === 0) {
                        await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCustomer"])());
                    }
                }
            }["Customer.useEffect.fetchData"];
            fetchData();
        }
    }["Customer.useEffect"], [
        dispatch,
        customers.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Customer.useEffect": ()=>{
            console.log("🚀 ~ Customer ~ customers:", customers);
        }
    }["Customer.useEffect"], [
        customers
    ]);
    const handleCreate = async ()=>{
        const newCustomer = {
            name: "Shafan",
            location: "Lahore",
            joinedDate: "2025-07-30",
            email: "shafan@example.com",
            phone: "03001234567"
        };
        try {
            const resultAction = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCustomer"])({
                data: newCustomer
            }));
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCustomer"].fulfilled.match(resultAction)) {
                alert("create customer successfully");
            } else {
                throw new Error("create Failed");
            }
        } catch (error) {
            console.error("create Error:", error.message);
            alert("An error occured while  creating  the Customer");
        }
    };
    const handleUpdate = async ()=>{
        const Id = "6889eb0408d0c70c905f46ed";
        const Data = {
            name: "Shafan",
            location: "Lahore",
            joinedDate: "2025-07-30",
            email: "shafan@example.com",
            phone: "03001234567"
        };
        try {
            const resultAction = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCustomers"])({
                id: Id,
                data: Data
            }));
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCustomers"].fulfilled.match(resultAction)) {
                alert("Customer Update scucessfully");
            } else {
                throw new Error("Update failed.");
            }
        } catch (error) {
            console.error("Update error:", error.message);
            alert("An error occured while updating the customer");
        }
    };
    const handleDelete = async ()=>{
        const Id = "6889eb0408d0c70c905f46ed";
        try {
            const resultAction = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCustomer"])({
                id: Id
            }));
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCustomer"].fulfilled.match(resultAction)) {
                alert("customer delete Successfully");
                await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$customerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCustomer"])());
            } else {
                throw new Error("delete failed");
            }
        } catch (error) {
            console.error("delete customer error:", error.message);
            alert("an error accured while deleting the customer ");
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "loading..."
    }, void 0, false, {
        fileName: "[project]/src/app/customers/page.tsx",
        lineNumber: 96,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            "This is our customers",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
                onClick: handleCreate,
                children: "create"
            }, void 0, false, {
                fileName: "[project]/src/app/customers/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
                onClick: handleUpdate,
                children: "Update"
            }, void 0, false, {
                fileName: "[project]/src/app/customers/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
                onClick: handleDelete,
                children: "Delete"
            }, void 0, false, {
                fileName: "[project]/src/app/customers/page.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/customers/page.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Customer, "fG1zUDUfE1pK8qqLdodoPOkydOM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = Customer;
const __TURBOPACK__default__export__ = Customer;
var _c;
__turbopack_context__.k.register(_c, "Customer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/posts/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/postApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$customers$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/customers/page.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Post = ()=>{
    _s();
    const disaptch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { posts, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "Post.useAppSelector": (state)=>state.posts
    }["Post.useAppSelector"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Post.useEffect": ()=>{
            const fetchPosts = {
                "Post.useEffect.fetchPosts": async ()=>{
                    if (posts.length === 0) {
                        await disaptch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPosts"])());
                    }
                }
            }["Post.useEffect.fetchPosts"];
            fetchPosts();
        }
    }["Post.useEffect"], [
        disaptch,
        posts.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Post.useEffect": ()=>{
            console.log(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$customers$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
        }
    }["Post.useEffect"], [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$customers$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ]);
    const handleCreate = async ()=>{
        const post = {
            title: "His mother had always taught him",
            body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto.",
            tags: [
                "history",
                "american",
                "crime"
            ],
            reactions: {
                likes: 1,
                dislikes: 2
            },
            views: 3,
            userId: 12
        };
        try {
            const resultAction = await disaptch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPost"])({
                data: post
            }));
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPost"].fulfilled.match(resultAction)) {
                alert("post create Successfully");
            } else {
                throw new Error("create Failed");
            }
        } catch (error) {
            console.error("Create error:", error.message);
            alert("An error occured while creating the post");
        }
    };
    const handleUpdate = async ()=>{
        const Id = "68a18d619e37289c04cbe893";
        const updatePost = {
            title: "Her father had always taught him",
            body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto.",
            tags: [
                "history",
                "american",
                "crime"
            ],
            reactions: {
                likes: 1,
                dislikes: 2
            },
            views: 3,
            userId: 12
        };
        try {
            const resultAction = await disaptch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updatePosts"])({
                id: Id,
                data: updatePost
            }));
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updatePosts"].fulfilled.match(resultAction)) {
                alert("update Post successfully");
            } else {
                throw new Error("Failed to update");
            }
        } catch (error) {
            console.error("update Error:", error.message);
            alert("An error Accour while the post update");
        }
    };
    const handleDelete = async ()=>{
        const Id = "68a18d619e37289c04cbe893";
        try {
            const resultAction = await disaptch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deletePost"])({
                Id
            }));
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deletePost"].fulfilled.match(resultAction)) {
                alert("post deleted Successfully");
            } else {
                throw new Error("failed to delete post");
            }
        } catch (error) {
            console.error("delete post:", error.message);
            alert("An error accour while deleting the post");
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading ..."
    }, void 0, false, {
        fileName: "[project]/src/app/posts/page.tsx",
        lineNumber: 99,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            "This is our customers",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
                onClick: handleCreate,
                children: "create"
            }, void 0, false, {
                fileName: "[project]/src/app/posts/page.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
                onClick: handleUpdate,
                children: "update"
            }, void 0, false, {
                fileName: "[project]/src/app/posts/page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
                onClick: handleDelete,
                children: "Delete"
            }, void 0, false, {
                fileName: "[project]/src/app/posts/page.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/posts/page.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Post, "y6e6WSIZp0jmPJnLH5RCQzvi0TI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = Post;
const __TURBOPACK__default__export__ = Post;
var _c;
__turbopack_context__.k.register(_c, "Post");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_9af498f2._.js.map