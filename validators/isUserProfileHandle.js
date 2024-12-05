'use strict';

// Helper function to define a new user profile handle validator.
const define = (name, re) => {
  // testing function.
  const fn = userProfileHandle => re.test(`${userProfileHandle}`);

  // Add the RegExp.
  Object.defineProperty(fn, 'RE', {
    value: re
  });

  // Add the card name.
  Object.defineProperty(fn, 'NAME', {
    value: name
  });
  return fn;
}

// Handles validator.
const handles = {};
export const isDiscordHandle = handles.isDiscord = define('Discord', /^(https:\/\/|)(www.|)discord(app|).com(\/users|)\/[a-z0-9\-\_\@\+\%]+(\?[a-z0-9\-\_\@\&\=\#\^\~\+\%\!]+$|$)/i);
export const isFacebookHandle = handles.isFacebookHandle = define('Facebook', /^(https:\/\/|)(www.|)facebook.com\/[a-z0-9\-\_\@\+\%]+(\?[a-z0-9\-\_\@\&\=\#\^\~\+\%\!]+$|$)/i);
export const isInstagramHandle = handles.isInstagramHandle = define('Instagram', /^(https:\/\/|)(www.|)instagram.com\/[a-z0-9\-\_\@\+\%]+(\?[a-z0-9\-\_\@\&\=\#\^\~\+\%\!]+$|$)/i);
export const isLinkedInHandle = handles.isLinkedInHandle = define('LinkedIn', /^(https:\/\/|)(www.|)linkedin.com(\/in|)\/[a-z0-9\-\_\@\+\%]+(\?[a-z0-9\-\_\@\&\=\#\^\~\+\%\!]+$|$)/i);
export const isMessengerHandle = handles.isMessengerHandle = define('Messenger', /^(https:\/\/|)(www.|)m.me\/[a-z0-9\-\_\@\+\%]+(\?[a-z0-9\-\_\@\&\=\#\^\~\+\%\!]+$|$)/i);
export const isPinterestHandle = handles.isPinterestHandle = define('Pinterest', /^(https:\/\/|)(www.|)(pinterest.com|pin.it)\/[a-z0-9\-\_\@\+\%]+(\?[a-z0-9\-\_\@\&\=\#\^\~\+\%\!]+$|$)/i);
export const isRedditHandle = handles.isRedditHandle = define('Reddit', /^(https:\/\/|)(www.|)reddit.com\/[a-z0-9\-\_\@\+\%\/]+(\?[a-z0-9\-\_\@\&\=\#\^\~\+\%\!]+$|$)/i);
export const isSnapchatHandle = handles.isSnapchatHandle = define('Snapchat', /^(https:\/\/|)(www.|)snapchat.com(\/add|)\/[a-z0-9\-\_\@\+\%]+(\?[a-z0-9\-\_\@\&\=\#\^\~\+\%\!]+$|$)/i);
export const isThreadsHandle = handles.isThreadsHandle = define('Threads', /^(https:\/\/|)(www.|)threads.(net|com)\/[a-z0-9\-\_\@\+\%]+(\?[a-z0-9\-\_\@\&\=\#\^\~\+\%\!]+$|$)/i);
export const isTikTokHandle = handles.isTikTokHandle = define('TikTok', /^(https:\/\/|)(www.|)tiktok.com\/[a-z0-9\-\_\@\+\%]+(\?[a-z0-9\-\_\@\&\=\#\^\~\+\%\!]+$|$)/i);
export const isWeChatHandle = handles.isWeChatHandle = define('WeChat', /^(https:\/\/|)(www.|)(u.|)wechat.com\/[a-z0-9\-\_\@\+\%]+(\?[a-z0-9\-\_\@\&\=\#\^\~\+\%\!]+$|$)/i);
export const isWhatsAppHandle = handles.isWhatsAppHandle = define('WhatsApp', /^(https:\/\/|)(www.|)wa.me(\/qr|)\/[a-z0-9\-\_\@\+\%]+(\?[a-z0-9\-\_\@\&\=\#\^\~\+\%\!]+$|$)/i);
export const isXHandle = handles.isXHandle = define('X', /^(https:\/\/|)(www.|)(twitter|x).com\/[a-z0-9\-\_\@\+\%]+(\?[a-z0-9\-\_\@\&\=\#\^\~\+\%\!]+$|$)/i);
export const isYoutubeHandle = handles.isYoutubeHandle = define('Youtube', /^(https:\/\/|)(www.|)youtube.com\/[a-z0-9\-\_\@\+\%]+(\?[a-z0-9\-\_\@\&\=\#\^\~\+\%\!]+$|$)/i);

const PLATFORMS = Object.freeze(Object.entries(handles).map(([k, v]) => v.NAME));
const PLATFORM_MAP = Object.freeze(new Map(Object.entries(handles).map(([k, v]) => [v.NAME.toLowerCase(), v])));

export const getSupportedUserProfileHandlePlatforms = () => PLATFORMS;

// Helper function to get the platform.
export const getUserProfilePlatform = userProfileHandle => {
  for (const k in handles) {
    const fn = handles[k];
    if (fn(userProfileHandle)) return fn.NAME;
  }

  return '';
}

// Main validator.
export const isUserProfileHandle = (userProfileHandle, platform) => {
  const fn = PLATFORM_MAP.get(`${platform}`.toLowerCase());
  if (fn) return fn(userProfileHandle);

  for (const k in handles) {
    if (handles[k](userProfileHandle)) return true;
  }

  return false;
}

// Exports.
Object.defineProperty(isUserProfileHandle, 'PLATFORM', {
  value: PLATFORMS
});
Object.defineProperty(isUserProfileHandle, 'PLATFORM_MAP', {
  value: PLATFORM_MAP
});
Object.assign(isUserProfileHandle, { getSupportedUserProfileHandlePlatforms, getUserProfilePlatform, ...handles });
export default Object.freeze(Object.defineProperty(isUserProfileHandle, 'isUserProfileHandle', {
  value: isUserProfileHandle
}));

// Node.js exports.
try {
  module.exports = isUserProfileHandle;
} catch {}