angular.module('templates').run(['$templateCache', function($templateCache) {$templateCache.put('about/about.html','<div class="about home-about">\r\n    <div class="container">\r\n        <div class="row">\r\n            <div class="col-md-4">\r\n                <sh-who/>\r\n                <sh-goal/>\r\n            </div>\r\n            <sh-fb class="col-md-4" />\r\n            <sh-sources class="col-md-4" />\r\n        </div>\r\n    </div>\r\n</div>');
$templateCache.put('footer/footer.html','<footer>\r\n    <div class="container">\r\n        <div class="row">\r\n            <sh-map class="col-md-3 col-sm-3" />\r\n            <sh-contact class="col-md-3 col-sm-3" />\r\n            <sh-form class="col-md-6 col-sm-6" />\r\n        </div>\r\n    </div>\r\n    <div id="sub-footer">\r\n        <div class="container">\r\n            <div class="row">\r\n                <sh-copy class="col-lg-6" />\r\n                <sh-share class="col-lg-6" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>');
$templateCache.put('article/article.html','<section id="inner-headline">\r\n    <div class="container">\r\n        <div class="row">\r\n            <div class="col-lg-12">\r\n                <h2 class="pageTitle" translate="header-{{ n }}"></h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class="section-padding">\r\n    <div class="container">\r\n        <div class="row showcase-section">\r\n                <div class="about-text" translate="body-{{ n }}">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>');
$templateCache.put('header/header.html','<section id="banner" ng-if="$ctrl.length">\r\n    <div id="main-slider" class="flexslider">\r\n        <ul class="slides">\r\n            <li ng-repeat="x in $ctrl.length track by $index">\r\n                <img ng-src="{{ \'image-url-\' + ($index + 1) | translate }}" alt="" />\r\n                <div class="flex-caption">\r\n                    <h3 translate="image-header-{{ $index + 1 }}"></h3>\r\n                    <p translate="image-sub-{{ $index + 1 }}"></p>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</section>');
$templateCache.put('navbar/navbar.html','<header>\r\n    <div class="navbar navbar-default navbar-fixed-top" style="top:45px;">\r\n        <div class="container">\r\n            <div class="navbar-header">\r\n                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\r\n                        <span class="icon-bar"></span>\r\n                        <span class="icon-bar"></span>\r\n                        <span class="icon-bar"></span>\r\n                    </button>\r\n                <a class="navbar-brand" ui-sref="app.home"><img src="img/logo.png" alt="logo" /></a>\r\n            </div>\r\n            <div class="navbar-collapse collapse">\r\n                <ul class="nav navbar-nav">\r\n                    <li class="active">\r\n                        <a ui-sref="app.home" translate="nav-link-1"></a>\r\n                    </li>\r\n                    <li class="dropdown">\r\n                            <a href data-toggle="dropdown" class="dropdown-toggle">\r\n                                <span translate="nav-link-2"></span>\r\n                                <b class="caret"></b>\r\n                            </a>\r\n                            <ul class="dropdown-menu">\r\n                                <li ng-repeat="sub in $ctrl.length track by $index">\r\n                                    <a ng-click="$ctrl.goTo($index + 1)">\r\n                                        <span translate="sub-nav-link-{{ $index + 1 }}"></span>\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </li>\r\n                        <li>\r\n                            <a href ng-click="$ctrl.scrollTo(\'rebbe\')" translate="nav-link-3"></a>\r\n                        </li>\r\n                        <li>\r\n                            <a href ng-click="$ctrl.scrollTo(\'about\')" translate="nav-link-4"></a>\r\n                        </li>\r\n                        <li>\r\n                        <a href ng-click="$ctrl.scrollTo(\'footer\')" translate="nav-link-5"></a>\r\n                    </li>\r\n                    <li class="dropdown">\r\n                        <a href data-toggle="dropdown" class="dropdown-toggle">\r\n                            <i class="fa fa-globe"></i>\r\n                            <span translate="{{ $ctrl.lang }}"></span>\r\n                            <b class="caret"></b>\r\n                        </a>\r\n                        <ul class="dropdown-menu">\r\n                            <li>\r\n                                <a ng-click="$ctrl.changeLanguage(\'en\')">\r\n                                    <span translate="en"></span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a ng-click="$ctrl.changeLanguage(\'pt\')">\r\n                                    <span translate="pt"></span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a ng-click="$ctrl.changeLanguage(\'he\')">\r\n                                    <span translate="he"></span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a ng-click="$ctrl.changeLanguage(\'ar\')">\r\n                                    <span translate="ar"></span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li>\r\n                        <div class="donate">\r\n                            <a href ui-sref="app.article({ number: \'donate\' })" translate="nav-link-6"></a>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</header>\r\n\r\n<a href ng-click="$ctrl.scrollTo(\'top-bar\')" class="scrollup">\r\n    <i class="fa fa-angle-up active"></i>\r\n</a>');
$templateCache.put('partners/partners.html','<section class="section-padding gray-bg">\r\n    <div class="container">\r\n        <div class="row">\r\n            <div class="col-md-12">\r\n                <div class="section-title text-center">\r\n                    <h2 translate="partners-header"></h2>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="row">\r\n            <div class="col-sm-2" ng-repeat="x in $ctrl.length track by $index">\r\n                <img class="partners-img"\r\n                     ng-src="{{ \'partners-img-\' + ($index + 1) | translate }}"\r\n                     title="{{ \'partners-title-\' + ($index + 1) | translate }}">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>');
$templateCache.put('laws/laws.html','<section id="content">\r\n    <div class="container">\r\n        <div class="row">\r\n            <div class="col-md-12">\r\n                <div class="aligncenter">\r\n                    <h2 class="aligncenter" translate="laws-header-0"></h2>\r\n                    <p translate="laws-body-0"></p>\r\n                </div>\r\n                <br/>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row">\r\n            <div class="col-sm-4 info-blocks">\r\n                <i class="icon-info-blocks fa fa-hand-pointer-o"></i>\r\n                <div class="info-blocks-in">\r\n                    <h3 translate="laws-header-1"></h3>\r\n                    <p translate="laws-body-1"></p>\r\n                    <a href ui-sref="article({number: 1})" translate="laws-body-button"></a>\r\n                </div>\r\n            </div>\r\n            <div class="col-sm-4 info-blocks">\r\n                <i class="icon-info-blocks fa fa-handshake-o"></i>\r\n                <div class="info-blocks-in">\r\n                    <h3 translate="laws-header-2"></h3>\r\n                    <p translate="laws-body-2"></p>\r\n                    <a href ui-sref="article({number: 2})" translate="laws-body-button"></a>                    \r\n                </div>\r\n            </div>\r\n            <div class="col-sm-4 info-blocks">\r\n                <i class="icon-info-blocks fa fa-heartbeat"></i>\r\n                <div class="info-blocks-in">\r\n                    <h3 translate="laws-header-3"></h3>\r\n                    <p translate="laws-body-3"></p>\r\n                    <a href ui-sref="article({number: 3})" translate="laws-body-button"></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row">\r\n            <div class="col-sm-4 info-blocks">\r\n                <i class="icon-info-blocks fa fa-building-o"></i>\r\n                <div class="info-blocks-in">\r\n                    <h3 translate="laws-header-4"></h3>\r\n                    <p translate="laws-body-4"></p>\r\n                    <a href ui-sref="article({number: 4})" translate="laws-body-button"></a>\r\n                </div>\r\n            </div>\r\n            <div class="col-sm-4 info-blocks">\r\n                <i class="icon-info-blocks fa fa-diamond"></i>\r\n                <div class="info-blocks-in">\r\n                    <h3 translate="laws-header-5"></h3>\r\n                    <p translate="laws-body-5"></p>\r\n                    <a href ui-sref="article({number: 5})" translate="laws-body-button"></a>\r\n                </div>\r\n            </div>\r\n            <div class="col-sm-4 info-blocks">\r\n                <i class="icon-info-blocks fa fa-paw"></i>\r\n                <div class="info-blocks-in">\r\n                    <h3 translate="laws-header-6"></h3>\r\n                    <p translate="laws-body-6"></p>\r\n                    <a href ui-sref="article({number: 6})" translate="laws-body-button"></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class="row">\r\n            <div class="col-sm-offset-4 col-sm-4 info-blocks">\r\n                <i class="icon-info-blocks fa fa-balance-scale"></i>\r\n                <div class="info-blocks-in">\r\n                    <h3 translate="laws-header-7"></h3>\r\n                    <p translate="laws-body-7"></p>\r\n                    <a href ui-sref="article({number: 7})" translate="laws-body-button"></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>');
$templateCache.put('topbar/topbar.html','<div class="topbar navbar-fixed-top">\r\n    <div class="container">\r\n        <div class="row">\r\n            <div class="col-md-12 longLive">\r\n                <img class="pull-right" src="img/flag.png" height="20px"></img>\r\n                <span translate="yechi"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>');
$templateCache.put('subHeader/subHeader.html','<section id="call-to-action-2">\r\n        <div class="container">\r\n            <div class="row">\r\n                <div class="col-md-10 col-sm-9">\r\n                    <h3 translate="banner-title"></h3>\r\n                    <p translate="banner-body"></p>\r\n                </div>\r\n                <div class="col-md-2 col-sm-3">\r\n                    <a href="#" class="btn btn-primary" translate="banner-button"></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>');
$templateCache.put('rebbe/rebbe.html','<section class="section-padding gray-bg">\r\n    <div class="container">\r\n        <div class="row">\r\n            <div class="col-md-12">\r\n                <div class="section-title text-center">\r\n                    <h2 translate="rebbe-header"></h2>\r\n                    <p translate="rebbe-sub"></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="row">\r\n            <div class="col-md-6 col-sm-6">\r\n                <div class="about-text">\r\n                    <p translate="rebbe-body"></p>\r\n\r\n                    <ul class="withArrow">\r\n                        <li>\r\n                            <span class="fa fa-angle-right"></span>\r\n                            {{ \'rebbe-1\' | translate }}\r\n                        </li>\r\n                        <li>\r\n                            <span class="fa fa-angle-right"></span>\r\n                            {{ \'rebbe-2\' | translate }}\r\n                        </li>\r\n                        <li>\r\n                            <span class="fa fa-angle-right"></span>\r\n                            {{ \'rebbe-3\' | translate }}\r\n                        </li>\r\n                        <li>\r\n                            <span class="fa fa-angle-right"></span>\r\n                            {{ \'rebbe-4\' | translate }}\r\n                        </li>\r\n                    </ul>\r\n                    <a href="#" class="btn btn-primary" translate="rebbe-button"></a>\r\n                </div>\r\n            </div>\r\n            <div class="col-md-6 col-sm-6">\r\n                <div class="about-image">\r\n                    <img src="img/rebbe.png" alt="The Rebbe">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>');
$templateCache.put('about/fb/fb.html','<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FS7for70%2F&tabs=timeline&width=340&height=380&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=196911710443484"\r\n    width="340" height="280" style="border:none;overflow:hidden" scrolling="no" frameborder="0"\r\n    allowTransparency="true" /></iframe>\r\n\r\n<!-- <div class="block-heading-two">\r\n    <h3>\r\n        <span translate="news-head"></span>\r\n    </h3>\r\n</div>\r\n\r\n<!-- Panel. Use "panel-XXX" class for different colors. Replace "XXX" with color. -->\r\n<!-- <div class="panel-group" id="accordion">\r\n    <div class="panel">\r\n        <div class="panel-heading">\r\n            <h4 class="panel-title">\r\n                <a href data-toggle="collapse" data-parent="#accordion" data-target="#collapseOne" ng-click="$ctrl.select(1)">\r\n                    <i class="fa" ng-class="{ \'fa-angle-down\': $ctrl.selected == 1,\r\n                                                  \'fa-angle-right\': $ctrl.selected != 1 }"></i>\r\n                    <span translate="news-title-1"></span>\r\n                </a>\r\n            </h4>\r\n        </div>\r\n        <div id="collapseOne" class="panel-collapse collapse">\r\n            <div class="panel-body">\r\n                <span translate="news-body-1"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="panel">\r\n        <div class="panel-heading">\r\n            <h4 class="panel-title">\r\n                <a href data-toggle="collapse" data-parent="#accordion" data-target="#collapseTwo" ng-click="$ctrl.select(2)">\r\n                    <i class="fa" ng-class="{ \'fa-angle-down\': $ctrl.selected == 2,\r\n                                                  \'fa-angle-right\': $ctrl.selected != 2 }"></i>\r\n                    <span translate="news-title-2"></span>\r\n                </a>\r\n            </h4>\r\n        </div>\r\n        <div id="collapseTwo" class="panel-collapse collapse">\r\n            <div class="panel-body">\r\n                <span translate="news-body-2"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="panel">\r\n        <div class="panel-heading">\r\n            <h4 class="panel-title">\r\n                <a href data-toggle="collapse" data-parent="#accordion" data-target="#collapseThree" ng-click="$ctrl.select(3)">\r\n                    <i class="fa" ng-class="{ \'fa-angle-down\': $ctrl.selected == 3,\r\n                                                  \'fa-angle-right\': $ctrl.selected != 3 }"></i>\r\n                    <span translate="news-title-3"></span>\r\n                </a>\r\n            </h4>\r\n        </div>\r\n        <div id="collapseThree" class="panel-collapse collapse">\r\n            <div class="panel-body">\r\n                <span translate="news-body-3"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="panel">\r\n        <div class="panel-heading">\r\n            <h4 class="panel-title">\r\n                <a href data-toggle="collapse" data-parent="#accordion" data-target="#collapseFour" ng-click="$ctrl.select(4)">\r\n                    <i class="fa" ng-class="{ \'fa-angle-down\': $ctrl.selected == 4,\r\n                                                  \'fa-angle-right\': $ctrl.selected != 4 }"></i>\r\n                    <span translate="news-title-4"></span>\r\n                </a>\r\n            </h4>\r\n        </div>\r\n        <div id="collapseFour" class="panel-collapse collapse">\r\n            <div class="panel-body">\r\n                <span translate="news-body-4"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->');
$templateCache.put('about/goal/goal.html','<div class="block-heading-two">\r\n    <h3>\r\n        <span translate="goal-title"></span>\r\n    </h3>\r\n</div>\r\n<p translate="goal-body"></p>');
$templateCache.put('about/sources/sources.html','<div class="block-heading-two">\r\n    <h3>\r\n        <span translate="sources-title"></span>\r\n    </h3>\r\n</div>\r\n<div class="testimonials">\r\n    <div class="active item">\r\n        <blockquote>\r\n            <p translate="sources-body"></p>\r\n        </blockquote>\r\n        <div class="carousel-info">\r\n            <img alt="" src="img/Maimonides.jpg" class="pull-left">\r\n            <div class="pull-left">\r\n                <span class="testimonials-name" translate="sources-name"></span>\r\n                <span class="testimonials-post" translate="sources-ref"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>');
$templateCache.put('about/who/who.html','<div class="block-heading-two">\r\n    <h3>\r\n        <span translate="who-title"></span>\r\n    </h3>\r\n</div>\r\n<p translate="who-body"></p>');
$templateCache.put('footer/contact/contact.html','<div class="widget">\r\n    <h5 class="widgetheading" translate="contact-title"></h5>\r\n    <address>\r\n        <strong translate="7for70"></strong>\r\n        <div translate="contact-address-1"></div>\r\n        <div translate="contact-address-2"></div>\r\n    </address>\r\n    <p>\r\n        <i class="fa fa-phone"></i><span translate="contact-phone"></span><br>\r\n        <i class="fa fa-mobile"></i><span translate="contact-mobile"></span><br>\r\n        <i class="fa fa-envelope"></i>\r\n            <a ng-href="mailto:{{ \'contact-email\' | translate }}">\r\n                <span translate="contact-email"></span>\r\n            </a>\r\n        <br>\r\n    </p>\r\n</div>');
$templateCache.put('footer/copy/copy.html','<div class="copyright">\r\n    <p>\r\n        <span>&copy; \r\n            <a href="/" target="_blank">\r\n                <span translate="copy-link"></span>\r\n            </a>\r\n            <span translate="copy-link"></span>\r\n        </span>\r\n    </p>\r\n</div>');
$templateCache.put('footer/form/form.html','<div class="widget">\r\n    <form name="sentMessage" id="contactForm" class="col-md-12" novalidate>\r\n        <h5 class="widgetheading" translate="form-title"></h5>\r\n        <div class="control-group col-md-6">\r\n            <div class="controls">\r\n                <input type="text" class="form-control" name="name" ng-model="$ctrl.form.name"\r\n                       placeholder="{{ \'form-name\' | translate }}" required />\r\n            </div>\r\n        </div>\r\n        <div class="control-group col-md-6">\r\n            <div class="controls">\r\n                <input type="email" class="form-control" name="email" ng-model="$ctrl.form.email"\r\n                        placeholder="{{ \'form-email\' | translate }}" required />\r\n            </div>\r\n        </div>\r\n\r\n        <div class="control-group col-md-12">\r\n            <div class="controls">\r\n                <textarea rows="3" cols="100" class="form-control" name="message" ng-model="$ctrl.form.message"\r\n                          placeholder="{{ \'form-message\' | translate }}" required\r\n                          minlength="5" maxlength="999" style="resize:none"></textarea>\r\n            </div>\r\n        </div>\r\n        \r\n        <button type="submit" ng-click="$ctrl.send($ctrl.form)" class="btn btn-primary pull-right">\r\n            <span translate="form-button"></span>\r\n        </button>\r\n    </form>\r\n</div>');
$templateCache.put('footer/links/links.html','<div class="widget">\r\n    <h5 class="widgetheading" translate="links-title"></h5>\r\n    <ul class="link-list">\r\n        <li>\r\n            <a ng-href="{{ \'links-url-1\' | translate }}" translate="links-title-1"></a>\r\n        </li>\r\n        <li>\r\n            <a ng-href="{{ \'links-url-2\' | translate }}" translate="links-title-2"></a>\r\n        </li>\r\n        <li>\r\n            <a ng-href="{{ \'links-url-3\' | translate }}" translate="links-title-3"></a>\r\n        </li>\r\n        <li>\r\n            <a ng-href="{{ \'links-url-4\' | translate }}" translate="links-title-4"></a>\r\n        </li>\r\n        <li>\r\n            <a ng-href="{{ \'links-url-5\' | translate }}" translate="links-title-5"></a>\r\n        </li>\r\n    </ul>\r\n</div>');
$templateCache.put('footer/map/map.html','<iframe src="https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sSderot+Ben+Gurion+57,+Haifa"\r\n    width="100%" height="200px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>');
$templateCache.put('footer/share/share.html','<ul class="social-network">\r\n    <li>\r\n        <a href="#" data-placement="top" title="{{ \'share-facebook\' | translate }}">\r\n            <i class="fa fa-facebook"></i>\r\n        </a>\r\n    </li>\r\n    <li>\r\n        <a href="#" data-placement="top" title="{{ \'share-twitter\' | translate }}">\r\n            <i class="fa fa-twitter"></i>\r\n        </a>\r\n    </li>\r\n    <li>\r\n        <a href="#" data-placement="top" title="{{ \'share-linkedin\' | translate }}">\r\n            <i class="fa fa-linkedin"></i>\r\n        </a>\r\n    </li>\r\n    <li>\r\n        <a href="#" data-placement="top" title="{{ \'share-pinterest\' | translate }}">\r\n            <i class="fa fa-pinterest"></i>\r\n        </a>\r\n    </li>\r\n    <li>\r\n        <a href="#" data-placement="top" title="{{ \'share-gplus\' | translate }}">\r\n            <i class="fa fa-google-plus"></i>\r\n        </a>\r\n    </li>\r\n</ul>');
$templateCache.put('articles/articles.html','<sh-article />');
$templateCache.put('main/main.html','<sh-header/>\r\n<sh-sub-header/>\r\n<sh-laws/>\r\n<sh-rebbe/>\r\n<sh-about/>\r\n<sh-partners/>');
$templateCache.put('app/app.html','<div id="wrapper" class="home-page">\r\n    <sh-top-bar />\r\n    <sh-navbar />\r\n    <div ui-view style="margin-top: 110px;"/>\r\n    <sh-footer />\r\n</div>');}]);
//# sourceMappingURL=templates.js.map
