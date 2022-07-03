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
          <div>Likes : ${values.likes}</div>
          <div>User : ${values.user.username}</div>
        </div>
      </div>`;
      });
      document.getElementById("imgDiv").innerHTML = data1;
    });
}

getData();
