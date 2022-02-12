fetch("data.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

/* const getData = async function (timeFrame) {
  try {
    const response = await fetch(`data.json`);
    const data = response.json();
  } catch (error) {
    alert(error);
  }
}; */

const renderHTML = async function () {
  const userDiv = document.querySelector(".user");

  try {
    const response = await fetch(`data.json`);
    const data = await response.json();

    console.log(data);

    const currentTimeWork = "32hrs";
    const currentTimePlay = "32hrs";
    const currentTimeStudy = "32hrs";
    const currentTimeExercise = "32hrs";
    const currentTimeSocial = "32hrs";
    const currentTimeSelfCare = "32hrs";

    const timeframe = "monthly";

    const html = `<div class="column col-1">
        <div class="work-block stats-block">
          <div class="img-container work-img">
            <img src="images/icon-work.svg" alt="work" class="stats-icon" />
          </div>
          <div class="stats-text">
            <p class="title">
              <span class="heading">${data[0].title}</span><span class="menu">...</span>
            </p>
            <h2 class="current-time">${data[0].timeframes[timeframe].current}hrs</h2>
            <p class="previous-time">
              <span class="timeframe">Last Week - </span
              ><span class="previous-time-text">${data[0].timeframes[timeframe].current}hrs</span>
            </p>
          </div>
        </div>
        <div class="exercise-block stats-block">
          <div class="img-container exercise-img">
            <img src="images/icon-exercise.svg" alt="work" class="stats-icon" />
          </div>
          <div class="stats-text">
            <p class="title">
              <span class="heading">${data[3].title}</span><span class="menu">...</span>
            </p>
            <h2 class="current-time">${data[3].timeframes[timeframe].current}hrs</h2>
            <p class="previous-time">
              <span class="timeframe">Last Week - </span
              ><span class="previous-time-text">${data[3].timeframes[timeframe].current}hrs</span>
            </p>
          </div>
        </div>
      </div>
      <div class="column col-2">
        <div class="play-block stats-block">
          <div class="img-container play-img">
            <img src="images/icon-play.svg" alt="work" class="stats-icon" />
          </div>
          <div class="stats-text">
            <p class="title">
              <span class="heading">${data[1].title}</span><span class="menu">...</span>
            </p>
            <h2 class="current-time">${data[1].timeframes[timeframe].current}hrs</h2>
            <p class="previous-time">
              <span class="timeframe">Last Week - </span
              ><span class="previous-time-text">${data[1].timeframes[timeframe].current}hrs</span>
            </p>
          </div>
        </div>
        <div class="social-block stats-block">
          <div class="img-container social-img">
            <img src="images/icon-social.svg" alt="work" class="stats-icon" />
          </div>
          <div class="stats-text">
            <p class="title">
              <span class="heading">${data[4].title}</span><span class="menu">...</span>
            </p>
            <h2 class="current-time">${data[4].timeframes[timeframe].current}hrs</h2>
            <p class="previous-time">
              <span class="timeframe">Last Week - </span
              ><span class="previous-time-text">${data[4].timeframes[timeframe].current}hrs</span>
            </p>
          </div>
        </div>
      </div>
      <div class="column col-3">
        <div class="study-block stats-block">
          <div class="img-container study-img">
            <img src="images/icon-study.svg" alt="work" class="stats-icon" />
          </div>
          <div class="stats-text">
            <p class="title">
              <span class="heading">${data[2].title}</span><span class="menu">...</span>
            </p>
            <h2 class="current-time">${data[2].timeframes[timeframe].current}hrs</h2>
            <p class="previous-time">
              <span class="timeframe">Last Week - </span
              ><span class="previous-time-text">${data[2].timeframes[timeframe].current}hrs</span>
            </p>
          </div>
        </div>
        <div class="self-care-block stats-block">
          <div class="img-container self-care-img">
            <img
              src="images/icon-self-care.svg"
              alt="work"
              class="stats-icon"
            />
          </div>
          <div class="stats-text">
            <p class="title">
              <span class="heading">${data[5].title}</span
              ><span class="menu">...</span>
            </p>
            <h2 class="current-time">${data[5].timeframes[timeframe].current}hrs</h2>
            <p class="previous-time">
              <span class="timeframe">Last Week - </span
              ><span class="previous-time-text">${data[5].timeframes[timeframe].current}hrs</span>
            </p>
          </div>
        </div>
      </div>`;

    userDiv.insertAdjacentHTML("afterend", html);
  } catch (err) {
    alert(err.message);
  }
};

renderHTML();
