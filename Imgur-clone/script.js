function getData() {
    fetch(
      "https://api.unsplash.com/photos/?per_page=30&client_id=sDrllNxKImS7J7kIF6OPpN4lj1jFy-avcWH5tlGtH-4"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let data1 = "";
        data.map((values) => {
          data1 += `<div>
        <div>
          <img
            width="100%"
            height="320px"
            src=${values.urls.small_s3}
            alt=""
          />
        </div>
        <div class="inflex">
          <p>${values.likes}</p>
          <p>${values.user.username}</p>
        </div>
      </div>`;
        });
        document.getElementById("imgDiv").innerHTML = data1;
      });
  }

  function getTags() {
    fetch(
      "https://api.unsplash.com/collections?page=10&client_id=sDrllNxKImS7J7kIF6OPpN4lj1jFy-avcWH5tlGtH-4"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let data2 = "";
        data.map((values) => {
          data2 += `<div>
          <img
            height="90px"
            width="100%"
            src=${values.preview_photos[0].urls.raw}
            alt=""
          />
          <div class="categ">${values.title}</div>
          <div class="categ">total photos</div>
        </div>`;
        });
        document.getElementById("tagdiv").innerHTML = data2;
      });
  }

  getData();
  getTags();