// SystemRescue settings
//
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
pref("browser.startup.homepage_override.mstone", "ignore");
//pref("browser.startup.homepage", "about:home");
// disable Firefox telemetry and surveys, don't annoy the user with it
pref("app.shield.optoutstudies.enabled", false);
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("datareporting.policy.dataSubmissionPolicyBypassNotification", true);
// don't ever use DNS-over-HTTPS, we always want use the local resolver
// this is necessary for being able to resolve local hostnames e.g. in a split dns setup
// 5 means "off by choice"
pref("network.trr.mode", 5);
// disable advertising
pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
pref("browser.newtabpage.activity-stream.showSponsored", false);
// disable "pocket" icon to not clutter the interface
//pref("extensions.pocket.enabled", false);

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


