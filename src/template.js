const newManager = function (manager) {
    return `
    <div class="column is-one-quarter-desktop">
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">${manager.name}</p>
                </div>
            </div>
            <div class="content">
                <p>${manager.id}<br />
                ${manager.email}<br />
                ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
</div>
    `;
}


const newEngineer = function (engineer) {
    return `
    <div class="column is-one-quarter-desktop">
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">${engineer.name}</p>
                </div>
            </div>
            <div class="content">
                <p>${engineer.name}<br />
                ${engineer.email}<br />
                ${engineer.github}</p>
            </div>
        </div>
    </div>
</div>
    `
}

const newIntern = function (intern) {
    return `
    <div class="column is-one-quarter-desktop">
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">${intern.name}</p>
                </div>
            </div>
            <div class="content">
                <p>${intern.id}<br />
                ${intern.email}<br />
                ${intern.school}</p>
            </div>
        </div>
    </div>
</div>
    `
};

generateCard = (data) => {

    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        if (role === 'Manager') {
            const managerCard = newManager(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = newEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = newIntern(employee);

            pageArray.push(internCard);
        }
        
    }

    const employeeCards = pageArray.join('')

    const createTeam = createTeamPage(employeeCards); 
    return createTeam;

}


const createTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
}


module.exports = generateCard; 