import { css } from "styled-components";

export const ghostStyles = css`
  body {
    background: #fff;
  }
  .ghost {
    .img {
      display: block;
      width: 100%;
      height: 100%;
      background-position: center center;
      background-size: cover;
      border-radius: 100%;
    }

    .hidden {
      visibility: hidden;
      position: absolute;
      text-indent: -9999px;
    }

    /* 2. Layout - Page building blocks
/* ---------------------------------------------------------- */

    .site-wrapper {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    .site-main {
      z-index: 100;
      flex-grow: 1;
    }

    /* Full width page blocks */
    .outer {
      position: relative;
      padding: 0 5vw;
    }

    /* Centered content container blocks */
    .inner {
      margin: 0 auto;
      max-width: 1040px;
      width: 100%;
    }

    /* Usage:

<div class="outer">
    <div class="inner">
        Centered content
    </div>
</div>

*/

    /* 3. Special Template Styles
/* ---------------------------------------------------------- */

    @media (min-width: 900px) {
      .home-template .post-feed,
      .tag-template .post-feed,
      .author-template .post-feed {
        padding: 40px 0 5vw;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
      }

      .home-template .site-nav {
        position: relative;
      }
    }

    /* 4. Site Header
/* ---------------------------------------------------------- */

    .site-header-background {
      position: relative;
      margin-top: 64px;
      padding-bottom: 12px;
      color: #fff;
      background-size: cover;
    }

    .site-header-background:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 10;
      display: block;
      background: rgba(0, 0, 0, 0.18);
    }

    .site-header-background:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: auto;
      left: 0;
      z-index: 10;
      display: block;
      height: 140px;
      background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));
    }

    .site-header-background.no-image:before,
    .site-header-background.no-image:after {
      display: none;
    }

    .site-header-content {
      z-index: 100;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 6vw 3vw;
      min-height: 200px;
      max-height: 340px;
    }

    .site-title {
      z-index: 10;
      margin: 0 0 0 -2px;
      padding: 0;
      font-size: 5rem;
      line-height: 1em;
      font-weight: 600;
    }

    .site-logo {
      max-height: 55px;
    }

    .site-description {
      z-index: 10;
      margin: 0;
      padding: 5px 0;
      font-size: 2.1rem;
      line-height: 1.4em;
      font-weight: 400;
      opacity: 0.8;
    }

    /* 4.1 Home header
/* ---------------------------------------------------------- */

    .site-home-header {
      z-index: 1000;
    }

    .site-home-header .site-header-background {
      margin-top: 0;
    }

    .site-home-header .site-header-content {
      padding: 5vw 3vw 6vw;
    }

    .site-home-header .site-title {
      font-size: 5.5rem;
      text-align: center;
    }

    .site-home-header .site-description {
      font-size: 2.2rem;
      font-weight: 300;
    }

    /* 4.2 Archive header (tag and author post lists)
/* ---------------------------------------------------------- */

    .site-archive-header .site-header-content {
      position: relative;
      align-items: stretch;
      padding: 12vw 0 20px;
      min-height: 200px;
      max-height: 600px;
    }

    .site-archive-header .no-image {
      padding-top: 0;
      padding-bottom: 0;
      color: var(--darkgrey);
      background: #fff;
      opacity: 1;
    }

    .site-archive-header .no-image .site-description {
      color: var(--midgrey);
      opacity: 1;
    }

    .site-archive-header .no-image .site-header-content {
      padding: 5vw 0 10px;
    }

    /* Special header styles for smaller screens */

    @media (max-width: 900px) {
      .site-header-content {
        padding-bottom: 9vw;
      }
    }

    @media (max-width: 500px) {
      .site-home-header .site-title {
        font-size: 3.2rem;
      }

      .site-home-header .site-description {
        font-size: 1.8rem;
      }

      .site-archive-header .site-header-content {
        min-height: unset;
      }
    }

    /* 5. Site Navigation
/* ---------------------------------------------------------- */

    .site-nav-main {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1000;
    }

    .site-nav {
      position: relative;
      z-index: 100;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      overflow-y: hidden;
      height: 64px;
      font-size: 1.3rem;
    }

    .site-nav-left-wrapper {
      position: relative;
      flex: 1 0 auto;
      display: flex;
    }

    .site-header-background:not(.responsive-header-img)
      .site-nav-left-wrapper:after,
    .site-nav-main .site-nav-left-wrapper:after {
      content: "";
      position: absolute;
      top: 0;
      z-index: 1000;
      width: 40px;
      height: 100%;
    }

    .site-nav-left {
      flex: 1 0 auto;
      display: flex;
      align-items: center;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      margin-right: 10px;
      padding: 10px 0 80px;
      font-weight: 500;
      letter-spacing: 0.2px;
      text-transform: uppercase;
      white-space: nowrap;

      -ms-overflow-scrolling: touch;
    }

    .site-nav-left .nav li:last-of-type {
      padding-right: 20px;
    }

    /* Site Nav Hack Explanation (above):

What's happening above is .site-nav-left is set to overflow-x and allow sideways scrolling, so that when there isn't enough space for all nav items (either due to lots of nav items, or a small viewport), you can still scroll side-to-side to reach them. Also, there is a small gradient on the left and right side covering the menu so that the menu goes offscreen smoothly.

The knock-on effect of this is ugly browser-scroll bars at the bottom, so 80px of padding-bottom and a 40px fixed height parent (.site-nav) hides that entirely. Slightly hacky code. But nice clean end-result.

*/

    .site-nav-logo {
      position: relative;
      z-index: 100;
      flex-shrink: 0;
      display: inline-block;
      margin-right: 32px;
      padding: 12px 0;
      color: #fff;
      font-size: 1.7rem;
      line-height: 1.8rem;
      font-weight: bold;
      letter-spacing: -0.5px;
      text-transform: none;
    }

    .site-nav-logo:hover {
      text-decoration: none;
    }

    .site-nav-logo img {
      display: block;
      width: auto;
      height: 21px;
    }

    .site-home-header .site-nav-logo {
      display: none;
    }

    .site-nav-content {
      position: relative;
      align-self: flex-start;
    }

    .nav {
      position: absolute;
      z-index: 1000;
      display: flex;
      margin: 0 0 0 -12px;
      padding: 0;
      list-style: none;
      transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
    }

    .nav li {
      display: block;
      margin: 0;
      padding: 0;
    }

    .nav li a {
      position: relative;
      display: block;
      padding: 12px 12px;
      color: #fff;
      opacity: 0.8;
      transition: opacity 0.35s ease-in-out;
    }

    .nav li a:hover {
      text-decoration: none;
      opacity: 1;
    }

    .nav li a:before {
      content: "";
      position: absolute;
      right: 100%;
      bottom: 8px;
      left: 12px;
      height: 1px;
      background: #fff;
      opacity: 0.25;
      transition: all 0.35s ease-in-out;
    }

    .nav li a:hover:before {
      right: 12px;
      opacity: 0.5;
    }

    .nav-post-title-active .nav {
      visibility: hidden;
      opacity: 0;
      transform: translateY(-175%);
    }

    .nav-post-title {
      visibility: hidden;
      position: absolute;
      top: 9px;
      color: #fff;
      font-size: 1.7rem;
      font-weight: 400;
      text-transform: none;
      opacity: 0;
      transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
      transform: translateY(175%);
    }

    .nav-post-title.dash {
      left: -25px;
    }

    .nav-post-title.dash:before {
      content: "– ";
      opacity: 0.5;
    }

    .nav-post-title-active .nav-post-title {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }

    .site-nav-right {
      flex: 0 1 auto;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 10px 0;
      height: 64px;
    }

    .site-nav-right .nav {
      position: relative;
      margin: 0;
    }

    .site-nav-right .nav a {
      white-space: nowrap;
    }

    .site-nav-right .nav a:before {
      display: none;
    }

    .site-nav-right .nav li:last-of-type a {
      margin-right: -12px;
    }

    .social-links {
      flex-shrink: 0;
      display: flex;
      align-items: center;
    }

    .social-link {
      display: inline-block;
      margin: 0;
      padding: 10px;
      opacity: 0.8;
    }

    .social-link:hover {
      opacity: 1;
    }

    .social-link svg {
      height: 1.8rem;
      fill: #fff;
    }

    .social-link-fb svg {
      height: 1.6rem;
    }

    .social-link-wb svg {
      height: 1.6rem;
    }

    .social-link-wb svg path {
      stroke: #fff;
    }

    .social-link-rss svg {
      height: 1.9rem;
    }

    .subscribe-button {
      display: block;
      padding: 4px 10px;
      margin: 0 0 0 10px;
      border: #fff 1px solid;
      color: #fff;
      line-height: 1em;
      border-radius: 10px;
      opacity: 0.8;
    }

    .subscribe-button:hover {
      text-decoration: none;
      opacity: 1;
    }

    .site-nav-right .nav + .subscribe-button {
      margin-left: 24px;
    }

    .rss-button {
      padding: 10px 8px;
      opacity: 0.8;
    }

    .rss-button:hover {
      opacity: 1;
    }

    .rss-button svg {
      margin-bottom: 1px;
      height: 2.1rem;
      fill: #fff;
    }

    /* Special behaviors for home navigation */

    .home-template .site-nav-main {
      z-index: 100;
    }

    .home-template .site-nav-main .site-nav {
      opacity: 0;
      transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    }

    .home-template .site-nav-main .fixed-nav-active {
      opacity: 1;
      transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1) 0.05s;
    }

    @media (max-width: 700px) {
      .site-home-header .site-nav {
        margin-left: -5vw;
      }

      .site-nav-main {
        padding-right: 0;
        padding-left: 0;
      }

      .site-nav-left {
        margin-right: 0;
        padding-left: 5vw;
      }

      .site-nav-right {
        display: none;
      }
    }

    /* 6. Post Feed
/* ---------------------------------------------------------- */

    .posts {
      overflow-x: hidden;
    }

    .post-feed {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      margin: 0 -20px;
      padding: 50px 0 0;
      background: #fff;
    }

    .post-card {
      position: relative;
      flex: 1 1 301px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      margin: 0 0 40px;
      padding: 0 20px 40px;
      min-height: 220px;
      background-size: cover;
    }

    .post-card-image-link {
      position: relative;
      display: block;
      overflow: hidden;
      border-radius: 3px;
    }

    .post-card-image {
      width: 100%;
      height: 200px;
      background: var(--lightgrey) no-repeat center center;

      object-fit: cover;
    }

    .post-card-content-link {
      position: relative;
      display: block;
      color: var(--darkgrey);
    }

    .post-card-content-link:hover {
      text-decoration: none;
    }

    .post-card-header {
      margin: 15px 0 0;
    }

    .post-feed .no-image .post-card-content-link {
      padding: 0;
    }

    .no-image .post-card-header {
      margin-top: 0;
    }

    .post-card-primary-tag {
      margin: 0 0 0.2em;
      color: #3eb0ef;
      font-size: 1.2rem;
      font-weight: 500;
      letter-spacing: 0.2px;
      text-transform: uppercase;
    }

    .post-card-title {
      margin: 0 0 0.4em;
      line-height: 1.15em;
      transition: color 0.2s ease-in-out;
    }

    .no-image .post-card-title {
      margin-top: 0;
    }

    .post-card-content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    .post-card-excerpt {
      max-width: 56em;
      color: var(--midgrey);
    }

    .post-card-excerpt p {
      margin-bottom: 1em;
    }

    .post-card-meta {
      display: flex;
      align-items: flex-start;
      padding: 0;
    }

    .author-profile-image,
    .avatar-wrapper {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 100%;

      object-fit: cover;
    }

    .post-card-meta .profile-image-wrapper,
    .post-card-meta .avatar-wrapper {
      position: relative;
    }

    .author-list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 0 0 4px;
      padding: 0;
      list-style: none;
    }

    .author-list-item {
      position: relative;
      flex-shrink: 0;
      margin: 0;
      padding: 0;
    }

    .static-avatar {
      display: block;
      overflow: hidden;
      margin: 0 0 0 -6px;
      width: 34px;
      height: 34px;
      border: #fff 2px solid;
      border-radius: 100%;
    }

    .author-name-tooltip {
      position: absolute;
      bottom: 105%;
      z-index: 999;
      display: block;
      padding: 2px 8px;
      color: white;
      font-size: 1.2rem;
      letter-spacing: 0.2px;
      white-space: nowrap;
      background: var(--darkgrey);
      border-radius: 3px;
      box-shadow: rgba(39, 44, 49, 0.08) 0 12px 26px,
        rgba(39, 44, 49, 0.03) 1px 3px 8px;
      opacity: 0;
      transition: all 0.35s cubic-bezier(0.4, 0.01, 0.165, 0.99);
      transform: translateY(6px);
      pointer-events: none;
    }

    .author-list-item:hover .author-name-tooltip {
      opacity: 1;
      transform: translateY(0px);
    }

    @media (max-width: 700px) {
      .author-name-tooltip {
        display: none;
      }
    }

    .post-card-byline-content {
      flex: 1 1 50%;
      display: flex;
      flex-direction: column;
      margin: 2px 0 0 6px;
      font-size: 1.2rem;
      line-height: 1.4em;
      font-weight: 400;
      letter-spacing: 0.2px;
      text-transform: uppercase;
    }

    .post-card-byline-content span {
      margin: 0;
    }

    .post-card-byline-content a {
      font-weight: 600;
    }

    .post-card-byline-date {
      font-size: 1.2rem;
    }

    .post-card-byline-date .bull {
      display: inline-block;
      margin: 0 4px;
      opacity: 0.6;
    }

    .single-author-byline {
      display: flex;
      flex-direction: column;
      margin-left: 5px;
      font-size: 1.3rem;
      line-height: 1.4em;
      font-weight: 500;
    }

    .single-author {
      display: flex;
      align-items: center;
    }

    .single-author .static-avatar {
      margin-left: -2px;
    }

    .single-author-name {
      display: inline-block;
    }

    /* Special Styling for home page grid (below):

The first post in the list is styled to be bigger than the others and take over
the full width of the grid to give it more emphasis. Wrapped in a media query to
make sure this only happens on large viewports / desktop-ish devices.

 */

    @media (min-width: 795px) {
      .post-card-large {
        flex: 1 1 100%;
        flex-direction: row;
        padding-bottom: 40px;
        min-height: 280px;
        border-top: 0;
      }

      .post-card-large:not(.no-image) .post-card-header {
        margin-top: 0;
      }

      .post-card-large .post-card-image-link {
        position: relative;
        flex: 1 1 auto;
        margin-bottom: 0;
        min-height: 380px;
      }

      .post-card-large .post-card-image {
        position: absolute;
        width: 100%;
        height: 100%;
      }

      .post-card-large .post-card-content {
        flex: 0 1 361px;
        justify-content: center;
      }

      .post-card-large .post-card-title {
        margin-top: 0;
        font-size: 3.2rem;
      }

      .post-card-large .post-card-content-link {
        padding: 0 0 0 40px;
      }

      .post-card-large .post-card-meta {
        padding: 0 0 0 40px;
      }

      .post-card-large .post-card-excerpt p {
        margin-bottom: 1.5em;
        font-size: 1.8rem;
        line-height: 1.5em;
      }
    }

    /* Adjust some margins for smaller screens */
    @media (max-width: 1170px) {
      .post-card {
        margin-bottom: 5vw;
      }
    }

    @media (max-width: 650px) {
      .post-feed {
        padding-top: 5vw;
      }

      .post-card {
        margin-bottom: 5vw;
      }
    }

    @media (max-width: 500px) {
      .post-card-title {
        font-size: 1.9rem;
      }

      .post-card-excerpt {
        font-size: 1.6rem;
      }
    }

    /* 7. Single Post
/* ---------------------------------------------------------- */

    .post-template .site-main,
    .page-template .site-main {
      margin-top: 64px;
      padding-bottom: 4vw;
      background: #fff;
    }

    .post-full-header {
      position: relative;
      margin: 0 auto;
      padding: 70px 170px 50px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }

    .post-full-tags {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: var(--midgrey);
      font-size: 1.3rem;
      line-height: 1.4em;
      font-weight: 600;
      text-transform: uppercase;
    }

    .post-full-meta-date {
      color: var(--midgrey);
      font-size: 1.2rem;
      font-weight: 400;
    }

    @media (max-width: 1170px) {
      .post-full-header {
        padding: 60px 11vw 50px;
      }
    }

    @media (max-width: 800px) {
      .post-full-header {
        padding-right: 5vw;
        padding-left: 5vw;
      }
    }

    @media (max-width: 500px) {
      .post-full-header {
        padding: 20px 0 35px;
      }
    }

    .post-full-title {
      margin: 0 0 0.2em;
    }

    .post-full-custom-excerpt {
      margin: 20px 0 0;
      color: var(--midgrey);
      font-size: 2.3rem;
      line-height: 1.4em;
      font-weight: 300;
    }

    .date-divider {
      display: inline-block;
      margin: 0 6px 1px;
      font-weight: 300;
    }

    .post-full-image {
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      margin: 25px 0 50px;
      border-radius: 3px;
    }

    .post-full-image img {
      max-width: 1040px;
      width: 100%;
      height: auto;
    }

    .post-full-content {
      position: relative;
      margin: 0 auto;
      padding: 0 170px 6vw;
      min-height: 230px;
      font-size: 2rem;
      line-height: 1.6em;
      background: #fff;
    }

    @media (max-width: 1170px) {
      .post-full-content {
        padding: 0 11vw;
      }
    }
    @media (max-width: 800px) {
      .post-full-content {
        padding: 0 5vw;
        font-size: 1.8rem;
      }
    }
    @media (max-width: 500px) {
      .post-full-custom-excerpt {
        font-size: 1.9rem;
        line-height: 1.5em;
      }
    }

    .no-image .post-full-content {
      padding-top: 0;
    }

    .no-image .post-full-content:before,
    .no-image .post-full-content:after {
      display: none;
    }

    .post-full-content h1,
    .post-full-content h2,
    .post-full-content h3,
    .post-full-content h4,
    .post-full-content h5,
    .post-full-content h6,
    .post-full-content p,
    .post-full-content ul,
    .post-full-content ol,
    .post-full-content dl,
    .post-full-content pre,
    .post-full-content blockquote,
    .post-full-comments,
    .footnotes {
      margin: 0 0 1.5em 0;
      min-width: 100%;
    }
    @media (max-width: 500px) {
      .post-full-content p,
      .post-full-content ul,
      .post-full-content ol,
      .post-full-content dl,
      .post-full-content pre,
      .post-full-comments,
      .footnotes {
        margin-bottom: 1.28em;
      }
    }

    .post-full-content li {
      word-break: break-word;
    }

    .post-full-content li p {
      margin: 0;
    }

    .post-full-content a {
      color: var(--darkgrey);
      word-break: break-word;
      box-shadow: var(--darkgrey) 0 -1px 0 inset;
      transition: all 0.2s ease-in-out;
    }

    .post-full-content a:hover {
      color: var(--blue);
      text-decoration: none;
      box-shadow: var(--blue) 0 -1px 0 inset;
    }

    .post-full-content small {
      display: inline-block;
      line-height: 1.6em;
    }

    .post-full-content li:first-child {
      margin-top: 0;
    }

    .post-full-content img,
    .post-full-content video {
      display: block;
      margin: 1.5em auto;
      max-width: 1040px;
      height: auto;
    }
    @media (max-width: 1040px) {
      .post-full-content img,
      .post-full-content video {
        width: 100%;
      }
    }

    /* Full bleed images (#full)
Super neat trick courtesy of @JoelDrapper

Usage (In Ghost edtior):

![img](/some/image.jpg#full)

*/
    .post-full-content img[src$="#full"] {
      max-width: none;
      width: 100vw;
    }

    /* Image captions

Usage (In Ghost editor):

![img](/some/image.jpg)
<small>Your image caption</small>

*/
    .post-full-content img + br + small {
      display: block;
      margin-top: -3em;
      margin-bottom: 1.5em;
      text-align: center;
    }

    /* Override third party iframe styles */
    .post-full-content iframe {
      margin: 0 auto !important;
    }

    .post-full-content blockquote {
      margin: 0 0 1.5em;
      padding: 0 1.5em;
      border-left: #3eb0ef 3px solid;
    }
    @media (max-width: 500px) {
      .post-full-content blockquote {
        padding: 0 1.3em;
      }
    }

    .post-full-content blockquote p {
      margin: 0 0 1em 0;
      color: inherit;
      font-size: inherit;
      line-height: inherit;
      font-style: italic;
    }

    .post-full-content blockquote p:last-child {
      margin-bottom: 0;
    }

    .post-full-content code {
      padding: 0 5px 2px;
      font-size: 0.8em;
      line-height: 1em;
      font-weight: 400 !important;
      background: var(--whitegrey);
      border-radius: 3px;
    }

    .post-full-content p code {
      word-break: break-all;
    }

    .post-full-content pre {
      overflow-x: auto;
      margin: 1.5em 0 3em;
      padding: 20px;
      max-width: 100%;
      color: var(--whitegrey);
      font-size: 1.4rem;
      line-height: 1.5em;
      border-radius: 5px;
    }

    .post-full-content pre code {
      padding: 0;
      font-size: inherit;
      line-height: inherit;
      background: transparent;
    }

    .post-full-content pre code :not(span) {
      color: inherit;
    }

    .post-full-content .fluid-width-video-wrapper {
      margin: 1.5em 0 3em;
    }

    .post-full-content hr {
      margin: 2em 0;
    }

    .post-full-content hr:after {
      content: "";
      position: absolute;
      top: -15px;
      left: 50%;
      display: block;
      margin-left: -10px;
      width: 1px;
      height: 30px;
      box-shadow: #fff 0 0 0 5px;
      transform: rotate(45deg);
    }

    .post-full-content hr + p {
      margin-top: 1.2em;
    }

    .post-full-content h1 {
      margin: 0.5em 0 0.4em;
      font-size: 4.2rem;
      line-height: 1.25em;
      font-weight: 600;
    }
    .post-full-content p + h1 {
      margin-top: 0.8em;
    }
    @media (max-width: 800px) {
      .post-full-content h1 {
        font-size: 3.2rem;
        line-height: 1.25em;
      }
    }

    .post-full-content h2 {
      margin: 0.5em 0 0.4em;
      font-size: 3.2rem;
      line-height: 1.25em;
      font-weight: 600;
    }
    .post-full-content p + h2 {
      margin-top: 0.8em;
    }
    @media (max-width: 800px) {
      .post-full-content h2 {
        margin-bottom: 0.3em;
        font-size: 2.8rem;
        line-height: 1.25em;
      }
    }

    .post-full-content h3 {
      margin: 0.5em 0 0.2em;
      font-size: 2.5rem;
      line-height: 1.3em;
      font-weight: 600;
    }
    .post-full-content h2 + h3 {
      margin-top: 0.7em;
    }
    @media (max-width: 800px) {
      .post-full-content h3 {
        margin-bottom: 0.3em;
        font-size: 2.4rem;
        line-height: 1.3em;
      }
    }

    .post-full-content h4 {
      margin: 0.5em 0 0.2em;
      font-size: 2.5rem;
      font-weight: 600;
    }
    .post-full-content h2 + h4 {
      margin-top: 0.7em;
    }
    .post-full-content h3 + h4 {
      margin-top: 0;
    }
    @media (max-width: 800px) {
      .post-full-content h4 {
        margin-bottom: 0.3em;
        font-size: 2.4rem;
        line-height: 1.3em;
      }
    }

    .post-full-content h5 {
      display: block;
      margin: 0.5em 0;
      padding: 0.4em 1em 0.9em;
      border: 0;
      color: var(--blue);
      font-size: 3.2rem;
      line-height: 1.35em;
      text-align: center;
    }
    @media (min-width: 1180px) {
      .post-full-content h5 {
        max-width: 1060px;
        width: 100vw;
      }
    }
    @media (max-width: 800px) {
      .post-full-content h5 {
        margin-bottom: 1em;
        margin-left: 1.3em;
        padding: 0 0 0.5em;
        font-size: 2.4rem;
        text-align: initial;
      }
    }

    .post-full-content h6 {
      margin: 0.5em 0 0.2em 0;
      font-size: 2rem;
      font-weight: 700;
    }
    @media (max-width: 800px) {
      .post-full-content h6 {
        font-size: 1.8rem;
        line-height: 1.4em;
      }
    }

    .footnotes-sep {
      margin-bottom: 30px;
    }

    .footnotes {
      font-size: 1.5rem;
    }

    .footnotes p {
      margin: 0;
    }

    .footnote-backref {
      color: var(--blue) !important;
      font-size: 1.2rem;
      font-weight: bold;
      text-decoration: none !important;
      box-shadow: none !important;
    }

    /* Some grouped styles for smaller viewports */
    @media (max-width: 1170px) {
      .post-full-image {
        margin: 25px -6vw 50px;
        border-radius: 0;
      }

      .post-full-image img {
        max-width: 1170px;
      }
    }

    @media (max-width: 700px) {
      .post-full-image {
        margin: 25px -5vw;
      }
    }

    @media (max-width: 500px) {
      .post-full-meta {
        font-size: 1.2rem;
        line-height: 1.3em;
      }

      .post-full-title {
        margin-top: 0.2em;
        font-size: 3.3rem;
      }

      .post-full-image {
        margin-top: 5px;
        margin-bottom: 5vw;
      }

      .post-full-content {
        padding: 0;
      }

      .post-full-content:before,
      .post-full-content:after {
        display: none;
      }
    }

    /* Tables */
    .post-full-content table {
      display: inline-block;
      overflow-x: auto;
      margin: 0.5em 0 2.5em;
      max-width: 100%;
      width: auto;
      border-spacing: 0;
      border-collapse: collapse;

      font-size: 1.6rem;
      white-space: nowrap;
      vertical-align: top;
    }

    .post-full-content table {
      -webkit-overflow-scrolling: touch;
      background: radial-gradient(
            ellipse at left,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0) 75%
          )
          0 center,
        radial-gradient(
            ellipse at right,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0) 75%
          )
          100% center;
      background-attachment: scroll, scroll;
      background-size: 10px 100%, 10px 100%;
      background-repeat: no-repeat;
    }

    .post-full-content table td:first-child {
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 1) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      background-size: 20px 100%;
      background-repeat: no-repeat;
    }

    .post-full-content table td:last-child {
      background-image: linear-gradient(
        to left,
        rgba(255, 255, 255, 1) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      background-position: 100% 0;
      background-size: 20px 100%;
      background-repeat: no-repeat;
    }

    .post-full-content table th {
      color: var(--darkgrey);
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: 0.2px;
      text-align: left;
      text-transform: uppercase;
    }

    .post-full-content table th,
    .post-full-content table td {
      padding: 6px 12px;
    }

    /* 7.1. Post Byline
/* ---------------------------------------------------------- */

    .post-full-byline {
      display: flex;
      justify-content: space-between;
      margin: 35px 0 0;
      padding-top: 15px;
    }

    .post-full-byline-content {
      flex-grow: 1;
      display: flex;
      align-items: flex-start;
    }

    .post-full-byline-content .author-list {
      justify-content: flex-start;
      padding: 0 12px 0 0;
    }

    .post-full-byline-meta {
      margin: 2px 0 0;
      font-size: 1.2rem;
      line-height: 1.2em;
      letter-spacing: 0.2px;
      text-transform: uppercase;
    }

    .post-full-byline-meta h4 {
      margin: 0 0 3px;
      font-size: 1.3rem;
      line-height: 1.4em;
      font-weight: 500;
    }

    .post-full-byline-meta h4 a:hover {
      color: var(--darkgrey);
    }

    .post-full-byline-meta .bull {
      display: inline-block;
      margin: 0 4px;
      opacity: 0.6;
    }

    .author-avatar {
      display: block;
      overflow: hidden;
      margin: 0 -4px;
      width: 40px;
      height: 40px;
      border: #fff 2px solid;
      border-radius: 100%;
      transition: all 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99) 700ms;
    }

    .author-list-item .author-card {
      position: absolute;
      bottom: 130%;
      left: 50%;
      z-index: 600;
      display: flex;
      justify-content: space-between;
      margin-left: -200px;
      width: 400px;
      font-size: 1.4rem;
      line-height: 1.5em;
      background: white;
      border-radius: 3px;
      box-shadow: rgba(39, 44, 49, 0.08) 0 12px 26px,
        rgba(39, 44, 49, 0.06) 1px 3px 8px;
      opacity: 0;
      transition: all 0.35s cubic-bezier(0.4, 0.01, 0.165, 0.99);
      transform: scale(0.98) translateY(15px);
      pointer-events: none;
    }

    .author-list-item .author-card:before {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      display: block;
      margin-left: -8px;
      width: 0;
      height: 0;
      border-top: 8px solid #fff;
      border-right: 8px solid transparent;
      border-left: 8px solid transparent;
    }

    .author-list-item .author-card.hovered {
      opacity: 1;
      transform: scale(1) translateY(0px);
      pointer-events: auto;
    }

    .author-card {
      padding: 20px 20px 22px;
    }

    .author-card .author-info {
      flex: 1 1 auto;
      padding: 0 0 0 20px;
    }

    .author-card .author-info h2 {
      margin: 8px 0 0;
      font-size: 1.6rem;
    }

    .author-card .author-info p {
      margin: 4px 0 0;
    }

    .author-card .author-info .bio h2 {
      margin-top: 0;
    }

    .author-card .author-info .bio p {
      margin-top: 0.8em;
    }

    .author-card .author-profile-image {
      flex: 0 0 60px;
      margin: 0;
      width: 60px;
      height: 60px;
      border: none;
    }

    .basic-info .avatar-wrapper {
      position: relative;
      margin: 0;
      width: 60px;
      height: 60px;
      border: none;
      background: rgba(229, 239, 245, 0.1);
    }

    .basic-info .avatar-wrapper svg {
      margin: 0;
      width: 60px;
      height: 60px;
      opacity: 0.15;
    }

    @media (max-width: 1170px) {
      .author-list-item .author-card {
        margin-left: -50px;
        width: 430px;
      }

      .author-list-item .author-card:before {
        left: 50px;
      }
    }

    @media (max-width: 650px) {
      .author-list-item .author-card {
        display: none;
      }
    }

    @media (max-width: 500px) {
      .author-avatar {
        width: 32px;
        height: 32px;
      }

      .post-full-byline-meta {
        font-size: 1.2rem;
      }

      .post-full-byline-meta h4 {
        margin-bottom: 2px;
        font-size: 1.2rem;
      }
    }

    /* 7.2. Members Subscribe Form
/* ---------------------------------------------------------- */

    .subscribe-form-title {
      margin: 0 0 3px 0;
      padding: 0;
      color: var(--darkgrey);
      font-size: 3.5rem;
      line-height: 1;
      font-weight: 600;
    }

    .subscribe-form-description {
      margin-bottom: 0.2em 0 1em;
      color: var(--midgrey);
      font-size: 2.1rem;
      line-height: 1.55em;
    }

    .subscribe-form form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      max-width: 460px;
    }

    .subscribe-form .form-group {
      align-self: stretch;
      display: flex;
    }

    .subscribe-email {
      display: block;
      padding: 10px;
      width: 100%;
      color: var(--midgrey);
      font-size: 1.8rem;
      line-height: 1em;
      font-weight: normal;
      user-select: text;
      border-radius: 5px;
      transition: border-color 0.15s linear;

      -webkit-appearance: none;
    }

    .subscribe-email:focus {
      outline: 0;
    }

    .subscribe-form button {
      position: relative;
      display: inline-block;
      margin: 0 0 0 10px;
      padding: 0 20px;
      height: 43px;
      outline: none;
      color: #fff;
      font-size: 1.5rem;
      line-height: 39px;
      font-weight: 400;
      text-align: center;
      border-radius: 5px;

      -webkit-font-smoothing: subpixel-antialiased;
    }

    .subscribe-form button:active,
    .subscribe-form .button-loader,
    .subscribe-form .message-success,
    .subscribe-form .message-error {
      display: none;
    }

    .subscribe-form .loading .button-content {
      visibility: hidden;
    }

    .subscribe-form .loading .button-loader {
      position: absolute;
      top: 0;
      left: 50%;
      display: inline-block;
      margin-left: -19px;
      transform: scale(0.7);
    }

    .subscribe-form .button-loader svg path,
    .subscribe-form .button-loader svg rect {
      fill: #fff;
    }

    .subscribe-form .success .message-success,
    .subscribe-form .invalid .message-error,
    .subscribe-form .error .message-error {
      margin: 1em auto 0;
      max-width: 400px;
      color: var(--red);
      font-size: 1.6rem;
      line-height: 1.5em;
      text-align: center;
    }

    .subscribe-form .success .message-success {
      display: block;
    }

    .subscribe-form .invalid .message-error,
    .subscribe-form .error .message-error {
      display: block;
    }

    @media (max-width: 650px) {
      .subscribe-form-title {
        font-size: 2.4rem;
      }

      .subscribe-form-description {
        font-size: 1.6rem;
      }
    }

    @media (max-width: 500px) {
      .subscribe-form form {
        flex-direction: column;
      }

      .subscribe-form .form-group {
        flex-direction: column;
        width: 100%;
      }

      .subscribe-form button {
        margin: 10px 0 0 0;
        width: 100%;
      }
    }

    /* 7.3. Comments
/* ---------------------------------------------------------- */

    .post-full-comments {
      margin: 0 auto;
      max-width: 840px;
    }

    /* 7.4. Related posts
/* ---------------------------------------------------------- */

    .read-next {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .read-next-feed {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -25px;
      padding: 60px 0 0 0;
    }

    .read-next .post-card {
      padding-bottom: 0;
      border-bottom: none;
    }

    .read-next .post-card:after {
      display: none;
    }

    .read-next .post-card-primary-tag {
      color: #fff;
      opacity: 0.6;
    }

    .read-next .post-card-title {
      color: #fff;
      opacity: 0.8;
      transition: all 0.2s ease-in-out;
    }

    .read-next .post-card:hover .post-card-image {
      opacity: 1;
    }

    .read-next .post-card-excerpt {
      color: rgba(255, 255, 255, 0.6);
    }

    .read-next .static-avatar {
      border-color: #000;
    }

    .read-next .post-card-byline-content {
      color: rgba(255, 255, 255, 0.6);
    }

    .read-next .post-card-byline-content a {
      color: rgba(255, 255, 255, 0.8);
    }

    .read-next-card {
      position: relative;
      flex: 0 1 326px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      margin: 0 25px 50px;
      padding: 25px;

      border-radius: 3px;
    }

    .read-next-card a {
      transition: all 0.2s ease-in-out;
    }

    .read-next-card a:hover {
      text-decoration: none;
    }

    .read-next-card-header h3 {
      margin: 0;
      color: rgba(255, 255, 255, 0.6);
      font-size: 1.2rem;
      line-height: 1em;
      font-weight: 300;
      letter-spacing: 0.4px;
      text-transform: uppercase;
    }

    .read-next-card-header h3 a {
      color: #fff;
      font-weight: 500;
      text-decoration: none;
      opacity: 0.8;
    }

    .read-next-card-header h3 a:hover {
      opacity: 1;
    }

    .read-next-card-content {
      font-size: 1.7rem;
    }

    .read-next-card-content ul {
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .read-next-card-content li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0;
      padding: 20px 0;
      border-bottom: rgba(255, 255, 255, 0.1);
    }

    .read-next-card-content li:last-of-type {
      padding-bottom: 5px;
      border: none;
    }

    .read-next-card-content h4 {
      margin: 0;
      font-size: 1.6rem;
      line-height: 1.35em;
      font-weight: 600;
    }

    .read-next-card-content li a {
      display: block;
      color: #fff;
      opacity: 0.8;
    }

    .read-next-card-content li a:hover {
      opacity: 1;
    }

    .read-next-card-excerpt {
      overflow: hidden;
      max-width: 100%;
      font-size: 1.4rem;
      line-height: 1.2em;
      text-overflow: ellipsis;
    }

    .read-next-card-meta {
      margin-top: 2px;
      font-size: 1.2rem;
      line-height: 1.4em;
      font-weight: 400;
    }

    .read-next-card-meta p {
      margin: 0;
      color: rgba(255, 255, 255, 0.6);
    }

    .read-next-card-footer {
      position: relative;
      margin: 40px 0 5px;
    }

    .read-next-card-footer a {
      padding: 7px 12px 8px 14px;
      border: 1px solid rgba(255, 255, 255, 0.6);
      color: rgba(255, 255, 255, 0.6);
      font-size: 1.3rem;
      border-radius: 999px;
      transition: all 0.35s ease-in-out;
    }

    .read-next-card-footer a:hover {
      border-color: var(--yellow);
      color: var(--yellow);
      text-decoration: none;
    }

    @media (max-width: 1170px) {
      .read-next-card {
        flex: 1 1 261px;
        margin-bottom: 5vw;
      }
    }

    @media (max-width: 650px) {
      .read-next-feed {
        flex-direction: column;
        padding: 25px 0 0;
      }

      .read-next-card {
        flex: 1 1 auto;
        margin: 0 25px;
        padding: 0;
        background: none;
      }

      .read-next .post-card {
        flex: 1 1 auto;
        margin: 25px;
        padding: 25px 0 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
    }

    /* 7.5. Koenig Styles
/* ---------------------------------------------------------- */

    .post-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .post-full-content .kg-image {
      max-width: 100%;
    }

    /* Preventing full-width image overlap with post image.  */
    .post-full-image + .post-full-content .kg-content *:first-child .kg-image {
      width: 100%;
    }

    .post-full-content .kg-width-wide .kg-image {
      max-width: 1040px;
    }

    .post-full-content .kg-width-full .kg-image {
      max-width: 100vw;
    }

    .post-full-content figure {
      margin: 0.8em 0 2.3em;
    }

    .post-full-content h1 + figure,
    .post-full-content h2 + figure,
    .post-full-content h3 + figure,
    .post-full-content h4 + figure {
      margin-top: 2em;
    }

    .post-full-content figure img {
      margin: 0;
    }

    .post-full-content figcaption {
      margin: 1em 0 0;

      font-size: 75%;
      line-height: 1.5em;
      text-align: center;
    }

    .kg-width-full figcaption {
      padding: 0 1.5em;
    }

    .kg-embed-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .kg-embed-card .fluid-width-video-wrapper {
      margin: 0;
    }

    @media (max-width: 1040px) {
      .post-full-content .kg-width-full .kg-image {
        width: 100%;
      }
    }

    .kg-gallery-container {
      display: flex;
      flex-direction: column;
      max-width: 1040px;
      width: 100%;
    }

    .kg-gallery-row {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    .kg-gallery-image img {
      display: block;
      margin: 0;
      width: 100%;
      height: 100%;
    }

    .kg-gallery-row:not(:first-of-type) {
      margin: 0.75em 0 0 0;
    }

    .kg-gallery-image:not(:first-of-type) {
      margin: 0 0 0 0.75em;
    }

    .kg-gallery-card + .kg-image-card.kg-width-wide,
    .kg-gallery-card + .kg-gallery-card,
    .kg-image-card.kg-width-wide + .kg-gallery-card,
    .kg-image-card.kg-width-wide + .kg-image-card.kg-width-wide {
      margin: -2.25em 0 3em;
    }

    /* keep existing <pre> styles for code cards with captions */
    .kg-code-card {
      width: 100%;
    }

    .kg-code-card pre {
      margin: 0;
    }

    .kg-bookmark-card {
      width: 100%;
      background: var(--white);
    }

    .kg-card + .kg-bookmark-card {
      margin-top: 0;
    }

    .post-full-content .kg-bookmark-container {
      display: flex;
      min-height: 148px;
      color: var(--darkgrey);

      text-decoration: none;
      border-radius: 3px;
      box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.15),
        0 0 1px rgba(0, 0, 0, 0.09);
    }

    .post-full-content .kg-bookmark-container:hover {
      color: var(--darkgrey);
      text-decoration: none;
      box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.15),
        0 0 1px rgba(0, 0, 0, 0.09);
    }

    .kg-bookmark-content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 20px;
    }

    .kg-bookmark-title {
      font-size: 1.6rem;
      line-height: 1.5em;
      font-weight: 600;
      transition: color 0.2s ease-in-out;
    }

    .post-full-content .kg-bookmark-container:hover .kg-bookmark-title {
      color: var(--blue);
    }

    .kg-bookmark-description {
      display: -webkit-box;
      overflow-y: hidden;
      margin-top: 12px;
      max-height: 48px;
      font-size: 1.5rem;
      line-height: 1.5em;
      font-weight: 400;

      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .kg-bookmark-thumbnail {
      position: relative;
      min-width: 33%;
      max-height: 100%;
    }

    .kg-bookmark-thumbnail img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0 3px 3px 0;

      object-fit: cover;
    }

    .kg-bookmark-metadata {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 14px;
      font-size: 1.5rem;
      font-weight: 400;
    }

    .post-full-content .kg-bookmark-icon {
      margin-right: 8px;
      width: 22px;
      height: 22px;
    }

    .kg-bookmark-author {
      line-height: 1.5em;
    }

    .kg-bookmark-author:after {
      content: "•";
      margin: 0 6px;
    }

    .kg-bookmark-publisher {
      overflow: hidden;
      max-width: 240px;
      line-height: 1.5em;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    @media (max-width: 800px) {
      .post-full-content figure {
        margin: 0.2em 0 1.3em;
      }

      .post-full-content h1 + figure,
      .post-full-content h2 + figure,
      .post-full-content h3 + figure,
      .post-full-content h4 + figure {
        margin-top: 0.9em;
      }
    }

    @media (max-width: 500px) {
      .post-full-content .kg-width-wide,
      .post-full-content .kg-width-full {
        margin-right: -5vw;
        margin-left: -5vw;
      }

      .post-full-content figcaption {
        margin-bottom: 0.4em;
      }

      .post-full-content .kg-bookmark-container {
        flex-direction: column;
      }

      .kg-bookmark-title,
      .kg-bookmark-description,
      .kg-bookmark-metadata {
        font-size: 1.4rem;
        line-height: 1.5em;
      }

      .post-full-content .kg-bookmark-icon {
        width: 18px;
        height: 18px;
      }

      .kg-bookmark-thumbnail {
        order: 1;
        min-height: 160px;
        width: 100%;
      }

      .kg-bookmark-thumbnail img {
        border-radius: 3px 3px 0 0;
      }

      .kg-bookmark-content {
        order: 2;
      }
    }

    /* 8. Author Template
/* ---------------------------------------------------------- */
    .author-header {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 10vw 0 10px;
    }

    .site-archive-header .no-image .author-header {
      padding-bottom: 20px;
    }

    .author-header-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 5px 0 0 30px;
    }

    .site-header-content .author-profile-image {
      z-index: 10;
      flex-shrink: 0;
      margin: 5px 0 0;
      width: 110px;
      height: 110px;
      box-shadow: rgba(255, 255, 255, 0.1) 0 0 0 6px;
    }

    .author-header-content .author-bio {
      z-index: 10;
      flex-shrink: 0;
      margin: 6px 0 -6px;
      max-width: 46em;
      font-size: 2rem;
      line-height: 1.4em;
      font-weight: 400;
      opacity: 0.8;
    }

    .author-header-content .author-meta {
      z-index: 10;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      margin: 0 0 0 1px;
      font-size: 1.2rem;
      font-weight: 400;
      letter-spacing: 0.2px;
      text-transform: uppercase;
    }

    .author-header-content .social-link:first-of-type {
      padding-left: 4px;
    }

    .no-image .author-header-content .author-bio {
      color: var(--midgrey);
      opacity: 1;
    }

    .no-image .author-header-content .author-meta {
      color: var(--midgrey);
      opacity: 1;
    }

    .author-social-link a {
      color: #fff;
      font-weight: 600;
    }

    .no-image .author-social-link a {
      color: var(--darkgrey);
    }

    .author-social-link a:hover {
      opacity: 1;
    }

    .author-social-link {
      padding: 10px 0;
    }

    .author-social-link {
      display: inline-block;
      margin: 0;
      padding: 10px 0;
    }

    .author-location + .author-stats:before,
    .author-stats + .author-social-link:before,
    .author-social-link + .author-social-link:before {
      content: "\2022";
      display: inline-block;
      margin: 0 12px;
      color: #fff;
      opacity: 0.6;
    }

    .no-image .author-location + .author-stats:before,
    .no-image .author-stats + .author-social-link:before,
    .no-image .author-social-link + .author-social-link:before {
      color: var(--midgrey);
    }

    @media (max-width: 500px) {
      .author-header {
        padding: 10px 0 0;
      }

      .no-image .author-header {
        padding-bottom: 10px;
      }

      .author-header-content {
        margin-left: 20px;
      }

      .site-header-content .author-profile-image {
        width: 80px;
        height: 80px;
      }

      .author-header-content .author-bio {
        font-size: 1.8rem;
        line-height: 1.3em;
        letter-spacing: 0;
      }

      .author-location,
      .author-stats {
        display: none;
      }
    }

    /* 9. Error Template
/* ---------------------------------------------------------- */

    .error-content {
      padding: 14vw 4vw 6vw;
    }

    .site-nav-center {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      text-align: center;
    }

    .site-nav-center .site-nav-logo {
      margin-right: 0;
    }

    .error-message {
      padding-bottom: 10vw;
      text-align: center;
    }

    .error-code {
      margin: 0;
      color: var(--lightgrey);
      font-size: 12vw;
      line-height: 1em;
      letter-spacing: -5px;
      opacity: 0.75;
    }

    .error-description {
      margin: 0;
      color: var(--midgrey);
      font-size: 3rem;
      line-height: 1.3em;
      font-weight: 400;
    }

    .error-link {
      display: inline-block;
      margin-top: 5px;
    }

    @media (min-width: 940px) {
      .error-content .post-card {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
      }
    }

    @media (max-width: 800px) {
      .error-content {
        padding-top: 24vw;
      }
      .error-code {
        font-size: 11.2rem;
      }
      .error-message {
        padding-bottom: 16vw;
      }
      .error-description {
        margin: 5px 0 0 0;
        font-size: 1.8rem;
      }
    }

    @media (max-width: 500px) {
      .error-content {
        padding-top: 28vw;
      }
      .error-message {
        padding-bottom: 14vw;
      }
    }

    /* 10. Subscribe Message and Overlay
/* ---------------------------------------------------------- */

    .subscribe-success-message {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 9000;
      padding: 20px 0;
      color: #fff;
      text-align: center;
      background: var(--green);
      transition: all 0.35s cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
      transform: translateY(-175%);
    }

    .subscribe-success .subscribe-success-message {
      visibility: visible;
      transform: translateY(0);
    }

    .subscribe-success-message.close {
      visibility: hidden;
      transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
      transform: translateY(-175%);
    }

    .subscribe-close {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: block;
    }

    .subscribe-close:before {
      content: "";
      position: absolute;
      top: 32px;
      right: 25px;
      display: block;
      width: 20px;
      height: 1px;
      background: #fff;
      opacity: 0.8;
      transform: rotate(45deg);
    }

    .subscribe-close:after {
      content: "";
      position: absolute;
      top: 32px;
      right: 25px;
      display: block;
      width: 20px;
      height: 1px;
      background: #fff;
      opacity: 0.8;
      transform: rotate(-45deg);
    }

    .subscribe-close:hover {
      cursor: default;
    }

    .subscribe-overlay {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 9000;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(9, 10, 11, 0.97);
      opacity: 0;
      transition: opacity 0.2s ease-in;
      pointer-events: none;
    }

    .subscribe-overlay .subscribe-close:before,
    .subscribe-overlay .subscribe-close:after {
      top: 36px;
      width: 30px;
    }

    .subscribe-overlay:target {
      opacity: 1;
      pointer-events: auto;
    }

    .subscribe-overlay-content {
      position: relative;
      z-index: 9999;
      margin: 0 0 5vw 0;
      padding: 4vw;
      color: #fff;
      text-align: center;
    }

    .subscribe-overlay .subscribe-form {
      border: none;
      color: #fff;
      background: none;
    }

    .subscribe-overlay-logo {
      position: fixed;
      top: 23px;
      left: 30px;
      height: 30px;
    }

    .subscribe-overlay-title {
      display: inline-block;
      margin: 0 0 10px 0;
      font-size: 5.2rem;
      line-height: 1.15em;
    }

    .subscribe-overlay-description {
      margin: 0 auto 50px;
      max-width: 650px;
      color: #fff;
      font-size: 2.4rem;
      line-height: 1.3em;
      font-weight: 300;
      opacity: 0.8;
    }

    .subscribe-overlay form {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      max-width: 540px;
    }

    .subscribe-overlay .form-group {
      flex-grow: 1;
    }

    .subscribe-overlay .subscribe-email {
      display: block;
      padding: 14px 20px;
      width: 100%;
      border: none;
      color: var(--midgrey);
      font-size: 2rem;
      line-height: 1em;
      font-weight: normal;
      letter-spacing: 0.5px;
      user-select: text;
      border-radius: 8px;
      transition: border-color 0.15s linear;

      -webkit-appearance: none;
    }

    .subscribe-email:focus {
      outline: 0;
    }

    .subscribe-overlay button {
      display: inline-block;
      margin: 0 0 0 15px;
      padding: 0 25px;
      height: 52px;
      outline: none;
      color: #fff;
      font-size: 1.7rem;
      line-height: 38px;
      font-weight: 400;
      text-align: center;

      border-radius: 8px;

      -webkit-font-smoothing: subpixel-antialiased;
    }

    .subscribe-overlay button:active,
    .subscribe-overlay button:focus {
    }

    .subscribe-overlay .loading .button-loader {
      top: 5px;
    }

    /* 11. Site Footer
/* ---------------------------------------------------------- */

    .site-footer {
      position: relative;
      padding-top: 20px;
      padding-bottom: 60px;
      color: #fff;
    }

    .site-footer-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.3rem;
    }

    .site-footer-content a {
      color: rgba(255, 255, 255, 0.7);
    }

    .site-footer-content a:hover {
      color: rgba(255, 255, 255, 1);
      text-decoration: none;
    }

    .site-footer-nav {
      display: flex;
    }

    .site-footer-nav a {
      position: relative;
      margin-left: 20px;
    }

    .site-footer-nav a:before {
      content: "";
      position: absolute;
      top: 11px;
      left: -11px;
      display: block;
      width: 2px;
      height: 2px;
      background: #fff;
      border-radius: 100%;
    }

    .site-footer-nav a:first-of-type:before {
      display: none;
    }

    @media (max-width: 650px) {
      .site-footer-content {
        flex-direction: column;
      }

      .site-footer-nav a:first-child {
        margin-left: 0;
      }
    }

    /* 12. Dark Mode
/* ---------------------------------------------------------- */
    @media (prefers-color-scheme: dark) {
      body {
        color: rgba(255, 255, 255, 0.75);
        background: var(--darkmode);
      }

      img {
        opacity: 0.9;
      }

      .site-header-background:before {
        background: rgba(0, 0, 0, 0.6);
      }

      .post-feed {
        background: var(--darkmode);
      }

      .post-card,
      .post-card:hover {
      }

      .author-profile-image {
        background: var(--darkmode);
      }

      .post-card-byline-content a {
        color: rgba(255, 255, 255, 0.75);
      }

      .post-card-byline-content a:hover {
        color: #fff;
      }

      .post-card-image {
        background: var(--darkmode);
      }

      .post-card-title {
        color: rgba(255, 255, 255, 0.85);
      }

      .post-card-excerpt {
      }

      .author-avatar,
      .static-avatar {
      }

      .site-main,
      .post-template .site-main,
      .page-template .site-main {
        background: var(--darkmode);
      }

      .post-full-content {
        background: var(--darkmode);
      }

      .post-full-title {
        color: rgba(255, 255, 255, 0.9);
      }

      .post-full-custom-excerpt {
      }

      .post-full-byline-meta h4 a {
        color: rgba(255, 255, 255, 0.75);
      }

      .post-full-byline-meta h4 a:hover {
        color: #fff;
      }

      .author-list-item .author-card {
        box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
      }

      .author-list-item .author-card:before {
      }

      .no-image .author-social-link a {
        color: rgba(255, 255, 255, 0.75);
      }

      .post-full-content h1,
      .post-full-content h2,
      .post-full-content h3,
      .post-full-content h4,
      .post-full-content h6 {
        color: rgba(255, 255, 255, 0.9);
      }

      .post-full-content a {
        color: #fff;
        box-shadow: inset 0 -1px 0 #fff;
      }

      .post-full-content strong {
        color: #fff;
      }

      .post-full-content em {
        color: #fff;
      }

      .post-full-content code {
        color: #fff;
        background: #000;
      }

      hr {
      }

      .post-full-content figcaption {
        color: rgba(255, 255, 255, 0.6);
      }

      .post-full-content table th {
        color: rgba(255, 255, 255, 0.85);
      }

      .post-full-content table th,
      .post-full-content table td {
      }

      .post-full-content .kg-bookmark-container,
      .post-full-content .kg-bookmark-container:hover {
        color: rgba(255, 255, 255, 0.75);
        box-shadow: 0 0 1px rgba(255, 255, 255, 0.9);
      }

      .kg-bookmark-title {
        color: #fff;
      }

      .kg-bookmark-description {
        color: rgba(255, 255, 255, 0.75);
      }

      .kg-bookmark-metadata {
        color: rgba(255, 255, 255, 0.75);
      }

      .site-archive-header .no-image {
        color: rgba(255, 255, 255, 0.9);
        background: var(--darkmode);
      }

      .site-header-content .author-profile-image {
        box-shadow: 0 0 0 6px hsla(0, 0%, 100%, 0.04);
      }

      .subscribe-form-title {
        color: rgba(255, 255, 255, 0.9);
      }

      .subscribe-form p {
        color: rgba(255, 255, 255, 0.7);
      }

      .subscribe-email {
        color: rgba(255, 255, 255, 0.9);
      }

      .subscribe-email:focus {
      }

      .subscribe-form button {
        opacity: 0.9;
      }

      .subscribe-form .invalid .message-error,
      .subscribe-form .error .message-error {
      }

      .subscribe-form .success .message-success {
      }
    }
  }
`;
