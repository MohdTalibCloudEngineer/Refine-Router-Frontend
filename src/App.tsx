import { GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  ThemedLayoutV2,
  useNotificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import axios from "axios";
import { App as AntdApp } from "antd";
import {
  BlogPostCreate,
  BlogPostEdit,
  BlogPostList,
  BlogPostShow,
} from "pages/blog-posts";
import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  CategoryShow,
} from "pages/categories";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";

// function App() {
//   return (
//     <BrowserRouter>
//       <GitHubBanner />
//       <RefineKbarProvider>
//         <ColorModeContextProvider>
//           <AntdApp>
//             <DevtoolsProvider>
//               <Refine
//                 dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
//                 notificationProvider={useNotificationProvider}
//                 routerProvider={routerBindings}
//                 resources={[
//                   {
//                     name: "blog_posts",
//                     list: "/blog-posts",
//                     create: "/blog-posts/create",
//                     edit: "/blog-posts/edit/:id",
//                     show: "/blog-posts/show/:id",
//                     meta: {
//                       canDelete: true,
//                     },
//                   },
//                   {
//                     name: "categories",
//                     list: "/categories",
//                     create: "/categories/create",
//                     edit: "/categories/edit/:id",
//                     show: "/categories/show/:id",
//                     meta: {
//                       canDelete: true,
//                     },
//                   },
//                 ]}
//                 options={{
//                   syncWithLocation: true,
//                   warnWhenUnsavedChanges: true,
//                   useNewQueryKeys: true,
//                   projectId: "nTibXX-0UfNs3-vS0SL9",
//                 }}
//               >
//                 <Routes>
//                   <Route
//                     element={
//                       <ThemedLayoutV2 Header={() => <Header isSticky={true} />}>
//                         <Outlet />
//                       </ThemedLayoutV2>
//                     }
//                   >
//                     <Route
//                       index
//                       element={<NavigateToResource resource="blog_posts" />}
//                     />
//                     <Route path="/blog-posts">
//                       <Route index element={<BlogPostList />} />
//                       <Route path="create" element={<BlogPostCreate />} />
//                       <Route path="edit/:id" element={<BlogPostEdit />} />
//                       <Route path="show/:id" element={<BlogPostShow />} />
//                     </Route>
//                     <Route path="/categories">
//                       <Route index element={<CategoryList />} />
//                       <Route path="create" element={<CategoryCreate />} />
//                       <Route path="edit/:id" element={<CategoryEdit />} />
//                       <Route path="show/:id" element={<CategoryShow />} />
//                     </Route>
//                     <Route path="*" element={<ErrorComponent />} />
//                   </Route>
//                 </Routes>

//                 <RefineKbar />
//                 <UnsavedChangesNotifier />
//                 <DocumentTitleHandler />
//               </Refine>
//               <DevtoolsPanel />
//             </DevtoolsProvider>
//           </AntdApp>
//         </ColorModeContextProvider>
//       </RefineKbarProvider>
//     </BrowserRouter>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Refine
//         dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
//         notificationProvider={useNotificationProvider}
//         routerProvider={routerBindings}
//         resources={[
//           {
//             name: "blog_posts",
//             list: "/blog-posts",
//             create: "/blog-posts/create",
//             edit: "/blog-posts/edit/:id",
//             show: "/blog-posts/show/:id",
//             meta: {
//               canDelete: true,
//             },
//           },
//           {
//             name: "categories",
//             list: "/categories",
//             create: "/categories/create",
//             edit: "/categories/edit/:id",
//             show: "/categories/show/:id",
//             meta: {
//               canDelete: true,
//             },
//           },
//         ]}
//         options={{
//           syncWithLocation: true,
//           warnWhenUnsavedChanges: true,
//           useNewQueryKeys: true,
//           projectId: "nTibXX-0UfNs3-vS0SL9",
//         }}
//       >
//         {/* ******************************** */}
//         <Routes>
//           <Route
//             element={
//               <ThemedLayoutV2 Header={() => <Header isSticky={true} />}>
//                 <Outlet />
//               </ThemedLayoutV2>
//             }
//           >
//             <Route
//               index
//               element={<NavigateToResource resource="blog_posts" />}
//             />
//             <Route path="/blog-posts">
//               <Route index element={<BlogPostList />} />
//               <Route path="create" element={<BlogPostCreate />} />
//               <Route path="edit/:id" element={<BlogPostEdit />} />
//               <Route path="show/:id" element={<BlogPostShow />} />
//             </Route>

//             <Route path="/categories">
//               <Route index element={<CategoryList />} />
//               <Route path="create" element={<CategoryCreate />} />
//               <Route path="edit/:id" element={<CategoryEdit />} />
//               <Route path="show/:id" element={<CategoryShow />} />
//             </Route>

//             <Route path="*" element={<ErrorComponent />} />
//           </Route>
//         </Routes>
//       </Refine>
//     </BrowserRouter>
//   );
// }

// import { Refine } from "@refinedev/core";
// import dataProvider from "@refinedev/simple-rest";
import routerProvider from "@refinedev/react-router-v6";
import { DataProvider } from "@refinedev/strapi-v4";

const App = () => {
  const axiosInstance = axios.create();
  return (
    <BrowserRouter>
      <Refine
        routerProvider={routerProvider}
        // dataProvider={dataProvider("https://api.fake-rest.refine.dev")}

        dataProvider={{
          default: dataProvider(
            process.env.REACT_APP_API_URL + "/api",
            axiosInstance
          ),

          "file-posts": DataProvider(
            process.env.REACT_APP_API_URL + "/api",
            axiosInstance
          ),

          category: DataProvider(
            process.env.REACT_APP_API_URL + "/api",
            axiosInstance
          ),
        }}
        resources={[
          {
            name: "file-posts",
            list: "/file-posts",
            create: "/file-posts/create",
            edit: "/file-posts/edit/:id",
            show: "/file-posts/show/:id",
          },
          {
            name: "categories",
            list: "/categories",
            create: "/categories/create",
            edit: "/categories/edit/:id",
            show: "/categories/show/:id",
          },
        ]}
      >
        {/***************************************************************************************** */}
        <Routes>
          <Route path="file-posts">
            <Route index element={<BlogPostList />} />
            <Route path="create" element={<BlogPostCreate />} />
            <Route path="edit/:id" element={<BlogPostEdit />} />
            <Route path="show/:id" element={<BlogPostShow />} />
          </Route>

          <Route path="categories">
            <Route index element={<CategoryList />} />
            <Route path="create" element={<CategoryCreate />} />
            <Route path="edit/:id" element={<CategoryEdit />} />
            <Route path="show/:id" element={<CategoryShow />} />
          </Route>
        </Routes>
      </Refine>
    </BrowserRouter>
  );
};

export default App;
