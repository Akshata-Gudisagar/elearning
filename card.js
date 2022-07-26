var dataSet = [
  ['28900', 'Angular', '2 weeks', '19/09/2021'],
  ['28901', 'React-js', '3 weeks', '19/09/2021'],
  ['28902', 'Html', '2 weeks', '19/10/2021'],
  ['28903', 'Css', '1 weeks', '20/09/2021'],
  ['28904', 'Javascript', '2 weeks', '19/10/2021'],
  ['28905', 'Sql', '2 weeks', '19/04/2021'],
  ['28906', 'Dotnet', '4 weeks', '19/01/2022'],
  ['28907', 'Java', '7 weeks', '19/04/2022'],
  ['28908', 'Python', '5 weeks', '19/12/2021'],
  ['28909', 'Azure', '4 weeks', '01/07/2021'],
  ['28910', 'MERN', '2 weeks', '19/02/2021'],
  ['28911', 'Automation', '4 weeks', '19/05/2021'],
  ['28912', 'Manual testing', '2 weeks', '07/09/2021']    
];
$(document).ready(function () {
  $('#sortTable').DataTable({
      data: dataSet,
      columns: [
          { title: 'Course Id' },
          { title: 'Course Name' },
          { title: 'Course Duration' },
          {title: 'Join Date'}
      ],
  });
});