let navbar = document.querySelector(".header .flex .navbar");

const jobData = [
  { id: 1, title: "Software Engineer", company: "TechCo", location: "CityA" },
  { id: 2, title: "Data Scientist", company: "DataTech", location: "CityB" },
  { id: 3, title: "UX Designer", company: "DesignStudio", location: "CityC" },
  {
    id: 4,
    title: "Frontend Developer",
    company: "WebSolutions",
    location: "CityD",
  },
  {
    id: 5,
    title: "Backend Developer",
    company: "CodeCrafters",
    location: "CityE",
  },
  {
    id: 6,
    title: "Product Manager",
    company: "InnovateCorp",
    location: "CityF",
  },
  {
    id: 7,
    title: "Network Engineer",
    company: "ConnectivityTech",
    location: "CityG",
  },
  {
    id: 8,
    title: "Marketing Specialist",
    company: "PromoMasters",
    location: "CityH",
  },
  {
    id: 9,
    title: "Financial Analyst",
    company: "FinanceExperts",
    location: "CityI",
  },
  {
    id: 10,
    title: "Customer Support Representative",
    company: "SupportHub",
    location: "CityJ",
  },
];

[...document.querySelectorAll(".search-job")].forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const search = e.target.search.value.toLowerCase();
    const jobs = jobData.filter(
      (job) =>
        job.title.toLowerCase().indexOf(search) > -1 ||
        job.company.toLowerCase().indexOf(search) > -1 ||
        job.location.toLowerCase().indexOf(search) > -1
    );
    [...document.querySelectorAll(".search-job-list")].forEach((ul) => {
      //   ul.style.backgroundColor = jobs.length > 0 ? "white" : "transparent";
      if (search) {
        ul.innerHTML = jobs
          .map((job) => `<li style="margin: 1rem;">${job.title}</li>`)
          .join("\n");
      } else {
        ul.innerHTML = null;
      }
    });
  });
});

document
  .getElementById("search-job-filter")
  .addEventListener("submit", (form) => {
    form.preventDefault();
    const data = form.target;
    const jobs = jobData.filter(
      (job) =>
        (job.title.toLowerCase().indexOf(data.title.value.toLowerCase()) > -1 ||
          job.company.toLowerCase().indexOf(data.title.value.toLowerCase()) >
            -1) &&
        job.location.toLowerCase().indexOf(data.location.value.toLowerCase()) >
          -1
    );
    if (data.title.value.toLowerCase() || data.location.value.toLowerCase()) {
      document.getElementById("search-job-list").innerHTML = jobs
        .map(
          (job) => `<li style="margin: 1rem;font-size: 2rem;">${job.title}</li>`
        )
        .join("\n");
    } else {
      document.getElementById("search-job-list").innerHTML = "";
    }
  });

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

document.querySelectorAll('input[type = "number"]').forEach((inputNumber) => {
  inputNumber.oninput = () => {
    if (inputNumber.value.length > inputNumber.maxLength)
      inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
  };
});
