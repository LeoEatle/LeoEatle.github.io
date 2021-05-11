/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/29/hello-2015/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2015/04/14/unix-linux-note/post-bg-unix-linux.jpg","c48aa178cea20c0b766dfe0790803337"],["/2015/05/25/js-module-loader/post-bg-js-module.jpg","c813533f88f10e75e7725607a10f9426"],["/2015/09/22/js-version/javascript-java.jpg","27cf6dba01010760a885db49c37c16a8"],["/2015/09/22/js-version/keep-calm-and-learn-javascript.png","a5c44173a8d6669ab43cf85fe5252da0"],["/2015/09/22/js-version/post-bg-js-version.jpg","2870973c65864ce20973340d672f842f"],["/2016/07/28/Hello-Hexo/bangong.jpg","9eace6cb6c3782ccf47ab6fe6723bb74"],["/2016/07/28/Hello-Hexo/dalou.jpg","267e8de9a0fc8e3380744b713609ef79"],["/2016/07/28/Hello-Hexo/index.html","77f5e8cc1a012c64f5fd605031560012"],["/2016/07/28/Hello-Hexo/kaifa.jpg","c1573aab8b7c4799e9acd1c85b0dbe74"],["/2016/07/28/Hello-Hexo/louti.jpg","af907eb5f1cb685ad50ab22de0c11a39"],["/2016/07/28/Hello-Hexo/nan.png","c54b6983be4a749aeaf74b4bc6c62627"],["/2016/07/28/Hello-Hexo/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2016/07/28/Hello-Hexo/shitang.jpg","4aa6d984830082bb7c350ab5f72b3543"],["/2016/07/28/Hello-Hexo/yejing.jpg","08ab3f859291db09e57fc5837d6248c1"],["/2016/07/28/Hello-Hexo/zonbu.jpg","84c1bc40902054ba7f5721cee27cf214"],["/2016/08/08/A-intresting-js/1.png","291f5b7b6470e8b7dabd0dd137cd564e"],["/2016/08/08/A-intresting-js/index.html","9440a55b4ddba10603cb68e2b866a6ce"],["/2016/09/02/The-inherit-in-javascript/index.html","c64b99fdbff31a5a47096b952c33c072"],["/2016/09/20/令人伤心的博客碎片/index.html","03f5043aac71f4b00570c967a052e84d"],["/2016/11/11/LeetCode-121-Best-time-to-Buy-and-Sell-Stock/index.html","4ed93b00fbcb9f2e77a45123102bb160"],["/2016/11/13/LeetCode-112-Path-Sum/index.html","5a63b5a9b57bee6bf7a09558d570276a"],["/2016/11/13/Leetcode-70-Climbing-Stairs/index.html","d20e1c081bf7959a4f2302d9a1784e9a"],["/2016/11/14/LeetCode-413-Arithmetic-Slices/index.html","b9052ae7d4e2193d173bf02d111346b4"],["/2016/11/14/爬虫的意义在哪里？/index.html","e149fc5a3306b18e1c3605fc37312984"],["/2016/11/15/LeetCode-202-Happy-Number/index.html","a2200954820ccb332b04795ab3e85244"],["/2016/11/20/LeetCode-453-Minimum-Moves-to-Equal-Array-Elements/index.html","e9c7d9968407f8c87c2ec60b887e9d1c"],["/2016/11/21/LeetCode-438-Find-All-Anagrams-in-a-String/index.html","7b7f88ea04065181ac8d7d5ba86ab45e"],["/2016/11/22/LeetCode-448-Find-All-Numbers-Disappeared-in-an-Array/index.html","13712de3c293cc1a3dc63b1d75807873"],["/2016/11/23/LeetCode-455-Assign-Cookies/index.html","a748c065613eb2a5fbef02d9ab5af497"],["/2016/11/26/LeetCode-130-Surrounded-Regions/index.html","488b8aa9893054d7d8130ef8adf2d05b"],["/2016/11/28/Docker学习笔记/2016-11-28 at 下午4.11.png","02f7488e4d747da509e7e1be9d4dcf7a"],["/2016/11/28/Docker学习笔记/container-layers.jpg","97c622c247ef510b06fee1aff4ec890f"],["/2016/11/28/Docker学习笔记/image-layers.jpg","adaabb4ae931eba8837211749d674dd3"],["/2016/11/28/Docker学习笔记/index.html","455ac16695f40b51c1653cb2577bf2e4"],["/2016/11/28/LeetCode-190-Reversed-Bits/index.html","a5032190867dc89a0ea5390950bd1f07"],["/2016/11/28/SegmentFault开发文档笔记/index.html","b9ea18441c806c803afef95b5bef9f45"],["/2016/11/29/LeetCode-123-Best-Time-to-Buy-and-Sell-Stock-3/index.html","c7d351cd7e67c60db5943ed0baa7cb80"],["/2016/11/29/Twig模板引擎学习笔记/index.html","76a22fef33b45cf0be9dfd5466f56b41"],["/2016/11/30/Angular2-Typescript入门笔记/index.html","019e148425556abff0e48238b4256638"],["/2016/11/30/compositionstart事件/index.html","ca766872cf77374fd6290954703eefc2"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/index.html","904dd67ff4c59ad9902b3010d2b22193"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/需求.png","bb1d6b7833c3adaa2b65a9b1a0da2bf5"],["/2016/12/07/Javascript各种模块引入机制比较/index.html","636d1e21d9cbf11894165afd2533fa10"],["/2016/12/07/LeetCode-415-Add-Strings/index.html","af3b4b5c67b9efab8b8b4694584725bf"],["/2016/12/08/Javascript设计模式与开发实践-笔记/index.html","081e2ba0299265adef39358ca4fb5e64"],["/2016/12/08/SegmentFault-gulp配置笔记/index.html","33ca1e06e737a0bcd5b3a3771cc1bf2e"],["/2016/12/10/SFDC笔记/index.html","ba5070afc6ad22626e6472574384c50f"],["/2016/12/13/LeetCode-396-Rotate-Function/index.html","2e2649342322568b01c78a2450d1153c"],["/2016/12/13/深入浅出node-js-笔记/index.html","b71ccae1789e10a623a72a24d0a8aad5"],["/2016/12/17/LeetCode-274-H-index/index.html","2ece39a191cb61a4e8d4e4215612de69"],["/2016/12/19/SegmentFault打工日记-魔改tagpopup组件纪录/index.html","c0665bae3d763eb303fa76b8bbb25386"],["/2016/12/23/LeetCode-467-Unique-Substrings-in-Wraparound-String/index.html","23fc704ace3c508a31dfb3992a27c839"],["/2016/12/25/LeetCode-129-Sum-Root-to-Leaf-Numbers/index.html","342af010e585c7674be1a42e51601ed9"],["/2016/12/25/iOS-iOS-Apprentice-note/UIkit.png","e7407e9f8a33eaa1ff0ffff5c0a47f4e"],["/2016/12/25/iOS-iOS-Apprentice-note/connection.png","2d667856aac63dfadc1977e513ad6d72"],["/2016/12/25/iOS-iOS-Apprentice-note/index.html","e5d6eec6cc999888e50aba7c49b1327a"],["/2016/12/26/LeetCode-23-Merge-k-Sorted-Lists/index.html","f6a8cd84e8df56895fa6026f5781e542"],["/2016/12/26/iOS-Stanford-Developing-iOS7/index.html","8d2be24af97d7de82132f9f68cba5301"],["/2016/12/27/SegmentFault打工日记-Video-js和直播平台/index.html","a7dc6eae765a3ba6600396f32fef339e"],["/2016/12/27/iOS-Stanford-Developing-iOS-Open-Class/index.html","ad0865624b60a22565827155085af0be"],["/2016/12/31/LeetCode-116-Populating-Next-Right-Pointers-in-Each-Node/index.html","17ad75cac38753aad68c890676275951"],["/2017/01/02/LeetCode-367-Valid-Perfect-Square/index.html","2e935a392d8fcbc2b334609a5ff1d9c3"],["/2017/01/02/LeetCode-74-Search-a-2D-matrix/index.html","56f00659b6188ca4773850de4e993e7b"],["/2017/01/03/LeetCode-125-Valid-Palindrome/index.html","d3a59c2d04023a9cb304dee116ec3040"],["/2017/01/03/Swift-官方Swift-Tour学习笔记/index.html","a56f5e74cea76dba1215ae8651b4a537"],["/2017/01/04/LeetCode-103-Binary-Tree-Zigzag-Level-Order-Traversal/index.html","35c6ce2e88df91a34894ede4728f520f"],["/2017/01/09/LeetCode-397-Integer-Replacement/index.html","d1ca4991060344adf8cb9189ad9d4ebb"],["/2017/01/10/LeetCode-419-Battleships-in-a-Board/index.html","25b0d8a40ba61162df0cbfc84b29ada9"],["/2017/01/10/Ng-Angular1-x复习笔记/index.html","82abb1e7e008a969d620a25c559dbed5"],["/2017/01/11/LeetCode-406-Queue-Reconstruction-by-Height/index.html","c1740ef9992c23deb9905365a5e362cb"],["/2017/01/13/LeetCode-357-Count-Numbers-with-Unique-Digits/index.html","f96c236551d2310eed118ab44fec28ec"],["/2017/01/13/iOS-Start-Developing-iOS-Apps-Apple-Doc/index.html","e6f2b7d79fe1f64fa42216b008e29c5d"],["/2017/01/18/iOS-官网-iOS-Apps-Developing-2/index.html","2db6e6fa922ff38ba9bd9a99e49dbce3"],["/2017/01/22/Javascript忍者秘籍-读后感/index.html","9293ab1ad349dc325d1ea50cc1314c8e"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/index.html","43acef6425850e75f947bb45283c8e75"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/lifecircle.png","8dbd58d7b830402462d9708acbbfd01d"],["/2017/02/14/iOS-官网的iOS-Guide-in-Swift-4/index.html","478b92dd3e8b01fcef817e2cf98e5d4e"],["/2017/02/15/iOS-官网的iOS-Guide-in-Swift-5/index.html","2b8b43f597c4a26e055f9992c068f134"],["/2017/02/17/iOS-官网的iOS-Guide-in-Swift-6/index.html","54939276f14acaaf5fefc0975768de37"],["/2017/02/17/鹅厂打工日记——Redux文档学习-1/index.html","09ff516b8e011c9a355f41b7552afa85"],["/2017/02/28/《The-JS-you-Dont-know》读书笔记/index.html","018fb7c475944bc2de075187143fc2c0"],["/2017/03/02/鹅厂打工日记——Jest-强大的React测试工具/index.html","cf8c39ddc5b62e0c589cc6bc79fe060d"],["/2017/03/03/Google-Android-System-learning/index.html","f92ca147c1774e83526d72ca94f60b01"],["/2017/03/04/iOS-官网的iOS-Guide-in-Swift-7/index.html","815f4fab7575f99e00dfacfc04bcafb6"],["/2017/03/10/为什么WebAssembly能给javascript提速？/index.html","4ec14e37bf88254c36923d8927423ee3"],["/2017/03/10/为什么WebAssembly能给javascript提速？/langs.png","f5f05c390e7205b40b3dd18286926b9f"],["/2017/03/10/为什么WebAssembly能给javascript提速？/toolchain.png","a1fd026158f74b82a81e43ce298ece17"],["/2017/03/14/鹅厂打工日记-React-loading组件设计/index.html","17c12d725e3c42a13e841deaf90ef29d"],["/2017/03/27/一个小坑-如何更改base64编码的svg图片颜色？/index.html","cb1e919b33b768a4e84ec93e45678963"],["/2017/03/30/鹅厂打工日记-Mocha/index.html","697fd3d950081b4052abff732486da36"],["/2017/03/31/鹅厂打工日记-Karma的使用和与Mocha的配合/index.html","da520d22b6abeb03d74dbef41c213071"],["/2017/04/14/鹅厂打工日记-Webpack原理/index.html","8b9ea4e7c5109f1aa2c3e6422c3c6a40"],["/2017/06/01/pwn-Windows逆向神器-OD-IDA/index.html","468ef978faf208ff6363684e82fe5d85"],["/2017/06/16/【鹅厂打工日记】iOS的UIWebView和Javascript的交互/index.html","8ad65773ad2c05d36f1fa94bad2950ef"],["/2017/06/21/CSS的新属性：clip-path和mask/clip-path.gif","159f17e0931cc07a3b1d3e91e73c0687"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip2.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/font.png","3668a198be8d7bcb9de9e7561f3a1229"],["/2017/06/21/CSS的新属性：clip-path和mask/img_in_text.png","9e75d6a59cef73b29a9f70e613346c39"],["/2017/06/21/CSS的新属性：clip-path和mask/index.html","87d6dc779b9e79c4224d82dc95688f61"],["/2017/06/21/CSS的新属性：clip-path和mask/move_mouse.gif","d60b8bddb40969b83a59abe8b63b67c6"],["/2017/06/22/Hybird的关键：WebView相关-1/index.html","c15c1b52dd9c487db1f42f54a0f2a614"],["/2017/09/08/编写Webpack插件笔记/index.html","2444f32b192eeb521a2830d295e926aa"],["/2017/11/30/Mobx学习笔记/index.html","2fd6db6b745b3ef1e0f36180dd5183f7"],["/2017/11/30/Test-travis-ci/index.html","6f32c9706a80856f886f07fa701dfa0e"],["/2017/12/01/Use-flow-type-in-React-project/index.html","35fcfb41140228aedd6088ec66eea859"],["/2017/12/06/modify-ssh-config-to-login-with-different-rsa-key/index.html","8a5880e49c69d1a736fbdb5237ed117c"],["/2018/06/26/flex-end-make-scrollbar-disappear/index.html","49301ee51b23b7f6d2d1594c7571da36"],["/2018/06/26/redux-state-change-but-react-not-render/index.html","96d56fd5f304a93f221bb0d74bec729e"],["/2018/07/02/阅读代码和英文文章小技巧/index.html","db48595c84160faccac07dee90aa9597"],["/2018/07/12/UI库的目录设计和babel-plugin-import/index.html","6960c36220bd9ee8616b0ebeb82a3057"],["/2018/07/31/SDT自我决定理论/index.html","5a460d266b4736cb2842584847c15194"],["/2018/08/04/React16源码解析-As-required-order/index.html","4c79370e345074bfd93c1fd006118d9c"],["/2018/08/05/React16源码解析（Fiber）/index.html","d7c49fcca987ff7efda01417d21fbb96"],["/2018/08/05/React16源码解析（ReactDOM）/index.html","91ebc841e9a149c15c86c670b23cd7a5"],["/2018/08/27/释放webpack的真正潜力/index.html","fac9981919e216c7cce268259d0ee49a"],["/2018/08/27/释放webpack的真正潜力/vscode-demo.png","4414ef03ced847b4673f625517a1c692"],["/2018/08/30/iOS-webview-scrolling-issue/index.html","44d3a51749cdc62a42a5971b74875831"],["/2018/09/17/升级到Babel-7的经验/index.html","d223d08095d8d29842a96291ec02a7eb"],["/2018/10/16/React-tip组件的设计/index.html","ab35fe2914a39d7b79f6f13495fe1e1a"],["/2018/11/17/【译】Facebook如何通过工具学习自动修复Bug ？/index.html","c58228a8e19fa90440dd874ad49ea4f2"],["/2018/12/08/jenkins问题定位/index.html","86e086a846f007256f339549ac68f5e7"],["/2018/12/21/React-SSR实践-压测/index.html","035c567baf75af2afb098d3fcb66f537"],["/2019/01/11/如何使用iOS的捷径生成PWA图标和web-app-manifest/index.html","241f1078481c3991dfabfe3d3a130486"],["/2019/01/21/item2-profile-config/index.html","68ae13afb5d636aa738fd5bbd1b528db"],["/2019/01/22/i18n-about-Access-Language/index.html","8f3e9bca65e68d2ca533a20024c195c5"],["/2019/02/27/Node-C-addon-学习笔记/index.html","7dc6eef39325b7bcc78467855a8813fc"],["/2019/05/16/Modern-Crusaders/index.html","83c640b04e16235d11ed3a68bf6360ed"],["/2019/05/22/使用docker构建老旧的前端项目/index.html","49d2ee23d2cb5e03c359ed11960a2502"],["/2019/08/28/关于docker使用的一些记录/index.html","8158cccdc37eec211615434f8df790f4"],["/2019/08/30/全干工程师的基本素养/index.html","b0aab00c00250caacdc0fc12be2d8571"],["/2019/10/30/Using-rxdb-to-make-your-node-application-more-reactive/index.html","ccbe11b33a09135c85c8e6a22a7610e8"],["/2019/11/05/Node中的C-与Javascript如何连接/index.html","0f0aee0bc0fc0e6ebcdcbd171b173e63"],["/2019/12/02/One-example-of-Typescript-generics/index.html","74dc7c5584f6299a91e2be886779619c"],["/2019/12/04/有趣的上网冲浪之旅/index.html","e4a6adfcab27957e64bc16cb5b082774"],["/2020/04/17/企业微信国际化方案总结/index.html","b3f50e77b85f3e156bfb252c8a11b4d0"],["/2020/04/27/come-on-sweet-death/index.html","c15adf3c1e3c7bac88296a7be8d09780"],["/2020/05/21/LeetCode-1277-Count-Square-Submatrices-with-All-Ones/index.html","c21774c4edb3356d3a387d30622ac643"],["/2020/05/27/LeetCode-886-Possible-Bipartition/index.html","6b4ebd65a5474d521af3ef9ea286919f"],["/2020/05/28/525-Contiguous-Array/index.html","4259bf15afb6e8b2c00f040aa0b561b2"],["/2020/06/01/LeetCode-207-Course-Schedule/index.html","4db1dd8907cff0086107a22c46711efb"],["/2020/06/03/LeetCode-1029-Two-City-Scheduling/index.html","b3fd57389902405a0b4161947b032621"],["/2020/07/21/Node-js-与-epoll/index.html","9cf11e9c33700cd99244e143f67cfe91"],["/2021/01/14/记录一个babel编译typescript代码的坑/index.html","0dfc4ea1d24ad0538e3bdc21d44e8427"],["/2021/03/02/总结一些测试vue组件的经验/index.html","c0d62a3e88637a3514ee9b49bb4c3c18"],["/2021/03/15/Purpose/index.html","93b826bcc54020b44f19aa674e80188f"],["/2021/03/16/和安全团队的斗智斗勇/index.html","2eac411e18c41438563c3ebfd1ef34c7"],["/404.html","55c2d994830ae3f341b8b4a4568d0618"],["/about/index.html","5aa6df69820924d0e5ac3874f571035d"],["/archive/index.html","ac8e6dbffadaca5731df30eca73e86b5"],["/archives/2016/07/index.html","ea035d05939af626b9719230f95f3ef2"],["/archives/2016/08/index.html","6b00c58fa2942b60fd6b927f210fb52a"],["/archives/2016/09/index.html","33799509cf0ab8cdff151a2d54093d59"],["/archives/2016/11/index.html","e19ec5e108850a97d459777bb463c190"],["/archives/2016/11/page/2/index.html","e37557ff57374ed5db495ef64988cb37"],["/archives/2016/12/index.html","9eeaf33defacd6de4193ee453ddd683f"],["/archives/2016/12/page/2/index.html","5a24f9dea7f4a2741927608f4a0d5442"],["/archives/2016/index.html","a74f68968c545ba8f9899947fcfa95da"],["/archives/2016/page/2/index.html","a703592d5324c0f0442aff768453d9a8"],["/archives/2016/page/3/index.html","f1fa71804723d807c2a39149ab050f8e"],["/archives/2016/page/4/index.html","78a2583ca9b066adef517708b4d5d9c0"],["/archives/2017/01/index.html","8cb5cf2209695c566d93d1115d5392c6"],["/archives/2017/01/page/2/index.html","4ccac8786430aa1a4a0c50150495412b"],["/archives/2017/02/index.html","c622e12449541be9e0691a5002d1c3f6"],["/archives/2017/03/index.html","0a35a890d90d8df04371d421e7eacea7"],["/archives/2017/04/index.html","7d3bd3df4ae4c744b5fc6119c3492407"],["/archives/2017/06/index.html","5c4c34c684d479f53c3eb572e7087b1c"],["/archives/2017/09/index.html","22acdfbd1d373544f6a0683cfab50e60"],["/archives/2017/11/index.html","baace879a36b095f6d0c26d0d5b2e5d7"],["/archives/2017/12/index.html","139d7259b70a717819d13cc1437df394"],["/archives/2017/index.html","d74f585f9ec1aa5beeef4c3644ad0849"],["/archives/2017/page/2/index.html","aca201fe8644a6ab6631c3116449ab3e"],["/archives/2017/page/3/index.html","77032bdbe233b6185da10100e5ddcd03"],["/archives/2017/page/4/index.html","9545dcc71bcf158bc3478d0f9c4b768f"],["/archives/2018/06/index.html","839f3d5d132cdc471416f7ab99861744"],["/archives/2018/07/index.html","50f70f23eb7529f31c2ac1376ffbfe7d"],["/archives/2018/08/index.html","7171b255f5c5136c92871d67e9be49c1"],["/archives/2018/09/index.html","1786d7e9028378274460666221df2f50"],["/archives/2018/10/index.html","19799f59d02790aed8b6d51f12e41bfc"],["/archives/2018/11/index.html","cb6027d560d93745dfdd2ef8bf2d9681"],["/archives/2018/12/index.html","f2446c77e28783be81f6034f93e30f80"],["/archives/2018/index.html","51cb0ee8aaae46a0bb957805bfbfd14f"],["/archives/2018/page/2/index.html","f3c2a447168b215df56b31897129e76e"],["/archives/2019/01/index.html","e2b0e7acfe0c38105a1dd157c5118592"],["/archives/2019/02/index.html","7c4b9e9b4b3e9bd4417c0b7d725cc519"],["/archives/2019/05/index.html","4f068a330a278e8cbb4a46d16c365544"],["/archives/2019/08/index.html","40b46ceecacd1a38cf68f49f5b2a6738"],["/archives/2019/10/index.html","f6fa4c51447b2a9e7a43ebb138949235"],["/archives/2019/11/index.html","ce3931cdf5f840d13a7184a9233e9512"],["/archives/2019/12/index.html","679e7e6d9f0a9a298508a9acb6f3dadf"],["/archives/2019/index.html","43e7bdc068f8b2183ee3da6b5a5caa9a"],["/archives/2019/page/2/index.html","7d7e528c106e7788e50e514c46ae587f"],["/archives/2020/04/index.html","651a91e43e8f2d4841161ae3e402880a"],["/archives/2020/05/index.html","8765011778a5f900be867865b9d40209"],["/archives/2020/06/index.html","39c90834c942d5aa0f77f510aef14345"],["/archives/2020/07/index.html","c748589e4719596087531d3527612b03"],["/archives/2020/index.html","f6079da2fc12a29944193b63a5a27c04"],["/archives/2021/01/index.html","33e7d153950804661b9ed6cf3e6396bd"],["/archives/2021/03/index.html","33a2e88e4a1108c86a465dc32b0d4222"],["/archives/2021/index.html","e817f6f056149d6b83d1ba36bff5b493"],["/archives/index.html","1b6b4b68abe8b2c25e5331c9ae72d7b7"],["/archives/page/10/index.html","0c492ea379231908b455d562796f75bb"],["/archives/page/11/index.html","0c29a9ee43accbab42ee5ecaf04c2290"],["/archives/page/12/index.html","96b663f66aa1b5dfcc5527d0353c59f7"],["/archives/page/2/index.html","58507323957bef3d32432d52565bbbf8"],["/archives/page/3/index.html","ce00206d0d8b80a842b0ee6c8898e8f1"],["/archives/page/4/index.html","a81599cd5285239917f7db47d60676e4"],["/archives/page/5/index.html","da77bc260b6a769cd69140b2bcb1e7fd"],["/archives/page/6/index.html","5a4e10b124f6f63955001227b1c3b699"],["/archives/page/7/index.html","50ad94f760b758664b105c7d7a62c9ef"],["/archives/page/8/index.html","16bf009c0fc17d32eb0041cf47561114"],["/archives/page/9/index.html","d0c268521c26e677896eed9539c62539"],["/css/bootstrap.css","be665bb9f0f7fc89f515adb828fa0a9b"],["/css/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["/css/hux-blog.css","b669eb0511b08a52a6fa0037ef268aed"],["/css/hux-blog.min.css","7c52a5e8fd56bc562ae3115df1013793"],["/css/syntax.css","7f76d2bfdb381ddb5ecae3adbee461e2"],["/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/img/404-bg.jpg","8f22a4ecdbdd94fd10f25ba8a934fe1d"],["/img/about-bg.jpg","64285147432e40ef95b1a2ff869d75a5"],["/img/avatar.jpg","abbbad189b36cb1d0f01e689d361b034"],["/img/contact-bg.jpg","0e38f139028cb4a784071a5865b9be85"],["/img/home-bg-o.jpg","afbd595ed462e39a93a3b676aa2ea7a4"],["/img/home-bg.jpg","47e73ec09d800c915d07de3628411082"],["/img/icon/android-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/android-icon-192x192.png","3db39aa67a190c7cc228142c38ca3116"],["/img/icon/android-icon-36x36.png","564010017e892a6b155df282eb4219f1"],["/img/icon/android-icon-48x48.png","f253397924f9f26643c7c6a79db8ba1a"],["/img/icon/android-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/android-icon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/apple-icon-114x114.png","0afdd9a37902c212f000f2f32a8e60d2"],["/img/icon/apple-icon-120x120.png","e4751e71e836f37d4c5fe262b0024dad"],["/img/icon/apple-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/apple-icon-152x152.png","93388257840293e1d40e81512fe01ab4"],["/img/icon/apple-icon-180x180.png","6190429a55a26ea620f8738fe3f86f85"],["/img/icon/apple-icon-57x57.png","afca9e7605c04cacf65241ef697b0dc0"],["/img/icon/apple-icon-60x60.png","7d312bb24cb3156775afed056ef7dd7b"],["/img/icon/apple-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/apple-icon-76x76.png","dda4b1174095d91bda96193e149bc0db"],["/img/icon/apple-icon-precomposed.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/apple-icon.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/favicon-16x16.png","7ff5e2f720a1ff68aff44956a7cd496e"],["/img/icon/favicon-32x32.png","aa12518f9eb4a5cd98aa32232757ada8"],["/img/icon/favicon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/icon-128x128.png","685d7eda0555b997d8a911461592490f"],["/img/icon/icon-144x144.png","2764561b941647d7608be02fa39accef"],["/img/icon/icon-152x152.png","f51cdcd069f2e9a825e3717903b72fa0"],["/img/icon/icon-192x192.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-384x384.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-512x512.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-72x72.png","cee41433a2cde5c6c96dfa13d1dd4f29"],["/img/icon/icon-96x96.png","d2b978d993bfbb81bfabfcafebfbba4a"],["/img/icon/ms-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/ms-icon-150x150.png","0de44329bf3786b62d2ff890987f3ebc"],["/img/icon/ms-icon-310x310.png","d533790d064141237c076cd34d7f229d"],["/img/icon/ms-icon-70x70.png","e604c81e7280860ff7e25a743756c907"],["/img/tag-bg.jpg","f7631fc49641e65a4ea663378526e323"],["/index.html","7084adb6342363b5222671b6c1adc4e9"],["/js/bootstrap.js","6bfd171748f088ad503cb07c080b1f33"],["/js/bootstrap.min.js","046ba2b5f4cff7d2eaaa1af55caa9fd8"],["/js/hux-blog.js","c55159aa9ce700288f00a5ac4d6c8597"],["/js/hux-blog.min.js","506a54b6cbf3629bb9e71b1bd09e6317"],["/js/jquery.js","cf26f8f0ccb06be71e92d8db0fb64ab5"],["/js/jquery.min.js","32015dd42e9582a80a84736f5d9a44d7"],["/js/jquery.nav.js","773b606a62ed173595099c9238c4728a"],["/js/jquery.tagcloud.js","29be493c486274b127c2d68503892ce5"],["/js/motto.min.js","32ac04a01348373cdd7d9799ca1baa5e"],["/js/scrollreveal.min.js","4606eec941fee1fea86cf4494c4f227f"],["/leetcode/index.html","2eef6c04c02b25fe0649ab7f56520b89"],["/page/10/index.html","2ef9f5857980d75eca46d786b19c1760"],["/page/11/index.html","d0edade7321dbfdfc81fc73994d3611b"],["/page/12/index.html","2dd9a378ed090b04c4370395f02e291a"],["/page/2/index.html","a4f2d12ad6f4314fcbd76d3f24d13e4f"],["/page/3/index.html","5be0da03b82886fe2f25578bbbf1de22"],["/page/4/index.html","817f5afc99619d8b4b0822ec5dc2a2d1"],["/page/5/index.html","a2b007aac84a3f27ce141a2bd2ddb291"],["/page/6/index.html","29d6067e38f8e32700f483af07ac4b69"],["/page/7/index.html","df8e78be9dbae91b968cdece16d94d9e"],["/page/8/index.html","a9bb3d1f1260e2278553b8474f118421"],["/page/9/index.html","22a4a4874e01f7e3ee0b225b86cf5a99"],["/sw-register.js","65268fab0587e4a47842b96f39586c67"],["/tags/Android/index.html","0ab0ca80edb3fe2ecc7a678ac5777f37"],["/tags/Angular2/index.html","be534fa3fb9c936a0eaaf86d3d40fc25"],["/tags/Babel/index.html","eb26d3ab30547f8f33f4fe47a97b94c9"],["/tags/C/index.html","5d80bbcb60fb1c48bf19ab7fb95bc78f"],["/tags/CSS/index.html","576c58e9a99b35ac8966b0dee5627267"],["/tags/Coffeescript/index.html","917dbdae57f9bcc4e330096a5bf539d0"],["/tags/Compiler/index.html","38177f815a051f828b94b9d99843f4f0"],["/tags/Component/index.html","20dee8910f4a61aa518268486b54ebc5"],["/tags/Design-Pattern/index.html","18d6a7e0d2d9669c5a0b895211f7d37f"],["/tags/Docker/index.html","745e2486ba794d327c62875c0b982518"],["/tags/ES6/index.html","ed2bfa75be3e997b5d6e4b63bda41630"],["/tags/Game/index.html","8a3a7463223ee9ceaac8a72868a85e23"],["/tags/Gulp/index.html","0faa71bf4ba97c09d370c6084868cc89"],["/tags/Hybird/index.html","b48cbe486606de7f9bd8cbf72195e0c8"],["/tags/JIT/index.html","e9a867bd33d2d4292f0df676653f4aef"],["/tags/Javascirpt/index.html","6edf8f3ea09aee9373cc16c74355661f"],["/tags/Javascript/index.html","d01ca249f0f7aaa963a14865c0974157"],["/tags/Jest/index.html","8c0287db8c786d5c607d1b9690796c77"],["/tags/LeetCode/index.html","81ef7a3edd392b041e1e8a80cfd0f167"],["/tags/LeetCode/page/2/index.html","bfd2ae7857ec266b52dbb61f681e6b10"],["/tags/LeetCode/page/3/index.html","682c0750f78409df5a9a3b16f1272c9b"],["/tags/Leetcode/index.html","6666bc79bdc2040a9de6f888448a977f"],["/tags/Linux/index.html","9be4c2c0e33d96a3527bcc035d1c406a"],["/tags/Lyrics/index.html","c788890eb34bcb6ed77d95a65bae6c00"],["/tags/Mobx/index.html","373bafe2ae19eda7951d9fe7623d10a4"],["/tags/Mocha/index.html","c346628abd8a2e617d466d5d6925c5eb"],["/tags/Module/index.html","4f19aeb8ba2a115487ddecf9cd5b22a3"],["/tags/Node-js/index.html","1641cde8710bb98535b73958eb22c5e8"],["/tags/Node/index.html","97e1e1d119dd0a0a53d6dd2a636db685"],["/tags/Note/index.html","de47f0299d5d84ae176fb9789e4043c0"],["/tags/Object-C/index.html","b40d504a336ba5d61bd350f2edcb51ea"],["/tags/Objective-C/index.html","faf77035f47252420d3eae4d77e001b8"],["/tags/PHP/index.html","c1a1371a80d9a3a0b63b220e1e4b1004"],["/tags/Python/index.html","e1fd21257c20db2d7abec5bc678a05d2"],["/tags/Python/page/2/index.html","aed96414ecb76337eecf05d70d709f9e"],["/tags/Python/page/3/index.html","d4433ebd06d6c1efb3ecf5a581a989c0"],["/tags/React-js/index.html","61a17066d4d29e86254000f6cbec366f"],["/tags/React/index.html","2a1bde057b6f867a3044c9cc1a7e6883"],["/tags/Redux/index.html","243ccdf2f820bd295e10a0198e7518c4"],["/tags/Require-js/index.html","f4580f7b9de89902c072aadd1eab91b7"],["/tags/SSR/index.html","3658da68a828a16673d5d68f9a9ab126"],["/tags/SegmentFault/index.html","1caa677df245bf8cfefbb5ab18640081"],["/tags/Swift/index.html","78fd2e98ff71726400828969aad3c48f"],["/tags/Template-Engine/index.html","454738740c13c7c377454d2a0d267a22"],["/tags/Test/index.html","83579d12548e4bc5365ae472d8a64ca4"],["/tags/Twig/index.html","b04ca04c86f9768ec0d10fc984fce715"],["/tags/Typescript/index.html","50501fbec6701604ee666a0e6ea93ef4"],["/tags/V8/index.html","fb3074b79e7c41722f1630b93c1d792e"],["/tags/WebAPI/index.html","39d7ff6f2a55160bf777e0acb09f4a20"],["/tags/Webpack/index.html","a0b3f41112a572e1713f836895711e79"],["/tags/Webview/index.html","c352d5c6577f37c642a1a80605b98cce"],["/tags/Windows/index.html","aed957cdbeb0cc3990d889d36560d3c5"],["/tags/babel/index.html","ea5fd2d6c9cb14cacbad0ea66e038bec"],["/tags/base64/index.html","0197a6ae1b1d78afb03de78f3af158cf"],["/tags/bootstrap/index.html","2099ecc89046eb78b3fecebba5015717"],["/tags/ci/index.html","d849295a795a3b28e1235e55946804ad"],["/tags/codepen/index.html","cd2835811572ce63e04d0ae7c5c714f9"],["/tags/compact/index.html","8169dc0a6cbc998bb0fff030fdcb3188"],["/tags/css/index.html","b2aa608061940866a96b325b32746d80"],["/tags/database/index.html","f10d7d7d19d058a77ccfe4cc6a46c6ee"],["/tags/docker/index.html","09f14ab995f548f118987982350e8ab5"],["/tags/event/index.html","5a84ddc573fd5cad007db8545c4cb7a3"],["/tags/facebook/index.html","f935a45207ca6c2f400d355253cffdfb"],["/tags/flask/index.html","28f893d4f788a71e4a877e51f30767f8"],["/tags/flow/index.html","f567975cdae4330c52872b0e4849cc4a"],["/tags/i18n/index.html","5579b5ae6e0f653ebd94126729491ffb"],["/tags/iOS/index.html","cc19d04d20f9faf48655ac93538ee1f2"],["/tags/iOS/page/2/index.html","7d7718c091396bebfcc50dbb8e433c98"],["/tags/index.html","a16a248421ed960ec5a533f2a4838169"],["/tags/javascirpt/index.html","1e891848a679d44e2a133177a3a4c113"],["/tags/jest/index.html","6ddee7d7a374d0a6518e2341e945259c"],["/tags/jquery/index.html","877f9bf5bcef7931a0f1d218729c12c6"],["/tags/life/index.html","848d093c65e4f8e6acd8e476c4ac9c00"],["/tags/lyrics/index.html","ce5303e66f14b282e9218014ac44284d"],["/tags/node/index.html","81b67d91630b02c22bf6cc62eb0e5b3f"],["/tags/npm/index.html","92c10fb74a64e588d6c0b3a46bca13e8"],["/tags/pwn/index.html","8bec568853645ad0b951b9adf4c13fa7"],["/tags/python/index.html","7551834a11a64eeb0627cc620b3706e0"],["/tags/reactive/index.html","88fd67a7a9cf45f3ea24bd598015fb2f"],["/tags/shell/index.html","9de5ca5128771f5ed5a4a32b3fde14a4"],["/tags/ssh/index.html","7e2677ebee00c096c0fb71cfa5e8076c"],["/tags/svg/index.html","4311e32f35d46c1f6b2dac2a4588f683"],["/tags/translate/index.html","b82355ac9cccb69acc5bdaf36880b8f6"],["/tags/translation/index.html","d68cae2eeb1303186e7455979a4793cf"],["/tags/typescript/index.html","3752cfad09bc0ed2c8eb1dd2e06cbbb7"],["/tags/underscore/index.html","c19ae6437e08270382bcda686dbf5073"],["/tags/video-js/index.html","4790a05de6da3abe483d28e7fc6c5361"],["/tags/webpack/index.html","02321f3a8390fc1324d90d35c606b640"],["/tags/web安全/index.html","5eacc165f75896693911f9e638a0587e"],["/tags/函数式编程/index.html","7d1e1a3b2992e5a680d40c68f12fb4a9"],["/tags/各种开发者大会/index.html","eebc9ae552c47ac33586dd88c3358d4a"],["/tags/文档/index.html","3b3f4e112066f0f3b26846083b49c8ef"],["/tags/构建工具/index.html","094ed1f34aba9b52469ef0d3f7ad6721"],["/tags/测试/index.html","0be6f34508a28843994273598cbf38db"],["/tags/生活/index.html","a9cafcae8f9f09aa87cb59326437c9a0"],["/tags/笔记/index.html","5dc8f073089d56b5f3e60a0b2579f7c8"],["/tags/读书笔记/index.html","76274699b7577ac9b64f5a6bf670aa38"],["/tags/逆向/index.html","948085151f7e28bebbe14eeca3454804"],["/tags/随笔/index.html","4820db526364778f1e9ac8489f2027ee"],["/tags/－-Test-Karma/index.html","324f359e28c9db5d53c77d9da3b9a469"],["/tags/－-杂谈/index.html","a40681b09c868b4346c6112ec3fb7dfa"],["/tags/－生活/index.html","f30c76ed7861d05cc37b1108514bc578"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
