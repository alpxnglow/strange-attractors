/* ============================================================
   STRANGE ATTRACTORS
============================================================ */


/* ------------------------------------------------------------
   EPISODE DATA
------------------------------------------------------------ */

const episodes = [
  {
    number: "01",
    title: "what makes a tune memorable?",
    date: "2023",
    audio: "audio/episode-01.mp3",
    artwork: "assets/cover.jpg",
    transcript: "transcripts/episode-01.txt"
  },

  {
    number: "02",
    title: "how plastic trash created china's rock movement",
    date: "2024",
    audio: "audio/episode-02.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },

  {
    number: "03",
    title: "the truth about your donated clothes",
    date: "2024",
    audio: "audio/episode-03.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },
  {
    number: "04",
    title: "fate & the probabilistic model of the universe",
    date: "2024",
    audio: "audio/episode-04.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },

  {
    number: "05",
    title: "peter singer's drowning child",
    date: "2024",
    audio: "audio/episode-05.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },

  {
    number: "06",
    title: "on traffic, starlings, & fungi",
    date: "2024",
    audio: "audio/episode-06.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },
  {
    number: "07",
    title: "can dreams be explained by machine learning?",
    date: "2024",
    audio: "audio/episode-07.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },

  {
    number: "08",
    title: "is the internet already dead?",
    date: "2025",
    audio: "audio/episode-08.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },

  {
    number: "09",
    title: "the romanticization of the american frontier",
    date: "2025",
    audio: "audio/episode-09.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },
  {
    number: "10",
    title: "the nightmare of AI media literacy",
    date: "2025",
    audio: "audio/episode-10.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },

  {
    number: "11",
    title: "the microsoft sound",
    date: "2025",
    audio: "audio/episode-11.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },

  {
    number: "12",
    title: "design trends: machine aesthetics",
    date: "2025",
    audio: "audio/episode-12.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },
  {
    number: "13",
    title: "the history of GIFs",
    date: "2025",
    audio: "audio/episode-13.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },

  {
    number: "14",
    title: "14",
    date: "2025",
    audio: "audio/episode-14.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },

  {
    number: "15",
    title: "15",
    date: "2025",
    audio: "audio/episode-15.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },
  {
    number: "16",
    title: "16",
    date: "2026",
    audio: "audio/episode-16.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },

  {
    number: "17",
    title: "17",
    date: "2026",
    audio: "audio/episode-17.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },

  {
    number: "18",
    title: "18",
    date: "2026",
    audio: "audio/episode-18.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },
  {
    number: "19",
    title: "19",
    date: "2026",
    audio: "audio/episode-19.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },

  {
    number: "20",
    title: "20",
    date: "2026",
    audio: "audio/episode-20.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },

  {
    number: "21",
    title: "21",
    date: "2026",
    audio: "audio/episode-21.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },
  {
    number: "22",
    title: "did chatgpt just commit a felony?",
    date: "2026",
    audio: "audio/episode-22.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },

  {
    number: "23",
    title: "23",
    date: "2026",
    audio: "audio/episode-23.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  },

  {
    number: "24",
    title: "24",
    date: "2026",
    audio: "audio/episode-24.mp3",
    artwork: "assets/cover.jpg",
    transcript: "no"
  }
];


/* ------------------------------------------------------------
   BLOG DATA
------------------------------------------------------------ */

const blogPosts = [
  {
    number: "01",
    title: "a reflection on the scale of evolution",
    date: "2025",
    file: "blogs/blog-01.txt"
  },

  {
    number: "02",
    title: "an interview with my host father",
    date: "2025",
    file: "blogs/blog-02.txt"
  }
];


/* ------------------------------------------------------------
   ELEMENTS
------------------------------------------------------------ */

const audio =
  document.getElementById("audio");

const episodeList =
  document.getElementById("episodeList");

const blogList =
  document.getElementById("blogList");

const playPauseButton =
  document.getElementById("playPauseButton");

const rewindButton =
  document.getElementById("rewindButton");

const forwardButton =
  document.getElementById("forwardButton");

const progressBar =
  document.getElementById("progressBar");

const currentTimeDisplay =
  document.getElementById("currentTime");

const durationDisplay =
  document.getElementById("duration");

const speedControl =
  document.getElementById("speedControl");

const playerArtwork =
  document.getElementById("playerArtwork");

const playerTitle =
  document.getElementById("playerTitle");

const heroPlayButton =
  document.getElementById("heroPlayButton");

const playerShell =
  document.getElementById("playerShell");

const episodeScrollHint =
  document.getElementById("episodeScrollHint");


/* ------------------------------------------------------------
   STATE
------------------------------------------------------------ */

let currentEpisodeIndex = null;

let openTranscriptIndex = null;

let openBlogIndex = null;

let userIsSeeking = false;


/* ------------------------------------------------------------
   PLAYBACK SPEED
------------------------------------------------------------ */

const playbackSpeeds = [
  0.75,
  1,
  1.25,
  1.5,
  1.75,
  2
];

let currentSpeedIndex = 1;


/* ============================================================
   EPISODES
============================================================ */


/* ------------------------------------------------------------
   RENDER EPISODES
------------------------------------------------------------ */

function renderEpisodes() {

  episodeList.innerHTML = "";

  episodes.forEach((episode, index) => {

    const article =
      document.createElement("article");

    article.className = "episode";

    article.dataset.index = index;

    article.setAttribute(
      "aria-expanded",
      "false"
    );


    article.innerHTML = `
      <div class="episode-number">
        EP. ${episode.number}
      </div>

      <div class="episode-info">

        <h3>
          ${episode.title}
        </h3>

        <div class="episode-meta">

          <span>
            ${episode.date}
          </span>

          <span class="transcript-hint">
            click for transcript
          </span>

        </div>

      </div>

      <button
        class="episode-play-button"
        aria-label="Play ${episode.title}"
        data-index="${index}"
      >
        ▶
      </button>

      <div class="episode-transcript">

        <div class="episode-transcript-inner">

          <div class="transcript-label">
            TRANSCRIPT
          </div>

          <div class="episode-transcript-text"></div>

        </div>

      </div>
    `;


    /*
      Clicking anywhere in the row
      except the play button toggles
      the transcript.
    */

    article.addEventListener(
      "click",
      event => {

        if (
          event.target.closest(
            ".episode-play-button"
          )
        ) {
          return;
        }

        toggleTranscript(index);

      }
    );


    /*
      Play button
    */

    const playButton =
      article.querySelector(
        ".episode-play-button"
      );

    playButton.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        toggleEpisode(index);

      }
    );


    episodeList.appendChild(
      article
    );

  });

}


/* ------------------------------------------------------------
   OPEN / CLOSE TRANSCRIPT
------------------------------------------------------------ */

async function toggleTranscript(index) {

  const episodeElements =
    document.querySelectorAll(
      ".episode"
    );

  const clickedEpisode =
    episodeElements[index];

  const wasAlreadyOpen =
    openTranscriptIndex === index;


  /*
    Close every transcript.
  */

  episodeElements.forEach(episode => {

    episode.classList.remove(
      "transcript-open"
    );

    episode.setAttribute(
      "aria-expanded",
      "false"
    );


    const hint =
      episode.querySelector(
        ".transcript-hint"
      );

    if (hint) {
      hint.textContent =
        "click for transcript";
    }

  });


  /*
    Clicking the currently open
    episode simply closes it.
  */

  if (wasAlreadyOpen) {

    openTranscriptIndex = null;

    return;

  }


  /*
    Open selected transcript.
  */

  clickedEpisode.classList.add(
    "transcript-open"
  );

  clickedEpisode.setAttribute(
    "aria-expanded",
    "true"
  );


  const hint =
    clickedEpisode.querySelector(
      ".transcript-hint"
    );

  if (hint) {

    hint.textContent =
      "click to close transcript";

  }


  openTranscriptIndex = index;


  const transcriptBox =
    clickedEpisode.querySelector(
      ".episode-transcript-text"
    );


  /*
    Don't reload if already loaded.
  */

  if (
    transcriptBox.dataset.loaded
  ) {
    return;
  }


  const transcriptSource =
    episodes[index].transcript;


  /*
    No transcript available.
  */

  if (
    !transcriptSource ||
    transcriptSource === "no"
  ) {

    transcriptBox.textContent =
      "Transcript unavailable.";

    transcriptBox.dataset.loaded =
      "true";

    return;

  }


  /*
    Load .txt transcript.
  */

  if (
    transcriptSource
      .toLowerCase()
      .endsWith(".txt")
  ) {

    transcriptBox.textContent =
      "Loading transcript…";


    try {

      const response =
        await fetch(
          transcriptSource
        );


      if (!response.ok) {

        throw new Error(
          "Transcript could not be loaded."
        );

      }


      const text =
        await response.text();


      transcriptBox.textContent =
        text;

      transcriptBox.dataset.loaded =
        "true";


    } catch (error) {

      transcriptBox.textContent =
        "Transcript unavailable.";

      console.error(error);

    }


    return;

  }


  /*
    Otherwise allow inline transcript
    text if you ever want to use it.
  */

  transcriptBox.textContent =
    transcriptSource;

  transcriptBox.dataset.loaded =
    "true";

}


/* ============================================================
   BLOG
============================================================ */


/* ------------------------------------------------------------
   RENDER BLOG POSTS
------------------------------------------------------------ */

function renderBlogPosts() {

  blogList.innerHTML = "";


  blogPosts.forEach((post, index) => {

    const article =
      document.createElement("article");

    article.className =
      "blog-post";

    article.dataset.index =
      index;

    article.setAttribute(
      "aria-expanded",
      "false"
    );


    article.innerHTML = `
      <div class="blog-number">
        ${post.number}
      </div>

      <div class="blog-info">

        <h3>
          ${post.title}
        </h3>

        <div class="blog-meta">

          <span>
            ${post.date}
          </span>

          <span class="blog-hint">
            click to read
          </span>

        </div>

      </div>

      <div class="blog-plus">
        +
      </div>

      <div class="blog-content">

        <div class="blog-content-inner">

          <div class="blog-content-text"></div>

        </div>

      </div>
    `;


    article.addEventListener(
      "click",
      () => {

        toggleBlogPost(index);

      }
    );


    blogList.appendChild(
      article
    );

  });

}


/* ------------------------------------------------------------
   OPEN / CLOSE BLOG POST
------------------------------------------------------------ */

async function toggleBlogPost(index) {

  const postElements =
    document.querySelectorAll(
      ".blog-post"
    );

  const clickedPost =
    postElements[index];

  const wasAlreadyOpen =
    openBlogIndex === index;


  /*
    Close every post first.
  */

  postElements.forEach(post => {

    post.classList.remove(
      "blog-open"
    );

    post.setAttribute(
      "aria-expanded",
      "false"
    );


    const hint =
      post.querySelector(
        ".blog-hint"
      );

    const plus =
      post.querySelector(
        ".blog-plus"
      );


    if (hint) {

      hint.textContent =
        "click to read";

    }


    if (plus) {

      plus.textContent =
        "+";

    }

  });


  /*
    Clicking open post closes it.
  */

  if (wasAlreadyOpen) {

    openBlogIndex = null;

    return;

  }


  /*
    Open selected post.
  */

  clickedPost.classList.add(
    "blog-open"
  );

  clickedPost.setAttribute(
    "aria-expanded",
    "true"
  );


  const hint =
    clickedPost.querySelector(
      ".blog-hint"
    );

  const plus =
    clickedPost.querySelector(
      ".blog-plus"
    );


  if (hint) {

    hint.textContent =
      "click to close";

  }


  if (plus) {

    plus.textContent =
      "−";

  }


  openBlogIndex = index;


  /*
    Load post.
  */

  const contentBox =
    clickedPost.querySelector(
      ".blog-content-text"
    );


  if (
    contentBox.dataset.loaded
  ) {
    return;
  }


  contentBox.textContent =
    "Loading…";


  try {

    const response =
      await fetch(
        blogPosts[index].file
      );


    if (!response.ok) {

      throw new Error(
        "Blog post could not be loaded."
      );

    }


    const text =
      await response.text();


    contentBox.textContent =
      text;

    contentBox.dataset.loaded =
      "true";


  } catch (error) {

    contentBox.textContent =
      "Post unavailable.";

    console.error(error);

  }

}


/* ============================================================
   AUDIO PLAYER
============================================================ */


/* ------------------------------------------------------------
   LOAD EPISODE
------------------------------------------------------------ */

function loadEpisode(
  index,
  autoplay = false
) {

  if (
    index < 0 ||
    index >= episodes.length
  ) {
    return;
  }


  const episode =
    episodes[index];


  playerShell.classList.add(
    "visible"
  );


  currentEpisodeIndex =
    index;


  audio.src =
    episode.audio;


  playerArtwork.src =
    episode.artwork;


  playerArtwork.alt =
    `${episode.title} artwork`;


  playerTitle.textContent =
    episode.title;


  audio.playbackRate =
    playbackSpeeds[
      currentSpeedIndex
    ];


  /*
    Restore saved listening position.
  */

  const savedPosition =
    localStorage.getItem(
      `strange-attractors-position-${index}`
    );


  audio.addEventListener(
    "loadedmetadata",

    function restoreProgress() {

      if (savedPosition) {

        const position =
          Number(savedPosition);


        if (
          position > 0 &&
          position <
            audio.duration - 10
        ) {

          audio.currentTime =
            position;

        }

      }


      audio.removeEventListener(
        "loadedmetadata",
        restoreProgress
      );

    }
  );


  updateActiveEpisode();


  if (autoplay) {

    audio
      .play()
      .catch(error => {

        console.log(
          "Playback prevented:",
          error
        );

      });

  }

}


/* ------------------------------------------------------------
   EPISODE PLAY BUTTON
------------------------------------------------------------ */

function toggleEpisode(index) {

  /*
    Same episode:
    play / pause.
  */

  if (
    currentEpisodeIndex === index &&
    audio.src
  ) {

    playerShell.classList.add(
      "visible"
    );

    togglePlayPause();

    return;

  }


  /*
    New episode:
    load and play.
  */

  loadEpisode(
    index,
    true
  );

}


/* ------------------------------------------------------------
   MAIN PLAY / PAUSE
------------------------------------------------------------ */

function togglePlayPause() {

  /*
    No episode selected yet:
    start episode 1.
  */

  if (
    currentEpisodeIndex === null
  ) {

    loadEpisode(
      0,
      true
    );

    return;

  }


  playerShell.classList.add(
    "visible"
  );


  if (audio.paused) {

    if (
      audio.duration &&
      audio.currentTime >=
        audio.duration - 0.25
    ) {

      audio.currentTime = 0;

    }


    audio.play();

  } else {

    audio.pause();

  }

}


/* ------------------------------------------------------------
   PLAY BUTTON ICONS
------------------------------------------------------------ */

function updatePlayButtons() {

  const isPlaying =
    !audio.paused;


  playPauseButton.textContent =
    isPlaying
      ? "❚❚"
      : "▶";


  playPauseButton.setAttribute(
    "aria-label",
    isPlaying
      ? "Pause"
      : "Play"
  );


  document
    .querySelectorAll(
      ".episode-play-button"
    )
    .forEach((button, index) => {

      if (
        index ===
          currentEpisodeIndex &&
        isPlaying
      ) {

        button.textContent =
          "❚❚";

      } else {

        button.textContent =
          "▶";

      }

    });

}


/* ------------------------------------------------------------
   ACTIVE EPISODE
------------------------------------------------------------ */

function updateActiveEpisode() {

  document
    .querySelectorAll(
      ".episode"
    )
    .forEach(
      (episode, index) => {

        episode.classList.toggle(
          "active",
          index ===
            currentEpisodeIndex
        );

      }
    );

}


/* ------------------------------------------------------------
   TIME
------------------------------------------------------------ */

function formatTime(seconds) {

  if (
    !Number.isFinite(seconds)
  ) {

    return "0:00";

  }


  const minutes =
    Math.floor(
      seconds / 60
    );


  const remainingSeconds =
    Math.floor(
      seconds % 60
    )
      .toString()
      .padStart(2, "0");


  return (
    `${minutes}:${remainingSeconds}`
  );

}


/* ------------------------------------------------------------
   PROGRESS
------------------------------------------------------------ */

function updateProgress() {

  if (!audio.duration) {
    return;
  }


  if (!userIsSeeking) {

    progressBar.value =
      (
        audio.currentTime /
        audio.duration
      ) * 100;

  }


  currentTimeDisplay.textContent =
    formatTime(
      audio.currentTime
    );


  durationDisplay.textContent =
    formatTime(
      audio.duration
    );


  /*
    Save current listening position.
  */

  if (
    currentEpisodeIndex !== null
  ) {

    localStorage.setItem(
      `strange-attractors-position-${currentEpisodeIndex}`,
      audio.currentTime
    );

  }

}


/* ------------------------------------------------------------
   SCRUBBING
------------------------------------------------------------ */

progressBar.addEventListener(
  "input",
  () => {

    userIsSeeking = true;


    if (!audio.duration) {
      return;
    }


    const previewTime =
      (
        progressBar.value /
        100
      ) * audio.duration;


    currentTimeDisplay.textContent =
      formatTime(
        previewTime
      );

  }
);


progressBar.addEventListener(
  "change",
  () => {

    if (!audio.duration) {

      userIsSeeking = false;

      return;

    }


    audio.currentTime =
      (
        progressBar.value /
        100
      ) * audio.duration;


    userIsSeeking = false;

  }
);


/* ------------------------------------------------------------
   ±15 SECONDS
------------------------------------------------------------ */

rewindButton.addEventListener(
  "click",
  () => {

    audio.currentTime =
      Math.max(
        audio.currentTime - 15,
        0
      );

  }
);


forwardButton.addEventListener(
  "click",
  () => {

    audio.currentTime =
      Math.min(
        audio.currentTime + 15,
        audio.duration || Infinity
      );

  }
);


/* ------------------------------------------------------------
   PLAYBACK SPEED
------------------------------------------------------------ */

function formatSpeed(speed) {

  return `${speed}×`;

}


function setPlaybackSpeed(speed) {

  const matchingIndex =
    playbackSpeeds.indexOf(
      speed
    );


  currentSpeedIndex =
    matchingIndex >= 0
      ? matchingIndex
      : 1;


  const selectedSpeed =
    playbackSpeeds[
      currentSpeedIndex
    ];


  audio.playbackRate =
    selectedSpeed;


  speedControl.textContent =
    formatSpeed(
      selectedSpeed
    );


  localStorage.setItem(
    "strange-attractors-speed",
    selectedSpeed
  );

}


/*
  Restore saved speed.
*/

const savedSpeed =
  Number(
    localStorage.getItem(
      "strange-attractors-speed"
    )
  );


if (
  playbackSpeeds.includes(
    savedSpeed
  )
) {

  setPlaybackSpeed(
    savedSpeed
  );

} else {

  setPlaybackSpeed(1);

}


/*
  Clicking speed pill cycles speed.
*/

speedControl.addEventListener(
  "click",
  () => {

    currentSpeedIndex =
      (
        currentSpeedIndex + 1
      ) %
      playbackSpeeds.length;


    setPlaybackSpeed(
      playbackSpeeds[
        currentSpeedIndex
      ]
    );

  }
);


/* ------------------------------------------------------------
   HERO BUTTON
------------------------------------------------------------ */

heroPlayButton.addEventListener(
  "click",
  () => {

    toggleEpisode(0);

  }
);


/* ------------------------------------------------------------
   PLAYER PLAY BUTTON
------------------------------------------------------------ */

playPauseButton.addEventListener(
  "click",
  togglePlayPause
);


/* ------------------------------------------------------------
   AUDIO EVENTS
------------------------------------------------------------ */

audio.addEventListener(
  "play",
  updatePlayButtons
);


audio.addEventListener(
  "pause",
  updatePlayButtons
);


audio.addEventListener(
  "timeupdate",
  updateProgress
);


audio.addEventListener(
  "loadedmetadata",
  updateProgress
);


/* ------------------------------------------------------------
   AUTO-ADVANCE
------------------------------------------------------------ */

audio.addEventListener(
  "ended",
  () => {

    if (
      currentEpisodeIndex === null
    ) {
      return;
    }


    const nextIndex =
      currentEpisodeIndex + 1;


    if (
      nextIndex <
      episodes.length
    ) {

      loadEpisode(
        nextIndex,
        true
      );

    } else {

      updatePlayButtons();

    }

  }
);


/* ------------------------------------------------------------
   KEYBOARD SHORTCUTS
------------------------------------------------------------ */

document.addEventListener(
  "keydown",
  event => {

    const target =
      event.target;


    if (
      target instanceof Element &&
      target.closest(
        "input, textarea, button, select, a"
      )
    ) {
      return;
    }


    /*
      SPACE = play/pause
    */

    if (
      event.code === "Space"
    ) {

      event.preventDefault();

      togglePlayPause();

    }


    /*
      LEFT = -15 sec
    */

    if (
      event.code === "ArrowLeft"
    ) {

      audio.currentTime =
        Math.max(
          audio.currentTime - 15,
          0
        );

    }


    /*
      RIGHT = +15 sec
    */

    if (
      event.code === "ArrowRight"
    ) {

      audio.currentTime =
        Math.min(
          audio.currentTime + 15,
          audio.duration || Infinity
        );

    }

  }
);


/* ------------------------------------------------------------
   MEDIA SESSION
------------------------------------------------------------ */

function updateMediaSession() {

  if (
    currentEpisodeIndex === null ||
    !("mediaSession" in navigator) ||
    !("MediaMetadata" in window)
  ) {

    return;

  }


  const episode =
    episodes[
      currentEpisodeIndex
    ];


  navigator.mediaSession.metadata =
    new MediaMetadata({

      title:
        episode.title,

      artist:
        "Strange Attractors",

      album:
        "Strange Attractors",

      artwork: [
        {
          src:
            episode.artwork,

          sizes:
            "512x512",

          type:
            "image/jpeg"
        }
      ]

    });

}


audio.addEventListener(
  "play",
  updateMediaSession
);


function setMediaHandler(
  action,
  handler
) {

  if (
    !("mediaSession" in navigator)
  ) {
    return;
  }


  try {

    navigator.mediaSession
      .setActionHandler(
        action,
        handler
      );

  } catch (error) {

    /*
      Unsupported browser action.
    */

  }

}


setMediaHandler(
  "play",
  () => audio.play()
);


setMediaHandler(
  "pause",
  () => audio.pause()
);


setMediaHandler(
  "seekbackward",
  () => {

    audio.currentTime =
      Math.max(
        audio.currentTime - 15,
        0
      );

  }
);


setMediaHandler(
  "seekforward",
  () => {

    audio.currentTime =
      Math.min(
        audio.currentTime + 15,
        audio.duration || Infinity
      );

  }
);


/* ============================================================
   INITIALIZE
============================================================ */

renderEpisodes();

if (episodes.length <= 3) {
  episodeScrollHint.classList.add("hidden");
}

renderBlogPosts();

updatePlayButtons();