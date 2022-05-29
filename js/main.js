const links = [
  {
    label: "Week1 projects/notes ",
    url: 'week1/index.html'
  },
  {
    label: "Week2 projects/notes ",
    url: 'week2/index.html'
  },
  {
    label: "Week3 projects/notes ",
    url: 'week3/index.html'
  },
  {
    label: "Week4 projects/notes ",
    url: 'week4/index.html'
  },
  {
    label: "Week5 projects/notes ",
    url: 'week5/index.html'
  },
  {
    label: "Week6: Todo App",
    url: 'week6/index.html'
  }
]

// const orderedList = document.querySelector('ol');

function assignmentList(assignments) {
  assignments.forEach(assignment => {
    let week = document.createElement('li');
    week.textContent = assignment.label;

    let link = document.createElement('a');
    link.setAttribute('href', assignment.url);
    link.textContent = assignment.label;

    week.appendChild(link);

    document.querySelector('ol').appendChild(week);
  })

}

assignmentList(links);