#Video modal

This plugin adds video modal functionality using either YouTube or Wistia videos.

##Setup

1. _Dependencies:_ verify that the jQuery is included in your project.
2. Include **video-modal.js** in your JS directory.
3. Include **_video-modal.scss** or **video-modal.css** in your stylesheets.
4. Add the `data-video=""` attribute to the element you want to click to open the modal, with your video type inside the `""`. Choose either `youtube` and `wistia`, depending on where your video is hosted. Refer to `video-modal-example.html` for reference.
5. Add the `data-video-id=""` attribute to the same element, and enter the video ID inside the `""`. Refer to `video-modal-example.html` for reference.
6. Run gulp, and the YouTube video modal will be up and running.