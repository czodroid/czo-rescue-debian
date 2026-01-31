// Ensure preference can't be changed by users
lockPref("app.update.auto", false);
lockPref("app.update.enabled", false);
lockPref("intl.locale.matchOS", true);
// Allow user to change based on needs
pref("browser.display.use_system_colors", true);
//pref("spellchecker.dictionary_path", "/usr/share/myspell");
pref("browser.shell.checkDefaultBrowser", false);
// Preferences that should be reset every session
pref("browser.EULA.override", true);
// SystemRescue settings
pref("browser.startup.homepage_override.mstone", "ignore");
// pref("browser.startup.homepage", "about:home");
// Disable telemetry and surveys
pref("app.normandy.enabled", false);
pref("app.normandy.api_url", "");
pref("app.shield.optoutstudies.enabled", false);
pref("browser.contentanalysis.enabled", false);
pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
pref("browser.newtabpage.activity-stream.telemetry", false);
pref("browser.search.serpEventTelemetryCategorization.enabled", false);
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("datareporting.policy.dataSubmissionPolicyBypassNotification", true);
pref("datareporting.usage.uploadEnabled", false);
pref("dom.private-attribution.submission.enabled", false);
pref("identity.fxaccounts.telemetry.clientAssociationPing.enabled", false);
pref("network.trr.confirmation_telemetry_enabled", false);
pref("nimbus.telemetry.targetingContextEnabled", false);
pref("security.csp.reporting.enabled", false);
pref("telemetry.fog.artifact_build", false);
pref("telemetry.fog.init_on_shutdown", false);
pref("toolkit.telemetry.unified", false);
pref("toolkit.telemetry.enabled", false);
pref("toolkit.telemetry.server", "data:,");
pref("toolkit.telemetry.archive.enabled", false);
pref("toolkit.telemetry.dap_enabled", false);
pref("toolkit.telemetry.dap_task1_enabled", false);
pref("toolkit.telemetry.dap_visit_counting_enabled", false);
pref("toolkit.telemetry.newProfilePing.enabled", false);
pref("toolkit.telemetry.shutdownPingSender.enabled", false);
pref("toolkit.telemetry.updatePing.enabled", false);
pref("toolkit.telemetry.bhrPing.enabled", false);
pref("toolkit.telemetry.firstShutdownPing.enabled", false);
pref("toolkit.telemetry.user_characteristics_ping.opt-out", true);
pref("toolkit.telemetry.coverage.opt-out", true);
pref("toolkit.coverage.opt-out", true);
pref("toolkit.coverage.enabled", false);
pref("toolkit.coverage.endpoint.base", "");
// Disable captive portal and connectivity checks
pref("captivedetect.canonicalURL", "");
pref("network.captive-portal-service.enabled", false);
pref("network.connectivity-service.enabled", false);
// Disable implicit outbound connections
pref("network.prefetch-next", false);
pref("network.dns.disablePrefetch", true);
pref("network.dns.disablePrefetchFromHTTPS", true);
pref("network.predictor.enabled", false);
pref("network.predictor.enable-prefetch", false);
pref("network.http.speculative-parallel-limit", 0);
pref("browser.places.speculativeConnect.enabled", false);
pref("browser.urlbar.speculativeConnect.enabled", false);
pref("dom.prefetch_dns_for_anchor_http_document", false);
pref("dom.prefetch_dns_for_anchor_https_document", false);
// Disable crash reporting
pref("breakpad.reportURL", "");
pref("browser.crashReports.unsubmittedCheck.enabled", false);
pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
pref("browser.tabs.crashReporting.sendReport", false);
// Disable recommendations of extensions and features
pref("browser.discovery.enabled", false);
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
pref("browser.urlbar.suggest.addons", false);
pref("extensions.getAddons.showPane", false);
pref("extensions.htmlaboutaddons.recommendations.enabled", false);
// Disable advertising
pref("browser.newtabpage.activity-stream.showSponsored", false);
pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);
pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
pref("browser.newtabpage.activity-stream.system.showSponsored", false);
pref("browser.newtabpage.activity-stream.system.showSponsoredCheckboxes", false);
// Disable AI chatbot
pref("browser.ml.chat.enabled", false);
// Disable "Pocket" icon
pref("extensions.pocket.enabled", false);
// Disable shortened URLs
pref("browser.urlbar.trimURLs", false);
// Don't ever use DNS-over-HTTPS, we always want use the local resolver
// this is necessary for being able to resolve local hostnames e.g. in a split dns setup
// 5 means "off by choice"
pref("network.trr.mode", 5);

