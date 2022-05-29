const links = [
  {
    label: "Week 1 projects/notes ",
    url: 'week1/index.html'
  },
  {
    label: "Week 2 projects/notes ",
    url: 'week2/index.html'
  },
  {
    label: "Week 3 projects/notes ",
    url: 'week3/index.html'
  },
  {
    label: "Week 4 projects/notes ",
    url: 'week4/index.html'
  },
  {
    label: "Week 5 projects/notes ",
    url: 'week5/index.html'
  },
  {
    label: "Week 6: Todo App",
    url: 'todoList/index.html'
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