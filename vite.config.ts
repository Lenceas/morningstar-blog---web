import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    //#region 共享选项
    // 项目根目录（index.html 文件所在的位置）。可以是一个绝对路径，或者一个相对于该配置文件本身的相对路径。类型： string 默认： process.cwd()
    root: process.cwd(),
    // 开发或生产环境服务的公共基础路径。合法的值包括以下几种：类型： string  默认： /
    base: '/',
    // 在配置中指明将会把 serve 和 build 时的模式 都 覆盖掉。也可以通过命令行 --mode 选项来重写。类型： string  默认： 'development' 用于开发，'production' 用于构建
    //mode: 'development',
    // 需要用到的插件数组。Falsy 虚值的插件将被忽略，插件数组将被扁平化（flatten）。类型： (Plugin | Plugin[] | Promise<Plugin | Plugin[]>)[]
    plugins: [
      vue(),
      vueJsx(),
    ],
    // 作为静态资源服务的文件夹。该目录中的文件在开发期间在 / 处提供，并在构建期间复制到 outDir 的根目录，并且始终按原样提供或复制而无需进行转换。
    // 该值可以是文件系统的绝对路径，也可以是相对于项目根目录的相对路径。将 publicDir 设定为 false 可以关闭此项功能。类型： string | false  默认： "public"
    publicDir: 'public',
    // 存储缓存文件的目录。此目录下会存储预打包的依赖项或 vite 生成的某些缓存文件，使用缓存可以提高性能。如需重新生成缓存文件，你可以使用 --force 命令行选项或手动删除目录。
    // 此选项的值可以是文件的绝对路径，也可以是以项目根目录为基准的相对路径。当没有检测到 package.json 时，则默认为 .vite。类型： string  默认： "node_modules/.vite"
    cacheDir: 'node_modules/.vite',
    resolve: {
      // 将会被传递到 @rollup/plugin-alias 作为 entries 的选项。也可以是一个对象，或一个 { find, replacement, customResolver } 的数组。
      // 当使用文件系统路径的别名时，请始终使用绝对路径。相对路径的别名值会原封不动地被使用，因此无法被正常解析。
      // 类型：Record<string, string> | Array<{ find: string | RegExp, replacement: string, customResolver?: ResolverFunction | ResolverObject }>
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      // 如果你在你的应用程序中有相同依赖的副本（比如 monorepos），请使用此选项强制 Vite 始终将列出的依赖项解析为同一副本（从项目根目录）。类型： string[]
      //dedupe: [],
      // 解决程序包中 情景导出 时的其他允许条件。类型： string[]
      //conditions: [],
      // package.json 中，在解析包的入口点时尝试的字段列表。注意：这比从 exports 字段解析的情景导出优先级低：如果一个入口起点从 exports 成功解析，resolve.mainFields 将被忽略。
      // 类型： string[]  默认： ['browser', 'module', 'jsnext:main', 'jsnext']
      mainFields: ['browser', 'module', 'jsnext:main', 'jsnext'],
      // 导入时想要省略的扩展名列表。注意，不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会影响 IDE 和类型支持。类型： string[]  默认： ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
      extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
      // 启用此选项会使 Vite 通过原始文件路径（即不跟随符号链接的路径）而不是真正的文件路径（即跟随符号链接后的路径）确定文件身份。类型： boolean 默认： false
      preserveSymlinks: false,
    },
    // 调整控制台输出的级别，默认为 'info'。类型： 'info' | 'warn' | 'error' | 'silent'
    logLevel: 'info',
    // 使用自定义 logger 记录消息。可以使用 Vite 的 createLogger API 获取默认的 logger 并对其进行自定义，例如，更改消息或过滤掉某些警告。
    //customLogger: undefined,
    // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息。命令行模式下可以通过 --clearScreen false 设置。类型： boolean 默认： true
    clearScreen: true,
    // 用于加载 .env 文件的目录。可以是一个绝对路径，也可以是相对于项目根的路径。类型： string  默认： root
    envDir: 'root',
    // 以 envPrefix 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中。类型： string | string[] 默认： VITE_
    envPrefix: 'VITE_',
    // 无论你的应用是一个单页应用（SPA）还是一个 多页应用（MPA），亦或是一个定制化应用（SSR 和自定义 HTML 处理的框架）：类型： 'spa' | 'mpa' | 'custom' 默认： 'spa'
    // 'spa'：包含 HTML 中间件以及使用 SPA 回退。在预览中将 sirv 配置为 single: true
    // 'mpa'：包含 HTML 中间件
    // 'custom'：不包含 HTML 中间件
    appType: 'spa',
    //#endregion

    //#region 开发服务器选项
    server: {
      // 指定服务器应该监听哪个 IP 地址。如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
      host: true,
      // 指定开发服务器端口。注意：如果端口已经被使用，Vite 会自动尝试下一个可用的端口，所以这可能不是开发服务器最终监听的实际端口。
      port: 8080,
      // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
      strictPort: true,
      // 启用 TLS + HTTP/2。注意：当 server.proxy 选项 也被使用时，将会仅使用 TLS。这个值也可以是一个传递给 https.createServer() 的 选项对象。
      // 需要一个合法可用的证书。对基本使用的配置需求来说，你可以添加 @vitejs/plugin-basic-ssl 到项目插件中，它会自动创建和缓存一个自签名的证书。但我们推荐你创建和使用你自己的证书。
      //https: {},
      // 开发服务器启动时，自动在浏览器中打开应用程序。当该值为字符串时，它将被用作 URL 的路径名。
      // 如果你想在你喜欢的某个浏览器打开该开发服务器，你可以设置环境变量 process.env.BROWSER （例如 firefox）。
      // 你还可以设置 process.env.BROWSER_ARGS 来传递额外的参数（例如 --incognito）。
      // BROWSER 和 BROWSER_ARGS 都是特殊的环境变量，你可以将它们放在 .env 文件中进行设置。
      open: true,
      // 为开发服务器配置自定义代理规则。期望接收一个 { key: options } 对象。任何请求路径以 key 值开头的请求将被代理到对应的目标。
      // 如果 key 值以 ^ 开头，将被识别为 RegExp。configure 选项可用于访问 proxy 实例。请注意，如果使用了非相对的 基础路径 base，则必须在每个 key 值前加上该 base。
      // 类型： Record<string, string | ProxyOptions>
      proxy: {
        "/api/v1": {
          target: "",
          ws: true,
          // 是否允许跨域
          changeOrigin: true
        }
      },
      // 为开发服务器配置 CORS。默认启用并允许任何源，传递一个 选项对象 来调整行为或设为 false 表示禁用。    
      cors: true,
      // 指定服务器响应的 header。类型： OutgoingHttpHeaders
      //headers: {},
      // 禁用或配置 HMR 连接（用于 HMR websocket 必须使用不同的 http 服务器地址的情况）。
      // 类型： boolean | { protocol?: string, host?: string, port?: number, path?: string, timeout?: number, overlay?: boolean, clientPort?: number, server?: Server }
      //hmr: {},
      // 提前转换和缓存文件以进行预热。可以在服务器启动时提高初始页面加载速度，并防止转换瀑布。clientFiles 是仅在客户端使用的文件，而 ssrFiles 是仅在服务器端渲染中使用的文件。
      // 它们接受一个文件路径数组或相对于 root 的 fast-glob 通配符。请确保只添加经常使用的文件，以免在启动时过载 Vite 开发服务器。类型： { clientFiles?: string[], ssrFiles?: string[] }
      warmup: {
        clientFiles: ["./src/layouts/**/*.vue"]
      },
      // 传递给 chokidar 的文件系统监听器选项。Vite 服务器的文件监听器默认会监听 root 目录，同时会跳过 .git/、node_modules/，以及 Vite 的 cacheDir 和 build.outDir 这些目录。
      // 当监听到文件更新时，Vite 会应用 HMR 并且只在需要时更新页面。如果设置为 null，则不会监听任何文件。server.watcher 将提供一个兼容的事件发射器，但是调用 add 或 unwatch 将没有任何效果。
      //watch: {},
      // 以中间件模式创建 Vite 服务器。类型： 'ssr' | 'html'  默认值： false
      middlewareMode: false,
      // 文件设置
      fs: {
        // 限制为工作区 root 路径以外的文件的访问。类型： boolean 默认： true (自 Vite 2.7 起默认启用)
        strict: true,
        // 限制哪些文件可以通过 /@fs/ 路径提供服务。当 server.fs.strict 设置为 true 时，访问这个目录列表外的文件将会返回 403 结果。可以提供目录和文件。
        // Vite 将会搜索此根目录下潜在工作空间并作默认使用。一个有效的工作空间应符合以下几个条件，否则会默认以 项目 root 目录 作备选方案。
        // 当 server.fs.allow 被设置时，工作区根目录的自动检索将被禁用。当需要扩展默认的行为时，你可以使用暴露出来的工具函数 searchForWorkspaceRoot
        //allow: [],
        // 用于限制 Vite 开发服务器提供敏感文件的黑名单。这会比 server.fs.allow 选项的优先级更高。同时还支持 picomatch 模式。
        deny: ['.env', '.env.*', '*.{crt,pem}'],
      },
      // 用于定义开发调试阶段生成资源的 origin。
      //origin: '',
    },
    //#endregion

    //#region 构建选项
    build: {
      // 设置最终构建的浏览器兼容目标。默认值是一个 Vite 特有的值：'modules'，这是指 支持原生 ES 模块、原生 ESM 动态导入 和 import.meta 的浏览器。
      // Vite 将替换 modules 为 ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'] 类型： string | string[] 类型： string | string[] 默认： 'modules'
      target: 'modules',
      // 默认情况下，一个 模块预加载 polyfill 会被自动注入。该 polyfill 会自动注入到每个 index.html 入口的的代理模块中。
      // 类型： boolean | { polyfill?: boolean, resolveDependencies?: ResolveModulePreloadDependenciesFn }  默认值： { polyfill: true }
      modulePreload: { polyfill: true },
      // 指定输出路径（相对于 项目根目录).  类型： string 默认： dist
      outDir: 'dist',
      // 指定生成静态资源的存放路径（相对于 build.outDir）。在 库模式 下不能使用。类型： string 默认： assets
      assetsDir: 'assets',
      // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
      // 如果传入了一个回调函数，可以通过返回一个布尔值来选择是否加入。如果没有返回任何内容，那么就会应用默认的逻辑。
      // 类型： number | ((filePath: string, content: Buffer) => boolean | undefined) 默认： 4096 (4 KiB)
      assetsInlineLimit: 4096,
      // 启用/禁用 CSS 代码拆分。当启用时，在异步 chunk 中导入的 CSS 将内联到异步 chunk 本身，并在其被加载时一并获取。如果禁用，整个项目中的所有 CSS 将被提取到一个 CSS 文件中。类型： boolean  默认： true
      cssCodeSplit: true,
      // 此选项允许用户为 CSS 的压缩设置一个不同的浏览器 target，此处的 target 并非是用于 JavaScript 转写目标。应只在针对非主流浏览器时使用。类型： string | string[] 默认值： 与 build.target 一致
      //cssTarget: 'modules',
      // 此选项允许用户覆盖 CSS 最小化压缩的配置，而不是使用默认的 build.minify，这样你就可以单独配置 JS 和 CSS 的最小化压缩方式。Vite 默认使用 esbuild 来最小化 CSS。
      // 将此选项设置为 'lightningcss' 可以改用 Lightning CSS 进行压缩。设置为该项，便可以使用 css.lightningcss 选项来进行配置。
      // 类型： boolean | 'esbuild' | 'lightningcss'  默认： 与 build.minify 一致
      cssMinify: 'esbuild',
      // 构建后是否生成 source map 文件。如果为 true，将会创建一个独立的 source map 文件。
      // 如果为 'inline'，source map 将作为一个 data URI 附加在输出文件中。'hidden' 的工作原理与 true 相似，只是 bundle 文件中相应的注释将不被保留。
      // 类型： boolean | 'inline' | 'hidden' 默认： false
      sourcemap: false,
      // 自定义底层的 Rollup 打包配置。这与从 Rollup 配置文件导出的选项相同，并将与 Vite 的内部 Rollup 选项合并。
      //rollupOptions: {},
      // 当设置为 true，构建后将会生成 .vite/manifest.json 文件，包含了没有被 hash 过的资源文件名和 hash 后版本的映射。
      // 可以为一些服务器框架渲染时提供正确的资源引入链接。当该值为一个字符串时，它将作为 manifest 文件的名字。
      // 类型： boolean | string  默认： false
      manifest: false,
      // 当设置为 true 时，构建也将生成 SSR 的 manifest 文件，以确定生产中的样式链接与资产预加载指令。当该值为一个字符串时，它将作为 manifest 文件的名字。
      // 类型： boolean | string  默认值： false
      ssrManifest: false,
      // 生成面向 SSR 的构建。此选项的值可以是字符串，用于直接定义 SSR 的入口，也可以为 true，但这需要通过设置 rollupOptions.input 来指定 SSR 的入口。
      // 类型： boolean | string  默认值： false
      ssr: false,
      // 在 SSR 构建期间，静态资源不会被输出，因为它们通常被认为是客户端构建的一部分。这个选项允许框架强制在客户端和 SSR 构建中都输出它们。将静态资源在构建后合并是框架的责任。
      // 类型： boolean 默认： false
      ssrEmitAssets: false,
      // 设置为 false 可以禁用最小化混淆，或是用来指定使用哪种混淆器。默认为 Esbuild，它比 terser 快 20-40 倍，压缩率只差 1%-2%。
      // 注意，在 lib 模式下使用 'es' 时，build.minify 选项不会缩减空格，因为会移除掉 pure 标注，导致破坏 tree-shaking。
      // 当设置为 'terser' 时必须先安装 Terser。  npm add -D terser
      // 类型： boolean | 'terser' | 'esbuild'  客户端构建默认为'esbuild'，SSR构建默认为 false
      minify: 'esbuild',
      // 传递给 Terser 的更多 minify 选项。此外，你还可以传递一个 maxWorkers: number 选项来指定最大的工作线程数。默认为 CPU 核心数减 1。
      //terserOptions: {},
      // 设置为 false 来禁用将构建后的文件写入磁盘。这常用于 编程式地调用 build() 在写入磁盘之前，需要对构建后的文件进行进一步处理。类型： boolean  默认： true
      write: true,
      // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。若 outDir 在根目录之外则会抛出一个警告避免意外删除掉重要的文件。
      // 可以设置该选项来关闭这个警告。该功能也可以通过命令行参数 --emptyOutDir 来使用。
      // 类型： boolean  若 outDir 在 root 目录下，则为 true
      emptyOutDir: true,
      // 默认情况下，Vite 会在构建阶段将 publicDir 目录中的所有文件复制到 outDir 目录中。可以通过设置该选项为 false 来禁用该行为。类型： boolean  默认： true
      copyPublicDir: true,
      // 启用/禁用 gzip 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。类型： boolean  默认： true
      reportCompressedSize: false,
      // 规定触发警告的 chunk 大小。（以 kB 为单位）。它将与未压缩的 chunk 大小进行比较，因为 JavaScript 大小本身与执行时间相关。类型： number  默认： 500
      chunkSizeWarningLimit: 500,
      // 设置为 {} 则会启用 rollup 的监听器。对于只在构建阶段或者集成流程使用的插件很常用。类型： WatcherOptions| null  默认： null
      watch: null,
    },
    //#endregion

    //#region 预览选项
    preview: {
      // 指定服务器应该监听哪个 IP 地址。如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
      host: true,
      // 指定开发服务器端口。注意：如果端口已经被使用，Vite 会自动尝试下一个可用的端口，所以这可能不是开发服务器最终监听的实际端口。
      port: 8080,
      // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
      strictPort: true,
      // 开发服务器启动时，自动在浏览器中打开应用程序。当该值为字符串时，它将被用作 URL 的路径名。
      // 如果你想在你喜欢的某个浏览器打开该开发服务器，你可以设置环境变量 process.env.BROWSER （例如 firefox）。
      // 你还可以设置 process.env.BROWSER_ARGS 来传递额外的参数（例如 --incognito）。
      // BROWSER 和 BROWSER_ARGS 都是特殊的环境变量，你可以将它们放在 .env 文件中进行设置。
      open: true,
      // 为开发服务器配置 CORS。默认启用并允许任何源，传递一个 选项对象 来调整行为或设为 false 表示禁用。
      cors: true,
    },
    //#endregion

    //#region Worker 选项
    worker: {
      // worker 打包时的输出类型。类型： 'es' | 'iife'  默认： 'iife'
      format: 'iife',
      // 应用于 worker 打包的 Vite 插件。注意 config.plugins 仅会在开发（dev）阶段应用于 worker，若要配置在构建（build）阶段应用于 worker 的插件则应该在本选项这里配置。
      // 该函数应返回新的插件实例，因为它们在并行的 rollup worker 构建中使用。因此，在 config 钩子中修改 config.worker 选项将被忽略。
      //plugins: () => [],
      // 用于打包 worker 的 Rollup 配置项。
      //rollupOptions: {},
    },
    //#endregion

    //#region 共享选项 其他
    html: {
      // 一个在生成脚本或样式标签时会用到的 nonce 值占位符。设置此值还会生成一个带有 nonce 值的 meta 标签。类型： string
      //cspNonce: '',
    },
    css: {
      // 配置 CSS modules 的行为。选项将被传递给 postcss-modules。当使用 Lightning CSS 时，该选项不会产生任何效果。如果要启用该选项，则应该使用 css.lightningcss.cssModules 来替代。
      //modules: {},
      // 内联的 PostCSS 配置（格式同 postcss.config.js），或者一个（默认基于项目根目录的）自定义的 PostCSS 配置路径。对内联的 POSTCSS 配置，它期望接收与 postcss.config.js 一致的格式。但对于 plugins 属性有些特别，只接收使用 数组格式。
      // 搜索是使用 postcss-load-config 完成的，只有被支持的文件名才会被加载。注意：如果提供了该内联配置，Vite 将不会搜索其他 PostCSS 配置源。类型： string | (postcss.ProcessOptions & { plugins?: postcss.AcceptedPlugin[] })
      //postcss: {},
      // 指定传递给 CSS 预处理器的选项。文件扩展名用作选项的键。类型： Record<string, object>
      //preprocessorOptions: {},
      // 该选项可以用来为每一段样式内容添加额外的代码。但是要注意，如果你添加的是实际的样式而不仅仅是变量，那这些样式在最终的产物中会重复。
      // 类型： string | ((source: string, filename: string) => (string | { content: string; map?: SourceMap }))  css.preprocessorOptions[extension].additionalData
      // preprocessorOptions: {
      //   scss: {
      //     additionalData: `$injectedColor: orange;`,
      //   },
      // },
      // 如果启用了这个选项，那么 CSS 预处理器会尽可能在 worker 线程中运行。true 表示 CPU 数量减 1。类型： number | true  默认： 0（不会创建任何 worker 线程，而是在主线程中运行）
      preprocessorMaxWorkers: 0,
      // 在开发过程中是否启用 sourcemap。类型： boolean 默认： false
      devSourcemap: false,
      // 该选项用于选择用于 CSS 处理的引擎。类型： 'postcss' | 'lightningcss' 默认： 'postcss'
      transformer: 'postcss',
      // 该选项用于配置 Lightning CSS。
      //lightningcss: {},
    },
    json: {
      // 是否支持从 .json 文件中进行按名导入。类型： boolean  默认： true
      namedExports: true,
      // 若设置为 true，导入的 JSON 会被转换为 export default JSON.parse("...")，这样会比转译成对象字面量性能更好，尤其是当 JSON 文件较大的时候。开启此项，则会禁用按名导入。类型： boolean 默认： false
      stringify: false,
      // 
    },
    // 混淆器 类型： ESBuildOptions | false
    esbuild:
      mode === "development"
        ? undefined
        : {
          // 打包时移除 console.log
          pure: ["console.log"],
          // 打包时移除 debugger
          drop: ["debugger"],
          // 打包时移除所有注释
          legalComments: "none"
        },
    // 指定额外的 picomatch 模式 作为静态资源处理 类型： string | RegExp | (string | RegExp)[]
    //assetsInclude: [],
    //#endregion

    //#region SSR 选项
    ssr: {
      // 这个选项可以将指定的依赖项和它们传递的依赖项进行外部化，以供服务端渲染（SSR）使用。string[] | true
      //external: [],
      // 这个选项可以防止列出的依赖项在服务端渲染（SSR）时被外部化，这些依赖项将会在构建过程中被打包。string | RegExp | (string | RegExp)[] | true
      //noExternal: undefined,
      // SSR 服务器的构建目标。类型： 'node' | 'webworker'  默认： node
      target: 'node',
      resolve: {
        // 在 SSR 构建中，包入口的解析条件。默认为 resolve.conditions。
        // 这些条件会在插件管道中使用，并且只会影响 SSR 构建期间的非外部化依赖项。使用 ssr.resolve.externalConditions 来影响外部化导入。
        //conditions: ['resolve.conditions'],
        // 在 SSR 导入（包括 ssrLoadModule）外部化依赖项时使用的条件。类型： string[] 默认： []
        externalConditions: [],
      }
    },
    //#endregion

    //#region 依赖优化选项
    optimizeDeps: {},
    //#endregion
  }
})