// Czo settings for firefox 115

// homepage
//pref("browser.startup.homepage", "http://www.system-rescue.org/");
//pref("browser.startup.homepage", "http://czo.free.fr/");
pref("browser.startup.homepage", "https://duckduckgo.com/");

// bookmarks
pref("browser.toolbars.bookmarks.visibility", "never");

// strict contentblocking
pref("browser.contentblocking.category", "strict");

// cookie and history lost on close
pref("network.cookie.lifetimePolicy", 2);
pref("privacy.history.custom", true);
pref("privacy.sanitize.sanitizeOnShutdown", true);

// DuckDuckGo search
//pref("browser.urlbar.placeholderName", "DuckDuckGo");
//pref("browser.urlbar.placeholderName.private", "DuckDuckGo");
//pref("defaultSearchEngineData", "{\"loadPath\":\"[addon]ddg@search.mozilla.org\",\"name\":\"DuckDuckGo\",\"origin\":\"default\",\"submissionURL\":\"https://duckduckgo.com/?t=ftsa&q=\"}");

// no title
pref("browser.tabs.drawInTitlebar", true);
pref("browser.tabs.inTitlebar", 1);

// url bar room + home
//pref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[],\"nav-bar\":[\"back-button\",\"forward-button\",\"stop-reload-button\",\"home-button\",\"urlbar-container\",\"downloads-button\"],\"toolbar-menubar\":[\"menubar-items\"],\"TabsToolbar\":[\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\"],\"PersonalToolbar\":[\"import-button\",\"personal-bookmarks\",\"ublock0_raymondhill_net-browser-action\",\"characterencoding-button\",\"screenshot-button\",\"bookmarks-menu-button\",\"history-panelmenu\",\"developer-button\",\"add-ons-button\",\"preferences-button\",\"fxa-toolbar-menu-button\"]},\"seen\":[\"save-to-pocket-button\",\"developer-button\",\"ublock0_raymondhill_net-browser-action\"],\"dirtyAreaCache\":[\"nav-bar\",\"PersonalToolbar\"],\"currentVersion\":17,\"newElementCount\":3}");
pref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[],\"unified-extensions-area\":[\"ublock0_raymondhill_net-browser-action\"],\"nav-bar\":[\"back-button\",\"forward-button\",\"stop-reload-button\",\"home-button\",\"urlbar-container\",\"downloads-button\",\"unified-extensions-button\"],\"toolbar-menubar\":[\"menubar-items\"],\"TabsToolbar\":[\"firefox-view-button\",\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\"],\"PersonalToolbar\":[\"import-button\",\"personal-bookmarks\",\"screenshot-button\",\"characterencoding-button\",\"panic-button\",\"sidebar-button\",\"bookmarks-menu-button\",\"history-panelmenu\",\"logins-button\",\"developer-button\",\"preferences-button\",\"fxa-toolbar-menu-button\"]},\"seen\":[\"save-to-pocket-button\",\"developer-button\",\"ublock0_raymondhill_net-browser-action\"],\"dirtyAreaCache\":[\"nav-bar\",\"unified-extensions-area\",\"PersonalToolbar\",\"toolbar-menubar\",\"TabsToolbar\"],\"currentVersion\":19,\"newElementCount\":4}");

//pref("extensions.activeThemeID", "{8b85d219-25fe-44dd-89b7-be3935a77c7b}");


