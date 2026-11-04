"use strict";
// ==UserScript==
// @name     Fix Youtube
// @version  1
// @match    https://www.youtube.com/*
// @grant    none
// ==/UserScript==
// Source - https://stackoverflow.com/a/47406751
// Posted by goweon, modified by community. See post 'Timeline' for change history
// Retrieved 2026-10-28, License - CC BY-SA 4.0
(new MutationObserver(check)).observe(document, { childList: true, subtree: true });
function getAllElements() {
    const related = document.querySelector('#below #related');
    const comments = document.querySelector('#below #comments');
    const secondary = document.getElementById('secondary');
    // const related = document.getElementById('related');
    const primary = document.getElementById('primary');
    const player_container_outer = document.getElementById('player-container-outer');
    const player = document.querySelector('#primary #player');
    const ytd_player = document.querySelector('ytd-player');
    const ytd_watch_metadata = document.querySelector('#below ytd-watch-metadata');
    const columns = document.querySelector('ytd-page-manager #columns');
    const yt_lockup_view_model = document.querySelector('#related yt-lockup-view-model');
    const contents = document.querySelector('#related #contents');
    const ytd_watch_flexy = document.querySelector('ytd-page-manager ytd-watch-flexy');
    const fixed_side_menu = document.querySelector('ytd-watch-flexy #fixed-side-menu');
    const ytd_expandable_video_description_body_renderer = document.querySelector('ytd-expandable-video-description-body-renderer');
    const bottom_row = document.querySelector('#below ytd-watch-metadata #bottom-row');
    const snippet_text = document.querySelector('ytd-text-inline-expander #snippet yt-attributed-string');
    const full_bleed_container = document.querySelector('#full-bleed-container');
    const panels_full_bleed_container = document.querySelector('#panels-full-bleed-container');
    return {
        related,
        secondary,
        // related,
        primary,
        player_container_outer,
        player,
        ytd_player,
        ytd_watch_metadata,
        columns,
        yt_lockup_view_model,
        contents,
        ytd_watch_flexy,
        fixed_side_menu,
        comments,
        ytd_expandable_video_description_body_renderer,
        bottom_row,
        snippet_text,
        full_bleed_container,
        panels_full_bleed_container
    };
}
function allElementsLoaded() {
    const elements = getAllElements();
    var allLoaded = true;
    for (let [_, element] of Object.entries(elements)) {
        if (!element)
            allLoaded = false;
    }
    return allLoaded;
}
function check(changes, observer) {
    if (allElementsLoaded()) {
        const elements = getAllElements();
        const { related, secondary, 
        // related,
        primary, player_container_outer, player, ytd_player, ytd_watch_metadata, columns, yt_lockup_view_model, contents, ytd_watch_flexy, fixed_side_menu, comments, ytd_expandable_video_description_body_renderer, bottom_row, snippet_text, full_bleed_container, panels_full_bleed_container } = elements;
        if (related
            && secondary
            && primary
            && player_container_outer
            && player
            && ytd_player
            && ytd_watch_metadata
            && columns
            && contents
            && ytd_watch_flexy
            && fixed_side_menu
            && comments
            && ytd_expandable_video_description_body_renderer
            && bottom_row
            && snippet_text
            && full_bleed_container
            && panels_full_bleed_container) {
            observer.disconnect();
            // for (let [_, element] of Object.entries(elements))
            // {
            //     if (element && element.classList)
            //     {
            //         element.classList = "";
            //     }
            // }
            // Source - https://stackoverflow.com/a/1720483
            // Posted by I.devries, modified by community. See post 'Timeline' for change history
            // Retrieved 2026-10-28, License - CC BY-SA 4.0
            document.getElementsByTagName('html')[0].style.setProperty('box-sizing', 'border-box', 'important');
            // related.remove();
            secondary.remove();
            primary.style.setProperty('max-width', '100%', 'important');
            player_container_outer.style.setProperty('max-width', '100%', 'important');
            player.style.setProperty('margin', '0', 'important');
            ytd_player.style.setProperty('border-radius', '0', 'important');
            if (related.parentElement) {
                related.parentElement.remove();
                contents.style.setProperty('display', 'grid', 'important');
                contents.style.setProperty('grid-template-columns', '1fr', 'important');
                related.parentElement.style.setProperty('max-width', '30%', 'important');
                columns.appendChild(related.parentElement);
            }
            columns.after;
            yt_lockup_view_model.style.setProperty('margin', '0', 'important');
            // Source - https://stackoverflow.com/a/1720483
            // Posted by I.devries, modified by community. See post 'Timeline' for change history
            // Retrieved 2026-10-28, License - CC BY-SA 4.0
            var style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = '.columns::after { content: none !important; }';
            document.getElementsByTagName('head')[0].appendChild(style);
            columns.classList += ' columns';
            ytd_watch_flexy.style.setProperty('max-width', '1280px', 'important');
            fixed_side_menu.remove();
            comments.style.setProperty('display', 'block', 'important');
            primary.appendChild(comments);
            ytd_expandable_video_description_body_renderer.style.setProperty('width', '100%', 'important');
            bottom_row.appendChild(ytd_expandable_video_description_body_renderer);
            ytd_expandable_video_description_body_renderer.remove();
            full_bleed_container.style.setProperty('width', '1344px', 'important');
            panels_full_bleed_container.remove();
            // setTimeout(() => {
            //     const snippet = snippet_text.parentElement?.parentElement;
            //     const ytd_text_inline_expander = snippet?.parentElement;
            //     const snippet_clone = snippet?.cloneNode(true) as HTMLElement;
            //     const snippet_text_clone = snippet_text.cloneNode(true) as HTMLElement;
            //     snippet_clone.addEventListener('click', () => {
            //         console.log("Hello there!");
            //     });
            //     if (snippet)
            //     {
            //         ytd_text_inline_expander?.removeChild(snippet);
            //         ytd_text_inline_expander?.appendChild(snippet_clone);
            //     }
            //     // overflow: hidden;
            //     // max-height: 34rem;
            //     // mask-image: linear-gradient(to top, transparent 0%, transparent 2rem, rgb(0, 0, 0) 2rem, rgb(0, 0, 0) 100%), linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 154px, transparent 178px, transparent 100%);
            //     snippet_clone.style.setProperty('overflow', 'hidden');
            //     snippet_clone.style.setProperty('max-height', '10rm', 'important');
            //     snippet_clone.addEventListener('click', () => {
            //     });
            //     console.log(snippet_text);
            //     console.log(snippet_text_clone);
            //     console.log(snippet);
            //     console.log(snippet_clone);
            // }, 1000);
        }
    }
    else {
        console.log("Still loading???");
    }
}
