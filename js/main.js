const links = [
  {
    label: "Week1 projects/notes ",
    url: 'week1/index.html'
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